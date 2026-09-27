// Deployed Eng Pipeline — Data for Step 6: API & Endpoint Explainer (Aaron Jack) + MCP Explained & Built (Tech With Tim)
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var API_VIDEO_URL = "https://www.youtube.com/watch?v=ByGJQzlzxQg";
  var MCP_VIDEO_URL = "https://www.youtube.com/watch?v=He8tUwLzLnU";
  var MCP_REPO_URL = "https://github.com/techwithtim/descope-mcp-video";

  // ============================================================================
  // 1. AARON JACK'S API EXPLAINER ("What is an API in 5 minutes" — ByGJQzlzxQg)
  // ============================================================================
  var API_WAITER_STEPS = [
    {
      id: "api-step-client",
      stepNum: "1",
      shortPill: "1. You at the Table (The Client)",
      icon: "devices",
      badge: "Step 1 of 4 · The Caller",
      badgeClass: "badge-info",
      roleLabel: "Your Browser / Phone App",
      analogyTitle: "Restaurant analogy: You sitting at a table wanting a dish",
      title: "1. The Client (Your App / Browser): Wants data or an action without entering the kitchen",
      plainMeaning:
        "In Aaron Jack's 5-minute API explainer, imagine you are sitting at a restaurant table. You want a meal (data or an action), but you aren't allowed to walk into the restaurant's kitchen and rummage through their fridge yourself.\n\n" +
        "In software, your browser or phone app is the customer at the table (the 'Client'). When a user searches for flights on Expedia, checks the weather on their phone, or clicks 'Pay $20', your app needs information or action from an outside system's server.",
      realWorldExamples:
        "• Flight comparison site (Expedia / Skyscanner): Needs live seat prices from 20 different airlines.\n" +
        "• Weather widget: Needs today's forecast from a national weather station.\n" +
        "• Delivery app (Uber / DoorDash): Needs live street maps and traffic from Google Maps.",
      codeExample:
        "// Your app (the Client at the table) asks for live weather data:\n" +
        "const response = await fetch('https://api.weather.com/v1/forecast?city=London', {\n" +
        "  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }\n" +
        "});"
    },
    {
      id: "api-step-menu",
      stepNum: "2",
      shortPill: "2. The Menu (API Contract & Endpoints)",
      icon: "menu_book",
      badge: "Step 2 of 4 · The Contract",
      badgeClass: "badge-success",
      roleLabel: "Allowed URLs & Rules",
      analogyTitle: "Restaurant analogy: The Menu listing exactly what you are allowed to order",
      title: "2. The Menu (API Documentation & Endpoints): The strict contract between two programs",
      plainMeaning:
        "What does 'API' stand for? Application Programming Interface—a fancy name for the Menu & Contract that lets one program talk to another.\n\n" +
        "Just like a restaurant menu lists the exact dishes you are allowed to order (and which side options you must pick), an API's documentation lists the exact Endpoint URLs you can call and what inputs they require:\n" +
        "• Order off the menu properly -> You get a predictable answer every time.\n" +
        "• Ask for something not on the menu -> The waiter immediately says '404 Not Found' or '400 Bad Request'.",
      realWorldExamples:
        "• Weather API Menu: 'GET /v1/current?city=London' (returns temperature & conditions).\n" +
        "• PokeAPI Menu (classic beginner practice API): 'GET https://pokeapi.co/api/v2/pokemon/pikachu'.\n" +
        "• Stripe Payment Menu: 'POST https://api.stripe.com/v1/charges' (charges a card).",
      codeExample:
        "API Menu (Endpoints Contract):\n" +
        "• GET  /api/tasks          -> Read list of tasks\n" +
        "• POST /api/tasks          -> Create a new task (requires JSON {title})\n" +
        "• GET  /api/tasks/{id}     -> Read one specific task by ID\n" +
        "• DELETE /api/tasks/{id}   -> Delete one specific task"
    },
    {
      id: "api-step-waiter",
      stepNum: "3",
      shortPill: "3. The Waiter (The API Messenger)",
      icon: "sync_alt",
      badge: "Step 3 of 4 · The Messenger",
      badgeClass: "badge-secondary",
      roleLabel: "HTTP Request <-> JSON Response",
      analogyTitle: "Restaurant analogy: The Waiter who carries your order to the kitchen and brings back your plate",
      title: "3. The Waiter (The API): Carries your Request to the kitchen and brings back JSON",
      plainMeaning:
        "The API is the Waiter running back and forth between your table (the Client) and the kitchen (the Server):\n" +
        "1. You hand the waiter your Order (The HTTP Request): It includes the action verb ('GET' or 'POST'), the Endpoint URL, your API Key (so the kitchen knows who is ordering and can enforce rate limits), and any input data.\n" +
        "2. The waiter brings back your Dish on a standardized tray (The JSON Response): Instead of sending back a whole HTML web page, the API returns clean, structured JSON ('{\"temp_c\": 18, \"condition\": \"Sunny\"}') plus a 3-digit status code ('200 OK').",
      realWorldExamples:
        "• Why use JSON? Because whether your app is written in JavaScript, Python, Swift (iOS), or Kotlin (Android), every programming language can read a JSON dictionary in one line.",
      codeExample:
        "// What the Waiter (API) brings back to your app (200 OK + JSON):\n" +
        "{\n" +
        "  \"city\": \"London\",\n" +
        "  \"temp_c\": 18,\n" +
        "  \"condition\": \"Partly Cloudy\",\n" +
        "  \"humidity_pct\": 62\n" +
        "}"
    },
    {
      id: "api-step-kitchen",
      stepNum: "4",
      shortPill: "4. The Kitchen (External Server & DB)",
      icon: "dns",
      badge: "Step 4 of 4 · The Server",
      badgeClass: "badge-warning",
      roleLabel: "Hidden Logic & Database",
      analogyTitle: "Restaurant analogy: The Kitchen where the stoves, chefs, and secret recipes live",
      title: "4. The Kitchen (The Server & Database): Why APIs let you build giant apps without reinventing the wheel",
      plainMeaning:
        "Behind the kitchen doors, the server verifies your API key, queries its private database, runs calculations, and prepares the response—without ever exposing its internal database passwords or source code to the public.\n\n" +
        "Why this is a superpower for builders: Modern apps are built by snapping together other companies' kitchens via APIs! You don't have to build a global satellite network to show a map (use Google Maps API), become a bank to take credit cards (use Stripe API), or train a frontier LLM on 10,000 GPUs (call the Gemini / Claude / OpenAI API).",
      realWorldExamples:
        "• Airline Kitchens: Delta, British Airways, and United each guard their own seat database, but expose an API so Expedia and Kayak can check seat availability in 200ms.\n" +
        "• Your Own App's Kitchen: Your Python ('FastAPI') or Node.js backend server is the kitchen for your own frontend website!",
      codeExample:
        "# Inside YOUR Python Kitchen (FastAPI server):\n" +
        "@app.get('/api/weather')\n" +
        "def get_weather(city: str):\n" +
        "    # Kitchen checks database or calls external Weather API:\n" +
        "    return {'city': city, 'temp_c': 18, 'status': '200 OK'}"
    }
  ];

  // ============================================================================
  // 2. THE 7 CLICKABLE PARTS OF AN API ENDPOINT CALL
  // ============================================================================
  var ENDPOINT_PARTS = [
    {
      id: "ep-method",
      partNum: "1",
      shortPill: "1. HTTP Verb (GET / POST)",
      codeSnippet: "POST",
      badgeClass: "badge-info",
      icon: "send",
      title: "1. HTTP Method / Verb ('GET', 'POST', 'PATCH', 'DELETE'): What action are you taking?",
      plainMeaning:
        "Every API request starts with an action word (called an HTTP Verb, mapping to CRUD — Create, Read, Update, Delete):\n" +
        "• GET = Read only: 'Show me my notes.' (Safe to refresh; never changes data).\n" +
        "• POST = Create or Trigger: 'Create a new note' or 'Ask the AI to summarize this.'\n" +
        "• PUT / PATCH = Update: 'Change Task #42's status from To Do to Doing.'\n" +
        "• DELETE = Remove: 'Delete Task #42.'",
      whyCritical:
        "Common beginner bug: using a GET request to delete or pay for something, or sending a POST from the browser when the backend function was written as @app.get(...) (which causes a '405 Method Not Allowed' error!).",
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
      title: "2. Endpoint Path & Path Parameters ('/api/tasks/42'): Which dish on the menu are you ordering?",
      plainMeaning:
        "Think of your server's domain ('https://myapp.com') as the restaurant address. An Endpoint is one specific item on the menu—like '/api/tasks' (the tasks desk) or '/api/users' (the users desk).\n\n" +
        "When you put a specific ID right inside the path—like '/api/tasks/42'—that '42' is called a Path Parameter. It tells the server: 'I want Task #42 specifically.'",
      whyCritical:
        "On your backend server, 1 Endpoint = 1 Python/JS Function. When the browser calls '/api/tasks/42', your server automatically runs 'def get_task(task_id=42):'.",
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
      title: "3. Query Parameters ('?status=doing&limit=20'): Optional filter instructions",
      plainMeaning:
        "Everything after the question mark '?' in a URL is a Query Parameter—key-value pairs separated by '&' that filter, sort, or paginate the results without changing which endpoint doorbell you are ringing.",
      whyCritical:
        "Query parameters are how you add search ('?q=mcp'), filtering ('?status=doing'), and pagination ('?limit=20&page=2') so your endpoint doesn't dump 50,000 rows at once.",
      codeExample:
        "# Calling GET /api/tasks?status=doing&limit=20\n" +
        "@app.get('/api/tasks')\n" +
        "def list_tasks(status: str = 'all', limit: int = 20):\n" +
        "    return db.query_tasks(status=status, limit=limit)"
    },
    {
      id: "ep-headers",
      partNum: "4",
      shortPill: "4. Headers (API key & format)",
      codeSnippet: "Authorization: Bearer eyJ...",
      badgeClass: "badge-warning",
      icon: "badge",
      title: "4. Request Headers ('Authorization', 'Content-Type'): The ID badge on the envelope",
      plainMeaning:
        "Invisible to the URL bar, every request carries an envelope label called Headers. The two most important headers are:\n" +
        "• Authorization: Bearer <token> — Your user's login token or secret API key proving who is calling.\n" +
        "• Content-Type: application/json — Tells the server: 'The package inside this envelope is formatted as JSON.'",
      whyCritical:
        "Whenever an API says '401 Unauthorized', it almost always means your request forgot to include the Authorization header (or your API key / token expired).",
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
        "When you create (POST) or update (PATCH) data, you don't cram a whole paragraph into the URL bar. Instead, you send a neat JSON dictionary inside the Request Body (also called the Payload).",
      whyCritical:
        "Always validate the Request Body on your server using a strict form (Pydantic in Python or Zod in TypeScript) so missing or misspelled fields get caught cleanly.",
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
      title: "6. HTTP Status Codes ('200', '400', '401', '404', '429', '500'): The instant 3-digit receipt",
      plainMeaning:
        "Every time an endpoint replies, it stamps a 3-digit number on the response so you know immediately what happened:\n" +
        "• 2xx (200 OK, 201 Created): Success! Everything worked.\n" +
        "• 4xx (Mistake on the caller's side):\n" +
        "  - 400 Bad Request / 422: Missing or invalid input field.\n" +
        "  - 401 Unauthorized / 403 Forbidden: Not logged in, or missing permission scope.\n" +
        "  - 404 Not Found: Misspelled endpoint URL ('/api/taks' instead of '/api/tasks').\n" +
        "  - 429 Too Many Requests: You hit the speed limit (Rate Limit)!\n" +
        "• 5xx (500 Internal Server Error, 503 Unavailable): The backend server or database crashed!",
      whyCritical:
        "Knowing the difference between 4xx ('my browser sent the wrong URL/input') and 5xx ('my Python backend crashed') cuts debugging time in half.",
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
        "Two critical endpoint guardrails every builder runs into:\n" +
        "• CORS (Cross-Origin Resource Sharing): When your frontend is on 'http://localhost:3000' and your backend is on 'http://localhost:8000', the browser blocks the call unless your backend explicitly lists 'localhost:3000' in its allowed CORS origins (prevents random malicious websites from calling your API).\n" +
        "• Rate Limiting: A speed limit on your endpoint (e.g. 'max 20 requests per minute per user') so bots can't spam your AI endpoint and run up a huge bill.",
      whyCritical:
        "If Chrome Console ever says 'Blocked by CORS policy', don't panic—it just means you need to add CORSMiddleware (3 lines of code) to your backend server!",
      codeExample:
        "# Enabling CORS in Python FastAPI so your frontend can call your endpoints:\n" +
        "app.add_middleware(\n" +
        "    CORSMiddleware,\n" +
        "    allow_origins=['https://myapp.com', 'http://localhost:3000'],\n" +
        "    allow_methods=['GET', 'POST', 'PATCH', 'DELETE']\n" +
        ")"
    }
  ];

  // ============================================================================
  // 3. TECH WITH TIM'S MCP EXPLAINER & BUILD ("MCP Servers Explained & Built" — He8tUwLzLnU)
  // ============================================================================
  var MCP_COURSE_STAGES = [
    {
      id: "mcp-stage-loop",
      stageNum: "1",
      shortTab: "1. How AI Tool Calls Work (4 Steps)",
      icon: "Memory",
      badge: "Part 1 of 4 · The Core Mechanism (0:15)",
      badgeClass: "badge-info",
      headline: "On its own, an AI model is just 'text in -> text out' (And the model NEVER runs your function itself!)",
      summary:
        "As Tech With Tim explains at 0:15: a language model on its own cannot read your files, check your calendar, or query your database. To let it act, you give it Tools—and every tool call happens in 4 simple JSON steps between the MCP Client (Claude/Cursor) and your MCP Server:",
      steps: [
        {
          id: "mcp-loop-1",
          pill: "Step 1 · Client asks 'tools/list'",
          title: "Step 1: MCP Client asks 'What tools do you have?' (tools/list)",
          detail:
            "When Claude Desktop or Cursor starts up, it sends a JSON request ('{\"method\": \"tools/list\"}') to your MCP Server. Your server replies with the list of tool names, plain-English descriptions (from your Python docstrings!), and required input parameters.",
          wireJson:
            "// 1. Client -> Server:\n{ \"method\": \"tools/list\" }\n\n// Server -> Client:\n{\n  \"tools\": [\n    { \"name\": \"list_my_notes\", \"description\": \"List all saved notes.\" },\n    { \"name\": \"add_a_note\",    \"description\": \"Save a new note.\" },\n    { \"name\": \"delete_a_note\", \"description\": \"Delete a note by id.\" }\n  ]\n}"
        },
        {
          id: "mcp-loop-2",
          pill: "Step 2 · Model picks a tool",
          title: "Step 2: Model reads the list and decides 'Call add_a_note'",
          detail:
            "When you tell Cursor 'Add a note that says buy milk', the AI model reads the tool list and decides: 'I need 'add_a_note'.' Crucially, the AI model does NOT execute code—it simply replies to the MCP Client: 'Please call 'add_a_note' with '{\"text\": \"buy milk\"}'.'",
          wireJson:
            "// 2. Client -> Server (triggered by the model's decision):\n{\n  \"method\": \"tools/call\",\n  \"params\": {\n    \"name\": \"add_a_note\",\n    \"arguments\": { \"text\": \"buy milk\" }\n  }\n}"
        },
        {
          id: "mcp-loop-3",
          pill: "Step 3 · Your Server runs Python",
          title: "Step 3: YOUR code runs the Python function (Model is not involved!)",
          detail:
            "Your MCP Server receives 'tools/call', runs your normal Python function ('add_a_note(text='buy milk')') against your SQLite/Postgres database or API, and captures the return value.",
          wireJson:
            "# 3. Inside your Python MCP Server (v1_local.py):\n@mcp.tool()\ndef add_a_note(text: str) -> dict:\n    \"\"\"Save a new note.\"\"\"  # <-- The docstring the AI model reads!\n    return add_note(owner='local', text=text)"
        },
        {
          id: "mcp-loop-4",
          pill: "Step 4 · JSON result returns to Model",
          title: "Step 4: Result goes back to the model so it can write the answer",
          detail:
            "Your MCP Server sends the JSON result ('{\"id\": 1, \"text\": \"buy milk\"}') back to the MCP Client, which hands it to the AI model so it can reply: 'Done! I saved Note #1: buy milk.'",
          wireJson:
            "// 4. Server -> Client -> Model:\n{\n  \"content\": [\n    { \"type\": \"text\", \"text\": \"{\\\"id\\\": 1, \\\"text\\\": \\\"buy milk\\\"}\" }\n  ]\n}"
        }
      ]
    },
    {
      id: "mcp-stage-usbc",
      stageNum: "2",
      shortTab: "2. Why MCP? (USB-C vs. M×N Plumbing)",
      icon: "usb",
      badge: "Part 2 of 4 · The USB-C Standard",
      badgeClass: "badge-success",
      headline: "Before MCP, everyone rebuilt the exact same tool plumbing for every AI app. MCP is 'the USB-C of AI tools.'",
      summary:
        "Before MCP, if you built a GitHub or Notes integration for Claude, it didn't work in Cursor, VS Code, or ChatGPT—4 apps × 4 tools meant 16 custom integrations. With MCP (Model Context Protocol), you write your tools ONCE as an MCP Server, and every MCP Client plugs right in."
    },
    {
      id: "mcp-stage-local-remote",
      stageNum: "3",
      shortTab: "3. Local (stdio) vs. Remote (HTTP) & Auth",
      icon: "public",
      badge: "Part 3 of 4 · Local vs. Remote (3:08)",
      badgeClass: "badge-warning",
      headline: "Two ways to run an MCP Server: Local subprocess (stdio) vs. Remote URL (HTTP)—and why Remote needs OAuth",
      summary:
        "90% of beginner tutorials only show Local MCP ('stdio'), where Claude or Cursor runs 'python v1_local.py' on your own laptop. But real products (GitHub, Notion, Stripe MCP servers) run Remotely over HTTP at a URL—which creates a massive security question: 'Who is calling my tools?'",
      modes: [
        {
          id: "mode-local",
          pill: "Way 1 · Local MCP (stdio subprocess)",
          badge: "Local · Only on your machine",
          badgeClass: "badge-success",
          title: "Local MCP Server ('stdio' — Standard Input / Output)",
          whatItIs:
            "Claude Desktop or Cursor literally launches 'python v1_local.py' as a background subprocess on your computer and pipes JSON messages over 'stdin' and 'stdout'.\n" +
            "• Pros: Zero network setup; nobody outside your laptop can touch it.\n" +
            "• Cons: Only works on that one laptop—you can't share it with teammates or use it from your phone or cloud agents.",
          codeSnippet:
            "// ~/.cursor/mcp.json (Local stdio config):\n{\n  \"mcpServers\": {\n    \"notes\": {\n      \"command\": \"uv\",\n      \"args\": [\"run\", \"v1_local.py\"]\n    }\n  }\n}"
        },
        {
          id: "mode-remote-trap",
          pill: "Way 2 · Remote MCP (HTTP URL) & The Static-Key Trap",
          badge: "Remote · Live on the Internet",
          badgeClass: "badge-danger",
          title: "Remote MCP Server ('HTTP') — Why 'No Auth' or a Static API Key fails in production",
          whatItIs:
            "With a 1-line change ('mcp.run(transport='http', port=8000)'), your MCP server becomes a URL ('https://notes.example.com/mcp'). Now every request must answer 3 questions: (1) Who is calling? (2) What are they allowed to do? (3) On whose behalf?\n\n" +
            "Why a single shared 'API_KEY=sk-a83f...' fails (Slide 10 of Tim's video):\n" +
            "• ~25% of public MCP servers audited in 2026 had no authentication at all.\n" +
            "• If 5 different AI agents share 1 static API key, you can't tell which agent did what, there is no 'user_id' attached (so all users overwrite the same notes!), and if 1 agent breaks, killing the key breaks everybody.",
          codeSnippet:
            "# Problem with a single static API_KEY shared by 5 agents:\nAgent 1 (Cursor)  --\\\nAgent 2 (Claude)  ---> API_KEY=sk-a83f... ---> MCP Server ('Which agent & which user is this?!')\nAgent 3 (ChatGPT) --/"
        },
        {
          id: "mode-oauth-dance",
          pill: "The Fix · OAuth 2.1 'The 401 Dance' & Scopes",
          badge: "MCP Spec Standard · OAuth 2.1",
          badgeClass: "badge-info",
          title: "How Remote MCP Authentication Works: 'The 401 Dance', Per-Tool Scopes & Per-User Data",
          whatItIs:
            "Key insight from the video (4:13): Your MCP server does NOT build its own login screen—it delegates login to an Authorization Server (like Descope, Auth0, or Clerk) using OAuth 2.1:\n" +
            "1. 401 + Discovery: Claude/Cursor calls '/mcp' with no token -> Your server replies '401 Unauthorized' + points to '.well-known/oauth-protected-resource'.\n" +
            "2. Dynamic Client Registration + Login: Cursor automatically registers itself as a client and opens your browser to the normal login + Consent Screen (*'Allow Claude to 'notes:read' and 'notes:write'?'*).\n" +
            "3. Scoped Token: Cursor sends 'Authorization: Bearer <token>' containing 'sub' (User ID), 'aud' (your MCP server URL only), 'scope' ('notes:read notes:write'), and 'azp' (which agent client).\n" +
            "4. Per-User & Per-Tool Safety: 'list_my_notes' checks 'notes:read', 'delete_a_note' checks 'notes:write', and notes are saved under 'owner=user_id'!",
          codeSnippet:
            "// Inside the decoded OAuth 2.1 Access Token (Slide 12):\n{\n  \"sub\": \"user_2abc...\",                  // <-- WHO the human user is (per-user data!)\n  \"aud\": \"https://notes.example.com/mcp\", // <-- For YOUR MCP server only\n  \"scope\": \"notes:read notes:write\",      // <-- WHAT permissions they approved\n  \"azp\": \"cursor-client-7f3a\",            // <-- WHICH AI agent is calling (revocable!)\n  \"exp\": 1757450000                       // <-- Short-lived expiration\n}"
        }
      ]
    },
    {
      id: "mcp-stage-build",
      stageNum: "4",
      shortTab: "4. Build an MCP Server in Python (v1 -> v2 -> v3)",
      icon: "terminal",
      badge: "Part 4 of 4 · Hands-On Build (11:52)",
      badgeClass: "badge-info",
      headline: "How to build a real Python MCP Server in 3 steps using FastMCP (from Tech With Tim's GitHub repo)",
      summary:
        "Click through the 3 versions built in the video ('v1_local.py', 'v2_remote.py', and 'v3_auth.py'). Notice how creating an MCP tool in Python is literally just adding '@mcp.tool()' above a normal Python function!",
      versions: [
        {
          id: "build-v1",
          pill: "v1_local.py · Local stdio (15 lines)",
          badge: "Step 1 · Local Subprocess",
          badgeClass: "badge-success",
          title: "v1_local.py — A complete local MCP server in 15 lines of Python ('uv add fastmcp')",
          takeaway:
            "You decorate normal Python functions with '@mcp.tool()'. FastMCP automatically inspects your function name, type hints ('text: str', 'note_id: int'), and docstring ('\"\"\"Save a new note.\"\"\"') to generate the JSON schema the AI model reads!",
          code:
            "# Run: uv init && uv add fastmcp\n" +
            "from fastmcp import FastMCP\n" +
            "from notes_db import add_note, delete_note, list_notes\n\n" +
            "mcp = FastMCP(\"notes\")\n\n" +
            "@mcp.tool()\n" +
            "def list_my_notes() -> list[dict]:\n" +
            "    \"\"\"List all saved notes.\"\"\"\n" +
            "    return list_notes(owner=\"local\")\n\n" +
            "@mcp.tool()\n" +
            "def add_a_note(text: str) -> dict:\n" +
            "    \"\"\"Save a new note.\"\"\"\n" +
            "    return add_note(owner=\"local\", text=text)\n\n" +
            "@mcp.tool()\n" +
            "def delete_a_note(note_id: int) -> str:\n" +
            "    \"\"\"Delete a note by id.\"\"\"\n" +
            "    return \"deleted\" if delete_note(owner=\"local\", note_id=note_id) else \"not found\"\n\n" +
            "if __name__ == \"__main__\":\n" +
            "    mcp.run()  # Runs locally over stdio (Claude/Cursor launch it as a subprocess)"
        },
        {
          id: "build-v2",
          pill: "v2_remote.py · Remote HTTP (The Problem)",
          badge: "Step 2 · Remote URL (No Auth)",
          badgeClass: "badge-warning",
          title: "v2_remote.py — One line change turns it into a live HTTP URL ('http://localhost:8000/mcp')",
          takeaway:
            "Changing 'mcp.run()' to 'mcp.run(transport='http', host='0.0.0.0', port=8000)' puts your MCP server on the network. Now Cursor connects via '{\"url\": \"http://localhost:8000/mcp\"}'—but ANYONE with that URL can read or delete all notes with zero login!",
          code:
            "# Only the last line changes to make it a Remote HTTP MCP Server:\n" +
            "mcp = FastMCP(\"notes\")\n\n" +
            "@mcp.tool()\n" +
            "def list_my_notes() -> list[dict]:\n" +
            "    \"\"\"List all saved notes.\"\"\"\n" +
            "    return list_notes(owner=\"local\")  # <-- DANGER: Everyone shares 'local'!\n\n" +
            "if __name__ == \"__main__\":\n" +
            "    # Exposes Streamable HTTP endpoint at http://localhost:8000/mcp\n" +
            "    mcp.run(transport=\"http\", host=\"0.0.0.0\", port=8000)"
        },
        {
          id: "build-v3",
          pill: "v3_auth.py · Protected by OAuth & Scopes (The Fix)",
          badge: "Step 3 · Production OAuth 2.1",
          badgeClass: "badge-info",
          title: "v3_auth.py — Adding the OAuth 2.1 Bouncer, Per-Tool Scopes ('notes:read' / 'notes:write'), and Per-User Notes",
          takeaway:
            "Three small changes turn the demo into a real multi-user product:\n" +
            "1. Pass 'auth=DescopeProvider(...)' to 'FastMCP' (rejects unauthenticated requests with '401' and triggers browser login).\n" +
            "2. Check 'current_user('notes:read')' or 'current_user('notes:write')' at the top of each tool.\n" +
            "3. Pass 'owner=user_id' instead of 'owner='local'' so User A and User B never see each other's notes!",
          code:
            "# 1. The OAuth 2.1 Bouncer (advertises scopes & handles the 401 login dance):\n" +
            "auth = DescopeProvider(\n" +
            "    config_url=os.environ[\"DESCOPE_CONFIG_URL\"],\n" +
            "    base_url=\"http://localhost:8000\",\n" +
            "    scopes_supported=[\"notes:read\", \"notes:write\"],\n" +
            ")\n" +
            "mcp = FastMCP(\"notes\", auth=auth)\n\n" +
            "# 2. Per-tool scope verification + Per-user data isolation (owner=user_id):\n" +
            "@mcp.tool()\n" +
            "def list_my_notes() -> list[dict] | dict:\n" +
            "    \"\"\"List the caller's notes. Requires notes:read.\"\"\"\n" +
            "    user_id, _ = current_user(\"notes:read\")\n" +
            "    return list_notes(owner=user_id)\n\n" +
            "@mcp.tool()\n" +
            "def add_a_note(text: str) -> dict:\n" +
            "    \"\"\"Save a note for the caller. Requires notes:write.\"\"\"\n" +
            "    user_id, _ = current_user(\"notes:write\")\n" +
            "    return add_note(owner=user_id, text=text)"
        }
      ]
    }
  ];

  var MCP_PRIMITIVES = [
    {
      id: "mcp-prim-tools",
      badge: "Primitive 1 · The AI's Hands",
      badgeClass: "badge-info",
      icon: "build",
      title: "1. Tools (Executable functions like @mcp.tool() the AI can ask to call)",
      analogy: "Like buttons on a remote control that let the AI ask your server to DO something (read/write/delete).",
      whatItIs:
        "In MCP, a 'Tool' is a Python/JS function exposed by the MCP Server—like 'list_my_notes()', 'add_a_note(text)', or 'create_github_issue(title)'. The AI model reads the tool's name and docstring description, asks your server to run it via 'tools/call', and gets the JSON result back.",
      example: "@mcp.tool()\ndef add_a_note(text: str) -> dict:\n    \"\"\"Save a new note.\"\"\""
    },
    {
      id: "mcp-prim-resources",
      badge: "Primitive 2 · The AI's Eyes / Library",
      badgeClass: "badge-success",
      icon: "menu_book",
      title: "2. Resources (Read-only files, schemas & live data)",
      analogy: "Like reference books on a library shelf that the AI can open and read without changing anything.",
      whatItIs:
        "A 'Resource' is read-only context—like a database table schema ('postgres://schema/users'), a local file ('file:///logs/error.log'), or a documentation page. Unlike Tools (which perform actions), Resources simply feed clean background data into the AI's context.",
      example: "Resource URI: notes://user/recent (Read-only context stream)"
    },
    {
      id: "mcp-prim-prompts",
      badge: "Primitive 3 · The AI's Playbook",
      badgeClass: "badge-secondary",
      icon: "fact_check",
      title: "3. Prompts (Reusable slash-command templates)",
      analogy: "Like a pre-written recipe card so the user doesn't have to type a 200-word prompt from scratch.",
      whatItIs:
        "An MCP Server can also package ready-made 'Prompt' templates (often shown as slash commands in Claude/Cursor like '/summarize-notes' or '/review-pr') that automatically pull in the right Resources and Tools.",
      example: "Prompt template: /weekly-notes-digest (attaches notes list + summary instructions)"
    }
  ];

  // ============================================================================
  // 4. THE 5 WAYS SYSTEMS & AI TALK (WHEN TO USE WHICH)
  // ============================================================================
  var FIVE_PATTERNS = [
    {
      id: "pat-rest",
      shortPill: "1. REST API (You ask -> Waiter replies)",
      icon: "sync_alt",
      whoStarts: "Browser / App starts it ('Pull')",
      bestFor: "90% of everyday app actions: loading a page, saving a form, logging in, or fetching weather/flight data.",
      howItWorks:
        "Your browser knocks on a specific Endpoint URL ('GET /api/tasks'), the API waiter goes to the server kitchen, and brings back a JSON answer in ~50 milliseconds.",
      whenNotToUse: "Don't use a single synchronous REST call if a job takes 2 minutes (it will time out)—use a Webhook or Streaming instead."
    },
    {
      id: "pat-webhook",
      shortPill: "2. Webhook (Kitchen texts you when done)",
      icon: "notifications_active",
      whoStarts: "Outside server starts it ('Push')",
      bestFor: "Getting notified when an outside event happens (e.g., Stripe payment finishes, GitHub PR is merged, Slack message arrives).",
      howItWorks:
        "Instead of your server asking Stripe every 2 seconds 'Did they pay yet?', you give Stripe a Webhook Endpoint URL on your server ('POST /api/webhooks/stripe'). The instant the customer pays, Stripe's server calls your endpoint to tell you!",
      whenNotToUse: "Requires a public URL (or a tunnel tool like 'cloudflared tunnel' or 'ngrok' when testing on your laptop) so the outside service can reach your endpoint."
    },
    {
      id: "pat-stream",
      shortPill: "3. Streaming / SSE / WebSockets (Live open line)",
      icon: "stream",
      whoStarts: "Persistent open phone line ('Stream')",
      bestFor: "Streaming AI words token-by-token as they generate (Server-Sent Events / Streamable HTTP), live chat rooms, or collaborative cursors (WebSockets).",
      howItWorks:
        "Instead of waiting 12 seconds for an AI to finish writing a whole essay before showing anything, SSE / Streamable HTTP keeps the connection open and pushes each word or tool event the millisecond it is generated.",
      whenNotToUse: "Overkill for simple 'save settings' or 'fetch user profile' requests where a normal REST API endpoint is simpler."
    },
    {
      id: "pat-tool-call",
      shortPill: "4. Direct AI Function Calling (1-app tool use)",
      icon: "functions",
      whoStarts: "AI model asks YOUR app to run 1 function",
      bestFor: "Giving an AI model inside your own single backend script 2 or 3 Python functions it can invoke.",
      howItWorks:
        "When your backend calls the Gemini/OpenAI/Claude API, you pass a JSON list of function definitions. The AI replies: 'Please run lookup_order(104).' Your code runs that function and sends the output back to the AI.",
      whenNotToUse: "If you want those tools to work across Claude Desktop, Cursor, VS Code, and ChatGPT without rewriting glue code for each one, build an MCP Server instead!"
    },
    {
      id: "pat-mcp",
      shortPill: "5. MCP Server (Universal USB-C for AI agents)",
      icon: "usb",
      whoStarts: "Any MCP Client discovers & calls tools via JSON",
      bestFor: "Building tools ONCE ('@mcp.tool()') so Claude, Cursor, VS Code, ChatGPT, and custom agents can all discover and call them over stdio (local) or HTTP + OAuth 2.1 (remote).",
      howItWorks:
        "Your MCP Server exposes Tools, Resources, and Prompts. When an MCP Client connects, it calls 'tools/list' to discover what tools exist, and 'tools/call' whenever the model decides to use one—protected by OAuth 2.1 scopes ('notes:read', 'notes:write') when hosted remotely.",
      whenNotToUse: "MCP doesn't replace normal REST APIs for your website's UI buttons—your website buttons still call REST endpoints ('/api/tasks'), while AI agents plug into your MCP Server!"
    }
  ];

  window.McpAndEndpointsData = {
    API_VIDEO_URL: API_VIDEO_URL,
    MCP_VIDEO_URL: MCP_VIDEO_URL,
    MCP_REPO_URL: MCP_REPO_URL,
    API_WAITER_STEPS: API_WAITER_STEPS,
    ENDPOINT_PARTS: ENDPOINT_PARTS,
    MCP_COURSE_STAGES: MCP_COURSE_STAGES,
    MCP_PRIMITIVES: MCP_PRIMITIVES,
    FIVE_PATTERNS: FIVE_PATTERNS
  };
})();
