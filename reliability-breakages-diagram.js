// Deployed Eng Pipeline — Step 5: Bad vs. Good Code, Scaling Breakpoints & Breakage-Tracking Agents
// Draws on frontier engineering research from Anthropic, Cognition, OpenAI, Google DeepMind, Stanford & DORA.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SCALE_TIERS = [
    {
      id: "scale-1",
      users: "1 user (You on localhost)",
      badge: "The 'First-Go Illusion'",
      badgeClass: "badge-info",
      icon: "laptop_mac",
      summary: "Why almost any AI-generated prototype looks like it works on your laptop:",
      whatHappens: [
        "0ms network delay: Your browser and server are on the same machine, so slow queries feel instant.",
        "Happy-path inputs: You type clean test data (no empty fields, weird emojis, or 50MB files).",
        "1 at a time: Nobody clicks twice at the exact same millisecond, so race conditions never trigger.",
        "Zero attackers: Nobody opens Chrome DevTools (F12) to steal keys or tamper with URL IDs."
      ],
      watchOut: "Trap: Shipping straight from 'it worked once on my laptop' without testing edge cases or scale."
    },
    {
      id: "scale-50",
      users: "50 concurrent users (Team / Beta launch)",
      badge: "Where fragile code cracks",
      badgeClass: "badge-warning",
      icon: "group",
      summary: "The first 3 things that break when real people use your app at the same time:",
      whatHappens: [
        "Missing keys & None values: A user leaves an optional field blank -> Python crashes with KeyError or TypeError.",
        "Double-clicks & Race Conditions: Slow Wi-Fi makes a user click 'Submit' twice -> duplicate rows or overwritten data.",
        "External AI latency spikes: Gemini/OpenAI takes 18s during peak hours -> synchronous server routes time out (504).",
        "Shared global variables: If you stored user state in a global Python variable (`current_user = ...`), User B sees User A's screen!"
      ],
      watchOut: "Fix: Never store per-user state in global server variables; add try/except, timeouts, and idempotency keys."
    },
    {
      id: "scale-5000",
      users: "5,000+ users & bots (Viral post / Open web)",
      badge: "Production scale test",
      badgeClass: "badge-danger",
      icon: "public",
      summary: "What breaks when your link hits Substack, Hacker News, or automated web scrapers:",
      whatHappens: [
        "Database connection exhaustion (503): Opening a new Postgres connection on every request crashes the DB at ~100 connections.",
        "Unbounded SELECT * queries: Fetching all 50,000 rows instead of 'LIMIT 20' runs your server out of RAM (OOM crash).",
        "Runaway AI API bills ($2,000+ overnight): Automated bots spam your public AI endpoint 1,000 times/minute without rate limits.",
        "IDOR & XSS attacks: Bots scan '/api/user?id=1..9999' to scrape private data or inject <script> tags into inputs."
      ],
      watchOut: "Fix: Use a DB Connection Pooler (Neon/Supabase Pooler), paginate queries (LIMIT 20), and enforce per-IP rate limits."
    }
  ];

  var BREAKPOINT_CARDS = [
    {
      id: "bp-api-llm",
      number: "1",
      title: "Unchecked AI & API calls",
      subtitle: "Happy-path JSON assumptions vs. Schema validation & timeouts",
      sourceBadge: "Anthropic & DeepMind pattern",
      badgeClass: "badge-danger",
      icon: "cloud_off",
      whatBreakageLooksLike: {
        userSees: "The 'Generate' button spins forever, or the page suddenly turns blank / shows '500 Internal Server Error'.",
        logsShow: "requests.exceptions.ReadTimeout  OR  json.decoder.JSONDecodeError: Expecting value: line 1 column 1 (AI returned 'Sure! Here is the JSON: ...' instead of raw JSON)."
      },
      badCodeTitle: "Fragile vibe-coded Python (No timeout, no schema, no fallback)",
      badCode:
        "# ❌ Assumes the API never hangs and AI never adds chatty text:\n" +
        "@app.post('/api/triage')\n" +
        "def triage_ticket(ticket_text):\n" +
        "    resp = requests.post(AI_URL, json={'prompt': ticket_text})\n" +
        "    data = json.loads(resp.json()['text'])  # Crashes if AI adds markdown!\n" +
        "    return {'priority': data['priority']}   # KeyError if field is missing!",
      goodCodeTitle: "Production-grade Python (Timeout + Pydantic Schema + Graceful Fallback)",
      goodCode:
        "# ✅ Enforces a strict Pydantic schema, 10s timeout, and safe fallback:\n" +
        "class TriageSchema(BaseModel):\n" +
        "    priority: Literal['low', 'medium', 'high']\n" +
        "    reason: str\n\n" +
        "@app.post('/api/triage')\n" +
        "def triage_ticket(ticket_text: str):\n" +
        "    try:\n" +
        "        result = call_llm_structured(ticket_text[:2000], schema=TriageSchema, timeout=10)\n" +
        "        return result.model_dump()\n" +
        "    except Exception as err:\n" +
        "        logger.error(f'Triage failed: {err}', exc_info=True)\n" +
        "        return {'priority': 'medium', 'reason': 'Queued for manual review'}",
      whyItMatters: "Both Anthropic ('Building Effective Agents') and Google DeepMind emphasize that LLM outputs are probabilistic: never parse raw chat text with string splitting when you can enforce a strict JSON Schema / Pydantic contract and a hard network timeout."
    },
    {
      id: "bp-scale-db",
      number: "2",
      title: "Scaling users: N+1 loops & DB crashes",
      subtitle: "Fetching the whole database in a loop vs. Connection pooling & pagination",
      sourceBadge: "Scaling 1 -> 10,000 users",
      badgeClass: "badge-warning",
      icon: "database",
      whatBreakageLooksLike: {
        userSees: "Page takes 12 seconds to load with 50 users, then crashes with '503 Service Unavailable' when 200 users visit.",
        logsShow: "psycopg2.OperationalError: FATAL: remaining connection slots are reserved  OR  MemoryError (Server ran out of 512MB RAM loading 100,000 rows)."
      },
      badCodeTitle: "Fragile vibe-coded query (New connection per click + N+1 query loop)",
      badCode:
        "# ❌ Opens a raw connection every click & runs 101 queries for 100 items:\n" +
        "@app.get('/api/feed')\n" +
        "def get_feed():\n" +
        "    conn = psycopg2.connect(DATABASE_URL)  # Exhausts DB connections!\n" +
        "    posts = conn.execute('SELECT * FROM posts').fetchall()  # Loads ALL rows!\n" +
        "    for p in posts:\n" +
        "        # N+1 bug: queries the DB inside a for-loop!\n" +
        "        p['author'] = conn.execute(f\"SELECT name FROM users WHERE id={p['uid']}\")\n" +
        "    return posts",
      goodCodeTitle: "Production-grade query (Pooled connection + single JOIN + LIMIT 20)",
      goodCode:
        "# ✅ Uses a shared Connection Pool, 1 JOIN query, and LIMIT 20 pagination:\n" +
        "@app.get('/api/feed')\n" +
        "def get_feed(page: int = 1):\n" +
        "    offset = (max(page, 1) - 1) * 20\n" +
        "    with db_pool.connection() as conn:  # Reuses pooled connections safely\n" +
        "        rows = conn.execute('''\n" +
        "            SELECT p.id, p.title, u.name AS author\n" +
        "            FROM posts p JOIN users u ON p.user_id = u.id\n" +
        "            ORDER BY p.created_at DESC LIMIT 20 OFFSET %s\n" +
        "        ''', (offset,)).fetchall()\n" +
        "    return {'items': rows, 'page': page}",
      whyItMatters: "The #1 reason apps crash when shared on social media is running database queries inside a `for` loop (the 'N+1 query problem') and forgetting `LIMIT 20`. A single SQL `JOIN` with `LIMIT 20` takes 2 milliseconds whether you have 50 rows or 5 million rows."
    },
    {
      id: "bp-race-idempotency",
      number: "3",
      title: "Double-clicks & race conditions",
      subtitle: "When 2 clicks happen at once: Check-then-act bugs vs. Atomic transactions",
      sourceBadge: "Stripe & Kleppmann pattern",
      badgeClass: "badge-info",
      icon: "sync_problem",
      whatBreakageLooksLike: {
        userSees: "User clicks 'Create Project' or 'Pay $20' twice on slow Wi-Fi and gets two duplicate projects or a double charge.",
        logsShow: "Two identical POST /api/checkout requests arrived 80ms apart; both read status='pending' before either wrote status='paid'."
      },
      badCodeTitle: "Fragile 'Check-Then-Act' code (Race condition between read and write)",
      badCode:
        "# ❌ Two clicks 50ms apart BOTH pass the 'if' check before either saves!\n" +
        "@app.post('/api/redeem-credit')\n" +
        "def redeem(user_id: int):\n" +
        "    credits = db.get_user_credits(user_id)  # Both requests read 1\n" +
        "    if credits > 0:\n" +
        "        send_reward_gift_card(user_id)      # Sends TWO gift cards!\n" +
        "        db.set_user_credits(user_id, credits - 1)",
      goodCodeTitle: "Production-grade Atomic Update + Idempotency Key",
      goodCode:
        "# ✅ Atomic SQL update + Idempotency-Key guarantees it runs at most ONCE:\n" +
        "@app.post('/api/redeem-credit')\n" +
        "def redeem(user_id: int, idempotency_key: str):\n" +
        "    if cache.already_processed(idempotency_key):\n" +
        "        return cache.get_saved_receipt(idempotency_key)\n" +
        "    # Single atomic SQL statement: checks and decrements in one lockstep!\n" +
        "    updated = db.execute(\n" +
        "        'UPDATE users SET credits = credits - 1 WHERE id = %s AND credits > 0 RETURNING id',\n" +
        "        (user_id,)\n" +
        "    )\n" +
        "    if not updated:\n" +
        "        raise HTTPException(400, 'No credits remaining')",
      whyItMatters: "Whenever code reads a value in Python, makes an `if` decision, and writes back to the database a moment later, two simultaneous requests will slip through the gap. Push the check into a single atomic SQL `UPDATE ... WHERE` statement and require an `Idempotency-Key`."
    },
    {
      id: "bp-security-auth",
      number: "4",
      title: "Auth bypass (IDOR), SQLi & leaked keys",
      subtitle: "Stanford ACM study: Why AI writes insecure code unless you check 3 boundaries",
      sourceBadge: "Stanford & OWASP Top 10",
      badgeClass: "badge-danger",
      icon: "gpp_bad",
      whatBreakageLooksLike: {
        userSees: "Changing '/api/docs?doc_id=104' to 'doc_id=105' exposes another user's private document; or your cloud AI bill hits $1,500 overnight.",
        logsShow: "401/403 checks missing on backend route; or GitHub Secret Scanning alert: 'Google API Key exposed in public commit a8f3c1'."
      },
      badCodeTitle: "Fragile vibe-coded security (Trusting URL user_id + f-string SQL)",
      badCode:
        "# ❌ Trusts whatever user_id the browser sends & concatenates raw SQL:\n" +
        "@app.delete('/api/delete-note')\n" +
        "def delete_note(note_id: str, user_id: str):\n" +
        "    # Anyone can pass someone else's user_id! Plus SQL injection risk:\n" +
        "    db.execute(f\"DELETE FROM notes WHERE id = '{note_id}' AND owner = '{user_id}'\")\n" +
        "    return {'deleted': True}",
      goodCodeTitle: "Production-grade security (Server session identity + Parameterized SQL)",
      goodCode:
        "# ✅ Reads identity ONLY from verified server session + uses parameterized %s:\n" +
        "@app.delete('/api/delete-note')\n" +
        "def delete_note(note_id: int, session_user = Depends(get_verified_session)):\n" +
        "    # User can ONLY delete a note if their verified session owns it:\n" +
        "    deleted = db.execute(\n" +
        "        'DELETE FROM notes WHERE id = %s AND owner_id = %s RETURNING id',\n" +
        "        (note_id, session_user.id)\n" +
        "    )\n" +
        "    if not deleted:\n" +
        "        raise HTTPException(403, 'Not authorized to delete this note')",
      whyItMatters: "Stanford's Perry et al. study showed developers using AI assistants wrote significantly more vulnerabilities because AI optimizes for 'making the button work right now.' Always verify `session_user.id` on the server, use parameterized queries (`%s`), and render untrusted text with `textContent` (never `innerHTML`)."
    },
    {
      id: "bp-agent-drift",
      number: "5",
      title: "Compounding AI agent drift & context rot",
      subtitle: "Cognition & Anthropic insight: Why 10 unverified AI steps fail 41% of the time",
      sourceBadge: "Cognition & Anthropic",
      badgeClass: "badge-secondary",
      icon: "psychology_alt",
      whatBreakageLooksLike: {
        userSees: "An autonomous multi-agent workflow starts strong on Step 1, but by Step 6 it edits the wrong file, invents fake data, or loops endlessly.",
        logsShow: "Step 1 accuracy = 95%, Step 5 = 77%, Step 10 = 59% (0.95^10). Context window filled with 80,000 tokens of contradictory sub-agent chatter."
      },
      badCodeTitle: "Fragile autonomous multi-agent soup (Unbounded loop & split context)",
      badCode:
        "# ❌ Cognition's 'Don't Build Multi-Agents' anti-pattern:\n" +
        "# Sub-agents pass vague summaries without shared ground truth or checks:\n" +
        "plan = planner_agent.run(user_goal)\n" +
        "code = coder_agent.run(plan)          # Doesn't see original constraints!\n" +
        "deploy_agent.run(code)                # Ships without running pytest!",
      goodCodeTitle: "Resilient Evaluator-Optimizer Loop (Anthropic & DeepMind pattern)",
      goodCode:
        "# ✅ Deterministic backbone + explicit test verification gate at each step:\n" +
        "for attempt in range(3):\n" +
        "    patch = coding_agent.generate_patch(goal, full_trace_context)\n" +
        "    # Deterministic verification gate (pytest / compiler / schema check):\n" +
        "    test_run = run_pytest_in_sandbox(patch)\n" +
        "    if test_run.passed:\n" +
        "        return stage_draft_pr_for_human(patch)\n" +
        "    # Feed the exact bottom-of-stack-trace error back into next attempt:\n" +
        "    full_trace_context.append(test_run.bottom_stack_trace)",
      whyItMatters: "Cognition ('Don't Build Multi-Agents') and Anthropic ('Building Effective Agents') both highlight the same hard lesson: don't split work across blind sub-agents when a single context-aware loop anchored by deterministic code checks (`pytest`, type-checkers, linters) is dramatically more reliable."
    },
    {
      id: "bp-silent-failures",
      number: "6",
      title: "Silent failures vs. breakage-tracking agents",
      subtitle: "Swallowing errors with 'except: pass' vs. Automated telemetry & triage agents",
      sourceBadge: "OpenAI & Sentry pattern",
      badgeClass: "badge-success",
      icon: "radar",
      whatBreakageLooksLike: {
        userSees: "The UI says 'Saved!' in green, but nothing was actually saved to the database—and you have no idea anything is broken until a user emails you.",
        logsShow: "Nothing in logs! Because the AI wrote `except Exception: pass`, swallowing the database crash completely."
      },
      badCodeTitle: "Fragile 'Silent Failure' code (Swallowing exceptions & lying to the UI)",
      badCode:
        "# ❌ The worst AI habit: catching an error and pretending it succeeded!\n" +
        "@app.post('/api/save')\n" +
        "def save_item(item):\n" +
        "    try:\n" +
        "        db.insert(item)\n" +
        "    except Exception:\n" +
        "        pass  # Silent failure! Hides the bug completely!\n" +
        "    return {'status': 'ok'}",
      goodCodeTitle: "Observable code + Automated Breakage-Tracking Webhook",
      goodCode:
        "# ✅ Logs structured context, alerts your Breakage Tracker, & tells the user:\n" +
        "@app.post('/api/save')\n" +
        "def save_item(item: ItemSchema):\n" +
        "    try:\n" +
        "        row_id = db.insert(item)\n" +
        "        return {'status': 'ok', 'id': row_id}\n" +
        "    except Exception as err:\n" +
        "        # Captures stack trace + commit SHA & triggers triage agent:\n" +
        "        sentry_sdk.capture_exception(err)\n" +
        "        notify_breakage_agent(route='/api/save', trace=traceback.format_exc())\n" +
        "        raise HTTPException(500, 'Could not save item—our team was alerted.')",
      whyItMatters: "When reviewing AI-generated code, immediately search for `except:` or `catch (e) {}` blocks that do nothing. Every real error should (1) tell the user honestly that the action didn't save, and (2) send the stack trace to your error tracker."
    }
  ];

  var AGENT_TRACKER_STAGES = [
    {
      step: "Stage 1 · Sense",
      title: "Crash & latency capture (Sentry / PostHog / LangSmith)",
      icon: "sensors",
      badgeClass: "badge-info",
      body: "Instead of waiting for users to complain, install a 3-line error boundary (`window.onerror` in browser + Sentry/Logfire on the backend) plus a scheduled Playwright/cron prober that tests your live URL every 10 minutes."
    },
    {
      step: "Stage 2 · Localize",
      title: "Context-rich root cause triage (Stack trace + git diff)",
      icon: "manage_search",
      badgeClass: "badge-secondary",
      body: "When an alert fires, a Breakage-Tracking Agent receives a clean context packet: (1) the bottom line of the Stack Trace, (2) the route/input shape, and (3) `git log -p -n 3` showing the exact lines changed in the latest deploy."
    },
    {
      step: "Stage 3 · Verify",
      title: "Test-first reproduction (Anthropic & DeepMind loop)",
      icon: "science",
      badgeClass: "badge-warning",
      body: "Following Anthropic's Claude Code & DeepMind's AlphaCodium pattern, the agent first writes a failing `pytest` / Playwright test that reproduces the exact crash, then edits the code until that test and your Golden Evals pass."
    },
    {
      step: "Stage 4 · Gate",
      title: "Human-approved Draft PR or 1-click Rollback",
      icon: "verified_user",
      badgeClass: "badge-success",
      body: "The breakage agent never pushes straight to `main`. It opens a GitHub Pull Request with the root-cause summary and passing test diff (or flags a 1-click Vercel/Cloud Run rollback) so a human approves the fix."
    }
  ];

  function populateBreakpointInSidePanel(bp) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        var topRow = document.createElement("div");
        topRow.className = "resource-title-row";
        var b = document.createElement("span");
        b.className = "badge " + bp.badgeClass;
        b.textContent = "Breakpoint " + bp.number + " · " + bp.sourceBadge;
        topRow.appendChild(b);

        var h4 = document.createElement("h4");
        h4.textContent = bp.title;

        var subP = document.createElement("p");
        subP.className = "resource-desc";
        subP.textContent = bp.subtitle;

        var symptomBox = document.createElement("div");
        symptomBox.className = "arch-mode-banner bad-mode";
        var sIcon = document.createElement("span");
        sIcon.className = "material-symbols-outlined safety-icon";
        sIcon.textContent = "warning";
        var sText = document.createElement("span");
        sText.textContent =
          "What the breakage looks like — On screen: " +
          bp.whatBreakageLooksLike.userSees +
          " | In terminal/logs: " +
          bp.whatBreakageLooksLike.logsShow;
        symptomBox.appendChild(sIcon);
        symptomBox.appendChild(sText);

        var badLabel = document.createElement("strong");
        badLabel.className = "inspector-Subhead";
        badLabel.textContent = "❌ " + bp.badCodeTitle;
        var badPre = document.createElement("div");
        badPre.className = "vocab-example-box pre-line-text";
        badPre.textContent = bp.badCode;

        var goodLabel = document.createElement("strong");
        goodLabel.className = "inspector-Subhead";
        goodLabel.textContent = "✅ " + bp.goodCodeTitle;
        var goodPre = document.createElement("div");
        goodPre.className = "vocab-example-box pre-line-text";
        goodPre.textContent = bp.goodCode;

        var whyBox = document.createElement("div");
        whyBox.className = "arch-mode-banner good-mode";
        var wIcon = document.createElement("span");
        wIcon.className = "material-symbols-outlined safety-icon";
        wIcon.textContent = "verified";
        var wText = document.createElement("span");
        wText.textContent = "Why this matters: " + bp.whyItMatters;
        whyBox.appendChild(wIcon);
        whyBox.appendChild(wText);

        inspectorEl.appendChild(topRow);
        inspectorEl.appendChild(h4);
        inspectorEl.appendChild(subP);
        inspectorEl.appendChild(symptomBox);
        inspectorEl.appendChild(badLabel);
        inspectorEl.appendChild(badPre);
        inspectorEl.appendChild(goodLabel);
        inspectorEl.appendChild(goodPre);
        inspectorEl.appendChild(whyBox);
      },
      {
        itemTitle: bp.title,
        autoOpen: true,
        pulse: true
      }
    );
  }

  function renderReliabilityBreakagesSection(container) {
    var wrapper = document.createElement("div");
    wrapper.className = "diagram-card";

    // --- HEADER ---
    var header = document.createElement("div");
    header.className = "diagram-header";
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-danger";
    badge.textContent = "Interactive reliability & breakage simulator — click any scale tier or code comparison";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "section-title";
    h3.textContent = "Good code vs. fragile code: What breakages actually look like (and how to catch them automatically)";

    var sub = document.createElement("p");
    sub.className = "section-subtitle";
    sub.textContent =
      "Distilled from engineering research at Anthropic, Cognition, Google DeepMind, OpenAI, and Stanford: see what happens as you scale from 1 user to 5,000+ users, compare fragile vibe-coded snippets against production fixes side by side, and see how automated breakage-tracking agents work.";

    header.appendChild(badgeRow);
    header.appendChild(h3);
    header.appendChild(sub);
    wrapper.appendChild(header);

    // --- PART 1: SCALING USERS STRESS-TEST (1 -> 50 -> 5,000+ USERS) ---
    var scaleSection = document.createElement("div");
    scaleSection.className = "nested-card";

    var scaleTitleRow = document.createElement("div");
    scaleTitleRow.className = "resource-title-row";
    var scaleBadge = document.createElement("span");
    scaleBadge.className = "badge badge-info";
    scaleBadge.textContent = "Part 1 · What happens when you scale users";
    scaleTitleRow.appendChild(scaleBadge);

    var scaleHeading = document.createElement("h4");
    scaleHeading.textContent = "Click a traffic level to see what breaks as your app grows from your laptop to the open web";

    var scaleTabsRow = document.createElement("div");
    scaleTabsRow.className = "vocab-filter-bar";

    var scaleDetailHost = document.createElement("div");
    scaleDetailHost.className = "nested-card";

    var activeScaleIdx = 1; // Default to 50 concurrent users where cracks first appear

    function renderScaleTierDetail() {
      scaleDetailHost.replaceChildren();
      var tier = SCALE_TIERS[activeScaleIdx];

      var topRow = document.createElement("div");
      topRow.className = "resource-title-row";
      var tb = document.createElement("span");
      tb.className = "badge " + tier.badgeClass;
      tb.textContent = tier.badge;
      var tTitle = document.createElement("strong");
      tTitle.textContent = tier.users + " — " + tier.summary;
      topRow.appendChild(tb);
      topRow.appendChild(tTitle);
      scaleDetailHost.appendChild(topRow);

      var list = document.createElement("ul");
      list.className = "bullet-list";
      tier.whatHappens.forEach(function (pt) {
        var li = document.createElement("li");
        li.className = "bullet-item";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined bullet-icon";
        ic.textContent = activeScaleIdx === 0 ? "check_circle" : "error";
        var sp = document.createElement("span");
        sp.textContent = pt;
        li.appendChild(ic);
        li.appendChild(sp);
        list.appendChild(li);
      });
      scaleDetailHost.appendChild(list);

      var banner = document.createElement("div");
      banner.className = "arch-mode-banner " + (activeScaleIdx === 0 ? "good-mode" : "bad-mode");
      var bIcon = document.createElement("span");
      bIcon.className = "material-symbols-outlined safety-icon";
      bIcon.textContent = activeScaleIdx === 0 ? "info" : "shield";
      var bTxt = document.createElement("span");
      bTxt.textContent = tier.watchOut;
      banner.appendChild(bIcon);
      banner.appendChild(bTxt);
      scaleDetailHost.appendChild(banner);
    }

    var scaleTabBtns = [];
    SCALE_TIERS.forEach(function (tier, idx) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "vocab-chip" + (idx === activeScaleIdx ? " active" : "");
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined btn-icon-sm";
      ic.textContent = tier.icon;
      var lbl = document.createElement("span");
      lbl.textContent = tier.users;
      btn.appendChild(ic);
      btn.appendChild(lbl);
      btn.addEventListener("click", function () {
        activeScaleIdx = idx;
        scaleTabBtns.forEach(function (b, i) {
          b.classList.toggle("active", i === activeScaleIdx);
        });
        renderScaleTierDetail();
      });
      scaleTabBtns.push(btn);
      scaleTabsRow.appendChild(btn);
    });

    renderScaleTierDetail();
    scaleSection.appendChild(scaleTitleRow);
    scaleSection.appendChild(scaleHeading);
    scaleSection.appendChild(scaleTabsRow);
    scaleSection.appendChild(scaleDetailHost);
    wrapper.appendChild(scaleSection);

    // --- PART 2: INTERACTIVE BAD VS. GOOD CODE & WHAT BREAKAGES LOOK LIKE ---
    var bpSection = document.createElement("div");
    bpSection.className = "nested-card";

    var bpTitleRow = document.createElement("div");
    bpTitleRow.className = "resource-title-row";
    var bpBadge = document.createElement("span");
    bpBadge.className = "badge badge-danger";
    bpBadge.textContent = "Part 2 · Bad vs. Good Code & What Breakages Look Like (6 Common Breakpoints)";
    bpTitleRow.appendChild(bpBadge);

    var bpHeading = document.createElement("h4");
    bpHeading.textContent = "Select any breakpoint below to compare the fragile code, the exact crash symptom, and the production fix";

    var bpPillsBar = document.createElement("div");
    bpPillsBar.className = "vocab-filter-bar";

    var bpComparisonHost = document.createElement("div");
    bpComparisonHost.className = "bp-comparison-host";

    var activeBpIdx = 0;
    var bpButtons = [];

    function renderActiveBreakpoint(openInSidePanel) {
      bpComparisonHost.replaceChildren();
      var bp = BREAKPOINT_CARDS[activeBpIdx];

      // Symptom banner showing what the breakage actually looks like on screen and in terminal logs
      var symptomCard = document.createElement("div");
      symptomCard.className = "arch-mode-banner bad-mode";
      var symIcon = document.createElement("span");
      symIcon.className = "material-symbols-outlined safety-icon";
      symIcon.textContent = "bug_report";
      var symContent = document.createElement("div");
      var symTitle = document.createElement("strong");
      symTitle.textContent = "What this breakage looks like in real life (" + bp.title + "): ";
      var symScreen = document.createElement("p");
      symScreen.className = "resource-desc";
      symScreen.textContent = "• On the user's screen: " + bp.whatBreakageLooksLike.userSees;
      var symLogs = document.createElement("p");
      symLogs.className = "resource-desc";
      symLogs.textContent = "• In your terminal / server logs: " + bp.whatBreakageLooksLike.logsShow;
      symContent.appendChild(symTitle);
      symContent.appendChild(symScreen);
      symContent.appendChild(symLogs);
      symptomCard.appendChild(symIcon);
      symptomCard.appendChild(symContent);
      bpComparisonHost.appendChild(symptomCard);

      // Side-by-side Bad vs Good code grid
      var codeGrid = document.createElement("div");
      codeGrid.className = "detail-two-col";

      // Left column: Bad Code
      var badCard = document.createElement("div");
      badCard.className = "surface-card";
      var badTop = document.createElement("div");
      badTop.className = "resource-title-row";
      var badBadge = document.createElement("span");
      badBadge.className = "badge badge-danger";
      badBadge.textContent = "❌ Fragile vibe-coded snippet";
      badTop.appendChild(badBadge);
      var badTitle = document.createElement("h4");
      badTitle.textContent = bp.badCodeTitle;
      var badPre = document.createElement("div");
      badPre.className = "vocab-example-box pre-line-text";
      badPre.textContent = bp.badCode;
      badCard.appendChild(badTop);
      badCard.appendChild(badTitle);
      badCard.appendChild(badPre);

      // Right column: Good Code
      var goodCard = document.createElement("div");
      goodCard.className = "surface-card";
      var goodTop = document.createElement("div");
      goodTop.className = "resource-title-row";
      var goodBadge = document.createElement("span");
      goodBadge.className = "badge badge-success";
      goodBadge.textContent = "✅ Production-grade fix (" + bp.sourceBadge + ")";
      goodTop.appendChild(goodBadge);
      var goodTitle = document.createElement("h4");
      goodTitle.textContent = bp.goodCodeTitle;
      var goodPre = document.createElement("div");
      goodPre.className = "vocab-example-box pre-line-text";
      goodPre.textContent = bp.goodCode;
      goodCard.appendChild(goodTop);
      goodCard.appendChild(goodTitle);
      goodCard.appendChild(goodPre);

      codeGrid.appendChild(badCard);
      codeGrid.appendChild(goodCard);
      bpComparisonHost.appendChild(codeGrid);

      // Takeaway callout
      var takeawayBar = document.createElement("div");
      takeawayBar.className = "arch-mode-banner good-mode";
      var tkIcon = document.createElement("span");
      tkIcon.className = "material-symbols-outlined safety-icon";
      tkIcon.textContent = "verified";
      var tkSpan = document.createElement("span");
      tkSpan.textContent = bp.whyItMatters;
      takeawayBar.appendChild(tkIcon);
      takeawayBar.appendChild(tkSpan);
      bpComparisonHost.appendChild(takeawayBar);

      if (openInSidePanel) {
        populateBreakpointInSidePanel(bp);
      }
    }

    BREAKPOINT_CARDS.forEach(function (bp, idx) {
      var pill = document.createElement("button");
      pill.type = "button";
      pill.className = "vocab-chip" + (idx === activeBpIdx ? " active" : "");
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined btn-icon-sm";
      ic.textContent = bp.icon;
      var txt = document.createElement("span");
      txt.textContent = bp.number + ". " + bp.title;
      pill.appendChild(ic);
      pill.appendChild(txt);
      pill.addEventListener("click", function () {
        activeBpIdx = idx;
        bpButtons.forEach(function (b, i) {
          b.classList.toggle("active", i === activeBpIdx);
        });
        renderActiveBreakpoint(true);
      });
      bpButtons.push(pill);
      bpPillsBar.appendChild(pill);
    });

    renderActiveBreakpoint(false);
    bpSection.appendChild(bpTitleRow);
    bpSection.appendChild(bpHeading);
    bpSection.appendChild(bpPillsBar);
    bpSection.appendChild(bpComparisonHost);
    wrapper.appendChild(bpSection);

    // --- PART 3: HOW TO BUILD AGENTS THAT TRACK & DIAGNOSE BREAKAGES ---
    var trackerSection = document.createElement("div");
    trackerSection.className = "nested-card";

    var trTitleRow = document.createElement("div");
    trTitleRow.className = "resource-title-row";
    var trBadge = document.createElement("span");
    trBadge.className = "badge badge-success";
    trBadge.textContent = "Part 3 · Automated Breakage-Tracking Agents (Anthropic, Cognition, DeepMind & OpenAI)";
    trTitleRow.appendChild(trBadge);

    var trHeading = document.createElement("h4");
    trHeading.textContent = "How modern teams build agents that watch for crashes, isolate the commit, and stage a verified fix";

    var trGrid = document.createElement("div");
    trGrid.className = "resources-grid";

    AGENT_TRACKER_STAGES.forEach(function (stg) {
      var stgCard = document.createElement("div");
      stgCard.className = "surface-card";
      var top = document.createElement("div");
      top.className = "resource-title-row";
      var b = document.createElement("span");
      b.className = "badge " + stg.badgeClass;
      b.textContent = stg.step;
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined btn-icon-sm";
      ic.textContent = stg.icon;
      top.appendChild(b);
      top.appendChild(ic);

      var t = document.createElement("h4");
      t.textContent = stg.title;
      var d = document.createElement("p");
      d.className = "resource-desc";
      d.textContent = stg.body;

      stgCard.appendChild(top);
      stgCard.appendChild(t);
      stgCard.appendChild(d);
      trGrid.appendChild(stgCard);
    });

    trackerSection.appendChild(trTitleRow);
    trackerSection.appendChild(trHeading);
    trackerSection.appendChild(trGrid);
    wrapper.appendChild(trackerSection);

    container.appendChild(wrapper);
  }

  window.renderReliabilityBreakagesSection = renderReliabilityBreakagesSection;
})();
