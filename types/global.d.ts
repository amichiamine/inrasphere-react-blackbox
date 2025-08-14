/// <reference types="node" />
/// <reference types="vite/client" />

/**
 * Global TypeScript shims for Node + Vite in VSCode.
 * These declarations help the editor resolve common globals and env vars.
 */

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'test';
    PORT?: string;
    SESSION_SECRET?: string;

    // Databases (optional)
    DATABASE_URL?: string; // PostgreSQL
    MYSQL_HOST?: string;
    MYSQL_PORT?: string;
    MYSQL_USER?: string;
    MYSQL_PASSWORD?: string;
    MYSQL_DATABASE?: string;

    // SMTP (optional)
    SMTP_ENABLED?: 'true' | 'false';
    SMTP_HOST?: string;
    SMTP_PORT?: string;
    SMTP_SECURE?: 'true' | 'false';
    SMTP_USER?: string;
    SMTP_PASS?: string;
    EMAIL_FROM?: string;

    // Uploads (optional)
    MAX_FILE_SIZE?: string;
    ALLOWED_FILE_TYPES?: string;
    STORAGE_TYPE?: 'local' | 'cloud';
    STORAGE_PATH?: string;
  }
}

interface ImportMetaEnv {
  readonly MODE: string;
  readonly BASE_URL: string;
  readonly PROD: boolean;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  /**
   * Non-standard helper sometimes used by build tools. Not part of the ESM spec.
   * Use fileURLToPath(import.meta.url) to compute __dirname in Node ESM.
   * Declared here only to prevent editor warnings if referenced.
   */
  readonly dirname?: string;
}

// Declarations for common asset imports (optional)
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.gif" {
  const src: string;
  export default src;
}
