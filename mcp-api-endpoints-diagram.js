// Deployed Eng Pipeline — Interactive Visual Guide:
// 1. What is an API & Endpoint? (Built around Aaron Jack's "What is an API in 5 minutes" — ByGJQzlzxQg)
// 2. How MCP Servers Work & How to Build One (Built around Tech With Tim's "MCP Servers Explained & Built" — He8tUwLzLnU)
// 3. REST API vs. Webhook vs. Streaming vs. Function Calling vs. MCP
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  function svgText(text, attrs) {
    var el = svgEl("text", attrs);
    el.textContent = text;
    return el;
  }

  function getData() {
    return window.McpAndEndpointsData || {};
  }

  function createVideoLinkRow(links) {
    var row = document.createElement("div");
    row.className = "diagram-pill-cluster";
    links.forEach(function (item) {
      var a = document.createElement("a");
      a.className = "diagram-label-pill reliability-video-pill";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined diagram-pill-icon";
      ic.textContent = item.icon || "play_circle";
      var sp = document.createElement("span");
      sp.textContent = item.label;
      var ext = document.createElement("span");
      ext.className = "material-symbols-outlined diagram-pill-icon";
      ext.textContent = "open_in_new";
      a.appendChild(ic);
      a.appendChild(sp);
      a.appendChild(ext);
      row.appendChild(a);
    });
    return row;
  }

  function createPillCluster(items, activeIdx, getLabel, getIcon, onSelect) {
    var row = document.createElement("div");
    row.className = "diagram-pill-cluster";
    items.forEach(function (item, idx) {
      var b = document.createElement("button");
      b.type = "button";
      if (item && item.id) b.id = "pill-" + item.id;
      b.className = "diagram-label-pill" + (idx === activeIdx ? " active" : "");
      var iconName = getIcon ? getIcon(item) : "";
      if (iconName) {
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = iconName;
        b.appendChild(ic);
      }
      var sp = document.createElement("span");
      sp.textContent = getLabel(item);
      b.appendChild(sp);
      b.addEventListener("click", function () {
        onSelect(item, idx);
      });
      row.appendChild(b);
    });
    return row;
  }

  // ============================================================================
  // SVG 1A: ILLUSTRATED API WAITER & PUZZLE CONNECTOR (DELEGATES TO McpPuzzleDiagrams)
  // ============================================================================
  function createApiWaiterSvg(activeStepId, onSelectStepId) {
    if (window.McpPuzzleDiagrams && typeof window.McpPuzzleDiagrams.createIllustratedApiWaiterSvg === "function") {
      return window.McpPuzzleDiagrams.createIllustratedApiWaiterSvg(activeStepId, onSelectStepId);
    }
    return svgEl("svg", { viewBox: "0 0 880 265", class: "mcp-vs-api-svg" });
  }

  // ============================================================================
  // SVG 1B: VISUAL ANATOMY OF AN API ENDPOINT CALL (7 HOVER + CLICK PARTS & ANIMATED WIRE)
  // ============================================================================
  function createEndpointAnatomySvg(activePartId, onSelectPartId) {
    var svg = svgEl("svg", { viewBox: "0 0 860 206", class: "mcp-vs-api-svg", "aria-label": "Visual anatomy of an API endpoint URL, headers, body, and server function" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "852", height: "198", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    // Continuous animated wire behind the 5 request pieces
    var wirePath = "M 30 68 L 830 68";
    svg.appendChild(svgEl("path", { d: wirePath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "2.5", "stroke-dasharray": "5 3" }));
    var wDot = svgEl("circle", { r: "5", fill: "var(--color-primary)" });
    wDot.appendChild(svgEl("animateMotion", { dur: "2.2s", repeatCount: "indefinite", path: wirePath }));
    svg.appendChild(wDot);

    var segments = [
      { id: "ep-method", x: 18, w: 100, top: "1. HTTP Verb", code: "PATCH", sub: "Action type" },
      { id: "ep-path", x: 128, w: 204, top: "2. Endpoint Path + ID", code: "/api/tasks/42", sub: "Menu dish address" },
      { id: "ep-query", x: 342, w: 184, top: "3. Query Params", code: "?notify=true", sub: "Optional filters" },
      { id: "ep-headers", x: 536, w: 146, top: "4. Headers", code: "Bearer <key>", sub: "API key / ID badge" },
      { id: "ep-body", x: 692, w: 150, top: "5. JSON Body", code: "{status:'Done'}", sub: "Data package" }
    ];
    segments.forEach(function (seg) {
      var isAct = seg.id === activePartId;
      var g = svgEl("g", { class: "mcp-interactive-node" });
      g.appendChild(svgEl("rect", { x: String(seg.x), y: "24", width: String(seg.w), height: "82", rx: "12", fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isAct ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isAct ? "2.8" : "1.5" }));
      g.appendChild(svgText(seg.top, { x: String(seg.x + seg.w / 2), y: "44", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-weight": "700" }));
      g.appendChild(svgText(seg.code, { x: String(seg.x + seg.w / 2), y: "68", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700", "font-family": "monospace" }));
      g.appendChild(svgText(seg.sub, { x: String(seg.x + seg.w / 2), y: "88", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11" }));
      g.addEventListener("mouseenter", function () {
        if (activePartId !== seg.id) onSelectPartId(seg.id, false);
      });
      g.addEventListener("click", function () { onSelectPartId(seg.id, true); });
      svg.appendChild(g);
    });

    [
      { id: "ep-status", x: 18, w: 486, label: "6. Status Code Receipt:  200 OK  ·  401 Unauth  ·  404 Not Found  ·  429 Rate Limit  ·  500" },
      { id: "ep-cors-ratelimit", x: 516, w: 326, label: "7. CORS & Rate Limit Guardrails (Origins & speed cap)" }
    ].forEach(function (bot) {
      var isAct = activePartId === bot.id;
      var g = svgEl("g", { class: "mcp-interactive-node" });
      g.appendChild(svgEl("rect", { x: String(bot.x), y: "124", width: String(bot.w), height: "58", rx: "12", fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isAct ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isAct ? "2.8" : "1.5" }));
      g.appendChild(svgText(bot.label, { x: String(bot.x + bot.w / 2), y: "158", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "700" }));
      g.addEventListener("mouseenter", function () {
        if (activePartId !== bot.id) onSelectPartId(bot.id, false);
      });
      g.addEventListener("click", function () { onSelectPartId(bot.id, true); });
      svg.appendChild(g);
    });
    return svg;
  }

  // ============================================================================
  // SVG 2A: TECH WITH TIM SLIDES 2, 3 & 6 — THE 4-STEP MCP TOOL CALL LOOP (ANIMATED)
  // ============================================================================
  function createMcpToolLoopSvg(activeStepIdx, onSelectStepIdx) {
    var svg = svgEl("svg", { viewBox: "0 0 880 254", class: "mcp-vs-api-svg", "aria-label": "Tech With Tim 4-step MCP tool call diagram" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "872", height: "246", rx: "16", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgText("Key Mental Model (0:15): The AI Model NEVER runs your function itself — it asks the MCP Client to call your MCP Server!", {
      x: "440", y: "28", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "12.5", "font-weight": "700"
    }));

    var actors = [
      { x: 24, w: 230, stepIdx: 1, title: "AI Language Model", sub1: "Text in -> [ Model ] -> Text out", sub2: "Reads tool names & docstrings", sub3: "Replies: 'Call add_a_note'", activeOn: [1, 3] },
      { x: 325, w: 230, stepIdx: 0, title: "MCP Client (Host App)", sub1: "Claude Desktop · Cursor · VS Code", sub2: "1. Sends {\"method\": \"tools/list\"}", sub3: "2. Sends {\"method\": \"tools/call\"}", activeOn: [0, 1, 3] },
      { x: 626, w: 230, stepIdx: 2, title: "Your MCP Server (Python)", sub1: "v1_local.py / v3_auth.py", sub2: "@mcp.tool() def add_a_note()", sub3: "Runs code & queries SQLite DB", activeOn: [0, 2, 3] }
    ];
    actors.forEach(function (ac) {
      var isHi = ac.activeOn.indexOf(activeStepIdx) !== -1;
      var g = svgEl("g", { class: "mcp-interactive-node" });
      g.appendChild(svgEl("rect", {
        x: String(ac.x), y: "48", width: String(ac.w), height: "116", rx: "12",
        fill: isHi ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isHi ? "var(--color-primary)" : "var(--color-outline)",
        "stroke-width": isHi ? "2.8" : "1.5"
      }));
      var cx = String(ac.x + ac.w / 2);
      g.appendChild(svgText(ac.title, { x: cx, y: "72", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      g.appendChild(svgText(ac.sub1, { x: cx, y: "96", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-family": "monospace" }));
      g.appendChild(svgText(ac.sub2, { x: cx, y: "118", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11" }));
      g.appendChild(svgText(ac.sub3, { x: cx, y: "140", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "600" }));
      if (typeof onSelectStepIdx === "function") {
        g.addEventListener("mouseenter", function () { onSelectStepIdx(ac.stepIdx, false); });
        g.addEventListener("click", function () { onSelectStepIdx(ac.stepIdx, true); });
      }
      svg.appendChild(g);
    });

    var p1 = "M 254 92 L 325 92";
    var p2 = "M 555 86 L 626 86";
    var p3 = "M 626 126 L 254 126";

    svg.appendChild(svgEl("path", { d: p1, fill: "none", stroke: "var(--color-primary)", "stroke-width": "2.8" }));
    svg.appendChild(svgText("JSON choice", { x: "289", y: "82", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
    svg.appendChild(svgEl("path", { d: p2, fill: "none", stroke: "var(--color-primary)", "stroke-width": "2.8" }));
    svg.appendChild(svgText("tools/list & call", { x: "590", y: "76", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
    svg.appendChild(svgEl("path", { d: p3, fill: "none", stroke: "var(--color-tertiary)", "stroke-width": "2.8", "stroke-dasharray": "5 3" }));
    svg.appendChild(svgText("JSON result", { x: "590", y: "144", "text-anchor": "middle", fill: "var(--color-tertiary)", "font-size": "10", "font-weight": "700" }));

    var activeMotionPath = activeStepIdx === 0 || activeStepIdx === 2 ? p2 : activeStepIdx === 1 ? p1 : p3;
    var dot = svgEl("circle", { r: "5.5", fill: activeStepIdx === 3 ? "var(--color-tertiary)" : "var(--color-primary)" });
    dot.appendChild(svgEl("animateMotion", { dur: "1.4s", repeatCount: "indefinite", path: activeMotionPath }));
    svg.appendChild(dot);

    var stepBanners = [
      "Step 1: Client sends {\"method\": \"tools/list\"}  →  Server returns tool names, docstrings & parameter types.",
      "Step 2: Model reads tool list, chooses add_a_note, and sends {\"name\": \"add_a_note\", \"arguments\": {\"text\": \"buy milk\"}}.",
      "Step 3: Your Python MCP Server executes add_a_note(text='buy milk') in SQLite (the AI model never touches your DB!).",
      "Step 4: Server returns {\"id\": 1, \"text\": \"buy milk\"} to Client  →  Model reads result and replies to the user."
    ];
    svg.appendChild(svgEl("rect", { x: "24", y: "182", width: "832", height: "52", rx: "10", fill: "var(--color-surface-container)" }));
    svg.appendChild(svgText(stepBanners[activeStepIdx] || stepBanners[0], {
      x: "440", y: "213", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
    }));
    return svg;
  }

  // ============================================================================
  // SVG 2C: TECH WITH TIM SLIDES 7–12 — LOCAL (STDIO) VS. REMOTE (HTTP) & THE 401 OAUTH DANCE
  // ============================================================================
  function createLocalRemoteAuthSvg(activeModeId) {
    var svg = svgEl("svg", { viewBox: "0 0 880 245", class: "mcp-vs-api-svg", "aria-label": "Diagram comparing Local stdio MCP, Remote HTTP static key trap, and OAuth 2.1 401 dance" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "872", height: "237", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    if (activeModeId === "mode-local") {
      svg.appendChild(svgText("Slide 7 (Local · stdio): Client launches 'python v1_local.py' as a subprocess on your laptop", { x: "440", y: "30", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgEl("rect", { x: "60", y: "52", width: "760", height: "164", rx: "14", fill: "var(--color-surface-container)", stroke: "var(--color-primary)", "stroke-width": "2", "stroke-dasharray": "6 4" }));
      svg.appendChild(svgText("YOUR LAPTOP BOUNDARY (Nobody on the internet can reach this)", { x: "440", y: "76", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "11.5", "font-weight": "700" }));

      svg.appendChild(svgEl("rect", { x: "96", y: "96", width: "260", height: "96", rx: "12", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgText("Claude Desktop / Cursor", { x: "226", y: "128", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("Spawns subprocess: uv run v1_local.py", { x: "226", y: "156", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11", "font-family": "monospace" }));

      svg.appendChild(svgEl("line", { x1: "356", y1: "144", x2: "524", y2: "144", stroke: "var(--color-primary)", "stroke-width": "3" }));
      svg.appendChild(svgText("stdin / stdout JSON pipe", { x: "440", y: "134", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "11", "font-weight": "700" }));

      svg.appendChild(svgEl("rect", { x: "524", y: "96", width: "260", height: "96", rx: "12", fill: "var(--color-primary-container)" }));
      svg.appendChild(svgText("v1_local.py + notes.db", { x: "654", y: "128", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("3 @mcp.tool() functions (1 user)", { x: "654", y: "156", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5" }));
    } else if (activeModeId === "mode-remote-trap") {
      svg.appendChild(svgText("Slides 8–10 (The Remote Trap): ~25% of public MCP servers have NO auth; Static Keys can't tell agents or users apart!", { x: "440", y: "30", "text-anchor": "middle", fill: "var(--color-error)", "font-size": "12.5", "font-weight": "700" }));
      ["Agent 1 (Cursor)", "Agent 2 (Claude)", "Agent 3 (Unknown)"].forEach(function (lbl, i) {
        var y = 54 + i * 56;
        svg.appendChild(svgEl("rect", { x: "32", y: String(y), width: "190", height: "44", rx: "10", fill: "var(--color-surface-container)", stroke: "var(--color-error)", "stroke-width": "1.5" }));
        svg.appendChild(svgText(lbl, { x: "127", y: String(y + 27), "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "12.5", "font-weight": "700" }));
        svg.appendChild(svgEl("line", { x1: "222", y1: String(y + 22), x2: "310", y2: "132", stroke: "var(--color-error)", "stroke-width": "2" }));
      });
      svg.appendChild(svgEl("rect", { x: "310", y: "84", width: "240", height: "96", rx: "12", fill: "var(--color-error-container)", stroke: "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText("Shared Static Key Trap", { x: "430", y: "110", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("API_KEY = sk-a83f...", { x: "430", y: "132", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "12", "font-family": "monospace", "font-weight": "700" }));
      svg.appendChild(svgText("Which agent? Which user?", { x: "430", y: "156", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "11.5" }));

      svg.appendChild(svgEl("line", { x1: "550", y1: "132", x2: "616", y2: "132", stroke: "var(--color-error)", "stroke-width": "2.5" }));
      svg.appendChild(svgEl("rect", { x: "616", y: "72", width: "232", height: "120", rx: "12", fill: "var(--color-surface-container)", stroke: "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText("v2_remote.py (HTTP URL)", { x: "732", y: "102", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("https://notes.example.com/mcp", { x: "732", y: "124", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11", "font-family": "monospace" }));
      svg.appendChild(svgText("owner='local' for everyone!", { x: "732", y: "148", "text-anchor": "middle", fill: "var(--color-error)", "font-size": "12", "font-weight": "700" }));
      svg.appendChild(svgText("Revoking 1 breaks all 5 agents", { x: "732", y: "170", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11" }));
    } else {
      svg.appendChild(svgText("Slides 11–13 (The OAuth 2.1 '401 Dance'): Your MCP server delegates login & enforces per-user scopes!", { x: "440", y: "28", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "12.5", "font-weight": "700" }));
      var danceSteps = [
        { x: 20, w: 196, n: "1. Call without token", t: "POST /mcp -> 401", s: "Replies: 'Go log in here'", c: "(.well-known discovery)" },
        { x: 232, w: 202, n: "2. Auth Server Login", t: "Consent Screen", s: "'Allow notes:read & write?'", c: "Auto-registers Cursor (DCR)" },
        { x: 450, w: 202, n: "3. Scoped JWT Token", t: "Bearer eyJ...", s: "sub: user_id · aud: /mcp", c: "scope: notes:read/write" },
        { x: 668, w: 192, n: "4. v3_auth.py Verifies", t: "Per-User Data!", s: "Scopes: notes:read / write", c: "owner = user_id (SQLite)" }
      ];
      danceSteps.forEach(function (ds, idx) {
        svg.appendChild(svgEl("rect", { x: String(ds.x), y: "50", width: String(ds.w), height: "128", rx: "12", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2" }));
        var cx = String(ds.x + ds.w / 2);
        svg.appendChild(svgText(ds.n, { x: cx, y: "74", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11", "font-weight": "700" }));
        svg.appendChild(svgText(ds.t, { x: cx, y: "98", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "13", "font-weight": "700" }));
        svg.appendChild(svgText(ds.s, { x: cx, y: "124", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11", "font-family": "monospace" }));
        svg.appendChild(svgText(ds.c, { x: cx, y: "148", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11", "font-weight": "600" }));
        if (idx < 3) {
          svg.appendChild(svgEl("line", { x1: String(ds.x + ds.w), y1: "114", x2: String(ds.x + ds.w + 16), y2: "114", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
        }
      });
      svg.appendChild(svgEl("rect", { x: "20", y: "192", width: "840", height: "38", rx: "8", fill: "var(--color-surface-container)" }));
      svg.appendChild(svgText("Result: User A and User B never see each other's notes, read-only tokens can't delete notes, and you can revoke 1 agent anytime!", {
        x: "440", y: "216", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
      }));
    }
    return svg;
  }

  // ============================================================================
  // LEFT SIDE PANEL INSPECTOR HELPERS (SINGLE-PLACE EXPLANATIONS)
  // ============================================================================
  function openInSidePanel(title, renderFn, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(renderFn, {
      autoOpen: Boolean(isUserClick),
      pulse: Boolean(isUserClick),
      itemTitle: title
    });
  }

  function showInspectorCard(spec, isUserClick) {
    openInSidePanel(spec.panelTitle || spec.title, function (el) {
      el.replaceChildren();
      var top = document.createElement("div");
      top.className = "resource-title-row";
      var b = document.createElement("span");
      b.className = "badge " + (spec.badgeClass || "badge-info");
      b.textContent = spec.badgeText;
      top.appendChild(b);
      if (spec.codePillText) {
        var cp = document.createElement("code");
        cp.className = "vocab-cmd-pill";
        cp.textContent = spec.codePillText;
        top.appendChild(cp);
      }
      el.appendChild(top);

      var h4 = document.createElement("h4");
      h4.textContent = spec.title;
      el.appendChild(h4);

      if (spec.calloutText) {
        var box = document.createElement("div");
        box.className = "nested-card";
        var boxP = document.createElement("p");
        boxP.className = "resource-desc";
        boxP.textContent = spec.calloutText;
        box.appendChild(boxP);
        el.appendChild(box);
      }

      var p = document.createElement("p");
      p.className = "resource-desc";
      p.style.whiteSpace = "pre-line";
      p.textContent = spec.bodyText;
      el.appendChild(p);

      if (spec.bannerText) {
        var banner = document.createElement("div");
        banner.className = "arch-mode-banner good-mode";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined safety-icon";
        ic.textContent = spec.bannerIcon || "lightbulb";
        var txt = document.createElement("span");
        txt.style.whiteSpace = "pre-line";
        txt.textContent = spec.bannerText;
        banner.appendChild(ic);
        banner.appendChild(txt);
        el.appendChild(banner);
      }

      if (spec.codeText) {
        var codeBox = document.createElement("div");
        codeBox.className = "vocab-example-box";
        codeBox.textContent = spec.codeText;
        el.appendChild(codeBox);
      }
    }, isUserClick);
  }

  function showApiWaiterStepInSidePanel(step, isUserClick) {
    showInspectorCard({
      panelTitle: step.shortPill,
      badgeText: step.badge,
      badgeClass: step.badgeClass,
      codePillText: step.roleLabel,
      title: step.title,
      calloutText: step.analogyTitle,
      bodyText: step.plainMeaning,
      bannerIcon: "public",
      bannerText: "Real-world examples:\n" + step.realWorldExamples,
      codeText: step.codeExample
    }, isUserClick);
  }

  function showEndpointPartInSidePanel(curEp, isUserClick) {
    showInspectorCard({
      panelTitle: curEp.shortPill,
      badgeText: "Endpoint Part " + curEp.partNum + " of 7",
      badgeClass: curEp.badgeClass,
      codePillText: curEp.codeSnippet,
      title: curEp.title,
      bodyText: curEp.plainMeaning,
      bannerIcon: "lightbulb",
      bannerText: "Why this matters: " + curEp.whyCritical,
      codeText: curEp.codeExample
    }, isUserClick);
  }

  // ============================================================================
  // MAIN RENDERER: MOUNTED ON STEP 6 (SYSTEM DYNAMICS)
  // ============================================================================
  function renderMcpAndEndpointsWorkshop(container, options) {
    if (!container) return;
    options = options || {};
    var d = getData();
    var waiterSteps = d.API_WAITER_STEPS || [];
    var endpointParts = d.ENDPOINT_PARTS || [];
    var mcpStages = d.MCP_COURSE_STAGES || [];
    var mcpPrims = d.MCP_PRIMITIVES || [];
    var fivePatterns = d.FIVE_PATTERNS || [];

    var stageLoop = mcpStages[0] || { steps: [] };
    var stageAuth = mcpStages[2] || { modes: [] };
    var stageBuild = mcpStages[3] || { versions: [] };

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Interactive visual guide — click any diagram node to inspect in the side panel";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "APIs vs. MCP: how your app and AI agents plug into other tools";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "Start with the big picture: what an API is, what MCP adds, and how to connect an MCP server to your AI agent. Want to go further? Open the deep dive below for endpoints, the JSON tool loop, local vs. remote servers, and building your own.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    var activeWaiterIdx = 0;
    var activeEndpointIdx = 1;
    var activeLoopStepIdx = 0;
    var activePrimIdx = 0;
    var activeAuthModeIdx = 2;
    var activeBuildVerIdx = 0;
    var activePatternIdx = 4;

    var workshopHost = document.createElement("div");
    workshopHost.className = "reliability-workshop-host";

    function syncLoopStepToSidePanel(isUserClick) {
      if (stageLoop.steps && stageLoop.steps[activeLoopStepIdx]) {
        var lp = stageLoop.steps[activeLoopStepIdx];
        showInspectorCard({
          panelTitle: lp.pill,
          badgeText: stageLoop.badge,
          badgeClass: stageLoop.badgeClass,
          title: lp.title,
          bodyText: lp.detail,
          codeText: lp.wireJson
        }, isUserClick);
      }
    }

    function syncAuthModeToSidePanel(isUserClick) {
      if (stageAuth.modes && stageAuth.modes[activeAuthModeIdx]) {
        var md = stageAuth.modes[activeAuthModeIdx];
        showInspectorCard({
          panelTitle: md.pill,
          badgeText: md.badge,
          badgeClass: md.badgeClass,
          title: md.title,
          bodyText: md.whatItIs,
          codeText: md.codeSnippet
        }, isUserClick);
      }
    }

    function syncBuildVerToSidePanel(isUserClick) {
      if (stageBuild.versions && stageBuild.versions[activeBuildVerIdx]) {
        var vr = stageBuild.versions[activeBuildVerIdx];
        showInspectorCard({
          panelTitle: vr.pill,
          badgeText: vr.badge,
          badgeClass: vr.badgeClass,
          title: vr.title,
          bodyText: vr.takeaway,
          codeText: vr.code
        }, isUserClick);
      }
    }

    // Build persistent section mounts so interactive state updates don't recreate the whole page
    var waiterMount = document.createElement("div");
    var xrayMount = document.createElement("div");
    var mcpHeroMount = document.createElement("div");
    var mcpLoopMount = document.createElement("div");
    var mcpAuthMount = document.createElement("div");
    var mcpBuildMount = document.createElement("div");
    var patternsMount = document.createElement("div");

    workshopHost.appendChild(mcpHeroMount);

    // Slot for content that should sit right under the API vs. MCP diagram
    // (e.g. the "Connect MCP servers to your agent" walkthrough).
    if (typeof options.afterHero === "function") {
      var afterHeroMount = document.createElement("div");
      workshopHost.appendChild(afterHeroMount);
      options.afterHero(afterHeroMount);
    }

    // Collapsible "Building MCPs deep dive" — optional detail for learners who want more
    var deepDiveToggle = document.createElement("button");
    deepDiveToggle.type = "button";
    deepDiveToggle.className = "nav-btn nav-btn-primary section-spacer";
    deepDiveToggle.setAttribute("aria-expanded", "false");
    var ddIcon = document.createElement("span");
    ddIcon.className = "material-symbols-outlined";
    ddIcon.textContent = "expand_more";
    var ddLabel = document.createElement("span");
    ddLabel.textContent = "Building MCPs deep dive";
    deepDiveToggle.appendChild(ddLabel);
    deepDiveToggle.appendChild(ddIcon);

    var deepDiveHint = document.createElement("p");
    deepDiveHint.className = "text-muted";
    deepDiveHint.textContent = "Optional: the API waiter walkthrough, the 7 parts of an endpoint, the 4-step JSON tool loop, local vs. remote MCP & OAuth, building a Python MCP server, and all 5 communication patterns.";

    var deepDiveHost = document.createElement("div");
    deepDiveHost.style.display = "none";
    deepDiveToggle.addEventListener("click", function () {
      var open = deepDiveHost.style.display === "none";
      deepDiveHost.style.display = open ? "" : "none";
      deepDiveToggle.setAttribute("aria-expanded", open ? "true" : "false");
      ddIcon.textContent = open ? "expand_less" : "expand_more";
      if (open && waiterSteps[0]) showApiWaiterStepInSidePanel(waiterSteps[activeWaiterIdx] || waiterSteps[0], false);
    });

    workshopHost.appendChild(deepDiveToggle);
    workshopHost.appendChild(deepDiveHint);
    workshopHost.appendChild(deepDiveHost);
    deepDiveHost.appendChild(waiterMount);
    deepDiveHost.appendChild(xrayMount);
    deepDiveHost.appendChild(mcpLoopMount);
    deepDiveHost.appendChild(mcpAuthMount);
    deepDiveHost.appendChild(mcpBuildMount);
    deepDiveHost.appendChild(patternsMount);

    function renderWaiterSection() {
      waiterMount.replaceChildren();
      var waiterCard = document.createElement("div");
      waiterCard.className = "nested-card";
      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "1 · What is an API? The Restaurant Waiter & Puzzle-Piece Walkthrough (hover or click each station):";
      topRow.appendChild(titleStrong);

      var rightActions = document.createElement("div");
      rightActions.className = "diagram-pill-cluster";
      var nextWaiterBtn = document.createElement("button");
      nextWaiterBtn.type = "button";
      nextWaiterBtn.className = "diagram-label-pill active";
      nextWaiterBtn.textContent = "Step through API flow (" + (activeWaiterIdx + 1) + "/" + waiterSteps.length + ") ▶";
      nextWaiterBtn.addEventListener("click", function () {
        activeWaiterIdx = (activeWaiterIdx + 1) % waiterSteps.length;
        renderWaiterSection();
        showApiWaiterStepInSidePanel(waiterSteps[activeWaiterIdx], true);
      });
      rightActions.appendChild(nextWaiterBtn);
      rightActions.appendChild(createVideoLinkRow([{ label: "Watch: What is an API (in 5 mins) — Aaron Jack", url: d.API_VIDEO_URL, icon: "play_circle" }]));
      topRow.appendChild(rightActions);
      waiterCard.appendChild(topRow);

      var curWaiter = waiterSteps[activeWaiterIdx] || waiterSteps[0];
      waiterCard.appendChild(createApiWaiterSvg(curWaiter.id, function (stepId, isClick) {
        waiterSteps.forEach(function (s, i) { if (s.id === stepId) activeWaiterIdx = i; });
        renderWaiterSection();
        showApiWaiterStepInSidePanel(waiterSteps[activeWaiterIdx], Boolean(isClick));
      }));
      waiterMount.appendChild(waiterCard);
    }

    function renderXraySection() {
      xrayMount.replaceChildren();
      var xrayCard = document.createElement("div");
      xrayCard.className = "nested-card";
      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var xrayTitle = document.createElement("strong");
      xrayTitle.className = "diagram-node-title";
      xrayTitle.textContent = "2 · Inside the Waiter's Order Pad: Hover or click all 7 parts of a live API Endpoint call:";
      topRow.appendChild(xrayTitle);

      var nextEpBtn = document.createElement("button");
      nextEpBtn.type = "button";
      nextEpBtn.className = "diagram-label-pill active";
      nextEpBtn.textContent = "Step through Endpoint parts (" + (activeEndpointIdx + 1) + "/" + endpointParts.length + ") ▶";
      nextEpBtn.addEventListener("click", function () {
        activeEndpointIdx = (activeEndpointIdx + 1) % endpointParts.length;
        renderXraySection();
        showEndpointPartInSidePanel(endpointParts[activeEndpointIdx], true);
      });
      topRow.appendChild(nextEpBtn);
      xrayCard.appendChild(topRow);

      var curEp = endpointParts[activeEndpointIdx] || endpointParts[0];
      xrayCard.appendChild(createEndpointAnatomySvg(curEp.id, function (partId, isClick) {
        endpointParts.forEach(function (p, i) { if (p.id === partId) activeEndpointIdx = i; });
        renderXraySection();
        showEndpointPartInSidePanel(endpointParts[activeEndpointIdx], Boolean(isClick));
      }));
      xrayMount.appendChild(xrayCard);
    }

    function renderMcpHeroSection() {
      mcpHeroMount.replaceChildren();
      if (!window.McpPuzzleDiagrams || !window.McpPuzzleDiagrams.createVisualMcpVsApiExplorer) return;
      var visualHeroCard = document.createElement("div");
      visualHeroCard.className = "nested-card";
      var heroTitleRow = document.createElement("div");
      heroTitleRow.className = "resource-title-row";
      var heroStrong = document.createElement("strong");
      heroStrong.className = "diagram-node-title";
      heroStrong.textContent = "API (Before MCP) vs. MCP (After MCP) — hover or click any part:";
      heroTitleRow.appendChild(heroStrong);
      heroTitleRow.appendChild(createVideoLinkRow([
        { label: "Watch: MCP Explained & Built — Tech With Tim", url: d.MCP_VIDEO_URL, icon: "play_circle" },
        { label: "GitHub Code (v1 -> v3)", url: d.MCP_REPO_URL, icon: "code" }
      ]));
      visualHeroCard.appendChild(heroTitleRow);

      visualHeroCard.appendChild(window.McpPuzzleDiagrams.createVisualMcpVsApiExplorer(function (info) {
        showInspectorCard({
          panelTitle: info.badge,
          badgeText: info.badge,
          badgeClass: info.badgeClass,
          title: info.title,
          calloutText: info.analogy,
          bodyText: info.body,
          codeText: info.code
        }, true);
      }));

      var primsLabel = document.createElement("p");
      primsLabel.className = "resource-desc";
      primsLabel.textContent = "The 3 core building blocks ('primitives') every MCP Server can expose to an AI agent (click to inspect):";
      visualHeroCard.appendChild(primsLabel);

      visualHeroCard.appendChild(createPillCluster(mcpPrims, activePrimIdx, function (pr) { return pr.title; }, function (pr) { return pr.icon; }, function (pr, idx) {
        activePrimIdx = idx;
        renderMcpHeroSection();
        showInspectorCard({ badgeText: pr.badge, badgeClass: pr.badgeClass, title: pr.title, calloutText: pr.analogy, bodyText: pr.whatItIs, codeText: pr.example }, true);
      }));
      mcpHeroMount.appendChild(visualHeroCard);
    }

    function renderMcpLoopSection() {
      mcpLoopMount.replaceChildren();
      var loopCard = document.createElement("div");
      loopCard.className = "nested-card";

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "3 · Walkthrough: How an AI Tool Call & MCP Server Work Under the Hood (4 JSON Steps):";
      topRow.appendChild(titleStrong);

      var nextStepBtn = document.createElement("button");
      nextStepBtn.type = "button";
      nextStepBtn.className = "diagram-label-pill active";
      nextStepBtn.textContent = "Next step (" + (activeLoopStepIdx + 1) + "/4) ▶";
      nextStepBtn.addEventListener("click", function () {
        activeLoopStepIdx = (activeLoopStepIdx + 1) % (stageLoop.steps.length || 4);
        renderMcpLoopSection();
        syncLoopStepToSidePanel(true);
      });
      topRow.appendChild(nextStepBtn);
      loopCard.appendChild(topRow);

      var summaryP = document.createElement("p");
      summaryP.className = "resource-desc";
      summaryP.textContent = stageLoop.summary;
      loopCard.appendChild(summaryP);

      // 4 Step Walkthrough Pills so the learner can step through 1 -> 2 -> 3 -> 4 explicitly
      loopCard.appendChild(createPillCluster(stageLoop.steps || [], activeLoopStepIdx, function (lp) { return lp.pill; }, null, function (lp, idx) {
        activeLoopStepIdx = idx;
        renderMcpLoopSection();
        syncLoopStepToSidePanel(true);
      }));

      loopCard.appendChild(createMcpToolLoopSvg(activeLoopStepIdx, function (idx, isClick) {
        activeLoopStepIdx = idx;
        renderMcpLoopSection();
        syncLoopStepToSidePanel(Boolean(isClick));
      }));

      if (stageLoop.steps && stageLoop.steps[activeLoopStepIdx]) {
        var curLp = stageLoop.steps[activeLoopStepIdx];
        var wireBox = document.createElement("div");
        wireBox.className = "vocab-example-box";
        wireBox.style.whiteSpace = "pre-wrap";
        wireBox.textContent = curLp.wireJson;
        loopCard.appendChild(wireBox);
      }
      mcpLoopMount.appendChild(loopCard);
    }

    function renderMcpAuthSection() {
      mcpAuthMount.replaceChildren();
      var authCard = document.createElement("div");
      authCard.className = "nested-card";

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "4 · Walkthrough: Local MCP (stdio) vs. Remote MCP (HTTP) & The OAuth 2.1 '401 Dance':";
      topRow.appendChild(titleStrong);
      authCard.appendChild(topRow);

      var summaryP = document.createElement("p");
      summaryP.className = "resource-desc";
      summaryP.textContent = stageAuth.summary;
      authCard.appendChild(summaryP);

      authCard.appendChild(createPillCluster(stageAuth.modes || [], activeAuthModeIdx, function (md) { return md.pill; }, null, function (md, idx) {
        activeAuthModeIdx = idx;
        renderMcpAuthSection();
        syncAuthModeToSidePanel(true);
      }));

      var curMode = (stageAuth.modes && stageAuth.modes[activeAuthModeIdx]) || (stageAuth.modes && stageAuth.modes[0]);
      if (curMode) {
        authCard.appendChild(createLocalRemoteAuthSvg(curMode.id));
      }
      mcpAuthMount.appendChild(authCard);
    }

    function renderMcpBuildSection() {
      mcpBuildMount.replaceChildren();
      var buildCard = document.createElement("div");
      buildCard.className = "nested-card";

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "5 · Code Walkthrough: Build a Python MCP Server in 3 Steps (v1_local.py ➔ v2_remote.py ➔ v3_auth.py):";
      topRow.appendChild(titleStrong);
      buildCard.appendChild(topRow);

      var summaryP = document.createElement("p");
      summaryP.className = "resource-desc";
      summaryP.textContent = stageBuild.summary;
      buildCard.appendChild(summaryP);

      buildCard.appendChild(createPillCluster(stageBuild.versions || [], activeBuildVerIdx, function (vr) { return vr.pill; }, null, function (vr, idx) {
        activeBuildVerIdx = idx;
        renderMcpBuildSection();
        syncBuildVerToSidePanel(true);
      }));

      var curVer = (stageBuild.versions && stageBuild.versions[activeBuildVerIdx]) || (stageBuild.versions && stageBuild.versions[0]);
      if (curVer) {
        var takeawayP = document.createElement("p");
        takeawayP.className = "resource-desc";
        takeawayP.textContent = curVer.takeaway;
        buildCard.appendChild(takeawayP);

        var codeView = document.createElement("div");
        codeView.className = "vocab-example-box";
        codeView.style.whiteSpace = "pre-wrap";
        codeView.textContent = curVer.code;
        buildCard.appendChild(codeView);
      }
      mcpBuildMount.appendChild(buildCard);
    }

    function renderPatternsSection() {
      patternsMount.replaceChildren();
      var patCard = document.createElement("div");
      patCard.className = "nested-card";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "6 · Quick Reference: REST API vs. Webhook vs. Streaming vs. Function Calling vs. MCP (click to compare):";
      patCard.appendChild(titleStrong);

      patCard.appendChild(createPillCluster(fivePatterns, activePatternIdx, function (pt) { return pt.shortPill; }, function (pt) { return pt.icon; }, function (pt, idx) {
        activePatternIdx = idx;
        renderPatternsSection();
        showInspectorCard({ badgeText: pt.whoStarts, badgeClass: "badge-info", title: pt.shortPill, calloutText: "Best for: " + pt.bestFor, bodyText: pt.howItWorks, bannerText: pt.whenNotToUse }, true);
      }));

      var curPat = fivePatterns[activePatternIdx] || fivePatterns[0];
      if (curPat) {
        var patSummary = document.createElement("div");
        patSummary.className = "arch-mode-banner good-mode";
        var patIcon = document.createElement("span");
        patIcon.className = "material-symbols-outlined safety-icon";
        patIcon.textContent = curPat.icon || "info";
        var patText = document.createElement("span");
        patText.textContent = curPat.shortPill + " — " + curPat.bestFor + " (" + curPat.howItWorks + ")";
        patSummary.appendChild(patIcon);
        patSummary.appendChild(patText);
        patCard.appendChild(patSummary);
      }
      patternsMount.appendChild(patCard);
    }

    renderWaiterSection();
    renderXraySection();
    renderMcpHeroSection();
    renderMcpLoopSection();
    renderMcpAuthSection();
    renderMcpBuildSection();
    renderPatternsSection();

    card.appendChild(workshopHost);
    container.appendChild(card);
  }

  window.renderMcpAndEndpointsWorkshop = renderMcpAndEndpointsWorkshop;
})();
