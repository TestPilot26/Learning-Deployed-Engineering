// Deployed Eng Pipeline — Illustrative Living Diagrams Renderer
// Renders Stop 1 (Illustrated Computer + Cloud + Internet Scene),
// Stop 2 (Illustrated App Map with Language Bridges + Good vs. Fragile toggle),
// and Stop 3 (Living Git Timeline with official GitHub Octicon SVGs).
// Zero innerHTML (SecureCoder compliant) and 100% GM3 token-driven (BillSkill compliant).

(function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  function getDiagramData() {
    return window.PIPELINE_DIAGRAMS_DATA || {};
  }

  function createOcticonSvg(iconKey, className) {
    var dData = getDiagramData();
    var octicons = dData.octiconPaths || {};
    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", className || "octicon-svg");
    var paths = octicons[iconKey] || octicons.commit || [];
    paths.forEach(function (d) {
      var p = document.createElementNS(SVG_NS, "path");
      p.setAttribute("fill", "currentColor");
      p.setAttribute("d", d);
      svg.appendChild(p);
    });
    return svg;
  }

  function createFlowConnector(stepText) {
    var col = document.createElement("div");
    col.className = "scene-bridge-connector";

    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = stepText;

    var svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 80 28");
    svg.setAttribute("class", "flow-connector-svg");
    var line = document.createElementNS(SVG_NS, "line");
    line.setAttribute("x1", "6");
    line.setAttribute("y1", "14");
    line.setAttribute("x2", "66");
    line.setAttribute("y2", "14");
    line.setAttribute("class", "flow-animated-line");
    var head = document.createElementNS(SVG_NS, "polygon");
    head.setAttribute("points", "62,7 74,14 62,21");
    head.setAttribute("class", "flow-arrow-head");
    svg.appendChild(line);
    svg.appendChild(head);

    col.appendChild(badge);
    col.appendChild(svg);
    return col;
  }

  function createIllustratedNodeButton(node, isSelected, onSelect) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "scene-node-pill" + (isSelected ? " active" : "");
    btn.setAttribute("data-node-id", node.id);

    var iconCircle = document.createElement("div");
    iconCircle.className = "scene-node-icon-circle " + (node.badgeClass || "badge-info");
    var ic = document.createElement("span");
    ic.className = "material-symbols-outlined scene-node-icon";
    ic.textContent = node.icon;
    iconCircle.appendChild(ic);

    var textCol = document.createElement("div");
    textCol.className = "scene-node-text-col";

    var title = document.createElement("strong");
    title.className = "diagram-node-title";
    title.textContent = node.title;

    var summary = document.createElement("span");
    summary.className = "resource-desc";
    summary.textContent = node.summary;

    textCol.appendChild(title);
    textCol.appendChild(summary);

    btn.appendChild(iconCircle);
    btn.appendChild(textCol);
    btn.addEventListener("click", function () {
      onSelect(node);
    });
    return btn;
  }

  // ============================================================================
  // RENDERER 1: Stop 1 — Illustrated Laptop -> Cloud -> Live Internet Map
  // ============================================================================
  function renderToolsFlowDiagram(container) {
    var nodes = getDiagramData().toolsFlowNodes || [];
    if (!nodes.length) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";

    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive visual map — click any icon to explore";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How your computer, cloud storage, and the live internet connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedNodeId = nodes[0].id;
    var allButtons = [];
    var inspectorContainer = document.createElement("div");
    inspectorContainer.className = "diagram-inspector-card";

    function selectNode(node) {
      selectedNodeId = node.id;
      allButtons.forEach(function (b) {
        if (b.getAttribute("data-node-id") === selectedNodeId) b.classList.add("active");
        else b.classList.remove("active");
      });
      updateToolsInspector(inspectorContainer, node);
    }

    // Illustrated 3-Hub Visual Map: [1. Laptop Screen & Base] ---> [2. Cloud Vault] ---> [3. Live Internet Globe]
    var sceneLayout = document.createElement("div");
    sceneLayout.className = "illustrated-scene-layout";

    function createSceneHubBanner(badgeCls, iconName, titleText, subText) {
      var banner = document.createElement("div");
      banner.className = "scene-hub-banner";
      var heroBadge = document.createElement("div");
      heroBadge.className = "scene-hub-hero-icon " + badgeCls;
      var ic = document.createElement("span");
      ic.className = "material-symbols-outlined stop-hero-icon";
      ic.textContent = iconName;
      heroBadge.appendChild(ic);
      var titleWrap = document.createElement("div");
      var h4 = document.createElement("h4");
      h4.textContent = titleText;
      var sub = document.createElement("p");
      sub.className = "resource-desc";
      sub.textContent = subText;
      titleWrap.appendChild(h4);
      titleWrap.appendChild(sub);
      banner.appendChild(heroBadge);
      banner.appendChild(titleWrap);
      return banner;
    }

    // HUB 1: Illustrated Computer (Screen Frame + Base Stand)
    var computerCol = document.createElement("div");
    computerCol.className = "computer-illustration-wrap";

    var monitorScreen = document.createElement("div");
    monitorScreen.className = "computer-screen-frame";
    monitorScreen.appendChild(
      createSceneHubBanner(
        "badge-info",
        "laptop_mac",
        "1. Your computer (Local device)",
        "Where your code library lives privately on your machine—good for building, testing, and making mistakes safely before anyone else can see it."
      )
    );

    var computerOrbitGrid = document.createElement("div");
    computerOrbitGrid.className = "computer-orbit-grid";
    nodes.filter(function (n) { return n.hub === "computer"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      computerOrbitGrid.appendChild(btn);
    });
    monitorScreen.appendChild(computerOrbitGrid);

    var laptopKeyboardBase = document.createElement("div");
    laptopKeyboardBase.className = "computer-keyboard-base";
    var notch = document.createElement("div");
    notch.className = "computer-trackpad-notch";
    laptopKeyboardBase.appendChild(notch);

    computerCol.appendChild(monitorScreen);
    computerCol.appendChild(laptopKeyboardBase);
    sceneLayout.appendChild(computerCol);

    // Connector 1 -> 2
    sceneLayout.appendChild(createFlowConnector("Upload ('git push')"));

    // Right Column stacking Cloud Storage above Live Internet Hosting
    var cloudAndWebCol = document.createElement("div");
    cloudAndWebCol.className = "cloud-web-column";

    // HUB 2: Illustrated Cloud Vault (GitHub)
    var cloudBox = document.createElement("div");
    cloudBox.className = "cloud-illustration-frame";
    cloudBox.appendChild(
      createSceneHubBanner(
        "badge-secondary",
        "cloud_done",
        "2. Cloud storage (GitHub)",
        "Where your code is stored remotely online so you never lose work and can share it."
      )
    );
    nodes.filter(function (n) { return n.hub === "cloud"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      cloudBox.appendChild(btn);
    });
    cloudAndWebCol.appendChild(cloudBox);

    // Vertical animated arrow from Cloud to Live Internet
    var downConnector = document.createElement("div");
    downConnector.className = "vertical-bridge-connector";
    var downBadge = document.createElement("span");
    downBadge.className = "badge badge-success";
    downBadge.textContent = "Auto-builds website when GitHub updates";
    var downIcon = document.createElement("span");
    downIcon.className = "material-symbols-outlined bullet-icon";
    downIcon.textContent = "south";
    downConnector.appendChild(downBadge);
    downConnector.appendChild(downIcon);
    cloudAndWebCol.appendChild(downConnector);

    // HUB 3: Illustrated Live Internet / Hosting Environment (Vercel + Browser)
    var internetBox = document.createElement("div");
    internetBox.className = "internet-illustration-frame";
    internetBox.appendChild(
      createSceneHubBanner(
        "badge-success",
        "language",
        "3. Live internet hosting (Vercel & Browser)",
        "Where anyone in the world can open your live website link on their phone or computer."
      )
    );

    var netNodesStack = document.createElement("div");
    netNodesStack.className = "flow-zone-nodes";
    nodes.filter(function (n) { return n.hub === "internet"; }).forEach(function (node) {
      var btn = createIllustratedNodeButton(node, node.id === selectedNodeId, selectNode);
      allButtons.push(btn);
      netNodesStack.appendChild(btn);
    });
    internetBox.appendChild(netNodesStack);

    cloudAndWebCol.appendChild(internetBox);
    sceneLayout.appendChild(cloudAndWebCol);

    card.appendChild(sceneLayout);
    updateToolsInspector(inspectorContainer, nodes[0]);
    card.appendChild(inspectorContainer);
    container.appendChild(card);
  }

  function updateToolsInspector(inspectorEl, node) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badge = document.createElement("span");
    badge.className = "badge " + node.badgeClass;
    badge.textContent = node.badge;
    topRow.appendChild(badge);

    var h4 = document.createElement("h4");
    h4.textContent = node.title;

    var desc = document.createElement("p");
    desc.className = "resource-desc";
    desc.textContent = node.whatItIs;

    var slipCallout = document.createElement("div");
    slipCallout.className = "safety-callout";
    var slipIcon = document.createElement("span");
    slipIcon.className = "material-symbols-outlined safety-icon";
    slipIcon.textContent = "lightbulb";
    var slipText = document.createElement("span");
    slipText.textContent = node.slipUp;
    slipCallout.appendChild(slipIcon);
    slipCallout.appendChild(slipText);

    var bottomRow = document.createElement("div");
    bottomRow.className = "diagram-inspector-footer";

    var cmdBox = document.createElement("div");
    cmdBox.className = "vocab-example-box";
    cmdBox.textContent = node.command;

    var resLink = document.createElement("a");
    resLink.className = "nav-btn nav-btn-primary";
    resLink.href = isSafeHttpUrl(node.videoUrl) ? node.videoUrl : "#";
    resLink.target = "_blank";
    resLink.rel = "noopener noreferrer";
    var linkSpan = document.createElement("span");
    linkSpan.textContent = node.videoTitle;
    var linkIcon = document.createElement("span");
    linkIcon.className = "material-symbols-outlined btn-icon-sm";
    linkIcon.textContent = "open_in_new";
    resLink.appendChild(linkSpan);
    resLink.appendChild(linkIcon);

    bottomRow.appendChild(cmdBox);
    bottomRow.appendChild(resLink);

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(desc);
    inspectorEl.appendChild(slipCallout);
    inspectorEl.appendChild(bottomRow);
  }

  // ============================================================================
  // RENDERER 2: Stop 2 — Interactive Illustrated Diagram of an App (in app-diagram.js)
  // ============================================================================
  function renderAppInfrastructureDiagram(container) {
    if (typeof window.renderAppInfraDiagram === "function") {
      window.renderAppInfraDiagram(container);
    }
  }

  // ============================================================================
  // RENDERER 3: Stop 3 — Interactive Animated Git Graph (Octicons & Words Inside Graph)
  // ============================================================================
  function createOnGraphGitNode(gNode, isSelected, onSelect) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "git-on-graph-node" + (isSelected ? " active" : "");
    btn.setAttribute("data-node-id", gNode.id);

    var topRow = document.createElement("div");
    topRow.className = "git-node-top-row";

    var wordSpan = document.createElement("span");
    wordSpan.className = "git-node-word";
    wordSpan.appendChild(createOcticonSvg(gNode.octicon, "octicon-svg"));
    var wText = document.createElement("span");
    wText.textContent = gNode.word;
    wordSpan.appendChild(wText);

    var shortCode = document.createElement("code");
    shortCode.className = "git-node-shorthand";
    shortCode.textContent = gNode.graphCodeLabel;

    topRow.appendChild(wordSpan);
    topRow.appendChild(shortCode);

    var sub = document.createElement("span");
    sub.className = "git-node-subtitle";
    sub.textContent = gNode.oneLiner;

    btn.appendChild(topRow);
    btn.appendChild(sub);
    btn.addEventListener("click", function () {
      onSelect(gNode);
    });
    return btn;
  }

  function renderGitLivingDiagram(container) {
    var gitNodes = getDiagramData().gitLivingNodes || [];
    if (!gitNodes.length) return;

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var selectedIdx = 0;
    var gitBtns = [];
    var inspectorEl = document.createElement("div");
    inspectorEl.className = "diagram-inspector-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive animated Git timeline — click any icon or word on the lines below";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How Git commits, branches, PRs/CLs, and merges work";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);

    var stepBtn = document.createElement("button");
    stepBtn.type = "button";
    stepBtn.className = "nav-btn nav-btn-primary";
    var stepIcon = document.createElement("span");
    stepIcon.className = "material-symbols-outlined btn-icon-sm";
    stepIcon.textContent = "play_arrow";
    var stepLabel = document.createElement("span");
    stepLabel.textContent = "Step through animation (1/" + gitNodes.length + ")";
    stepBtn.appendChild(stepIcon);
    stepBtn.appendChild(stepLabel);

    function selectGitNode(gNode) {
      selectedIdx = gitNodes.indexOf(gNode);
      if (selectedIdx < 0) selectedIdx = 0;
      stepLabel.textContent = "Next step in animation (" + (selectedIdx + 1) + "/" + gitNodes.length + ")";
      gitBtns.forEach(function (other) {
        if (other.getAttribute("data-node-id") === gNode.id) other.classList.add("active");
        else other.classList.remove("active");
      });
      updateGitInspector(inspectorEl, gNode);
    }

    stepBtn.addEventListener("click", function () {
      var nextIdx = (selectedIdx + 1) % gitNodes.length;
      selectGitNode(gitNodes[nextIdx]);
    });

    headerRow.appendChild(titleGroup);
    headerRow.appendChild(stepBtn);
    card.appendChild(headerRow);

    // Unified Animated Diagram Stage where clickable Octicon+word buttons sit directly on the tracks
    var graphWrap = document.createElement("div");
    graphWrap.className = "git-graph-stage";

    // Top Lane Label: main branch (Production -> Vercel)
    var mainBanner = document.createElement("div");
    mainBanner.className = "git-lane-banner";
    var mainBadge = document.createElement("span");
    mainBadge.className = "badge badge-info";
    mainBadge.textContent = "main branch (Production -> Vercel)";
    var mainExplain = document.createElement("span");
    mainExplain.className = "resource-desc";
    mainExplain.textContent = "Your real live website timeline—every change merged into this blue line goes live to the public.";
    mainBanner.appendChild(mainBadge);
    mainBanner.appendChild(mainExplain);
    graphWrap.appendChild(mainBanner);

    // Top Track Lane: [1. Clone / Init] --- [2. Branch] --- (main stays untouched) --- [6. Merge] --- [7. Vercel Live!]
    var mainLane = document.createElement("div");
    mainLane.className = "git-track-lane git-track-lane-main";

    var n1 = createOnGraphGitNode(gitNodes[0], true, selectGitNode);
    var n2 = createOnGraphGitNode(gitNodes[1], false, selectGitNode);
    var n6 = createOnGraphGitNode(gitNodes[5], false, selectGitNode);
    var n7 = createOnGraphGitNode(gitNodes[6], false, selectGitNode);
    gitBtns.push(n1, n2, n6, n7);

    var safePass = document.createElement("div");
    safePass.className = "git-safe-pass-pill";
    safePass.textContent = "main stays safe & live while you test on the sandbox branch below";

    mainLane.appendChild(n1);
    mainLane.appendChild(n2);
    mainLane.appendChild(safePass);
    mainLane.appendChild(n6);
    mainLane.appendChild(n7);
    graphWrap.appendChild(mainLane);

    // Middle Animated SVG Curve Layer connecting [2. Branch] down to [3. Commit] and [5. Pull Request] up to [6. Merge]
    var curvesSvg = document.createElementNS(SVG_NS, "svg");
    curvesSvg.setAttribute("viewBox", "0 0 900 76");
    curvesSvg.setAttribute("class", "git-curves-svg");
    curvesSvg.setAttribute("aria-hidden", "true");

    var splitPathStr = "M 265 4 C 265 42, 265 42, 265 72";
    var splitCurve = document.createElementNS(SVG_NS, "path");
    splitCurve.setAttribute("d", splitPathStr);
    splitCurve.setAttribute("class", "git-branch-line-feature");
    var splitAnim = document.createElementNS(SVG_NS, "path");
    splitAnim.setAttribute("d", splitPathStr);
    splitAnim.setAttribute("class", "git-branch-line-animated");

    var splitDot = document.createElementNS(SVG_NS, "circle");
    splitDot.setAttribute("r", "6");
    splitDot.setAttribute("class", "git-traveller-dot");
    var splitMotion = document.createElementNS(SVG_NS, "animateMotion");
    splitMotion.setAttribute("dur", "2.2s");
    splitMotion.setAttribute("repeatCount", "indefinite");
    splitMotion.setAttribute("path", splitPathStr);
    splitDot.appendChild(splitMotion);

    var splitLabel = document.createElementNS(SVG_NS, "text");
    splitLabel.setAttribute("x", "282");
    splitLabel.setAttribute("y", "42");
    splitLabel.setAttribute("class", "git-svg-curve-caption");
    splitLabel.textContent = "↘ Splits off into sandbox branch (c2: branch off)";

    var mergePathStr = "M 635 72 C 635 42, 635 42, 635 4";
    var mergeCurve = document.createElementNS(SVG_NS, "path");
    mergeCurve.setAttribute("d", mergePathStr);
    mergeCurve.setAttribute("class", "git-branch-line-feature");
    var mergeAnim = document.createElementNS(SVG_NS, "path");
    mergeAnim.setAttribute("d", mergePathStr);
    mergeAnim.setAttribute("class", "git-branch-line-animated");

    var mergeDot = document.createElementNS(SVG_NS, "circle");
    mergeDot.setAttribute("r", "6");
    mergeDot.setAttribute("class", "git-traveller-dot");
    var mergeMotion = document.createElementNS(SVG_NS, "animateMotion");
    mergeMotion.setAttribute("dur", "2.2s");
    mergeMotion.setAttribute("repeatCount", "indefinite");
    mergeMotion.setAttribute("path", mergePathStr);
    mergeDot.appendChild(mergeMotion);

    var mergeLabel = document.createElementNS(SVG_NS, "text");
    mergeLabel.setAttribute("x", "652");
    mergeLabel.setAttribute("y", "42");
    mergeLabel.setAttribute("class", "git-svg-curve-caption");
    mergeLabel.textContent = "↗ Approved PR merges back into main (c5: merge PR)";

    curvesSvg.appendChild(splitCurve);
    curvesSvg.appendChild(splitAnim);
    curvesSvg.appendChild(splitDot);
    curvesSvg.appendChild(splitLabel);
    curvesSvg.appendChild(mergeCurve);
    curvesSvg.appendChild(mergeAnim);
    curvesSvg.appendChild(mergeDot);
    curvesSvg.appendChild(mergeLabel);
    graphWrap.appendChild(curvesSvg);

    // Bottom Track Lane: [spacer] --- [3. Commit] --- [4. git diff] --- [5. Pull Request (PR / CL)] --- [spacer]
    var sandboxLane = document.createElement("div");
    sandboxLane.className = "git-track-lane git-track-lane-sandbox";

    var n3 = createOnGraphGitNode(gitNodes[2], false, selectGitNode);
    var n4 = createOnGraphGitNode(gitNodes[3], false, selectGitNode);
    var n5 = createOnGraphGitNode(gitNodes[4], false, selectGitNode);
    gitBtns.push(n3, n4, n5);

    sandboxLane.appendChild(document.createElement("div"));
    sandboxLane.appendChild(n3);
    sandboxLane.appendChild(n4);
    sandboxLane.appendChild(n5);
    sandboxLane.appendChild(document.createElement("div"));
    graphWrap.appendChild(sandboxLane);

    // Bottom Lane Label: feat/ai-experiment branch (Safe sandbox)
    var sandboxBanner = document.createElement("div");
    sandboxBanner.className = "git-lane-banner";
    var sbBadge = document.createElement("span");
    sbBadge.className = "badge badge-success";
    sbBadge.textContent = "feat/ai-experiment branch (Safe sandbox)";
    var sbExplain = document.createElement("span");
    sbExplain.className = "resource-desc";
    sbExplain.textContent = "Your parallel practice timeline—save commits and check diffs here before merging back to main.";
    sandboxBanner.appendChild(sbBadge);
    sandboxBanner.appendChild(sbExplain);
    graphWrap.appendChild(sandboxBanner);

    card.appendChild(graphWrap);
    updateGitInspector(inspectorEl, gitNodes[0]);
    card.appendChild(inspectorEl);
    container.appendChild(card);
  }

  function updateGitInspector(inspectorEl, gNode) {
    inspectorEl.replaceChildren();

    var topRow = document.createElement("div");
    topRow.className = "resource-title-row";
    var badgeGroup = document.createElement("div");
    badgeGroup.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge " + gNode.badgeClass;
    badge.textContent = gNode.badge;
    var codePill = document.createElement("code");
    codePill.className = "vocab-cmd-pill";
    codePill.textContent = "Graph label: " + gNode.graphCodeLabel;
    badgeGroup.appendChild(badge);
    badgeGroup.appendChild(codePill);

    var oct = createOcticonSvg(gNode.octicon, "octicon-svg-lg");
    topRow.appendChild(badgeGroup);
    topRow.appendChild(oct);

    var h4 = document.createElement("h4");
    h4.textContent = gNode.title;

    var pWhat = document.createElement("p");
    pWhat.className = "resource-desc pre-line-text";
    pWhat.textContent = gNode.whatItIs;

    var decodedBox = document.createElement("div");
    decodedBox.className = "nested-card";
    var decTitle = document.createElement("strong");
    decTitle.textContent = "Decoding the diagram labels";
    var decBody = document.createElement("p");
    decBody.className = "resource-desc";
    decBody.textContent = gNode.labelDecoded;
    decodedBox.appendChild(decTitle);
    decodedBox.appendChild(decBody);

    var saveCallout = document.createElement("div");
    saveCallout.className = "arch-mode-banner good-mode";
    var icon = document.createElement("span");
    icon.className = "material-symbols-outlined safety-icon";
    icon.textContent = "shield";
    var saveText = document.createElement("span");
    saveText.textContent = "Why this saves you: " + gNode.whyItSavesYou;
    saveCallout.appendChild(icon);
    saveCallout.appendChild(saveText);

    var cmdBox = document.createElement("div");
    cmdBox.className = "vocab-example-box";
    cmdBox.textContent = gNode.command;

    inspectorEl.appendChild(topRow);
    inspectorEl.appendChild(h4);
    inspectorEl.appendChild(pWhat);
    inspectorEl.appendChild(decodedBox);
    inspectorEl.appendChild(saveCallout);
    inspectorEl.appendChild(cmdBox);
  }

  window.PipelineDiagrams = {
    renderForStop: function (stop, containerEl) {
      if (!containerEl) return;
      containerEl.replaceChildren();
      if (!stop || !stop.diagramType) {
        containerEl.style.display = "none";
        return;
      }
      containerEl.style.display = "block";
      if (stop.diagramType === "tools-flow") {
        renderToolsFlowDiagram(containerEl);
      } else if (stop.diagramType === "app-infrastructure") {
        renderAppInfrastructureDiagram(containerEl);
      } else if (stop.diagramType === "git-living") {
        renderGitLivingDiagram(containerEl);
      }
    }
  };
})();
