import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { configureSecurity, sanitizeInput, getSessionConfig } from "./middleware/security";
import { runMigrations } from "./migrations";
import { initializeWebSocket } from "./services/websocket";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import mysqlSession from "express-mysql-session";
import connectPgSimple from "connect-pg-simple";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Config uploads static path (created later on boot)
const storagePath = process.env.STORAGE_PATH || "server/public/uploads";
// Ensure directory exists (non-blocking)
void fs.mkdir(storagePath, { recursive: true }).catch(() => {});
app.use("/uploads", express.static(storagePath));

// Configure trust proxy - more restrictive for production security
// In Replit environment, only trust first proxy
if (process.env.NODE_ENV === 'development' && process.env.REPL_ID) {
  app.set('trust proxy', 1); // Trust only first proxy (Replit)
} else {
  app.set('trust proxy', false); // Disable in production for security
}

 // Configure security middleware
configureSecurity(app);

// Compression for responses
app.use(compression());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

// Input sanitization
app.use(sanitizeInput);

 // Session configuration with security
let sessionStore: session.Store | undefined;

if (process.env.MYSQL_HOST || process.env.MYSQL_USER || process.env.MYSQL_DATABASE) {
  const MySQLStore = (mysqlSession as any)(session);
  sessionStore = new MySQLStore({
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "intrasphere",
    createDatabaseTable: true,
    charset: "utf8mb4_bin",
  });
} else if (process.env.DATABASE_URL) {
  const PGStore = (connectPgSimple as any)(session);
  sessionStore = new PGStore({
    conString: process.env.DATABASE_URL,
    tableName: "session",
    schemaName: "public",
  });
}

app.use(session({ ...getSessionConfig(), store: sessionStore } as any));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

app.get("/healthz", (_req, res) => {
  res.json({ status: "ok" });
});

(async () => {
  // Run security migrations on startup
  await runMigrations();
  
  const server = await registerRoutes(app);

  // Initialize WebSocket after server creation (toggle with DISABLE_WS)
  if (process.env.DISABLE_WS !== 'true') {
    initializeWebSocket(server);
  } else {
    log('WebSocket disabled via DISABLE_WS=true');
  }

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });


  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);

  // Avoid SO_REUSEPORT on Windows (causes ENOTSUP). Keep it on Linux for better performance.
  const listenOptions: any =
    process.platform === 'win32'
      ? { port, host: '0.0.0.0' }
      : { port, host: '0.0.0.0', reusePort: true };

  server.listen(listenOptions, () => {
    const reuseInfo = (listenOptions as any).reusePort ? ' with reusePort' : '';
    const computedStoreType = (process.env.MYSQL_HOST || process.env.MYSQL_USER || process.env.MYSQL_DATABASE)
      ? 'mysql'
      : (process.env.DATABASE_URL ? 'postgres' : 'memory');
    log(`serving on port ${port}${reuseInfo}`);
    log(`uploads dir: ${path.resolve(storagePath)}`, "uploads");
    log(`session store: ${computedStoreType}`, "session");
  });
})();
