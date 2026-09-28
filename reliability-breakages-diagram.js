// Deployed Eng Pipeline — Step 5 Simple Visual Guide: "5 Things That Break in AI-Built Apps (And How to Fix Each One)"
// Designed for instant clarity: zero jargon, side-by-side Before/After SVG diagram, 2 simple cards, and paired videos.
// Never auto-opens the left inspector panel so the center workspace stays wide and uncluttered.

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

  function svgText(text, attrs) {
    var el = svgEl("text", attrs);
    el.textContent = text;
    return el;
  }

  // Interactive Side-by-side Before (Red: What breaks) vs. After (Blue/Green: How the fix works) SVG visual diagram
  function createSideBySideComparisonSvg(item, activeFocus, onSelectSide) {
    var svg = svgEl("svg", {
      viewBox: "0 0 860 236",
      class: "mcp-vs-api-svg",
      "aria-label": "Interactive side-by-side diagram showing what breaks on the left and how the fix works on the right"
    });

    var isBreakFocus = activeFocus === "break";
    var isFixFocus = activeFocus === "fix";

    // Left Half: WITHOUT PROTECTION (What breaks)
    var leftG = svgEl("g", { class: "mcp-interactive-node" });
    leftG.appendChild(
      svgEl("rect", {
        x: "8",
        y: "8",
        width: "412",
        height: "220",
        rx: "16",
        fill: "var(--color-error-container)",
        stroke: "var(--color-error)",
        "stroke-width": isBreakFocus ? "3.2" : "1.8"
      })
    );

    leftG.appendChild(
      svgText("✗ " + item.visualBefore.title, {
        x: "214",
        y: "32",
        "text-anchor": "middle",
        fill: "var(--color-on-error-container)",
        "font-size": "13",
        "font-weight": "700"
      })
    );

    // Animated vertical warning flow track on Left
    var leftFlowPath = "M 214 68 L 214 176";
    leftG.appendChild(
      svgEl("path", {
        d: leftFlowPath,
        fill: "none",
        stroke: "var(--color-error)",
        "stroke-width": "2.5",
        "stroke-dasharray": "4 3"
      })
    );
    var leftDot = svgEl("circle", { r: "5", fill: "var(--color-error)" });
    leftDot.appendChild(svgEl("animateMotion", { dur: "2.2s", repeatCount: "indefinite", path: leftFlowPath }));
    leftG.appendChild(leftDot);

    [item.visualBefore.step1, item.visualBefore.step2, item.visualBefore.step3].forEach(function (stepTxt, idx) {
      var y = 46 + idx * 52;
      leftG.appendChild(
        svgEl("rect", {
          x: "28",
          y: String(y),
          width: "372",
          height: "38",
          rx: "10",
          fill: "var(--color-surface-container-lowest)",
          stroke: "var(--color-error)",
          "stroke-width": idx === 2 ? "2.2" : "1.3"
        })
      );
      // Status indicator dot on left of step box
      leftG.appendChild(
        svgEl("circle", {
          cx: "46",
          cy: String(y + 19),
          r: idx === 2 ? "6" : "4.5",
          fill: idx === 2 ? "var(--color-error)" : "var(--color-error-container)",
          stroke: "var(--color-error)",
          "stroke-width": "1.5"
        })
      );
      leftG.appendChild(
        svgText(stepTxt, {
          x: "220",
          y: String(y + 24),
          "text-anchor": "middle",
          fill: "var(--color-on-surface)",
          "font-size": "12.5",
          "font-weight": idx === 2 ? "700" : "600"
        })
      );
    });

    leftG.appendChild(
      svgText("Click to inspect fragile code & why it breaks in Left Panel ➔", {
        x: "214",
        y: "214",
        "text-anchor": "middle",
        fill: "var(--color-on-error-container)",
        "font-size": "10.5",
        "font-weight": "600"
      })
    );

    leftG.addEventListener("click", function () {
      if (typeof onSelectSide === "function") onSelectSide("break", true);
    });
    svg.appendChild(leftG);

    // Right Half: WITH THE FIX (How it works)
    var rightG = svgEl("g", { class: "mcp-interactive-node" });
    rightG.appendChild(
      svgEl("rect", {
        x: "440",
        y: "8",
        width: "412",
        height: "220",
        rx: "16",
        fill: "var(--color-primary-container)",
        stroke: "var(--color-primary)",
        "stroke-width": isFixFocus ? "3.2" : "1.8"
      })
    );

    rightG.appendChild(
      svgText("✓ " + item.visualAfter.title, {
        x: "646",
        y: "32",
        "text-anchor": "middle",
        fill: "var(--color-on-primary-container)",
        "font-size": "13",
        "font-weight": "700"
      })
    );

    // Animated vertical protected flow track on Right
    var rightFlowPath = "M 646 68 L 646 176";
    rightG.appendChild(
      svgEl("path", {
        d: rightFlowPath,
        fill: "none",
        stroke: "var(--color-primary)",
        "stroke-width": "2.5"
      })
    );
    var rightDot = svgEl("circle", { r: "5", fill: "var(--color-primary)" });
    rightDot.appendChild(svgEl("animateMotion", { dur: "2.2s", repeatCount: "indefinite", path: rightFlowPath }));
    rightG.appendChild(rightDot);

    [item.visualAfter.step1, item.visualAfter.step2, item.visualAfter.step3].forEach(function (stepTxt, idx) {
      var y = 46 + idx * 52;
      rightG.appendChild(
        svgEl("rect", {
          x: "460",
          y: String(y),
          width: "372",
          height: "38",
          rx: "10",
          fill: "var(--color-surface-container-lowest)",
          stroke: "var(--color-primary)",
          "stroke-width": idx === 2 ? "2.2" : "1.3"
        })
      );
      rightG.appendChild(
        svgEl("circle", {
          cx: "478",
          cy: String(y + 19),
          r: idx === 2 ? "6" : "4.5",
          fill: idx === 2 ? "var(--color-primary)" : "var(--color-primary-container)",
          stroke: "var(--color-primary)",
          "stroke-width": "1.5"
        })
      );
      rightG.appendChild(
        svgText(stepTxt, {
          x: "652",
          y: String(y + 24),
          "text-anchor": "middle",
          fill: "var(--color-on-surface)",
          "font-size": "12.5",
          "font-weight": idx === 2 ? "700" : "600"
        })
      );
    });

    rightG.appendChild(
      svgText("Click to inspect 3-step fix, protected code & AI prompt ➔", {
        x: "646",
        y: "214",
        "text-anchor": "middle",
        fill: "var(--color-on-primary-container)",
        "font-size": "10.5",
        "font-weight": "600"
      })
    );

    rightG.addEventListener("click", function () {
      if (typeof onSelectSide === "function") onSelectSide("fix", true);
    });
    svg.appendChild(rightG);

    return svg;
  }

  function renderReliabilityBreakagesSection(container) {
    var data = window.ReliabilityBreakagesData;
    if (!container || !data || !data.SIMPLE_BREAKAGES) return;

    var items = data.SIMPLE_BREAKAGES;
    var activeIdx = 0;
    var activeFocus = "fix";

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    // --- SIMPLE, CLEAR HEADER ---
    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");

    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Interactive reliability & code safety guide — click any scenario or diagram side to open the fix playbook";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "6 common ways AI-built apps break when real people use them—and how to fix each one";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "The center diagram shows the everyday mental model and Before vs. After flow at a glance. Click either side of the diagram (or any scenario tab) to open the step-by-step code fix and AI editor prompt in the Left Side Panel.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    // --- 6 SCENARIO PILL BUTTONS ---
    var pillsBar = document.createElement("div");
    pillsBar.className = "diagram-pill-cluster";

    var stageHost = document.createElement("div");
    stageHost.className = "reliability-workshop-host";

    // Streamlined Left Side Panel: ZERO duplication of the on-screen headline or everyday analogy!
    // Goes straight to: (1) What breaks & why, (2) 3-step engineering fix, (3) Fragile vs. Fixed code, (4) AI Editor Prompt.
    function showBreakageInSidePanel(item, focusSide, isUserClick) {
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
      window.PipelineAgent.showInspector(
        function (inspectorEl) {
          inspectorEl.replaceChildren();

          var topRow = document.createElement("div");
          topRow.className = "badge-row";
          var b = document.createElement("span");
          b.className = focusSide === "break" ? "badge badge-danger" : "badge badge-success";
          b.textContent = "Fix Playbook · " + item.tabLabel;
          topRow.appendChild(b);
          inspectorEl.appendChild(topRow);

          // 1. What could break (Symptom + Root cause)
          var breakCard = document.createElement("div");
          breakCard.className = "nested-card";
          var bBadge = document.createElement("span");
          bBadge.className = "badge badge-danger";
          bBadge.textContent = "1. What breaks & root cause";
          breakCard.appendChild(bBadge);

          var bList = document.createElement("ul");
          bList.className = "bullet-list";
          item.whatBreaksBullets.forEach(function (line) {
            var li = document.createElement("li");
            li.className = "bullet-item";
            var ic = document.createElement("span");
            ic.className = "material-symbols-outlined bullet-icon";
            ic.textContent = "warning";
            var sp = document.createElement("span");
            sp.textContent = line;
            li.appendChild(ic);
            li.appendChild(sp);
            bList.appendChild(li);
          });
          breakCard.appendChild(bList);
          inspectorEl.appendChild(breakCard);

          // 2. How to fix it (3 concrete steps)
          var fixCard = document.createElement("div");
          fixCard.className = "nested-card";
          var fBadge = document.createElement("span");
          fBadge.className = "badge badge-success";
          fBadge.textContent = "2. How to fix it (3-step checklist)";
          fixCard.appendChild(fBadge);

          var fList = document.createElement("ul");
          fList.className = "bullet-list";
          item.howToFixBullets.forEach(function (line) {
            var li = document.createElement("li");
            li.className = "bullet-item";
            var ic = document.createElement("span");
            ic.className = "material-symbols-outlined bullet-icon";
            ic.textContent = "check_circle";
            var sp = document.createElement("span");
            sp.textContent = line;
            li.appendChild(ic);
            li.appendChild(sp);
            fList.appendChild(li);
          });
          fixCard.appendChild(fList);
          inspectorEl.appendChild(fixCard);

          // 3. 4-line code comparison (Fragile vs. Protected)
          var codeDiffCard = document.createElement("div");
          codeDiffCard.className = "nested-card";
          var codeBadge = document.createElement("span");
          codeBadge.className = "badge badge-info";
          codeBadge.textContent = "3. Code comparison (Fragile vs. Fixed)";
          codeDiffCard.appendChild(codeBadge);

          var badPre = document.createElement("div");
          badPre.className = "vocab-example-box pre-line-text";
          badPre.textContent = item.badCode + "\n\n" + item.goodCode;
          codeDiffCard.appendChild(badPre);
          inspectorEl.appendChild(codeDiffCard);

          // 4. Copyable AI Editor Instruction inside the playbook
          var promptCard = document.createElement("div");
          promptCard.className = "nested-card";
          var pBadge = document.createElement("span");
          pBadge.className = "badge badge-secondary";
          pBadge.textContent = "4. Prompt to paste into Cursor / Claude Code";
          promptCard.appendChild(pBadge);

          var promptText = document.createElement("p");
          promptText.className = "resource-desc";
          promptText.textContent = "\"" + item.aiPrompt + "\"";
          promptCard.appendChild(promptText);

          var copyBtn = document.createElement("button");
          copyBtn.type = "button";
          copyBtn.className = "nav-btn nav-btn-primary";
          var cpIc = document.createElement("span");
          cpIc.className = "material-symbols-outlined btn-icon-sm";
          cpIc.textContent = "content_copy";
          var cpTxt = document.createElement("span");
          cpTxt.textContent = "Copy instruction for your AI editor";
          copyBtn.appendChild(cpIc);
          copyBtn.appendChild(cpTxt);
          copyBtn.addEventListener("click", function () {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(item.aiPrompt).then(function () {
                cpTxt.textContent = "Copied prompt!";
                setTimeout(function () {
                  cpTxt.textContent = "Copy instruction for your AI editor";
                }, 2000);
              });
            }
          });
          promptCard.appendChild(copyBtn);
          inspectorEl.appendChild(promptCard);
        },
        { autoOpen: Boolean(isUserClick), pulse: Boolean(isUserClick), itemTitle: item.tabLabel }
      );
    }

    function renderActive(isUserClick) {
      pillsBar.replaceChildren();
      items.forEach(function (it, idx) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "diagram-label-pill" + (idx === activeIdx ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined diagram-pill-icon";
        ic.textContent = it.icon;
        var sp = document.createElement("span");
        sp.textContent = it.tabLabel;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeIdx = idx;
          renderActive(true);
        });
        pillsBar.appendChild(btn);
      });

      stageHost.replaceChildren();
      var item = items[activeIdx];

      // Center Canvas: Headline + Everyday Analogy + Interactive Before/After Diagram + Inline Jargon Pills + Video/Guide Links
      var visualBox = document.createElement("div");
      visualBox.className = "nested-card";

      var h4 = document.createElement("h4");
      h4.className = "vocab-section-heading";
      h4.textContent = item.headline;
      visualBox.appendChild(h4);

      var analogyP = document.createElement("p");
      analogyP.className = "resource-desc";
      var anStrong = document.createElement("strong");
      anStrong.textContent = "Everyday analogy: ";
      analogyP.appendChild(anStrong);
      analogyP.appendChild(document.createTextNode(item.analogy));
      visualBox.appendChild(analogyP);

      visualBox.appendChild(
        createSideBySideComparisonSvg(item, activeFocus, function (side, clicked) {
          activeFocus = side;
          renderActive(clicked);
        })
      );

      // Inline Plain-English Jargon Translator strip on the Center Canvas (so terms are decoded at a glance)
      var jargonStrip = document.createElement("div");
      jargonStrip.className = "diagram-pill-cluster";
      item.jargonPills.forEach(function (jp) {
        var pill = document.createElement("span");
        pill.className = "badge badge-neutral";
        pill.textContent = jp.word + " = " + jp.plain;
        jargonStrip.appendChild(pill);
      });
      visualBox.appendChild(jargonStrip);

      // Video & Guide links row
      var actionsCluster = document.createElement("div");
      actionsCluster.className = "diagram-pill-cluster";

      var videoLink = document.createElement("a");
      videoLink.className = "nav-btn nav-btn-primary archive-ext-link";
      videoLink.href = item.videoUrl;
      videoLink.target = "_blank";
      videoLink.rel = "noopener noreferrer";
      var vIc = document.createElement("span");
      vIc.className = "material-symbols-outlined btn-icon-sm";
      vIc.textContent = "play_circle";
      var vTxt = document.createElement("span");
      vTxt.textContent = item.videoTitle;
      videoLink.appendChild(vIc);
      videoLink.appendChild(vTxt);
      actionsCluster.appendChild(videoLink);

      var guideLink = document.createElement("a");
      guideLink.className = "diagram-label-pill archive-ext-link";
      guideLink.href = item.guideUrl;
      guideLink.target = "_blank";
      guideLink.rel = "noopener noreferrer";
      var gTxt = document.createElement("span");
      gTxt.textContent = item.guideTitle;
      var gIc = document.createElement("span");
      gIc.className = "material-symbols-outlined diagram-pill-icon";
      gIc.textContent = "open_in_new";
      guideLink.appendChild(gTxt);
      guideLink.appendChild(gIc);
      actionsCluster.appendChild(guideLink);

      var inspectBtn = document.createElement("button");
      inspectBtn.type = "button";
      inspectBtn.className = "diagram-label-pill";
      var inIc = document.createElement("span");
      inIc.className = "material-symbols-outlined diagram-pill-icon";
      inIc.textContent = "code_blocks";
      var inTxt = document.createElement("span");
      inTxt.textContent = "Open code fix & AI prompt in Left Panel";
      inspectBtn.appendChild(inIc);
      inspectBtn.appendChild(inTxt);
      inspectBtn.addEventListener("click", function () {
        showBreakageInSidePanel(item, activeFocus, true);
      });
      actionsCluster.appendChild(inspectBtn);

      visualBox.appendChild(actionsCluster);
      stageHost.appendChild(visualBox);

      showBreakageInSidePanel(item, activeFocus, Boolean(isUserClick));
    }

    renderActive(false);
    card.appendChild(pillsBar);
    card.appendChild(stageHost);
    container.appendChild(card);
  }

  window.renderReliabilityBreakagesSection = renderReliabilityBreakagesSection;
})();
