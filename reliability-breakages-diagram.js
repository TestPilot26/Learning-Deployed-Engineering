// Deployed Eng Pipeline — Step 5 Interactive Renderer: "What Could Break & How to Fix It"
// Plain-English, non-jargon, diagram-illustrated demos + paired videos for every scenario.
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function svgEl(tag, attrs) {
    var el = document.createElementNS(SVG_NS, tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        el.setAttribute(k, attrs[k]);
      });
    }
    return el;
  }

  // Bespoke SVG illustrations for "What could break" vs. "How to fix it" diagram stages
  function createScenarioStageSvg(artType) {
    var svg = svgEl("svg", {
      viewBox: "0 0 160 100",
      class: "stage-art-svg",
      "aria-hidden": "true"
    });

    var isBad =
      artType === "browser-error" ||
      artType === "server-overload" ||
      artType === "crash-flame" ||
      artType === "crowd-spike" ||
      artType === "loop-hammer" ||
      artType === "double-click" ||
      artType === "race-collision" ||
      artType === "hacker-url" ||
      artType === "open-door" ||
      artType === "agent-chain" ||
      artType === "trash-swallow";

    var bgFill = isBad ? "var(--color-error-container)" : "var(--color-primary-container)";
    var strokeCol = isBad ? "var(--color-error)" : "var(--color-primary)";
    var accentFill = isBad ? "var(--color-on-error-container)" : "var(--color-on-primary-container)";

    // Card backdrop frame
    svg.appendChild(
      svgEl("rect", {
        x: "18",
        y: "10",
        width: "124",
        height: "80",
        rx: "14",
        fill: "var(--color-surface-container-low)",
        stroke: strokeCol,
        "stroke-width": "2"
      })
    );

    if (artType === "browser-error" || artType === "browser-happy") {
      // Browser top bar + dots
      svg.appendChild(svgEl("rect", { x: "26", y: "18", width: "108", height: "14", rx: "5", fill: bgFill }));
      svg.appendChild(svgEl("circle", { cx: "34", cy: "25", r: "2.5", fill: strokeCol }));
      svg.appendChild(svgEl("circle", { cx: "42", cy: "25", r: "2.5", fill: strokeCol }));
      if (artType === "browser-error") {
        // Spinning wheel / warning triangle
        svg.appendChild(
          svgEl("circle", {
            cx: "80",
            cy: "58",
            r: "16",
            fill: "none",
            stroke: strokeCol,
            "stroke-width": "3.5",
            "stroke-dasharray": "18 10"
          })
        );
        svg.appendChild(svgEl("line", { x1: "80", y1: "50", x2: "80", y2: "60", stroke: strokeCol, "stroke-width": "3", "stroke-linecap": "round" }));
        svg.appendChild(svgEl("circle", { cx: "80", cy: "66", r: "2", fill: strokeCol }));
      } else {
        // Checkmark badge inside browser
        svg.appendChild(svgEl("circle", { cx: "80", cy: "58", r: "16", fill: bgFill, stroke: strokeCol, "stroke-width": "2.5" }));
        svg.appendChild(
          svgEl("path", {
            d: "M72 58 L78 64 L89 52",
            fill: "none",
            stroke: strokeCol,
            "stroke-width": "3",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        );
      }
    } else if (artType === "loop-hammer" || artType === "server-overload") {
      // Multiple chaotic arrows hammering a box
      [34, 54, 74].forEach(function (y) {
        svg.appendChild(svgEl("line", { x1: "28", y1: String(y), x2: "68", y2: String(y), stroke: strokeCol, "stroke-width": "2.5", "stroke-dasharray": "4 3" }));
        svg.appendChild(svgEl("polygon", { points: "68," + (y - 4) + " 76," + y + " 68," + (y + 4), fill: strokeCol }));
      });
      svg.appendChild(svgEl("rect", { x: "82", y: "26", width: "46", height: "48", rx: "8", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(svgEl("path", { d: "M97 38 L111 62 M111 38 L97 62", stroke: strokeCol, "stroke-width": "3", "stroke-linecap": "round" }));
    } else if (artType === "pool-funnel" || artType === "shield-lock") {
      // Protective shield / clean funnel gate
      svg.appendChild(
        svgEl("path", {
          d: "M80 20 L114 32 L114 54 C114 70 98 80 80 85 C62 80 46 70 46 54 L46 32 Z",
          fill: bgFill,
          stroke: strokeCol,
          "stroke-width": "2.5"
        })
      );
      svg.appendChild(
        svgEl("path", {
          d: "M70 53 L77 60 L92 44",
          fill: "none",
          stroke: strokeCol,
          "stroke-width": "3.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })
      );
    } else if (artType === "crowd-spike" || artType === "crowd-happy") {
      // 3 user silhouettes representing concurrent user traffic
      [50, 80, 110].forEach(function (cx, i) {
        var r = i === 1 ? "9" : "7";
        svg.appendChild(svgEl("circle", { cx: String(cx), cy: "38", r: r, fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
        svg.appendChild(
          svgEl("path", {
            d: "M" + (cx - 14) + " 72 C" + (cx - 14) + " 56 " + (cx + 14) + " 56 " + (cx + 14) + " 72",
            fill: bgFill,
            stroke: strokeCol,
            "stroke-width": "2"
          })
        );
      });
    } else if (artType === "double-click" || artType === "race-collision") {
      // Two overlapping click ripples colliding
      svg.appendChild(svgEl("circle", { cx: "66", cy: "50", r: "20", fill: bgFill, stroke: strokeCol, "stroke-width": "2.5" }));
      svg.appendChild(svgEl("circle", { cx: "94", cy: "50", r: "20", fill: bgFill, stroke: strokeCol, "stroke-width": "2.5", "stroke-dasharray": "5 3" }));
      svg.appendChild(svgEl("path", { d: "M74 42 L86 58 M86 42 L74 58", stroke: accentFill, "stroke-width": "3", "stroke-linecap": "round" }));
    } else if (artType === "hacker-url" || artType === "open-door") {
      // Address bar with tampered ?id=105 and unlocked padlock
      svg.appendChild(svgEl("rect", { x: "28", y: "26", width: "104", height: "22", rx: "6", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(svgEl("line", { x1: "36", y1: "37", x2: "92", y2: "37", stroke: strokeCol, "stroke-width": "3", "stroke-linecap": "round" }));
      svg.appendChild(svgEl("circle", { cx: "114", cy: "37", r: "5", fill: strokeCol }));
      svg.appendChild(svgEl("rect", { x: "64", y: "56", width: "32", height: "24", rx: "5", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
    } else if (artType === "agent-chain" || artType === "trash-swallow") {
      // Drifting chain or error swallowed into trash bin
      svg.appendChild(svgEl("rect", { x: "34", y: "34", width: "24", height: "24", rx: "6", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(svgEl("rect", { x: "68", y: "24", width: "24", height: "24", rx: "6", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(svgEl("rect", { x: "102", y: "54", width: "24", height: "24", rx: "6", fill: bgFill, stroke: strokeCol, "stroke-width": "2", "stroke-dasharray": "4 2" }));
      svg.appendChild(svgEl("path", { d: "M58 46 L68 36 M92 36 L102 64", stroke: strokeCol, "stroke-width": "2.5" }));
    } else if (artType === "radar-alarm") {
      // Smoke alarm / radar sensor catching error immediately
      svg.appendChild(svgEl("circle", { cx: "80", cy: "50", r: "26", fill: bgFill, stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(svgEl("circle", { cx: "80", cy: "50", r: "14", fill: "none", stroke: strokeCol, "stroke-width": "2", "stroke-dasharray": "4 3" }));
      svg.appendChild(svgEl("circle", { cx: "80", cy: "50", r: "5", fill: strokeCol }));
      svg.appendChild(svgEl("line", { x1: "80", y1: "50", x2: "98", y2: "34", stroke: strokeCol, "stroke-width": "2.5", "stroke-linecap": "round" }));
    } else if (artType === "crash-flame") {
      // Warning octagon / crash state
      svg.appendChild(svgEl("circle", { cx: "80", cy: "50", r: "25", fill: bgFill, stroke: strokeCol, "stroke-width": "2.5" }));
      svg.appendChild(svgEl("path", { d: "M70 40 L90 60 M90 40 L70 60", stroke: strokeCol, "stroke-width": "4", "stroke-linecap": "round" }));
    } else {
      // db-clean: healthy database cylinder + checkmark
      svg.appendChild(svgEl("rect", { x: "52", y: "24", width: "56", height: "52", rx: "10", fill: bgFill, stroke: strokeCol, "stroke-width": "2.5" }));
      svg.appendChild(svgEl("line", { x1: "52", y1: "40", x2: "108", y2: "40", stroke: strokeCol, "stroke-width": "2" }));
      svg.appendChild(
        svgEl("path", {
          d: "M70 58 L77 65 L91 50",
          fill: "none",
          stroke: strokeCol,
          "stroke-width": "3.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        })
      );
    }

    return svg;
  }

  function populateScenarioInSidePanel(sc) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        var topRow = document.createElement("div");
        topRow.className = "resource-title-row";
        var b1 = document.createElement("span");
        b1.className = "badge badge-danger";
        b1.textContent = "Scenario " + sc.number + " · " + sc.categoryBadge;
        var b2 = document.createElement("span");
        b2.className = "badge badge-secondary";
        b2.textContent = sc.sourceBadge;
        topRow.appendChild(b1);
        topRow.appendChild(b2);

        var h4 = document.createElement("h4");
        h4.textContent = sc.whatCouldBreakTitle;

        var analogyBox = document.createElement("div");
        analogyBox.className = "nested-card";
        var anP = document.createElement("p");
        anP.className = "resource-desc";
        anP.textContent = "Everyday analogy: " + sc.everydayAnalogy;
        analogyBox.appendChild(anP);

        var fixBanner = document.createElement("div");
        fixBanner.className = "arch-mode-banner good-mode";
        var fIc = document.createElement("span");
        fIc.className = "material-symbols-outlined safety-icon";
        fIc.textContent = "verified";
        var fTxt = document.createElement("span");
        fTxt.textContent = "How to fix it: " + sc.howToFixTitle;
        fixBanner.appendChild(fIc);
        fixBanner.appendChild(fTxt);

        inspectorEl.appendChild(topRow);
        inspectorEl.appendChild(h4);
        inspectorEl.appendChild(analogyBox);
        inspectorEl.appendChild(fixBanner);
      },
      {
        itemTitle: sc.shortPill,
        autoOpen: true,
        pulse: true
      }
    );
  }

  function renderThreeStageFlowDiagram(spec, isFixedMode) {
    var art = window.DiagramIllustrations;
    var canvas = document.createElement("div");
    canvas.className = "loop-diagram-canvas reliability-flow-canvas";

    var modeBanner = document.createElement("div");
    modeBanner.className = "arch-mode-banner " + (isFixedMode ? "good-mode" : "bad-mode");
    var mIc = document.createElement("span");
    mIc.className = "material-symbols-outlined safety-icon";
    mIc.textContent = isFixedMode ? "check_circle" : "warning";
    var mTxt = document.createElement("strong");
    mTxt.textContent = spec.banner;
    modeBanner.appendChild(mIc);
    modeBanner.appendChild(mTxt);
    canvas.appendChild(modeBanner);

    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    [spec.stage1, spec.stage2, spec.stage3].forEach(function (st, idx) {
      var stCard = document.createElement("div");
      stCard.className = "loop-stage-card";

      var artWrap = document.createElement("div");
      artWrap.className = "loop-stage-art-wrap";
      artWrap.appendChild(createScenarioStageSvg(st.artType));

      var stTitle = document.createElement("strong");
      stTitle.className = "loop-stage-title";
      stTitle.textContent = st.title;

      var stSub = document.createElement("span");
      stSub.className = "loop-stage-subtitle";
      stSub.textContent = st.subtitle;

      var pillBadge = document.createElement("span");
      pillBadge.className = "badge " + (isFixedMode ? "badge-success" : "badge-danger");
      pillBadge.textContent = st.pill;

      stCard.appendChild(artWrap);
      stCard.appendChild(stTitle);
      stCard.appendChild(stSub);
      stCard.appendChild(pillBadge);
      topRow.appendChild(stCard);

      if (idx < 2) {
        var arr = idx === 0 ? spec.arrow1 : spec.arrow2;
        if (art && typeof art.createHorizontalStepArrow === "function") {
          topRow.appendChild(art.createHorizontalStepArrow(arr.top, arr.bottom));
        }
      }
    });

    canvas.appendChild(topRow);
    return canvas;
  }

  function renderReliabilityBreakagesSection(container) {
    var data = window.ReliabilityBreakagesData;
    if (!container || !data) return;

    var scenarios = data.BREAKAGE_SCENARIOS || [];
    var scaleStages = data.SCALE_USER_STAGES || [];
    var alarmStages = data.SMOKE_ALARM_STAGES || [];

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    // --- HEADER ---
    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");

    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Plain-English visual guide — grouped by 'What could break' & 'How to fix it' + paired videos";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "What could break & how to fix it: 6 interactive illustrated demos (zero jargon)";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "You don't need to memorize complicated computer science words to build a rock-solid app. Pick any everyday problem below to see an illustrated diagram of what breaks, how the fix works, a plain-English jargon decoder, and a short video walkthrough.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    // --- TOP-LEVEL 3-MODE SWITCHER ---
    var activeTab = "what-breaks"; // "what-breaks" | "scale-users" | "smoke-alarms"
    var activeScenarioIdx = 0;
    var isFixedSimulation = false; // Toggle between "See what breaks" (false) and "See how the fix works" (true)
    var activeScaleIdx = 1;

    var modeTabsBar = document.createElement("div");
    modeTabsBar.className = "vocab-top-tabs-bar";

    var bodyHost = document.createElement("div");
    bodyHost.className = "reliability-workshop-host";

    function renderWorkshop() {
      modeTabsBar.replaceChildren();
      [
        {
          id: "what-breaks",
          label: "1. What could break & how to fix it (6 visual demos + videos)",
          icon: "build_circle"
        },
        {
          id: "scale-users",
          label: "2. Why it worked on your laptop -> broke with 50 or 5,000 users",
          icon: "groups"
        },
        {
          id: "smoke-alarms",
          label: "3. Automated 'smoke alarm' agents (Catch & fix bugs for you)",
          icon: "radar"
        }
      ].forEach(function (tab) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vocab-top-tab-btn" + (activeTab === tab.id ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined btn-icon-sm";
        ic.textContent = tab.icon;
        var sp = document.createElement("span");
        sp.textContent = tab.label;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeTab = tab.id;
          renderWorkshop();
        });
        modeTabsBar.appendChild(btn);
      });

      bodyHost.replaceChildren();

      if (activeTab === "what-breaks") {
        renderWhatBreaksTab(bodyHost);
      } else if (activeTab === "scale-users") {
        renderScaleUsersTab(bodyHost);
      } else {
        renderSmokeAlarmsTab(bodyHost);
      }
    }

    // =========================================================================
    // TAB 1: WHAT COULD BREAK & HOW TO FIX IT (6 ILLUSTRATED DEMOS + VIDEOS)
    // =========================================================================
    function renderWhatBreaksTab(host) {
      var sc = scenarios[activeScenarioIdx];

      // 1. 6 Plain-English Scenario Pills
      var pickerBox = document.createElement("div");
      pickerBox.className = "nested-card";
      var pickerLbl = document.createElement("strong");
      pickerLbl.className = "diagram-node-title";
      pickerLbl.textContent = "Pick a 'What could break' scenario (1 to 6):";
      pickerBox.appendChild(pickerLbl);

      var pillsCluster = document.createElement("div");
      pillsCluster.className = "diagram-pill-cluster";
      scenarios.forEach(function (item, idx) {
        var pill = document.createElement("button");
        pill.type = "button";
        pill.className = "diagram-label-pill" + (idx === activeScenarioIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = item.icon;
        var txt = document.createElement("span");
        txt.textContent = item.shortPill;
        pill.appendChild(ic);
        pill.appendChild(txt);
        pill.addEventListener("click", function () {
          activeScenarioIdx = idx;
          isFixedSimulation = false;
          populateScenarioInSidePanel(item);
          renderWorkshop();
        });
        pillsCluster.appendChild(pill);
      });
      pickerBox.appendChild(pillsCluster);
      host.appendChild(pickerBox);

      // 2. Scenario Headline + Everyday Analogy + Interactive Diagram Simulator
      var demoStageCard = document.createElement("div");
      demoStageCard.className = "nested-card";

      var topHeader = document.createElement("div");
      topHeader.className = "resource-title-row";

      var badgeGroup = document.createElement("div");
      badgeGroup.className = "badge-row";
      var bCat = document.createElement("span");
      bCat.className = "badge badge-info";
      bCat.textContent = "Scenario " + sc.number + " of 6 · " + sc.categoryBadge;
      var bSrc = document.createElement("span");
      bSrc.className = "badge badge-secondary";
      bSrc.textContent = sc.sourceBadge;
      badgeGroup.appendChild(bCat);
      badgeGroup.appendChild(bSrc);
      topHeader.appendChild(badgeGroup);

      // Interactive Toggle: "See what breaks" vs "See how the fix works"
      var simToggleCluster = document.createElement("div");
      simToggleCluster.className = "diagram-pill-cluster";

      var btnBreak = document.createElement("button");
      btnBreak.type = "button";
      btnBreak.className = "diagram-label-pill" + (!isFixedSimulation ? " active" : "");
      var icBrk = document.createElement("span");
      icBrk.className = "material-symbols-outlined diagram-pill-icon";
      icBrk.textContent = "warning";
      var txtBrk = document.createElement("span");
      txtBrk.textContent = "1. See what could break (Fragile)";
      btnBreak.appendChild(icBrk);
      btnBreak.appendChild(txtBrk);
      btnBreak.addEventListener("click", function () {
        isFixedSimulation = false;
        renderWorkshop();
      });

      var btnFix = document.createElement("button");
      btnFix.type = "button";
      btnFix.className = "diagram-label-pill" + (isFixedSimulation ? " active" : "");
      var icFx = document.createElement("span");
      icFx.className = "material-symbols-outlined diagram-pill-icon";
      icFx.textContent = "verified";
      var txtFx = document.createElement("span");
      txtFx.textContent = "2. See how to fix it (Reliable)";
      btnFix.appendChild(icFx);
      btnFix.appendChild(txtFx);
      btnFix.addEventListener("click", function () {
        isFixedSimulation = true;
        renderWorkshop();
      });

      simToggleCluster.appendChild(btnBreak);
      simToggleCluster.appendChild(btnFix);
      topHeader.appendChild(simToggleCluster);
      demoStageCard.appendChild(topHeader);

      var scTitle = document.createElement("h4");
      scTitle.className = "vocab-section-heading";
      scTitle.textContent = isFixedSimulation
        ? "How to fix it: " + sc.howToFixTitle
        : "What could break: " + sc.whatCouldBreakTitle;
      demoStageCard.appendChild(scTitle);

      var analogyBanner = document.createElement("div");
      analogyBanner.className = "surface-card";
      var anLead = document.createElement("strong");
      anLead.textContent = "Everyday analogy: ";
      var anBody = document.createElement("span");
      anBody.className = "resource-desc";
      anBody.textContent = sc.everydayAnalogy;
      analogyBanner.appendChild(anLead);
      analogyBanner.appendChild(anBody);
      demoStageCard.appendChild(analogyBanner);

      // 3-Stage Visual Flow Diagram
      var activeDiagSpec = isFixedSimulation ? sc.diagramFixed : sc.diagramBroken;
      demoStageCard.appendChild(renderThreeStageFlowDiagram(activeDiagSpec, isFixedSimulation));
      host.appendChild(demoStageCard);

      // 3. Side-by-Side "WHAT COULD BREAK" vs. "HOW TO FIX IT" Cards
      var twoCol = document.createElement("div");
      twoCol.className = "detail-two-col";

      // LEFT COLUMN: What Could Break + Jargon Decoder + Fragile Code
      var breakCol = document.createElement("div");
      breakCol.className = "nested-card";

      var brkTop = document.createElement("div");
      brkTop.className = "resource-title-row";
      var brkBadge = document.createElement("span");
      brkBadge.className = "badge badge-danger";
      brkBadge.textContent = "What could break";
      brkTop.appendChild(brkBadge);
      breakCol.appendChild(brkTop);

      var brkH4 = document.createElement("h4");
      brkH4.textContent = sc.whatCouldBreakTitle;
      breakCol.appendChild(brkH4);

      var seesP = document.createElement("p");
      seesP.className = "resource-desc";
      var seesStrong = document.createElement("strong");
      seesStrong.textContent = "What you see on screen: ";
      seesP.appendChild(seesStrong);
      seesP.appendChild(document.createTextNode(sc.whatUserSees));
      breakCol.appendChild(seesP);

      var whyP = document.createElement("p");
      whyP.className = "resource-desc";
      var whyStrong = document.createElement("strong");
      whyStrong.textContent = "Why it happens (in plain English): ";
      whyP.appendChild(whyStrong);
      whyP.appendChild(document.createTextNode(sc.whyItBreaksPlain));
      breakCol.appendChild(whyP);

      // Jargon Decoder Box
      var decoderBox = document.createElement("div");
      decoderBox.className = "surface-card";
      var decBadge = document.createElement("span");
      decBadge.className = "badge badge-secondary";
      decBadge.textContent = "Plain-English jargon decoder (Words engineers use for this)";
      decoderBox.appendChild(decBadge);

      var decList = document.createElement("ul");
      decList.className = "bullet-list";
      sc.jargonDecoder.forEach(function (jd) {
        var li = document.createElement("li");
        li.className = "bullet-item";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined bullet-icon";
        ic.textContent = "translate";
        var sp = document.createElement("span");
        var st = document.createElement("strong");
        st.textContent = jd.term + ": ";
        sp.appendChild(st);
        sp.appendChild(document.createTextNode(jd.meaning));
        li.appendChild(ic);
        li.appendChild(sp);
        decList.appendChild(li);
      });
      decoderBox.appendChild(decList);
      breakCol.appendChild(decoderBox);

      var badCodeLbl = document.createElement("strong");
      badCodeLbl.textContent = sc.badCodeTitle;
      breakCol.appendChild(badCodeLbl);
      var badPre = document.createElement("div");
      badPre.className = "vocab-example-box";
      badPre.textContent = sc.badCode;
      breakCol.appendChild(badPre);

      // RIGHT COLUMN: How to Fix It + Copyable AI Prompt + Fixed Code
      var fixCol = document.createElement("div");
      fixCol.className = "nested-card";

      var fixTop = document.createElement("div");
      fixTop.className = "resource-title-row";
      var fixBadge = document.createElement("span");
      fixBadge.className = "badge badge-success";
      fixBadge.textContent = "How to fix it";
      fixTop.appendChild(fixBadge);
      fixCol.appendChild(fixTop);

      var fixH4 = document.createElement("h4");
      fixH4.textContent = sc.howToFixTitle;
      fixCol.appendChild(fixH4);

      var fixList = document.createElement("ul");
      fixList.className = "bullet-list";
      sc.howToFixSteps.forEach(function (stepStr) {
        var li = document.createElement("li");
        li.className = "bullet-item";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined bullet-icon";
        ic.textContent = "check_circle";
        var sp = document.createElement("span");
        sp.textContent = stepStr;
        li.appendChild(ic);
        li.appendChild(sp);
        fixList.appendChild(li);
      });
      fixCol.appendChild(fixList);

      // Copyable AI Prompt Box
      var promptBox = document.createElement("div");
      promptBox.className = "surface-card";
      var prTop = document.createElement("div");
      prTop.className = "resource-title-row";
      var prBadge = document.createElement("span");
      prBadge.className = "badge badge-info";
      prBadge.textContent = "Prompt to paste into Cursor / Claude / Gemini";
      var copyPromptBtn = document.createElement("button");
      copyPromptBtn.type = "button";
      copyPromptBtn.className = "diagram-label-pill";
      var cpIc = document.createElement("span");
      cpIc.className = "material-symbols-outlined diagram-pill-icon";
      cpIc.textContent = "content_copy";
      var cpTxt = document.createElement("span");
      cpTxt.textContent = "Copy prompt";
      copyPromptBtn.appendChild(cpIc);
      copyPromptBtn.appendChild(cpTxt);
      copyPromptBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(sc.aiPromptToCopy).then(function () {
            cpTxt.textContent = "Copied!";
            setTimeout(function () { cpTxt.textContent = "Copy prompt"; }, 2000);
          });
        }
      });
      prTop.appendChild(prBadge);
      prTop.appendChild(copyPromptBtn);
      promptBox.appendChild(prTop);

      var prText = document.createElement("p");
      prText.className = "resource-desc";
      prText.textContent = "\"" + sc.aiPromptToCopy + "\"";
      promptBox.appendChild(prText);
      fixCol.appendChild(promptBox);

      var goodCodeLbl = document.createElement("strong");
      goodCodeLbl.textContent = sc.goodCodeTitle;
      fixCol.appendChild(goodCodeLbl);
      var goodPre = document.createElement("div");
      goodPre.className = "vocab-example-box";
      goodPre.textContent = sc.goodCode;
      fixCol.appendChild(goodPre);

      twoCol.appendChild(breakCol);
      twoCol.appendChild(fixCol);
      host.appendChild(twoCol);

      // 4. Paired Video Walkthrough & Frontier Engineering Guide for THIS Scenario
      var mediaRow = document.createElement("div");
      mediaRow.className = "detail-two-col";

      var videoCard = document.createElement("div");
      videoCard.className = "nested-card";
      var vTop = document.createElement("div");
      vTop.className = "resource-title-row";
      var vBadge = document.createElement("span");
      vBadge.className = "badge badge-info";
      vBadge.textContent = "Watch video for Scenario " + sc.number + " · " + sc.video.duration;
      vTop.appendChild(vBadge);
      var vTitle = document.createElement("h4");
      vTitle.textContent = sc.video.title;
      var vDesc = document.createElement("p");
      vDesc.className = "resource-desc";
      vDesc.textContent = sc.video.whyWatch;
      var vLink = document.createElement("a");
      vLink.className = "nav-btn nav-btn-primary archive-ext-link";
      vLink.href = sc.video.url;
      vLink.target = "_blank";
      vLink.rel = "noopener noreferrer";
      var vLinkTxt = document.createElement("span");
      vLinkTxt.textContent = "Watch video walkthrough";
      var vLinkIc = document.createElement("span");
      vLinkIc.className = "material-symbols-outlined btn-icon-sm";
      vLinkIc.textContent = "play_circle";
      vLink.appendChild(vLinkIc);
      vLink.appendChild(vLinkTxt);
      videoCard.appendChild(vTop);
      videoCard.appendChild(vTitle);
      videoCard.appendChild(vDesc);
      videoCard.appendChild(vLink);

      var guideCard = document.createElement("div");
      guideCard.className = "nested-card";
      var gTop = document.createElement("div");
      gTop.className = "resource-title-row";
      var gBadge = document.createElement("span");
      gBadge.className = "badge badge-success";
      gBadge.textContent = "Deep-dive guide · " + sc.guide.source;
      gTop.appendChild(gBadge);
      var gTitle = document.createElement("h4");
      gTitle.textContent = sc.guide.title;
      var gDesc = document.createElement("p");
      gDesc.className = "resource-desc";
      gDesc.textContent = sc.guide.whyRead;
      var gLink = document.createElement("a");
      gLink.className = "nav-btn archive-ext-link";
      gLink.href = sc.guide.url;
      gLink.target = "_blank";
      gLink.rel = "noopener noreferrer";
      var gLinkTxt = document.createElement("span");
      gLinkTxt.textContent = "Read engineering guide";
      var gLinkIc = document.createElement("span");
      gLinkIc.className = "material-symbols-outlined btn-icon-sm";
      gLinkIc.textContent = "open_in_new";
      gLink.appendChild(gLinkTxt);
      gLink.appendChild(gLinkIc);
      guideCard.appendChild(gTop);
      guideCard.appendChild(gTitle);
      guideCard.appendChild(gDesc);
      guideCard.appendChild(gLink);

      mediaRow.appendChild(videoCard);
      mediaRow.appendChild(guideCard);
      host.appendChild(mediaRow);
    }

    // =========================================================================
    // TAB 2: SCALING USERS (1 USER -> 50 USERS -> 5,000+ USERS)
    // =========================================================================
    function renderScaleUsersTab(host) {
      var st = scaleStages[activeScaleIdx];

      var pillBox = document.createElement("div");
      pillBox.className = "nested-card";
      var pCluster = document.createElement("div");
      pCluster.className = "diagram-pill-cluster";

      scaleStages.forEach(function (tier, idx) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "diagram-label-pill" + (idx === activeScaleIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = tier.icon;
        var sp = document.createElement("span");
        sp.textContent = tier.pillLabel;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeScaleIdx = idx;
          renderWorkshop();
        });
        pCluster.appendChild(btn);
      });
      pillBox.appendChild(pCluster);
      host.appendChild(pillBox);

      var summaryCard = document.createElement("div");
      summaryCard.className = "nested-card";
      var bRow = document.createElement("div");
      bRow.className = "badge-row";
      var b = document.createElement("span");
      b.className = "badge " + st.badgeClass;
      b.textContent = st.badge;
      bRow.appendChild(b);
      var h4 = document.createElement("h4");
      h4.textContent = st.headline;
      var p = document.createElement("p");
      p.className = "resource-desc";
      p.textContent = st.plainSummary;
      summaryCard.appendChild(bRow);
      summaryCard.appendChild(h4);
      summaryCard.appendChild(p);
      host.appendChild(summaryCard);

      var twoCol = document.createElement("div");
      twoCol.className = "detail-two-col";

      var leftCard = document.createElement("div");
      leftCard.className = "nested-card";
      var lBadge = document.createElement("span");
      lBadge.className = "badge badge-danger";
      lBadge.textContent = "What could break at this traffic level";
      leftCard.appendChild(lBadge);
      var lList = document.createElement("ul");
      lList.className = "bullet-list";
      st.whatCouldBreak.forEach(function (item) {
        var li = document.createElement("li");
        li.className = "bullet-item";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined bullet-icon";
        ic.textContent = "warning";
        var sp = document.createElement("span");
        sp.textContent = item;
        li.appendChild(ic);
        li.appendChild(sp);
        lList.appendChild(li);
      });
      leftCard.appendChild(lList);

      var rightCard = document.createElement("div");
      rightCard.className = "nested-card";
      var rBadge = document.createElement("span");
      rBadge.className = "badge badge-success";
      rBadge.textContent = "How to fix it before you share the link";
      rightCard.appendChild(rBadge);
      var rList = document.createElement("ul");
      rList.className = "bullet-list";
      st.howToFix.forEach(function (item) {
        var li = document.createElement("li");
        li.className = "bullet-item";
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined bullet-icon";
        ic.textContent = "check_circle";
        var sp = document.createElement("span");
        sp.textContent = item;
        li.appendChild(ic);
        li.appendChild(sp);
        rList.appendChild(li);
      });
      rightCard.appendChild(rList);

      var vLink = document.createElement("a");
      vLink.className = "nav-btn nav-btn-primary archive-ext-link";
      vLink.href = st.video.url;
      vLink.target = "_blank";
      vLink.rel = "noopener noreferrer";
      var vIc = document.createElement("span");
      vIc.className = "material-symbols-outlined btn-icon-sm";
      vIc.textContent = "play_circle";
      var vTxt = document.createElement("span");
      vTxt.textContent = st.video.title;
      vLink.appendChild(vIc);
      vLink.appendChild(vTxt);
      rightCard.appendChild(vLink);

      twoCol.appendChild(leftCard);
      twoCol.appendChild(rightCard);
      host.appendChild(twoCol);
    }

    // =========================================================================
    // TAB 3: AUTOMATED 'SMOKE ALARM' AGENTS
    // =========================================================================
    function renderSmokeAlarmsTab(host) {
      var introCard = document.createElement("div");
      introCard.className = "nested-card";
      var h4 = document.createElement("h4");
      h4.textContent =
        "How modern teams (Anthropic, Cognition, DeepMind & OpenAI) set up 'Smoke Alarm' agents that catch and fix bugs";
      var p = document.createElement("p");
      p.className = "resource-desc";
      p.textContent =
        "Instead of waiting for users to email you that a button is broken, you can wire up a 4-step safety loop: (1) a Smoke Alarm catches the crash, (2) it pinpoints the exact file and line number, (3) a coding agent writes a small test in a sandbox to prove its fix works, and (4) it hands you a ready-to-approve Pull Request.";
      introCard.appendChild(h4);
      introCard.appendChild(p);
      host.appendChild(introCard);

      var grid = document.createElement("div");
      grid.className = "detail-two-col";

      alarmStages.forEach(function (stg) {
        var stCard = document.createElement("div");
        stCard.className = "nested-card";

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

        var brkP = document.createElement("p");
        brkP.className = "resource-desc";
        var brkS = document.createElement("strong");
        brkS.textContent = "What could break without this: ";
        brkP.appendChild(brkS);
        brkP.appendChild(document.createTextNode(stg.whatCouldBreak));

        var fixP = document.createElement("p");
        fixP.className = "resource-desc";
        var fixS = document.createElement("strong");
        fixS.textContent = "How to set it up: ";
        fixP.appendChild(fixS);
        fixP.appendChild(document.createTextNode(stg.howToFix));

        stCard.appendChild(top);
        stCard.appendChild(t);
        stCard.appendChild(brkP);
        stCard.appendChild(fixP);
        grid.appendChild(stCard);
      });

      host.appendChild(grid);
    }

    renderWorkshop();
    card.appendChild(modeTabsBar);
    card.appendChild(bodyHost);
    container.appendChild(card);
  }

  window.renderReliabilityBreakagesSection = renderReliabilityBreakagesSection;
})();
