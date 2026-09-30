// ============================================================================
// Toolkit map (Step 1 · Downloading the tools) — Simplified visual overview
// Shows the 6 toolkit categories in sequential order:
//   • On your laptop (1–3): 1 Code editor containing 2 Coding agent & 3 Terminal/engines,
//     plus your local app split into Front end / API / Back end.
//   • In the cloud (4–6): 4 Code storage (GitHub) -> 5 Database -> 6 Cloud hosting.
// Token-only colours, zero innerHTML. Click any box to read a plain-English note below.
// ============================================================================
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    var el = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    return el;
  }

  function svgText(str, attrs) {
    var t = svgEl("text", Object.assign({ "font-family": "inherit" }, attrs || {}));
    t.textContent = str;
    return t;
  }

  var INFO = {
    overview: {
      title: "How the 6 parts fit together (click any card above)",
      body: "You build on your laptop (1–3) and publish to the cloud (4–6). Your code editor (1) holds your coding agent (2) and terminal engines (3), which run your app's front end and back end."
    },
    p1: {
      title: "1 · Code editor (Antigravity, VS Code, Cursor)",
      body: "The main window on your laptop where you open your project folder, view your files, and use your coding agent (2) and terminal (3)."
    },
    p2: {
      title: "2 · Coding agent (Gemini CLI, Claude Code, Copilot)",
      body: "Lives inside your editor or terminal. It reads your project files, writes code edits, and helps run commands when you ask."
    },
    p3: {
      title: "3 · Language engines & Git (Python, Node.js, Git, Homebrew)",
      body: "Installed on your laptop and run inside the terminal. Python or Node starts your local app, and Git saves snapshots to push to GitHub."
    },
    p4: {
      title: "4 · Code storage (GitHub, GitLab)",
      body: "Backs up your code folders in the cloud. Running 'git push' sends your latest laptop changes up to GitHub."
    },
    p5: {
      title: "5 · Database (Firebase, Supabase, Neon)",
      body: "Stores permanent data (users, rows, saved items) in the cloud so nothing is lost when you close your laptop. Only the back end connects to it."
    },
    p6: {
      title: "6 · Cloud hosting (Cloud Run, Vercel, Render)",
      body: "Pulls your code from GitHub and runs your app 24/7 at a live https:// link you can share with anyone."
    },
    api: {
      title: "Front end, back end & the API line between them",
      body: "The front end is what people see in the browser. The back end is private server code that holds your secret keys (.env) and talks to the database. API calls carry messages across the line between them."
    }
  };

  function renderToolkitMap(container) {
    if (!container) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Overview — click any numbered part to see what it does";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How the 6 parts of your toolkit fit together";

    var sub = document.createElement("p");
    sub.className = "text-muted";
    sub.textContent = "Parts 1–3 live on your laptop where you build. Parts 4–6 live in the cloud so your code is backed up and your app stays online.";

    card.appendChild(badgeRow);
    card.appendChild(h3);
    card.appendChild(sub);

    var activeId = "overview";
    var nodeRects = {};

    var svg = svgEl("svg", {
      viewBox: "0 0 880 500",
      width: "100%",
      role: "img",
      "aria-label": "Simplified diagram showing parts 1 to 3 on your laptop and parts 4 to 6 in the cloud"
    });
    svg.style.maxWidth = "880px";
    svg.style.display = "block";

    var defs = svgEl("defs", {});
    [["tkm-arr", "var(--color-on-surface-variant)"], ["tkm-arr-pri", "var(--color-primary)"]].forEach(function (m) {
      var marker = svgEl("marker", { id: m[0], viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "6.5", markerHeight: "6.5", orient: "auto-start-reverse" });
      marker.appendChild(svgEl("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: m[1] }));
      defs.appendChild(marker);
    });
    svg.appendChild(defs);

    function arrow(d, primary, bothWays) {
      var attrs = {
        d: d,
        fill: "none",
        stroke: primary ? "var(--color-primary)" : "var(--color-on-surface-variant)",
        "stroke-width": primary ? "2.2" : "1.8",
        "marker-end": primary ? "url(#tkm-arr-pri)" : "url(#tkm-arr)"
      };
      if (bothWays) attrs["marker-start"] = primary ? "url(#tkm-arr-pri)" : "url(#tkm-arr)";
      return svgEl("path", attrs);
    }

    function numBadge(g, n, x, y) {
      g.appendChild(svgEl("circle", { cx: String(x), cy: String(y), r: "11", fill: "var(--color-primary)" }));
      g.appendChild(svgText(String(n), { x: String(x), y: String(y + 4), "text-anchor": "middle", fill: "var(--color-on-primary)", "font-size": "11.5", "font-weight": "700" }));
    }

    function bindSelect(g, id) {
      g.style.cursor = "pointer";
      g.addEventListener("click", function (e) { e.stopPropagation(); select(id); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); }
      });
    }

    function addInteractiveBox(parent, id, n, x, y, w, h, fill, fg, title, subtitle) {
      var g = svgEl("g", { tabindex: "0", role: "button", "aria-label": title });
      var r = svgEl("rect", { x: String(x), y: String(y), width: String(w), height: String(h), rx: "12", fill: fill, stroke: "none", "stroke-width": "2.5" });
      g.appendChild(r);
      nodeRects[id] = nodeRects[id] || [];
      nodeRects[id].push(r);
      var tx = x + 16;
      if (n) {
        numBadge(g, n, x + 22, y + 24);
        tx = x + 40;
      }
      g.appendChild(svgText(title, { x: String(tx), y: String(y + 28), fill: fg, "font-size": "13.5", "font-weight": "700" }));
      if (subtitle) {
        g.appendChild(svgText(subtitle, { x: String(x + 16), y: String(y + 52), fill: fg, "font-size": "11.5", opacity: "0.88" }));
      }
      bindSelect(g, id);
      parent.appendChild(g);
      return g;
    }

    // ========================================================================
    // TOP ZONE: THE CLOUD (4 -> 5 -> 6)
    // ========================================================================
    svg.appendChild(svgEl("rect", { x: "20", y: "16", width: "840", height: "152", rx: "24", fill: "var(--color-surface-container-high)" }));
    svg.appendChild(svgText("The cloud — online 24/7", { x: "44", y: "44", fill: "var(--color-on-surface)", "font-size": "14", "font-weight": "700" }));

    // 4 · Code storage
    addInteractiveBox(svg, "p4", 4, 44, 62, 236, 86, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Code storage", "GitHub · online code backup");

    // 6 · Cloud hosting (middle, directly connected to GitHub and Database)
    addInteractiveBox(svg, "p6", 6, 322, 62, 236, 86, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Cloud hosting", "Vercel · Cloud Run · live https://");

    // 5 · Database
    addInteractiveBox(svg, "p5", 5, 600, 62, 236, 86, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Database", "Neon · Supabase · saves data");

    // Cloud arrows: 4 -> 6 (deploys) and 6 <-> 5 (data)
    svg.appendChild(arrow("M 284 105 L 318 105", true, false));
    svg.appendChild(svgText("deploys", { x: "301", y: "96", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "600" }));

    svg.appendChild(arrow("M 562 105 L 596 105", false, true));
    svg.appendChild(svgText("data", { x: "579", y: "96", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "10", "font-weight": "600" }));

    // ========================================================================
    // BOTTOM ZONE: YOUR LAPTOP (1, 2, 3 + Front end / API / Back end)
    // ========================================================================
    svg.appendChild(svgEl("rect", { x: "20", y: "212", width: "840", height: "252", rx: "18", fill: "var(--color-surface-container-low)", stroke: "var(--color-on-surface)", "stroke-width": "2" }));
    // Simple laptop base stand
    svg.appendChild(svgEl("path", { d: "M 390 464 L 376 488 L 504 488 L 490 464 Z", fill: "var(--color-surface-container-high)", stroke: "var(--color-on-surface)", "stroke-width": "2", "stroke-linejoin": "round" }));
    svg.appendChild(svgText("Your laptop — local, where you build & test", { x: "44", y: "240", fill: "var(--color-on-surface)", "font-size": "14", "font-weight": "700" }));

    // LEFT CONTAINER: 1 · Code editor (holding 2 · Coding agent and 3 · Terminal & engines)
    var ideG = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO.p1.title });
    var ideRect = svgEl("rect", { x: "44", y: "256", width: "436", height: "188", rx: "14", fill: "var(--color-surface-container)", stroke: "none", "stroke-width": "2.5" });
    ideG.appendChild(ideRect);
    nodeRects.p1 = [ideRect];
    numBadge(ideG, 1, 68, 280);
    ideG.appendChild(svgText("Code editor · Antigravity · VS Code", { x: "88", y: "284", fill: "var(--color-on-surface)", "font-size": "13.5", "font-weight": "700" }));
    ideG.appendChild(svgText("Holds your project files, agent, and terminal", { x: "88", y: "302", fill: "var(--color-on-surface-variant)", "font-size": "11" }));
    bindSelect(ideG, "p1");
    svg.appendChild(ideG);

    // Inside IDE: 2 · Coding agent (left) & 3 · Terminal & engines (right)
    addInteractiveBox(svg, "p2", 2, 60, 318, 194, 110, "var(--color-secondary-container)", "var(--color-on-secondary-container)",
      "Coding agent", "Gemini CLI · edits files");

    addInteractiveBox(svg, "p3", 3, 270, 318, 194, 110, "var(--color-inverse-surface)", "var(--color-inverse-on-surface)",
      "Terminal & engines", "Python · Node · Git");

    // RIGHT CONTAINER: Your app running locally (Front end / API line / Back end)
    var appG = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO.api.title });
    var appRect = svgEl("rect", { x: "524", y: "256", width: "312", height: "188", rx: "14", fill: "var(--color-surface-container)", stroke: "none", "stroke-width": "2.5" });
    appG.appendChild(appRect);
    nodeRects.api = [appRect];
    appG.appendChild(svgText("Your app (front end ↔ back end)", { x: "544", y: "282", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));

    // Front end box
    appG.appendChild(svgEl("rect", { x: "540", y: "294", width: "280", height: "48", rx: "10", fill: "var(--color-primary-container)" }));
    appG.appendChild(svgText("Front end · browser screen", { x: "556", y: "316", fill: "var(--color-on-primary-container)", "font-size": "12.5", "font-weight": "700" }));
    appG.appendChild(svgText("Buttons & pages users see", { x: "556", y: "333", fill: "var(--color-on-primary-container)", "font-size": "10.5" }));

    // Backend dashed line + API pill
    appG.appendChild(svgEl("line", { x1: "540", y1: "361", x2: "820", y2: "361", stroke: "var(--color-primary)", "stroke-width": "2", "stroke-dasharray": "6 4" }));
    appG.appendChild(svgEl("rect", { x: "618", y: "350", width: "124", height: "22", rx: "11", fill: "var(--color-primary)" }));
    appG.appendChild(svgText("⇅ API calls", { x: "680", y: "365", "text-anchor": "middle", fill: "var(--color-on-primary)", "font-size": "10.5", "font-weight": "700" }));

    // Back end box
    appG.appendChild(svgEl("rect", { x: "540", y: "380", width: "280", height: "52", rx: "10", fill: "var(--color-tertiary-container)" }));
    appG.appendChild(svgText("Back end · private server", { x: "556", y: "402", fill: "var(--color-on-tertiary-container)", "font-size": "12.5", "font-weight": "700" }));
    appG.appendChild(svgText("Logic, database & secret keys (.env)", { x: "556", y: "420", fill: "var(--color-on-tertiary-container)", "font-size": "10.5" }));

    bindSelect(appG, "api");
    svg.appendChild(appG);

    // Arrow from Editor/Terminal (left) -> Local App (right)
    svg.appendChild(arrow("M 482 372 L 520 372", false, false));
    svg.appendChild(svgText("runs", { x: "501", y: "364", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "10", "font-weight": "600" }));

    // Single vertical arrow from Laptop -> Cloud (git push)
    svg.appendChild(arrow("M 162 212 L 162 152", true, false));
    svg.appendChild(svgText("git push", { x: "172", y: "190", fill: "var(--color-primary)", "font-size": "11", "font-weight": "700" }));

    // Single vertical arrow between Back end and Cloud Database
    svg.appendChild(arrow("M 718 254 L 718 152", false, true));
    svg.appendChild(svgText("SQL / data", { x: "728", y: "190", fill: "var(--color-on-surface-variant)", "font-size": "10.5", "font-weight": "600" }));

    svg.addEventListener("click", function () { select("overview"); });
    card.appendChild(svg);

    // Info bar below diagram
    var info = document.createElement("div");
    info.style.background = "var(--color-surface-container-lowest)";
    info.style.borderRadius = "12px";
    info.style.padding = "16px";
    info.style.marginTop = "16px";
    info.setAttribute("aria-live", "polite");
    var infoTitle = document.createElement("strong");
    infoTitle.style.display = "block";
    infoTitle.style.color = "var(--color-on-surface)";
    infoTitle.style.marginBottom = "6px";
    var infoBody = document.createElement("p");
    infoBody.className = "text-muted";
    infoBody.style.margin = "0";
    info.appendChild(infoTitle);
    info.appendChild(infoBody);
    card.appendChild(info);

    function select(id) {
      activeId = INFO[id] ? id : "overview";
      Object.keys(nodeRects).forEach(function (k) {
        nodeRects[k].forEach(function (r) {
          r.setAttribute("stroke", k === activeId ? "var(--color-primary)" : "none");
        });
      });
      infoTitle.textContent = INFO[activeId].title;
      infoBody.textContent = INFO[activeId].body;
    }

    select(activeId);
    container.appendChild(card);
  }

  window.renderToolkitMap = renderToolkitMap;
})();
