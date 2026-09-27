// Deployed Eng Pipeline — Step 5 Data: Simple, Visual "What Could Break & How to Fix It"
// Zero jargon, everyday analogies, side-by-side visual diagram steps, short 4-line code comparisons, and paired videos.

(function () {
  var SIMPLE_BREAKAGES = [
    {
      id: "break-1-ai",
      num: "1",
      tabLabel: "1. AI takes too long or replies with chatty text",
      icon: "timer_off",
      headline: "Problem 1: The AI takes too long—or replies with a chatty paragraph instead of data",
      analogy:
        "Like asking a cashier for your receipt total, and they either stare at you in silence for 5 minutes or hand you a poem about money.",
      whatBreaksBullets: [
        "On screen: The 'Generate' button spins forever, or the page suddenly crashes.",
        "Why it happens: AI services sometimes lag during busy hours. Or your code expects the word 'high', and the AI replies 'Sure! Here is the priority: High!'"
      ],
      howToFixBullets: [
        "1. Set a 10-second stopwatch (`timeout=10`) so your app never waits forever.",
        "2. Give the AI a strict fill-in-the-blank form (`Schema`) so it can only return the exact fields you asked for.",
        "3. Add a backup plan (`try / except`) so if the AI is down, the user sees a polite message instead of a crash."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. User clicks 'Analyze'",
        step2: "2. AI hangs 60s or sends chatty text",
        step3: "3. App freezes or crashes (500 Error)",
        artType: "hang"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. User clicks 'Analyze'",
        step2: "2. 10s stopwatch + strict form check",
        step3: "3. Clean answer in <10s (or safe backup)",
        artType: "stopwatch"
      },
      badCode:
        "# ❌ Waits forever & crashes on extra words:\n" +
        "res = requests.post(AI_URL, json=prompt)\n" +
        "data = json.loads(res.text)\n" +
        "return data['priority']",
      goodCode:
        "# ✅ 10s time limit + strict form + backup plan:\n" +
        "try:\n" +
        "    return call_ai(prompt, schema=Form, timeout=10)\n" +
        "except Exception:\n" +
        "    return {'priority': 'medium'}",
      jargonPills: [
        { word: "Timeout", plain: "A 10-second stopwatch so code never waits forever" },
        { word: "Schema / Pydantic", plain: "A strict checklist form the AI must fill out" }
      ],
      aiPrompt:
        "Add a 10-second timeout, a strict JSON/Pydantic response schema, and a try/except fallback to every AI or API call in this file.",
      videoTitle: "Watch 6-min video: Making AI outputs reliable with strict forms (Schemas)",
      videoUrl: "https://www.youtube.com/results?search_query=pydantic+structured+outputs+llm+explained+simply",
      guideTitle: "Read guide: Anthropic's 'Building Effective Agents'",
      guideUrl: "https://www.anthropic.com/research/building-effective-agents"
    },
    {
      id: "break-2-crowd",
      num: "2",
      tabLabel: "2. Page freezes when 50+ people visit",
      icon: "groups",
      headline: "Problem 2: It felt instant on your laptop, but freezes when 50+ people open it at once",
      analogy:
        "Like driving to the grocery store 100 separate times to buy 100 items one by one—instead of putting 20 items in one shopping cart.",
      whatBreaksBullets: [
        "On screen: The page takes 15 seconds to load, then shows '503 Service Unavailable'.",
        "Why it happens: The code fetches all 50,000 database rows at once, or asks the database 100 separate questions inside a loop."
      ],
      howToFixBullets: [
        "1. Load 20 items at a time (`LIMIT 20`) instead of the entire database.",
        "2. Never put a database lookup inside a `for` loop—ask for the list in 1 combined trip (`JOIN`).",
        "3. Turn on your database's 'Connection Pooler' (in Supabase/Neon) so all visitors share open phone lines."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. 50 people open your page",
        step2: "2. Code runs 100 DB trips in a loop",
        step3: "3. Database runs out of lines & freezes",
        artType: "loop-jam"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. 5,000 people open your page",
        step2: "2. Shared pool + 1 trip for 20 items",
        step3: "3. Loads in 2 milliseconds for everyone",
        artType: "batch-fast"
      },
      badCode:
        "# ❌ Loads ALL rows & queries inside a loop:\n" +
        "posts = db.run('SELECT * FROM posts')\n" +
        "for p in posts:\n" +
        "    p.user = db.run('SELECT name WHERE id=' + p.uid)",
      goodCode:
        "# ✅ 1 combined trip + only 20 items at a time:\n" +
        "posts = db.run('''\n" +
        "  SELECT posts.title, users.name\n" +
        "  FROM posts JOIN users ON posts.uid = users.id\n" +
        "  LIMIT 20\n" +
        "''')",
      jargonPills: [
        { word: "N+1 Query Bug", plain: "Asking the database 100 separate questions inside a loop" },
        { word: "Connection Pool", plain: "Sharing 10 reusable phone lines to the database" },
        { word: "Pagination (LIMIT 20)", plain: "Loading 20 items per page instead of 50,000" }
      ],
      aiPrompt:
        "Check my database queries: remove any queries inside for-loops (use a single JOIN instead), add LIMIT 20 pagination, and use a pooled database connection.",
      videoTitle: "Watch 5-min video: Why 'N+1 loops' freeze databases (Animated)",
      videoUrl: "https://www.youtube.com/results?search_query=n%2B1+query+problem+explained+visually",
      guideTitle: "Read guide: How Database Connection Pooling Works",
      guideUrl: "https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler"
    },
    {
      id: "break-3-doubleclick",
      num: "3",
      tabLabel: "3. Double-clicking creates duplicates",
      icon: "ads_click",
      headline: "Problem 3: Someone taps 'Submit' or 'Pay' twice on slow Wi-Fi and triggers it twice",
      analogy:
        "Like pressing an elevator button twice because it didn't light up—and getting charged twice for the ride.",
      whatBreaksBullets: [
        "On screen: A user on slow Wi-Fi clicks 'Create' or 'Pay' twice and gets two duplicate projects or a double charge.",
        "Why it happens: Both clicks arrive at the server at the same millisecond and both pass the check before either one marks the task 'Done'."
      ],
      howToFixBullets: [
        "1. Lock the button on the first click (`disabled = true`) and change the label to 'Saving...'.",
        "2. Attach a unique one-time receipt number (`idempotency_key`) to the click so if the server sees the same receipt twice, it ignores the duplicate.",
        "3. Update the database in one locked step."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. User taps 'Submit' twice fast",
        step2: "2. Both clicks slip through at once",
        step3: "3. Creates 2 duplicate rows / charges 2x",
        artType: "double-tap"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. Button locks ('Saving...') + Receipt #9",
        step2: "2. Server checks if Receipt #9 already ran",
        step3: "3. Runs exactly once (zero duplicates)",
        artType: "receipt-shield"
      },
      badCode:
        "# ❌ Two fast clicks both see 'not_paid' at once:\n" +
        "if user.status == 'not_paid':\n" +
        "    charge_card(user)   # ❌ Runs twice!\n" +
        "    user.status = 'paid'",
      goodCode:
        "# ✅ One-time receipt ID guarantees it runs once:\n" +
        "if already_processed(receipt_id):\n" +
        "    return get_saved_receipt(receipt_id)\n" +
        "charge_card_once(user, receipt_id)",
      jargonPills: [
        { word: "Race Condition", plain: "Two clicks arriving at the exact same millisecond and colliding" },
        { word: "Idempotency Key", plain: "A one-time receipt number so retries never run twice" }
      ],
      aiPrompt:
        "Protect this button and endpoint from double-clicks: disable the button while loading in the UI, and check a unique idempotency key on the server.",
      videoTitle: "Watch 6-min video: Double-clicks, Race Conditions & Idempotency",
      videoUrl: "https://www.youtube.com/results?search_query=idempotency+key+stripe+explained+simply",
      guideTitle: "Read guide: Stripe's Plain-English Guide to Idempotency",
      guideUrl: "https://stripe.com/blog/idempotency"
    },
    {
      id: "break-4-security",
      num: "4",
      tabLabel: "4. Changing a URL number leaks private data",
      icon: "lock_open",
      headline: "Problem 4: Someone changes `?id=104` to `?id=105` in the URL bar and sees private data",
      analogy:
        "Like a hotel front desk handing out the key to Room 105 to anyone who asks for 'Room 105' without checking their photo ID.",
      whatBreaksBullets: [
        "On screen: Changing a number in the browser address bar shows another person's private notes—or bots steal your API key from GitHub.",
        "Why it happens: AI assistants focus on making features work quickly and often forget to check on the server whether the logged-in user actually owns item #105."
      ],
      howToFixBullets: [
        "1. Always check who is logged in on the server (`current_user.id`)—never trust a `user_id` typed in the URL.",
        "2. Use safe `%s` placeholders in database queries (never glue raw user text into SQL strings).",
        "3. Keep secret API keys in a private `.env` file on the server (never in browser code or on GitHub)."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. Visitor types ?note_id=105 in URL",
        step2: "2. Server fetches #105 without checking ID",
        step3: "3. Leaks another user's private note!",
        artType: "open-lock"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. Visitor types ?note_id=105 in URL",
        step2: "2. Server checks: Does logged-in user own #105?",
        step3: "3. Blocks access (403 Forbidden) & keeps data safe",
        artType: "locked-vault"
      },
      badCode:
        "# ❌ Trusts any note_id & glues text into SQL:\n" +
        "@app.get('/api/note')\n" +
        "def get_note(note_id: str):\n" +
        "    return db.run(f'SELECT * FROM notes WHERE id={note_id}')",
      goodCode:
        "# ✅ Verifies logged-in owner + uses safe %s placeholder:\n" +
        "@app.get('/api/note')\n" +
        "def get_note(note_id: int, user = Depends(logged_in_user)):\n" +
        "    return db.run('SELECT * FROM notes WHERE id=%s AND owner=%s', (note_id, user.id))",
      jargonPills: [
        { word: "IDOR (Insecure Direct Object Reference)", plain: "Forgetting to check if the logged-in user owns item #105" },
        { word: "SQL Injection", plain: "When hackers sneak commands into a text box because SQL wasn't using %s placeholders" }
      ],
      aiPrompt:
        "Check my backend routes for security: verify the logged-in session user owns every record being requested, use parameterized SQL queries (%s), and ensure no API keys are in frontend code.",
      videoTitle: "Watch 8-min video: The 3 Security Mistakes AI Code Makes (Visualized)",
      videoUrl: "https://www.youtube.com/results?search_query=idor+and+sql+injection+explained+simply",
      guideTitle: "Read study: Stanford Research on AI Coding Assistants & Security",
      guideUrl: "https://dl.acm.org/doi/10.1145/3576915.3623157"
    },
    {
      id: "break-5-silent",
      num: "5",
      tabLabel: "5. Button says 'Saved!' when saving actually failed",
      icon: "visibility_off",
      headline: "Problem 5: Saving fails behind the scenes, but the code hides the error and says 'Saved!'",
      analogy:
        "Like a mail carrier who drops your letter down a storm drain, tells nobody, and texts you 'Delivered safely!'",
      whatBreaksBullets: [
        "On screen: The user sees a green 'Saved!' message, closes their laptop, and discovers tomorrow that all their work disappeared.",
        "Why it happens: AI coding tools love to write `except: pass`—which tells Python to catch any crash, throw the error in the trash, and pretend it worked."
      ],
      howToFixBullets: [
        "1. Delete `except: pass` (or empty `catch {}`) whenever you see AI write it.",
        "2. Show an honest message ('Could not save—please try again') so the user doesn't lose their draft.",
        "3. Connect a free 'Smoke Alarm' tool (like Sentry) and write a 5-line automatic test (`pytest`) so your coding agent catches bugs before users do."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. Database hiccups while saving",
        step2: "2. 'except: pass' throws error in trash",
        step3: "3. Lies 'Saved! ✅' — user's work is lost",
        artType: "silent-trash"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. Database hiccups while saving",
        step2: "2. Smoke alarm (Sentry) logs exact line",
        step3: "3. UI says 'Retry save' & agent tests a fix",
        artType: "smoke-alarm"
      },
      badCode:
        "# ❌ Hides the crash & lies to the user:\n" +
        "try:\n" +
        "    db.save(report)\n" +
        "except Exception:\n" +
        "    pass  # ❌ Swallows the error silently!\n" +
        "return {'status': 'Saved!'}",
      goodCode:
        "# ✅ Alerts your smoke alarm & tells the truth:\n" +
        "try:\n" +
        "    db.save(report)\n" +
        "    return {'status': 'Saved!'}\n" +
        "except Exception as err:\n" +
        "    sentry.capture(err)  # Alerts you!\n" +
        "    raise Error('Could not save—please retry')",
      jargonPills: [
        { word: "Silent Failure (except: pass)", plain: "Catching an error and throwing it away so nobody knows it broke" },
        { word: "Stack Trace", plain: "The error receipt—always read the VERY LAST line to see the exact broken file & line" }
      ],
      aiPrompt:
        "Search my codebase for silent error swallowing (`except: pass` or empty `catch {}`) and replace them with proper error logging and honest UI error messages.",
      videoTitle: "Watch 7-min video: How to Read Error Messages & Stop Silent Bugs",
      videoUrl: "https://www.youtube.com/watch?v=Kuur0L7E9rQ",
      guideTitle: "Read guide: Anthropic's Test-Driven Agent Debugging Loop",
      guideUrl: "https://www.anthropic.com/engineering/claude-code-best-practices"
    },
    {
      id: "break-6-wallet-keys",
      num: "6",
      tabLabel: "6. Surprise $2,000 AI bill or leaked key in Git",
      icon: "credit_score",
      headline: "Problem 6: Bots or an infinite loop run up a $2,000 overnight AI bill—or a leaked key stays in Git history",
      analogy:
        "Like leaving your company credit card taped to a public coffeeshop table—and thinking that taking the card back tomorrow erases the photos people already snapped of it.",
      whatBreaksBullets: [
        "On screen: You share your live link online, and a bot (or an accidental infinite loop in your code) calls your AI endpoint 50,000 times overnight.",
        "Why deleting a leaked key in a new Git commit fails: Git is a time machine—if you accidentally commit an API key once, deleting the line in a second commit leaves the key visible in Commit #1 forever (where bots scrape it in seconds)."
      ],
      howToFixBullets: [
        "1. Set a hard monthly spend limit ($10–$25) in your AI/cloud billing dashboard and add a Rate Limiter (e.g. max 10 requests/minute per IP).",
        "2. If you ever commit a secret key to Git, immediately Revoke / Rotate (delete and regenerate) the key in the provider dashboard and turn on GitHub Push Protection.",
        "3. Never point your laptop (`localhost`) at your live Production database—use a separate Dev/Preview database for testing so a local test script never wipes real users' data."
      ],
      visualBefore: {
        title: "WITHOUT PROTECTION (What breaks)",
        step1: "1. Bot or infinite loop hits /api/ask 50,000x",
        step2: "2. No rate limit, spend cap, or max_steps",
        step3: "3. Wakes up to a $2,000 overnight AI bill!",
        artType: "wallet-drain"
      },
      visualAfter: {
        title: "WITH THE FIX (How it works)",
        step1: "1. Per-IP Rate Limit (10/min) + max_steps=5",
        step2: "2. Hard $20 billing cap + GitHub Push Protection",
        step3: "3. Bots get blocked (429) & wallet stays safe",
        artType: "wallet-shield"
      },
      badCode:
        "# ❌ No rate limit & infinite agent loop risk:\n" +
        "@app.post('/api/ask')\n" +
        "def ask(q: str):\n" +
        "    while not done: call_paid_ai(q)",
      goodCode:
        "# ✅ Rate-limited (10/min) + hard step ceiling:\n" +
        "@app.post('/api/ask')\n" +
        "@rate_limit('10/minute')\n" +
        "def ask(q: str):\n" +
        "    return run_agent(q, max_steps=5, timeout=10)",
      jargonPills: [
        { word: "Denial-of-Wallet", plain: "When bots or infinite loops spam a paid AI endpoint and drain your budget" },
        { word: "Key Rotation (Revoke)", plain: "Deleting a leaked API key in the provider dashboard and generating a fresh one" },
        { word: "Dev vs. Prod Database", plain: "Using a fake-data sandbox DB on your laptop so tests never wipe real user data" }
      ],
      aiPrompt:
        "Add per-IP rate limiting (e.g. 10 requests/min), a strict max_steps=5 ceiling on any agent loop, and verify no secret keys or production database URLs are hardcoded.",
      videoTitle: "Watch 6-min video: Protecting AI Apps from Runaway Bills & Leaked Keys",
      videoUrl: "https://www.youtube.com/results?search_query=api+rate+limiting+and+leaked+api+keys+github+explained",
      guideTitle: "Read guide: GitHub Secret Scanning & Push Protection",
      guideUrl: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning"
    }
  ];

  window.ReliabilityBreakagesData = {
    SIMPLE_BREAKAGES: SIMPLE_BREAKAGES,
    BREAKAGE_SCENARIOS: SIMPLE_BREAKAGES.map(function (item) {
      return {
        categoryBadge: "Step 7 · Reliability & Code Safety",
        howToFixTitle: item.howToFixBullets[0],
        jargonDecoder: item.jargonPills.map(function (jp) {
          return { term: jp.word, meaning: jp.plain };
        })
      };
    })
  };
})();
