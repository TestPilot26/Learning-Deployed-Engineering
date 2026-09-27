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
    svg.setAttribute("width", className === "octicon-svg-lg" ? "20" : "15");
    svg.setAttribute("height", className === "octicon-svg-lg" ? "20" : "15");
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

  function createCompactToolPill(node, shortLabel, isSelected, onSelect) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "diagram-label-pill" + (isSelected ? " active" : "");
    btn.setAttribute("data-node-id", node.id);

    var ic = document.createElement("span");
    ic.className = "material-symbols-outlined diagram-pill-icon";
    ic.textContent = node.icon;

    var lbl = document.createElement("span");
    lbl.textContent = shortLabel || node.title;

    btn.appendChild(ic);
    btn.appendChild(lbl);
    btn.addEventListener("click", function () {
      onSelect(node);
    });
    return btn;
  }

  // ============================================================================
  // RENDERER 1: Stop 1 — Illustrated 4-Stage Loop (Computer -> Cloud -> Hosting -> User)
  // ============================================================================
  function renderToolsFlowDiagram(container) {
    var nodes = getDiagramData().toolsFlowNodes || [];
    var art = window.DiagramIllustrations;
    if (!nodes.length || !art) return;

    var nodeById = {};
    nodes.forEach(function (n) {
      nodeById[n.id] = n;
    });

    var card = document.createElement("div");
    card.className = "surface-card section-spacer diagram-shell-card";

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";

    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive diagram — click any stage or tool pill to open its guide in the side panel";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How your computer, cloud storage, live hosting, and the browser connect";
    titleGroup.appendChild(badgeRow);
    titleGroup.appendChild(h3);
    headerRow.appendChild(titleGroup);
    card.appendChild(headerRow);

    var selectedNodeId = nodes[0].id;
    var allButtons = [];
    var stageCards = [];

    function getStageForNode(nodeId) {
      if (nodeId === "cloud-github") return "stage-cloud";
      if (nodeId === "cloud-vercel") return "stage-hosting";
      if (nodeId === "browser-devtools") return "stage-user";
      return "stage-computer";
    }

    function syncActiveStates() {
      var activeStageKey = getStageForNode(selectedNodeId);
      allButtons.forEach(function (b) {
        if (b.getAttribute("data-node-id") === selectedNodeId) b.classList.add("active");
        else b.classList.remove("active");
      });
      stageCards.forEach(function (sc) {
        if (sc.getAttribute("data-stage-key") === activeStageKey) sc.classList.add("stage-active");
        else sc.classList.remove("stage-active");
      });
    }

    function selectNode(node) {
      if (!node) return;
      selectedNodeId = node.id;
      syncActiveStates();
      showToolsInspector(node, true);
    }

    function buildPillsCluster(itemsSpec) {
      var cluster = document.createElement("div");
      cluster.className = "diagram-pill-cluster loop-stage-pills";
      itemsSpec.forEach(function (spec) {
        var n = nodeById[spec.id];
        if (!n) return;
        var pill = createCompactToolPill(n, spec.label, n.id === selectedNodeId, selectNode);
        allButtons.push(pill);
        cluster.appendChild(pill);
      });
      return cluster;
    }

    var loopCanvas = document.createElement("div");
    loopCanvas.className = "loop-diagram-canvas";

    // TOP ROW: [1. Your computer] ---> [2. Cloud code repository] ---> [3. Cloud hosting]
    var topRow = document.createElement("div");
    topRow.className = "loop-top-row";

    var stage1 = art.createLoopStageCard({
      stageKey: "stage-computer",
      artSvg: art.createLaptopEditorArt(),
      title: "1. Your computer",
      subtitle: "Edit & test privately",
      onStageClick: function () {
        selectNode(nodeById["ide-editor"]);
      },
      pillsContainer: buildPillsCluster([
        { id: "ide-editor", label: "Code editors & IDEs" },
        { id: "plain-text", label: "Plain-text files" },
        { id: "homebrew-runtime", label: "Tool installers & engines" },
        { id: "local-git", label: "Local Git" },
        { id: "env-secrets", label: "Secret .env" }
      ])
    });
    stageCards.push(stage1.card);
    topRow.appendChild(stage1.card);

    topRow.appendChild(art.createHorizontalStepArrow("git push", "Uploads commits"));

    var stage2 = art.createLoopStageCard({
      stageKey: "stage-cloud",
      artSvg: art.createGitCloudRepoArt(),
      title: "2. Cloud code repository",
      subtitle: "Remote backup & review",
      onStageClick: function () {
        selectNode(nodeById["cloud-github"]);
      },
      pillsContainer: buildPillsCluster([
        { id: "cloud-github", label: "Cloud Git hosts (GitHub, GitLab...)" }
      ])
    });
    stageCards.push(stage2.card);
    topRow.appendChild(stage2.card);

    topRow.appendChild(art.createHorizontalStepArrow("Auto-builds", "Deploys on push"));

    var stage3 = art.createLoopStageCard({
      stageKey: "stage-hosting",
      artSvg: art.createLiveWebHostArt(),
      title: "3. Cloud hosting",
      subtitle: "Web apps, AI demos & servers",
      onStageClick: function () {
        selectNode(nodeById["cloud-vercel"]);
      },
      pillsContainer: buildPillsCluster([
        { id: "cloud-vercel", label: "Cloud hosts (Vercel, Render, HF...)" }
      ])
    });
    stageCards.push(stage3.card);
    topRow.appendChild(stage3.card);

    loopCanvas.appendChild(topRow);

    // BOTTOM ROW: [Left Curved Return Wing] <--- [4. User & browser] <--- [Right Curved Return Wing]
    var bottomRow = document.createElement("div");
    bottomRow.className = "loop-bottom-row";

    bottomRow.appendChild(art.createCurvedReturnWing("left", "Edit next update"));

    var stage4 = art.createLoopStageCard({
      stageKey: "stage-user",
      artSvg: art.createBrowserInspectArt(),
      title: "4. User & browser DevTools",
      subtitle: "Opens live site & inspects",
      onStageClick: function () {
        selectNode(nodeById["browser-devtools"]);
      },
      pillsContainer: buildPillsCluster([
        { id: "browser-devtools", label: "Browser DevTools (Inspect)" }
      ])
    });
    stageCards.push(stage4.card);
    bottomRow.appendChild(stage4.card);

    bottomRow.appendChild(art.createCurvedReturnWing("right", "Serves live link"));

    loopCanvas.appendChild(bottomRow);
    card.appendChild(loopCanvas);

    syncActiveStates();
    showToolsInspector(nodes[0], false);
    container.appendChild(card);
  }

  function showToolsInspector(node, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        updateToolsInspector(inspectorEl, node);
      },
      {
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick),
        itemTitle: node.title
      }
    );
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
    desc.className = "resource-desc pre-line-text";
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

    topRow.appendChild(createOcticonSvg(gNode.octicon, "octicon-svg"));

    var shortCode = document.createElement("code");
    shortCode.className = "git-node-shorthand";
    shortCode.textContent = gNode.graphCodeLabel;
    topRow.appendChild(shortCode);

    var wordSpan = document.createElement("strong");
    wordSpan.className = "git-node-word";
    wordSpan.textContent = gNode.word;

    var sub = document.createElement("span");
    sub.className = "git-node-subtitle";
    sub.textContent = gNode.oneLiner;

    btn.appendChild(topRow);
    btn.appendChild(wordSpan);
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

    var headerRow = document.createElement("div");
    headerRow.className = "search-bar-row diagram-header-row";
    var titleGroup = document.createElement("div");
    var badgeRow = document.createElement("div");
    badgeRow.className = "badge-row";
    var badge = document.createElement("span");
    badge.className = "badge badge-info";
    badge.textContent = "Interactive animated Git timeline — click any step on the pipeline lines below";
    badgeRow.appendChild(badge);

    var h3 = document.createElement("h3");
    h3.className = "vocab-section-heading";
    h3.textContent = "How Git commits, branches, Pull Requests (PRs), and merges work";
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
      showGitInspector(gNode, true);
    }

    stepBtn.addEventListener("click", function () {
      var nextIdx = (selectedIdx + 1) % gitNodes.length;
      selectGitNode(gitNodes[nextIdx]);
    });

    headerRow.appendChild(titleGroup);
    headerRow.appendChild(stepBtn);
    card.appendChild(headerRow);

    // Unified Animated Diagram Stage where clickable Octicon+word buttons sit directly on the continuous tracks
    var graphWrap = document.createElement("div");
    graphWrap.className = "git-graph-stage";

    // Top Lane Label: main branch (Production -> Cloud auto-deploy)
    var mainBanner = document.createElement("div");
    mainBanner.className = "git-lane-banner";
    var mainBadge = document.createElement("span");
    mainBadge.className = "badge badge-info";
    mainBadge.textContent = "main branch (Production -> Cloud auto-deploy)";
    var mainExplain = document.createElement("span");
    mainExplain.className = "resource-desc";
    mainExplain.textContent = "Continuous blue production line—every change merged into this line auto-deploys to your cloud host (e.g. Vercel, Netlify, Render, Cloud Run, or Hugging Face).";
    mainBanner.appendChild(mainBadge);
    mainBanner.appendChild(mainExplain);
    graphWrap.appendChild(mainBanner);

    // Top Track Lane: [1. Clone / Init] --- [2. Branch] --- (main continues untouched) --- [6. Merge] --- [7. Vercel Live!]
    var mainLane = document.createElement("div");
    mainLane.className = "git-track-lane git-track-lane-main";

    var n1 = createOnGraphGitNode(gitNodes[0], true, selectGitNode);
    var n2 = createOnGraphGitNode(gitNodes[1], false, selectGitNode);
    var n6 = createOnGraphGitNode(gitNodes[5], false, selectGitNode);
    var n7 = createOnGraphGitNode(gitNodes[6], false, selectGitNode);
    gitBtns.push(n1, n2, n6, n7);

    var safePass = document.createElement("div");
    safePass.className = "git-safe-pass-pill";
    safePass.textContent = "main continues safely while you build on the green branch below →";

    mainLane.appendChild(n1);
    mainLane.appendChild(n2);
    mainLane.appendChild(safePass);
    mainLane.appendChild(n6);
    mainLane.appendChild(n7);
    graphWrap.appendChild(mainLane);

    // Continuous Underlying SVG Pipeline Layer showing the full split -> sandbox flow -> merge back to main
    var curvesSvg = document.createElementNS(SVG_NS, "svg");
    curvesSvg.setAttribute("viewBox", "0 0 900 84");
    curvesSvg.setAttribute("width", "100%");
    curvesSvg.setAttribute("height", "84");
    curvesSvg.setAttribute("class", "git-curves-svg");
    curvesSvg.setAttribute("aria-hidden", "true");

    // Continuous green branch-and-merge pipeline path (down from Col 2, across Cols 2-4, and curving up into Col 4)
    var fullBranchFlowPath = "M 262 0 C 262 46, 286 76, 330 76 L 570 76 C 614 76, 638 46, 638 0";
    var baseFlowTrack = document.createElementNS(SVG_NS, "path");
    baseFlowTrack.setAttribute("d", fullBranchFlowPath);
    baseFlowTrack.setAttribute("class", "git-branch-line-feature");

    var animFlowTrack = document.createElementNS(SVG_NS, "path");
    animFlowTrack.setAttribute("d", fullBranchFlowPath);
    animFlowTrack.setAttribute("class", "git-branch-line-animated");

    // Travelling commit dot along the full branch -> diff -> PR -> merge loop
    var flowDot = document.createElementNS(SVG_NS, "circle");
    flowDot.setAttribute("r", "6");
    flowDot.setAttribute("class", "git-traveller-dot");
    var flowMotion = document.createElementNS(SVG_NS, "animateMotion");
    flowMotion.setAttribute("dur", "3.6s");
    flowMotion.setAttribute("repeatCount", "indefinite");
    flowMotion.setAttribute("path", fullBranchFlowPath);
    flowDot.appendChild(flowMotion);

    // Left callout pill (top row inside the curve, never overlaps mergeLabel)
    var splitLabel = document.createElementNS(SVG_NS, "text");
    splitLabel.setAttribute("x", "282");
    splitLabel.setAttribute("y", "24");
    splitLabel.setAttribute("class", "git-svg-curve-caption");
    splitLabel.textContent = "↘ Splits off from main (c2)";

    // Right callout pill (bottom row inside the curve, right-aligned so it never clips or overlaps)
    var mergeLabel = document.createElementNS(SVG_NS, "text");
    mergeLabel.setAttribute("x", "618");
    mergeLabel.setAttribute("y", "52");
    mergeLabel.setAttribute("text-anchor", "end");
    mergeLabel.setAttribute("class", "git-svg-curve-caption");
    mergeLabel.textContent = "Approved PR merges into main (c5) ↗";

    curvesSvg.appendChild(baseFlowTrack);
    curvesSvg.appendChild(animFlowTrack);
    curvesSvg.appendChild(flowDot);
    curvesSvg.appendChild(splitLabel);
    curvesSvg.appendChild(mergeLabel);
    graphWrap.appendChild(curvesSvg);

    // Bottom Track Lane: [spacer] --- [3. Commit] --- [4. git diff] --- [5. Pull Request (PR)] --- [spacer]
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
    sbExplain.textContent = "Continuous green sandbox line—save commits and check diffs here before merging back up into main.";
    sandboxBanner.appendChild(sbBadge);
    sandboxBanner.appendChild(sbExplain);
    graphWrap.appendChild(sandboxBanner);

    card.appendChild(graphWrap);
    showGitInspector(gitNodes[0], false);
    container.appendChild(card);
  }

  function showGitInspector(gNode, isUserClick) {
    if (!window.PipelineAgent || typeof window.PipelineAgent.showInspector !== "function") return;
    window.PipelineAgent.showInspector(
      function (inspectorEl) {
        updateGitInspector(inspectorEl, gNode);
      },
      {
        autoOpen: Boolean(isUserClick),
        pulse: Boolean(isUserClick),
        itemTitle: gNode.word
      }
    );
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
        if (window.PipelineAgent && typeof window.PipelineAgent.setTab === "function") {
          window.PipelineAgent.setTab("guide");
        }
        return;
      }
      containerEl.style.display = "block";
      if (stop.diagramType === "tools-flow") {
        renderToolsFlowDiagram(containerEl);
        if (typeof window.renderInterfaceExplorer === "function") {
          window.renderInterfaceExplorer(containerEl, "github");
        }
      } else if (stop.diagramType === "app-infrastructure") {
        renderAppInfrastructureDiagram(containerEl);
      } else if (stop.diagramType === "git-living") {
        renderGitLivingDiagram(containerEl);
      } else if (stop.diagramType === "terminal-interactive" && typeof window.renderTerminalInteractiveDiagram === "function") {
        window.renderTerminalInteractiveDiagram(containerEl);
      } else if (stop.diagramType === "python-code-blueprint" && typeof window.renderPythonCodeDiagram === "function") {
        window.renderPythonCodeDiagram(containerEl);
      } else if (stop.diagramType === "systems-agent-blueprint" && typeof window.renderSystemsAgentDiagram === "function") {
        window.renderSystemsAgentDiagram(containerEl);
      } else if (stop.diagramType === "opensource-shipping" && typeof window.renderOpenSourceShippingDiagram === "function") {
        window.renderOpenSourceShippingDiagram(containerEl);
      }
    }
  };
})();
