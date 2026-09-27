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
  // SVG 1A: AARON JACK'S API RESTAURANT / WAITER ANALOGY & CONTRACT
  // ============================================================================
  function createApiWaiterSvg(activeStepId, onSelectStepId) {
    var svg = svgEl("svg", {
      viewBox: "0 0 880 265",
      class: "mcp-vs-api-svg",
      "aria-label": "Interactive API Restaurant and Waiter diagram based on Aaron Jack's 5-minute API explainer"
    });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "872", height: "257", rx: "16", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgText("Application Programming Interface (API) = The Messenger & Contract Between Two Programs", {
      x: "440", y: "28", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13.5", "font-weight": "700"
    }));

    svg.appendChild(svgEl("line", { x1: "202", y1: "112", x2: "228", y2: "112", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "414", y1: "96", x2: "456", y2: "96", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgText("Order", { x: "435", y: "88", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
    svg.appendChild(svgEl("line", { x1: "644", y1: "96", x2: "678", y2: "96", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "678", y1: "136", x2: "414", y2: "136", stroke: "var(--color-tertiary)", "stroke-width": "2.5", "stroke-dasharray": "5 3" }));
    svg.appendChild(svgText("JSON Response (200 OK)", { x: "546", y: "152", "text-anchor": "middle", fill: "var(--color-tertiary)", "font-size": "10", "font-weight": "700" }));

    var boxes = [
      { id: "api-step-client", x: 18, w: 184, topTag: "1. YOU AT THE TABLE", title: "The Client (Your App)", sub1: "Browser / iOS / Android", sub2: "Expedia · Weather App", sub3: "Cannot enter kitchen!" },
      { id: "api-step-menu", x: 228, w: 186, topTag: "2. THE MENU (CONTRACT)", title: "API Docs & Endpoints", sub1: "GET /v1/weather?city=...", sub2: "POST /v1/charges", sub3: "Rules of what you can ask" },
      { id: "api-step-waiter", x: 456, w: 188, topTag: "3. THE WAITER", title: "The API Messenger", sub1: "Takes HTTP Request + Key", sub2: "Brings back JSON tray", sub3: "{\"temp_c\": 18, \"ok\": true}" },
      { id: "api-step-kitchen", x: 678, w: 184, topTag: "4. THE KITCHEN", title: "External Server & DB", sub1: "Airlines · Weather DB", sub2: "Stripe · Google Maps", sub3: "Guards private data & code" }
    ];

    boxes.forEach(function (bx) {
      var isAct = bx.id === activeStepId;
      var g = svgEl("g", { style: "cursor:pointer" });
      g.appendChild(svgEl("rect", {
        x: String(bx.x), y: "44", width: String(bx.w), height: "136", rx: "12",
        fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isAct ? "var(--color-primary)" : "var(--color-outline)",
        "stroke-width": isAct ? "2.5" : "1.5"
      }));
      var cx = String(bx.x + bx.w / 2);
      g.appendChild(svgText(bx.topTag, { x: cx, y: "66", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-primary)", "font-size": "10.5", "font-weight": "700" }));
      g.appendChild(svgText(bx.title, { x: cx, y: "88", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      g.appendChild(svgText(bx.sub1, { x: cx, y: "112", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-family": "monospace" }));
      g.appendChild(svgText(bx.sub2, { x: cx, y: "132", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11.5" }));
      g.appendChild(svgText(bx.sub3, { x: cx, y: "154", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "600" }));
      g.addEventListener("click", function () { onSelectStepId(bx.id); });
      svg.appendChild(g);
    });

    svg.appendChild(svgEl("rect", { x: "18", y: "194", width: "844", height: "54", rx: "10", fill: "var(--color-surface-container)" }));
    svg.appendChild(svgText("Video examples:  Expedia → Airline APIs (flights)   ·   Uber → Google Maps API (roads)   ·   Checkout → Stripe / PayPal API   ·   Practice → PokeAPI", {
      x: "440", y: "217", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
    }));
    svg.appendChild(svgText("Click any of the 4 stations above (or pills above) to inspect how it works in the Left Side Panel", {
      x: "440", y: "236", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11"
    }));
    return svg;
  }

  // ============================================================================
  // SVG 1B: VISUAL ANATOMY OF AN API ENDPOINT CALL (7 CLICKABLE PARTS)
  // ============================================================================
  function createEndpointAnatomySvg(activePartId, onSelectPartId) {
    var svg = svgEl("svg", { viewBox: "0 0 860 190", class: "mcp-vs-api-svg", "aria-label": "Visual anatomy of an API endpoint URL, headers, body, and server function" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "852", height: "182", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    var segments = [
      { id: "ep-method", x: 18, w: 100, top: "1. HTTP Verb", code: "PATCH", sub: "Action type" },
      { id: "ep-path", x: 128, w: 204, top: "2. Endpoint Path + ID", code: "/api/tasks/42", sub: "Menu dish address" },
      { id: "ep-query", x: 342, w: 184, top: "3. Query Params", code: "?notify=true", sub: "Optional filters" },
      { id: "ep-headers", x: 536, w: 146, top: "4. Headers", code: "Bearer <key>", sub: "API key / ID badge" },
      { id: "ep-body", x: 692, w: 150, top: "5. JSON Body", code: "{status:'Done'}", sub: "Data package" }
    ];
    segments.forEach(function (seg) {
      var isAct = seg.id === activePartId;
      var g = svgEl("g", { style: "cursor:pointer" });
      g.appendChild(svgEl("rect", { x: String(seg.x), y: "22", width: String(seg.w), height: "78", rx: "10", fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isAct ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isAct ? "2.5" : "1.5" }));
      g.appendChild(svgText(seg.top, { x: String(seg.x + seg.w / 2), y: "42", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-weight": "700" }));
      g.appendChild(svgText(seg.code, { x: String(seg.x + seg.w / 2), y: "66", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700", "font-family": "monospace" }));
      g.appendChild(svgText(seg.sub, { x: String(seg.x + seg.w / 2), y: "86", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11" }));
      g.addEventListener("click", function () { onSelectPartId(seg.id); });
      svg.appendChild(g);
    });

    [
      { id: "ep-status", x: 18, w: 486, label: "6. Status Code Receipt:  200 OK  ·  401 Unauth  ·  404 Not Found  ·  429 Rate Limit  ·  500" },
      { id: "ep-cors-ratelimit", x: 516, w: 326, label: "7. CORS & Rate Limit Guardrails (Origins & speed cap)" }
    ].forEach(function (bot) {
      var isAct = activePartId === bot.id;
      var g = svgEl("g", { style: "cursor:pointer" });
      g.appendChild(svgEl("rect", { x: String(bot.x), y: "116", width: String(bot.w), height: "54", rx: "10", fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isAct ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isAct ? "2.5" : "1.5" }));
      g.appendChild(svgText(bot.label, { x: String(bot.x + bot.w / 2), y: "148", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "700" }));
      g.addEventListener("click", function () { onSelectPartId(bot.id); });
      svg.appendChild(g);
    });
    return svg;
  }

  // ============================================================================
  // SVG 2A: TECH WITH TIM SLIDES 2, 3 & 6 — THE 4-STEP MCP TOOL CALL LOOP
  // ============================================================================
  function createMcpToolLoopSvg(activeStepIdx) {
    var svg = svgEl("svg", { viewBox: "0 0 880 250", class: "mcp-vs-api-svg", "aria-label": "Tech With Tim 4-step MCP tool call diagram" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "872", height: "242", rx: "16", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgText("Key Mental Model (0:15): The AI Model NEVER runs your function itself — it asks the MCP Client to call your MCP Server!", {
      x: "440", y: "28", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "12.5", "font-weight": "700"
    }));

    var actors = [
      { x: 24, w: 230, title: "AI Language Model", sub1: "Text in -> [ Model ] -> Text out", sub2: "Reads tool names & docstrings", sub3: "Replies: 'Call add_a_note'", activeOn: [1, 3] },
      { x: 325, w: 230, title: "MCP Client (Host App)", sub1: "Claude Desktop · Cursor · VS Code", sub2: "1. Sends {\"method\": \"tools/list\"}", sub3: "2. Sends {\"method\": \"tools/call\"}", activeOn: [0, 1, 3] },
      { x: 626, w: 230, title: "Your MCP Server (Python)", sub1: "v1_local.py / v3_auth.py", sub2: "@mcp.tool() def add_a_note()", sub3: "Runs code & queries SQLite DB", activeOn: [0, 2, 3] }
    ];
    actors.forEach(function (ac) {
      var isHi = ac.activeOn.indexOf(activeStepIdx) !== -1;
      svg.appendChild(svgEl("rect", {
        x: String(ac.x), y: "48", width: String(ac.w), height: "116", rx: "12",
        fill: isHi ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isHi ? "var(--color-primary)" : "var(--color-outline)",
        "stroke-width": isHi ? "2.5" : "1.5"
      }));
      var cx = String(ac.x + ac.w / 2);
      svg.appendChild(svgText(ac.title, { x: cx, y: "72", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText(ac.sub1, { x: cx, y: "96", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-family": "monospace" }));
      svg.appendChild(svgText(ac.sub2, { x: cx, y: "118", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11" }));
      svg.appendChild(svgText(ac.sub3, { x: cx, y: "140", "text-anchor": "middle", fill: isHi ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "600" }));
    });

    svg.appendChild(svgEl("line", { x1: "254", y1: "92", x2: "325", y2: "92", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgText("JSON choice", { x: "289", y: "84", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
    svg.appendChild(svgEl("line", { x1: "555", y1: "86", x2: "626", y2: "86", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgText("tools/list & call", { x: "590", y: "78", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
    svg.appendChild(svgEl("line", { x1: "626", y1: "126", x2: "555", y2: "126", stroke: "var(--color-tertiary)", "stroke-width": "2.5", "stroke-dasharray": "5 3" }));
    svg.appendChild(svgText("JSON result", { x: "590", y: "142", "text-anchor": "middle", fill: "var(--color-tertiary)", "font-size": "10", "font-weight": "700" }));

    var stepBanners = [
      "Step 1: Client sends {\"method\": \"tools/list\"}  →  Server returns tool names, docstrings & parameter types.",
      "Step 2: Model reads tool list, chooses add_a_note, and sends {\"name\": \"add_a_note\", \"arguments\": {\"text\": \"buy milk\"}}.",
      "Step 3: Your Python MCP Server executes add_a_note(text='buy milk') in SQLite (the AI model never touches your DB!).",
      "Step 4: Server returns {\"id\": 1, \"text\": \"buy milk\"} to Client  →  Model reads result and replies to the user."
    ];
    svg.appendChild(svgEl("rect", { x: "24", y: "180", width: "832", height: "52", rx: "10", fill: "var(--color-surface-container)" }));
    svg.appendChild(svgText(stepBanners[activeStepIdx] || stepBanners[0], {
      x: "440", y: "211", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
    }));
    return svg;
  }

  // ============================================================================
  // SVG 2B: TECH WITH TIM SLIDES 4 & 5 — BEFORE MCP (M×N) VS. WITH MCP (USB-C)
  // ============================================================================
  function createMcpVsApiSvg(isMcpMode) {
    var svg = svgEl("svg", { viewBox: "0 0 860 270", class: "mcp-vs-api-svg", "aria-label": "Diagram comparing custom API plumbing with MCP universal USB-C hub" });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "852", height: "262", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    var leftApps = [
      { y: 32, title: "Claude Desktop", sub: isMcpMode ? "Speaks standard MCP" : "Custom GitHub/Notes code" },
      { y: 106, title: "Cursor / VS Code", sub: isMcpMode ? "Speaks standard MCP" : "Rebuilt from scratch" },
      { y: 180, title: "ChatGPT / Custom Agent", sub: isMcpMode ? "Speaks standard MCP" : "Rebuilt from scratch" }
    ];
    var rightServices = [
      { y: 32, title: isMcpMode ? "Notes MCP Server (FastMCP)" : "Custom Notes Plumbing", sub: isMcpMode ? "list / add / delete_a_note()" : "Different wrapper per app" },
      { y: 106, title: isMcpMode ? "GitHub MCP Server" : "Custom GitHub Plumbing", sub: isMcpMode ? "list_repos() · create_issue()" : "Different wrapper per app" },
      { y: 180, title: isMcpMode ? "Postgres / Stripe MCP" : "Custom DB / Stripe Code", sub: isMcpMode ? "Standard Tools & Resources" : "Different wrapper per app" }
    ];

    if (!isMcpMode) {
      leftApps.forEach(function (lApp) {
        rightServices.forEach(function (rSvc) {
          svg.appendChild(svgEl("line", { x1: "250", y1: String(lApp.y + 28), x2: "610", y2: String(rSvc.y + 28), stroke: "var(--color-error)", "stroke-width": "2", "stroke-dasharray": "5 4", opacity: "0.72" }));
        });
      });
      svg.appendChild(svgEl("rect", { x: "290", y: "84", width: "280", height: "98", rx: "12", fill: "var(--color-error-container)", stroke: "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText("Slide 4: Before MCP (M × N Plumbing)", { x: "430", y: "112", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("Every app rebuilt the exact same tool", { x: "430", y: "136", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "11.5" }));
      svg.appendChild(svgText("plumbing for every model (4 plugs × 4 apps)!", { x: "430", y: "156", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "11.5", "font-weight": "600" }));
    } else {
      leftApps.forEach(function (lApp) {
        svg.appendChild(svgEl("line", { x1: "250", y1: String(lApp.y + 28), x2: "305", y2: "135", stroke: "var(--color-primary)", "stroke-width": "3" }));
      });
      rightServices.forEach(function (rSvc) {
        svg.appendChild(svgEl("line", { x1: "555", y1: "135", x2: "610", y2: String(rSvc.y + 28), stroke: "var(--color-primary)", "stroke-width": "3" }));
      });
      svg.appendChild(svgEl("rect", { x: "305", y: "62", width: "250", height: "146", rx: "16", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
      svg.appendChild(svgText("Slide 5: Model Context Protocol", { x: "430", y: "90", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText("'The USB-C of AI Tools' (One Plug)", { x: "430", y: "112", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5", "font-weight": "600" }));
      svg.appendChild(svgText("Write your tools ONCE as an MCP Server.", { x: "430", y: "138", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5" }));
      svg.appendChild(svgText("Claude, Cursor, VS Code & ChatGPT", { x: "430", y: "158", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5" }));
      svg.appendChild(svgText("all plug in via tools/list & tools/call!", { x: "430", y: "180", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5", "font-weight": "700" }));
    }

    leftApps.forEach(function (app) {
      svg.appendChild(svgEl("rect", { x: "24", y: String(app.y), width: "226", height: "56", rx: "12", fill: "var(--color-surface-container)", stroke: isMcpMode ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": "2" }));
      svg.appendChild(svgText(app.title, { x: "137", y: String(app.y + 24), "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText(app.sub, { x: "137", y: String(app.y + 43), "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
    });
    rightServices.forEach(function (svc) {
      svg.appendChild(svgEl("rect", { x: "610", y: String(svc.y), width: "226", height: "56", rx: "12", fill: "var(--color-surface-container)", stroke: isMcpMode ? "var(--color-primary)" : "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText(svc.title, { x: "723", y: String(svc.y + 24), "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText(svc.sub, { x: "723", y: String(svc.y + 43), "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
    });
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
  function renderMcpAndEndpointsWorkshop(container) {
    if (!container) return;
    var d = getData();
    var waiterSteps = d.API_WAITER_STEPS || [];
    var endpointParts = d.ENDPOINT_PARTS || [];
    var mcpStages = d.MCP_COURSE_STAGES || [];
    var mcpPrims = d.MCP_PRIMITIVES || [];
    var fivePatterns = d.FIVE_PATTERNS || [];

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Interactive visual guide — click any step or pill to inspect in the Left Side Panel";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How APIs & Endpoints work (in 5 mins) — and how to understand & build MCP Servers";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "Built directly around Aaron Jack's 'What is an API (in 5 minutes)' and Tech With Tim's 'MCP Servers Explained & Built'. Click any stage or pill below to explore the diagram and read the full breakdown in the Left Side Panel.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    var activeTab = "api-explainer";
    var activeWaiterIdx = 0;
    var activeEndpointIdx = 1;
    var activeMcpStageIdx = 0;
    var activeLoopStepIdx = 0;
    var isMcpDiagramMode = true;
    var activePrimIdx = 0;
    var activeAuthModeIdx = 2;
    var activeBuildVerIdx = 0;
    var activePatternIdx = 4;

    var tabsBar = document.createElement("div");
    tabsBar.className = "vocab-top-tabs-bar";
    var workshopHost = document.createElement("div");
    workshopHost.className = "reliability-workshop-host";

    function syncMcpStageToSidePanel(isUserClick) {
      var st = mcpStages[activeMcpStageIdx];
      if (!st) return;
      if (activeMcpStageIdx === 0 && st.steps && st.steps[activeLoopStepIdx]) {
        var lp = st.steps[activeLoopStepIdx];
        showInspectorCard({ badgeText: st.badge, badgeClass: st.badgeClass, title: lp.title, bodyText: lp.detail, codeText: lp.wireJson }, isUserClick);
      } else if (activeMcpStageIdx === 1 && mcpPrims[activePrimIdx]) {
        var pr = mcpPrims[activePrimIdx];
        showInspectorCard({ badgeText: pr.badge, badgeClass: pr.badgeClass, title: pr.title, calloutText: pr.analogy, bodyText: pr.whatItIs, codeText: pr.example }, isUserClick);
      } else if (activeMcpStageIdx === 2 && st.modes && st.modes[activeAuthModeIdx]) {
        var md = st.modes[activeAuthModeIdx];
        showInspectorCard({ badgeText: md.badge, badgeClass: md.badgeClass, title: md.title, bodyText: md.whatItIs, codeText: md.codeSnippet }, isUserClick);
      } else if (activeMcpStageIdx === 3 && st.versions && st.versions[activeBuildVerIdx]) {
        var vr = st.versions[activeBuildVerIdx];
        showInspectorCard({ badgeText: vr.badge, badgeClass: vr.badgeClass, title: vr.title, bodyText: vr.takeaway, codeText: vr.code }, isUserClick);
      }
    }

    function render() {
      tabsBar.replaceChildren();
      [
        { id: "api-explainer", label: "1. What is an API & Endpoint? (Waiter analogy + 7-part X-ray)", icon: "restaurant" },
        { id: "mcp-course", label: "2. MCP Servers Explained & Built (Tool loop · Local vs. Remote · Python build)", icon: "usb" },
        { id: "five-patterns", label: "3. REST API vs. Webhook vs. Streaming vs. MCP (When to use which)", icon: "compare_arrows" }
      ].forEach(function (t) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.id = "mcp-tab-" + t.id;
        btn.className = "vocab-top-tab-btn" + (activeTab === t.id ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined btn-icon-sm";
        ic.textContent = t.icon;
        var sp = document.createElement("span");
        sp.textContent = t.label;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeTab = t.id;
          render();
          if (t.id === "api-explainer" && waiterSteps[activeWaiterIdx]) {
            showApiWaiterStepInSidePanel(waiterSteps[activeWaiterIdx], true);
          } else if (t.id === "mcp-course") {
            syncMcpStageToSidePanel(true);
          } else if (t.id === "five-patterns" && fivePatterns[activePatternIdx]) {
            var pt = fivePatterns[activePatternIdx];
            showInspectorCard({ badgeText: pt.whoStarts, badgeClass: "badge-info", title: pt.shortPill, calloutText: "Best for: " + pt.bestFor, bodyText: pt.howItWorks, bannerText: pt.whenNotToUse }, true);
          }
        });
        tabsBar.appendChild(btn);
      });

      workshopHost.replaceChildren();
      if (activeTab === "api-explainer") {
        renderApiExplainerTab(workshopHost);
      } else if (activeTab === "mcp-course") {
        renderMcpCourseTab(workshopHost);
      } else {
        renderFivePatternsTab(workshopHost);
      }
    }

    function renderApiExplainerTab(host) {
      var waiterCard = document.createElement("div");
      waiterCard.className = "nested-card";
      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "Part A · What is an API? The Restaurant & Waiter Analogy (click any station to inspect in Left Side Panel):";
      topRow.appendChild(titleStrong);
      topRow.appendChild(createVideoLinkRow([{ label: "Watch: What is an API (in 5 minutes) — Aaron Jack", url: d.API_VIDEO_URL, icon: "play_circle" }]));
      waiterCard.appendChild(topRow);

      waiterCard.appendChild(createPillCluster(waiterSteps, activeWaiterIdx, function (s) { return s.shortPill; }, function (s) { return s.icon; }, function (st, idx) {
        activeWaiterIdx = idx;
        render();
        showApiWaiterStepInSidePanel(st, true);
      }));

      var curWaiter = waiterSteps[activeWaiterIdx] || waiterSteps[0];
      waiterCard.appendChild(createApiWaiterSvg(curWaiter.id, function (stepId) {
        waiterSteps.forEach(function (s, i) { if (s.id === stepId) activeWaiterIdx = i; });
        render();
        showApiWaiterStepInSidePanel(waiterSteps[activeWaiterIdx], true);
      }));
      host.appendChild(waiterCard);

      var xrayCard = document.createElement("div");
      xrayCard.className = "nested-card";
      var xrayTitle = document.createElement("strong");
      xrayTitle.className = "diagram-node-title";
      xrayTitle.textContent = "Part B · Inside the Waiter's Order Pad: Click all 7 parts of a live API Endpoint call (opens in Left Side Panel):";
      xrayCard.appendChild(xrayTitle);

      xrayCard.appendChild(createPillCluster(endpointParts, activeEndpointIdx, function (ep) { return ep.shortPill; }, function (ep) { return ep.icon; }, function (ep, idx) {
        activeEndpointIdx = idx;
        render();
        showEndpointPartInSidePanel(ep, true);
      }));

      var curEp = endpointParts[activeEndpointIdx] || endpointParts[0];
      xrayCard.appendChild(createEndpointAnatomySvg(curEp.id, function (partId) {
        endpointParts.forEach(function (p, i) { if (p.id === partId) activeEndpointIdx = i; });
        render();
        showEndpointPartInSidePanel(endpointParts[activeEndpointIdx], true);
      }));
      host.appendChild(xrayCard);
    }

    function renderMcpCourseTab(host) {
      var courseCard = document.createElement("div");
      courseCard.className = "nested-card";
      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent = "Explore the 4 chapters of Tech With Tim's MCP walkthrough (click any chapter or step to inspect in Left Side Panel):";
      topRow.appendChild(titleStrong);
      topRow.appendChild(createVideoLinkRow([
        { label: "Watch: MCP Servers Explained & Built — Tech With Tim", url: d.MCP_VIDEO_URL, icon: "play_circle" },
        { label: "GitHub Code (v1 -> v3)", url: d.MCP_REPO_URL, icon: "code" }
      ]));
      courseCard.appendChild(topRow);

      courseCard.appendChild(createPillCluster(mcpStages, activeMcpStageIdx, function (st) { return st.shortTab; }, function (st) { return st.icon; }, function (st, idx) {
        activeMcpStageIdx = idx;
        render();
        syncMcpStageToSidePanel(true);
      }));

      var curStage = mcpStages[activeMcpStageIdx] || mcpStages[0];
      var summaryP = document.createElement("p");
      summaryP.className = "resource-desc";
      summaryP.textContent = curStage.summary;
      courseCard.appendChild(summaryP);

      if (activeMcpStageIdx === 0) {
        courseCard.appendChild(createPillCluster(curStage.steps, activeLoopStepIdx, function (lp) { return lp.pill; }, null, function (lp, idx) {
          activeLoopStepIdx = idx;
          render();
          syncMcpStageToSidePanel(true);
        }));
        courseCard.appendChild(createMcpToolLoopSvg(activeLoopStepIdx));
      } else if (activeMcpStageIdx === 1) {
        var modes = [
          { mode: false, label: "Slide 4 · Before MCP: Custom Plumbing (M×N)", icon: "cable" },
          { mode: true, label: "Slide 5 · With MCP: Universal USB-C Plug (M+N)", icon: "usb" }
        ];
        courseCard.appendChild(createPillCluster(modes, isMcpDiagramMode ? 1 : 0, function (m) { return m.label; }, function (m) { return m.icon; }, function (m) {
          isMcpDiagramMode = m.mode;
          render();
        }));
        courseCard.appendChild(createMcpVsApiSvg(isMcpDiagramMode));
        courseCard.appendChild(createPillCluster(mcpPrims, activePrimIdx, function (pr) { return pr.title; }, function (pr) { return pr.icon; }, function (pr, idx) {
          activePrimIdx = idx;
          render();
          syncMcpStageToSidePanel(true);
        }));
      } else if (activeMcpStageIdx === 2) {
        courseCard.appendChild(createPillCluster(curStage.modes, activeAuthModeIdx, function (md) { return md.pill; }, null, function (md, idx) {
          activeAuthModeIdx = idx;
          render();
          syncMcpStageToSidePanel(true);
        }));
        var curMode = curStage.modes[activeAuthModeIdx] || curStage.modes[0];
        courseCard.appendChild(createLocalRemoteAuthSvg(curMode.id));
      } else if (activeMcpStageIdx === 3) {
        courseCard.appendChild(createPillCluster(curStage.versions, activeBuildVerIdx, function (vr) { return vr.pill; }, null, function (vr, idx) {
          activeBuildVerIdx = idx;
          render();
          syncMcpStageToSidePanel(true);
        }));
        var curVer = curStage.versions[activeBuildVerIdx] || curStage.versions[0];
        var codeView = document.createElement("div");
        codeView.className = "vocab-example-box";
        codeView.style.whiteSpace = "pre-wrap";
        codeView.textContent = curVer.code;
        courseCard.appendChild(codeView);
      }
      host.appendChild(courseCard);
    }

    function renderFivePatternsTab(host) {
      var patCard = document.createElement("div");
      patCard.className = "nested-card";
      var leadP = document.createElement("p");
      leadP.className = "resource-desc";
      leadP.textContent = "Click any of the 5 communication patterns below to inspect how it works and when to use it in the Left Side Panel:";
      patCard.appendChild(leadP);
      patCard.appendChild(createPillCluster(fivePatterns, activePatternIdx, function (pt) { return pt.shortPill; }, function (pt) { return pt.icon; }, function (pt, idx) {
        activePatternIdx = idx;
        render();
        showInspectorCard({ badgeText: pt.whoStarts, badgeClass: "badge-info", title: pt.shortPill, calloutText: "Best for: " + pt.bestFor, bodyText: pt.howItWorks, bannerText: pt.whenNotToUse }, true);
      }));
      host.appendChild(patCard);
    }

    render();
    if (waiterSteps[0]) {
      showApiWaiterStepInSidePanel(waiterSteps[0], false);
    }
    card.appendChild(tabsBar);
    card.appendChild(workshopHost);
    container.appendChild(card);
  }

  window.renderMcpAndEndpointsWorkshop = renderMcpAndEndpointsWorkshop;
})();
