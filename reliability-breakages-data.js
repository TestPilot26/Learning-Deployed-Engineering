// Deployed Eng Pipeline — Step 5 Data: "What Could Break & How to Fix It"
// Plain-English, non-jargon interactive scenarios, visual diagram specs, jargon decoders, and paired videos.
// Draws on Anthropic, Cognition, Google DeepMind, OpenAI, Stanford ACM CCS & Stripe engineering insights.

(function () {
  var BREAKAGE_SCENARIOS = [
    {
      id: "bp-ai-hangs",
      number: "1",
      shortPill: "1. AI hangs or sends chatty text",
      icon: "timer_off",
      categoryBadge: "AI & outside services",
      sourceBadge: "Anthropic & DeepMind pattern",
      whatCouldBreakTitle: "The AI or outside service hangs forever—or replies with chatty text instead of data",
      everydayAnalogy:
        "Imagine ordering a coffee and the barista stares at you in silence for 5 minutes (no time limit), or hands you a 3-page poem about coffee when your cash register only accepts a price number.",
      whatUserSees:
        "The user clicks 'Generate' or 'Summarize' and the loading spinner spins forever—or the screen suddenly flashes '500 Internal Server Error'.",
      whyItBreaksPlain:
        "AI models (like Gemini, Claude, or OpenAI) and outside APIs sometimes slow down during busy hours. Also, if your code asks the AI for data, a normal AI prompt might reply: \"Sure! Here is your answer: High Priority\"—which crashes code that expected ONLY the word \"high\".",
      jargonDecoder: [
        {
          term: "Timeout (Time limit)",
          meaning: "A stopwatch rule (like `timeout=10`) that tells your server: 'If the AI doesn't answer in 10 seconds, stop waiting and show a polite message.'"
        },
        {
          term: "Schema / Pydantic (Strict form)",
          meaning: "A fill-in-the-blanks checklist that forces the AI to reply with exact labeled fields (`priority: 'high'`) instead of a chatty paragraph."
        },
        {
          term: "Fallback (Backup plan)",
          meaning: "What your app shows when an outside service is temporarily down so the user's screen never crashes."
        }
      ],
      howToFixTitle: "Set a 10-second stopwatch, force the AI to fill out a strict form, and add a backup plan",
      howToFixSteps: [
        "1. Add a 10-second time limit (`timeout=10`): Never let your server wait forever for an outside service.",
        "2. Force a strict form (`Pydantic` or `JSON Schema`): Tell the AI API it must return exact fields (like `priority` and `reason`), never free-form chat.",
        "3. Wrap the call in a safety net (`try / except`): If the AI is down, catch the error and show a helpful message instead of crashing."
      ],
      aiPromptToCopy:
        "Check every AI and API call in my code: add a 10-second timeout, enforce a strict Pydantic/JSON schema for the response, and add a try/except fallback so the UI never spins forever.",
      diagramBroken: {
        banner: "What happens when fragile code calls an AI or outside API:",
        stage1: {
          artType: "browser-error",
          title: "1. User clicks 'Analyze'",
          subtitle: "Spinner spins forever...",
          pill: "Browser freezes waiting"
        },
        arrow1: { top: "Calls AI API", bottom: "No time limit set!" },
        stage2: {
          artType: "server-overload",
          title: "2. AI takes 45s or chats",
          subtitle: "Replies: 'Sure! Here it is...'",
          pill: "No strict form check"
        },
        arrow2: { top: "Crashes parser!", bottom: "500 Server Error" },
        stage3: {
          artType: "crash-flame",
          title: "3. App crashes hard",
          subtitle: "Blank screen or error",
          pill: "JSONDecodeError / Timeout"
        }
      },
      diagramFixed: {
        banner: "How the fixed version stays fast and reliable every time:",
        stage1: {
          artType: "browser-happy",
          title: "1. User clicks 'Analyze'",
          subtitle: "Gets answer in <10 seconds",
          pill: "Smooth UI feedback"
        },
        arrow1: { top: "10s stopwatch", bottom: "timeout=10" },
        stage2: {
          artType: "shield-lock",
          title: "2. Strict form + safety net",
          subtitle: "Pydantic schema + try/except",
          pill: "Verified fields only"
        },
        arrow2: { top: "Clean data", bottom: "Or safe backup plan" },
        stage3: {
          artType: "db-clean",
          title: "3. Always returns cleanly",
          subtitle: "Zero crashes even if AI lags",
          pill: "100% predictable"
        }
      },
      badCodeTitle: "Fragile code (Waits forever & crashes if AI adds extra words)",
      badCode:
        "# ❌ 1. No time limit (can freeze forever)\n" +
        "# ❌ 2. Crashes if AI adds 'Sure! Here is the JSON:'\n" +
        "resp = requests.post(AI_URL, json={'text': note})\n" +
        "data = json.loads(resp.text)\n" +
        "return data['priority']",
      goodCodeTitle: "Fixed code (10s stopwatch + strict form + backup plan)",
      goodCode:
        "# ✅ 1. Strict form: AI can ONLY return 'low', 'medium', or 'high'\n" +
        "class NoteResult(BaseModel):\n" +
        "    priority: Literal['low', 'medium', 'high']\n\n" +
        "# ✅ 2. 10-second time limit + safety net (try / except):\n" +
        "try:\n" +
        "    return call_ai(note, schema=NoteResult, timeout=10)\n" +
        "except Exception:\n" +
        "    return {'priority': 'medium', 'note': 'Saved for review'}",
      video: {
        title: "Video: Structured Outputs & Reliable AI Calls Explained Simply",
        channel: "YouTube · Visual AI Engineering Walkthrough",
        duration: "8 min watch",
        whyWatch: "Shows visually why raw AI text responses break apps and how forcing a strict JSON form (Schema) makes AI 100% predictable.",
        url: "https://www.youtube.com/results?search_query=pydantic+structured+outputs+llm+explained"
      },
      guide: {
        title: "Anthropic Guide: Building Effective & Reliable AI Systems",
        source: "Anthropic Engineering",
        whyRead: "Explains why simple, structured workflows with strict input/output checks beat complicated prompts.",
        url: "https://www.anthropic.com/research/building-effective-agents"
      }
    },
    {
      id: "bp-db-overload",
      number: "2",
      shortPill: "2. 100 users freeze the database",
      icon: "database",
      categoryBadge: "Speed & scaling users",
      sourceBadge: "Scaling 1 -> 5,000 users",
      whatCouldBreakTitle: "100 people open your app at the same time and the database freezes",
      everydayAnalogy:
        "Imagine needing 20 groceries, driving to the supermarket 20 separate times for 1 item per trip—and building a brand-new highway lane every time you leave your driveway.",
      whatUserSees:
        "Your app felt instant when only you used it on your laptop. When 50 or 100 people open your link, the page takes 15 seconds to load and then shows '503 Service Unavailable'.",
      whyItBreaksPlain:
        "AI-written code often makes three mistakes with databases: (1) It fetches ALL 50,000 rows instead of the first 20, (2) it asks the database a separate question inside a loop for every single item on the screen, and (3) it opens a brand-new phone line to the database on every click until the database runs out of phone lines.",
      jargonDecoder: [
        {
          term: "N+1 Query Bug (Asking inside a loop)",
          meaning: "Fetching 1 list of 100 posts, then running 100 separate database lookups inside a `for` loop to get each author's name (101 trips instead of 1 combined trip!)."
        },
        {
          term: "Pagination (`LIMIT 20`)",
          meaning: "Loading only 20 items at a time (Page 1, Page 2) instead of dumping all 50,000 database rows into memory at once."
        },
        {
          term: "Connection Pool (Shared phone lines)",
          meaning: "Keeping 10 open, reusable phone lines to your database that all users share, instead of opening a new connection on every click."
        }
      ],
      howToFixTitle: "Fetch 20 items at a time, combine lookups into 1 trip, and share database connections",
      howToFixSteps: [
        "1. Never query the database inside a `for` loop: Ask for the posts and their author names in 1 combined query (`JOIN`).",
        "2. Always add `LIMIT 20`: Only load the 20 items currently visible on screen.",
        "3. Turn on Connection Pooling: In Supabase or Neon, copy the 'Pooled connection string' so 5,000 users can share a small pool of database connections."
      ],
      aiPromptToCopy:
        "Scan my backend routes for database queries inside for-loops (N+1 queries), add LIMIT 20 pagination to list endpoints, and make sure we reuse a database connection pool.",
      diagramBroken: {
        banner: "What happens when fragile code fetches everything in a loop:",
        stage1: {
          artType: "crowd-spike",
          title: "1. 100 users open feed",
          subtitle: "Everyone clicks at once",
          pill: "100 simultaneous visits"
        },
        arrow1: { top: "101 trips per user!", bottom: "Queries inside a loop" },
        stage2: {
          artType: "loop-hammer",
          title: "2. 10,000 DB questions",
          subtitle: "Fetches all rows + loop",
          pill: "No LIMIT 20 / No pool"
        },
        arrow2: { top: "Out of phone lines!", bottom: "503 Service Down" },
        stage3: {
          artType: "crash-flame",
          title: "3. Database locks up",
          subtitle: "Too many connections",
          pill: "App freezes for everyone"
        }
      },
      diagramFixed: {
        banner: "How the fixed version serves 5,000+ users in 2 milliseconds:",
        stage1: {
          artType: "crowd-happy",
          title: "1. 5,000 users open feed",
          subtitle: "Fast for every visitor",
          pill: "RequestsPage 1 (20 items)"
        },
        arrow1: { top: "Shared pool lane", bottom: "Reuses open lines" },
        stage2: {
          artType: "pool-funnel",
          title: "2. 1 combined lookup",
          subtitle: "JOIN + LIMIT 20 rows",
          pill: "Zero queries in loops"
        },
        arrow2: { top: "Takes 2ms!", bottom: "Tiny memory footprint" },
        stage3: {
          artType: "db-clean",
          title: "3. Database stays calm",
          subtitle: "Returns 20 rows instantly",
          pill: "Scales effortlessly"
        }
      },
      badCodeTitle: "Fragile code (Opens new connection + queries inside a loop)",
      badCode:
        "# ❌ Opens a new DB line every click & runs 101 separate trips:\n" +
        "conn = connect_db()  # Runs out of phone lines at 100 users!\n" +
        "posts = conn. run('SELECT * FROM posts')  # Loads ALL 50,000 rows!\n" +
        "for post in posts:\n" +
        "    # ❌ Asks the database a separate question on every loop turn:\n" +
        "    post.author = conn.run(f'SELECT name FROM users WHERE id={post.uid}')",
      goodCodeTitle: "Fixed code (Shared pool + 1 combined query + 20 items per page)",
      goodCode:
        "# ✅ Reuses shared pool + combines into 1 trip + loads 20 rows:\n" +
        "with db_pool.connection() as conn:\n" +
        "    posts = conn.run('''\n" +
        "        SELECT posts.title, users.name AS author\n" +
        "        FROM posts JOIN users ON posts.uid = users.id\n" +
        "        ORDER BY posts.created_at DESC LIMIT 20\n" +
        "    ''')",
      video: {
        title: "Video: The N+1 Database Problem & Connection Pooling (Visualized)",
        channel: "YouTube · ByteByteGo / System Design Visuals",
        duration: "6 min watch",
        whyWatch: "Animated diagram showing why asking the database questions inside a loop crashes servers—and how 1 combined query fixes it.",
        url: "https://www.youtube.com/results?search_query=n%2B1+query+problem+and+database+connection+pooling+explained"
      },
      guide: {
        title: "Supabase & Neon Guide: Connection Pooling Explained Simply",
        source: "Cloud Database Architecture",
        whyRead: "Shows which toggle to flip in your cloud database dashboard so traffic spikes never run out of connections.",
        url: "https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler"
      }
    },
    {
      id: "bp-double-click",
      number: "3",
      shortPill: "3. Double-clicks create duplicates",
      icon: "ads_click",
      categoryBadge: "Duplicate actions & payments",
      sourceBadge: "Stripe reliability pattern",
      whatCouldBreakTitle: "Someone double-clicks 'Submit' or 'Pay' on slow Wi-Fi and triggers the action twice",
      everydayAnalogy:
        "Imagine pressing an elevator button twice because it didn't light up right away—and two separate elevators arrive and charge you twice for the ride.",
      whatUserSees:
        "On train or coffee-shop Wi-Fi, a user taps 'Create Project', 'Send Invite', or 'Pay $20' twice—and ends up with two identical projects, two emails sent, or a double credit-card charge.",
      whyItBreaksPlain:
        "When two clicks arrive 50 milliseconds apart, Click #1 and Click #2 both check the database at the exact same instant. Both see 'not paid yet!', so both run the action before either one finishes writing 'Done!' back to the database.",
      jargonDecoder: [
        {
          term: "Race Condition (Two clicks racing)",
          meaning: "When two requests arrive at almost the exact same moment and interfere with each other because both read the old state before either saves the new state."
        },
        {
          term: "Idempotency Key (One-time receipt ID)",
          meaning: "A unique serial number attached to a button click so even if the browser sends the request 5 times on spotty Wi-Fi, the server only runs it once."
        },
        {
          term: "Atomic Update (All-in-one-step save)",
          meaning: "Checking and updating a database row in a single locked step instead of checking in Python and saving later."
        }
      ],
      howToFixTitle: "Disable the button while loading + attach a one-time receipt ID",
      howToFixSteps: [
        "1. Lock the button on the first click (`button.disabled = true`): Show 'Saving...' immediately in the browser so users can't double-tap.",
        "2. Send a unique One-Time Receipt ID (`idempotency_key`): If the server sees the same receipt ID a second time, it simply returns the first result without running the action again.",
        "3. Check-and-update in one database step: Let the database update the row in one locked statement."
      ],
      aiPromptToCopy:
        "Protect my form submit buttons against double-clicks: disable the button while the request is loading on the frontend, and check an idempotency key / atomic update on the backend.",
      diagramBroken: {
        banner: "What happens when two fast clicks race each other:",
        stage1: {
          artType: "double-click",
          title: "1. User taps 'Submit' 2x",
          subtitle: "Slow Wi-Fi -> 2 clicks sent",
          pill: "Button wasn't disabled"
        },
        arrow1: { top: "Click #1 & #2 race", bottom: "50ms apart" },
        stage2: {
          artType: "race-collision",
          title: "2. Both pass the 'if' check",
          subtitle: "Both see credits = 1",
          pill: "Race condition gap!"
        },
        arrow2: { top: "Runs twice!", bottom: "Double side-effect" },
        stage3: {
          artType: "crash-flame",
          title: "3. Duplicate rows / charges",
          subtitle: "2 items created or charged",
          pill: "Data out of sync"
        }
      },
      diagramFixed: {
        banner: "How a button lock + one-time receipt ID blocks duplicates:",
        stage1: {
          artType: "browser-happy",
          title: "1. Button locks on click 1",
          subtitle: "Shows 'Saving...' + Receipt #A9",
          pill: "Idempotency key #A9"
        },
        arrow1: { top: "Receipt #A9", bottom: "Safe even if retried" },
        stage2: {
          artType: "shield-lock",
          title: "2. Server checks Receipt #A9",
          subtitle: "Runs in 1 locked DB step",
          pill: "Ignores duplicate retries"
        },
        arrow2: { top: "Runs exactly 1x", bottom: "Returns saved receipt" },
        stage3: {
          artType: "db-clean",
          title: "3. Zero duplicates ever",
          subtitle: "1 project / 1 charge only",
          pill: "Stripe-grade safety"
        }
      },
      badCodeTitle: "Fragile code (Checks in Python, waits, then saves—allowing 2 clicks through)",
      badCode:
        "# ❌ Click 1 and Click 2 BOTH read credits=1 at the same millisecond!\n" +
        "credits = db.get_credits(user_id)\n" +
        "if credits > 0:\n" +
        "    send_gift_card(user_id)          # ❌ Sends TWO gift cards!\n" +
        "    db.save_credits(user_id, credits - 1)",
      goodCodeTitle: "Fixed code (One-time receipt check + single locked database update)",
      goodCode:
        "# ✅ 1. If we already saw this receipt ID, don't run it again:\n" +
        "if cache.already_used(receipt_id):\n" +
        "    return cache.get_saved_result(receipt_id)\n\n" +
        "# ✅ 2. Check and subtract in ONE locked database step:\n" +
        "row = db.run('UPDATE users SET credits = credits - 1 WHERE id = %s AND credits > 0', (user_id,))",
      video: {
        title: "Video: Race Conditions & Idempotency Explained in Plain English",
        channel: "YouTube · Practical Backend Engineering",
        duration: "7 min watch",
        whyWatch: "Walks through a real double-click bug in slow motion and shows how a one-time receipt ID (Idempotency Key) stops it.",
        url: "https://www.youtube.com/results?search_query=idempotency+and+race+conditions+explained+simply"
      },
      guide: {
        title: "Stripe Engineering: How We Prevent Double Charges with Idempotency",
        source: "Stripe Engineering Blog",
        whyRead: "The gold-standard, easy-to-read explanation of how one-time receipt IDs make retries safe.",
        url: "https://stripe.com/blog/idempotency"
      }
    },
    {
      id: "bp-security-idor",
      number: "4",
      shortPill: "4. URL tampering & leaked secret keys",
      icon: "gpp_bad",
      categoryBadge: "Security & privacy",
      sourceBadge: "Stanford AI Security Study",
      whatCouldBreakTitle: "Someone changes a number in the URL to see private data—or bots steal your API key",
      everydayAnalogy:
        "Imagine a hotel where anyone can walk up to Room 105, say 'I am the guest in Room 105' without showing an ID card, and the door unlocks—or taping your personal credit card to the front window.",
      whatUserSees:
        "A curious user changes `?note_id=104` to `?note_id=105` in their browser address bar and sees another person's private notes—or you wake up to an email saying bots ran up $1,500 on your leaked OpenAI/Gemini key.",
      whyItBreaksPlain:
        "A famous Stanford study found that AI coding assistants frequently write code that 'makes the button work' by trusting whatever `user_id` the browser sends, without checking on the server if that person is actually logged in as that user. And if you paste an `API_KEY` directly into a frontend file or push it to GitHub, automated bots find it in under 60 seconds.",
      jargonDecoder: [
        {
          term: "IDOR (Changing an ID in the URL)",
          meaning: "'Insecure Direct Object Reference'—a fancy phrase that simply means: forgetting to check if the logged-in user actually owns item `#105` before showing or deleting it."
        },
        {
          term: "SQL Injection (Sneaking commands into a text box)",
          meaning: "When code glues raw user text directly into a database command (`f\"... WHERE id='{input}'\"`), letting a hacker type special quote marks to trick the database."
        },
        {
          term: "Environment Variables (`.env` file)",
          meaning: "A private vault file on your computer/server that holds secret API keys so they are never written inside your code or uploaded to GitHub."
        }
      ],
      howToFixTitle: "Verify the logged-in user on the server, use `%s` placeholders, and keep keys in `.env`",
      howToFixSteps: [
        "1. Never trust a `user_id` sent from the browser: Always check the verified login session (`session_user.id`) on your server.",
        "2. Never glue variables into SQL with `f\"...\"`: Always use safe placeholders (`WHERE id = %s AND owner_id = %s`) so user text can never trick the database.",
        "3. Keep secret keys in `.env` + `.gitignore`: Never put secret API keys in browser JavaScript or commit them to GitHub."
      ],
      aiPromptToCopy:
        "Audit my routes for security: 1) verify the logged-in session user owns any record being read/edited (prevent IDOR), 2) replace any f-string SQL with parameterized queries, and 3) confirm zero API keys are in frontend code.",
      diagramBroken: {
        banner: "What happens when the server trusts the URL without checking ID:",
        stage1: {
          artType: "hacker-url",
          title: "1. Someone edits the URL",
          subtitle: "Changes ?id=104 -> ?id=105",
          pill: "Or bots scan GitHub for keys"
        },
        arrow1: { top: "Fakes user_id", bottom: "No server ID check!" },
        stage2: {
          artType: "open-door",
          title: "2. Server blindly trusts URL",
          subtitle: "Glues raw text into SQL",
          pill: "No ownership check"
        },
        arrow2: { top: "Private data leaked!", bottom: "Or $1,500 bot bill" },
        stage3: {
          artType: "crash-flame",
          title: "3. Other users' data exposed",
          subtitle: "Anyone can read/delete #105",
          pill: "Security breach"
        }
      },
      diagramFixed: {
        banner: "How a server badge check + .env vault locks down your app:",
        stage1: {
          artType: "hacker-url",
          title: "1. Someone tries ?id=105",
          subtitle: "Requests another user's note",
          pill: "Untrusted browser input"
        },
        arrow1: { top: "Server checks badge", bottom: "Who is logged in?" },
        stage2: {
          artType: "shield-lock",
          title: "2. Server verifies owner",
          subtitle: "Requires owner == session.id",
          pill: "Safe %s SQL placeholders"
        },
        arrow2: { top: "403 Access Denied!", bottom: "Blocks unauthorized request" },
        stage3: {
          artType: "db-clean",
          title: "3. Private data stays safe",
          subtitle: "Keys locked in server .env",
          pill: "Verified & protected"
        }
      },
      badCodeTitle: "Fragile code (Trusts whatever user_id the browser sends + glues raw SQL)",
      badCode:
        "# ❌ Anyone can pass someone else's user_id in the URL!\n" +
        "# ❌ Plus f-string SQL lets attackers inject database commands:\n" +
        "@app.delete('/api/note')\n" +
        "def delete_note(note_id: str, user_id: str):\n" +
        "    db.run(f\"DELETE FROM notes WHERE id='{note_id}' AND owner='{user_id}'\")",
      goodCodeTitle: "Fixed code (Checks verified login session on server + safe %s placeholders)",
      goodCode:
        "# ✅ 1. Gets user identity from the verified server login session\n" +
        "# ✅ 2. Uses %s placeholders so user text can never trick SQL:\n" +
        "@app.delete('/api/note')\n" +
        "def delete_note(note_id: int, current_user = Depends(get_logged_in_user)):\n" +
        "    db.run('DELETE FROM notes WHERE id = %s AND owner_id = %s', (note_id, current_user.id))",
      video: {
        title: "Video: Web Security in 10 Minutes (IDOR, SQL Injection & API Keys)",
        channel: "YouTube · Fireship / Web Security Visualized",
        duration: "9 min watch",
        whyWatch: "Fast, visual tour of the 3 mistakes AI code makes most often (trusting browser IDs, raw SQL strings, and exposed API keys) and how to block them.",
        url: "https://www.youtube.com/results?search_query=idor+and+sql+injection+explained+simply+web+security"
      },
      guide: {
        title: "Stanford Study: Why Developers Write More Insecure Code with AI Assistants",
        source: "Stanford ACM CCS Research",
        whyRead: "Eye-opening study showing why you should always ask AI to double-check permissions and SQL queries after generating a feature.",
        url: "https://dl.acm.org/doi/10.1145/3576915.3623157"
      }
    },
    {
      id: "bp-agent-drift",
      number: "5",
      shortPill: "5. AI agent drifts off course",
      icon: "psychology_alt",
      categoryBadge: "AI agents & loops",
      sourceBadge: "Cognition & Anthropic",
      whatCouldBreakTitle: "An AI agent takes 10 steps in a row without checking its work and snowballs off course",
      everydayAnalogy:
        "Imagine playing a 10-person game of 'Telephone' where each person whispers a summary to the next person without ever looking at the original recipe—by Step 10, the cake recipe has turned into lawnmower instructions.",
      whatUserSees:
        "Your multi-step AI workflow starts great on Step 1, but by Step 6 it edits the wrong file, forgets your instructions, invents fake data, or gets stuck repeating the same mistake.",
      whyItBreaksPlain:
        "Here is the math discovered by Cognition (makers of Devin) and Anthropic: even if an AI step is **95% accurate**, running 10 unverified steps in a row means accuracy drops to **$0.95^{10} = 59\\%$** (it fails almost half the time!). Worse, when you split work across multiple 'sub-agents' that only pass short summaries to each other, they lose key details.",
      jargonDecoder: [
        {
          term: "Compounding Error (The Telephone-game math)",
          meaning: "When small 5% mistakes multiply across 10 steps ($0.95^{10} = 59\\%$) because nothing checked whether Step 2 was right before starting Step 3."
        },
        {
          term: "Context Rot (Cluttered AI memory)",
          meaning: "When an AI's conversation history gets stuffed with 50 pages of old failed tries and contradictory notes, making the AI confused."
        },
        {
          term: "Evaluator Gate (Automatic check between steps)",
          meaning: "Running a real code check (like `pytest` or a form checker) after each AI step so mistakes get caught and fixed immediately."
        }
      ],
      howToFixTitle: "Check the AI's work with an automatic test after every step before moving on",
      howToFixSteps: [
        "1. Put a real check between steps: After the AI writes code or data, run an automatic test (`pytest` or a schema check) before letting it take the next step.",
        "2. Don't play Telephone with blind sub-agents: Follow Cognition's rule—keep one clear shared record of the original goal and test results.",
        "3. Feed the exact error back if a test fails: If the test fails, give the AI the bottom line of the error receipt so it fixes the exact bug."
      ],
      aiPromptToCopy:
        "Instead of running 5 unverified AI steps in a row, add a deterministic verification check (like a pytest check or schema validator) after each step before continuing.",
      diagramBroken: {
        banner: "What happens when AI steps play 'Telephone' without checks:",
        stage1: {
          artType: "agent-chain",
          title: "1. Agent 1 -> Agent 2 -> Agent 3",
          subtitle: "Passes vague summaries",
          pill: "Forgets original rules"
        },
        arrow1: { top: "95% x 95% x 95%...", bottom: "Errors multiply!" },
        stage2: {
          artType: "loop-hammer",
          title: "2. Nobody checks Step 2",
          subtitle: "Builds on top of a mistake",
          pill: "Context fills with noise"
        },
        arrow2: { top: "41% failure by Step 10", bottom: "Drifts off course" },
        stage3: {
          artType: "crash-flame",
          title: "3. Wrong output shipped",
          subtitle: "Hallucinates or loops",
          pill: "No test gate caught it"
        }
      },
      diagramFixed: {
        banner: "How an automatic check after each step keeps the agent on track:",
        stage1: {
          artType: "browser-happy",
          title: "1. AI drafts 1 small step",
          subtitle: "Sees clear goal & rules",
          pill: "Focused single context"
        },
        arrow1: { top: "Check work!", bottom: "Runs pytest / check" },
        stage2: {
          artType: "shield-lock",
          title: "2. Automatic test gate",
          subtitle: "Catches any slip in 1 second",
          pill: "Retries with exact error"
        },
        arrow2: { top: "100% verified step", bottom: "Moves to next step" },
        stage3: {
          artType: "db-clean",
          title: "3. Stays on track to the end",
          subtitle: "Every step proved it works",
          pill: "Anthropic & Cognition loop"
        }
      },
      badCodeTitle: "Fragile code (Blind multi-agent Telephone game with zero checks)",
      badCode:
        "# ❌ Each agent passes a vague summary without running a single test:\n" +
        "plan = planner_agent.run(user_goal)\n" +
        "code = coder_agent.run(plan)       # Doesn't see original rules!\n" +
        "deploy_to_production(code)         # ❌ Ships without testing!",
      goodCodeTitle: "Fixed code (Draft -> Run automatic test -> Fix if needed)",
      goodCode:
        "# ✅ After the AI drafts a change, run a real test check immediately:\n" +
        "for attempt in range(3):\n" +
        "    draft = agent.write_code(goal, error_feedback)\n" +
        "    test_result = run_pytest(draft)   # ✅ Real code check!\n" +
        "    if test_result.passed:\n" +
        "        return open_draft_pr(draft)   # Ready for human review!\n" +
        "    error_feedback = test_result.last_error_line",
      video: {
        title: "Video: How Anthropic & Cognition Build Reliable AI Agents (No Hype)",
        channel: "YouTube · AI Engineering Breakdown",
        duration: "10 min watch",
        whyWatch: "Explains visually why chaining lots of blind AI agents fails—and how adding a simple test check loop makes agents dramatically more reliable.",
        url: "https://www.youtube.com/results?search_query=anthropic+building+effective+agents+explained"
      },
      guide: {
        title: "Cognition (Devin): Why You Shouldn't Build Blind Multi-Agents",
        source: "Cognition Engineering Blog",
        whyRead: "One of the clearest real-world engineering posts on how to keep AI agents from losing context or drifting off course.",
        url: "https://cognition.ai/blog/dont-build-multi-agents"
      }
    },
    {
      id: "bp-silent-failure",
      number: "6",
      shortPill: "6. 'Saved!' lie (Silent failures)",
      icon: "notifications_off",
      categoryBadge: "Catching bugs early",
      sourceBadge: "OpenAI & Sentry pattern",
      whatCouldBreakTitle: "A feature fails behind the scenes, hides the error, and tells the user 'Saved!'",
      everydayAnalogy:
        "Imagine a mail carrier who finds your mailbox locked, throws your letter into the bushes, and texts you 'Delivered safely!'—so you never know the letter is missing.",
      whatUserSees:
        "The user clicks 'Save Settings' or 'Send Report', sees a green 'Saved!' checkmark, closes their laptop, and discovers the next day that all their work vanished.",
      whyItBreaksPlain:
        "The single worst habit of AI coding tools is writing `except Exception: pass` (in Python) or `catch (e) {}` (in JavaScript). That tells the computer: 'If saving to the database fails, throw the error in the trash, tell nobody, and pretend everything worked!'",
      jargonDecoder: [
        {
          term: "Silent Failure (`except: pass`)",
          meaning: "When code catches an error and throws it away without logging it or telling the user, making bugs invisible."
        },
        {
          term: "Stack Trace (The error receipt)",
          meaning: "The 10-line error printout when code crashes. **Golden rule:** Always read the **very last line** first—it tells you the exact file, line number, and reason!"
        },
        {
          term: "Error Tracker / Smoke Alarm (Sentry)",
          meaning: "A free tool (like Sentry or Logfire) that acts like a smoke alarm for your live app—pinging you with the exact error line the moment a user hits a bug."
        }
      ],
      howToFixTitle: "Never hide errors with `pass`: tell the user honestly and trigger a smoke alarm",
      howToFixSteps: [
        "1. Search your code for `except:` followed by `pass` (or empty `catch {}`) and delete that habit immediately.",
        "2. Tell the user the truth: If a save fails, show 'Could not save—please try again' so they don't lose their work.",
        "3. Connect a free 'Smoke Alarm' (like Sentry): Whenever an unexpected error happens, automatically record the error receipt (`stack trace`) so you can fix it in 2 minutes."
      ],
      aiPromptToCopy:
        "Search my entire codebase for silent error swallowing (`except: pass` or empty `catch (e) {}`). Make sure every error logs the stack trace and returns an honest error status to the UI.",
      diagramBroken: {
        banner: "What happens when code hides errors with 'except: pass':",
        stage1: {
          artType: "browser-happy",
          title: "1. User clicks 'Save'",
          subtitle: "Screen says 'Saved! ✅'",
          pill: "Fake success message!"
        },
        arrow1: { top: "Database fails", bottom: "Disk/network hiccup" },
        stage2: {
          artType: "trash-swallow",
          title: "2. Code runs 'except: pass'",
          subtitle: "Throws error in the trash",
          pill: "Zero logs recorded"
        },
        arrow2: { top: "Data is lost!", bottom: "Nobody is alerted" },
        stage3: {
          artType: "crash-flame",
          title: "3. User's work vanishes",
          subtitle: "You have no idea it's broken",
          pill: "Worst kind of bug"
        }
      },
      diagramFixed: {
        banner: "How honest errors + a 'Smoke Alarm' catch bugs in seconds:",
        stage1: {
          artType: "browser-error",
          title: "1. Honest UI message",
          subtitle: "'Could not save—retry'",
          pill: "Keeps user's draft safe"
        },
        arrow1: { top: "Captures error receipt", bottom: "Line number + reason" },
        stage2: {
          artType: "radar-alarm",
          title: "2. Smoke alarm fires",
          subtitle: "Sentry / Breakage agent",
          pill: "Spots exact broken line"
        },
        arrow2: { top: "Stages a fix PR", bottom: "Tested in 2 minutes" },
        stage3: {
          artType: "db-clean",
          title: "3. Bug fixed before others hit it",
          subtitle: "Full visibility & trust",
          pill: "Zero silent data loss"
        }
      },
      badCodeTitle: "Fragile code (Throws the error in the trash & lies that it worked)",
      badCode:
        "# ❌ The worst AI coding habit: hiding errors with 'pass'!\n" +
        "try:\n" +
        "    db.save(user_report)\n" +
        "except Exception:\n" +
        "    pass  # ❌ Swallows the crash! Nothing was saved!\n" +
        "return {'status': 'Saved successfully!'}",
      goodCodeTitle: "Fixed code (Records the error receipt & tells the user honestly)",
      goodCode:
        "# ✅ 1. Sends the error receipt to your smoke alarm (Sentry/logs)\n" +
        "# ✅ 2. Tells the browser honestly so the user doesn't lose their draft:\n" +
        "try:\n" +
        "    db.save(user_report)\n" +
        "    return {'status': 'Saved!'}\n" +
        "except Exception as err:\n" +
        "    sentry_sdk.capture_exception(err)  # Alerts your smoke alarm!\n" +
        "    raise HTTPException(500, 'Could not save—please try again.')",
      video: {
        title: "Video: How to Read Error Stack Traces & Catch Bugs Automatically",
        channel: "YouTube · Tech With Tim / Python Debugging",
        duration: "8 min watch",
        whyWatch: "Shows how to read any Python error from the bottom line up in 10 seconds, and why you should never write 'except: pass'.",
        url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ"
      },
      guide: {
        title: "Anthropic Guide: Claude Code Test-Driven Debugging Workflows",
        source: "Anthropic Engineering",
        whyRead: "Shows how to paste an error receipt into your coding agent so it writes a test and fixes the bug automatically.",
        url: "https://www.anthropic.com/engineering/claude-code-best-practices"
      }
    }
  ];

  var SCALE_USER_STAGES = [
    {
      id: "scale-1",
      pillLabel: "1 user (Just you on your laptop)",
      badge: "Stage 1 · The 'It worked on my laptop!' illusion",
      badgeClass: "badge-info",
      icon: "laptop_mac",
      headline: "1 User (Just you testing on your laptop): Why every prototype looks perfect at first",
      plainSummary:
        "When you are the only person clicking around on your own laptop (`localhost`), almost any code looks fast and bug-free—even if it has hidden traps.",
      whatCouldBreak: [
        "Zero travel time hides slow code: Your browser and server are on the same computer, so even 100 sloppy database trips finish in a blink.",
        "You only type 'polite' inputs: You type your own name cleanly—you don't leave boxes blank, paste 50-page PDFs, or click buttons 5 times in a row.",
        "Nobody else is logged in: If the AI stored your name in a single shared variable on the server, you won't notice because nobody else is visiting yet."
      ],
      howToFix: [
        "Test 'weird' inputs before celebrating: Try submitting an empty form, clicking 'Submit' twice fast, and refreshing the page mid-load.",
        "Check your `.gitignore` before your first GitHub push: Make sure `.env` (your secret keys) is ignored so keys never leave your laptop.",
        "Write 3 tiny automatic tests (`pytest`): Test your main feature with a normal input, an empty input, and a duplicate click."
      ],
      video: {
        title: "Video: Why 'It Works on My Machine' Breaks in Production",
        url: "https://www.youtube.com/watch?v=Ru54dxzCyD0",
        note: "Clear visual walkthrough of what changes the moment your app leaves your laptop."
      }
    },
    {
      id: "scale-50",
      pillLabel: "50 users (Sharing with your team)",
      badge: "Stage 2 · Where fragile prototypes first crack",
      badgeClass: "badge-warning",
      icon: "group",
      headline: "50 Users (Sharing with your team or beta testers): The first 4 cracks that appear",
      plainSummary:
        "The moment 20 to 50 real teammates open your link at the same time on different Wi-Fi speeds, four everyday problems surface immediately:",
      whatCouldBreak: [
        "1. Blank optional fields crash the page: A teammate leaves a 'Notes' box blank, and Python crashes because it didn't expect an empty value (`None`).",
        "2. Double-clicks on slow Wi-Fi: Someone on train Wi-Fi clicks 'Submit' twice and creates two duplicate items.",
        "3. AI calls take 15+ seconds at peak hours: Without a 10-second time limit, the button spins forever.",
        "4. Mixed-up user screens: If user data was saved in a global server variable instead of their login session, User B suddenly sees User A's work!"
      ],
      howToFix: [
        "Use `.get('field', '')` for optional inputs: So an empty box gives a safe default blank string instead of crashing.",
        "Disable submit buttons while loading: Lock the button on the first click and show 'Saving...'.",
        "Add a 10-second timeout (`timeout=10`) to every AI or API call.",
        "Never store current user info in a global variable: Always read the user from the request's login session."
      ],
      video: {
        title: "Video: Python in 2026 — Writing Code That Doesn't Crash on Real Inputs",
        url: "https://www.youtube.com/watch?v=Kuur0L7E9rQ",
        note: "Explains how to spot and fix the exact input and state bugs that appear when real people test your app."
      }
    },
    {
      id: "scale-5000",
      pillLabel: "5,000+ users (Viral post & open web)",
      badge: "Stage 3 · Open internet & traffic spikes",
      badgeClass: "badge-danger",
      icon: "public",
      headline: "5,000+ Users (Going viral or sharing publicly): Protecting your database and wallet",
      plainSummary:
        "When your link gets shared widely—or automated internet bots discover your public URL—traffic jumps from 1 click a minute to 500 clicks a second.",
      whatCouldBreak: [
        "1. Database runs out of phone lines (`503 Service Unavailable`): Opening a brand-new database connection on every click crashes Postgres at ~100 simultaneous visitors.",
        "2. Server runs out of memory (`Out of Memory`): Loading all 50,000 rows (`SELECT *`) instead of 20 rows at a time crashes the server.",
        "3. Surprise $1,500 overnight AI bill: Automated bots call your public AI button 10,000 times overnight if there is no per-user speed limit."
      ],
      howToFix: [
        "Turn on your Database Connection Pooler: Use the 'Pooled connection URL' in Supabase/Neon so thousands of users share connections safely.",
        "Add `LIMIT 20` to every list query: Never fetch an entire database table without a limit.",
        "Set a hard monthly spend cap ($10 or $20) in your OpenAI / Google AI / Anthropic billing settings + add a rate limit (e.g., max 10 clicks per minute per user)."
      ],
      video: {
        title: "Video: System Design — How Apps Scale from 1 User to Millions",
        url: "https://www.youtube.com/results?search_query=bytebytego+scale+from+zero+to+millions+of+users",
        note: "Step-by-step visual animation showing connection pooling, pagination, and rate limiting as traffic grows."
      }
    }
  ];

  var SMOKE_ALARM_STAGES = [
    {
      step: "Step 1 · Smoke alarm",
      shortTitle: "1. Catch the crash automatically",
      title: "Install a 'Smoke Alarm' (Sentry / Logfire) + a 10-minute robot check",
      icon: "sensors",
      badgeClass: "badge-info",
      whatCouldBreak: "Without a smoke alarm, your app can be completely broken for 3 days and you won't know until an annoyed user emails you a screenshot.",
      howToFix: "Add 3 lines of Sentry or Logfire setup to your app so any crash immediately sends you the error receipt—and set up a scheduled 'synthetic check' (a tiny Playwright script that visits your live URL every 10 minutes to verify the home page and login button still work)."
    },
    {
      step: "Step 2 · Pinpoint",
      shortTitle: "2. Find the exact broken line",
      title: "Give your coding agent the bottom of the error receipt + recent changes",
      icon: "manage_search",
      badgeClass: "badge-secondary",
      whatCouldBreak: "If you just tell an AI agent 'the site is broken, fix it', it will guess randomly and often break two other files.",
      howToFix: "Follow Cognition's context rule: automatically hand the agent (1) the bottom line of the error receipt (`Stack Trace` showing the exact file and line number) and (2) `git log -p -n 3` (the exact lines changed in your last 3 saves). Now the agent sees the exact culprit immediately."
    },
    {
      step: "Step 3 · Test first",
      shortTitle: "3. Reproduce & test in a sandbox",
      title: "Write a failing test first, then fix the code until the test turns green",
      icon: "science",
      badgeClass: "badge-warning",
      whatCouldBreak: "If an AI agent edits code without a test, you have no proof the bug is actually fixed—or that the fix didn't break something else.",
      howToFix: "Follow Anthropic & Google DeepMind's gold-standard loop: instruct the agent to FIRST write a 5-line `pytest` test that triggers the exact crash, and THEN edit the code until that test (and all existing tests) pass in a safe sandbox."
    },
    {
      step: "Step 4 · Human approval",
      shortTitle: "4. Human approves the draft fix",
      title: "Open a Draft Pull Request for you to review (or click 'Rollback' in 1 second)",
      icon: "verified_user",
      badgeClass: "badge-success",
      whatCouldBreak: "Letting an autonomous robot push code straight to your live website (`main` branch) while you are asleep can cause a loop of new bugs.",
      howToFix: "Never let a breakage agent push straight to `main`. Have it open a GitHub Pull Request showing the green passing test and the 4 lines it changed—so a human can review and click 'Merge' (or click 'Rollback' in Vercel/Render to restore yesterday's working version in 5 seconds)."
    }
  ];

  window.ReliabilityBreakagesData = {
    BREAKAGE_SCENARIOS: BREAKAGE_SCENARIOS,
    SCALE_USER_STAGES: SCALE_USER_STAGES,
    SMOKE_ALARM_STAGES: SMOKE_ALARM_STAGES
  };
})();
