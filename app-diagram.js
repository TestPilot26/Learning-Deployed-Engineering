// Deployed Eng Pipeline — Stop 2 Interactive Illustrated Diagram of an App
// Renders an image-first visual cross-section of an App (Front End Half <-> Center Messenger Bridge <-> Back End Half,
// plus bidirectional bridges to the Database Vault and Outside AI/Payment Services).
// Users click any component or coding language pill button to explore details without initial text overload.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  var APP_DIAGRAM_ITEMS = {
    // --- FRONT END HALF ---
    "fe-overview": {
      id: "fe-overview",
      label: "Front end",
      tag: "App half",
      icon: "devices",
      badgeClass: "badge-info",
      headline: "Front end (What the user sees and clicks)",
      oneLiner: "Where buttons, text, colors, and menus live right inside the visitor's phone or laptop browser.",
      whatItIs: "When you open Instagram, Airbnb, or this website, everything you can see and tap on your screen is the Front End. Your web browser downloads the front-end code and draws the screen on your device. Because it runs on the visitor's own phone or computer, anyone can right-click and 'Inspect' it—so it is purely for visuals and user interaction, never for keeping secrets.",
      whenToUse: "Every app with a screen has a front end. For simple sites, plain HTML, CSS, and JavaScript are enough; for multi-screen apps, most engineers use React or Next.js.",
      codeExample: "<button class=\"save-btn\">Save my progress</button>",
      goodSetup: "Draws a fast, clean screen, shows a friendly loading spinner while waiting, and asks the Back End whenever it needs private data.",
      fragileSetup: "Hides secret AI billing passwords inside the browser code (where any visitor can steal them) or freezes the screen without telling the user why."
    },
    "fe-ui": {
      id: "fe-ui",
      label: "UI (User interface)",
      tag: "Visuals",
      icon: "dashboard_customize",
      badgeClass: "badge-info",
      headline: "UI — User interface (Buttons, forms, cards & layouts)",
      oneLiner: "The actual visual building blocks on the screen that a human touches, types into, or reads.",
      whatItIs: "'UI' stands for User Interface. It simply means the visible controls on the page: navigation bars, search boxes, clickable buttons, pop-up dialogs, and cards. Good UI makes it obvious what to click next without overwhelming your eyes.",
      whenToUse: "Whenever you design how a person interacts with your app. Using a design system (like Google Material 3 or Tailwind UI) keeps button sizes, colors, and spacing consistent.",
      codeExample: "Search bar + 'Clear (X)' button + clickable Stop cards",
      goodSetup: "Uses consistent spacing, clear labels, dark/light mode support, and visible error messages when something goes wrong.",
      fragileSetup: "Packs 20 tiny unlabelled buttons onto one screen or uses low-contrast text that is impossible to read on a phone."
    },
    "lang-html-css": {
      id: "lang-html-css",
      label: "HTML & CSS",
      tag: "Language",
      icon: "palette",
      badgeClass: "badge-info",
      headline: "HTML & CSS (The structure and paint of the screen)",
      oneLiner: "Talks to the user's web browser to place text and buttons on the page (HTML) and style their colors and layout (CSS).",
      whatItIs: "Think of building a house: HTML is the wooden frame that says 'put a heading here, a paragraph here, and a button here.' CSS is the paint and interior design that says 'make that button blue, round its corners, and stack the cards in two columns.'",
      whenToUse: "Used in 100% of websites. Pros: every browser on earth understands HTML & CSS automatically with zero installation. Tradeoff: they only draw visuals—they cannot calculate rules or talk to servers by themselves.",
      codeExample: "<h1>Deployed Eng Pipeline</h1>   /* CSS: color: var(--color-primary); */",
      goodSetup: "Uses clean semantic tags (<header>, <main>, <button>) and shared color variables so light and dark mode switch smoothly.",
      fragileSetup: "Hardcodes random hex colors (#ff0033) and pixel widths on every single line so the page breaks on mobile phones."
    },
    "lang-js-ts": {
      id: "lang-js-ts",
      label: "JavaScript / TypeScript",
      tag: "Language",
      icon: "bolt",
      badgeClass: "badge-info",
      headline: "JavaScript & TypeScript (Makes the screen come alive)",
      oneLiner: "Talks between the user's screen and the back end—listening for button clicks, sending messages, and updating the page live.",
      whatItIs: "If HTML is the skeleton and CSS is the paint, JavaScript (JS) is the muscles that make the webpage interactive. When you click a tab or type in a search bar and results filter instantly without reloading the page, that's JavaScript. TypeScript (TS) is simply JavaScript with a built-in spell-checker that warns you in your editor if you misspelled a variable before you even run the app.",
      whenToUse: "Pros: the only coding language that runs natively inside every web browser, and can also run on the back end (Node.js). Tradeoff: browser JS is visible to users, so secret keys must stay on the back end.",
      codeExample: "button.addEventListener('click', () => fetch('/api/save'));",
      goodSetup: "Uses TypeScript (or clean modular JS files) and checks for errors whenever it fetches data from the server.",
      fragileSetup: "Assumes the internet never hiccups—crashing the whole screen if one server message comes back empty."
    },
    "tool-react-next": {
      id: "tool-react-next",
      label: "React / Next.js",
      tag: "Framework",
      icon: "widgets",
      badgeClass: "badge-info",
      headline: "React & Next.js (Reusable LEGO bricks for screens)",
      oneLiner: "Lets you build one button or card once as a reusable 'Component' and stamp it out 50 times across your app.",
      whatItIs: "Instead of writing one giant 5,000-line HTML file, React lets you break your screen into small, self-contained LEGO bricks called Components (like `<StopCard />` or `<SearchBar />`). Next.js is a popular starter kit built around React (created by Vercel) that also includes a built-in Back End folder so your front end and back end live in one project.",
      whenToUse: "Pros: the most popular toolkit for AI coding tools (Cursor, Claude, v0) with massive community support. Tradeoff: adds extra folder structure compared to plain HTML/JS for tiny 1-page sites.",
      codeExample: "<StopCard title=\"Downloading the tools\" badge=\"Step 1\" />",
      goodSetup: "Splits screens into small, easy-to-read components under 300 lines each.",
      fragileSetup: "Dumps the entire app into one massive 2,500-line `page.tsx` file that confuses both humans and AI editors."
    },

    // --- CENTER FLOWING BRIDGE (FRONT END <-> BACK END) ---
    "bridge-api": {
      id: "bridge-api",
      label: "API (The waiter)",
      tag: "Messenger",
      icon: "room_service",
      badgeClass: "badge-secondary",
      headline: "API — Application Programming Interface (The waiter between front & back end)",
      oneLiner: "Talks back and forth between the Front End screen and the Back End kitchen—taking orders and bringing back answers.",
      whatItIs: "Imagine a restaurant: you sit at the table looking at the menu (the Front End), and the food is cooked in the private kitchen (the Back End). You aren't allowed to walk into the kitchen yourself. Instead, a Waiter (the API) takes your order ('Please save this note' or 'Show my profile'), walks into the kitchen, and brings the finished dish back to your table.",
      whenToUse: "Used whenever your screen needs to load data, save user work, or ask an AI model a question.",
      codeExample: "POST /api/ask-guide  -->  Waiter carries question to Back End  -->  200 OK",
      goodSetup: "Has clear, predictable menu items (routes like `GET /api/posts`) and politely tells the screen if an order is invalid.",
      fragileSetup: "Lets the front end ask for 50,000 database rows in a single trip, freezing the user's phone."
    },
    "lang-json": {
      id: "lang-json",
      label: "JSON (Data language)",
      tag: "Language",
      icon: "data_object",
      badgeClass: "badge-secondary",
      headline: "JSON (The universal text envelope for sending data)",
      oneLiner: "Talks between any two coding languages (like browser JavaScript and server Python) using simple `label: value` pairs.",
      whatItIs: "Your Front End might be written in JavaScript while your Back End is written in Python. How do they understand each other? They mail messages back and forth written in JSON—a super simple text format made of curly braces `{}` and `\"label\": \"value\"` pairs that every coding language on earth can read.",
      whenToUse: "Used in almost 100% of modern web APIs and AI model responses.",
      codeExample: "{ \"user\": \"Lucy\", \"step\": 2, \"completed\": true }",
      goodSetup: "Keeps message payloads small, clean, and predictable so both halves of the app know exactly what fields to expect.",
      fragileSetup: "Changes field names randomly (`userName` in one place, `user_id_name` in another) so the screen displays `undefined`."
    },
    "bridge-auth": {
      id: "bridge-auth",
      label: "Login pass (Auth)",
      tag: "Security",
      icon: "verified_user",
      badgeClass: "badge-success",
      headline: "Login & permissions (Authentication & digital passes)",
      oneLiner: "Travels with every message from the screen to the back end to prove who is logged in.",
      whatItIs: "Once you sign in (with Google, Clerk, or Supabase Auth), your browser receives a tamper-proof digital wristband (called a Cookie or Token). Every time the API waiter walks from your screen to the Back End kitchen, it shows that wristband so the Back End knows 'This request is coming from Lucy, so only show Lucy's private notes.'",
      whenToUse: "Any time your app has user accounts, private data, or paid features. Always use a trusted login service (Clerk, Supabase Auth, Firebase Auth) instead of inventing password encryption from scratch.",
      codeExample: "Authorization: Bearer <encrypted-login-pass>",
      goodSetup: "The Back End checks the digital wristband on every single request before reading or editing private records.",
      fragileSetup: "Only hides the 'Admin Delete' button visually on the Front End while leaving the Back End delete URL wide open to strangers."
    },

    // --- BACK END HALF ---
    "be-overview": {
      id: "be-overview",
      label: "Back end",
      tag: "App half",
      icon: "dns",
      badgeClass: "badge-secondary",
      headline: "Back end (The hidden engine & private kitchen)",
      oneLiner: "Where your app thinks out of sight on a secure cloud server—checking rules, guarding secret keys, and coordinating data.",
      whatItIs: "The Back End is the half of your app that visitors never see directly. It runs on a secure computer in the cloud (like Vercel Functions, Google Cloud Run, or Render). Because users cannot right-click and inspect your Back End server, this is where you enforce security rules, calculate answers, talk to your database, and use secret AI billing keys.",
      whenToUse: "Whenever your app needs to save data across devices, protect secret API keys, charge credit cards, or run Python/AI logic.",
      codeExample: "Server receives order -> checks Login Pass -> calls Gemini API -> saves to DB",
      goodSetup: "Double-checks every incoming message from the front end, keeps secret keys in environment variables, and logs clear errors.",
      fragileSetup: "Trusts whatever the browser sends without checking permissions, or crashes silently when an outside service is slow."
    },
    "lang-python": {
      id: "lang-python",
      label: "Python",
      tag: "Language",
      icon: "psychology",
      badgeClass: "badge-secondary",
      headline: "Python (The #1 language for AI, data, and readable back ends)",
      oneLiner: "Talks between your Back End server, AI models, and data libraries to run smart logic and calculations.",
      whatItIs: "Python is famous for reading almost like plain English (using clean indentation instead of lots of brackets). It is the native language of AI, machine learning, and data science—almost every major AI tool (PyTorch, Gemini SDKs, LangChain, Pandas, FastAPI) is built for Python first.",
      whenToUse: "Pros: easiest language to read and the undisputed king of AI and data processing. Tradeoff: cannot run inside a web browser button (you still use HTML/CSS/JS on the Front End).",
      codeExample: "response = client.models.generate_content(model='gemini-2.5-flash', contents=prompt)",
      goodSetup: "Uses a clean web framework like FastAPI to receive JSON from the front end, run AI/data work in Python, and return the answer.",
      fragileSetup: "Runs a 60-second data script directly inside a web request without a background queue, causing the connection to time out."
    },
    "lang-nodejs": {
      id: "lang-nodejs",
      label: "Node.js",
      tag: "Runtime",
      icon: "terminal",
      badgeClass: "badge-secondary",
      headline: "Node.js (Running JavaScript / TypeScript on the back end)",
      oneLiner: "Lets you use the exact same language (JavaScript / TypeScript) on your Back End server that you already use on your Front End.",
      whatItIs: "Originally, JavaScript could only run inside a web browser. Node.js unlocked JavaScript so it can also run on your laptop and on cloud servers. That means a solo builder can write both halves of their app (Front End and Back End) in one single language: TypeScript/JavaScript.",
      whenToUse: "Pros: one language for the whole app, and super fast at handling lots of simultaneous chat/web connections. Tradeoff: has fewer scientific/math libraries than Python.",
      codeExample: "export async function POST(req) { const body = await req.json(); ... }",
      goodSetup: "Shares TypeScript data definitions between the Front End and Back End so both halves always agree.",
      fragileSetup: "Installs 150 heavy, unmaintained npm packages when a built-in browser or Node feature would do the job."
    },
    "lang-go-rust": {
      id: "lang-go-rust",
      label: "Go / Rust",
      tag: "Language",
      icon: "speed",
      badgeClass: "badge-secondary",
      headline: "Go & Rust (High-speed engine languages for massive scale)",
      oneLiner: "Talks between high-speed cloud servers when thousands of users hit your system at the exact same millisecond.",
      whatItIs: "Go (created at Google) and Rust are compiled languages—meaning your computer translates them directly into ultra-fast machine code before they run. Cloud infrastructure tools (like Docker, Kubernetes, and fast CLI tools) are built in Go and Rust.",
      whenToUse: "Pros: blazing fast and rock-solid under heavy traffic. Tradeoff: takes more setup than Python or TypeScript when you are building your very first prototype.",
      codeExample: "go func() { processBackgroundJob(job) }()   // Lightweight concurrent worker",
      goodSetup: "Used for high-throughput backend services and fast command-line tools once your product's core idea is proven.",
      fragileSetup: "Spending 3 weeks fighting low-level memory rules for a simple prototype before testing if users even want the app."
    },
    "be-cache-queue": {
      id: "be-cache-queue",
      label: "Cache & waiting line",
      tag: "Speed",
      icon: "hourglass_top",
      badgeClass: "badge-secondary",
      headline: "Cache (Fast memory) & Queue (Background waiting line)",
      oneLiner: "Keeps frequent answers ready on the counter in 1 millisecond (Cache) and lines up slow 20-second AI jobs in the background (Queue).",
      whatItIs: "• A Cache (like Redis) is like keeping your most popular coffee order right on the counter so the server doesn't have to walk into the database vault every single time.\n• A Queue is a numbered ticket line for slow jobs (like generating a long AI report or sending 500 emails) so the user's screen gets an instant 'Working on it!' reply instead of freezing.",
      whenToUse: "Add a Cache when thousands of people view the same data; add a Queue whenever a task takes longer than 2–3 seconds.",
      codeExample: "Queue.add('generate-ai-report', { userId: 42 }) -> returns Ticket #108 immediately",
      goodSetup: "Acknowledges slow jobs right away and updates the screen smoothly when the background worker finishes.",
      fragileSetup: "Leaves the user staring at a frozen button for 40 seconds until the browser gives up and shows a network error."
    },

    // --- BOTTOM-LEFT BRIDGE + DATABASE VAULT ---
    "lang-sql": {
      id: "lang-sql",
      label: "SQL (Database language)",
      tag: "Language",
      icon: "table_chart",
      badgeClass: "badge-info",
      headline: "SQL — Structured Query Language (How the back end talks to the database)",
      oneLiner: "Talks back and forth between the Back End engine and the Database vault to save, search, and update rows.",
      whatItIs: "SQL (pronounced 'sequel' or 'S-Q-L') is the universal language for asking questions of a database. It reads almost like an English sentence: `SELECT name, email FROM users WHERE active = true`. Even when you use modern helper tools (like Supabase, Prisma, or Drizzle), they translate your requests into SQL under the hood.",
      whenToUse: "Pros: used by almost every major database for 50 years (PostgreSQL, SQLite, MySQL, Snowflake); prevents data from getting scrambled. Tradeoff: only for talking to databases, not for drawing screens.",
      codeExample: "SELECT title, step_number FROM pipeline_stops ORDER BY step_number ASC;",
      goodSetup: "Uses parameterized queries (`WHERE id = $1`) so user input can never trick the database.",
      fragileSetup: "Glues raw user text directly into a SQL string ('SQL Injection'), allowing a clever visitor to wipe the table."
    },
    "db-overview": {
      id: "db-overview",
      label: "Database & tables",
      tag: "Storage",
      icon: "database",
      badgeClass: "badge-info",
      headline: "Database (The permanent filing cabinet of your app)",
      oneLiner: "Where user accounts, posts, and saved work live permanently in organized tables so nothing vanishes when you close the tab.",
      whatItIs: "Variables inside your Front End or Back End memory disappear the moment you refresh the page or restart the server. A Database is a specialized vault that writes your data safely to disk, organizes it into linked spreadsheet-like tables (Rows and Columns), and makes sure two people clicking 'Buy' at the exact same instant don't overwrite each other.",
      whenToUse: "Needed as soon as you want data to survive a page refresh or be shared across different users and devices.",
      codeExample: "Table `users`: [ id: 1 | handle: 'TestPilot26' | role: 'builder' ]",
      goodSetup: "Keeps data in clean tables with automatic daily backups and an index on columns you search often.",
      fragileSetup: "Saves user work into a local `.json` file on a temporary cloud server that gets erased on every redeploy."
    },
    "tool-postgres": {
      id: "tool-postgres",
      label: "PostgreSQL / Supabase",
      tag: "Tool",
      icon: "storage",
      badgeClass: "badge-info",
      headline: "PostgreSQL & Supabase / Neon (Cloud databases made easy)",
      oneLiner: "Gives you a rock-solid SQL database in the cloud with a visual spreadsheet dashboard you can inspect in your browser.",
      whatItIs: "PostgreSQL ('Postgres') is the gold-standard open-source SQL database used by startups and tech giants alike. Services like Supabase and Neon host Postgres for you in the cloud with a free tier, a visual table editor (so you can see your rows like Google Sheets), and built-in user login.",
      whenToUse: "The best default database choice when graduating from a local prototype to a real deployed app.",
      codeExample: "DATABASE_URL=\"postgresql://project.supabase.co:5432/postgres\"",
      goodSetup: "Enables Row-Level Security (RLS) or strict Back End checks so users can only read their own rows.",
      fragileSetup: "Leaves database tables publicly readable to anyone on the internet without permission rules."
    },

    // --- BOTTOM-RIGHT BRIDGE + OUTSIDE SUPERPOWERS VAULT ---
    "bridge-env-keys": {
      id: "bridge-env-keys",
      label: "Secret keys (.env)",
      tag: "Security",
      icon: "key",
      badgeClass: "badge-success",
      headline: "Secret API keys & Environment Variables (.env)",
      oneLiner: "How your Back End proves its identity to paid services (like Gemini, OpenAI, or Stripe) without exposing passwords in your code.",
      whatItIs: "When your Back End calls Gemini or Stripe, it attaches a secret password called an API Key so they know whose account to bill. You store these keys in a private `.env` file on your laptop (hidden from GitHub via `.gitignore`) and paste them into Vercel's encrypted 'Environment Variables' settings box for your live site.",
      whenToUse: "Every single time you connect to an outside service, database, or AI model.",
      codeExample: "const apiKey = process.env.GEMINI_API_KEY;   // Read safely on the Back End",
      goodSetup: "Keeps keys strictly on the Back End and sets a monthly dollar spending cap in the AI provider's billing dashboard.",
      fragileSetup: "Pastes `AIzaSy...` or `sk-...` directly into a Front End file and pushes it to a public GitHub repo."
    },
    "bridge-webhooks": {
      id: "bridge-webhooks",
      label: "Webhooks (Callbacks)",
      tag: "Messenger",
      icon: "webhook",
      badgeClass: "badge-success",
      headline: "Webhooks (How outside services call your back end back)",
      oneLiner: "When a user finishes paying on Stripe or a GitHub push completes, a Webhook sends an automatic tap-on-the-shoulder message to your server.",
      whatItIs: "Normally, your Back End calls an outside service first. A Webhook is the reverse: you give Stripe or GitHub a special URL on your Back End, and whenever an event happens ('Customer just paid $10!' or 'New code pushed to main!'), their server automatically messages your server to let it know.",
      whenToUse: "Used for Stripe payment confirmations, GitHub-to-Vercel auto-deployments, and Slack/Chat bots.",
      codeExample: "Stripe Event ('checkout.completed')  -->  POST https://your-app.com/api/webhook",
      goodSetup: "Verifies the webhook's cryptographic signature and checks the event ID so duplicate deliveries aren't processed twice.",
      fragileSetup: " blindly trusts any message sent to `/api/webhook` without checking that it genuinely came from Stripe."
    },
    "ext-ai-stripe": {
      id: "ext-ai-stripe",
      label: "Outside AI & payments",
      tag: "Services",
      icon: "hub",
      badgeClass: "badge-success",
      headline: "Outside services (Gemini / Claude AI brains, Stripe payments, Email)",
      oneLiner: "Where your Back End rents world-class capabilities over the internet instead of building them from scratch.",
      whatItIs: "Even senior engineers don't train their own frontier LLM from scratch or build their own credit-card vault for a new app. Instead, your Back End sends a secure HTTPS message to outside APIs—like Google Gemini or Anthropic Claude for intelligence, Stripe for payments, or Resend for emailing receipts.",
      whenToUse: "Whenever a specialized company already solves a hard problem (AI, payments, SMS, maps) better and safer than custom code.",
      codeExample: "Back End  <-- HTTPS + Secret Key -->  Gemini API / Stripe API",
      goodSetup: "Sets a timeout and a polite fallback message in case the outside service is having a slow day.",
      fragileSetup: "Has zero error handling—so if an outside API hiccups for 2 seconds, the whole app crashes."
    },
    "lang-bash": {
      id: "lang-bash",
      label: "Bash / Terminal",
      tag: "Language",
      icon: "terminal",
      badgeClass: "badge-neutral",
      headline: "Bash / Shell commands (How you talk directly to your computer & cloud servers)",
      oneLiner: "Talks between you (or your AI coding agent) and the operating system to install tools, start servers, and push code.",
      whatItIs: "Bash (or Zsh on Mac) is the command-line language you type inside your Terminal window. Commands like `cd`, `ls`, `git push`, and `npm run dev` are all shell commands. Watching the terminal commands an AI agent runs is the fastest way to know what it is actually doing on your machine.",
      whenToUse: "Pros: works identically on your laptop and on Linux cloud servers. Tradeoff: great for short commands and setup scripts; for complex app logic, use Python or TypeScript.",
      codeExample: "git status && npm run dev",
      goodSetup: "Checks `pwd` and `git status` before running destructive commands or deploying.",
      fragileSetup: "Blindly approves an AI agent running `rm -rf` or `git push --force` without reading the command first."
    }
  };

  function createPillBtn(itemId, selectedId, onSelect, allBtns) {
    var item = APP_DIAGRAM_ITEMS[itemId];
    if (!item) return document.createElement("span");

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "diagram-label-pill" + (item.id === selectedId ? " active" : "");
    btn.setAttribute("data-app-item-id", item.id);

    var ic = document.createElement("span");
    ic.className = "material-symbols-outlined diagram-pill-icon";
    ic.textContent = item.icon;

    var lbl = document.createElement("span");
    lbl.textContent = item.label;

    btn.appendChild(ic);
    btn.appendChild(lbl);

    btn.addEventListener("click", function () {
      onSelect(item);
    });
    allBtns.push(btn);
    return btn;
  }

  function getAppStageForItem(itemId) {
    if (
      itemId === "fe-overview" ||
      itemId === "fe-ui" ||
      itemId === "lang-html-css" ||
      itemId === "lang-js-ts" ||
      itemId === "tool-react-next"
    ) {
      return "stage-fe";
    }
    if (
      itemId === "be-overview" ||
      itemId === "lang-python" ||
      itemId === "lang-nodejs" ||
      itemId === "lang-go-rust" ||
      itemId === "be-cache-queue" ||
      itemId === "bridge-api" ||
      itemId === "lang-json" ||
      itemId === "bridge-auth"
    ) {
      return "stage-be";
    }
    if (itemId === "db-overview" || itemId === "tool-postgres" || itemId === "lang-sql") {
      return "stage-db";
    }
    return "stage-user";
  }

  function renderAppInfraDiagram(container) {
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
    badge.className = "badge badge-info";
    badge.textContent = "Interactive diagram of an app — click any stage or coding language pill to open its guide in the side panel";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Inside a modern app: how the screen, cloud server, database, and user connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedId = "fe-overview";
    var showFragileMode = false;
    var allPillBtns = [];
    var stageCards = [];

    function syncActiveStates() {
      var activeStageKey = getAppStageForItem(selectedId);
      allPillBtns.forEach(function (b) {
        if (b.getAttribute("data-app-item-id") === selectedId) b.classList.add("active");
        else b.classList.remove("active");
      });
      stageCards.forEach(function (sc) {
        if (sc.getAttribute("data-stage-key") === activeStageKey) sc.classList.add("stage-active");
        else sc.classList.remove("stage-active");
      });
    }

    function selectItem(item) {
      if (!item) return;
      selectedId = item.id;
      syncActiveStates();
      updateAppInspector(true);
    }

    function buildCluster(ids) {
      var cluster = document.createElement("div");
      cluster.className = "diagram-pill-cluster loop-stage-pills";
      ids.forEach(function (id) {
        cluster.appendChild(createPillBtn(id, selectedId, selectItem, allPillBtns));
      });
      return cluster;
    }

    var loopCanvas = document.createElement("div");
    loopCanvas.className = "loop-diagram-canvas";

    // =========================================================================
    // TOP ROW: [1. App or website] --Request--> [2. Cloud server] --Gets data--> [3. Database]
    // =========================================================================
    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    // STAGE 1: App or Website (Front End)
    var stage1 = art.createLoopStageCard({
      stageKey: "stage-fe",
      artSvg: art.createDeviceArt(),
      title: "1. App or website",
      subtitle: "Front end · What users see",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["fe-overview"]);
      },
      pillsContainer: buildCluster([
        "fe-overview",
        "fe-ui",
        "lang-html-css",
        "lang-js-ts",
        "tool-react-next"
      ])
    });
    stageCards.push(stage1.card);
    topRow.appendChild(stage1.card);

    // ARROW 1: Request (API, JSON & Login Pass)
    topRow.appendChild(
      art.createHorizontalStepArrow(
        "Request",
        "API & JSON",
        buildCluster(["bridge-api", "lang-json", "bridge-auth"])
      )
    );

    // STAGE 2: Cloud Server (Back End)
    var stage2 = art.createLoopStageCard({
      stageKey: "stage-be",
      artSvg: art.createCloudServerArt("Cloud Server"),
      title: "2. Cloud server",
      subtitle: "Back end · Processes request",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["be-overview"]);
      },
      pillsContainer: buildCluster([
        "be-overview",
        "lang-python",
        "lang-nodejs",
        "lang-go-rust",
        "be-cache-queue"
      ])
    });
    stageCards.push(stage2.card);
    topRow.appendChild(stage2.card);

    // ARROW 2: Gets Data (SQL)
    topRow.appendChild(
      art.createHorizontalStepArrow(
        "Gets data",
        "SQL queries",
        buildCluster(["lang-sql"])
      )
    );

    // STAGE 3: Database
    var stage3 = art.createLoopStageCard({
      stageKey: "stage-db",
      artSvg: art.createDatabaseArt("011010"),
      title: "3. Database",
      subtitle: "Permanent tables & storage",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["db-overview"]);
      },
      pillsContainer: buildCluster(["db-overview", "tool-postgres"])
    });
    stageCards.push(stage3.card);
    topRow.appendChild(stage3.card);

    loopCanvas.appendChild(topRow);

    // =========================================================================
    // BOTTOM ROW: [Left Curved Return] <---> [4. User & outside services] <--- [Right Curved Return]
    // =========================================================================
    var bottomRow = document.createElement("div");
    bottomRow.className = "loop-bottom-row";

    bottomRow.appendChild(art.createCurvedReturnWing("left", "Sends results"));

    var stage4 = art.createLoopStageCard({
      stageKey: "stage-user",
      artSvg: art.createUserArt(),
      title: "4. User & outside services",
      subtitle: "AI APIs, Stripe, .env & CLI",
      onStageClick: function () {
        selectItem(APP_DIAGRAM_ITEMS["ext-ai-stripe"]);
      },
      pillsContainer: buildCluster([
        "ext-ai-stripe",
        "bridge-env-keys",
        "bridge-webhooks",
        "lang-bash"
      ])
    });
    stageCards.push(stage4.card);
    bottomRow.appendChild(stage4.card);

    bottomRow.appendChild(art.createCurvedReturnWing("right", "Returns data"));

    loopCanvas.appendChild(bottomRow);
    card.appendChild(loopCanvas);
    syncActiveStates();


    function updateAppInspector(isUserClick) {
      var item = APP_DIAGRAM_ITEMS[selectedId] || APP_DIAGRAM_ITEMS["fe-overview"];
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;

      window.PipelineAgent.showInspector(
        function (inspectorEl) {
          var badgeWrap = document.createElement("div");
          badgeWrap.className = "badge-row";
          var b1 = document.createElement("span");
          b1.className = "badge " + item.badgeClass;
          b1.textContent = item.tag;
          var b2 = document.createElement("span");
          b2.className = "badge badge-neutral";
          b2.textContent = item.oneLiner;
          badgeWrap.appendChild(b1);
          badgeWrap.appendChild(b2);
          inspectorEl.appendChild(badgeWrap);

          var h4 = document.createElement("h4");
          h4.textContent = item.headline;
          inspectorEl.appendChild(h4);

          var pWhat = document.createElement("p");
          pWhat.className = "resource-desc";
          pWhat.textContent = item.whatItIs;
          inspectorEl.appendChild(pWhat);

          var pWhen = document.createElement("p");
          pWhen.className = "resource-desc";
          pWhen.textContent = "When & why to use it: " + item.whenToUse;
          inspectorEl.appendChild(pWhen);

          var codeBox = document.createElement("div");
          codeBox.className = "vocab-example-box";
          codeBox.textContent = item.codeExample;
          inspectorEl.appendChild(codeBox);

          var archBox = document.createElement("div");
          archBox.className = "arch-mode-banner " + (showFragileMode ? "bad-mode" : "good-mode");
          var archIcon = document.createElement("span");
          archIcon.className = "material-symbols-outlined safety-icon";
          archIcon.textContent = showFragileMode ? "error" : "check_circle";
          var archText = document.createElement("span");
          archText.textContent = showFragileMode
            ? "Fragile vibe-coded setup: " + item.fragileSetup
            : "Healthy deployed setup: " + item.goodSetup;
          archBox.appendChild(archIcon);
          archBox.appendChild(archText);
          inspectorEl.appendChild(archBox);

          var modeBtn = document.createElement("button");
          modeBtn.type = "button";
          modeBtn.className = "nav-btn" + (showFragileMode ? "" : " active");
          var mIcon = document.createElement("span");
          mIcon.className = "material-symbols-outlined btn-icon-sm";
          mIcon.textContent = showFragileMode ? "warning" : "verified";
          var mLabel = document.createElement("span");
          mLabel.textContent = showFragileMode
            ? "Switch to healthy deployed setup"
            : "Compare fragile vibe-coded setup";
          modeBtn.appendChild(mIcon);
          modeBtn.appendChild(mLabel);
          modeBtn.addEventListener("click", function () {
            showFragileMode = !showFragileMode;
            updateAppInspector(false);
          });
          inspectorEl.appendChild(modeBtn);
        },
        {
          autoOpen: Boolean(isUserClick),
          pulse: Boolean(isUserClick),
          itemTitle: item.label
        }
      );
    }

    updateAppInspector(false);
    container.appendChild(card);
  }

  window.renderAppInfraDiagram = renderAppInfraDiagram;
})();
