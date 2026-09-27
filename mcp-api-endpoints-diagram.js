// Deployed Eng Pipeline — Interactive Visual Guide: MCP vs. API, Anatomy of an Endpoint & The 5 Ways Systems Talk
// Renders custom SVG architectural diagrams comparing Traditional APIs (M×N) vs. MCP (M+N USB-C Hub),
// an interactive 7-part X-Ray of an API Endpoint, and a 5-mode visual comparison (REST, Webhook, Streaming, Tool Use, MCP).
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

  // ============================================================================
  // DATA: 1. MCP PRIMITIVES, 2. ENDPOINT ANATOMY, 3. 5 WAYS SYSTEMS TALK
  // ============================================================================
  var MCP_PRIMITIVES = [
    {
      id: "mcp-prim-tools",
      badge: "Primitive 1 · The AI's Hands",
      badgeClass: "badge-info",
      icon: "build",
      title: "1. Tools (Executable actions the AI can call)",
      analogy: "Like buttons on a remote control that let the AI actually DO something in the outside world.",
      whatItIs:
        "In MCP, a 'Tool' is an action function exposed by the MCP Server—like `search_github_issues(query)`, `run_sql_query(sql)`, or `create_calendar_event(title, time)`. The AI model reads the tool's name and required inputs, asks to run it, and gets the result back.",
      example: "Tool: create_github_issue(repo='my-app', title='Fix login button')"
    },
    {
      id: "mcp-prim-resources",
      badge: "Primitive 2 · The AI's Eyes / Library",
      badgeClass: "badge-success",
      icon: "menu_book",
      title: "2. Resources (Read-only files, schemas & live data)",
      analogy: "Like reference books on a library shelf that the AI can open and read without changing anything.",
      whatItIs:
        "A 'Resource' is read-only context—like a database table schema (`postgres://schema/users`), a local file (`file:///logs/error.log`), or a Google Doc. Unlike Tools (which perform actions), Resources simply feed clean background data into the AI's memory.",
      example: "Resource: postgres://production/tables/users/schema"
    },
    {
      id: "mcp-prim-prompts",
      badge: "Primitive 3 · The AI's Playbook",
      badgeClass: "badge-secondary",
      icon: "Fact_check",
      title: "3. Prompts (Reusable workflow templates)",
      analogy: "Like a pre-written recipe card so the user doesn't have to type a 200-word prompt from scratch.",
      whatItIs:
        "An MCP Server can also package ready-made 'Prompt' templates (often shown as slash commands like `/review-pr` or `/analyze-sentry-crash`) that automatically pull in the right Resources and Tools for a common task.",
      example: "Prompt template: /triage-bug (automatically attaches latest Sentry stack trace + git diff)"
    }
  ];

  var ENDPOINT_PARTS = [
    {
      id: "ep-method",
      partNum: "1",
      shortPill: "1. HTTP Verb (GET / POST)",
      codeSnippet: "POST",
      badgeClass: "badge-info",
      icon: "send",
      title: "1. HTTP Method / Verb (`GET`, `POST`, `PATCH`, `DELETE`): What action are you taking?",
      plainMeaning:
        "Every API request starts with an action word (called an HTTP Verb) that tells the server what kind of trip this is:\n" +
        "• `GET` = **Read only**: 'Show me my tasks.' (Safe to refresh; never changes data).\n" +
        "• `POST` = **Create or Trigger**: 'Create a new task' or 'Ask the AI to summarize this.'\n" +
        "• `PUT` / `PATCH` = **Update**: 'Change Task #42's status from To Do to Doing.'\n" +
        "• `DELETE` = **Remove**: 'Delete Task #42.'",
      whyCritical:
        "Common beginner bug: using a `GET` request to delete or pay for something, or sending a `POST` from the browser when the backend function was written as `@app.get(...)` (which causes a `405 Method Not Allowed` error!).",
      codeExample:
        "@app.get('/api/tasks')       # Read tasks\n" +
        "@app.post('/api/tasks')      # Create a new task\n" +
        "@app.patch('/api/tasks/42')  # Update task #42\n" +
        "@app.delete('/api/tasks/42') # Delete task #42"
    },
    {
      id: "ep-path",
      partNum: "2",
      shortPill: "2. Endpoint Path (/api/tasks/42)",
      codeSnippet: "/api/tasks/42",
      badgeClass: "badge-success",
      icon: "signpost",
      title: "2. Endpoint Path & Path Parameters (`/api/tasks/42`): Which doorbell are you ringing?",
      plainMeaning:
        "Think of your server's domain (`https://myapp.com`) as an apartment building. An **Endpoint** is one specific apartment doorbell—like `/api/tasks` (the tasks desk) or `/api/users` (the users desk).\n\n" +
        "When you put a specific ID right inside the path—like `/api/tasks/42`—that `42` is called a **Path Parameter**. It tells the server: 'I want Task #42 specifically.'",
      whyCritical:
        "On your backend server, **1 Endpoint = 1 Python/JS Function**. When the browser calls `/api/tasks/42`, your server automatically runs `def get_task(task_id=42):`.",
      codeExample:
        "# The {task_id} in the URL path is passed straight into your Python function:\n" +
        "@app.get('/api/tasks/{task_id}')\n" +
        "def get_task(task_id: int):\n" +
        "    return db.find_task(task_id)"
    },
    {
      id: "ep-query",
      partNum: "3",
      shortPill: "3. Query Params (?limit=20)",
      codeSnippet: "?status=doing&limit=20",
      badgeClass: "badge-secondary",
      icon: "filter_alt",
      title: "3. Query Parameters (`?status=doing&limit=20`): Optional filter instructions",
      plainMeaning:
        "Everything after the question mark `?` in a URL is a **Query Parameter**—key-value pairs separated by `&` that filter, sort, or paginate the results without changing which endpoint doorbell you are ringing.",
      whyCritical:
        "Query parameters are how you add search (`?q=mcp`), filtering (`?status=doing`), and pagination (`?limit=20&page=2`) so your endpoint doesn't dump 50,000 rows at once.",
      codeExample:
        "# Calling GET /api/tasks?status=doing&limit=20\n" +
        "@app.get('/api/tasks')\n" +
        "def list_tasks(status: str = 'all', limit: int = 20):\n" +
        "    return db.query_tasks(status=status, limit=limit)"
    },
    {
      id: "ep-headers",
      partNum: "4",
      shortPill: "4. Headers (Auth badge & format)",
      codeSnippet: "Authorization: Bearer eyJ...",
      badgeClass: "badge-warning",
      icon: "badge",
      title: "4. Request Headers (`Authorization`, `Content-Type`): The ID badge on the envelope",
      plainMeaning:
        "Invisible to the URL bar, every request carries an envelope label called **Headers**. The two most important headers are:\n" +
        "• `Authorization: Bearer <token>` — Your user's login badge or secret API key proving they are allowed in.\n" +
        "• `Content-Type: application/json` — Tells the server: 'The package inside this envelope is formatted as JSON.'",
      whyCritical:
        "Whenever an API says `401 Unauthorized`, it almost always means your request forgot to include the `Authorization` header (or the token expired).",
      codeExample:
        "fetch('/api/tasks/42', {\n" +
        "  method: 'PATCH',\n" +
        "  headers: {\n" +
        "    'Content-Type': 'application/json',\n" +
        "    'Authorization': 'Bearer ' + userSessionToken\n" +
        "  },\n" +
        "  body: JSON.stringify({ status: 'Done' })\n" +
        "})"
    },
    {
      id: "ep-body",
      partNum: "5",
      shortPill: "5. Request Body (JSON payload)",
      codeSnippet: "{\"title\": \"Launch\", \"priority\": \"high\"}",
      badgeClass: "badge-info",
      icon: "inventory_2",
      title: "5. Request Body / Payload (JSON): The package inside the envelope",
      plainMeaning:
        "When you create (`POST`) or update (`PATCH`) data, you don't want to cram a whole essay into the URL bar. Instead, you send a neat JSON dictionary inside the **Request Body** (also called the **Payload**).",
      whyCritical:
        "Always validate the Request Body on your server using a strict form (`Pydantic` in Python or `Zod` in TypeScript) so missing or misspelled fields get caught cleanly.",
      codeExample:
        "# JSON body sent from browser:\n" +
        "{\n" +
        "  \"title\": \"Add MCP vs API diagram\",\n" +
        "  \"priority\": \"high\"\n" +
        "}"
    },
    {
      id: "ep-status",
      partNum: "6",
      shortPill: "6. Status Codes (200 / 401 / 500)",
      codeSnippet: "200 OK · 401 Auth · 429 Limit · 500 Crash",
      badgeClass: "badge-danger",
      icon: "traffic",
      title: "6. HTTP Status Codes (`200`, `400`, `401`, `404`, `429`, `500`): The instant 3-digit receipt",
      plainMeaning:
        "Every time an endpoint replies, it stamps a 3-digit number on the response so you know immediately what happened:\n" +
        "• **2xx (`200 OK`, `201 Created`)**: Success! Everything worked.\n" +
        "• **4xx (Mistake on the caller's side)**:\n" +
        "  - `400 Bad Request` / `422`: Missing or invalid input field.\n" +
        "  - `401 Unauthorized` / `403 Forbidden`: Not logged in, or not allowed to view this item.\n" +
        "  - `404 Not Found`: Misspelled endpoint URL (`/api/taks` instead of `/api/tasks`).\n" +
        "  - `429 Too Many Requests`: You hit the speed limit (Rate Limit)!\n" +
        "• **5xx (`500 Internal Server Error`, `503 Unavailable`)**: The backend server or database crashed!",
      whyCritical:
        "Knowing the difference between `4xx` ('my browser sent the wrong URL/input') and `5xx` ('my Python backend crashed') cuts debugging time in half.",
      codeExample:
        "200 OK                  -> Success!\n" +
        "401 Unauthorized        -> Missing login token / API key\n" +
        "404 Not Found           -> Wrong endpoint URL path\n" +
        "429 Too Many Requests   -> Rate limit hit (slow down)\n" +
        "500 Server Error        -> Check your backend terminal stack trace!"
    },
    {
      id: "ep-cors-ratelimit",
      partNum: "7",
      shortPill: "7. CORS & Rate Limits (Guardrails)",
      codeSnippet: "Access-Control-Allow-Origin",
      badgeClass: "badge-success",
      icon: "shield",
      title: "7. CORS & Rate Limits: Who is allowed to call your endpoint and how fast?",
      plainMeaning:
        "Two critical endpoint features every builder runs into:\n" +
        "• **CORS (Cross-Origin Resource Sharing)**: When your frontend is on `http://localhost:3000` and your backend is on `http://localhost:8000`, the browser blocks the call unless your backend explicitly lists `localhost:3000` in its allowed `CORS` origins (prevents random evil websites from calling your API!).\n" +
        "• **Rate Limiting**: A speed limit on your endpoint (e.g. 'max 20 requests per minute per user') so bots can't spam your AI endpoint and run up a huge bill.",
      whyCritical:
        "If Chrome Console ever says `Blocked by CORS policy`, don't panic—it just means you need to add `CORSMiddleware` (3 lines of code) to your backend server!",
      codeExample:
        "# Enabling CORS in Python FastAPI so your frontend can call your endpoints:\n" +
        "app.add_middleware(\n" +
        "    CORSMiddleware,\n" +
        "    allow_origins=['https://myapp.com', 'http://localhost:3000'],\n" +
        "    allow_methods=['GET', 'POST', 'PATCH', 'DELETE']\n" +
        ")"
    }
  ];

  var FIVE_PATTERNS = [
    {
      id: "pat-rest",
      shortPill: "1. REST API (You ask -> Server replies)",
      icon: "sync_alt",
      whoStarts: "Browser / App starts it ('Pull')",
      bestFor: "90% of everyday app actions: loading a page, saving a form, logging in, or fetching a list.",
      howItWorks:
        "Your browser knocks on a specific **Endpoint URL** (`GET /api/tasks`), waits ~50 milliseconds, gets back a JSON answer, and hangs up the phone.",
      whenNotToUse: "Don't use a single synchronous REST call if a job takes 2 minutes (it will time out)—use a Webhook or Streaming instead."
    },
    {
      id: "pat-webhook",
      shortPill: "2. Webhook (Server texts you when done)",
      icon: "notifications_active",
      whoStarts: "Outside server starts it ('Push')",
      bestFor: "Getting notified when an outside event happens (e.g., Stripe payment finishes, GitHub PR is merged, Slack message arrives).",
      howItWorks:
        "Instead of your server asking Stripe every 2 seconds 'Did they pay yet?', you give Stripe a **Webhook Endpoint URL** on your server (`POST /api/webhooks/stripe`). The instant the customer pays, Stripe's server calls your endpoint to tell you!",
      whenNotToUse: "Requires a public URL (or a tunnel tool like `ngrok` when testing on your laptop) so the outside service can reach your endpoint."
    },
    {
      id: "pat-stream",
      shortPill: "3. Streaming / WebSockets (Live open line)",
      icon: "stream",
      whoStarts: "Persistent open phone line ('Stream')",
      bestFor: "Streaming AI words one by one as they generate (Server-Sent Events / `SSE`), live chat rooms, or collaborative cursors (`WebSockets`).",
      howItWorks:
        "Instead of waiting 12 seconds for an AI to finish writing a whole essay before showing anything, **SSE (Server-Sent Events)** keeps the HTTP connection open and pushes each word to the browser the millisecond it is generated.",
      whenNotToUse: "Overkill for simple 'save settings' or 'fetch user profile' requests where a normal REST API endpoint is simpler."
    },
    {
      id: "pat-tool-call",
      shortPill: "4. AI Function Calling (1-off AI tool use)",
      icon: "functions",
      whoStarts: "AI model asks your server to run 1 function",
      bestFor: "Giving an AI model inside your own backend code 2 or 3 specific Python functions it can invoke (like `lookup_order(order_id)`).",
      howItWorks:
        "When you call the Gemini/OpenAI/Claude API, you pass a JSON list of function definitions. The AI replies: 'Please run `lookup_order(104)`.' Your code runs that function and sends the output back to the AI.",
      whenNotToUse: "If you want to share those same tools across Claude Desktop, Cursor, and multiple agents without rewriting the definitions every time, upgrade to **MCP**!"
    },
    {
      id: "pat-mcp",
      shortPill: "5. MCP (Universal USB-C port for AI agents)",
      icon: "usb",
      whoStarts: "AI Agent dynamically discovers & calls tools",
      bestFor: "Connecting AI agents, IDEs (Cursor, Windsurf, Claude Code), and apps to external systems (GitHub, Postgres, Drive, Slack, Sentry) with zero custom glue code.",
      howItWorks:
        "Instead of hardcoding API endpoints into every AI app, the tool exposes an **MCP Server** (with **Tools**, **Resources**, and **Prompts**). Any **MCP Client** plugs in via the standard MCP protocol, asks 'What can you do?', and uses those capabilities safely.",
      whenNotToUse: "MCP doesn't replace normal REST APIs for your website's buttons—your website buttons still call REST endpoints (`/api/tasks`), while AI agents use MCP!"
    }
  ];

  // ============================================================================
  // SVG DIAGRAM 1: TRADITIONAL API (M×N SPAGHETTI) VS. MCP (M+N USB-C HUB)
  // ============================================================================
  function createMcpVsApiSvg(isMcpMode) {
    var svg = svgEl("svg", {
      viewBox: "0 0 860 280",
      class: "mcp-vs-api-svg",
      "aria-label": isMcpMode
        ? "Diagram showing MCP universal USB-C hub connecting AI apps to MCP servers"
        : "Diagram showing M by N custom API spaghetti connecting AI apps to different APIs"
    });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "852", height: "272", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    var leftApps = [
      { y: 36, title: "Claude / Cursor IDE", sub: isMcpMode ? "Includes MCP Client" : "Needs 3 custom wrappers" },
      { y: 114, title: "Your Custom AI Agent", sub: isMcpMode ? "Includes MCP Client" : "Needs 3 custom wrappers" },
      { y: 192, title: "Team Chat / Coding Bot", sub: isMcpMode ? "Includes MCP Client" : "Needs 3 custom wrappers" }
    ];
    var rightServices = [
      { y: 36, title: isMcpMode ? "GitHub MCP Server" : "GitHub REST API", sub: isMcpMode ? "Tools · Resources · Prompts" : "Custom OAuth + /repos URLs" },
      { y: 114, title: isMcpMode ? "Postgres DB MCP Server" : "Postgres Wire Protocol", sub: isMcpMode ? "Schema resources + SQL tool" : "Custom SQL driver + auth" },
      { y: 192, title: isMcpMode ? "Slack / Drive MCP Server" : "Slack & Drive APIs", sub: isMcpMode ? "Search & message tools" : "Different JSON & pagination" }
    ];

    if (!isMcpMode) {
      leftApps.forEach(function (lApp) {
        rightServices.forEach(function (rSvc) {
          svg.appendChild(svgEl("line", { x1: "250", y1: String(lApp.y + 30), x2: "610", y2: String(rSvc.y + 30), stroke: "var(--color-error)", "stroke-width": "2", "stroke-dasharray": "5 4", opacity: "0.72" }));
        });
      });
      svg.appendChild(svgEl("rect", { x: "295", y: "92", width: "270", height: "96", rx: "12", fill: "var(--color-error-container)", stroke: "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText("M × N Custom API Glue Code", { x: "430", y: "120", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "14", "font-weight": "700" }));
      svg.appendChild(svgText("3 AI Apps × 3 Tools = 9 custom connectors.", { x: "430", y: "144", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "12" }));
      svg.appendChild(svgText("You must hardcode every URL, header & format!", { x: "430", y: "166", "text-anchor": "middle", fill: "var(--color-on-error-container)", "font-size": "12", "font-weight": "600" }));
    } else {
      leftApps.forEach(function (lApp) {
        svg.appendChild(svgEl("line", { x1: "250", y1: String(lApp.y + 30), x2: "310", y2: "140", stroke: "var(--color-primary)", "stroke-width": "3" }));
      });
      rightServices.forEach(function (rSvc) {
        svg.appendChild(svgEl("line", { x1: "550", y1: "140", x2: "610", y2: String(rSvc.y + 30), stroke: "var(--color-primary)", "stroke-width": "3" }));
      });
      svg.appendChild(svgEl("rect", { x: "310", y: "66", width: "240", height: "148", rx: "16", fill: "var(--color-primary-container)", stroke: "var(--color-primary)", "stroke-width": "2.5" }));
      svg.appendChild(svgText("Model Context Protocol (MCP)", { x: "430", y: "96", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "14", "font-weight": "700" }));
      svg.appendChild(svgText("Universal 'USB-C Port' for AI", { x: "430", y: "118", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "12", "font-weight": "600" }));
      svg.appendChild(svgText("1. AI asks: 'What tools do you have?'", { x: "430", y: "144", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5" }));
      svg.appendChild(svgText("2. Server lists Tools, Resources & Prompts", { x: "430", y: "164", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5" }));
      svg.appendChild(svgText("3. Any AI app plugs into any MCP Server!", { x: "430", y: "186", "text-anchor": "middle", fill: "var(--color-on-primary-container)", "font-size": "11.5", "font-weight": "700" }));
    }

    leftApps.forEach(function (app) {
      svg.appendChild(svgEl("rect", { x: "24", y: String(app.y), width: "226", height: "60", rx: "12", fill: "var(--color-surface-container)", stroke: isMcpMode ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": "2" }));
      svg.appendChild(svgText(app.title, { x: "137", y: String(app.y + 26), "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText(app.sub, { x: "137", y: String(app.y + 45), "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
    });
    rightServices.forEach(function (svc) {
      svg.appendChild(svgEl("rect", { x: "610", y: String(svc.y), width: "226", height: "60", rx: "12", fill: "var(--color-surface-container)", stroke: isMcpMode ? "var(--color-primary)" : "var(--color-error)", "stroke-width": "2" }));
      svg.appendChild(svgText(svc.title, { x: "723", y: String(svc.y + 26), "text-anchor": "middle", fill: "var(--color-on-surface)", "font-size": "13", "font-weight": "700" }));
      svg.appendChild(svgText(svc.sub, { x: "723", y: String(svc.y + 45), "text-anchor": "middle", fill: "var(--color-on-surface-variant)", "font-size": "11.5" }));
    });
    return svg;
  }

  // ============================================================================
  // SVG DIAGRAM 2: VISUAL ANATOMY OF AN API ENDPOINT CALL
  // ============================================================================
  function createEndpointAnatomySvg(activePartId) {
    var svg = svgEl("svg", {
      viewBox: "0 0 860 190",
      class: "mcp-vs-api-svg",
      "aria-label": "Visual anatomy of an API endpoint URL, headers, body, and server function"
    });
    svg.appendChild(svgEl("rect", { x: "4", y: "4", width: "852", height: "182", rx: "16", fill: "var(--color-surface-container-lowest)" }));

    var segments = [
      { id: "ep-method", x: 20, w: 96, top: "1. HTTP Verb", code: "PATCH", sub: "Action type" },
      { id: "ep-path", x: 126, w: 230, top: "2. Endpoint Path + ID", code: "/api/tasks/42", sub: "Doorbell address" },
      { id: "ep-query", x: 366, w: 204, top: "3. Query Params", code: "?notify=true", sub: "Optional filters" },
      { id: "ep-headers", x: 580, w: 130, top: "4. Headers", code: "Bearer <token>", sub: "Login ID badge" },
      { id: "ep-body", x: 720, w: 120, top: "5. JSON Body", code: "{status:'Done'}", sub: "Data package" }
    ];
    segments.forEach(function (seg) {
      var isAct = seg.id === activePartId;
      svg.appendChild(svgEl("rect", { x: String(seg.x), y: "22", width: String(seg.w), height: "78", rx: "10", fill: isAct ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isAct ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isAct ? "2.5" : "1.5" }));
      svg.appendChild(svgText(seg.top, { x: String(seg.x + seg.w / 2), y: "42", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11", "font-weight": "700" }));
      svg.appendChild(svgText(seg.code, { x: String(seg.x + seg.w / 2), y: "66", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "13.5", "font-weight": "700", "font-family": "monospace" }));
      svg.appendChild(svgText(seg.sub, { x: String(seg.x + seg.w / 2), y: "86", "text-anchor": "middle", fill: isAct ? "var(--color-on-primary-container)" : "var(--color-on-surface-variant)", "font-size": "11" }));
    });

    var isStatusOrCors = activePartId === "ep-status" || activePartId === "ep-cors-ratelimit";
    svg.appendChild(svgEl("rect", { x: "20", y: "118", width: "820", height: "52", rx: "10", fill: isStatusOrCors ? "var(--color-primary-container)" : "var(--color-surface-container)", stroke: isStatusOrCors ? "var(--color-primary)" : "var(--color-outline)", "stroke-width": isStatusOrCors ? "2.5" : "1.5" }));
    svg.appendChild(svgText("Server Endpoint Function (@app.patch('/api/tasks/{id}'))   --->   6. Status Code Receipt (200 OK / 401 Auth / 429 Rate Limit / 500 Crash) + 7. CORS Check", { x: "430", y: "149", "text-anchor": "middle", fill: isStatusOrCors ? "var(--color-on-primary-container)" : "var(--color-on-surface)", "font-size": "12.5", "font-weight": "700" }));
    return svg;
  }

  // ============================================================================
  // MAIN RENDERER: MOUNTED ON STOP 6 (SYSTEM DYNAMICS) & STOP 2 (APP ANATOMY)
  // ============================================================================
  function renderMcpAndEndpointsWorkshop(container) {
    if (!container) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");

    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Interactive visual guide — MCP vs. API, Anatomy of an Endpoint & The 5 Ways Systems Talk";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "What is an API Endpoint, and what is the difference between an API and an MCP?";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "Explore the visual diagrams below to see (1) how MCP (Model Context Protocol) acts as a universal 'USB-C port' for AI compared to traditional APIs, (2) every part of an API Endpoint explained in plain English, and (3) when to use REST APIs, Webhooks, Streaming, or MCP.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    var activeTab = "mcp-vs-api"; // "mcp-vs-api" | "endpoint-anatomy" | "five-patterns"
    var isMcpDiagramMode = true;
    var activePrimIdx = 0;
    var activeEndpointIdx = 1; // Default to "/api/tasks/42" (Endpoint Path)
    var activePatternIdx = 4;

    var tabsBar = document.createElement("div");
    tabsBar.className = "vocab-top-tabs-bar";

    var workshopHost = document.createElement("div");
    workshopHost.className = "reliability-workshop-host";

    function render() {
      tabsBar.replaceChildren();
      [
        {
          id: "mcp-vs-api",
          label: "1. MCP vs. Traditional API (Interactive diagram + 3 MCP building blocks)",
          icon: "usb"
        },
        {
          id: "endpoint-anatomy",
          label: "2. What is an 'Endpoint'? (Interactive 7-part visual X-ray)",
          icon: "signpost"
        },
        {
          id: "five-patterns",
          label: "3. REST API vs. Webhook vs. Streaming vs. MCP (When to use which)",
          icon: "compare_arrows"
        }
      ].forEach(function (t) {
        var btn = document.createElement("button");
        btn.type = "button";
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
        });
        tabsBar.appendChild(btn);
      });

      workshopHost.replaceChildren();
      if (activeTab === "mcp-vs-api") {
        renderMcpVsApiTab(workshopHost);
      } else if (activeTab === "endpoint-anatomy") {
        renderEndpointAnatomyTab(workshopHost);
      } else {
        renderFivePatternsTab(workshopHost);
      }
    }

    // -------------------------------------------------------------------------
    // TAB 1: MCP VS. API INTERACTIVE DIAGRAM
    // -------------------------------------------------------------------------
    function renderMcpVsApiTab(host) {
      var stageCard = document.createElement("div");
      stageCard.className = "nested-card";

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var titleStrong = document.createElement("strong");
      titleStrong.className = "diagram-node-title";
      titleStrong.textContent =
        "Click to toggle the diagram between Traditional APIs (custom cords) and MCP (universal USB-C hub for AI):";
      topRow.appendChild(titleStrong);

      var toggleCluster = document.createElement("div");
      toggleCluster.className = "diagram-pill-cluster";

      var btnOld = document.createElement("button");
      btnOld.type = "button";
      btnOld.className = "diagram-label-pill" + (!isMcpDiagramMode ? " active" : "");
      var icOld = document.createElement("span");
      icOld.className = "material-symbols-outlined diagram-pill-icon";
      icOld.textContent = "cable";
      var txtOld = document.createElement("span");
      txtOld.textContent = "Before MCP: Traditional APIs (M×N spaghetti)";
      btnOld.appendChild(icOld);
      btnOld.appendChild(txtOld);
      btnOld.addEventListener("click", function () {
        isMcpDiagramMode = false;
        render();
      });

      var btnNew = document.createElement("button");
      btnNew.type = "button";
      btnNew.className = "diagram-label-pill" + (isMcpDiagramMode ? " active" : "");
      var icNew = document.createElement("span");
      icNew.className = "material-symbols-outlined diagram-pill-icon";
      icNew.textContent = "usb";
      var txtNew = document.createElement("span");
      txtNew.textContent = "With MCP: Universal USB-C Hub for AI (M+N)";
      btnNew.appendChild(icNew);
      btnNew.appendChild(txtNew);
      btnNew.addEventListener("click", function () {
        isMcpDiagramMode = true;
        render();
      });

      toggleCluster.appendChild(btnOld);
      toggleCluster.appendChild(btnNew);
      topRow.appendChild(toggleCluster);
      stageCard.appendChild(topRow);

      stageCard.appendChild(createMcpVsApiSvg(isMcpDiagramMode));

      // Side-by-side plain-English comparison: Traditional API vs. MCP
      var twoCol = document.createElement("div");
      twoCol.className = "detail-two-col";

      var apiCard = document.createElement("div");
      apiCard.className = "surface-card";
      var apiBadge = document.createElement("span");
      apiBadge.className = "badge badge-secondary";
      apiBadge.textContent = "Traditional API (Application Programming Interface)";
      var apiH4 = document.createElement("h4");
      apiH4.textContent = "Built for code-to-code calls (Every service has its own custom plug)";
      var apiP = document.createElement("p");
      apiP.className = "resource-desc";
      apiP.textContent =
        "• Analogy: Before USB-C, every phone, camera, and laptop had a completely different charger plug.\n" +
        "• How it works: GitHub's API, Slack's API, and Stripe's API each use different endpoint URLs, different login headers, and different JSON shapes. A human developer must read the docs and hardcode custom 'glue code' for every single service.\n" +
        "• When you still use it: When a button on your website calls your own backend server (like `POST /api/checkout`).";
      apiP.style.whiteSpace = "pre-line";
      apiCard.appendChild(apiBadge);
      apiCard.appendChild(apiH4);
      apiCard.appendChild(apiP);

      var mcpCard = document.createElement("div");
      mcpCard.className = "surface-card";
      var mcpBadge = document.createElement("span");
      mcpBadge.className = "badge badge-info";
      mcpBadge.textContent = "MCP (Model Context Protocol) — Open Standard";
      var mcpH4 = document.createElement("h4");
      mcpH4.textContent = "Built for AI-to-tool discovery (One universal USB-C port)";
      var mcpP = document.createElement("p");
      mcpP.className = "resource-desc";
      mcpP.textContent =
        "• Analogy: A universal USB-C port where any AI assistant can plug into any database or app and immediately see what it can do.\n" +
        "• How it works: Instead of you writing custom API code, you plug a pre-built **MCP Server** (for GitHub, Postgres, Google Drive, or Sentry) into your **MCP Client** (Claude, Cursor, Gemini, or your agent). At runtime, the AI asks the MCP Server: 'What tools and files do you have?' and uses them automatically!\n" +
        "• Key insight: MCP does NOT replace APIs—under the hood, the MCP Server translates the raw API into a standard menu that AI models understand.";
      mcpP.style.whiteSpace = "pre-line";
      mcpCard.appendChild(mcpBadge);
      mcpCard.appendChild(mcpH4);
      mcpCard.appendChild(mcpP);

      twoCol.appendChild(apiCard);
      twoCol.appendChild(mcpCard);
      stageCard.appendChild(twoCol);
      host.appendChild(stageCard);

      // The 3 Building Blocks inside every MCP Server (click any pill to open in Left Side Panel)
      var primCard = document.createElement("div");
      primCard.className = "nested-card";
      var primHeader = document.createElement("strong");
      primHeader.className = "diagram-node-title";
      primHeader.textContent = "What sits inside an MCP Server? Click the 3 MCP building blocks (opens details in left panel):";
      primCard.appendChild(primHeader);

      var primPills = document.createElement("div");
      primPills.className = "diagram-pill-cluster";
      MCP_PRIMITIVES.forEach(function (pr, idx) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "diagram-label-pill" + (idx === activePrimIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = pr.icon;
        var sp = document.createElement("span");
        sp.textContent = pr.title;
        b.appendChild(ic);
        b.appendChild(sp);
        b.addEventListener("click", function () {
          activePrimIdx = idx;
          render();
          showMcpPrimitiveInSidePanel(MCP_PRIMITIVES[idx], true);
        });
        primPills.appendChild(b);
      });
      primCard.appendChild(primPills);
      host.appendChild(primCard);
    }

    function showMcpPrimitiveInSidePanel(curPr, isUserClick) {
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
      window.PipelineAgent.showInspector(function (inspectorEl) {
        inspectorEl.replaceChildren();
        var top = document.createElement("div");
        top.className = "resource-title-row";
        var prBadge = document.createElement("span");
        prBadge.className = "badge " + curPr.badgeClass;
        prBadge.textContent = curPr.badge;
        top.appendChild(prBadge);
        inspectorEl.appendChild(top);
        var prH4 = document.createElement("h4");
        prH4.textContent = curPr.title;
        inspectorEl.appendChild(prH4);
        var prAnalogyBox = document.createElement("div");
        prAnalogyBox.className = "nested-card";
        var prAnalogy = document.createElement("p");
        prAnalogy.className = "resource-desc";
        prAnalogy.textContent = "Everyday analogy: " + curPr.analogy;
        prAnalogyBox.appendChild(prAnalogy);
        inspectorEl.appendChild(prAnalogyBox);
        var prWhat = document.createElement("p");
        prWhat.className = "resource-desc";
        prWhat.textContent = curPr.whatItIs;
        inspectorEl.appendChild(prWhat);
        var prEx = document.createElement("div");
        prEx.className = "vocab-example-box";
        prEx.textContent = curPr.example;
        inspectorEl.appendChild(prEx);
      }, { autoOpen: Boolean(isUserClick), pulse: Boolean(isUserClick), itemTitle: curPr.title });
    }

    function showEndpointPartInSidePanel(curEp, isUserClick) {
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
      window.PipelineAgent.showInspector(function (inspectorEl) {
        inspectorEl.replaceChildren();
        var top = document.createElement("div");
        top.className = "resource-title-row";
        var b1 = document.createElement("span");
        b1.className = "badge " + curEp.badgeClass;
        b1.textContent = "Endpoint Part " + curEp.partNum + " of 7";
        var codeTag = document.createElement("code");
        codeTag.className = "vocab-cmd-pill";
        codeTag.textContent = curEp.codeSnippet;
        top.appendChild(b1);
        top.appendChild(codeTag);
        inspectorEl.appendChild(top);
        var h4 = document.createElement("h4");
        h4.textContent = curEp.title;
        inspectorEl.appendChild(h4);
        var meanP = document.createElement("p");
        meanP.className = "resource-desc";
        meanP.style.whiteSpace = "pre-line";
        meanP.textContent = curEp.plainMeaning;
        inspectorEl.appendChild(meanP);

          var whyBanner = document.createElement("div");
          whyBanner.className = "arch-mode-banner good-mode";
          var wIc = document.createElement("span");
          wIc.className = "material-symbols-outlined safety-icon";
          wIc.textContent = "lightbulb";
          var wTxt = document.createElement("span");
          wTxt.textContent = "Why this matters: " + curEp.whyCritical;
          whyBanner.appendChild(wIc);
          whyBanner.appendChild(wTxt);
          inspectorEl.appendChild(whyBanner);

          var codePre = document.createElement("div");
          codePre.className = "vocab-example-box";
          codePre.textContent = curEp.codeExample;
          inspectorEl.appendChild(codePre);
        },
        { autoOpen: Boolean(isUserClick), pulse: Boolean(isUserClick), itemTitle: curEp.shortPill }
      );
    }

    function showPatternInSidePanel(curPat, isUserClick) {
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
      window.PipelineAgent.showInspector(
        function (inspectorEl) {
          inspectorEl.replaceChildren();
          var top = document.createElement("div");
          top.className = "resource-title-row";
          var bdg = document.createElement("span");
          bdg.className = "badge badge-info";
          bdg.textContent = curPat.whoStarts;
          top.appendChild(bdg);
          inspectorEl.appendChild(top);

          var h4 = document.createElement("h4");
          h4.textContent = curPat.shortPill;
          inspectorEl.appendChild(h4);

          var pBestBox = document.createElement("div");
          pBestBox.className = "nested-card";
          var pBest = document.createElement("p");
          pBest.className = "resource-desc";
          pBest.textContent = "Best for: " + curPat.bestFor;
          pBestBox.appendChild(pBest);
          inspectorEl.appendChild(pBestBox);

          var pHow = document.createElement("p");
          pHow.className = "resource-desc";
          pHow.textContent = "How it works: " + curPat.howItWorks;
          inspectorEl.appendChild(pHow);

          var pNot = document.createElement("div");
          pNot.className = "arch-mode-banner good-mode";
          var icNot = document.createElement("span");
          icNot.className = "material-symbols-outlined safety-icon";
          icNot.textContent = "info";
          var txtNot = document.createElement("span");
          txtNot.textContent = "Good to know: " + curPat.whenNotToUse;
          pNot.appendChild(icNot);
          pNot.appendChild(txtNot);
          inspectorEl.appendChild(pNot);
        },
        { autoOpen: Boolean(isUserClick), pulse: Boolean(isUserClick), itemTitle: curPat.shortPill }
      );
    }

    // -------------------------------------------------------------------------
    // TAB 2: ANATOMY OF AN API ENDPOINT (7-PART VISUAL X-RAY)
    // -------------------------------------------------------------------------
    function renderEndpointAnatomyTab(host) {
      var curEp = ENDPOINT_PARTS[activeEndpointIdx];

      var xrayCard = document.createElement("div");
      xrayCard.className = "nested-card";

      var leadP = document.createElement("p");
      leadP.className = "resource-desc";
      leadP.textContent =
        "Plain-English definition: If an API is a restaurant kitchen, an 'Endpoint' is one specific service window URL on the server (like `/api/tasks/42`) connected to one specific backend function. Click any of the 7 parts below to highlight it on the diagram and inspect it in the left panel:";
      xrayCard.appendChild(leadP);

      var epPills = document.createElement("div");
      epPills.className = "diagram-pill-cluster";
      ENDPOINT_PARTS.forEach(function (ep, idx) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "diagram-label-pill" + (idx === activeEndpointIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = ep.icon;
        var sp = document.createElement("span");
        sp.textContent = ep.shortPill;
        b.appendChild(ic);
        b.appendChild(sp);
        b.addEventListener("click", function () {
          activeEndpointIdx = idx;
          render();
          showEndpointPartInSidePanel(ENDPOINT_PARTS[idx], true);
        });
        epPills.appendChild(b);
      });
      xrayCard.appendChild(epPills);
      xrayCard.appendChild(createEndpointAnatomySvg(curEp.id));
      host.appendChild(xrayCard);
    }

    // -------------------------------------------------------------------------
    // TAB 3: THE 5 WAYS SYSTEMS & AI TALK
    // -------------------------------------------------------------------------
    function renderFivePatternsTab(host) {
      var patCard = document.createElement("div");
      patCard.className = "nested-card";

      var leadP = document.createElement("p");
      leadP.className = "resource-desc";
      leadP.textContent = "Click any of the 5 communication patterns below to see how it works and when to use it in the left panel:";
      patCard.appendChild(leadP);

      var pCluster = document.createElement("div");
      pCluster.className = "diagram-pill-cluster";
      FIVE_PATTERNS.forEach(function (pt, idx) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "diagram-label-pill" + (idx === activePatternIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = pt.icon;
        var sp = document.createElement("span");
        sp.textContent = pt.shortPill;
        b.appendChild(ic);
        b.appendChild(sp);
        b.addEventListener("click", function () {
          activePatternIdx = idx;
          render();
          showPatternInSidePanel(FIVE_PATTERNS[idx], true);
        });
        pCluster.appendChild(b);
      });
      patCard.appendChild(pCluster);
      host.appendChild(patCard);
    }

    render();
    card.appendChild(tabsBar);
    card.appendChild(workshopHost);
    container.appendChild(card);
  }

  window.renderMcpAndEndpointsWorkshop = renderMcpAndEndpointsWorkshop;
  window.McpAndEndpointsData = {
    MCP_PRIMITIVES: MCP_PRIMITIVES,
    ENDPOINT_PARTS: ENDPOINT_PARTS,
    FIVE_PATTERNS: FIVE_PATTERNS
  };
})();
