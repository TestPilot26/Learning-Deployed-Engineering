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
  substackUrl: "https://substack.com",
  stops: [
    {
      id: "downloading-the-tools",
      title: "Downloading the tools",
      stage: "Step 1 · Foundations",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "home_repair_service",
      diagramType: "tools-flow",
      teaser: "What a plain text file actually is, why we use Homebrew and IDEs, and how your laptop connects to GitHub and Vercel.",
      explainer: "When you start from zero, the hardest part isn't complex algorithms—it's figuring out what all the windows and downloads on your laptop actually do. Code is just plain, unformatted text files sitting in a folder on your hard drive. Once you understand how your code editor (IDE), package manager (Homebrew), local Git folder, cloud GitHub repo, and Vercel hosting connect, the black box disappears.",
      experiences: [
        {
          lead: "Plain text files vs. Word or Google Docs:",
          body: "A .js, .py, or .html file is just a plain UTF-8 text file with zero hidden formatting. Opening code in Word or TextEdit injects curly quotes and invisible styles that break syntax—an IDE like VS Code or Cursor is simply a plain-text workshop with syntax coloring and a built-in terminal."
        },
        {
          lead: "Why engineers use Homebrew instead of random .dmg installers:",
          body: "Double-clicking installers from web searches scatters tools across folders your terminal cannot find ('command not found'). A package manager like Homebrew (brew install node git) installs developer tools into one standard path and keeps versions clean."
        },
        {
          lead: "What 'saving to Vercel' physically means:",
          body: "Pressing Cmd+S saves to your laptop's hard drive only. Pushing to GitHub uploads your code history to a cloud vault. Vercel watches that GitHub vault, spins up a fresh cloud server on every push, builds your files, and gives you a live public https:// link."
        }
      ],
      activity: {
        title: "Fun activity: Trace a file from laptop to live URL",
        steps: [
          "Click through each node in the living diagram below to trace how a plain text file travels from your laptop to a live Vercel server.",
          "Open VS Code or Cursor, create a file named index.html, and inspect it in Finder/Explorer to see that it is just a regular file in a regular folder.",
          "Open the integrated terminal (Ctrl+` or Cmd+`) and run git --version and node -v to confirm your local runtime tools are wired into your PATH."
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
          description: "Understanding UTF-8 plain text, file extensions (.js, .py, .json, .md, .env), and hidden dotfiles.",
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
      teaser: "Interactive diagram of an app, coding languages (pros & cons), real-world tools (Postgres, Redis, FastAPI), and good vs. fragile architecture.",
      explainer: "In the AI era, your vocabulary is your control surface. UC Berkeley research ('Why Johnny Can't Prompt') proved that beginners describe UI symptoms in conversational English and hope for a lucky fix. When you know the anatomy of an app—which languages run in the browser vs. the server vs. the database, which real-world tools handle auth or caching, and what separates clean architecture from fragile spaghetti—you can direct AI with surgical precision.",
      experiences: [
        {
          lead: "Why apps use multiple coding languages at once:",
          body: "Web browsers only execute HTML, CSS, and JavaScript. Backend servers often use Python (for AI/ML libraries), TypeScript/Node.js (to match the frontend), or Go (for high concurrency), while relational databases speak SQL."
        },
        {
          lead: "Symptom prompting vs. mechanism prompting:",
          body: "Instead of telling AI 'it double-charged when I clicked twice', naming the exact layer and mechanism ('add an idempotency key on the POST /api/checkout endpoint and disable the submit button while loading') solves the root cause on the first try."
        },
        {
          lead: "Good architecture vs. fragile vibe-coded architecture:",
          body: "A working demo that puts API keys in the browser or lets the UI mutate database tables directly without auth will collapse in production. Separating client, API server, and data boundaries keeps your system safe."
        }
      ],
      activity: {
        title: "Fun activity: Explore the interactive app & language map",
        steps: [
          "Click through all 6 components in the Interactive App & Infrastructure Diagram below to inspect the real-world tools (e.g., PostgreSQL, Supabase, Redis, FastAPI) and languages used at each layer.",
          "Toggle the diagram between 'Good architecture' and 'Fragile vibe-coded architecture' to see the 4 classic beginner traps.",
          "Open Chrome DevTools (F12 -> Network tab) on any website, click a button, and spot the HTTP method (GET/POST), status code (200/404/500), and JSON payload."
        ]
      },
      resources: [
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
          description: "Empirical study showing why domain vocabulary separates systematic engineering from trial-and-error prompting.",
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
      teaser: "Living diagram of commits, branches, PRs/CLs, merges, and how cloning, branching, and forking keep your code safe.",
      explainer: "Version control comes right after terminology because you need a seatbelt before you let an AI agent edit twenty files at once. GitClear's study of 211 million lines of code found that two-week code churn more than doubled from 3.3% to 7.1% in the AI era. Understanding commits (save checkpoints), branches (parallel safe timelines), diffs (line-by-line inspection), and Pull Requests / Changelists means an AI hallucination can never destroy a working prototype.",
      experiences: [
        {
          lead: "Saving (Cmd+S) vs. Committing (git commit) vs. Pushing (git push):",
          body: "Cmd+S updates the scratchpad on your laptop. git commit takes a permanent, labeled snapshot you can rewind to anytime. git push uploads those snapshots to GitHub and triggers Vercel."
        },
        {
          lead: "Branching vs. Cloning vs. Copying a folder:",
          body: "Never duplicate folders like 'project-v2-final-FINAL'. A Git branch lets you try a risky AI refactor in an isolated timeline and either merge it if it works or delete it in one second if it breaks."
        },
        {
          lead: "Always read git diff before committing:",
          body: "Before sealing a commit or opening a Pull Request (PR), reading the red/green diff lines catches stray console logs, accidentally deleted functions, or leaked secrets."
        }
      ],
      activity: {
        title: "Fun activity: Drive the living Git timeline",
        steps: [
          "Click each node on the Living Git & Deployment Diagram below (Commit, Branch, Diff, Pull Request / CL, Merge, and Clone vs. Fork) to see how code moves safely to production.",
          "Make a clean git commit in your local repo, then ask an AI agent to change a component and run git diff to see the exact lines added and removed.",
          "Create a branch with git checkout -b test-experiment, make an edit, and switch back to main with git checkout main to watch your files instantly revert."
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
          title: "GitClear 2025 AI code quality & churn report",
          description: "Empirical study of 211M lines of code showing why disciplined version control and refactoring matter in the AI era.",
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
      hasTerminalVocab: true,
      teaser: "Tracking what AI is doing in real time, navigating any system with confidence, and searchable terminal vocab.",
      explainer: "Learning terminal essentials matters for two big reasons: first, you can track what AI is actually doing as it's doing it (watching which files it reads, edits, or runs instead of treating it as a black box); second, you'll find it much easier to navigate many different types of systems—from your own laptop to cloud VMs and production logs.",
      experiences: [
        {
          lead: "Tracking AI in real time:",
          body: "When an AI agent runs shell commands, knowing pwd, ls -la, grep, and git diff lets you follow every step as it happens and catch mistakes immediately."
        },
        {
          lead: "Universal navigation across systems:",
          body: "Graphical interfaces change between tools, but the command line works the same way on macOS, Linux, cloud servers, and container environments."
        },
        {
          lead: "Escaping the 20-prompt guessing loop:",
          body: "METR's 2025 trial found developers took 19% longer when stuck in blind AI prompt loops—checking logs and file state directly in the terminal takes 30 seconds."
        }
      ],
      activity: {
        title: "Fun activity: Terminal scavenger hunt",
        steps: [
          "Search the Terminal vocab reference below for 'pwd', 'ls -la', 'grep', and 'Ctrl + C' and test each one in your editor's terminal.",
          "Use mkdir and touch to create a folder and a plain text file without touching Finder or Windows Explorer.",
          "Run python3 -m http.server 8000 in a folder and watch the terminal log every HTTP request live as you load localhost:8000."
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
          title: "METR 2025 AI developer productivity study",
          description: "Empirical trial showing why fast root-cause verification in the terminal beats blind chat iteration.",
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
      title: "Reading code & long-term stability",
      stage: "Step 5 · Reliability",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "troubleshoot",
      teaser: "Crossing the gap between code that works on a first go and resilient business infrastructure.",
      explainer: "Stanford's ACM CCS study (Perry et al.) found that developers using AI assistants wrote less secure code while feeling significantly more confident that it was secure. You don't need to write every line from scratch, but you do need to read the code AI generates to spot silent failure states, missing error handling, and security gaps.",
      experiences: [
        {
          lead: "The first-go illusion:",
          body: "Why a prototype that works for one user on happy-path input often breaks when two users click at once or an external API times out."
        },
        {
          lead: "Auditing inputs and error paths:",
          body: "Reading code top-to-bottom to ask: what happens if this value is null, slow, or untrusted?"
        },
        {
          lead: "From quick fix to durable infrastructure:",
          body: "Adding validation, fallbacks, and diagnostic logging before handing a tool to real users."
        }
      ],
      activity: {
        title: "Fun activity: Red-team your own prototype",
        steps: [
          "Open one of your AI-generated scripts and trace what happens if the network disconnects mid-request.",
          "Check every place user input enters the app and verify it uses safe text rendering (textContent) rather than raw HTML injection (innerHTML).",
          "Add a startup diagnostic check so errors surface visibly instead of failing silently."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
          description: "Perry, Srivastava, Kumar & Boneh's study on the confidence-competence gap in AI coding.",
          url: "https://dl.acm.org/doi/10.1145/3576915.3623157"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "Google DORA State of DevOps report",
          description: "Why AI speed requires small batch sizes and automated verification to avoid the 7.2% stability drop.",
          url: "https://dora.dev/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "OWASP Top 10 Web Application Security Risks",
          description: "The essential checklist for spotting XSS, broken authentication, and injection bugs when reviewing AI code.",
          url: "https://owasp.org/www-project-top-ten/"
        }
      ]
    },
    {
      id: "system-dynamics",
      title: "System dynamics & how pieces fit together",
      stage: "Step 6 · Systems",
      tone: "tone-tertiary",
      badgeClass: "badge-success",
      icon: "sync_alt",
      teaser: "Webhooks vs. polling, idempotency, queues, caching, and data flow across services.",
      explainer: "Most bugs in growing apps aren't syntax errors—they are state and timing bugs between components. Understanding system dynamics means seeing how data moves over time: what is synchronous vs. asynchronous, where state is stored, and how services recover when a downstream step stalls.",
      experiences: [
        {
          lead: "Webhooks vs. polling:",
          body: "Knowing when to ask 'are you done yet?' on a timer versus letting the server notify you when an event finishes."
        },
        {
          lead: "Idempotency in real workflows:",
          body: "Designing actions so that retrying a failed request never creates duplicate records or double notifications."
        },
        {
          lead: "State single source of truth:",
          body: "Keeping UI state synchronized with backend storage so refreshing the page doesn't lose user work."
        }
      ],
      activity: {
        title: "Fun activity: Map a 3-box system diagram",
        steps: [
          "Pick a tool you built and draw three boxes: Client UI, API/Server, and Storage/External API.",
          "Label every arrow between them with what triggers the call and what happens if that arrow fails.",
          "Identify one synchronous bottleneck that could be made resilient with a queue or retry key."
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
          title: "Designing Data-Intensive Applications (Martin Kleppmann)",
          description: "The foundational guide to reliability, scalability, and maintainability in modern software systems.",
          url: "https://dataintensive.net/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "Stripe Engineering: Designing robust APIs with idempotency",
          description: "How production systems handle network retries safely without duplicate side effects.",
          url: "https://stripe.com/blog/idempotency"
        }
      ]
    },
    {
      id: "system-architecture",
      title: "System architecture & stress-tested blueprints",
      stage: "Step 7 · Architecture",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "account_tree",
      teaser: "Why 'sometimes the box is a good place to start'—pairing fresh product instinct with proven blueprints.",
      explainer: "Coming from the problem side gives you a superpower: fresh eyes on product instinct (avoiding the 80% of enterprise features Pendo found go unused) and GTM change management (avoiding the 70% transformation failure rate). Combining that product taste with standard architectural blueprints turns a clever prototype into lasting infrastructure.",
      experiences: [
        {
          lead: "The downside of out-of-the-box thinking:",
          body: "Fresh eyes are great for deciding what to build, but inside the architecture, standard battle-tested patterns exist for a reason."
        },
        {
          lead: "Analogical pattern matching:",
          body: "Seasoned SWEs recognize that a new workflow problem is structurally identical to an event log, a state machine, or a pub/sub pipeline."
        },
        {
          lead: "Simplicity over addition bias:",
          body: "Using UVA's Nature research on addition bias to ask: do we need a custom microservice, or a clean UI over existing trusted data?"
        }
      ],
      activity: {
        title: "Fun activity: The blueprint swap",
        steps: [
          "Before prompting AI to build a new feature, ask it to propose 3 standard architectural patterns (with pros, cons, and failure modes) before writing any code.",
          "Check whether the simplest option can reuse an existing data table or integration instead of adding a new stateful service.",
          "Document the chosen blueprint in a 10-line architecture note at the top of your repo."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Nature: People systematically overlook subtractive changes (Adams et al.)",
          description: "Empirical research on addition bias and why simplifying architecture requires deliberate effort.",
          url: "https://www.nature.com/articles/s41586-021-03380-y"
        },
        {
          type: "Explainer",
          badgeClass: "badge-secondary",
          title: "The System Design Primer (Donne Martin)",
          description: "Visual catalog of standard building blocks: load balancers, caches, queues, and relational schemas.",
          url: "https://github.com/donnemartin/system-design-primer"
        }
      ]
    }
  ],
  archive: {
    essayTitle: "What vibe-coding engineers need to learn",
    essaySubtitle: "Takeaways from a seasoned software engineer at Google DeepMind and a new AI-deployed engineer on the easiest and hardest things to learn.",
    sections: [
      {
        heading: "The prototype-to-production gap",
        body: "A lot of us have been building applications, solutions, and flows we never could have six months ago. In Y Combinator's Winter 2025 batch, 25% of startups shipped codebases that were 95% AI-generated. AI has changed who can code—but Google's DORA report across 39,000+ professionals found that every 25% bump in AI adoption correlated with a 7.2% drop in delivery stability when architectural guardrails lag behind."
      },
      {
        heading: "Easiest: Product instinct, GTM & fresh eyes",
        body: "Coming directly from the problem eliminates translation loss (solving the Pendo benchmark where 80% of cloud software features go unused and CB Insights' 42% 'no market need' failure rate). Building alongside end users makes GTM and change management natural (avoiding the ~70% digital transformation failure rate), while fresh eyes help bypass addition bias (Nature, 2021)."
      },
      {
        heading: "Hardest: Architecture, stability, vocabulary & the terminal",
        body: "Sometimes the box is a good place to start. GitClear's analysis of 211M lines of code showed refactored lines fell from 24.1% to 9.5% while 2-week code churn doubled from 3.3% to 7.1%. Bridging the gap means building architectural blueprints, reading code to close the Stanford confidence-competence gap, treating vocabulary as your prompt control surface, and using the terminal to avoid the 19% AI debugging slowdown (METR, 2025)."
      }
    ],
    library: [
      {
        title: "Harvard CS50x: Introduction to Computer Science",
        category: "Course",
        badgeClass: "badge-info",
        takeaway: "The gold-standard beginner course on how text files, compilers, memory, Python, SQL, and web apps actually work."
      },
      {
        title: "Hello Interview: System Design w/ Meta Staff Engineer",
        category: "Video",
        badgeClass: "badge-secondary",
        takeaway: "Visual framework for mapping frontend clients, APIs, databases, caches, and architectural trade-offs."
      },
      {
        title: "MIT Missing Semester of Your CS Education",
        category: "Course",
        badgeClass: "badge-success",
        takeaway: "The fastest path to terminal fluency, shell scripting, Git internals, and command-line debugging."
      },
      {
        title: "Designing Data-Intensive Applications (Martin Kleppmann)",
        category: "Book",
        badgeClass: "badge-info",
        takeaway: "Mental blueprints for how databases, queues, caches, and distributed state fit together."
      },
      {
        title: "Learn Git Branching (Interactive Sandbox)",
        category: "Tool",
        badgeClass: "badge-success",
        takeaway: "Visual, step-by-step playground for mastering commits, branches, merges, and resetting mistakes."
      },
      {
        title: "Google DORA State of AI-Assisted Software Development",
        category: "Research",
        badgeClass: "badge-secondary",
        takeaway: "Empirical data on why fast AI code generation requires small batch sizes and verification."
      },
      {
        title: "Why Johnny Can't Prompt (UC Berkeley, ACM CHI)",
        category: "Paper",
        badgeClass: "badge-info",
        takeaway: "Why learning precise systems vocabulary unlocks better model outputs than conversational trial and error."
      },
      {
        title: "Do Users Write More Insecure Code with AI Assistants? (Stanford)",
        category: "Paper",
        badgeClass: "badge-secondary",
        takeaway: "Why working on the first go can mask security and stability flaws unless you read the underlying code."
      }
    ]
  }
};
