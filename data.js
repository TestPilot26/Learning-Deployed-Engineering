// Structured pipeline stops and archive data for Deployed Eng Pipeline
window.PIPELINE_DATA = {
  substackUrl: "https://substack.com",
  stops: [
    {
      id: "downloading-the-tools",
      title: "Downloading the tools",
      stage: "Foundations",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "home_repair_service",
      teaser: "Setting up your local environment, code editor, terminal, and Git so you can build outside the browser.",
      explainer: "Moving from browser-based vibe-coding to local development starts with setting up a real local workshop. Once your code editor, terminal, and runtime live on your own machine, you stop treating code like a black box in a chat window and start seeing the actual files and folders.",
      experiences: [
        {
          lead: "Leaving the browser sandbox:",
          body: "Ready for your custom notes on which tools you downloaded first and what clicked."
        },
        {
          lead: "First local setup:",
          body: "Share your experience installing your IDE, terminal, and running your first local server."
        },
        {
          lead: "What felt intimidating vs. simple:",
          body: "Add your notes on the biggest mental shift when opening a code editor for the first time."
        }
      ],
      activity: {
        title: "Fun activity: Local workshop check",
        steps: [
          "Download and open your code editor (VS Code or Cursor) and open a local project folder.",
          "Open the integrated terminal with Ctrl+` (or Cmd+`) and print your current directory with pwd.",
          "Install Git and Node.js, then run node -v and git --version to verify both respond."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "VS Code & Cursor setup guide",
          description: "How to configure your editor, file tree, and integrated terminal for AI-assisted engineering.",
          url: "https://code.visualstudio.com/docs/setup/setup-overview"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "The Missing Semester: Shell & tools overview",
          description: "MIT lecture walking through why engineers configure their local environment and shell.",
          url: "https://missing.csail.mit.edu/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Homebrew & Node.js package managers",
          description: "Installing runtimes and command-line utilities cleanly without manual installer headaches.",
          url: "https://brew.sh/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "GitHub Desktop & CLI quickstart",
          description: "Connecting your local machine to your personal GitHub account for version control.",
          url: "https://docs.github.com/en/get-started"
        }
      ]
    },
    {
      id: "basic-terminology",
      title: "Basic terminology & how pieces talk",
      stage: "Vocabulary",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "menu_book",
      teaser: "Why vocabulary is your control surface: frontend, backend, APIs, JSON, state, and environment variables.",
      explainer: "In the AI era, your vocabulary is your control surface. UC Berkeley research ('Why Johnny Can't Prompt') showed that non-experts describe symptoms in conversational English and hope for a lucky output. Learning thirty core nouns of software lets you ask the model for exact mechanisms instead of UI patches.",
      experiences: [
        {
          lead: "Symptom prompting vs. mechanism prompting:",
          body: "When you don't know the phrase 'environment variable' or 'CORS', you end up asking the AI to fix symptoms in the wrong layer of the stack."
        },
        {
          lead: "Tracing a single click:",
          body: "Mapping how a button click in the UI triggers an HTTP request, hits an API route, updates state, and returns JSON."
        },
        {
          lead: "Keeping secrets out of code:",
          body: "Understanding why API keys belong in .env files rather than hardcoded inside frontend files."
        }
      ],
      activity: {
        title: "Fun activity: Inspect a live API call",
        steps: [
          "Open Chrome DevTools (F12) on any web app and switch to the Network tab.",
          "Filter by Fetch/XHR, click a button on the page, and inspect the JSON payload returned.",
          "Rewrite a vague prompt ('stop double-charging on refresh') using the exact noun ('make the POST request idempotent')."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Why Johnny Can't Prompt (ACM CHI)",
          description: "UC Berkeley study on why domain vocabulary separates systematic engineering from trial-and-error prompting.",
          url: "https://dl.acm.org/doi/10.1145/3544548.3581388"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "APIs, JSON, and HTTP requests explained",
          description: "Visual walkthrough of how client browsers communicate with backend servers.",
          url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction"
        }
      ]
    },
    {
      id: "cli-and-terminal",
      title: "Command line interface & the terminal",
      stage: "Efficiency",
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
          "Use the terminal to create a new folder, create a file inside it, and inspect its contents without touching Finder or Explorer.",
          "Run a local HTTP server from the command line and watch the request log update live as you refresh your browser.",
          "Use grep or ripgrep to locate every occurrence of a function name across a project."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "METR 2025 AI developer productivity study",
          description: "Empirical trial showing why fast root-cause verification beats blind chat iteration.",
          url: "https://metr.org/"
        },
        {
          type: "Video",
          badgeClass: "badge-secondary",
          title: "MIT Missing Semester: The Shell",
          description: "Hands-on introduction to bash, pipes, redirection, and command-line navigation.",
          url: "https://missing.csail.mit.edu/2020/course-shell/"
        }
      ]
    },
    {
      id: "git-and-shipping",
      title: "Version control, Git & shipping to Vercel",
      stage: "Workflow",
      tone: "tone-primary",
      badgeClass: "badge-info",
      icon: "commit",
      teaser: "Using git diff, commits, and branches as a safety net so an AI edit never wipes out a working prototype.",
      explainer: "GitClear's study of 211 million lines of code showed that two-week code churn more than doubled from 3.3% to 7.1% in the AI era. Version control is your undo button: when you commit small working steps and inspect git diff before accepting AI changes, you can experiment fearlessly.",
      experiences: [
        {
          lead: "Always read git diff before committing:",
          body: "Checking which lines the AI actually touched prevents accidental deletions of working features."
        },
        {
          lead: "Small checkpoints beat giant saves:",
          body: "Committing every time a feature works gives you a clean restore point five minutes away."
        },
        {
          lead: "Push-to-deploy with GitHub & Vercel:",
          body: "Connecting a personal GitHub repo to Vercel so every git push publishes a live preview URL."
        }
      ],
      activity: {
        title: "Fun activity: Break it and revert it",
        steps: [
          "Make a clean git commit of a working page.",
          "Ask AI to make a dramatic change, run git diff in the terminal to inspect every changed line, then restore the original state with git checkout.",
          "Push a branch to GitHub and open the automatic Vercel preview link."
        ]
      },
      resources: [
        {
          type: "Explainer",
          badgeClass: "badge-info",
          title: "GitClear 2025 AI code quality report",
          description: "Analysis of 211M lines of code on code churn, duplication, and refactoring trends.",
          url: "https://www.gitclear.com/"
        },
        {
          type: "Tool",
          badgeClass: "badge-success",
          title: "Learn Git Branching (Interactive)",
          description: "Visual sandbox for practicing commits, branches, merges, and resets.",
          url: "https://learngitbranching.js.org/"
        }
      ]
    },
    {
      id: "reading-code-stability",
      title: "Reading code & long-term stability",
      stage: "Reliability",
      tone: "tone-secondary",
      badgeClass: "badge-secondary",
      icon: "troubleshoot",
      teaser: "Crossing the gap between code that works on a first go and resilient business infrastructure.",
      explainer: "Stanford's ACM CCS study (Perry et al.) found that developers using AI assistants wrote less secure code while feeling significantly more confident that it was secure. You don't need to write every line from scratch, but you do need to read all the code to spot silent failure states.",
      experiences: [
        {
          lead: "The first-go illusion:",
          body: "Why a prototype that works for one user on happy-path input often breaks when two users click at once or an API times out."
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
          "Check every place user input enters the app and verify it uses safe text rendering (textContent) rather than raw HTML injection.",
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
        }
      ]
    },
    {
      id: "system-dynamics",
      title: "System dynamics & how pieces fit together",
      stage: "Systems",
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
          type: "Explainer",
          badgeClass: "badge-info",
          title: "Designing Data-Intensive Applications (Martin Kleppmann)",
          description: "The foundational guide to reliability, scalability, and maintainability in modern software systems.",
          url: "https://dataintensive.net/"
        },
        {
          type: "Explainer",
          badgeClass: "badge-success",
          title: "Stripe Engineering: Designing robust and predictable APIs with idempotency",
          description: "How production systems handle network retries safely without duplicate side effects.",
          url: "https://stripe.com/blog/idempotency"
        }
      ]
    },
    {
      id: "system-architecture",
      title: "System architecture & stress-tested blueprints",
      stage: "Architecture",
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
          title: "The System Design Primer",
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
        title: "Designing Data-Intensive Applications",
        category: "Book",
        badgeClass: "badge-info",
        takeaway: "Mental blueprints for how databases, queues, caches, and distributed state fit together."
      },
      {
        title: "MIT Missing Semester of Your CS Education",
        category: "Course",
        badgeClass: "badge-success",
        takeaway: "The fastest path to terminal fluency, shell scripting, Git internals, and command-line debugging."
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
