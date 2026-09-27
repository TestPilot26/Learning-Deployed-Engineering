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

  // Side-by-side Before (Red: What breaks) vs. After (Green: How the fix works) SVG visual diagram
  function createSideBySideComparisonSvg(item) {
    var svg = svgEl("svg", {
      viewBox: "0 0 860 220",
      class: "mcp-vs-api-svg",
      "aria-label": "Side-by-side diagram showing what breaks on the left and how the fix works on the right"
    });

    // Left Half: WITHOUT PROTECTION (What breaks)
    svg.appendChild(
      svgEl("rect", {
        x: "8",
        y: "8",
        width: "412",
        height: "204",
        rx: "16",
        fill: "var(--color-error-container)",
        stroke: "var(--color-error)",
        "stroke-width": "2"
      })
    );

    svg.appendChild(
      svgText("✗ " + item.visualBefore.title, {
        x: "214",
        y: "34",
        "text-anchor": "middle",
        fill: "var(--color-on-error-container)",
        "font-size": "13.5",
        "font-weight": "700"
      })
    );

    [item.visualBefore.step1, item.visualBefore.step2, item.visualBefore.step3].forEach(function (stepTxt, idx) {
      var y = 50 + idx * 52;
      svg.appendChild(
        svgEl("rect", {
          x: "28",
          y: String(y),
          width: "372",
          height: "38",
          rx: "10",
          fill: "var(--color-surface-container-lowest)",
          stroke: "var(--color-error)",
          "stroke-width": idx === 2 ? "2" : "1.2"
        })
      );
      svg.appendChild(
        svgText(stepTxt, {
          x: "214",
          y: String(y + 24),
          "text-anchor": "middle",
          fill: "var(--color-on-surface)",
          "font-size": "13",
          "font-weight": idx === 2 ? "700" : "600"
        })
      );
      if (idx < 2) {
        svg.appendChild(
          svgEl("line", {
            x1: "214",
            y1: String(y + 38),
            x2: "214",
            y2: String(y + 52),
            stroke: "var(--color-error)",
            "stroke-width": "2.5"
          })
        );
      }
    });

    // Right Half: WITH THE FIX (How it works)
    svg.appendChild(
      svgEl("rect", {
        x: "440",
        y: "8",
        width: "412",
        height: "204",
        rx: "16",
        fill: "var(--color-primary-container)",
        stroke: "var(--color-primary)",
        "stroke-width": "2"
      })
    );

    svg.appendChild(
      svgText("✓ " + item.visualAfter.title, {
        x: "646",
        y: "34",
        "text-anchor": "middle",
        fill: "var(--color-on-primary-container)",
        "font-size": "13.5",
        "font-weight": "700"
      })
    );

    [item.visualAfter.step1, item.visualAfter.step2, item.visualAfter.step3].forEach(function (stepTxt, idx) {
      var y = 50 + idx * 52;
      svg.appendChild(
        svgEl("rect", {
          x: "460",
          y: String(y),
          width: "372",
          height: "38",
          rx: "10",
          fill: "var(--color-surface-container-lowest)",
          stroke: "var(--color-primary)",
          "stroke-width": idx === 2 ? "2" : "1.2"
        })
      );
      svg.appendChild(
        svgText(stepTxt, {
          x: "646",
          y: String(y + 24),
          "text-anchor": "middle",
          fill: "var(--color-on-surface)",
          "font-size": "13",
          "font-weight": idx === 2 ? "700" : "600"
        })
      );
      if (idx < 2) {
        svg.appendChild(
          svgEl("line", {
            x1: "646",
            y1: String(y + 38),
            x2: "646",
            y2: String(y + 52),
            stroke: "var(--color-primary)",
            "stroke-width": "2.5"
          })
        );
      }
    });

    return svg;
  }

  function renderReliabilityBreakagesSection(container) {
    var data = window.ReliabilityBreakagesData;
    if (!container || !data || !data.SIMPLE_BREAKAGES) return;

    var items = data.SIMPLE_BREAKAGES;
    var activeIdx = 0;
    var showCodeComparison = false;

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
    topBadge.textContent = "Interactive reliability & code safety guide — click any tab to inspect in the side panel";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "6 common ways AI-built apps break when real people use them—and how to fix each one";

    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "When you test an app by yourself on your laptop, almost everything seems to work. Click any of the 6 real-world situations below to see a side-by-side diagram of what goes wrong, the 3-step fix in the Left Side Panel, and a short video walkthrough.";

    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    // --- 5 SIMPLE SCENARIO PILL BUTTONS ---
    var pillsBar = document.createElement("div");
    pillsBar.className = "diagram-pill-cluster";

    var stageHost = document.createElement("div");
    stageHost.className = "reliability-workshop-host";

    function showBreakageInSidePanel(item, isUserClick) {
      if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
      window.PipelineAgent.showInspector(
        function (inspectorEl) {
          inspectorEl.replaceChildren();

          var topRow = document.createElement("div");
          topRow.className = "resource-title-row";
          var b = document.createElement("span");
          b.className = "badge badge-danger";
          b.textContent = item.tabLabel;
          topRow.appendChild(b);
          inspectorEl.appendChild(topRow);

          var h4 = document.createElement("h4");
          h4.textContent = item.headline;
          inspectorEl.appendChild(h4);

          var analogyBox = document.createElement("div");
          analogyBox.className = "nested-card";
          var analogyP = document.createElement("p");
          analogyP.className = "resource-desc";
          analogyP.textContent = "Everyday analogy: " + item.analogy;
          analogyBox.appendChild(analogyP);
          inspectorEl.appendChild(analogyBox);

          // 1. What could break
          var breakCard = document.createElement("div");
          breakCard.className = "nested-card";
          var bBadge = document.createElement("span");
          bBadge.className = "badge badge-danger";
          bBadge.textContent = "1. What could break";
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

          // 2. How to fix it
          var fixCard = document.createElement("div");
          fixCard.className = "nested-card";
          var fBadge = document.createElement("span");
          fBadge.className = "badge badge-success";
          fBadge.textContent = "2. How to fix it";
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

          // 3. Plain-English translator
          var jargonBox = document.createElement("div");
          jargonBox.className = "nested-card";
          var jTitle = document.createElement("strong");
          jTitle.textContent = "Plain-English translator:";
          jargonBox.appendChild(jTitle);

          var jList = document.createElement("ul");
          jList.className = "bullet-list";
          item.jargonPills.forEach(function (jp) {
            var li = document.createElement("li");
            li.className = "bullet-item";
            var ic = document.createElement("span");
            ic.className = "material-symbols-outlined bullet-icon";
            ic.textContent = "translate";
            var sp = document.createElement("span");
            var st = document.createElement("strong");
            st.textContent = jp.word + " = ";
            sp.appendChild(st);
            sp.appendChild(document.createTextNode(jp.plain));
            li.appendChild(ic);
            li.appendChild(sp);
            jList.appendChild(li);
          });
          jargonBox.appendChild(jList);
          inspectorEl.appendChild(jargonBox);

          // 4. 4-line code comparison
          var badPre = document.createElement("div");
          badPre.className = "vocab-example-box";
          badPre.textContent = "# Fragile code (What breaks):\n" + item.badCode + "\n\n# Fixed code (With protection):\n" + item.goodCode;
          inspectorEl.appendChild(badPre);
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

      // Headline + Everyday Analogy + Side-by-Side Visual Diagram + Video/Guide Action Bar
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

      visualBox.appendChild(createSideBySideComparisonSvg(item));

      // Action buttons: Watch Video + Read Guide + Copy Prompt + Open full breakdown in left panel
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

      var copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "diagram-label-pill";
      var cpIc = document.createElement("span");
      cpIc.className = "material-symbols-outlined diagram-pill-icon";
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
      actionsCluster.appendChild(copyBtn);

      visualBox.appendChild(actionsCluster);
      stageHost.appendChild(visualBox);

      showBreakageInSidePanel(item, Boolean(isUserClick));
    }

    renderActive(false);
    card.appendChild(pillsBar);
    card.appendChild(stageHost);
    container.appendChild(card);
  }

  window.renderReliabilityBreakagesSection = renderReliabilityBreakagesSection;
})();
