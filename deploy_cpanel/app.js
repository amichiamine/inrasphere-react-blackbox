/**
 * Passenger entry for cPanel (CommonJS)
 * - Requires the prebuilt server bundle at dist/index.cjs
 * - Make sure to run: npm run build:all (or at least build:server:cjs) before deploying
 */
"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "production";

const path = require("path");
const fs = require("fs");

const entryCjs = path.resolve(__dirname, "dist", "index.cjs");

if (!fs.existsSync(entryCjs)) {
  console.error("[Passenger] dist/index.cjs not found.");
  console.error("Build the project first:");
  console.error("  npm run build:all");
  process.exit(1);
}

// Start the server (it listens on process.env.PORT or 5000)
require(entryCjs);

// Optional export for Passenger (not strictly required since the server boots on require)
module.exports = {};
