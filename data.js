// Structured pipeline stops and archive data for Deployed Eng Pipeline
// Stop order:
// 1. Downloading the tools
// 2. Basic terminology, coding languages & app infrastructure
// 3. Version control, Git & shipping to Vercel
// 4. Command line interface & the terminal
// 5. Reading code & long-term stability
// 6. System dynamics & how pieces fit together
// 7. System architecture & stress-tested blueprints

window.PIPELINE_DATA = {
  substackUrl: "https://lulucalcott.substack.com/",
  stops: [
    {
      id: "downloading-the-tools",
      title: "Downloading the tools",
      stage: "Step 1 · Foundations",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "home_repair_service",
      diagramType: "tools-flow",
      teaser: "What a code file actually is, why you don't use Word or Google Docs to write code, and how your laptop connects to GitHub and Vercel.",
      explainer: "When you start from zero, the hardest part isn't complex math—it's figuring out what all the new apps and windows on your laptop actually do. Here is the secret: code is just plain text files sitting in a normal folder on your computer. Once you see what each tool does—your code editor (where you read and edit those text files), Homebrew (which installs coding engines on your laptop), Git (your local save history), GitHub (your cloud backup), and Vercel (which turns your folder into a live website)—the mystery disappears.",
      experiences: [
        {
          lead: "Plain text files vs. Word or Google Docs:",
          body: "A .js, .py, or .html file is just a plain text file with zero hidden formatting. Opening code in Word or Google Docs injects curly quotes and invisible styles that confuse the computer—a code editor like VS Code or Cursor is simply a plain-text workshop with color-coding and a built-in terminal."
        },
        {
          lead: "Why engineers use Homebrew instead of random installer downloads:",
          body: "Hunting around websites for random installers often scatters tools into folders your terminal cannot find ('command not found'). A tool installer like Homebrew ('brew install node git') puts developer tools in one standard place and keeps them updated."
        },
        {
          lead: "What 'saving to Vercel' physically means:",
          body: "Pressing Cmd+S only saves the file on your laptop's hard drive. 'Pushing' to GitHub uploads your folder to a cloud backup. Vercel watches your GitHub folder, automatically builds your latest code whenever you push, and publishes it to a live public https:// link."
        }
      ],
      activity: {
        title: "Fun activity: Trace a file from laptop to live URL",
        steps: [
          "Click through each stage in the interactive diagram above to trace how a plain text file travels from your laptop to a live Vercel website.",
          "Open VS Code or Cursor, create a file named index.html, and find it in Mac Finder or Windows Explorer to see that it is just a normal file in a normal folder.",
          "Open your editor's built-in terminal (Ctrl+` or Cmd+`) and run git --version and node -v to check that Git and Node.js are installed on your laptop."
        ]
      },
      resources: [
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50x: Lecture 0 & Visual Studio Code setup",
          description: "David Malan's zero-assumed-knowledge introduction to how computers interpret text, files, binaries, and code editors.",
          url: "https://cs50.harvard.edu/x/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Homebrew: The missing package manager for macOS & Linux",
          description: "Install Node.js, Python, Git, and command-line tools with a single terminal command instead of hunting for installers.",
          url: "https://brew.sh/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "VS Code & Cursor: What is a code editor / IDE?",
          description: "Visual guide to the file explorer, plain-text editor tabs, integrated terminal, and extensions.",
          url: "https://code.visualstudio.com/docs/getstarted/userinterface"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "How Vercel deploys from GitHub automatically",
          description: "Step-by-step walkthrough of what happens when Vercel detects a new commit on your GitHub repository.",
          url: "https://vercel.com/docs/deployments/git"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "MIT Missing Semester: Course overview & the shell",
          description: "Why mastering your local developer environment, shell, and package tools saves hundreds of hours.",
          url: "https://missing.csail.mit.edu/2020/course-shell/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Plain text vs. rich text: Why code needs straight quotes",
          description: "Understanding plain text files, file extensions (.js, .py, .json, .md, .env), and hidden dotfiles.",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
        }
      ]
    },
    {
      id: "basic-terminology",
      title: "Basic terminology, languages & diagram of an app",
      stage: "Step 2 · Vocabulary & Stack",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "menu_book",
      diagramType: "app-infrastructure",
      teaser: "An interactive map of the parts of an app (Front End, Back End, API, Database), why different coding languages exist, and what makes an app solid vs. fragile.",
      explainer: "When you build with AI, knowing the names for the parts of an app completely changes how you ask for help. If a button isn't saving your work and you don't know the terminology, you can only describe what looks wrong on the screen ('the save button is broken!') and hope the AI guesses right. Once you know the basic map of an app—what lives on the user's screen (Front End), what runs behind the scenes (Back End), the messenger between them (API), and the permanent filing cabinet (Database)—you can point your AI straight to the exact piece you want to build or fix.",
      experiences: [
        {
          lead: "Why one app uses several different coding languages:",
          body: "Each part of an app speaks its own native language: web browsers only understand HTML, CSS, and JavaScript to draw the screen; Back End servers often use Python (great for AI and data) or Node.js (JavaScript for servers); and Databases use SQL to organize tables of information."
        },
        {
          lead: "Describing what looks wrong vs. pointing to the right part:",
          body: "Instead of telling AI 'it forgot what I typed when I refreshed the page,' you can say: 'Right now this is only saved on the Front End screen—let's send it through the API and save it in the Database so it stays there when I refresh.'"
        },
        {
          lead: "Why a working demo can still be fragile:",
          body: "An AI can quickly build a prototype that works on your laptop by putting everything—including secret AI billing passwords—directly inside the Front End browser code. Learning the boundary between the public Front End and the private Back End keeps your app and your wallet safe when you share it online."
        }
      ],
      activity: {
        title: "Fun activity: Explore the interactive app & language map",
        steps: [
          "Click through each stage and language pill in the Interactive App Diagram above to see what lives on the Front End, API Bridge, Back End, and Database.",
          "Toggle the diagram between 'Healthy app setup' and 'Fragile setup (what breaks)' to spot the 4 classic beginner traps.",
          "Right-click any website in Chrome, click 'Inspect -> Network', click a button on the page, and watch the browser send a live message to the server."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-info",
          title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
          description: "How much Python you actually need in the AI era—why 'building first' and learning to read, debug, and structure code beats memorizing syntax textbooks.",
          url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "Hello Interview: System design & app architecture w/ Meta Staff Engineer",
          description: "Clear visual framework for how frontend clients, APIs, databases, caches, and scaling pieces fit together.",
          url: "https://www.youtube.com/watch?v=Ru54dxzCyD0"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50 Web Programming with Python and JavaScript",
          description: "Shows how HTML/CSS, JavaScript, Python backends, and SQL databases connect into a single full-stack application.",
          url: "https://cs50.harvard.edu/web/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Why Johnny Can't Prompt (UC Berkeley, ACM CHI)",
          description: "Research paper showing why learning basic software vocabulary helps you prompt AI much more effectively.",
          url: "https://dl.acm.org/doi/10.1145/3544548.3581388"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "MDN: How the Web works (Clients, Servers, HTTP & DNS)",
          description: "Beginner-friendly breakdown of what happens in the 200 milliseconds after you click a button or type a URL.",
          url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"
        }
      ]
    },
    {
      id: "git-and-shipping",
      title: "Version control, Git & shipping to Vercel",
      stage: "Step 3 · Safety Net",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "commit",
      diagramType: "git-living",
      teaser: "How to save checkpoints (commits), test risky AI changes on a separate scratchpad (branches), check what changed (diffs), and publish to a live link.",
      explainer: "Everyone who builds with AI hits this moment early on: your app is working nicely, you ask the AI for 'one more small change,' it edits ten files at once, and suddenly the whole screen is broken—and normal Undo (Cmd+Z) can't fix it. That is why we learn Git right away. Git is a time machine for your project folder: it lets you save named checkpoints (commits) whenever your app works, test big ideas on a safe side-track (a branch) without touching your working version, review the exact lines that changed (diff), and push your finished work to GitHub and Vercel.",
      experiences: [
        {
          lead: "Why are there so many steps? (Save vs. Commit vs. Push vs. PR vs. Squash & Merge):",
          body: "Each step has a distinct job: Cmd+S saves to your laptop scratchpad; 'git commit' seals a local checkpoint; 'git push' uploads your branch to GitHub; a 'Pull Request (PR)' opens a review page with a preview link; and 'Squash & Merge' neatly combines your 5 messy 'WIP / fix typo' checkpoints into one clean update on main."
        },
        {
          lead: "Branching vs. Cloning vs. Copying a folder:",
          body: "Never duplicate folders on your desktop like 'project-v2-final-FINAL'. A Git branch lets you try a big AI experiment in a safe parallel timeline—and either merge it back in if it works, or throw it away in one second if it breaks."
        },
        {
          lead: "What 'HEAD' means in Git (and why you always check git diff):",
          body: "In Git, 'HEAD' (in all-caps) simply means 'You Are Here'—the exact commit snapshot your folder is currently standing on. Running 'git diff' compares your current unsaved edits against HEAD so you can spot accidental deletions or stray passwords before committing."
        }
      ],
      activity: {
        title: "Fun activity: Drive the living Git timeline",
        steps: [
          "Click each step on the Living Git & Deployment Diagram above (Clone/Init, Branch, Commit, git diff, Pull Request, Merge, and Vercel Live) to see how code moves safely to a live link.",
          "Make a clean git commit in your project folder, ask an AI agent to tweak a file, and run git diff to see the exact red and green lines it changed.",
          "Create a branch with git checkout -b test-experiment, make an edit, and switch back to main with git checkout main to watch your files instantly return to normal."
        ]
      },
      resources: [
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Learn Git Branching (Interactive visual sandbox)",
          description: "The best hands-on browser game for seeing commits, branches, checkouts, and merges animate step by step.",
          url: "https://learngitbranching.js.org/"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "MIT Missing Semester: Version Control (Git)",
          description: "Explains Git from the ground up as a graph of snapshots so commands stop feeling like magic spells.",
          url: "https://missing.csail.mit.edu/2020/version-control/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "GitHub Docs: About branches, Pull Requests, and clones",
          description: "Official visual guide to how branches isolate work and how Pull Requests let you review diffs before merging.",
          url: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "GitClear AI code quality & churn report",
          description: "Industry study showing why frequent commits, branches, and code reviews matter when coding with AI.",
          url: "https://www.gitclear.com/"
        }
      ]
    },
    {
      id: "cli-and-terminal",
      title: "Command line interface & the terminal",
      stage: "Step 4 · Efficiency",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "terminal",
      diagramType: "terminal-interactive",
      hasTerminalVocab: true,
      teaser: "What the terminal actually is, how to watch what your AI agent is doing in real time, what 'grep' and folder paths mean, and a live keyboard sandbox.",
      explainer: "The terminal (or Command Line Interface) is simply a text-based way to talk directly to your computer—typing short one-line instructions instead of clicking through folders with your mouse. Learning a few terminal basics helps in two big ways: first, you can track what your AI coding tool is actually doing as it works (seeing which folders it opens, how it searches your files with 'grep', and which commands it runs); second, you can move around your computer, start local test servers, and read error messages in seconds.",
      experiences: [
        {
          lead: "What 'grep' is (and why AI agents run it constantly):",
          body: "'grep' is simply Cmd+F / Ctrl+F for your terminal. Instead of opening 50 files by hand, running 'grep -rn \"Button\" .' searches inside every file and subfolder (-r) in a split second and prints the exact filename and line number (-n) where that word appears."
        },
        {
          lead: "Why 'mkdir' comes first and 'touch' comes second (and ls vs. ls -la):",
          body: "'mkdir my-app' builds the empty folder box first (use 'mkdir -p a/b/c' to create nested parent folders all at once); then 'touch index.html' creates the empty file sheet inside it. When listing files, plain 'ls' hides secret dotfiles—always use 'ls -la' so hidden files like '.env' and '.git' show up."
        },
        {
          lead: "Why 'head' means two different things (Terminal 'head' vs. Git 'HEAD'):",
          body: "In the terminal, lowercase 'head -n 20 app.py' prints the top 20 lines of a file so a huge file doesn't flood your screen (its opposite is 'tail'). In Git, uppercase 'HEAD' is the 'You Are Here' pin pointing to your latest commit snapshot."
        },
        {
          lead: "When to use Absolute Paths (/ or ~) vs. Relative Paths (. or ..):",
          body: "An Absolute Path ('cd ~/workspace/my-app') starts from your home or root folder, so it works no matter where you are standing. A Relative Path ('cd src/components' or 'cd ..') starts from the room you are standing in right now ('pwd')—if you're in the wrong folder, a relative path will say 'No such file or directory'."
        }
      ],
      activity: {
        title: "Fun activity: Terminal scavenger hunt",
        steps: [
          "Try all 5 Guided Missions in the Live Terminal & Keyboard Sandbox above—pressing Tab, Up/Down Arrows, Enter, Ctrl+C, and Ctrl+L right on your keyboard.",
          "Click through each colored piece of the Path Anatomy Bar above to see the difference between your Workspace, a Project Repo, a Parent Directory (..), a Subfolder, and a File.",
          "Search the Terminal vocab reference below for 'pwd', 'ls -la', 'grep', and 'cd ..' and try them in your own code editor's terminal."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "MIT Missing Semester: The Shell",
          description: "Hands-on introduction to bash/zsh, paths, pipes, redirection, permissions, and command-line navigation.",
          url: "https://missing.csail.mit.edu/2020/course-shell/"
        },
        {
          type: "Course",
          badgeClass: "badge-info",
          title: "Harvard CS50: Command Line Interface (CLI) Short",
          description: "Concise beginner walkthrough of ls, cd, pwd, mkdir, cp, rm, and how directory trees work.",
          url: "https://cs50.harvard.edu/x/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "METR AI developer productivity study",
          description: "Research showing why checking terminal output directly is much faster than blind trial-and-error prompting.",
          url: "https://metr.org/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "ExplainShell: Paste any terminal command to see every flag",
          description: "Interactive visual parser that breaks down complex shell pipelines and flags piece by piece.",
          url: "https://explainshell.com/"
        }
      ]
    },
    {
      id: "reading-code-stability",
      title: "Reading code, Python essentials & long-term stability",
      stage: "Step 5 · Python Literacy & Reliability",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "troubleshoot",
      diagramType: "python-code-blueprint",
      teaser: "How much Python you actually need in 2026 (building first vs. memorizing syntax), how Lists & Dictionaries make DataFrames/Tables, reading stack traces, and running Evals.",
      explainer: "How much Python or coding syntax do you actually need to learn in 2026? You don't need to spend six months memorizing syntax textbooks—AI can write boilerplate code in seconds. Instead, the best way to learn now is to build first (using AI as your tutor) while learning the 6 core building blocks of code so you can read what AI wrote, trace how data moves from a Dictionary to a Table (DataFrame), read error stack traces from bottom to top, and run automated checks (Evals & tests) so your app stays reliable.",
      experiences: [
        {
          lead: "How much Python to learn in 2026 ('Build first, read & debug'):",
          body: "Focus on reading and debugging 6 things: (1) Variables & types, (2) Lists [...] and Dictionaries {'key': 'val'}, (3) if/else branches and for-loops, (4) Functions (def -> return), (5) Strict data schemas (Pydantic / JSON Schema / Protobufs), and (6) Reading stack traces."
        },
        {
          lead: "How Dictionaries, Lists, and Tables (Pandas DataFrames) fit together:",
          body: "A Dictionary {'name': 'Lucy', 'status': 'Doing'} is one single row of labeled data. A List [row1, row2, row3] holds multiple rows in order. And a Table (or a Pandas DataFrame in Python / Colab) is simply a List of Dictionaries that lets you filter, sort, or analyze thousands of rows at once!"
        },
        {
          lead: "Reading error 'Stack Traces' from the bottom up:",
          body: "When Python crashes and prints 25 scary lines of traceback text, don't panic—jump straight to the very last line! That bottom line names the exact bug (like KeyError: 'email' when a dictionary key is missing) and the line right above it tells you the exact file and line number."
        },
        {
          lead: "Testing & Golden Evals (Making sure 'Move to Doing' stays in Doing):",
          body: "Before trusting an AI prompt or backend function, write a quick test or 30-item 'Golden Eval' checklist: if you tell the app 'move Task A to Doing', does it reliably land in 'Doing' every time without breaking 'Done'?"
        }
      ],
      activity: {
        title: "Fun activity: Trace the 6 Python building blocks & test your app",
        steps: [
          "Click through all 6 blocks in the Interactive Python & Code Reading Blueprint above to see real examples of Dictionaries, DataFrames, Schemas, Stack Traces, and Evals.",
          "Watch 'Python in 2026: Honest Truth About Learning It Now' in the resources below to see how to use AI as a tutor while building real projects.",
          "Open one of your AI-built scripts, find a function (def ...), and trace what happens if an input field is missing or empty (None)."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-info",
          title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
          description: "Essential guide to how much Python you actually need in 2026—why 'building first' with AI and mastering code reading, debugging, and architecture beats textbook memorization.",
          url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ"
        },
        {
          type: "Course",
          badgeClass: "badge-success",
          title: "Harvard CS50P: Introduction to Programming with Python",
          description: "David Malan's clear, beginner-friendly visual introduction to Python functions, dictionaries, exceptions, and unit tests.",
          url: "https://cs50.harvard.edu/python/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
          description: "Stanford study on why AI-generated code can look convincing at first glance while hiding security gaps.",
          url: "https://dl.acm.org/doi/10.1145/3576915.3623157"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "Google DORA State of DevOps report",
          description: "Why shipping small, well-tested changes keeps apps much more reliable than giant all-at-once rewrites.",
          url: "https://dora.dev/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "OWASP Top 10 Web Application Security Risks",
          description: "The essential checklist for spotting common security mistakes when reviewing web application code.",
          url: "https://owasp.org/www-project-top-ten/"
        }
      ]
    },
    {
      id: "system-dynamics",
      title: "System dynamics, AI agents & how pieces fit together",
      stage: "Step 6 · Systems & AI Agents",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "sync_alt",
      diagramType: "systems-agent-blueprint",
      teaser: "How URLs map to backend Python functions, Polling vs. Webhooks, AI Agent tool-calling (MCP), Human-in-the-Loop approval cards, and keeping sensitive data separate from code.",
      explainer: "In Step 2, we looked at the static map of an app's pieces. This stop is about how data and AI agents actually move across those pieces in real life: how a browser URL triggers a specific Python function on the server, how apps handle slow 30-second tasks without freezing, how AI agents use tools (and why they should stage a 'Confirm' card before taking real-world actions), and why you always keep sensitive user data separate from your code repository.",
      experiences: [
        {
          lead: "How a website URL maps to a backend function & database:",
          body: "When your browser calls a URL like '/api/users/42', the API acts as a switchboard that triggers a Python function on your server—like 'get_user(42)'—which looks up user #42 in the Database and hands back a clean JSON response."
        },
        {
          lead: "AI Agents, Tool Calling (MCP) & Human-in-the-Loop ('Prepare -> Confirm'):",
          body: "An AI Agent is simply an AI model given a loop and a menu of tools it can call (like searching a database or drafting an email). Crucial rule: for any action that changes the outside world (sending an email, deleting a row, charging money), have the agent stage a Preview Card first so a human clicks 'Approve' before it runs!"
        },
        {
          lead: "Keep your code repo separate from sensitive user data:",
          body: "Never store real user spreadsheets, private CSVs, or customer records inside your Git code folder (where anyone with repo access can see them). Keep only code in GitHub, and store real data in a proper Database (PostgreSQL / Supabase / Firestore) or secure cloud storage."
        },
        {
          lead: "Polling vs. Webhooks & Double-Click Protection (Idempotency):",
          body: "For slow jobs, either check status on a timer (Polling) or let the server ping you when done (Webhook). And always disable submit buttons while loading + attach a unique receipt ID (Idempotency) so double-clicks never create duplicate records."
        }
      ],
      activity: {
        title: "Fun activity: Walk through the live System & AI Agent flow",
        steps: [
          "Click through all 6 stages in the Interactive System Dynamics & AI Agent Diagram above to see how URLs, Databases, Webhooks, and Human-in-the-Loop Agent approvals work.",
          "Check your own project folder to verify that zero private user CSVs or sensitive datasets are mixed into your Git repository.",
          "If your app uses AI to take actions (like updating tasks or sending messages), design a 'Prepare -> Confirm' preview card before the action executes."
        ]
      },
      resources: [
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "Hello Interview: Core system design concepts & scaling dynamics",
          description: "Meta Staff Engineer breakdown of latency, throughput, caching, queues, and handling failure modes.",
          url: "https://www.youtube.com/watch?v=Ru54dxzCyD0"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Google AI for Developers: Function Calling & Structured Outputs",
          description: "Official guide to giving AI models structured JSON schemas and custom Python/JS tools they can call safely.",
          url: "https://ai.google.dev/gemini-api/docs/function-calling"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Designing Data-Intensive Applications (Martin Kleppmann)",
          description: "The foundational guide to reliability, scalability, and maintainability in modern software systems.",
          url: "https://dataintensive.net/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "Stripe Engineering: Designing robust APIs with idempotency",
          description: "How production systems handle network retries and double-clicks safely without duplicate side effects.",
          url: "https://stripe.com/blog/idempotency"
        }
      ]
    },
    {
      id: "system-architecture",
      title: "System architecture, open source & shipping to production",
      stage: "Step 7 · Architecture, Open Source & Shipping",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "account_tree",
      diagramType: "opensource-shipping",
      teaser: "How to download and build on top of free open-source code, where to find the best starter templates and tools to ship, and key watch-outs before going live.",
      explainer: "When you build a real product, you don't get extra points for inventing login screens, payment checkouts, or databases from scratch. Experienced engineers rarely build those from zero—instead, they start inside the box by snapping together free, community-tested open-source building blocks and starter templates, saving their energy for the 20% that makes their idea unique. This final stop shows you how to download and build on top of open-source code, where to find the best tools to ship, and the key watch-outs—like software licenses, fake AI-hallucinated packages, leaked '.env' keys, and surprise cloud bills—to check before you share a public link.",
      experiences: [
        {
          lead: "Two ways to build on open source (Single Libraries vs. Full Starter Templates):",
          body: "You can either install a single open-source building block into your existing project ('npm install' or 'pip install' for icons, charts, or Stripe) OR copy a complete working starter app on GitHub ('Fork' or 'Use this template') so login, database tables, and styling are already wired up."
        },
        {
          lead: "Where to find the best free building blocks to ship fast:",
          body: "Start from official Vercel Templates, shadcn/ui components, and GitHub 'Awesome' lists; pair them with Supabase or Neon (free-tier databases), Clerk or Auth.js (user login), Google AI Studio or Hugging Face (AI models), and Stripe Checkout (payments)."
        },
        {
          lead: "Four watch-outs before you install or go live:",
          body: "1) Check the LICENSE file (MIT and Apache 2.0 are safe for business; AGPL/GPL require sharing your source code). 2) Make sure any package AI suggests is real on npm/GitHub before installing. 3) Keep secret keys in '.env' (never on public GitHub). 4) Set a hard monthly spend limit in your AI/cloud billing dashboard."
        },
        {
          lead: "Keeping your architecture simple:",
          body: "When an AI suggests adding five new servers for a simple app, push back and ask: 'What is the simplest way to build this using the tools we already have?'"
        }
      ],
      activity: {
        title: "Fun activity: Vet, clone & ship an open-source starter safely",
        steps: [
          "Click through the 3 interactive diagrams above: (1) Open-Source Workflow, (2) Shipping Resource Stack, and (3) Critical Watch-Outs Shield.",
          "Pick a starter repo on Vercel Templates or GitHub and check its 4 health signals: LICENSE file (MIT/Apache 2.0), last commit date, download count, and README.",
          "Before sharing any live app link publicly, set a hard monthly spend limit in your AI/cloud billing settings so a traffic spike can never cause a surprise bill."
        ]
      },
      resources: [
        {
          type: "Tool",
          badgeClass: "badge-info",
          title: "Vercel Open-Source Starter Templates",
          description: "Production-ready Next.js, AI chat, SaaS, and Supabase starter repos you can clone and deploy to a live URL in minutes.",
          url: "https://vercel.com/templates"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "shadcn/ui & Radix Open-Source Components",
          description: "Accessible, customizable open-source UI components that copy directly into your codebase so you own every line.",
          url: "https://ui.shadcn.com/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-warning",
          title: "Choose an Open Source License (MIT vs. Apache 2.0 vs. AGPL)",
          description: "Plain-English breakdown of which open-source licenses are safe for commercial apps and which require open-sourcing your code.",
          url: "https://choosealicense.com/licenses/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "The System Design Primer & Awesome Open Source",
          description: "Visual catalog of standard architectural blueprints (load balancers, caches, queues, schemas) and vetted open-source tools.",
          url: "https://github.com/donnemartin/system-design-primer"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Nature: People systematically overlook subtractive changes (Adams et al.)",
          description: "Empirical research on addition bias and why simplifying architecture requires deliberate effort.",
          url: "https://www.nature.com/articles/s41586-021-03380-y"
        }
      ]
    }
  ],
  archive: {
    essayTitle: "What vibe-coding engineers need to learn",
    essaySubtitle: "Takeaways from an experienced software engineer and a new AI-deployed builder on what comes naturally—and what takes deliberate practice.",
    sections: [
      {
        heading: "The gap between a cool prototype and a real live app",
        body: "Today, anyone can build working prototypes and flows they never could have built six months ago. AI makes getting to the first 80% faster than ever—but turning a prototype that works once on your laptop into a reliable app that real people can trust requires learning a few core engineering habits."
      },
      {
        heading: "What comes naturally: Knowing the real problem & keeping it simple",
        body: "When you come directly from the problem you're trying to solve, you have a huge head start: you already know what users actually need (instead of building extra features nobody clicks), you build alongside the people who will use it, and you bring fresh eyes to ask 'what is the simplest way this could work?'"
      },
      {
        heading: "What takes practice: App vocabulary, Git checkpoints, the terminal & reading code",
        body: "Sometimes starting inside the box is a great place to begin. Bridging the gap from 'vibes' to a deployed app comes down to five practical skills: (1) knowing the names of the parts of an app so you can point AI to the right place, (2) saving Git checkpoints and branches before big AI edits, (3) using the terminal to see what AI is doing in real time, (4) skimming the code AI writes to spot missing error checks or exposed keys, and (5) building on top of trusted open-source building blocks."
      }
    ],
    library: [
      {
        title: "Python in 2026: Honest Truth About Learning It Now (Tech With Tim)",
        category: "Video",
        badgeClass: "badge-info",
        takeaway: "Why you don't need to memorize syntax textbooks in 2026—focus on building first, reading AI code, debugging stack traces, and understanding architecture."
      },
      {
        title: "Harvard CS50x: Introduction to Computer Science",
        category: "Course",
        badgeClass: "badge-info",
        takeaway: "The best zero-assumed-knowledge course on how text files, code editors, Python, SQL, and web apps actually work."
      },
      {
        title: "Hello Interview: System Design & App Architecture",
        category: "Video",
        badgeClass: "badge-secondary",
        takeaway: "Clear visual guide for how screens (Front End), messengers (APIs), servers (Back End), and databases fit together."
      },
      {
        title: "MIT Missing Semester of Your CS Education",
        category: "Course",
        badgeClass: "badge-success",
        takeaway: "The clearest hands-on guide to using the terminal, navigating folders, and understanding how Git saves checkpoints."
      },
      {
        title: "Designing Data-Intensive Applications (Martin Kleppmann)",
        category: "Book",
        badgeClass: "badge-info",
        takeaway: "Deep-dive reference for how databases, background queues, caches, and reliable systems work under the hood."
      },
      {
        title: "Learn Git Branching (Interactive Sandbox)",
        category: "Tool",
        badgeClass: "badge-success",
        takeaway: "Visual, step-by-step browser game for practicing commits, branches, merges, and undoing mistakes."
      },
      {
        title: "Choose an Open Source License (GitHub Guide)",
        category: "Guide",
        badgeClass: "badge-warning",
        takeaway: "Plain-English cheat sheet on which open-source licenses (MIT, Apache 2.0) are safe to build on and which have restrictions."
      },
      {
        title: "Why Johnny Can't Prompt (UC Berkeley, ACM CHI)",
        category: "Paper",
        badgeClass: "badge-info",
        takeaway: "Study showing why knowing the names for the parts of an app helps you direct AI much faster than guessing."
      },
      {
        title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
        category: "Paper",
        badgeClass: "badge-secondary",
        takeaway: "Study showing why skimming AI-written code for exposed passwords and missing error checks matters before going live."
      }
    ]
  }
};
