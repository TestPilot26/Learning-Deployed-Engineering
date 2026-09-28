// Deployed Eng Pipeline — Illustrated Interactive Graphics for Step 6 (MCP vs. API & Endpoints)
// Implements:
// 1. Brain-in-Gear (MCP) vs. Interlocking Puzzle Pieces (API) interactive graphic
// 2. "Before MCP" vs. "After MCP" interactive hub graphic (LLM <-> Unified API <-> MCP <-> Unique API <-> Slack / Drive / GitHub)
// 3. Illustrated Restaurant Waiter & Puzzle-Piece API Flow with hover light-up states & animated packets
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

  // Helper: Draw Slack 4-color pinwheel icon at (cx, cy)
  function drawSlackLogo(parent, cx, cy) {
    var g = svgEl("g", { transform: "translate(" + cx + "," + cy + ")" });
    g.appendChild(svgEl("circle", { cx: "0", cy: "0", r: "22", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-outline-variant)", "stroke-width": "1.5" }));
    // 4 colored capsules + 4 dots
    g.appendChild(svgEl("rect", { x: "-11", y: "-4", width: "10", height: "4.5", rx: "2.2", fill: "var(--color-error)" }));
    g.appendChild(svgEl("circle", { cx: "-8.5", cy: "-7.5", r: "2.3", fill: "var(--color-error)" }));
    g.appendChild(svgEl("rect", { x: "-4", y: "-11", width: "4.5", height: "10", rx: "2.2", fill: "var(--color-secondary)" }));
    g.appendChild(svgEl("circle", { cx: "4", cy: "-8.5", r: "2.3", fill: "var(--color-secondary)" }));
    g.appendChild(svgEl("rect", { x: "1", y: "-0.5", width: "10", height: "4.5", rx: "2.2", fill: "var(--color-tertiary)" }));
    g.appendChild(svgEl("circle", { cx: "8.5", cy: "7.5", r: "2.3", fill: "var(--color-tertiary)" }));
    g.appendChild(svgEl("rect", { x: "-0.5", y: "1", width: "4.5", height: "10", rx: "2.2", fill: "var(--color-primary)" }));
    g.appendChild(svgEl("circle", { cx: "-4", cy: "8.5", r: "2.3", fill: "var(--color-primary)" }));
    parent.appendChild(g);
  }

  // Helper: Draw Google Drive triangle ribbon icon at (cx, cy)
  function drawDriveLogo(parent, cx, cy) {
    var g = svgEl("g", { transform: "translate(" + cx + "," + cy + ")" });
    g.appendChild(svgEl("circle", { cx: "0", cy: "0", r: "22", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-outline-variant)", "stroke-width": "1.5" }));
    g.appendChild(svgEl("polygon", { points: "-4,-11 4,-11 13,5 5,5", fill: "var(--color-error)" }));
    g.appendChild(svgEl("polygon", { points: "-4,-11 4,-11 -5,5 -13,5", fill: "var(--color-tertiary)" }));
    g.appendChild(svgEl("polygon", { points: "-11,5 13,5 9,12 -13,12", fill: "var(--color-primary)" }));
    parent.appendChild(g);
  }

  // Helper: Draw GitHub Octocat circle icon at (cx, cy)
  function drawGitHubLogo(parent, cx, cy) {
    var g = svgEl("g", { transform: "translate(" + cx + "," + cy + ")" });
    g.appendChild(svgEl("circle", { cx: "0", cy: "0", r: "22", fill: "var(--color-on-surface)" }));
    g.appendChild(svgEl("path", {
      d: "M 0 -12 C -6.6 -12 -12 -6.6 -12 0 C -12 5.3 -8.6 9.8 -3.8 11.4 C -3.2 11.5 -3 11.1 -3 10.8 L -3 8.6 C -6.3 9.3 -7 7 -7 7 C -7.5 5.6 -8.3 5.3 -8.3 5.3 C -9.4 4.6 -8.2 4.6 -8.2 4.6 C -7 4.7 -6.4 5.8 -6.4 5.8 C -5.3 7.6 -3.6 7.1 -2.9 6.8 C -2.8 6 -2.5 5.5 -2.1 5.2 C -4.8 4.9 -7.6 3.9 -7.6 -0.7 C -7.6 -2 -7.1 -3.1 -6.4 -3.9 C -6.5 -4.2 -6.9 -5.5 -6.3 -7.1 C -6.3 -7.1 -5.3 -7.4 -3 -5.9 C -2 -6.2 -1 -6.3 0 -6.3 C 1 -6.3 2 -6.2 3 -5.9 C 5.3 -7.4 6.3 -7.1 6.3 -7.1 C 6.9 -5.5 6.5 -4.2 6.4 -3.9 C 7.1 -3.1 7.6 -2 7.6 -0.7 C 7.6 3.9 4.8 4.9 2.1 5.2 C 2.6 5.6 3 6.4 3 7.6 L 3 10.8 C 3 11.1 3.2 11.5 3.8 11.4 C 8.6 9.8 12 5.3 12 0 C 12 -6.6 6.6 -12 0 -12 Z",
      fill: "var(--color-surface-container-lowest)"
    }));
    parent.appendChild(g);
  }

  // Helper: Draw LLM glowing prompt box at (cx, cy)
  function drawLlmNode(parent, cx, cy, isHighlighted) {
    var g = svgEl("g", { transform: "translate(" + cx + "," + cy + ")" });
    if (isHighlighted) {
      g.appendChild(svgEl("rect", {
        x: "-30", y: "-26", width: "60", height: "52", rx: "15",
        fill: "none", stroke: "var(--color-secondary-fixed-dim)", "stroke-width": "3",
        class: "mcp-pulse-ring"
      }));
    }
    g.appendChild(svgEl("rect", {
      x: "-25", y: "-21", width: "50", height: "42", rx: "12",
      fill: "var(--color-secondary-container)",
      stroke: isHighlighted ? "var(--color-primary)" : "var(--color-secondary)",
      "stroke-width": isHighlighted ? "3" : "2"
    }));
    g.appendChild(svgEl("rect", {
      x: "-15", y: "-8", width: "30", height: "16", rx: "4",
      fill: "none", stroke: "var(--color-on-secondary-container)", "stroke-width": "2"
    }));
    g.appendChild(svgEl("circle", { cx: "-9", cy: "0", r: "1.8", fill: "var(--color-on-secondary-container)" }));
    g.appendChild(svgEl("circle", { cx: "-3", cy: "0", r: "1.8", fill: "var(--color-on-secondary-container)" }));
    g.appendChild(svgEl("line", { x1: "3", y1: "0", x2: "10", y2: "0", stroke: "var(--color-on-secondary-container)", "stroke-width": "2", "stroke-linecap": "round" }));
    g.appendChild(svgText("LLM", {
      x: "0", y: "36", "text-anchor": "middle",
      fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700"
    }));
    parent.appendChild(g);
  }

  // Helper: Draw the S-curve Model Context Protocol (MCP) Hub icon at (cx, cy)
  function drawMcpHubNode(parent, cx, cy, isHighlighted) {
    var g = svgEl("g", { transform: "translate(" + cx + "," + cy + ")" });
    g.appendChild(svgEl("circle", {
      cx: "0", cy: "0", r: "26",
      fill: isHighlighted ? "var(--color-primary-container)" : "var(--color-surface-container-lowest)",
      stroke: "var(--color-primary)",
      "stroke-width": isHighlighted ? "3.2" : "2.2"
    }));
    // Iconic intertwined S-curve tracks of the MCP emblem
    g.appendChild(svgEl("path", {
      d: "M -11 6 L -2 -10 A 5 5 0 0 1 7 -5 L -2 10 A 5 5 0 0 0 7 15 L 13 4",
      fill: "none",
      stroke: "var(--color-primary)",
      "stroke-width": "3.2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }));
    g.appendChild(svgEl("path", {
      d: "M -13 -4 L -7 -14 A 5 5 0 0 1 2 -9 L -7 7",
      fill: "none",
      stroke: "var(--color-secondary)",
      "stroke-width": "2.6",
      "stroke-linecap": "round"
    }));
    g.appendChild(svgText("Model Context", {
      x: "34", y: "-4", "text-anchor": "start",
      fill: "var(--color-primary)", "font-size": "12", "font-weight": "700"
    }));
    g.appendChild(svgText("Protocol (MCP)", {
      x: "34", y: "12", "text-anchor": "start",
      fill: "var(--color-primary)", "font-size": "12", "font-weight": "700"
    }));
    parent.appendChild(g);
  }

  // ============================================================================
  // GRAPHIC 1: SIDE-BY-SIDE VISUAL ANALOGY (BRAIN-IN-GEAR MCP vs. 3 PUZZLE PIECES API)
  //            + BEFORE MCP vs. AFTER MCP INTERACTIVE HUB (HOVER TO LIGHT UP!)
  // ============================================================================
  function createVisualMcpVsApiExplorer(onInspectItem) {
    var wrap = document.createElement("div");
    wrap.className = "mcp-visual-explorer-wrap";

    var activeHoverId = "after-mcp-hub";

    var DETAIL_MAP = {
      "concept-mcp": {
        badge: "Visual Analogy · Brain + Gear",
        badgeClass: "badge-info",
        title: "MCP (Model Context Protocol): Gives an AI Brain a universal gear to run tools",
        analogy: "Why the icon is a Brain inside a Gear: The Brain is the AI Language Model (thinking & writing), and the Gear is the standardized mechanical teeth that let that Brain turn outside tools (Slack, Drive, GitHub, Postgres).",
        body: "On its own, an LLM is a brain in a jar—it can only read text and reply with text. Model Context Protocol (MCP) wraps a universal gear around that brain so any AI app (Claude, Cursor, VS Code, Gemini) can ask 'What tools do you have?' (tools/list) and trigger actions (tools/call) using one shared standard.",
        code: "// MCP = Universal AI-to-Tool standard\n{\"method\": \"tools/list\"}  ->  Discovers available tools\n{\"method\": \"tools/call\", \"params\": {\"name\": \"search_drive\"}}"
      },
      "concept-api": {
        badge: "Visual Analogy · Interlocking Puzzle Pieces",
        badgeClass: "badge-success",
        title: "API (Application Programming Interface): The interlocking puzzle pieces between two apps",
        analogy: "Why the icon is 3 Interlocking Puzzle Pieces (from Aaron Jack's video): Modern apps are built by snapping existing software pieces together instead of coding everything from scratch.",
        body: "• Orange Top Piece (Your App, e.g. Uber or Expedia): Needs road maps, flight prices, or credit-card checkout.\n• Coral Bottom-Left Piece (The API Connector): Defines the exact tab shape (the Endpoint URL + JSON format) that two programs agree to use.\n• Blue Bottom-Right Piece (External Service, e.g. Google Maps or Stripe): Snaps cleanly into your app via the API without exposing its private kitchen code!",
        code: "// API = Two software puzzle pieces snapping together:\nGET https://api.stripe.com/v1/charges\nAuthorization: Bearer sk_live_...\n-> Returns: {\"status\": \"succeeded\", \"amount\": 2000}"
      },
      "before-mcp": {
        badge: "Before MCP · N × M Custom Wiring",
        badgeClass: "badge-danger",
        title: "Before MCP: Every LLM needed a separate 'Unique API' translator for Slack, Drive & GitHub",
        analogy: "Like needing a different charger cable for every single brand of phone, headphones, and laptop.",
        body: "Look at the left side of the diagram: Slack's API speaks one custom format, Google Drive's API speaks another, and GitHub's API speaks a third. Before MCP, if you wanted your LLM to use all three, you had to write and maintain 3 separate 'Unique API' connectors—and if you switched from Claude to Cursor, you had to rebuild those connectors all over again!",
        code: "# Before MCP: 3 separate custom API wrappers to maintain\ncall_slack_custom_api(token, channel, msg)\ncall_gdrive_custom_api(oauth_creds, file_id)\ncall_github_custom_api(pat_token, repo, issue)"
      },
      "after-mcp-hub": {
        badge: "After MCP · 1 Unified API + Standard Hub",
        badgeClass: "badge-success",
        title: "After MCP: The LLM speaks ONE 'Unified API' to the Model Context Protocol (MCP) Hub",
        analogy: "Like plugging a single USB-C dock into your laptop—and plugging Slack, Google Drive, and GitHub into the dock!",
        body: "Look at the right side of the diagram:\n1. Top wire ('Unified API'): Your LLM only speaks ONE standardized language—Model Context Protocol (MCP).\n2. Center Hub ('Model Context Protocol'): Translates that unified tool request.\n3. Bottom wires ('Unique API'): Each service's MCP server handles talking to Slack, Google Drive, or GitHub's Unique API underneath. Hover over Slack, Google Drive, or GitHub on the right to watch the full path light up!",
        code: "# After MCP: Every tool plugs into the same Unified MCP interface!\n@mcp.tool()\ndef search_github_issues(query: str) -> list[dict]:\n    \"\"\"Any MCP client (Claude, Cursor, Gemini) can call this automatically.\"\"\""
      },
      "app-slack": {
        badge: "Connected Tool · Slack MCP",
        badgeClass: "badge-info",
        title: "Connecting to Slack: Direct Unique API (Before) vs. Slack MCP Server (After)",
        analogy: "Watch the arrows light up: On the left, the LLM must speak Slack's custom API directly. On the right, the LLM speaks Unified MCP -> Slack MCP Server -> Slack API.",
        body: "When an AI agent needs to read a team channel or post a status update in Slack, the Slack MCP Server exposes simple tools like 'list_channels()' and 'post_message()' so any MCP-compatible AI can use Slack safely.",
        code: "// Tool exposed by the Slack MCP Server:\n{\"name\": \"slack_post_message\", \"arguments\": {\"channel\": \"# launches\", \"text\": \"Deployed!\"}}"
      },
      "app-drive": {
        badge: "Connected Tool · Google Drive MCP",
        badgeClass: "badge-info",
        title: "Connecting to Google Drive: Direct Unique API (Before) vs. Drive MCP Server (After)",
        analogy: "Watch the middle arrows light up: The LLM asks MCP for a document -> MCP calls Google Drive's Unique API -> returns the doc text.",
        body: "Instead of writing custom Google Drive REST API code inside every AI agent, a Google Drive MCP Server exposes 'search_files(query)' and 'read_document(doc_id)' over the unified MCP protocol.",
        code: "// Tool exposed by Google Drive MCP Server:\n{\"name\": \"gdrive_search\", \"arguments\": {\"query\": \"Q3 launch checklist\"}}"
      },
      "app-github": {
        badge: "Connected Tool · GitHub MCP",
        badgeClass: "badge-info",
        title: "Connecting to GitHub: Direct Unique API (Before) vs. GitHub MCP Server (After)",
        analogy: "Watch the right arrows light up: The LLM sends a unified MCP call -> MCP Hub -> GitHub's Unique API.",
        body: "With the official GitHub MCP Server plugged in, Claude Code, Cursor, or Gemini can inspect Pull Requests, search code files, and file issues using the exact same unified MCP wire.",
        code: "// Tool exposed by GitHub MCP Server:\n{\"name\": \"create_pull_request\", \"arguments\": {\"title\": \"Fix auth timeout\", \"base\": \"main\"}}"
      }
    };

    var statusBanner = document.createElement("div");
    statusBanner.className = "mcp-hover-status-banner";

    var svgHost = document.createElement("div");
    svgHost.className = "mcp-interactive-svg-host";

    function renderGraphic(triggerSidePanel) {
      svgHost.replaceChildren();
      var info = DETAIL_MAP[activeHoverId] || DETAIL_MAP["after-mcp-hub"];

      var WIRE_TRACE_LABELS = {
        "concept-mcp": "Active path: AI Brain ➔ Mechanical Gear (MCP) ➔ External Tools (Click card for code & details in Left Panel)",
        "concept-api": "Active path: Your App (Top Piece) ⟷ API Connector (Left Piece) ⟷ External Service (Right Piece) — Click for details",
        "before-mcp": "Active path: LLM ⟷ 3 separate 'Unique API' wires to Slack, Google Drive & GitHub (Click to inspect in Left Panel)",
        "after-mcp-hub": "Active path: LLM ⟷ 1 'Unified API' ⟷ Model Context Protocol (MCP) Hub ⟷ Slack / Drive / GitHub (Click to inspect)",
        "app-slack": "Active path: LLM ⟷ Unified API ⟷ MCP Hub ⟷ Slack Unique API (Click Slack icon for MCP tool JSON in Left Panel)",
        "app-drive": "Active path: LLM ⟷ Unified API ⟷ MCP Hub ⟷ Google Drive Unique API (Click Drive icon for MCP tool JSON)",
        "app-github": "Active path: LLM ⟷ Unified API ⟷ MCP Hub ⟷ GitHub Unique API (Click GitHub icon for MCP tool JSON)"
      };

      statusBanner.replaceChildren();
      var sbBadge = document.createElement("span");
      sbBadge.className = "badge " + info.badgeClass;
      sbBadge.textContent = info.badge;
      var sbText = document.createElement("span");
      sbText.className = "mcp-hover-status-text";
      sbText.textContent = WIRE_TRACE_LABELS[activeHoverId] || WIRE_TRACE_LABELS["after-mcp-hub"];
      statusBanner.appendChild(sbBadge);
      statusBanner.appendChild(sbText);

      var svg = svgEl("svg", {
        viewBox: "0 0 900 540",
        class: "mcp-vs-api-svg",
        "aria-label": "Interactive graphic comparing MCP (Brain in Gear) vs API (Interlocking Puzzle Pieces) and Before MCP vs After MCP"
      });

      // Outer card background
      svg.appendChild(svgEl("rect", {
        x: "4", y: "4", width: "892", height: "532", rx: "18",
        fill: "var(--color-surface-container-lowest)"
      }));

      // ========================================================================
      // ROW 1 (TOP): API (3 Interlocking Puzzle Pieces — above Before MCP)
      //              vs. MCP (Brain-in-Gear — above After MCP)
      // ========================================================================
      var isApiConcept = activeHoverId === "concept-api" || activeHoverId === "before-mcp";
      var isMcpConcept = activeHoverId === "concept-mcp" || activeHoverId === "after-mcp-hub";

      // Top-Left Card: API (3 Interlocking Jigsaw Puzzle Pieces — directly above Before MCP)
      var apiCardG = svgEl("g", { class: "mcp-interactive-node" });
      apiCardG.appendChild(svgEl("rect", {
        x: "24", y: "18", width: "412", height: "188", rx: "14",
        fill: isApiConcept ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isApiConcept ? "var(--color-primary)" : "var(--color-outline-variant)",
        "stroke-width": isApiConcept ? "2.8" : "1.5"
      }));

      // 3 Interlocking Jigsaw Puzzle Pieces at (92, 114)
      var puzzleG = svgEl("g", { transform: "translate(92, 114) scale(0.92)" });
      // Piece 1 (Top piece — Your App)
      puzzleG.appendChild(svgEl("path", {
        d: "M -26 -48 L -7 -48 C -7 -58, 7 -58, 7 -48 L 26 -48 L 26 -29 C 36 -29, 36 -15, 26 -15 L 26 2 L -26 2 Z",
        fill: "var(--color-tertiary-container)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.5",
        "stroke-linejoin": "round"
      }));
      // Piece 2 (Bottom-Left piece — API Connector locking into top & right)
      puzzleG.appendChild(svgEl("path", {
        d: "M -52 2 L -20 2 C -20 -9, -6 -9, -6 2 L 0 2 L 0 18 C 11 18, 11 32, 0 32 L 0 50 L -52 50 L -52 32 C -42 32, -42 18, -52 18 Z",
        fill: "var(--color-error-container)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.5",
        "stroke-linejoin": "round"
      }));
      // Piece 3 (Bottom-Right piece — External Service locking into Piece 2's right tab)
      puzzleG.appendChild(svgEl("path", {
        d: "M 0 2 L 52 2 L 52 50 L 0 50 L 0 32 C 11 32, 11 18, 0 18 Z",
        fill: "var(--color-secondary-container)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.5",
        "stroke-linejoin": "round"
      }));
      puzzleG.appendChild(svgText("Your App", { x: "0", y: "-20", "text-anchor": "middle", fill: "var(--color-on-tertiary-container)", "font-size": "9.5", "font-weight": "700" }));
      puzzleG.appendChild(svgText("API", { x: "-25", y: "30", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "10.5", "font-weight": "700" }));
      puzzleG.appendChild(svgText("External", { x: "27", y: "30", "text-anchor": "middle", fill: "var(--color-on-secondary-container)", "font-size": "9.5", "font-weight": "700" }));
      apiCardG.appendChild(puzzleG);

      // API Labels on right of Puzzle Pieces (left-aligned at x=156)
      apiCardG.appendChild(svgText("API", { x: "156", y: "64", "text-anchor": "start", fill: "var(--color-on-surface)", "font-size": "26", "font-weight": "700" }));
      apiCardG.appendChild(svgText("Application Programming Interface", { x: "156", y: "88", "text-anchor": "start", fill: "var(--color-on-surface)", "font-size": "14", "font-weight": "600" }));
      apiCardG.appendChild(svgText("Interlocking Software Puzzle Pieces", { x: "156", y: "114", "text-anchor": "start", fill: "var(--color-primary)", "font-size": "11.5", "font-weight": "700" }));
      apiCardG.appendChild(svgText("Lets two programs (e.g. Uber + Maps or", { x: "156", y: "138", "text-anchor": "start", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
      apiCardG.appendChild(svgText("Expedia + Airlines) snap together", { x: "156", y: "156", "text-anchor": "start", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));

      apiCardG.addEventListener("mouseenter", function () {
        if (activeHoverId !== "concept-api") {
          activeHoverId = "concept-api";
          renderGraphic(false);
        }
      });
      apiCardG.addEventListener("click", function () {
        activeHoverId = "concept-api";
        renderGraphic(true);
      });
      svg.appendChild(apiCardG);

      // Center vertical divider line
      svg.appendChild(svgEl("line", { x1: "450", y1: "24", x2: "450", y2: "516", stroke: "var(--color-outline-variant)", "stroke-width": "2" }));

      // Top-Right Card: MCP (Brain inside a Gear — directly above After MCP)
      var mcpCardG = svgEl("g", { class: "mcp-interactive-node" });
      mcpCardG.appendChild(svgEl("rect", {
        x: "464", y: "18", width: "412", height: "188", rx: "14",
        fill: isMcpConcept ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isMcpConcept ? "var(--color-primary)" : "var(--color-outline-variant)",
        "stroke-width": isMcpConcept ? "2.8" : "1.5"
      }));

      // Brain-in-Gear illustration at (534, 112)
      var bgGearG = svgEl("g", { transform: "translate(534, 112) scale(0.88)" });
      bgGearG.appendChild(svgEl("circle", { cx: "0", cy: "0", r: "60", fill: "var(--color-surface-container-lowest)" }));
      // 8 gear teeth around a circle
      [0, 45, 90, 135, 180, 225, 270, 315].forEach(function (deg) {
        bgGearG.appendChild(svgEl("rect", {
          x: "-9", y: "-54", width: "18", height: "16", rx: "3",
          fill: "var(--color-secondary-container)",
          stroke: "var(--color-on-surface)",
          "stroke-width": "2.4",
          transform: "rotate(" + deg + ")"
        }));
      });
      bgGearG.appendChild(svgEl("circle", {
        cx: "0", cy: "0", r: "42",
        fill: "var(--color-secondary-container)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.6"
      }));
      // Head profile inside gear
      bgGearG.appendChild(svgEl("path", {
        d: "M -12 30 L -12 18 L -24 18 L -24 6 L -30 0 L -24 -6 C -24 -22, -12 -31, 4 -31 C 20 -31, 28 -19, 28 -2 C 28 10, 20 18, 12 22 L 12 30 Z",
        fill: "var(--color-surface-container-lowest)",
        stroke: "var(--color-on-surface)",
        "stroke-width": "2.4",
        "stroke-linejoin": "round"
      }));
      // Brain lobes inside head profile
      bgGearG.appendChild(svgEl("path", {
        d: "M -12 -8 C -18 -8, -19 -17, -12 -19 C -10 -25, 0 -25, 2 -19 C 8 -25, 17 -22, 16 -14 C 21 -11, 19 -2, 12 -2 C 12 4, 2 5, 0 -1 C -3 5, -12 3, -12 -8 Z",
        fill: "var(--color-primary-container)",
        stroke: "var(--color-primary)",
        "stroke-width": "2.2"
      }));
      bgGearG.appendChild(svgEl("line", { x1: "1", y1: "-21", x2: "1", y2: "1", stroke: "var(--color-primary)", "stroke-width": "2" }));
      mcpCardG.appendChild(bgGearG);

      // MCP Labels on right of Brain-in-Gear (left-aligned at x=600)
      mcpCardG.appendChild(svgText("MCP", { x: "600", y: "64", "text-anchor": "start", fill: "var(--color-on-surface)", "font-size": "26", "font-weight": "700" }));
      mcpCardG.appendChild(svgText("Model Context Protocol", { x: "600", y: "88", "text-anchor": "start", fill: "var(--color-on-surface)", "font-size": "14.5", "font-weight": "600" }));
      mcpCardG.appendChild(svgText("Brain (AI Model) + Gear (Universal Plug)", { x: "600", y: "114", "text-anchor": "start", fill: "var(--color-primary)", "font-size": "11.5", "font-weight": "700" }));
      mcpCardG.appendChild(svgText("One standard plug so any AI model can", { x: "600", y: "138", "text-anchor": "start", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
      mcpCardG.appendChild(svgText("discover & run tools (hover or click)", { x: "600", y: "156", "text-anchor": "start", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));

      mcpCardG.addEventListener("mouseenter", function () {
        if (activeHoverId !== "concept-mcp") {
          activeHoverId = "concept-mcp";
          renderGraphic(false);
        }
      });
      mcpCardG.addEventListener("click", function () {
        activeHoverId = "concept-mcp";
        renderGraphic(true);
      });
      svg.appendChild(mcpCardG);

      // ========================================================================
      // ROW 2 (BOTTOM): "BEFORE MCP" vs. "AFTER MCP" INTERACTIVE GRAPHIC
      //                 (Modeled directly on user's image #3 — hover to light up!)
      // ========================================================================
      var isBeforeActive = activeHoverId === "before-mcp";
      var isAfterHubActive =
        activeHoverId === "after-mcp-hub" ||
        activeHoverId === "app-slack" ||
        activeHoverId === "app-drive" ||
        activeHoverId === "app-github";

      // Left Panel Background ("Before MCP")
      var beforeBg = svgEl("rect", {
        x: "24", y: "216", width: "412", height: "308", rx: "16",
        fill: isBeforeActive ? "var(--color-error-container)" : "var(--color-surface-container)",
        stroke: isBeforeActive ? "var(--color-error)" : "var(--color-outline-variant)",
        "stroke-width": isBeforeActive ? "2.8" : "1.5",
        class: "mcp-interactive-node"
      });
      beforeBg.addEventListener("mouseenter", function () {
        if (activeHoverId !== "before-mcp") {
          activeHoverId = "before-mcp";
          renderGraphic(false);
        }
      });
      beforeBg.addEventListener("click", function () {
        activeHoverId = "before-mcp";
        renderGraphic(true);
      });
      svg.appendChild(beforeBg);

      svg.appendChild(svgText("Before MCP", {
        x: "230", y: "244", "text-anchor": "middle",
        fill: "var(--color-on-surface)", "font-size": "20", "font-weight": "700"
      }));
      svg.appendChild(svgText("3 tools = 3 separate 'Unique API' wires directly to the LLM", {
        x: "230", y: "263", "text-anchor": "middle",
        fill: "var(--color-on-surface-variant)", "font-size": "11.5"
      }));

      // Right Panel Background ("After MCP")
      var afterBg = svgEl("rect", {
        x: "464", y: "216", width: "412", height: "308", rx: "16",
        fill: isAfterHubActive ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isAfterHubActive ? "var(--color-primary)" : "var(--color-outline-variant)",
        "stroke-width": isAfterHubActive ? "2.8" : "1.5",
        class: "mcp-interactive-node"
      });
      afterBg.addEventListener("mouseenter", function () {
        if (activeHoverId !== "after-mcp-hub") {
          activeHoverId = "after-mcp-hub";
          renderGraphic(false);
        }
      });
      afterBg.addEventListener("click", function () {
        activeHoverId = "after-mcp-hub";
        renderGraphic(true);
      });
      svg.appendChild(afterBg);

      svg.appendChild(svgText("After MCP", {
        x: "670", y: "244", "text-anchor": "middle",
        fill: "var(--color-on-surface)", "font-size": "20", "font-weight": "700"
      }));
      svg.appendChild(svgText("LLM speaks 1 'Unified API' to MCP — hover any tool below to trace!", {
        x: "670", y: "263", "text-anchor": "middle",
        fill: "var(--color-primary)", "font-size": "11.5", "font-weight": "700"
      }));

      // --- LEFT ("BEFORE MCP") NODES & WIRES ---
      drawLlmNode(svg, 230, 300, isBeforeActive);

      var leftTools = [
        { id: "app-slack", label: "Slack", x: 110, y: 468, labelX: 156, labelY: 398, drawFn: drawSlackLogo },
        { id: "app-drive", label: "Google Drive", x: 230, y: 468, labelX: 230, labelY: 398, drawFn: drawDriveLogo },
        { id: "app-github", label: "GitHub", x: 350, y: 468, labelX: 304, labelY: 398, drawFn: drawGitHubLogo }
      ];

      leftTools.forEach(function (lt) {
        var isToolHi = isBeforeActive || activeHoverId === lt.id;
        var pathStr = "M 230 344 L " + lt.x + " 442";
        svg.appendChild(svgEl("path", {
          d: pathStr,
          fill: "none",
          stroke: isToolHi ? "var(--color-error)" : "var(--color-outline)",
          "stroke-width": isToolHi ? "3.2" : "2",
          "stroke-dasharray": isToolHi ? "none" : "4 3"
        }));
        if (isToolHi) {
          var dot = svgEl("circle", { r: "4.5", fill: "var(--color-error)" });
          var anim = svgEl("animateMotion", { dur: "1.6s", repeatCount: "indefinite", path: pathStr });
          dot.appendChild(anim);
          svg.appendChild(dot);
        }
        svg.appendChild(svgEl("rect", {
          x: String(lt.labelX - 33), y: String(lt.labelY - 11), width: "66", height: "16", rx: "8",
          fill: "var(--color-surface-container-lowest)",
          stroke: isToolHi ? "var(--color-error)" : "var(--color-outline-variant)",
          "stroke-width": "1"
        }));
        svg.appendChild(svgText("Unique API", {
          x: String(lt.labelX), y: String(lt.labelY), "text-anchor": "middle",
          fill: isToolHi ? "var(--color-error)" : "var(--color-on-surface-variant)",
          "font-size": "10", "font-weight": "700"
        }));

        var toolG = svgEl("g", { class: "mcp-interactive-node" });
        lt.drawFn(toolG, lt.x, lt.y);
        toolG.appendChild(svgText(lt.label, {
          x: String(lt.x), y: String(lt.y + 36), "text-anchor": "middle",
          fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
        }));
        toolG.addEventListener("mouseenter", function () {
          activeHoverId = lt.id;
          renderGraphic(false);
        });
        toolG.addEventListener("click", function (e) {
          e.stopPropagation();
          activeHoverId = lt.id;
          renderGraphic(true);
        });
        svg.appendChild(toolG);
      });

      // --- RIGHT ("AFTER MCP") NODES, UNIFIED WIRE, MCP HUB & UNIQUE WIRES ---
      drawLlmNode(svg, 640, 294, isAfterHubActive);

      // Unified API vertical bidirectional wire (LLM <-> MCP Hub)
      var unifiedPath = "M 640 338 L 640 364";
      svg.appendChild(svgEl("path", {
        d: unifiedPath,
        fill: "none",
        stroke: "var(--color-primary)",
        "stroke-width": isAfterHubActive ? "4" : "2.8"
      }));
      svg.appendChild(svgText("Unified API", {
        x: "682", y: "355", "text-anchor": "start",
        fill: "var(--color-primary)", "font-size": "12", "font-weight": "700"
      }));
      var uniDot = svgEl("circle", { r: "4.5", fill: "var(--color-tertiary)" });
      var uniAnim = svgEl("animateMotion", { dur: "1.1s", repeatCount: "indefinite", path: unifiedPath });
      uniDot.appendChild(uniAnim);
      svg.appendChild(uniDot);

      // MCP Hub Node at (640, 390)
      var hubG = svgEl("g", { class: "mcp-interactive-node" });
      drawMcpHubNode(hubG, 640, 390, isAfterHubActive);
      hubG.addEventListener("mouseenter", function () {
        activeHoverId = "after-mcp-hub";
        renderGraphic(false);
      });
      hubG.addEventListener("click", function (e) {
        e.stopPropagation();
        activeHoverId = "after-mcp-hub";
        renderGraphic(true);
      });
      svg.appendChild(hubG);

      var rightTools = [
        { id: "app-slack", label: "Slack", x: 530, y: 472, labelX: 566, labelY: 436, drawFn: drawSlackLogo },
        { id: "app-drive", label: "Google Drive", x: 640, y: 472, labelX: 640, labelY: 436, drawFn: drawDriveLogo },
        { id: "app-github", label: "GitHub", x: 750, y: 472, labelX: 714, labelY: 436, drawFn: drawGitHubLogo }
      ];

      rightTools.forEach(function (rt) {
        var isRouteHi = activeHoverId === "after-mcp-hub" || activeHoverId === rt.id;
        var fanPath = "M 640 416 L " + rt.x + " 448";
        svg.appendChild(svgEl("path", {
          d: fanPath,
          fill: "none",
          stroke: isRouteHi ? "var(--color-tertiary)" : "var(--color-outline)",
          "stroke-width": isRouteHi ? "3.2" : "2"
        }));
        if (isRouteHi) {
          var fDot = svgEl("circle", { r: "4.2", fill: "var(--color-tertiary)" });
          var fAnim = svgEl("animateMotion", { dur: "1.3s", repeatCount: "indefinite", path: fanPath });
          fDot.appendChild(fAnim);
          svg.appendChild(fDot);
        }
        svg.appendChild(svgEl("rect", {
          x: String(rt.labelX - 31), y: String(rt.labelY - 10), width: "62", height: "15", rx: "7.5",
          fill: "var(--color-surface-container-lowest)",
          stroke: isRouteHi ? "var(--color-tertiary)" : "var(--color-outline-variant)",
          "stroke-width": "1"
        }));
        svg.appendChild(svgText("Unique API", {
          x: String(rt.labelX), y: String(rt.labelY), "text-anchor": "middle",
          fill: isRouteHi ? "var(--color-on-surface)" : "var(--color-on-surface-variant)",
          "font-size": "9.5", "font-weight": "700"
        }));

        var rToolG = svgEl("g", { class: "mcp-interactive-node" });
        rt.drawFn(rToolG, rt.x, rt.y);
        rToolG.appendChild(svgText(rt.label, {
          x: String(rt.x), y: String(rt.y + 36), "text-anchor": "middle",
          fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
        }));
        rToolG.addEventListener("mouseenter", function () {
          activeHoverId = rt.id;
          renderGraphic(false);
        });
        rToolG.addEventListener("click", function (e) {
          e.stopPropagation();
          activeHoverId = rt.id;
          renderGraphic(true);
        });
        svg.appendChild(rToolG);
      });

      svgHost.appendChild(svg);

      if (triggerSidePanel && typeof onInspectItem === "function") {
        onInspectItem(info);
      }
    }

    wrap.appendChild(statusBanner);
    wrap.appendChild(svgHost);
    renderGraphic(false);
    return wrap;
  }

  // ============================================================================
  // GRAPHIC 2: ILLUSTRATED API PUZZLE-PIECE & WAITER GRAPHIC (WITH ANIMATED ARROWS)
  // ============================================================================
  function createIllustratedApiWaiterSvg(activeStepId, onSelectStepId) {
    var svg = svgEl("svg", {
      viewBox: "0 0 880 306",
      class: "mcp-vs-api-svg",
      "aria-label": "Illustrated API Puzzle Piece and Restaurant Waiter diagram with animated request and response arrows"
    });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "872", height: "298", rx: "16", fill: "var(--color-surface-container-lowest)" }));
    svg.appendChild(svgText("How an API snaps two programs together (Hover or click any station — watch the Request & JSON Response flow!)", {
      x: "440", y: "24", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700"
    }));

    // Animated Top Request Arrow Track (above cards at y=50)
    var reqPath = "M 110 50 L 770 50";
    svg.appendChild(svgEl("path", { d: reqPath, fill: "none", stroke: "var(--color-primary)", "stroke-width": "2.8" }));
    var reqDot = svgEl("circle", { r: "5", fill: "var(--color-primary)" });
    reqDot.appendChild(svgEl("animateMotion", { dur: "2.4s", repeatCount: "indefinite", path: reqPath }));
    svg.appendChild(reqDot);
    svg.appendChild(svgText("1. HTTP Request Order (GET /flights or POST /charge + API Key) ➔", {
      x: "440", y: "42", "text-anchor": "middle", fill: "var(--color-primary)", "font-size": "10.5", "font-weight": "700"
    }));

    // Inter-station connector lines at y=132
    svg.appendChild(svgEl("line", { x1: "202", y1: "132", x2: "234", y2: "132", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "422", y1: "132", x2: "456", y2: "132", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
    svg.appendChild(svgEl("line", { x1: "644", y1: "132", x2: "676", y2: "132", stroke: "var(--color-primary)", "stroke-width": "2.5" }));

    var stations = [
      { id: "api-step-client", x: 18, w: 184, topTag: "1. YOUR APP (CLIENT)", title: "You at the Table", sub1: "Uber · Expedia · Browser", sub2: "Left Puzzle Piece", iconType: "laptop" },
      { id: "api-step-menu", x: 234, w: 188, topTag: "2. THE MENU (CONTRACT)", title: "API Docs & Endpoints", sub1: "GET /v1/weather", sub2: "Allowed puzzle shapes", iconType: "menu" },
      { id: "api-step-waiter", x: 456, w: 188, topTag: "3. THE WAITER (API)", title: "Interlocking Connector", sub1: "Carries Request & Key", sub2: "Returns JSON tray", iconType: "puzzle" },
      { id: "api-step-kitchen", x: 676, w: 186, topTag: "4. THE KITCHEN (SERVER)", title: "External Service & DB", sub1: "Google Maps · Stripe", sub2: "Right Puzzle Piece", iconType: "server" }
    ];

    stations.forEach(function (st) {
      var isAct = st.id === activeStepId;
      var g = svgEl("g", { class: "mcp-interactive-node" });
      g.appendChild(svgEl("rect", {
        x: String(st.x), y: "62", width: String(st.w), height: "142", rx: "14",
        fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)",
        stroke: isAct ? "var(--color-primary)" : "var(--color-outline-variant)",
        "stroke-width": isAct ? "3" : "1.8"
      }));

      // Mini visual icon at top of station card
      var icX = st.x + st.w / 2;
      if (st.iconType === "laptop") {
        g.appendChild(svgEl("rect", { x: String(icX - 18), y: "70", width: "36", height: "20", rx: "4", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2" }));
        g.appendChild(svgEl("line", { x1: String(icX - 24), y1: "92", x2: String(icX + 24), y2: "92", stroke: "var(--color-primary)", "stroke-width": "2.5", "stroke-linecap": "round" }));
      } else if (st.iconType === "menu") {
        g.appendChild(svgEl("rect", { x: String(icX - 14), y: "68", width: "28", height: "24", rx: "3", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-primary)", "stroke-width": "2" }));
        g.appendChild(svgEl("line", { x1: String(icX - 8), y1: "76", x2: String(icX + 8), y2: "76", stroke: "var(--color-primary)", "stroke-width": "2" }));
        g.appendChild(svgEl("line", { x1: String(icX - 8), y1: "83", x2: String(icX + 8), y2: "83", stroke: "var(--color-tertiary)", "stroke-width": "2" }));
      } else if (st.iconType === "puzzle") {
        g.appendChild(svgEl("path", {
          d: "M " + (icX - 16) + " 70 L " + (icX + 8) + " 70 L " + (icX + 8) + " 77 C " + (icX + 16) + " 77, " + (icX + 16) + " 85, " + (icX + 8) + " 85 L " + (icX + 8) + " 92 L " + (icX - 16) + " 92 Z",
          fill: "var(--color-error-container)", stroke: "var(--color-error)", "stroke-width": "2"
        }));
      } else {
        g.appendChild(svgEl("rect", { x: String(icX - 16), y: "68", width: "32", height: "10", rx: "3", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-tertiary)", "stroke-width": "2" }));
        g.appendChild(svgEl("rect", { x: String(icX - 16), y: "82", width: "32", height: "10", rx: "3", fill: "var(--color-surface-container-lowest)", stroke: "var(--color-tertiary)", "stroke-width": "2" }));
      }

      var cx = String(icX);
      g.appendChild(svgText(st.topTag, { x: cx, y: "112", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-primary)", "font-size": "10", "font-weight": "700" }));
      g.appendChild(svgText(st.title, { x: cx, y: "132", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      g.appendChild(svgText(st.sub1, { x: cx, y: "154", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-family": "monospace" }));
      g.appendChild(svgText(st.sub2, { x: cx, y: "174", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "11", "font-weight": "600" }));

      g.addEventListener("mouseenter", function () {
        if (activeStepId !== st.id) onSelectStepId(st.id, false);
      });
      g.addEventListener("click", function () {
        onSelectStepId(st.id, true);
      });
      svg.appendChild(g);
    });

    // Animated Bottom Response Arrow Track (below cards at y=216)
    var resPath = "M 770 216 L 110 216";
    svg.appendChild(svgEl("path", { d: resPath, fill: "none", stroke: "var(--color-tertiary)", "stroke-width": "2.8", "stroke-dasharray": "6 4" }));
    var resDot = svgEl("circle", { r: "5", fill: "var(--color-tertiary)" });
    resDot.appendChild(svgEl("animateMotion", { dur: "2.4s", repeatCount: "indefinite", path: resPath }));
    svg.appendChild(resDot);
    svg.appendChild(svgText("⬅ 2. Clean JSON Response Dish ({\"price\": 299, \"status\": \"200 OK\"})", {
      x: "440", y: "232", "text-anchor": "middle", fill: "var(--color-tertiary)", "font-size": "10.5", "font-weight": "700"
    }));

    svg.appendChild(svgEl("rect", { x: "18", y: "242", width: "844", height: "52", rx: "10", fill: "var(--color-surface-container)" }));
    svg.appendChild(svgText("Real-world puzzle examples:  Uber App ⟷ Google Maps API (roads)   ·   Expedia ⟷ Airline APIs (flights)   ·   Checkout ⟷ Stripe API", {
      x: "440", y: "263", "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "11.5", "font-weight": "700"
    }));
    svg.appendChild(svgText("Hover over any station to highlight it — or click to read the full breakdown in the Left Side Panel", {
      x: "440", y: "282", "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11"
    }));

    return svg;
  }

  window.McpPuzzleDiagrams = {
    createVisualMcpVsApiExplorer: createVisualMcpVsApiExplorer,
    createIllustratedApiWaiterSvg: createIllustratedApiWaiterSvg
  };
})();
