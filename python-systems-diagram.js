// Deployed Eng Pipeline — Stop 5 (Python & Code Literacy Blueprint) & Stop 6 (System Dynamics & AI Agents Blueprint)
// Translates core Python & full-stack agentic concepts into universal, non-Google-specific interactive diagrams.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var PYTHON_BLUEPRINT_ITEMS = {
    "py-vars-types": {
      id: "py-vars-types",
      stageKey: "stage-py-basics",
      label: "Variables & types",
      tag: "Python basics",
      badgeClass: "badge-info",
      icon: "data_Array",
      headline: "Variables & core data types (str, int, float, bool, None)",
      oneLiner: "Labeled boxes in computer memory that hold text, numbers, True/False switches, or 'empty' (None).",
      whatItIs: "A variable is simply a nickname pointing to a value in memory (like 'user_name = \"Lucy\"'). Every value has a 'type' that tells Python what it can do with it:\n• 'str' (String): Text inside quotes ('\"hello\"').\n• 'int' / 'float': Whole numbers ('42') or decimals ('3.14').\n• 'bool' (Boolean): A 'True' or 'False' light switch.\n• 'None': Python's word for 'empty / nothing here yet'.",
      whyItMatters: "Many AI-generated bugs happen when code expects a number ('42') or a dictionary, but receives text ('\"42\"') or 'None' instead—causing a 'TypeError'.",
      codeExample: "user_name = \"Lucy\"      # str (text)\npriority_score = 95     # int (whole number)\nis_urgent = True        # bool (True / False)\ndraft_reply = None      # None (empty placeholder)"
    },
    "py-control-flow": {
      id: "py-control-flow",
      stageKey: "stage-py-basics",
      label: "if / else & for loops",
      tag: "Control flow",
      badgeClass: "badge-info",
      icon: "alt_route",
      headline: "Control flow: Making decisions (if / else) and repeating work (for loops)",
      oneLiner: "How code decides which path to take ('if / elif / else') and repeats an action across a list ('for item in list').",
      whatItIs: "Code runs from top to bottom unless you give it a fork in the road or a loop:\n• 'if / elif / else': Checks a condition ('if the email is urgent, highlight it red; otherwise, mark it normal').\n• 'for' loop: Takes a list of 100 items and runs the exact same indented block of code on each item one by one.",
      whyItMatters: "When you skim AI code, looking at the 'if' conditions shows you the exact business rules the AI assumed (and whether it forgot an 'else' fallback!).",
      codeExample: "for email in inbox_list:\n    if email[\"is_urgent\"] and not email[\"is_archived\"]:\n        flag_for_review(email)\n    else:\n        move_to_digest(email)"
    },
    "py-functions": {
      id: "py-functions",
      stageKey: "stage-py-basics",
      label: "Functions (def -> return)",
      tag: "Reusable recipes",
      badgeClass: "badge-success",
      icon: "functions",
      headline: "Functions ('def' and 'return'): Reusable recipe blocks",
      oneLiner: "A named mini-machine that takes inputs inside parentheses '()', runs a few steps, and hands back an answer with 'return'.",
      whatItIs: "In Python, 'def' stands for 'define a function'. You give the function a clear action name (like 'def calculate_total(price, tax):'), write the steps indented underneath it, and use 'return' to hand the finished result back to whoever called it.",
      whyItMatters: "Breaking code into small, named functions means you can test one piece at a time—and when a button on your website calls '/api/users', it simply triggers a Python function like 'def get_user(user_id):' on your server!",
      codeExample: "def move_task(task, target_column):\n    allowed = [\"To Do\", \"Doing\", \"Done\"]\n    if target_column not in allowed:\n        raise ValueError(\"Unknown column!\")\n    task[\"status\"] = target_column\n    return task"
    },
    "py-dict-row": {
      id: "py-dict-row",
      stageKey: "stage-py-data",
      label: "Dictionary {key: val}",
      tag: "1 Single Row",
      badgeClass: "badge-secondary",
      icon: "data_object",
      headline: "Python Dictionary ('dict'): One labeled record (like a single row in a table)",
      oneLiner: "Stores labeled pairs inside curly braces '{\"column_name\": value}' so you can look things up by name instead of position.",
      whatItIs: "A Python Dictionary ('dict') looks almost identical to JSON! Inside curly braces '{}', you pair each label ('key') with its value: '{\"task\": \"Launch site\", \"status\": \"Doing\"}'. Tip: using 'task.get(\"owner\", \"Unassigned\")' safely returns a default value instead of crashing if the key is missing.",
      whyItMatters: "Think of a single Dictionary as one row in a spreadsheet—where the keys are the column headers and the values are the cells in that row.",
      codeExample: "# One dictionary = One row of data\nrow = {\n    \"id\": 101,\n    \"title\": \"Add terminal sandbox\",\n    \"status\": \"Doing\"\n}\nprint(row.get(\"status\"))  # Prints: Doing"
    },
    "py-list-collection": {
      id: "py-list-collection",
      stageKey: "stage-py-data",
      label: "List [row1, row2]",
      tag: "Ordered list",
      badgeClass: "badge-secondary",
      icon: "format_list_numbered",
      headline: "Python List ('list'): An ordered shelf of items inside square brackets '[]'",
      oneLiner: "Holds an ordered sequence of items ('[item0, item1, item2]') that you can loop over, sort, or filter.",
      whatItIs: "Whenever you see square brackets '[...]' in Python, that's a List. Lists keep items in exact order (counting starts at '0', so 'my_list[0]' is the first item, and 'my_list[:3]' slices the first three items). You add a new item to the end with '.append(item)'.",
      whyItMatters: "When you put Dictionaries inside a List ('[ {...}, {...}, {...} ]'), you get a List of Dictionaries—which is how almost all database query results and API tables are represented in code!",
      codeExample: "# A List of Dictionaries = A multi-row Table!\ntasks_table = [\n    {\"id\": 1, \"title\": \"Draft essay\", \"status\": \"Done\"},\n    {\"id\": 2, \"title\": \"Ship diagram\", \"status\": \"Doing\"}\n]"
    },
    "py-pandas-df": {
      id: "py-pandas-df",
      stageKey: "stage-py-data",
      label: "Pandas DataFrame (Table)",
      tag: "Data table",
      badgeClass: "badge-success",
      icon: "table_chart",
      headline: "Pandas DataFrame: A supercharged spreadsheet table inside Python & Colab",
      oneLiner: "Turns a List of Dictionaries (or a CSV/spreadsheet) into a whole table you can filter, group, and analyze in one line.",
      whatItIs: "For a few items in memory, normal Python Lists and Dictionaries are plenty. When you want to analyze a whole spreadsheet or CSV of 10,000 rows (for example, inside a Jupyter or Google Colab notebook), engineers use Pandas. A Pandas 'DataFrame' is simply a table built from a list of dictionaries that lets you filter or summarize across an entire column at once.",
      whyItMatters: "Instead of writing 30 lines of loops to clean data or count categories, Pandas lets you filter missing rows ('.dropna()') or count totals ('.value_counts()') in a single readable line.",
      codeExample: "import pandas as pd\n\n# Turn a list of dictionaries (or a CSV) into a table:\ndf = pd.DataFrame(tasks_table)\ndoing_only = df[df[\"status\"] == \"Doing\"]"
    },
    "py-pydantic-schema": {
      id: "py-pydantic-schema",
      stageKey: "stage-py-contracts",
      label: "Pydantic & JSON Schema",
      tag: "AI contract",
      badgeClass: "badge-info",
      icon: "verified",
      headline: "Structured Schemas (Pydantic & JSON Schema): Forcing AI to fill out a strict form",
      oneLiner: "Guarantees that an AI model or API replies with exact, verified fields instead of unpredictable chatty paragraphs.",
      whatItIs: "If you ask an LLM to classify an email, a normal prompt might reply ''Sure! I think this email is High Priority.''—which breaks your app code when it tries to read the priority. Pydantic lets you define a strict Python blueprint ('class TriageResult(BaseModel):') that forces the AI API to return a clean, type-checked JSON object every single time.",
      whyItMatters: "Structured outputs are the secret to reliable AI apps: they turn a creative chatbot into a predictable software component.",
      codeExample: "from pydantic import BaseModel\n\nclass TaskUpdate(BaseModel):\n    task_id: int\n    new_status: str   # Must be 'To Do', 'Doing', or 'Done'\n    confidence: float"
    },
    "py-protobuf-types": {
      id: "py-protobuf-types",
      stageKey: "stage-py-contracts",
      label: "Protobufs & strict types",
      tag: "Wire contract",
      badgeClass: "badge-secondary",
      icon: "schema",
      headline: "Protocol Buffers (Protobufs) & TypeScript Types: Strict contracts between servers",
      oneLiner: "A super-fast, strongly typed blueprint ('.proto' or '.ts') so two different servers never misread a field name.",
      whatItIs: "While JSON is great for human-readable web APIs, large engineering teams often also use Protocol Buffers (Protobufs) or shared TypeScript interfaces. You write one '.proto' schema file defining the exact field names and types ('string email = 1; int32 priority = 2;'), and it automatically generates matching Python and TypeScript code so neither side can ever misspell a field.",
      whyItMatters: "Prevents the classic bug where the backend renames 'user_id' to 'userId' and accidentally breaks the frontend screen.",
      codeExample: "// Example .proto or schema contract:\nmessage UserProfile {\n  int32 id = 1;\n  string name = 2;\n  bool is_active = 3;\n}"
    },
    "py-stack-traces": {
      id: "py-stack-traces",
      stageKey: "stage-py-contracts",
      label: "Stack traces & try/except",
      tag: "Debugging",
      badgeClass: "badge-danger",
      icon: "bug_report",
      headline: "Reading Stack Traces (Bottom-to-Top) & catching errors with 'try / except'",
      oneLiner: "When Python crashes, skip straight to the VERY LAST line of the error log to see what broke and why.",
      whatItIs: "When code crashes, Python prints a 'Traceback (most recent call last)'—a stack trace showing the chain of functions that ran. Golden rule: read from the bottom up!\n• 'KeyError: 'email'' — You asked a dictionary for ''email'', but that key wasn't there.\n• 'TypeError' — You mixed incompatible types (like adding a number to 'None').\n• 'IndexError' — You asked for item #5 in a list that only has 2 items.\nWrapping risky calls (like network requests) in 'try: ... except:' lets your app recover gracefully instead of crashing.",
      whyItMatters: "Reading the bottom 2 lines of a stack trace lets you fix bugs in 15 seconds instead of pasting 'it crashed' into AI ten times.",
      codeExample: "try:\n    result = call_weather_api(city)\nexcept Exception as err:\n    # Catch the error so the app doesn't crash!\n    print(f\"API failed safely: {err}\")"
    },
    "py-unit-tests": {
      id: "py-unit-tests",
      stageKey: "stage-py-evals",
      label: "Unit tests (pytest)",
      tag: "Code check",
      badgeClass: "badge-success",
      icon: "fact_check",
      headline: "Automated Unit Tests ('pytest'): Making sure 'Move to Doing' stays in 'Doing'",
      oneLiner: "A tiny automated check script that runs your function with sample inputs and verifies the output didn't break.",
      whatItIs: "Imagine you built a task board where users can move Task A from ''To Do'' to ''Doing'' or ''Done''. Instead of clicking around in your browser after every AI edit to check if moving tasks still works, you write a 5-line test function ('def test_move_to_doing():') that moves a fake task to ''Doing'' and asserts 'assert task[\"status\"] == \"Doing\"'.",
      whyItMatters: "Running 'pytest' in your terminal checks 50 features in 1 second—so an AI edit to your styling can never secretly break your task logic.",
      codeExample: "def test_move_task_stays_in_doing():\n    task = {\"title\": \"Write guide\", \"status\": \"To Do\"}\n    updated = move_task(task, \"Doing\")\n    assert updated[\"status\"] == \"Doing\"  # Must not land in 'Done'!"
    },
    "py-golden-evals": {
      id: "py-golden-evals",
      stageKey: "stage-py-evals",
      label: "Golden AI Evals (30–50 cases)",
      tag: "AI quality",
      badgeClass: "badge-info",
      icon: "science",
      headline: "Offline AI Evals ('Golden Dataset'): Testing prompt changes against 30–50 real examples",
      oneLiner: "A saved spreadsheet of real inputs and expected answers used to grade your AI prompt before you deploy changes.",
      whatItIs: "Unit tests check normal code, but what about AI prompts where wording tweaks can change behavior? Deployed AI engineers keep a Golden Eval Dataset—a simple CSV or JSON file of 30 to 50 tricky real-world examples paired with the right answer. Whenever you tweak your prompt or swap models, a script runs all 50 examples and scores accuracy (e.g., 46/50 -> 49/50).",
      whyItMatters: "Without an Eval set, tweaking a prompt to fix 1 bad answer often secretly breaks 5 other answers that used to work!",
      codeExample: "# Loop over your 30 saved 'Golden' test cases:\ncorrect = sum(1 for row in golden_cases if classify(row.text) == row.expected)\nprint(f\"Prompt accuracy: {correct}/{len(golden_cases)}\")"
    },
    "py-build-first": {
      id: "py-build-first",
      stageKey: "stage-py-evals",
      label: "2026 rule: Build first w/ AI",
      tag: "Learning strategy",
      badgeClass: "badge-secondary",
      icon: "school",
      headline: "The 2026 way to learn Python: Build real projects first and use AI as your tutor",
      oneLiner: "Skip memorizing syntax textbooks—build a real tool you care about and ask AI to explain each new concept as it appears.",
      whatItIs: "As highlighted in 'Python in 2026: Honest Truth About Learning It Now', spending months memorizing syntax drills before building anything is backwards in the AI era. Start with a real project (like a task tracker, email classifier, or dashboard), let AI help draft the code, and pause to ask your AI editor: 'Explain lines 10–25 to me step-by-step—what is this dictionary doing and what happens if it's empty?'",
      whyItMatters: "You learn 5x faster when every Python concept (lists, dicts, schemas, stack traces) is anchored to a real feature you just built.",
      codeExample: "# Prompting your AI editor as a tutor:\n\"Before we save this file, explain the Python dictionary on line 14\n and write one pytest check to verify empty inputs don't crash.\""
    }
  };

  var SYSTEMS_AGENT_ITEMS = {
    "sys-url-to-func": {
      id: "sys-url-to-func",
      stageKey: "stage-sys-request",
      label: "URL -> Python function",
      tag: "Routing",
      badgeClass: "badge-info",
      icon: "link",
      headline: "How a website URL ('/api/users') maps directly to a backend Python function",
      oneLiner: "The API URL is the bridge that connects a button click in the browser to a specific 'def' function on your server.",
      whatItIs: "How does clicking a button in your browser actually run Python code on your server? Your backend server has a 'Router' table that maps URLs to functions. When the browser sends a request to 'GET /api/users/42', the server sees that URL pattern and calls 'def get_user(user_id=42):', which queries the database and returns the user's info as JSON.",
      whyItMatters: "Understanding this link ('Button Click' -> 'URL (/api/...)' -> 'Backend Function' -> 'Database') lets you trace any feature from front to back.",
      codeExample: "@app.get(\"/api/users/{user_id}\")\ndef get_user(user_id: int):\n    return db.find_user_by_id(user_id)"
    },
    "sys-idempotency": {
      id: "sys-idempotency",
      stageKey: "stage-sys-request",
      label: "Idempotency (Double-click shield)",
      tag: "Safety",
      badgeClass: "badge-success",
      icon: "shield",
      headline: "Idempotency: Making sure a double-click or retry never runs an action twice",
      oneLiner: "Attaching a unique receipt ID to an action so tapping 'Pay' or 'Create Task' three times only executes once.",
      whatItIs: "When Wi-Fi lags for two seconds, users naturally tap 'Submit' or 'Pay' again. 'Idempotency' is the engineering word for designing an action so repeating the exact same request has zero extra side effects—first by disabling the button while loading on the Front End, and second by checking a unique 'idempotency_key' on the Back End.",
      whyItMatters: "Prevents duplicate database rows, double emails, and accidental double credit-card charges.",
      codeExample: "# If we already processed this unique request_id, return the saved receipt!\nif db.already_processed(request.idempotency_key):\n    return db.get_saved_receipt(request.idempotency_key)"
    },
    "sys-ui-vs-db-state": {
      id: "sys-ui-vs-db-state",
      stageKey: "stage-sys-request",
      label: "Browser state vs. Database",
      tag: "Memory",
      badgeClass: "badge-secondary",
      icon: "memory",
      headline: "Temporary Browser State vs. Permanent Database Storage",
      oneLiner: "Why refreshing the page wipes out unsaved form text—and what belongs in the URL or Database instead.",
      whatItIs: "Your app has three places to remember things:\n1. Temporary UI State (RAM): Variables inside browser JavaScript (like whether a dropdown is open). Vanishes the instant you refresh the page.\n2. URL / LocalStorage: Saved in the address bar ('#stop/cli-and-terminal') or browser storage so refreshing stays on the same tab.\n3. Database (Postgres / Supabase / Firestore): Saved on the cloud server so it shows up on every device forever.",
      whyItMatters: "Whenever a feature 'forgets' user work on refresh, it means the AI stored it in temporary UI state instead of the Database or URL.",
      codeExample: "// Save current tab in the URL hash so refreshing the page keeps your spot:\nwindow.location.hash = \"#stop/system-dynamics\";"
    },
    "sys-agent-loop": {
      id: "sys-agent-loop",
      stageKey: "stage-sys-agent",
      label: "AI Agent loop (Reason + Act)",
      tag: "AI Agents",
      badgeClass: "badge-info",
      icon: "psychology",
      headline: "How an AI Agent works: System Prompt + Conversation Memory + Tool-Calling Loop",
      oneLiner: "Unlike a single prompt that just replies with text, an Agent can inspect a goal, call a tool, read the result, and decide the next step.",
      whatItIs: "What turns a normal LLM call into an AI Agent? Three things:\n1. Goal & System Instructions: Who the agent is and what rules it must follow.\n2. Tool Menu (Function Calling): A list of Python/JS functions the model is allowed to invoke (like 'search_docs(query)' or 'lookup_order(id)').\n3. The ReAct (Reason + Act) Loop: The agent thinks -> asks your server to run a tool -> reads the tool output -> and replies to the user.",
      whyItMatters: "Knowing this loop makes it easy to debug agents: if an agent gives a wrong answer, check whether its tool returned bad data or its prompt instructions were unclear.",
      codeExample: "# Simplified Agent Tool-Calling Loop:\nresponse = gemini.generate(prompt, tools=[search_database, draft_reply])\nif response.tool_call:\n    tool_output = run_tool(response.tool_call)\n    final_answer = gemini.generate(tool_output)"
    },
    "sys-mcp-tools": {
      id: "sys-mcp-tools",
      stageKey: "stage-sys-agent",
      label: "MCP (Model Context Protocol)",
      tag: "Tool standard",
      badgeClass: "badge-secondary",
      icon: "usb",
      headline: "MCP (Model Context Protocol): The universal 'USB-C plug' for connecting AI to tools",
      oneLiner: "An open standard that lets AI agents safely plug into Google Drive, GitHub, Slack, or databases without custom glue code.",
      whatItIs: "Previously, if you wanted your AI agent to read GitHub issues, search a database, or check Google Calendar, you had to write custom API code for every single service. MCP (Model Context Protocol) is a universal open standard—like a USB-C cable for AI—that lets any AI agent connect to pre-built tool servers with a standard format.",
      whyItMatters: "Lets you connect your AI app to external data sources using vetted open-source MCP connectors instead of writing custom integrations from scratch.",
      codeExample: "// Example MCP tool declaration exposed to an AI agent:\n{ name: \"search_tickets\", parameters: { status: \"open\", limit: 10 } }"
    },
    "sys-data-separation": {
      id: "sys-data-separation",
      stageKey: "stage-sys-storage",
      label: "Separate code vs. private data",
      tag: "Security rule",
      badgeClass: "badge-danger",
      icon: "folder_off",
      headline: "Never mix sensitive user data inside your code repository folder",
      oneLiner: "Keep your code in Git/GitHub, and keep real user spreadsheets, CSVs, and records in a separate access-controlled Database or Cloud Bucket.",
      whatItIs: "When prototyping quickly, it is tempting to drop a real CSV of customer emails or sensitive company notes right inside your project code folder so your Python script can read it. Danger: Anything inside your project folder can accidentally get committed to Git and pushed to GitHub—where anyone who can see your code repository can now download all your private data!",
      whyItMatters: "Always keep Code (in Git/GitHub) strictly separate from Sensitive Data (stored in an access-controlled Database like PostgreSQL/Supabase/Firestore or a private Cloud Storage bucket).",
      codeExample: "# GOOD: Code reads data from an access-controlled Database or Cloud Storage URL\ndf = read_from_secure_database(os.environ[\"DATABASE_URL\"])\n# BAD: Committing 'real_customers_private.csv' inside your Git repo!"
    },
    "sys-polling-webhooks": {
      id: "sys-polling-webhooks",
      stageKey: "stage-sys-storage",
      label: "Polling vs. Webhooks",
      tag: "Async timing",
      badgeClass: "badge-info",
      icon: "notifications_active",
      headline: "Handling slow tasks: Polling ('Are you done yet?') vs. Webhooks ('Text me when ready')",
      oneLiner: "How your app handles 30-second AI jobs or payment confirmations without freezing the user's screen.",
      whatItIs: "Normal web requests expect an answer in under 1 second. What if a job takes 30 seconds (like generating a video or waiting for a user to finish Stripe checkout)?\n• Polling: Your browser asks the server ''Are you done yet?'' on a timer every 2 seconds until the job finishes.\n• Webhooks: Instead of asking repeatedly, you give the outside service a callback URL, and it sends your server a single notification the exact moment the job is done.",
      whyItMatters: "Prevents browser timeout errors ('504 Gateway Timeout') and keeps your UI responsive during heavy AI tasks.",
      codeExample: "# Webhook endpoint: Stripe pings our server when payment succeeds\n@app.post(\"/api/webhooks/stripe\")\ndef on_payment_complete(event):\n    unlock_pro_account(event.user_id)"
    },
    "sys-human-in-loop": {
      id: "sys-human-in-loop",
      stageKey: "stage-sys-guardrail",
      label: "Human-in-the-loop ('Prepare -> Confirm')",
      tag: "Agent safety",
      badgeClass: "badge-warning",
      icon: "how_to_reg",
      headline: "Human-in-the-Loop ('Prepare -> Confirm'): Stage a preview card before mutating the real world",
      oneLiner: "Let AI read and draft automatically, but always require a human 'Approve' click before sending emails, deleting rows, or spending money.",
      whatItIs: "In agentic systems, engineers split tools into two buckets:\n1. Read-only tools (Safe to run automatically): Searching docs, reading emails, summarizing tables.\n2. Mutating / Write tools (Require confirmation): Sending an email to a client, moving/deleting database records, or charging a card.\nWith the Prepare -> Confirm pattern, the AI agent prepares a Draft Preview Card on screen first, and only executes the write action after the user clicks 'Approve & Send'.",
      whyItMatters: "A single prompt injection or AI hallucination can never send an embarrassing email or delete production data when a human confirmation gate sits in front of write actions.",
      codeExample: "# Step 1 (AI Agent): Stage a draft preview card (does NOT send yet!)\nstage_action_preview(type=\"send_email\", to=\"client@acme.com\", draft=body)\n# Step 2 (Human): Clicks 'Confirm & Send' button in the UI -> executes send"
    },
    "sys-observability": {
      id: "sys-observability",
      stageKey: "stage-sys-guardrail",
      label: "Logs, latency & cost tracking",
      tag: "Observability",
      badgeClass: "badge-success",
      icon: "monitoring",
      headline: "Production Observability: Logging errors, speed (latency), and AI token costs",
      oneLiner: "A simple dashboard or log trail showing how fast requests run, whether any errors happened, and how much AI calls cost.",
      whatItIs: "Once real users are on your deployed app, you can't see their screens when something goes wrong. 'Observability' simply means recording structured log lines on your server (what route was called, how many milliseconds it took, how many AI tokens it used, and any error code) so you can spot slowdowns or broken APIs immediately.",
      whyItMatters: "Helps you catch a broken integration or a slow prompt before users even have to report it.",
      codeExample: "logger.info(\"ai_triage_completed\", extra={\n    \"latency_ms\": 420,\n    \"model\": \"gemini-2.5-flash\",\n    \"status\": \"success\"\n})"
    }
  };

  function buildInteractiveLoopCard(container, config) {
    var art = window.DiagramIllustrations;
    if (!art) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge " + (config.badgeClass || "badge-info");
    badge.textContent = config.badgeText;
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = config.title;

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent = config.subtitle;

    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    titleGroup.appendChild(subP);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedId = config.defaultItemId;
    var allBtns = [];
    var stageCards = [];

    function syncActive() {
      var activeItem = config.itemsMap[selectedId];
      var activeStage = activeItem ? activeItem.stageKey : "";
      allBtns.forEach(function (b) {
        if (b.getAttribute("data-item-id") === selectedId) b.classList.add("active");
        else b.classList.remove("active");
      });
      stageCards.forEach(function (sc) {
        if (sc.getAttribute("data-stage-key") === activeStage) sc.classList.add("stage-active");
        else sc.classList.remove("stage-active");
      });
    }

    function selectItem(id, isUserClick) {
      var item = config.itemsMap[id];
      if (!item) return;
      selectedId = id;
      syncActive();
      if (window.PipelineAgent && typeof window.PipelineAgent.showInspector === "function") {
        window.PipelineAgent.showInspector(
          function (inspectorEl) {
            renderItemInspector(inspectorEl, item);
          },
          {
            autoOpen: Boolean(isUserClick),
            pulse: Boolean(isUserClick),
            itemTitle: item.label + " (" + item.tag + ")"
          }
        );
      }
    }

    function makePills(ids) {
      if (!ids || ids.length <= 1) return null;
      var cluster = document.createElement("div");
      cluster.className = "diagram-pill-cluster loop-stage-pills";
      ids.forEach(function (id) {
        var item = config.itemsMap[id];
        if (!item) return;
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "diagram-label-pill" + (id === selectedId ? " active" : "");
        btn.setAttribute("data-item-id", id);
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = item.icon;
        var lbl = document.createElement("span");
        lbl.textContent = item.label;
        btn.appendChild(ic);
        btn.appendChild(lbl);
        btn.addEventListener("click", function () {
          selectItem(id, true);
        });
        allBtns.push(btn);
        cluster.appendChild(btn);
      });
      return cluster;
    }

    var loopCanvas = document.createElement("div");
    loopCanvas.className = "loop-diagram-canvas";
    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    config.topStages.forEach(function (st, idx) {
      var stCard = art.createLoopStageCard({
        stageKey: st.stageKey,
        artSvg: st.artSvg,
        title: st.title,
        subtitle: st.subtitle,
        onStageClick: function () {
          selectItem(st.defaultId, true);
        },
        pillsContainer: makePills(st.pillIds)
      });
      stageCards.push(stCard.card);
      topRow.appendChild(stCard.card);

      if (idx < config.topStages.length - 1) {
        var arrowSpec = config.arrows[idx];
        var arrowCol = art.createHorizontalStepArrow(arrowSpec.topLabel, arrowSpec.bottomLabel);
        topRow.appendChild(arrowCol);
      }
    });

    loopCanvas.appendChild(topRow);

    var bottomRow = document.createElement("div");
    bottomRow.className = "loop-bottom-row";
    var leftWing = art.createCurvedReturnWing("left", config.returnLeftLabel);
    var rightWing = art.createCurvedReturnWing("right", config.returnRightLabel);

    var bStage = config.bottomStage;
    var stage4 = art.createLoopStageCard({
      stageKey: bStage.stageKey,
      isReturnHub: true,
      artSvg: bStage.artSvg,
      title: bStage.title,
      subtitle: bStage.subtitle,
      onStageClick: function () {
        selectItem(bStage.defaultId, true);
      },
      pillsContainer: makePills(bStage.pillIds)
    });
    stageCards.push(stage4.card);

    bottomRow.appendChild(leftWing);
    bottomRow.appendChild(stage4.card);
    bottomRow.appendChild(rightWing);
    loopCanvas.appendChild(bottomRow);
    card.appendChild(loopCanvas);

    syncActive();
    if (!config.skipInitialInspector) {
      selectItem(selectedId, false);
    }
    container.appendChild(card);
  }

  function renderRichOrPlain(el, text) {
    el.replaceChildren();
    var str = String(text || "");
    var parts = str.split(/(\*\*[^*]+\*\*|'[^']+`)/g);
    parts.forEach(function (part) {
      if (!part) return;
      if (part.slice(0, 2) === "" && part.slice(-2) === "") {
        var strong = document.createElement("strong");
        strong.textContent = part.slice(2, -2);
        el.appendChild(strong);
      } else if (part.charAt(0) === "'" && part.charAt(part.length - 1) === "'") {
        var code = document.createElement("code");
        code.className = "vocab-inline-example";
        code.textContent = part.slice(1, -1);
        el.appendChild(code);
      } else {
        el.appendChild(document.createTextNode(part));
      }
    });
  }

  function renderItemInspector(inspectorEl, item) {
    inspectorEl.replaceChildren();
    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + (item.badgeClass || "badge-info");
    badge.textContent = item.tag;
    var codePill = document.createElement("code");
    codePill.className = "vocab-cmd-pill";
    codePill.textContent = item.label;
    topRow.appendChild(badge);
    topRow.appendChild(codePill);

    var h4 = document.createElement("h4");
    renderRichOrPlain(h4, item.headline);

    var oneLinerBox = document.createElement("div");
    oneLinerBox.className = "nested-card";
    var oneLinerP = document.createElement("p");
    oneLinerP.className = "resource-desc";
    renderRichOrPlain(oneLinerP, item.oneLiner);
    oneLinerBox.appendChild(oneLinerP);

    var whatP = document.createElement("p");
    whatP.className = "resource-desc";
    renderRichOrPlain(whatP, item.whatItIs);

    var whyP = document.createElement("p");
    whyP.className = "resource-desc";
    renderRichOrPlain(whyP, "Why it matters: " + item.whyItMatters);

    var codeBox = document.createElement("div");
    codeBox.className = "vocab-example-box";
    codeBox.style.whiteSpace = "pre-wrap";
    codeBox.style.lineHeight = "1.45";
    codeBox.textContent = item.codeExample;

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(oneLinerBox);
    inspectorEl.appendChild(whatP);
    inspectorEl.appendChild(whyP);
    inspectorEl.appendChild(codeBox);
  }

  function renderPythonCodeDiagram(container) {
    var art = window.DiagramIllustrations;
    if (!art) return;
    buildInteractiveLoopCard(container, {
      badgeClass: "badge-info",
      badgeText: "Interactive Python & code literacy blueprint — click any block to inspect in the side panel",
      title: "How much Python you actually need in 2026: From variables & dicts to DataFrames, schemas & Evals",
      subtitle: "You don't need to memorize syntax textbooks—click any of the 6 core building blocks below to see how data flows through Python and how to read & test AI-written code.",
      defaultItemId: "py-dict-row",
      itemsMap: PYTHON_BLUEPRINT_ITEMS,
      topStages: [
        {
          stageKey: "stage-py-basics",
          artSvg: art.createPythonFuncArt(),
          title: "1. Variables & functions",
          subtitle: "Inputs, if/else & def recipes",
          defaultId: "py-vars-types",
          pillIds: ["py-vars-types", "py-control-flow", "py-functions"]
        },
        {
          stageKey: "stage-py-data",
          artSvg: art.createDictToTableArt(),
          title: "2. Dicts, lists & tables",
          subtitle: "1 Dict = 1 Row; List of Dicts = Table",
          defaultId: "py-dict-row",
          pillIds: ["py-dict-row", "py-list-collection", "py-pandas-df"]
        },
        {
          stageKey: "stage-py-contracts",
          artSvg: art.createSchemaStackTraceArt(),
          title: "3. Schemas & stack traces",
          subtitle: "Strict shapes & bottom-up debugging",
          defaultId: "py-pydantic-schema",
          pillIds: ["py-pydantic-schema", "py-protobuf-types", "py-stack-traces"]
        }
      ],
      arrows: [
        { topLabel: "Group into rows", bottomLabel: "Dicts & Lists", pillId: "py-pandas-df" },
        { topLabel: "Validate shape", bottomLabel: "Pydantic / Types", pillId: "py-pydantic-schema" }
      ],
      returnLeftLabel: "Safe to edit & refactor",
      returnRightLabel: "Run pytest & Evals",
      bottomStage: {
        stageKey: "stage-py-evals",
        artSvg: art.createTestEvalPassArt(),
        title: "4. Automated unit tests (pytest) & Golden AI Evals",
        subtitle: "Test 30–50 real examples (and check that 'Move to Doing' stays in Doing!) before shipping",
        defaultId: "py-unit-tests",
        pillIds: ["py-unit-tests", "py-golden-evals", "py-build-first"]
      }
    });
  }

  // Order on Step 6: (1) how a button click / backend route / agent loop fit together,
  // (2) API vs. MCP overview + options.afterHero walkthrough, (3) optional MCP deep dive.
  function renderSystemsAgentDiagram(container, options) {
    var art = window.DiagramIllustrations;
    if (art) buildSystemsLoopCard(container, art);
    if (typeof window.renderMcpAndEndpointsWorkshop === "function") {
      window.renderMcpAndEndpointsWorkshop(container, options || {});
    }
  }

  function buildSystemsLoopCard(container, art) {
    buildInteractiveLoopCard(container, {
      skipInitialInspector: true,
      badgeClass: "badge-success",
      badgeText: "Inside your app's backend — click any stage to inspect in the side panel",
      title: "How button clicks, backend Python routes, AI agent loops & human approval fit together",
      subtitle: "Start here: how a button click inside your app runs a backend Python function, how an AI agent loops through tools, where your data lives, and why risky actions pause for human approval. Below, see how APIs and MCP connect all of this to outside tools.",
      defaultItemId: "sys-human-in-loop",
      itemsMap: SYSTEMS_AGENT_ITEMS,
      topStages: [
        {
          stageKey: "stage-sys-request",
          artSvg: art.createUrlRouteClickArt(),
          title: "1. Button click -> Route",
          subtitle: "UI state vs. DB state",
          defaultId: "sys-url-to-func",
          pillIds: ["sys-url-to-func", "sys-ui-vs-db-state"]
        },
        {
          stageKey: "stage-sys-agent",
          artSvg: art.createAgentMcpLoopArt(),
          title: "2. AI agent loop",
          subtitle: "Think -> Tool -> Observe (max_steps)",
          defaultId: "sys-agent-loop",
          pillIds: ["sys-agent-loop"]
        },
        {
          stageKey: "stage-sys-storage",
          artSvg: art.createDbWebhookArt(),
          title: "3. Code vs. private data",
          subtitle: "Keep user rows out of Git!",
          defaultId: "sys-data-separation",
          pillIds: ["sys-data-separation"]
        }
      ],
      arrows: [
        { topLabel: "Calls route", bottomLabel: "GET / POST", pillId: "sys-url-to-func" },
        { topLabel: "Saves state", bottomLabel: "Cloud SQL DB", pillId: "sys-data-separation" }
      ],
      returnLeftLabel: "Human clicks Approve",
      returnRightLabel: "Stages preview card",
      bottomStage: {
        stageKey: "stage-sys-guardrail",
        artSvg: art.createHumanApprovalArt(),
        title: "4. Human-in-the-Loop ('Prepare -> Confirm') & observability",
        subtitle: "Stage a draft preview card for human approval before sending emails, deleting data, or charging money",
        defaultId: "sys-human-in-loop",
        pillIds: ["sys-human-in-loop", "sys-observability"]
      }
    });
  }

  window.renderPythonCodeDiagram = renderPythonCodeDiagram;
  window.renderSystemsAgentDiagram = renderSystemsAgentDiagram;
})();
