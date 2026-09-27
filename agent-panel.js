// Deployed Eng Pipeline — Persistent Side-Panel Pipeline Navigator
// Helps learners navigate the 8 pipeline stops, 320+ A-Z dictionary terms, and
// common debugging/architecture workflows, while clearly stating when an open-ended
// question requires a full AI coding agent (or an optional live Gemini key).
// Adheres strictly to BillSkill GM3 standards & SecureCoder (zero innerHTML).

(function () {
  var currentContextStopId = null;
  var currentContextLabel = "Full pipeline";

  var STOP_WORDS = {
    "i": 1, "im": 1, "ive": 1, "id": 1, "my": 1, "mine": 1, "me": 1, "we": 1,
    "our": 1, "us": 1, "you": 1, "your": 1, "yours": 1, "he": 1, "she": 1,
    "they": 1, "them": 1, "their": 1, "it": 1, "its": 1, "what": 1, "whats": 1,
    "which": 1, "who": 1, "whom": 1, "whose": 1, "why": 1, "when": 1, "where": 1,
    "how": 1, "hows": 1, "is": 1, "isn": 1, "isnt": 1, "are": 1, "aren": 1,
    "arent": 1, "was": 1, "wasnt": 1, "were": 1, "werent": 1, "be": 1, "been": 1,
    "being": 1, "do": 1, "does": 1, "doesnt": 1, "did": 1, "didnt": 1, "done": 1,
    "doing": 1, "have": 1, "has": 1, "had": 1, "having": 1, "can": 1, "cant": 1,
    "cannot": 1, "could": 1, "couldnt": 1, "should": 1, "shouldnt": 1, "would": 1,
    "wouldnt": 1, "will": 1, "wont": 1, "shall": 1, "may": 1, "might": 1, "must": 1,
    "get": 1, "gets": 1, "got": 1, "getting": 1, "make": 1, "makes": 1, "made": 1,
    "making": 1, "go": 1, "goes": 1, "going": 1, "went": 1, "gone": 1, "take": 1,
    "takes": 1, "took": 1, "put": 1, "puts": 1, "see": 1, "look": 1, "looking": 1,
    "find": 1, "finding": 1, "show": 1, "tell": 1, "explain": 1, "give": 1,
    "help": 1, "please": 1, "thanks": 1, "thank": 1, "need": 1, "needs": 1,
    "want": 1, "wants": 1, "know": 1, "think": 1, "mean": 1, "means": 1,
    "meaning": 1, "use": 1, "used": 1, "using": 1, "work": 1, "works": 1,
    "working": 1, "way": 1, "ways": 1, "thing": 1, "things": 1, "stuff": 1,
    "something": 1, "anything": 1, "everything": 1, "nothing": 1, "someone": 1,
    "anyone": 1, "some": 1, "any": 1, "all": 1, "both": 1, "each": 1, "other": 1,
    "another": 1, "more": 1, "most": 1, "much": 1, "many": 1, "few": 1, "less": 1,
    "least": 1, "own": 1, "same": 1, "so": 1, "than": 1, "too": 1, "very": 1,
    "just": 1, "now": 1, "then": 1, "here": 1, "there": 1, "up": 1, "down": 1,
    "out": 1, "off": 1, "over": 1, "under": 1, "again": 1, "also": 1, "only": 1,
    "even": 1, "still": 1, "already": 1, "always": 1, "never": 1, "really": 1,
    "actually": 1, "maybe": 1, "right": 1, "wrong": 1, "good": 1, "better": 1,
    "best": 1, "bad": 1, "worse": 1, "worst": 1, "new": 1, "old": 1, "big": 1,
    "small": 1, "long": 1, "short": 1, "high": 1, "low": 1, "first": 1, "last": 1,
    "next": 1, "about": 1, "above": 1, "after": 1, "against": 1, "around": 1,
    "as": 1, "at": 1, "before": 1, "behind": 1, "below": 1, "between": 1,
    "but": 1, "by": 1, "during": 1, "for": 1, "from": 1, "in": 1, "inside": 1,
    "into": 1, "like": 1, "near": 1, "of": 1, "on": 1, "onto": 1, "outside": 1,
    "through": 1, "to": 1, "toward": 1, "under": 1, "until": 1, "with": 1,
    "within": 1, "without": 1, "the": 1, "a": 1, "an": 1, "and": 1, "or": 1,
    "if": 1, "unless": 1, "while": 1, "because": 1, "vs": 1, "versus": 1,
    "difference": 1, "example": 1, "examples": 1, "file": 1, "files": 1,
    "code": 1, "coding": 1, "app": 1, "apps": 1, "project": 1, "projects": 1,
    "website": 1, "site": 1, "page": 1, "open": 1, "window": 1, "bar": 1,
    "click": 1, "button": 1, "step": 1, "steps": 1, "fix": 1, "broken": 1,
    "write": 1, "create": 1, "build": 1, "building": 1, "learn": 1, "learning": 1
  };

  function getKnowledgeBase() {
    return (window.PIPELINE_GUIDE_KNOWLEDGE && window.PIPELINE_GUIDE_KNOWLEDGE.knowledgeBase) || [];
  }

  function getStarterPrompts() {
    return (window.PIPELINE_GUIDE_KNOWLEDGE && window.PIPELINE_GUIDE_KNOWLEDGE.starterPrompts) || { "default": [] };
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hasKeywordMatch(text, kw) {
    var cleanKw = (kw || "").toLowerCase().trim();
    if (!cleanKw) return false;
    if (cleanKw.indexOf(" ") !== -1 || /[^a-z0-9]/.test(cleanKw)) {
      var padText = " " + text + " ";
      var idx = padText.indexOf(cleanKw);
      if (idx === -1) return false;
      var before = padText.charAt(idx - 1);
      var after = padText.charAt(idx + cleanKw.length);
      var okBefore = !/[a-z0-9]/.test(before);
      var okAfter = !/[a-z0-9]/.test(after);
      return okBefore && okAfter;
    }
    var re = new RegExp("(^|[^a-z0-9-])" + escapeRegExp(cleanKw) + "(?:s|es|ing|ed)?($|[^a-z0-9-])", "i");
    return re.test(text);
  }

  function mapGlossaryGroupToStop(item) {
    var cat = (item.category || "").toLowerCase();
    var term = (item.term || "").toLowerCase();
    if (cat.indexOf("interface guide") !== -1) return "downloading-the-tools";
    if (item.group === "command" || cat.indexOf("terminal") !== -1 || cat.indexOf("cli") !== -1) {
      if (term.indexOf("git ") === 0 || cat.indexOf("git") !== -1) return "git-and-shipping";
      return "cli-and-terminal";
    }
    if (cat.indexOf("git") !== -1 || cat.indexOf("version control") !== -1) return "git-and-shipping";
    if (cat.indexOf("what could break") !== -1 || cat.indexOf("code safety") !== -1 || cat.indexOf("billing safety") !== -1 || cat.indexOf("debugging") !== -1) {
      return "reading-code-stability";
    }
    if (cat.indexOf("python") !== -1 || cat.indexOf("testing") !== -1 || cat.indexOf("reading code") !== -1) {
      return "reading-code-python";
    }
    if (cat.indexOf("dynamics") !== -1 || cat.indexOf("endpoint") !== -1 || cat.indexOf("mcp") !== -1 || cat.indexOf("webhook") !== -1 || cat.indexOf("agent") !== -1) {
      return "system-dynamics";
    }
    if (cat.indexOf("license") !== -1 || cat.indexOf("open-source") !== -1 || cat.indexOf("hosting") !== -1) {
      return "system-architecture";
    }
    return "basic-terminology";
  }

  function findBestMatchingStop(tokens) {
    if (!window.PIPELINE_DATA || !window.PIPELINE_DATA.stops || !tokens.length) return null;
    var bestStop = null;
    var bestScore = 0;
    window.PIPELINE_DATA.stops.forEach(function (stop) {
      var s = 0;
      var titleLower = (stop.title + " " + (stop.subtitle || "")).toLowerCase();
      var expLower = (stop.explainer || "").toLowerCase();
      tokens.forEach(function (tok) {
        if (hasKeywordMatch(titleLower, tok)) s += 12;
        else if (hasKeywordMatch(expLower, tok)) s += 4;
      });
      if (s > bestScore) {
        bestScore = s;
        bestStop = stop;
      }
    });
    return bestScore >= 12 ? bestStop : null;
  }

  function searchLocalAnswer(rawQuestion) {
    var q = (rawQuestion || "").trim().toLowerCase();
    if (!q) return null;

    var normalizedQ = q.replace(/['"“”‘’?!.,;:()[\]]/g, " ").replace(/\s+/g, " ").trim();
    var tokens = normalizedQ.split(" ").filter(function (w) {
      return w.length >= 2 && !STOP_WORDS[w];
    });

    // 1. Score against Curated Q&A (GENERAL_KNOWLEDGE_BASE)
    var bestKb = null;
    var bestKbScore = 0;
    var kbList = getKnowledgeBase();
    kbList.forEach(function (entry) {
      var score = 0;
      entry.keywords.forEach(function (kw) {
        if (hasKeywordMatch(normalizedQ, kw) || hasKeywordMatch(q, kw)) {
          score += kw.length + (kw.indexOf(" ") !== -1 ? 18 : 8);
        }
      });
      if (score > bestKbScore) {
        bestKbScore = score;
        bestKb = entry;
      }
    });

    // 2. Score against the 320+ A-Z Master Dictionary using strict headword / multi-token rules
    var bestGlossary = null;
    var bestGlossaryScore = 0;
    if (typeof window.getMasterGlossaryItems === "function") {
      var glossaryItems = window.getMasterGlossaryItems();
      glossaryItems.forEach(function (item) {
        var isInterfacePin = (item.category || "").indexOf("Interface Guide") === 0;
        // Strip parenthetical examples like "(my-app — -zsh)" so example filenames never false-match
        var cleanTerm = (item.term || "").toLowerCase().replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
        var primaryHead = cleanTerm.split(/[—·:]/)[0].trim();

        var s = 0;
        var matchedHeadword = false;

        if (!isInterfacePin && primaryHead && primaryHead.length >= 2 && !STOP_WORDS[primaryHead]) {
          if (hasKeywordMatch(normalizedQ, primaryHead) || hasKeywordMatch(q, primaryHead)) {
            s += 52 + primaryHead.length;
            matchedHeadword = true;
          } else if (/[,/&]/.test(primaryHead)) {
            var subParts = primaryHead.split(/[,/&]/);
            for (var p = 0; p < subParts.length; p++) {
              var sub = subParts[p].trim();
              if (sub.length >= 3 && !STOP_WORDS[sub] && (hasKeywordMatch(normalizedQ, sub) || hasKeywordMatch(q, sub))) {
                s += 48 + sub.length;
                matchedHeadword = true;
                break;
              }
            }
          }
        }

        var matchedTitleTokens = 0;
        tokens.forEach(function (tok) {
          if (hasKeywordMatch(cleanTerm, tok)) {
            matchedTitleTokens++;
            s += 16;
          }
        });

        // Strict eligibility gate: Must either match the term's primary headword OR match >= 2 distinct non-stopword title tokens
        if (!matchedHeadword && matchedTitleTokens < 2) {
          s = 0;
        }

        if (s > bestGlossaryScore) {
          bestGlossaryScore = s;
          bestGlossary = item;
        }
      });
    }

    // Direct glossary headword match (e.g. "what is Neon?", "what is Drizzle?", "what is Modal?")
    if (bestGlossary && bestGlossaryScore >= 48 && bestKbScore < 14) {
      var gStopId = mapGlossaryGroupToStop(bestGlossary);
      var gStop = findStopById(gStopId);
      return {
        matched: true,
        title: bestGlossary.term + " · " + bestGlossary.category,
        body: bestGlossary.definition + (bestGlossary.example ? "\n\nExample: " + bestGlossary.example : ""),
        stopId: gStopId,
        stopTitle: gStop ? gStop.title : "Open related stop"
      };
    }

    // Curated Q&A match
    if (bestKb && bestKbScore >= 10) {
      var matchedStop = findStopById(bestKb.stopId);
      return {
        matched: true,
        title: bestKb.title,
        body: bestKb.answer,
        stopId: bestKb.stopId,
        stopTitle: matchedStop ? matchedStop.title : "Open related stop"
      };
    }

    // Multi-token glossary title match (>= 2 distinct domain tokens in title)
    if (bestGlossary && bestGlossaryScore >= 32) {
      var gStopId2 = mapGlossaryGroupToStop(bestGlossary);
      var gStop2 = findStopById(gStopId2);
      return {
        matched: true,
        title: bestGlossary.term + " · " + bestGlossary.category,
        body: bestGlossary.definition + (bestGlossary.example ? "\n\nExample: " + bestGlossary.example : ""),
        stopId: gStopId2,
        stopTitle: gStop2 ? gStop2.title : "Open related stop"
      };
    }

    // 3. Honest "Navigator, not a full AI agent" fallback when a question is outside built-in coverage
    var suggestedStop = findBestMatchingStop(tokens) || findStopById(currentContextStopId || "reading-code-stability");
    return {
      matched: false,
      title: "I'm a pipeline navigator, not a full AI agent",
      body:
        "I don't have a specific answer for \"" + rawQuestion.trim() + "\" in my built-in guide.\n\n" +
        "I'm a lightweight navigator built to help you find concepts, tools, and stops across this site—not a full AI coding agent (like Claude, ChatGPT, Gemini, or Cursor), so I can't answer every open-ended question or inspect your own code the way an agent can.\n\n" +
        "• Try asking about a step, tool, or troubleshooting workflow on this site (for example: 'My code is broken, how do I fix it?', 'API vs MCP', 'grep', 'git branch', or 'Supabase vs Neon').\n" +
        "• Or open the Archive in the top bar to search all 320+ sites, commands, and flashcards.",
      stopId: suggestedStop ? suggestedStop.id : "reading-code-stability",
      stopTitle: suggestedStop ? suggestedStop.title : "Step 5 · Code stability & what could break"
    };
  }

  function findStopById(stopId) {
    if (!window.PIPELINE_DATA || !window.PIPELINE_DATA.stops) return null;
    for (var i = 0; i < window.PIPELINE_DATA.stops.length; i++) {
      if (window.PIPELINE_DATA.stops[i].id === stopId) return window.PIPELINE_DATA.stops[i];
    }
    return null;
  }

  function appendAgentMessage(role, titleText, bodyText, stopId, stopTitle) {
    var logEl = document.getElementById("agent-messages-list");
    if (!logEl) return;

    var msgCard = document.createElement("div");
    msgCard.className = "agent-msg-bubble " + (role === "user" ? "agent-msg-user" : "agent-msg-assistant");

    if (titleText) {
      var strong = document.createElement("strong");
      strong.className = "agent-msg-title";
      strong.textContent = titleText;
      msgCard.appendChild(strong);
    }

    var p = document.createElement("p");
    p.className = "agent-msg-text pre-line-text";
    p.textContent = bodyText;
    msgCard.appendChild(p);

    if (stopId && role === "assistant") {
      var jumpBtn = document.createElement("button");
      jumpBtn.type = "button";
      jumpBtn.className = "agent-jump-btn";
      var jIcon = document.createElement("span");
      jIcon.className = "material-symbols-outlined btn-icon-sm";
      jIcon.textContent = "arrow_forward";
      var jSpan = document.createElement("span");
      jSpan.textContent = "Open: " + (stopTitle || stopId);
      jumpBtn.appendChild(jSpan);
      jumpBtn.appendChild(jIcon);
      jumpBtn.addEventListener("click", function () {
        if (typeof window.navigateTo === "function") {
          window.navigateTo("#stop/" + stopId);
        } else {
          window.location.hash = "#stop/" + stopId;
        }
      });
      msgCard.appendChild(jumpBtn);
    }

    logEl.appendChild(msgCard);
    logEl.scrollTop = logEl.scrollHeight;
  }

  function askGeminiLiveIfConfigured(question, onSuccess, onFallback) {
    var browserApiKey = "";
    try { browserApiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}

    if (!browserApiKey) {
      fetch("/api/ask-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: question.slice(0, 300),
          context: currentContextLabel
        })
      })
        .then(function (res) {
          return res.ok ? res.json() : Promise.reject(new Error("Proxy status " + res.status));
        })
        .then(function (data) {
          if (data && data.answer) {
            onSuccess(data.answer, "Pipeline guide (Live Gemini Flash-Lite)");
          } else {
            onFallback();
          }
        })
        .catch(function () {
          onFallback();
        });
      return;
    }

    var sysPrompt =
      "You are the Pipeline Guide for 'The vibes -> deployed Eng journey — By Lucy', helping builders master deployed software engineering. " +
      "Current section: " + currentContextLabel + ". " +
      "Keep answers direct, plain-English, concise (under 130 words), practical, and free of hype/superlatives. Include a 1-line example when helpful.";

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=" + encodeURIComponent(browserApiKey), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: sysPrompt }] },
        contents: [{ role: "user", parts: [{ text: question.slice(0, 300) }] }],
        generationConfig: { maxOutputTokens: 260, temperature: 0.25 }
      })
    })
      .then(function (res) { return res.ok ? res.json() : Promise.reject(new Error("API status " + res.status)); })
      .then(function (data) {
        var text = data && data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts[0] && data.candidates[0].content.parts[0].text;
        if (text) onSuccess(text, "Pipeline guide (Live Gemini)");
        else onFallback();
      })
      .catch(function () {
        onFallback();
      });
  }

  function handleUserQuestion(rawQuestion) {
    var q = (rawQuestion || "").trim();
    if (!q) return;

    appendAgentMessage("user", null, q, null, null);

    var localReply = searchLocalAnswer(q);
    var browserApiKey = "";
    try { browserApiKey = (localStorage.getItem("PIPELINE_GEMINI_API_KEY") || "").trim(); } catch (e) {}

    if (localReply && localReply.matched && !browserApiKey) {
      appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
      return;
    }

    askGeminiLiveIfConfigured(
      q,
      function (liveText, label) {
        appendAgentMessage(
          "assistant",
          label || "Pipeline guide (Live Gemini)",
          liveText,
          localReply ? localReply.stopId : null,
          localReply ? localReply.stopTitle : null
        );
      },
      function () {
        if (localReply) {
          appendAgentMessage("assistant", localReply.title, localReply.body, localReply.stopId, localReply.stopTitle);
        }
      }
    );
  }

  var setAgentPanelCollapsedFn = null;
  var setInspectorPanelCollapsedFn = null;
  var popPulseTimer = null;

  function renderStarterChips() {
    var chipsContainer = document.getElementById("agent-starter-chips");
    if (!chipsContainer) return;
    chipsContainer.replaceChildren();

    var promptMap = getStarterPrompts();
    var prompts = promptMap[currentContextStopId] || promptMap["default"] || [];
    prompts.forEach(function (promptText) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "agent-starter-chip";
      chip.textContent = promptText;
      chip.addEventListener("click", function () {
        handleUserQuestion(promptText);
      });
      chipsContainer.appendChild(chip);
    });
  }

  function renderDefaultInspectorPlaceholder() {
    var bodyEl = document.getElementById("side-inspector-body");
    if (!bodyEl || bodyEl.children.length > 0) return;
    var h4 = document.createElement("h4");
    h4.textContent = "Click any diagram element to inspect it";
    var p = document.createElement("p");
    p.className = "resource-desc";
    p.textContent = "Whenever you click a stage card, coding language pill, Git node, keyboard key, or path piece inside any step, this left-hand panel opens with a plain-English breakdown and code example.";
    bodyEl.appendChild(h4);
    bodyEl.appendChild(p);
  }

  function showInspectorInSidePanel(populateFn, options) {
    var opts = options || {};
    var bodyEl = document.getElementById("side-inspector-body");
    var inspectorPanelEl = document.getElementById("inspector-side-panel");
    var inspectorBadgeEl = document.getElementById("inspector-context-badge");
    if (!bodyEl || typeof populateFn !== "function") return;

    bodyEl.replaceChildren();
    populateFn(bodyEl);

    if (inspectorBadgeEl) {
      inspectorBadgeEl.textContent = opts.itemTitle || currentContextLabel || "Selected item";
    }

    if (opts.itemTitle) {
      var askWrap = document.createElement("div");
      askWrap.className = "side-inspector-ask-row";
      var askBtn = document.createElement("button");
      askBtn.type = "button";
      askBtn.className = "agent-jump-btn";
      var askIcon = document.createElement("span");
      askIcon.className = "material-symbols-outlined btn-icon-sm";
      askIcon.textContent = "chat";
      var askTxt = document.createElement("span");
      askTxt.textContent = "Ask Pipeline guide about " + opts.itemTitle;
      askBtn.appendChild(askIcon);
      askBtn.appendChild(askTxt);
      askBtn.addEventListener("click", function () {
        if (setAgentPanelCollapsedFn) setAgentPanelCollapsedFn(false);
        handleUserQuestion("Can you explain " + opts.itemTitle + " and how it fits in?");
      });
      askWrap.appendChild(askBtn);
      bodyEl.appendChild(askWrap);
    }

    bodyEl.scrollTop = 0;

    if (opts.autoOpen && setInspectorPanelCollapsedFn) {
      setInspectorPanelCollapsedFn(false);
    }

    if (opts.pulse && inspectorPanelEl) {
      inspectorPanelEl.classList.remove("side-panel-pop-pulse");
      void inspectorPanelEl.offsetWidth;
      inspectorPanelEl.classList.add("side-panel-pop-pulse");
      if (popPulseTimer) clearTimeout(popPulseTimer);
      popPulseTimer = setTimeout(function () {
        inspectorPanelEl.classList.remove("side-panel-pop-pulse");
      }, 650);
    }
  }

  function initAgentPanel() {
    var agentPanelEl = document.getElementById("agent-side-panel");
    var toggleAgentBtn = document.getElementById("btn-toggle-agent-panel");
    var collapseAgentBtn = document.getElementById("btn-collapse-agent-panel");
    var floatingOpenGuideBtn = document.getElementById("btn-floating-open-guide");

    var inspectorPanelEl = document.getElementById("inspector-side-panel");
    var toggleInspectorBtn = document.getElementById("btn-toggle-inspector-panel");
    var collapseInspectorBtn = document.getElementById("btn-collapse-inspector-panel");

    var formEl = document.getElementById("form-agent-question");
    var inputEl = document.getElementById("input-agent-question");
    var clearBtnEl = document.getElementById("btn-clear-agent-question");
    var keyToggleBtn = document.getElementById("btn-agent-api-key-toggle");
    var keyDrawerEl = document.getElementById("agent-key-drawer");
    var keyInputEl = document.getElementById("input-agent-api-key");
    var keyClearBtnEl = document.getElementById("btn-clear-agent-api-key");
    var keySaveBtnEl = document.getElementById("btn-save-agent-api-key");

    if (!agentPanelEl) return;

    if (inputEl && clearBtnEl && window.InlineClear) {
      window.InlineClear.bind(inputEl, clearBtnEl, function () {});
    }

    if (keyInputEl && keyClearBtnEl && window.InlineClear) {
      try { keyInputEl.value = localStorage.getItem("PIPELINE_GEMINI_API_KEY") || ""; } catch (e) {}
      window.InlineClear.bind(keyInputEl, keyClearBtnEl, function () {
        try { localStorage.removeItem("PIPELINE_GEMINI_API_KEY"); } catch (e) {}
      });
    }

    function setAgentPanelCollapsed(collapsed) {
      if (collapsed) {
        agentPanelEl.classList.add("collapsed");
        document.body.classList.add("agent-panel-collapsed");
        if (toggleAgentBtn) toggleAgentBtn.classList.remove("active");
      } else {
        agentPanelEl.classList.remove("collapsed");
        document.body.classList.remove("agent-panel-collapsed");
        if (toggleAgentBtn) toggleAgentBtn.classList.add("active");
      }
      setTimeout(function () {
        if (typeof window.updatePathwayGeometry === "function") window.updatePathwayGeometry();
      }, 220);
    }
    setAgentPanelCollapsedFn = setAgentPanelCollapsed;

    function setInspectorPanelCollapsed(collapsed) {
      if (!inspectorPanelEl) return;
      if (collapsed) {
        inspectorPanelEl.classList.add("collapsed");
        document.body.classList.add("inspector-panel-collapsed");
        if (toggleInspectorBtn) toggleInspectorBtn.classList.remove("active");
      } else {
        renderDefaultInspectorPlaceholder();
        inspectorPanelEl.classList.remove("collapsed");
        document.body.classList.remove("inspector-panel-collapsed");
        if (toggleInspectorBtn) toggleInspectorBtn.classList.add("active");
      }
      setTimeout(function () {
        if (typeof window.updatePathwayGeometry === "function") window.updatePathwayGeometry();
      }, 220);
    }
    setInspectorPanelCollapsedFn = setInspectorPanelCollapsed;

    setAgentPanelCollapsed(false);
    setInspectorPanelCollapsed(true);
    renderDefaultInspectorPlaceholder();

    if (toggleAgentBtn) {
      toggleAgentBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(!agentPanelEl.classList.contains("collapsed"));
      });
    }

    if (collapseAgentBtn) {
      collapseAgentBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(true);
      });
    }

    if (floatingOpenGuideBtn) {
      floatingOpenGuideBtn.addEventListener("click", function () {
        setAgentPanelCollapsed(false);
      });
    }

    if (toggleInspectorBtn && inspectorPanelEl) {
      toggleInspectorBtn.addEventListener("click", function () {
        setInspectorPanelCollapsed(!inspectorPanelEl.classList.contains("collapsed"));
      });
    }

    if (collapseInspectorBtn) {
      collapseInspectorBtn.addEventListener("click", function () {
        setInspectorPanelCollapsed(true);
      });
    }

    if (keyToggleBtn && keyDrawerEl) {
      keyToggleBtn.addEventListener("click", function () {
        var isHidden = keyDrawerEl.style.display === "none" || !keyDrawerEl.style.display;
        keyDrawerEl.style.display = isHidden ? "flex" : "none";
      });
    }

    if (keySaveBtnEl && keyInputEl && keyDrawerEl) {
      keySaveBtnEl.addEventListener("click", function () {
        var val = (keyInputEl.value || "").trim();
        try {
          if (val) localStorage.setItem("PIPELINE_GEMINI_API_KEY", val);
          else localStorage.removeItem("PIPELINE_GEMINI_API_KEY");
        } catch (e) {}
        keyDrawerEl.style.display = "none";
        appendAgentMessage(
          "assistant",
          val ? "Live Gemini API key saved locally" : "Switched to built-in pipeline navigator",
          val ? "Your key is stored only in your browser's localStorage. Ask any open-ended coding or architecture question!" : "Using the built-in pipeline navigator covering all 8 stops, troubleshooting checklists, and 320+ dictionary terms.",
          null,
          null
        );
      });
    }

    if (formEl && inputEl) {
      formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        var q = inputEl.value;
        if (!q || !q.trim()) return;
        inputEl.value = "";
        if (clearBtnEl) clearBtnEl.style.display = "none";
        handleUserQuestion(q);
      });
    }

    renderStarterChips();
    appendAgentMessage(
      "assistant",
      "Pipeline navigator (not a full AI agent)",
      "I'm a navigator built to help you explore this pipeline and its 320+ dictionary terms—not a full AI coding agent, so I can't answer every open-ended question an agent can. Ask me how to fix broken code, API vs. MCP, Git & Vercel, terminal commands (grep, pwd), databases, or coding languages!",
      null,
      null
    );
  }

  window.PipelineAgent = {
    init: initAgentPanel,
    setContext: function (stopId, label) {
      currentContextStopId = stopId || null;
      currentContextLabel = label || "Full pipeline";
      var badgeEl = document.getElementById("agent-context-badge");
      if (badgeEl) badgeEl.textContent = currentContextLabel;
      renderStarterChips();
      if (setInspectorPanelCollapsedFn) {
        setInspectorPanelCollapsedFn(window.location.search.indexOf("inspect=1") === -1);
      }
    },
    setTab: function () {},
    setInspectorCollapsed: function (collapsed) {
      if (setInspectorPanelCollapsedFn) setInspectorPanelCollapsedFn(Boolean(collapsed));
    },
    setGuideCollapsed: function (collapsed) {
      if (setAgentPanelCollapsedFn) setAgentPanelCollapsedFn(Boolean(collapsed));
    },
    showInspector: showInspectorInSidePanel
  };
})();
