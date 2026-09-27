// Deployed Eng Pipeline — Interactive "Explore Where Things Are" Interface Snapshot & Flow Explorer
// Renders clickable hotspot buttons over real GitHub & VS Code snapshots + cross-screen step-by-step flows.
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

  function populateHotspotInSidePanel(snap, hs, activeFlow, activeFlowStepIdx, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        var topRow = document.createElement("div");
        topRow.className = "resource-title-row";
        var b1 = document.createElement("span");
        b1.className = "badge badge-info";
        b1.textContent = snap.shortTitle + " · Pin #" + hs.num;
        var b2 = document.createElement("span");
        b2.className = "badge badge-secondary";
        b2.textContent = hs.category;
        topRow.appendChild(b1);
        topRow.appendChild(b2);

        var h4 = document.createElement("h4");
        h4.textContent = hs.title;

        var descP = document.createElement("p");
        descP.className = "resource-desc pre-line-text";
        descP.textContent = hs.whatItDoes;

        var whenBox = document.createElement("div");
        whenBox.className = "arch-mode-banner good-mode";
        var wIcon = document.createElement("span");
        wIcon.className = "material-symbols-outlined safety-icon";
        wIcon.textContent = "touch_app";
        var wText = document.createElement("span");
        wText.textContent = "When & how you use it: " + hs.whenYouUseIt;
        whenBox.appendChild(wIcon);
        whenBox.appendChild(wText);

        inspectorEl.appendChild(topRow);
        inspectorEl.appendChild(h4);
        inspectorEl.appendChild(descP);
        inspectorEl.appendChild(whenBox);

        if (hs.tryCommand) {
          var cmdBox = document.createElement("div");
          cmdBox.className = "vocab-example-box pre-line-text";
          cmdBox.textContent = "Shortcut / terminal equivalent:  " + hs.tryCommand;
          inspectorEl.appendChild(cmdBox);
        }

        if (activeFlow) {
          var flowNote = document.createElement("div");
          flowNote.className = "nested-card";
          var fnBadge = document.createElement("span");
          fnBadge.className = "badge badge-success";
          fnBadge.textContent = activeFlow.title;
          var fnText = document.createElement("p");
          fnText.className = "resource-desc";
          fnText.textContent = activeFlow.steps[activeFlowStepIdx].instruction;
          flowNote.appendChild(fnBadge);
          flowNote.appendChild(fnText);
          inspectorEl.appendChild(flowNote);
        }
      },
      {
        itemTitle: hs.title,
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick)
      }
    );
  }

  function renderInterfaceExplorer(container, defaultGroup) {
    if (!container || !window.InterfaceTourData) return;
    var snapshots = window.InterfaceTourData.SNAPSHOTS || [];
    var flows = window.InterfaceTourData.FLOWS || [];
    if (!snapshots.length) return;

    var activeGroup = defaultGroup || "github";
    var initialSnap = snapshots.filter(function (s) { return s.group === activeGroup; })[0] || snapshots[0];
    var activeSnapId = initialSnap.id;
    var activeHotspotId = initialSnap.hotspots[0].id;
    var activeFlowId = null;
    var activeFlowStepIdx = 0;
    var showAllFlows = false;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card ui-tour-shell";

    // --- 1. HEADER ---
    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleCol = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var topBadge = document.createElement("span");
    topBadge.className = "badge badge-info";
    topBadge.textContent = "Explore where things are — interactive interface guide";
    badgeRow.appendChild(topBadge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "Explore where things are: Click any circled feature on the interface";
    var subP = document.createElement("p");
    subP.className = "text-muted";
    subP.textContent =
      "Pick a tool below, then click any numbered circle directly on the screenshot to read what it does in the Left Side Panel—or step through a guided workflow.";
    titleCol.appendChild(badgeRow);
    titleCol.appendChild(h3);
    titleCol.appendChild(subP);
    headerRow.appendChild(titleCol);
    card.appendChild(headerRow);

    // Dynamic host that re-renders cleanly on state change
    var mount = document.createElement("div");
    mount.className = "ui-tour-mount";
    card.appendChild(mount);
    container.appendChild(card);

    function getActiveSnap() {
      for (var i = 0; i < snapshots.length; i++) {
        if (snapshots[i].id === activeSnapId) return snapshots[i];
      }
      return snapshots[0];
    }

    function getActiveFlow() {
      if (!activeFlowId) return null;
      for (var i = 0; i < flows.length; i++) {
        if (flows[i].id === activeFlowId) return flows[i];
      }
      return null;
    }

    function findHotspot(snap, hsId) {
      for (var i = 0; i < snap.hotspots.length; i++) {
        if (snap.hotspots[i].id === hsId) return snap.hotspots[i];
      }
      return snap.hotspots[0];
    }

    function applyFlowStep(flow, stepIdx, openSidePanel) {
      activeFlowId = flow.id;
      activeFlowStepIdx = stepIdx;
      var st = flow.steps[stepIdx];
      activeSnapId = st.snapshotId;
      var snap = getActiveSnap();
      activeGroup = snap.group;
      activeHotspotId = st.hotspotId;
      render(openSidePanel);
    }

    function render(openSidePanel) {
      mount.replaceChildren();
      var snap = getActiveSnap();
      var currentHs = findHotspot(snap, activeHotspotId);
      var currentFlow = getActiveFlow();

      // A. Single Clean Top Tool Selector Bar ("Explore where things are ->")
      var menuBar = document.createElement("div");
      menuBar.className = "ui-tour-top-menu";

      var menuLabel = document.createElement("span");
      menuLabel.className = "ui-tour-menu-label";
      menuLabel.textContent = "Explore where things are ➔";
      menuBar.appendChild(menuLabel);

      [
        { id: "github", label: "GitHub", icon: "cloud" },
        { id: "vscode", label: "VS Code / Cursor", icon: "code_blocks" },
        { id: "vercel", label: "Vercel", icon: "rocket_launch" },
        { id: "devtools", label: "Chrome DevTools", icon: "troubleshoot" },
        { id: "database", label: "Cloud Database", icon: "database" },
        { id: "terminal", label: "Mac Terminal", icon: "terminal" }
      ].forEach(function (grp) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "vocab-top-tab-btn" + (activeGroup === grp.id ? " active" : "");
        var ic = document.createElement("span");
        ic.className = "material-symbols-outlined btn-icon-sm";
        ic.textContent = grp.icon;
        var sp = document.createElement("span");
        sp.textContent = grp.label;
        btn.appendChild(ic);
        btn.appendChild(sp);
        btn.addEventListener("click", function () {
          activeGroup = grp.id;
          activeFlowId = null;
          var firstInGroup = snapshots.filter(function (s) { return s.group === grp.id; })[0];
          if (firstInGroup) {
            activeSnapId = firstInGroup.id;
            activeHotspotId = firstInGroup.hotspots[0].id;
          }
          render(false);
          var newSnap = getActiveSnap();
          populateHotspotInSidePanel(newSnap, findHotspot(newSnap, activeHotspotId), null, 0, false);
        });
        menuBar.appendChild(btn);
      });

      mount.appendChild(menuBar);

      // Active Flow Compact Stepper Controls (when a flow is active)
      if (currentFlow) {
        var st = currentFlow.steps[activeFlowStepIdx];
        var stepperCard = document.createElement("div");
        stepperCard.className = "ui-tour-flow-stepper";

        var stepTopRow = document.createElement("div");
        stepTopRow.className = "resource-title-row";

        var stepTitleGroup = document.createElement("div");
        stepTitleGroup.className = "badge-row";
        var stBadge = document.createElement("span");
        stBadge.className = "badge badge-info";
        stBadge.textContent = st.stepTitle;
        var stSnapBadge = document.createElement("span");
        stSnapBadge.className = "badge badge-secondary";
        stSnapBadge.textContent = "Viewing: " + snap.shortTitle + " (Circle #" + currentHs.num + " — details in left panel)";
        stepTitleGroup.appendChild(stBadge);
        stepTitleGroup.appendChild(stSnapBadge);
        stepTopRow.appendChild(stepTitleGroup);

        var stepNavBtns = document.createElement("div");
        stepNavBtns.className = "diagram-pill-cluster";

        var prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "diagram-label-pill";
        prevBtn.disabled = activeFlowStepIdx === 0;
        prevBtn.textContent = "◀ Previous step";
        prevBtn.addEventListener("click", function () {
          if (activeFlowStepIdx > 0) applyFlowStep(currentFlow, activeFlowStepIdx - 1, true);
        });

        var nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "diagram-label-pill active";
        nextBtn.textContent =
          activeFlowStepIdx < currentFlow.steps.length - 1 ? "Next step ▶" : "Restart flow ↺";
        nextBtn.addEventListener("click", function () {
          var nextIdx = activeFlowStepIdx < currentFlow.steps.length - 1 ? activeFlowStepIdx + 1 : 0;
          applyFlowStep(currentFlow, nextIdx, true);
        });

        var exitFlowBtn = document.createElement("button");
        exitFlowBtn.type = "button";
        exitFlowBtn.className = "diagram-label-pill";
        exitFlowBtn.textContent = "✕ Exit flow";
        exitFlowBtn.addEventListener("click", function () {
          activeFlowId = null;
          render(false);
        });

        stepNavBtns.appendChild(prevBtn);
        stepNavBtns.appendChild(nextBtn);
        stepNavBtns.appendChild(exitFlowBtn);
        stepTopRow.appendChild(stepNavBtns);

        stepperCard.appendChild(stepTopRow);
        mount.appendChild(stepperCard);
      }

      // B. Annotated Screenshot Canvas (with inline screen switcher ONLY if this tool has >1 screen)
      var stageWrap = document.createElement("div");
      stageWrap.className = "ui-tour-stage-wrap";

      var stageCaptionRow = document.createElement("div");
      stageCaptionRow.className = "resource-title-row";
      var scTitle = document.createElement("strong");
      scTitle.className = "diagram-node-title";
      scTitle.textContent = snap.shortTitle + " — " + snap.subtitle;
      stageCaptionRow.appendChild(scTitle);

      var groupSnaps = snapshots.filter(function (s) { return s.group === activeGroup; });
      if (groupSnaps.length > 1) {
        var subViewCluster = document.createElement("div");
        subViewCluster.className = "diagram-pill-cluster";
        groupSnaps.forEach(function (s, idx) {
          var svBtn = document.createElement("button");
          svBtn.type = "button";
          svBtn.className = "diagram-label-pill" + (s.id === activeSnapId ? " active" : "");
          svBtn.textContent = "Screen " + (idx + 1) + ": " + s.shortTitle.replace(/^(GitHub|VS Code)\s+/i, "");
          svBtn.addEventListener("click", function () {
            activeSnapId = s.id;
            activeHotspotId = s.hotspots[0].id;
            activeFlowId = null;
            render(false);
            var newSnap = getActiveSnap();
            populateHotspotInSidePanel(newSnap, findHotspot(newSnap, activeHotspotId), null, 0, false);
          });
          subViewCluster.appendChild(svBtn);
        });
        stageCaptionRow.appendChild(subViewCluster);
      }

      stageWrap.appendChild(stageCaptionRow);

      var imgContainer = document.createElement("div");
      imgContainer.className = "ui-tour-image-container";
      imgContainer.style.aspectRatio = snap.aspectRatio;

      var imgEl = document.createElement("img");
      imgEl.className = "ui-tour-screenshot-img";
      imgEl.src = snap.imageSrc;
      imgEl.alt = snap.tabTitle;
      imgContainer.appendChild(imgEl);

      // If a flow has consecutive steps on this same snapshot, draw an animated SVG arrow between those circles!
      if (currentFlow) {
        var svgOverlay = svgEl("svg", {
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          class: "ui-tour-flow-svg",
          "aria-hidden": "true"
        });
        for (var sIdx = 0; sIdx < currentFlow.steps.length - 1; sIdx++) {
          var stA = currentFlow.steps[sIdx];
          var stB = currentFlow.steps[sIdx + 1];
          if (stA.snapshotId === snap.id && stB.snapshotId === snap.id) {
            var hsA = findHotspot(snap, stA.hotspotId);
            var hsB = findHotspot(snap, stB.hotspotId);
            if (hsA && hsB) {
              svgOverlay.appendChild(
                svgEl("line", {
                  x1: String(hsA.x),
                  y1: String(hsA.y),
                  x2: String(hsB.x),
                  y2: String(hsB.y),
                  stroke: "var(--color-primary)",
                  "stroke-width": "0.8",
                  "stroke-dasharray": "1.5 1.2"
                })
              );
            }
          }
        }
        imgContainer.appendChild(svgOverlay);
      }

      // Render Transparent Clickable Highlight Circles/Rings around the real UI features on the screenshot
      snap.hotspots.forEach(function (hs) {
        var isSelected = hs.id === currentHs.id;
        var pinBtn = document.createElement("button");
        pinBtn.type = "button";
        var isTallRegion = (hs.h || 5) > 8 || (hs.w || 10) > 22;
        pinBtn.className =
          "ui-tour-hotspot-pin" +
          (isSelected ? " active" : "") +
          (isTallRegion ? " region-ring" : " pill-ring");
        pinBtn.style.left = hs.x + "%";
        pinBtn.style.top = hs.y + "%";
        pinBtn.style.width = (hs.w || 10) + "%";
        pinBtn.style.height = (hs.h || 5.2) + "%";
        pinBtn.title = "#" + hs.num + " · " + hs.shortLabel + " — Click to view explanation in left panel";
        pinBtn.setAttribute("aria-label", "Circle " + hs.num + ": " + hs.title);

        var numBadge = document.createElement("span");
        numBadge.className = "ui-tour-pin-num";
        numBadge.textContent = hs.num;
        pinBtn.appendChild(numBadge);

        pinBtn.addEventListener("click", function () {
          activeHotspotId = hs.id;
          render(true);
        });

        imgContainer.appendChild(pinBtn);
      });

      stageWrap.appendChild(imgContainer);

      // C. Compact Relevant Guided Flows Strip (filtered to the active tool so there is no huge wall of buttons)
      var relevantFlows = showAllFlows
        ? flows
        : flows.filter(function (fl) {
            return fl.steps.some(function (st) {
              var stepSnap = snapshots.filter(function (s) { return s.id === st.snapshotId; })[0];
              return stepSnap && stepSnap.group === activeGroup;
            });
          });
      if (!relevantFlows.length) relevantFlows = flows.slice(0, 2);

      var flowsRow = document.createElement("div");
      flowsRow.className = "diagram-pill-cluster";

      var flLabel = document.createElement("span");
      flLabel.className = "badge badge-success";
      flLabel.textContent = "Step-by-step flows:";
      flowsRow.appendChild(flLabel);

      relevantFlows.forEach(function (fl) {
        var fBtn = document.createElement("button");
        fBtn.type = "button";
        fBtn.className = "diagram-label-pill" + (activeFlowId === fl.id ? " active" : "");
        var fIc = document.createElement("span");
        fIc.className = "material-symbols-outlined diagram-pill-icon";
        fIc.textContent = fl.icon;
        var fTxt = document.createElement("span");
        fTxt.textContent = fl.title.replace(/^Flow\s+\d+:\s*/i, "");
        fBtn.appendChild(fIc);
        fBtn.appendChild(fTxt);
        fBtn.addEventListener("click", function () {
          applyFlowStep(fl, 0, true);
        });
        flowsRow.appendChild(fBtn);
      });

      var toggleAllFlowsBtn = document.createElement("button");
      toggleAllFlowsBtn.type = "button";
      toggleAllFlowsBtn.className = "diagram-label-pill";
      toggleAllFlowsBtn.textContent = showAllFlows ? "Show only " + snap.groupLabel.split(" ")[0] + " flows" : "All 8 flows…";
      toggleAllFlowsBtn.addEventListener("click", function () {
        showAllFlows = !showAllFlows;
        render(false);
      });
      flowsRow.appendChild(toggleAllFlowsBtn);

      stageWrap.appendChild(flowsRow);
      mount.appendChild(stageWrap);

      if (openSidePanel) {
        populateHotspotInSidePanel(snap, currentHs, currentFlow, activeFlowStepIdx, true);
      }
    }

    render(false);
  }

  window.renderInterfaceExplorer = renderInterfaceExplorer;
})();
