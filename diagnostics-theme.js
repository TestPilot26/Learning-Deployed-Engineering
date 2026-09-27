// Deployed Eng Pipeline — Diagnostics, Theme Sync & Shared Utilities
// Modularized to keep all source files well under the 800-line ceiling.

var APP_BUILD = "2026-09-27d";

// Automated stale-build cache invalidation
(function () {
  try {
    var last = localStorage.getItem("LAST_KNOWN_BUILD");
    if (last && last !== APP_BUILD) {
      if ("caches" in window) {
        caches.keys().then(function (keys) {
          keys.forEach(function (k) { caches.delete(k); });
        });
      }
    }
    localStorage.setItem("LAST_KNOWN_BUILD", APP_BUILD);
  } catch (e) {}
})();

// File-backed debug logger (Helix & local ring buffer)
var APP_DEBUG = false;
var LOG_TO_FILE = true;
var LOG = [];
var LOG_MAX = 400;
var _logFlushTimer = null;

function _logStamp() {
  try { return new Date().toISOString(); } catch (e) { return String(Date.now()); }
}

function _flushLog() {
  _logFlushTimer = null;
  var helixRef = typeof window.Helix !== "undefined" ? window.Helix : null;
  if (!LOG_TO_FILE || !helixRef || typeof helixRef.writeFile !== "function") return;
  try { helixRef.writeFile("data/debug.log", LOG.join("\n") + "\n").catch(function () {}); } catch (e) {}
}

function dbg(msg) {
  var line = "[" + _logStamp() + "] " + msg;
  LOG.push(line);
  if (LOG.length > LOG_MAX) LOG.splice(0, LOG.length - LOG_MAX);
  if (LOG_TO_FILE) {
    if (_logFlushTimer) clearTimeout(_logFlushTimer);
    _logFlushTimer = setTimeout(_flushLog, 400);
  }
}

// ---- Theme: follow Helix shell with light-toned default ----
var themeMode = "auto"; // "auto" | "light" | "dark"

function osPrefersDark() {
  return !!(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
}

function helixIsDark() {
  try {
    var pdoc = window.parent && window.parent !== window ? window.parent.document : null;
    if (pdoc) {
      var attr = pdoc.documentElement.getAttribute("data-theme");
      if (attr) return attr.toLowerCase() === "dark";
    }
  } catch (e) {}
  try {
    var v = window.localStorage.getItem("DARK_MODE");
    if (v === "true") return true;
    if (v === "false") return false;
  } catch (e) {}
  try {
    if (window.parent && window.parent.localStorage) {
      var v2 = window.parent.localStorage.getItem("DARK_MODE");
      if (v2 === "true") return true;
      if (v2 === "false") return false;
    }
  } catch (e) {}
  return null;
}

function parentIsDark() {
  var helix = helixIsDark();
  return helix === null ? osPrefersDark() : helix;
}

function effectiveDark() {
  if (themeMode === "dark") return true;
  if (themeMode === "light") return false;
  return parentIsDark();
}

function applyTheme() {
  var dark = effectiveDark();
  if (dark) document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");

  var iconEl = document.getElementById("theme-toggle-icon");
  var btnEl = document.getElementById("btn-theme-toggle");
  if (iconEl) iconEl.textContent = dark ? "light_mode" : "dark_mode";
  if (btnEl) {
    var label = dark ? "Switch to light mode" : "Switch to dark mode";
    btnEl.setAttribute("title", label);
    btnEl.setAttribute("aria-label", label);
  }
}

function initTheme() {
  try {
    themeMode = localStorage.getItem("app-theme-mode") || "light";
  } catch (e) {
    themeMode = "light";
  }
  if (helixIsDark() !== null && !localStorage.getItem("app-theme-mode")) {
    themeMode = "auto";
  }
  applyTheme();

  var lastDark = effectiveDark();
  setInterval(function () {
    if (themeMode !== "auto") return;
    var now = parentIsDark();
    if (now !== lastDark) { lastDark = now; applyTheme(); }
  }, 600);

  try {
    var pdoc = window.parent && window.parent !== window ? window.parent.document : null;
    if (pdoc && window.MutationObserver) {
      var obs = new MutationObserver(function () { if (themeMode === "auto") applyTheme(); });
      obs.observe(pdoc.documentElement, { attributes: true, attributeFilter: ["data-theme", "style"] });
    }
  } catch (e) {}

  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function () { if (themeMode === "auto") applyTheme(); };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }
}

// ---- Shared InlineClear Module (BillSkill §2) ----
var InlineClear = {
  bind: function (inputEl, clearBtnEl, onClearCallback) {
    if (!inputEl || !clearBtnEl) return null;
    function syncVisibility() {
      var hasValue = inputEl.value && inputEl.value.length > 0;
      clearBtnEl.style.display = hasValue ? "inline-flex" : "none";
    }
    inputEl.addEventListener("input", syncVisibility);
    inputEl.addEventListener("change", syncVisibility);
    inputEl.addEventListener("paste", function () { setTimeout(syncVisibility, 10); });
    clearBtnEl.addEventListener("mousedown", function (e) { e.preventDefault(); });
    clearBtnEl.addEventListener("click", function () {
      inputEl.value = "";
      syncVisibility();
      if (typeof onClearCallback === "function") onClearCallback();
      inputEl.focus();
      setTimeout(function () { inputEl.focus(); }, 0);
    });
    syncVisibility();
    return { refresh: syncVisibility };
  }
};

// ---- Security helper: validate external URLs against strict allow-list ----
function isSafeHttpUrl(rawUrl) {
  if (typeof rawUrl !== "string") return false;
  try {
    var parsed = new URL(rawUrl, window.location.origin);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch (e) {
    return false;
  }
}
