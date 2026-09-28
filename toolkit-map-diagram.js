// ============================================================================
// Toolkit map (Step 1 · Downloading the tools)
// One picture of how the 6 parts of the toolkit fit together:
//   • The cloud (top): 4 Code storage, 6 Hosting, 5 Database, 2 the agent's AI model
//   • Your laptop (bottom): 1 Code editor containing the 2 agent + 3 terminal/engines,
//     and your app running locally, split by the "backend line" with API calls crossing it.
// Token-only colours, no innerHTML. Click or focus any part to read about it below.
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
      title: "How the 6 parts fit together",
      body: "Your laptop (bottom) is where you build. The cloud (top) is where your code is backed up and your app goes live for everyone. Click any part of the picture to see what it does."
    },
    p1: {
      title: "1 · Code editor (IDE) — Antigravity, VS Code, Cursor",
      body: "The app you build in. It holds your code files, the coding agent's chat panel, and a terminal, all in one window on your laptop."
    },
    p2: {
      title: "2 · Coding agent — Gemini CLI, agent chat panels",
      body: "The agent lives inside your editor (or your terminal), but its 'brain' is an AI model running in the cloud. It reads your files, suggests edits, and runs commands. You approve what it does."
    },
    p3: {
      title: "3 · Language engines & package managers — Python, Node, Git",
      body: "Installed on your laptop and run from the terminal. Python or Node runs your app's back end (e.g. '$ python app.py'). Git saves snapshots of your code and sends them to the cloud with '$ git push'."
    },
    p4: {
      title: "4 · Code storage — GitHub, GitLab",
      body: "An online copy of your code and its full history. 'git push' sends your saved changes up from your laptop, and your hosting service pulls the latest version from here to deploy it."
    },
    p5: {
      title: "5 · Backend & database — Neon, Supabase, Firebase",
      body: "Lives in the cloud so your data (users, tables, saved items) survives when your laptop is off. Only the back end talks to it, using a secret connection string (DATABASE_URL) kept in .env."
    },
    p6: {
      title: "6 · Cloud hosting — Vercel, Cloud Run, Render",
      body: "Runs a copy of your app 24/7 at a public https:// link. It has the same split as your laptop: the front end runs in each visitor's browser, and the back end runs on the host's servers."
    },
    frontend: {
      title: "Front end — what runs in the browser",
      body: "The part of your app people see and click: pages, buttons, forms (HTML, CSS, JavaScript). On your laptop it runs at localhost:3000; once hosted, it runs in every visitor's browser. Anyone can inspect it, so it never holds secrets."
    },
    backend: {
      title: "Back end — the private side of the line",
      body: "Your server code (Python or Node, started from the terminal). It holds the secrets in .env, talks to the database, and calls outside APIs. The front end can only reach it by sending API requests across the backend line."
    },
    api: {
      title: "The backend line & the API calls that cross it",
      body: "Everything above the line (the front end) runs in the user's browser, so anyone can inspect it. Never put secrets there. The front end sends API requests across the line, and the back end does the private work (secrets, database) and sends back a JSON reply."
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
    badge.textContent = "Start here — click any part of the picture";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Your toolkit at a glance: what lives on your laptop vs. in the cloud";

    var sub = document.createElement("p");
    sub.className = "text-muted";
    sub.textContent = "The numbers match the 6 download sections below. The agent lives inside your editor, your app is split by the backend line, and the cloud keeps your code, data, and live site online.";

    card.appendChild(badgeRow);
    card.appendChild(h3);
    card.appendChild(sub);

    var activeId = "overview";
    var nodeRects = {};

    var svg = svgEl("svg", {
      viewBox: "0 0 900 640",
      width: "100%",
      role: "img",
      "aria-label": "Diagram of the 6-part toolkit: cloud services above, your laptop below with the code editor, coding agent, terminal, and your app split into front end and back end"
    });
    svg.style.maxWidth = "900px";
    svg.style.display = "block";

    var defs = svgEl("defs", {});
    [["tkm-arrow", "var(--color-on-surface-variant)"], ["tkm-arrow-accent", "var(--color-primary)"]].forEach(function (m) {
      var marker = svgEl("marker", { id: m[0], viewBox: "0 0 10 10", refX: "8", refY: "5", markerWidth: "7", markerHeight: "7", orient: "auto-start-reverse" });
      marker.appendChild(svgEl("path", { d: "M 0 0 L 10 5 L 0 10 z", fill: m[1] }));
      defs.appendChild(marker);
    });
    svg.appendChild(defs);

    function arrow(d, accent) {
      return svgEl("path", {
        d: d, fill: "none",
        stroke: accent ? "var(--color-primary)" : "var(--color-on-surface-variant)",
        "stroke-width": accent ? "2.2" : "1.6",
        "marker-end": accent ? "url(#tkm-arrow-accent)" : "url(#tkm-arrow)"
      });
    }

    function label(str, x, y, opts) {
      opts = opts || {};
      return svgText(str, {
        x: String(x), y: String(y),
        "text-anchor": opts.anchor || "middle",
        fill: opts.fill || "var(--color-on-surface-variant)",
        "font-size": opts.size || "10",
        "font-weight": opts.weight || "600",
        transform: opts.transform || ""
      });
    }

    function numBadge(g, n, x, y) {
      g.appendChild(svgEl("circle", { cx: String(x), cy: String(y), r: "10", fill: "var(--color-primary)" }));
      g.appendChild(svgText(String(n), { x: String(x), y: String(y + 4), "text-anchor": "middle", fill: "var(--color-on-primary)", "font-size": "11", "font-weight": "700" }));
    }

    // Interactive box: rect + number badge + title + up to 3 sub lines
    function box(id, n, x, y, w, h, fill, fg, title, lines) {
      var g = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO[id] ? INFO[id].title : title });
      g.style.cursor = "pointer";
      var r = svgEl("rect", { x: String(x), y: String(y), width: String(w), height: String(h), rx: "12", fill: fill, stroke: "none", "stroke-width": "2.5" });
      g.appendChild(r);
      nodeRects[id] = nodeRects[id] || [];
      nodeRects[id].push(r);
      var tx = x + 14;
      if (n) { numBadge(g, n, x + 20, y + 20); tx = x + 36; }
      g.appendChild(svgText(title, { x: String(tx), y: String(y + 25), fill: fg, "font-size": "13", "font-weight": "700" }));
      (lines || []).forEach(function (ln, i) {
        g.appendChild(svgText(ln, { x: String(x + 14), y: String(y + 46 + i * 16), fill: fg, "font-size": "11" }));
      });
      bindSelect(g, id);
      return g;
    }

    function bindSelect(g, id) {
      g.addEventListener("click", function (e) { e.stopPropagation(); select(id); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(id); }
      });
    }

    // ---------------------------------------------------------------- CLOUD
    var cloud = svgEl("g", {});
    [[140, 80, 40], [290, 64, 52], [460, 60, 52], [630, 64, 52], [780, 82, 40]].forEach(function (c) {
      cloud.appendChild(svgEl("circle", { cx: String(c[0]), cy: String(c[1]), r: String(c[2]), fill: "var(--color-surface-container-high)" }));
    });
    cloud.appendChild(svgEl("rect", { x: "20", y: "70", width: "860", height: "185", rx: "40", fill: "var(--color-surface-container-high)" }));
    cloud.appendChild(label("The cloud — online 24/7", 450, 50, { size: "14", weight: "700", fill: "var(--color-on-surface)" }));
    cloud.appendChild(label("Other companies' computers that you rent", 450, 68, { size: "11", weight: "400" }));
    svg.appendChild(cloud);

    // 5 · Database
    svg.appendChild(box("p5", 5, 40, 100, 140, 140, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Database", ["Neon · Supabase", "Permanent data:", "users, tables"]));

    // 6 · Hosting (with its own front end / back end split)
    var host = box("p6", 6, 215, 100, 250, 140, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Cloud hosting", []);
    host.appendChild(svgText("Vercel · Cloud Run", { x: "229", y: "142", fill: "var(--color-on-surface-variant)", "font-size": "11" }));
    host.appendChild(svgEl("rect", { x: "229", y: "150", width: "222", height: "30", rx: "8", fill: "var(--color-primary-container)" }));
    host.appendChild(svgText("Live front end · https://…", { x: "240", y: "169", fill: "var(--color-on-primary-container)", "font-size": "10.5", "font-weight": "600" }));
    host.appendChild(svgEl("line", { x1: "229", y1: "189", x2: "451", y2: "189", stroke: "var(--color-primary)", "stroke-width": "1.5", "stroke-dasharray": "5 4" }));
    host.appendChild(svgEl("rect", { x: "229", y: "198", width: "222", height: "30", rx: "8", fill: "var(--color-tertiary-container)" }));
    host.appendChild(svgText("Live back end · API routes", { x: "240", y: "217", fill: "var(--color-on-tertiary-container)", "font-size": "10.5", "font-weight": "600" }));
    svg.appendChild(host);

    // 4 · Code storage
    svg.appendChild(box("p4", 4, 505, 100, 160, 140, "var(--color-surface-container-lowest)", "var(--color-on-surface)",
      "Code storage", ["GitHub · GitLab", "Online backup of", "your code + history"]));

    // 2 · Agent's AI model (the agent's brain)
    svg.appendChild(box("p2", 2, 680, 100, 180, 140, "var(--color-secondary-container)", "var(--color-on-secondary-container)",
      "Agent's AI brain", ["Gemini model API", "Does the thinking", "for your agent"]));

    // Cloud arrows
    svg.appendChild(arrow("M 229 213 L 184 213"));
    svg.appendChild(label("SQL", 205, 206, { size: "9.5" }));
    svg.appendChild(arrow("M 505 130 L 469 130"));
    svg.appendChild(label("deploys", 487, 122, { size: "9.5" }));

    // ---------------------------------------------------------------- LAPTOP
    svg.appendChild(svgEl("rect", { x: "20", y: "290", width: "860", height: "300", rx: "18", fill: "var(--color-surface-container-low)", stroke: "var(--color-on-surface)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("path", { d: "M 400 590 L 385 622 L 515 622 L 500 590 Z", fill: "var(--color-surface-container-high)", stroke: "var(--color-on-surface)", "stroke-width": "2.5", "stroke-linejoin": "round" }));
    svg.appendChild(label("Your laptop — local, only you can see it", 60, 314, { anchor: "start", size: "14", weight: "700", fill: "var(--color-on-surface)" }));

    // Your app running locally (left)
    svg.appendChild(svgEl("rect", { x: "60", y: "326", width: "362", height: "248", rx: "12", fill: "var(--color-surface-container)" }));
    svg.appendChild(label("Your app, running locally", 76, 346, { anchor: "start", size: "12", weight: "700", fill: "var(--color-on-surface)" }));

    var fe = box("frontend", 0, 80, 356, 322, 66, "var(--color-primary-container)", "var(--color-on-primary-container)",
      "Front end · browser", ["localhost:3000 — what users see & click"]);
    svg.appendChild(fe);

    // Backend line + API calls crossing it
    var lineG = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO.api.title });
    lineG.style.cursor = "pointer";
    lineG.appendChild(svgEl("rect", { x: "70", y: "426", width: "342", height: "40", fill: "transparent" }));
    lineG.appendChild(svgEl("line", { x1: "70", y1: "446", x2: "412", y2: "446", stroke: "var(--color-primary)", "stroke-width": "2", "stroke-dasharray": "7 5" }));
    lineG.appendChild(label("backend line", 76, 462, { anchor: "start", size: "9.5", fill: "var(--color-primary)" }));
    lineG.appendChild(arrow("M 175 426 L 175 466", true));
    lineG.appendChild(label("request", 169, 441, { anchor: "end", size: "9.5" }));
    lineG.appendChild(arrow("M 200 466 L 200 426", true));
    lineG.appendChild(label("JSON reply", 207, 441, { anchor: "start", size: "9.5" }));
    lineG.appendChild(svgEl("rect", { x: "300", y: "437", width: "102", height: "19", rx: "9.5", fill: "var(--color-primary)" }));
    lineG.appendChild(svgText("API calls", { x: "351", y: "450", "text-anchor": "middle", fill: "var(--color-on-primary)", "font-size": "10", "font-weight": "700" }));
    bindSelect(lineG, "api");
    svg.appendChild(lineG);

    svg.appendChild(box("backend", 0, 80, 470, 322, 90, "var(--color-tertiary-container)", "var(--color-on-tertiary-container)",
      "Back end · server", ["Python or Node runs your routes", "Keeps secrets (.env) off the front end"]));

    // Code editor window (right)
    var ide = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO.p1.title });
    ide.style.cursor = "pointer";
    var ideRect = svgEl("rect", { x: "455", y: "326", width: "405", height: "248", rx: "12", fill: "var(--color-surface-container)", stroke: "none", "stroke-width": "2.5" });
    ide.appendChild(ideRect);
    nodeRects.p1 = [ideRect];
    [472, 486, 500].forEach(function (cx) { ide.appendChild(svgEl("circle", { cx: String(cx), cy: "340", r: "4", fill: "var(--color-outline)" })); });
    numBadge(ide, 1, 526, 340);
    ide.appendChild(svgText("Code editor · Antigravity · VS Code", { x: "542", y: "344", fill: "var(--color-on-surface)", "font-size": "12", "font-weight": "700" }));
    bindSelect(ide, "p1");
    svg.appendChild(ide);

    var files = svgEl("g", {});
    files.appendChild(svgEl("rect", { x: "470", y: "358", width: "160", height: "94", rx: "10", fill: "var(--color-surface-container-lowest)" }));
    files.appendChild(svgText("Your code files", { x: "482", y: "380", fill: "var(--color-on-surface)", "font-size": "12", "font-weight": "700" }));
    files.appendChild(svgText("app.py · index.html", { x: "482", y: "400", fill: "var(--color-on-surface-variant)", "font-size": "11" }));
    files.appendChild(svgText(".env · README.md", { x: "482", y: "416", fill: "var(--color-on-surface-variant)", "font-size": "11" }));
    bindSelect(files, "p1");
    files.style.cursor = "pointer";
    svg.appendChild(files);

    svg.appendChild(box("p2", 2, 662, 358, 184, 94, "var(--color-secondary-container)", "var(--color-on-secondary-container)",
      "Coding agent", ["Gemini CLI · agent chat", "Reads, edits & runs code"]));
    svg.appendChild(arrow("M 662 420 L 634 420"));
    svg.appendChild(label("edits", 648, 412, { size: "9" }));

    // Terminal (dark strip) — where the engines (Python, Node, Git) run
    var term = svgEl("g", { tabindex: "0", role: "button", "aria-label": INFO.p3.title });
    term.style.cursor = "pointer";
    var termRect = svgEl("rect", { x: "470", y: "464", width: "376", height: "96", rx: "10", fill: "var(--color-inverse-surface)", stroke: "none", "stroke-width": "2.5" });
    term.appendChild(termRect);
    nodeRects.p3 = [termRect];
    numBadge(term, 3, 490, 484);
    term.appendChild(svgText("Terminal · Python, Node & Git engines", { x: "506", y: "488", fill: "var(--color-inverse-on-surface)", "font-size": "12", "font-weight": "700" }));
    term.appendChild(svgText("$ python app.py    ← starts your back end", { x: "484", y: "512", fill: "var(--color-inverse-on-surface)", "font-size": "11", "font-family": "monospace" }));
    term.appendChild(svgText("$ git push         ← sends code to the cloud", { x: "484", y: "532", fill: "var(--color-inverse-on-surface)", "font-size": "11", "font-family": "monospace" }));
    bindSelect(term, "p3");
    svg.appendChild(term);

    // Laptop ↔ cloud arrows
    svg.appendChild(arrow("M 470 512 L 406 512"));
    svg.appendChild(label("starts", 438, 505, { size: "9.5" }));
    svg.appendChild(arrow("M 825 358 L 825 242", true));
    svg.appendChild(label("prompts & code", 819, 276, { anchor: "end", size: "9.5", fill: "var(--color-primary)" }));
    svg.appendChild(arrow("M 590 326 L 590 242", true));
    svg.appendChild(label("git push", 596, 276, { anchor: "start", size: "9.5", fill: "var(--color-primary)" }));
    svg.appendChild(arrow("M 80 520 L 44 520 L 44 250 L 60 242", true));
    svg.appendChild(label("SQL via DATABASE_URL", 38, 390, { size: "9.5", fill: "var(--color-primary)", transform: "rotate(-90 38 390)" }));

    svg.addEventListener("click", function () { select("overview"); });
    card.appendChild(svg);

    // Info panel under the picture
    var info = document.createElement("div");
    info.style.background = "var(--color-surface-container-lowest)";
    info.style.borderRadius = "12px";
    info.style.padding = "16px";
    info.style.marginTop = "16px";
    info.setAttribute("aria-live", "polite");
    var infoTitle = document.createElement("strong");
    infoTitle.style.display = "block";
    infoTitle.style.color = "var(--color-on-surface)";
    infoTitle.style.marginBottom = "8px";
    var infoBody = document.createElement("p");
    infoBody.className = "text-muted";
    infoBody.style.margin = "0";
    info.appendChild(infoTitle);
    info.appendChild(infoBody);
    card.appendChild(info);

    function select(id) {
      activeId = INFO[id] ? id : "overview";
      Object.keys(nodeRects).forEach(function (k) {
        nodeRects[k].forEach(function (r) { r.setAttribute("stroke", k === activeId ? "var(--color-primary)" : "none"); });
      });
      infoTitle.textContent = INFO[activeId].title;
      infoBody.textContent = INFO[activeId].body;
    }

    select(activeId);
    container.appendChild(card);
  }

  window.renderToolkitMap = renderToolkitMap;
})();
