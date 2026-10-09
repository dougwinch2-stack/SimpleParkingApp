/* =====================================================================
   dougs.js — shared behaviour for Doug's apps
   Adds the ⋮ settings menu to the app header and remembers each
   person's choices on that device.

   HOW TO USE: in every page's <head>, after dougs.css:
     <script src="dougs.js"></script>
   (Not "defer": it runs early so the saved theme applies before the
   page draws, avoiding a white flash in dark mode.)

   Settings:
     Theme      Follow device | Light | Dark
     Wallboard  large text that scales with the screen (for TVs)

   A wallboard can also be set up by URL, which is then remembered:
     dashboard.html?theme=dark&wallboard=on
   ===================================================================== */

(function () {
  "use strict";

  var KEYS = { theme: "dougs.theme", wallboard: "dougs.wallboard" };
  var root = document.documentElement;

  /* ---- Storage (can fail in private browsing; never let that break a page) ---- */
  function load(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function save(key, value) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch (e) { /* settings just won't be remembered */ }
  }

  /* ---- Apply settings ---- */
  function applyTheme(mode) {
    if (mode === "light" || mode === "dark") root.setAttribute("data-theme", mode);
    else root.removeAttribute("data-theme");
  }
  function applyWallboard(on) {
    root.classList.toggle("wallboard", !!on);
  }

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    return t === "light" || t === "dark" ? t : "auto";
  }

  /* ---- 1. Run immediately: URL settings win, then saved settings ---- */
  var params = new URLSearchParams(location.search);

  if (params.has("theme")) {
    var t = params.get("theme");
    save(KEYS.theme, t === "light" || t === "dark" ? t : null);
  }
  if (params.has("wallboard")) {
    var w = params.get("wallboard");
    save(KEYS.wallboard, w === "off" || w === "0" ? null : "on");
  }

  // A page can force a theme in its HTML (<html data-theme="dark">); respect that
  // unless the person has chosen otherwise.
  var savedTheme = load(KEYS.theme);
  if (savedTheme) applyTheme(savedTheme);
  applyWallboard(load(KEYS.wallboard) === "on" || root.classList.contains("wallboard"));

  /* ---- 2. Build the ⋮ menu once the page has loaded ---- */
  var THEMES = [
    { value: "auto",  label: "Device" },
    { value: "light", label: "Light" },
    { value: "dark",  label: "Dark" }
  ];

  var DOTS_ICON =
    '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">' +
    '<circle cx="12" cy="5" r="2.2" fill="currentColor"/>' +
    '<circle cx="12" cy="12" r="2.2" fill="currentColor"/>' +
    '<circle cx="12" cy="19" r="2.2" fill="currentColor"/></svg>';

  function buildMenu() {
    var header = document.querySelector(".app-header__inner");
    if (!header || header.querySelector(".settings")) return;

    var wrap = document.createElement("div");
    wrap.className = "settings";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "settings__button";
    button.setAttribute("aria-label", "Settings");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", "settings-panel");
    button.innerHTML = DOTS_ICON;

    var panel = document.createElement("div");
    panel.className = "settings__panel";
    panel.id = "settings-panel";
    panel.hidden = true;

    // Theme
    var themeGroup = document.createElement("div");
    themeGroup.className = "settings__group";
    themeGroup.innerHTML = '<div class="settings__label" id="settings-theme-label">Theme</div>';

    var segmented = document.createElement("div");
    segmented.className = "segmented";
    segmented.setAttribute("role", "group");
    segmented.setAttribute("aria-labelledby", "settings-theme-label");

    THEMES.forEach(function (option) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = option.label;
      b.dataset.theme = option.value;
      b.addEventListener("click", function () {
        applyTheme(option.value);
        save(KEYS.theme, option.value === "auto" ? null : option.value);
        sync();
      });
      segmented.appendChild(b);
    });
    themeGroup.appendChild(segmented);

    // Wallboard
    var wbGroup = document.createElement("div");
    wbGroup.className = "settings__group";
    wbGroup.innerHTML =
      '<label class="check settings__check">' +
      '<input type="checkbox" id="settings-wallboard"> Wallboard size</label>' +
      '<div class="settings__hint">Large text for TVs and wall screens</div>';

    panel.appendChild(themeGroup);
    panel.appendChild(wbGroup);
    wrap.appendChild(button);
    wrap.appendChild(panel);
    header.appendChild(wrap);

    var wbInput = wbGroup.querySelector("input");
    wbInput.addEventListener("change", function () {
      applyWallboard(wbInput.checked);
      save(KEYS.wallboard, wbInput.checked ? "on" : null);
    });

    function sync() {
      var mode = currentTheme();
      segmented.querySelectorAll("button").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b.dataset.theme === mode));
      });
      wbInput.checked = root.classList.contains("wallboard");
    }

    function open() {
      sync();
      panel.hidden = false;
      button.setAttribute("aria-expanded", "true");
      var pressed = segmented.querySelector('[aria-pressed="true"]');
      (pressed || segmented.querySelector("button")).focus();
    }
    function close(returnFocus) {
      if (panel.hidden) return;
      panel.hidden = true;
      button.setAttribute("aria-expanded", "false");
      if (returnFocus) button.focus();
    }

    button.addEventListener("click", function () {
      if (panel.hidden) open(); else close(false);
    });

    document.addEventListener("click", function (event) {
      if (!wrap.contains(event.target)) close(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") close(true);
    });

    sync();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildMenu);
  } else {
    buildMenu();
  }

  /* Small public hook, e.g. for a page that wants to read the theme */
  window.Dougs = { theme: currentTheme };
})();
