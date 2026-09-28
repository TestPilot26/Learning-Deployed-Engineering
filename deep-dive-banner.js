// ============================================================================
// Deep-dive banner: a tonal call-out row that expands optional detail below it.
// Used on Step 6 for "Understanding & building MCPs". Token-only colours, no innerHTML.
//   var dd = window.createDeepDiveBanner({ title, hint, chips, onOpen });
//   parent.appendChild(dd.el);  dd.host.appendChild(optionalContent);
// ============================================================================
(function () {
  "use strict";

  function createDeepDiveBanner(opts) {
    opts = opts || {};
    var wrap = document.createElement("div");
    wrap.className = "section-spacer";

    var banner = document.createElement("div");
    banner.style.display = "flex";
    banner.style.alignItems = "center";
    banner.style.gap = "16px";
    banner.style.flexWrap = "wrap";
    banner.style.padding = "16px 24px";
    banner.style.borderRadius = "16px";
    banner.style.background = "var(--color-primary-container)";
    banner.style.color = "var(--color-on-primary-container)";

    var icon = document.createElement("span");
    icon.className = "material-symbols-outlined";
    icon.textContent = opts.icon || "school";
    icon.style.fontSize = "32px";
    icon.setAttribute("aria-hidden", "true");

    var textCol = document.createElement("div");
    textCol.style.flex = "1 1 320px";
    var title = document.createElement("strong");
    title.style.display = "block";
    title.style.fontSize = "16px";
    title.style.marginBottom = "4px";
    title.textContent = opts.title || "Want to go deeper?";
    var hint = document.createElement("span");
    hint.style.display = "block";
    hint.style.fontSize = "14px";
    hint.textContent = opts.hint || "";
    textCol.appendChild(title);
    textCol.appendChild(hint);

    if (opts.chips && opts.chips.length) {
      var chipRow = document.createElement("div");
      chipRow.style.display = "flex";
      chipRow.style.flexWrap = "wrap";
      chipRow.style.gap = "8px";
      chipRow.style.marginTop = "8px";
      opts.chips.forEach(function (c) {
        var chip = document.createElement("span");
        chip.textContent = c;
        chip.style.fontSize = "12px";
        chip.style.fontWeight = "600";
        chip.style.padding = "4px 8px";
        chip.style.borderRadius = "8px";
        chip.style.background = "var(--color-surface-container-lowest)";
        chip.style.color = "var(--color-on-surface)";
        chipRow.appendChild(chip);
      });
      textCol.appendChild(chipRow);
    }

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-btn nav-btn-primary";
    btn.setAttribute("aria-expanded", "false");
    btn.style.background = "var(--color-primary)";
    btn.style.color = "var(--color-on-primary)";
    btn.style.flexShrink = "0";
    var btnLabel = document.createElement("span");
    var btnIcon = document.createElement("span");
    btnIcon.className = "material-symbols-outlined";
    btn.appendChild(btnLabel);
    btn.appendChild(btnIcon);

    var host = document.createElement("div");
    host.style.display = "none";

    function setOpen(open) {
      host.style.display = open ? "" : "none";
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btnLabel.textContent = open ? (opts.closeLabel || "Hide deep dive") : (opts.openLabel || "Open deep dive");
      btnIcon.textContent = open ? "expand_less" : "expand_more";
    }
    btn.addEventListener("click", function () {
      var open = host.style.display === "none";
      setOpen(open);
      if (open && typeof opts.onOpen === "function") opts.onOpen();
    });
    setOpen(false);

    banner.appendChild(icon);
    banner.appendChild(textCol);
    banner.appendChild(btn);
    wrap.appendChild(banner);
    wrap.appendChild(host);
    return { el: wrap, host: host, setOpen: setOpen };
  }

  window.createDeepDiveBanner = createDeepDiveBanner;
})();
