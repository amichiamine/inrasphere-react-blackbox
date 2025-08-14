/**
 * IntraSphere end-to-end API smoke tests (local dev)
 * - Keeps a simple cookie jar for session
 * - Exercises auth, basic lists, uploads (happy/error), and rate limiting
 * - Writes a compact JSON report to stdout
 *
 * Usage:
 *   node scripts/tests/smoke.mjs > tmp/tests.json
 */

import fs from 'node:fs/promises';
import path from 'node:path';

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:5000";
const OUT_FILE = process.env.TEST_OUTPUT || path.resolve(process.cwd(), 'tmp', 'tests.json');

let cookieJar = "";

/**
 * Fetch wrapper that:
 * - Sends current cookies
 * - Captures Set-Cookie for session persistence
 */
async function request(path, options = {}) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const headers = new Headers(options.headers || {});
  if (cookieJar) {
    headers.set("Cookie", cookieJar);
  }
  // default JSON for POST unless body already set
  const finalOptions = { redirect: "manual", ...options, headers };

  const res = await fetch(url, finalOptions);
  const setCookie = res.headers.get("set-cookie");
  if (setCookie) {
    // naive cookie jar: use latest Set-Cookie header(s)
    cookieJar = setCookie;
  }

  let bodyText = "";
  try {
    bodyText = await res.text();
  } catch {
    bodyText = "";
  }

  let json = null;
  let parseError = null;
  const ctype = res.headers.get("content-type") || "";
  if (ctype.includes("application/json")) {
    try {
      json = JSON.parse(bodyText || "{}");
    } catch (e) {
      parseError = String(e);
    }
  }

  return {
    url,
    status: res.status,
    ok: res.ok,
    headers: Object.fromEntries(res.headers),
    text: bodyText,
    json,
    parseError,
  };
}

function entry(name, res, extra = {}) {
  return {
    name,
    status: res.status,
    ok: res.ok,
    url: res.url,
    json: res.json,
    text: res.text && res.text.length > 500 ? res.text.slice(0, 500) + "…" : res.text,
    ...extra,
  };
}

/**
 * Main test flow
 */
(async () => {
  const results = [];
  const errors = [];

  // 1) /api/auth/me (non-auth) => 401
  try {
    const r1 = await request("/api/auth/me");
    results.push(entry("auth.me_unauth", r1));
  } catch (e) {
    errors.push({ step: "auth.me_unauth", error: String(e) });
  }

  // 2) login admin
  try {
    const loginBody = { username: "admin", password: "admin123!" };
    const r2 = await request("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginBody),
    });
    results.push(entry("auth.login_admin", r2));
  } catch (e) {
    errors.push({ step: "auth.login_admin", error: String(e) });
  }

  // 3) /api/auth/me (auth) => 200
  try {
    const r3 = await request("/api/auth/me");
    results.push(entry("auth.me_auth", r3));
  } catch (e) {
    errors.push({ step: "auth.me_auth", error: String(e) });
  }

  // 4) Lists
  for (const resPath of ["/api/announcements", "/api/documents", "/api/events"]) {
    try {
      const r = await request(resPath);
      results.push(entry(`list${resPath}`, r));
    } catch (e) {
      errors.push({ step: `list${resPath}`, error: String(e) });
    }
  }

  // 5) Upload success (spoof minimal PDF)
  let uploadedFileUrl = null;
  try {
    const fd = new FormData();
    const blob = new Blob(["%PDF-1.4 test"], { type: "application/pdf" });
    fd.append("file", blob, "test.pdf");

    const r = await request("/api/upload", {
      method: "POST",
      body: fd,
    });
    uploadedFileUrl = r?.json?.file?.fileUrl || null;
    results.push(entry("upload.success_pdf", r, { uploadedFileUrl }));
  } catch (e) {
    errors.push({ step: "upload.success_pdf", error: String(e) });
  }

  // 6) Upload invalid MIME (text/plain)
  try {
    const fdBad = new FormData();
    const blobBad = new Blob(["hello text"], { type: "text/plain" });
    fdBad.append("file", blobBad, "bad.txt");

    const r = await request("/api/upload", {
      method: "POST",
      body: fdBad,
    });
    results.push(entry("upload.invalid_mime", r));
  } catch (e) {
    errors.push({ step: "upload.invalid_mime", error: String(e) });
  }

  // 7) If uploadedFileUrl exists, verify it is publicly accessible (200)
  if (uploadedFileUrl) {
    try {
      const r = await request(uploadedFileUrl.startsWith("http") ? uploadedFileUrl : uploadedFileUrl);
      results.push(entry("uploads.public_access", r));
    } catch (e) {
      errors.push({ step: "uploads.public_access", error: String(e) });
    }
  }

  // 8) Rate limiting: 6 wrong logins
  try {
    const wrong = { username: "admin", password: "wrong" };
    let last = null;
    for (let i = 0; i < 6; i++) {
      last = await request("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(wrong),
      });
    }
    results.push(entry("rate_limit.login_wrong_x6", last || {}));
  } catch (e) {
    errors.push({ step: "rate_limit.login_wrong_x6", error: String(e) });
  }

  const summary = {
    baseUrl: BASE_URL,
    timestamp: new Date().toISOString(),
    results,
    errors,
  };

  try {
    await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
    await fs.writeFile(OUT_FILE, JSON.stringify(summary, null, 2), 'utf8');
  } catch {}
  process.stdout.write(JSON.stringify(summary, null, 2));
})().catch(async (e) => {
  const fail = { fatal: String(e) };
  try {
    await fs.mkdir(path.dirname(OUT_FILE), { recursive: true });
    await fs.writeFile(OUT_FILE, JSON.stringify(fail, null, 2), 'utf8');
  } catch {}
  process.stdout.write(JSON.stringify(fail, null, 2));
  process.exit(1);
});
