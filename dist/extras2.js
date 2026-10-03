document.addEventListener("DOMContentLoaded", () => {
  const zort = window.zort = window.zort || {};
  const toast = msg => zort.toast && zort.toast(msg);

  // pricing: monthly / yearly
  const billing = document.getElementById("billing");
  billing.addEventListener("click", event => {
    const btn = event.target.closest("[data-bill]");
    if (!btn) return;
    const mode = btn.dataset.bill;
    billing.querySelectorAll("button").forEach(b => {
      const on = b === btn;
      b.classList.toggle("bg-black", on);
      b.classList.toggle("text-white", on);
    });
    document.querySelectorAll("[data-m]").forEach(el => {
      const from = +el.textContent;
      const to = +el.dataset[mode];
      const state = { n: from };
      anime({ targets: state, n: to, round: 1, duration: 500, easing: "easeOutQuad", update: () => { el.textContent = state.n; } });
    });
  });
  document.querySelectorAll(".plan").forEach(btn => {
    btn.addEventListener("click", () => toast("Just a clone, nothing to buy. Nice try."));
  });

  // newsletter
  const news = document.getElementById("news");
  const newsMsg = document.getElementById("newsMsg");
  try {
    const saved = localStorage.getItem("zort-email");
    if (saved) newsMsg.textContent = "Subscribed as " + saved + ".";
  } catch (e) {}
  news.addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("newsEmail").value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newsMsg.textContent = "That doesn't look like an email address.";
      anime({ targets: "#newsEmail", translateX: [0, -8, 8, -6, 6, 0], duration: 400, easing: "easeInOutSine" });
      return;
    }
    try { localStorage.setItem("zort-email", email); } catch (e) {}
    newsMsg.textContent = "Subscribed as " + email + ".";
    news.reset();
    toast("You're on the list");
  });

  // card spotlight follows the pointer
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("pointermove", event => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", event.clientX - r.left + "px");
      card.style.setProperty("--y", event.clientY - r.top + "px");
    });
  });

  // command palette: Ctrl/Cmd + K
  const goTo = text => () => {
    const h = [...document.querySelectorAll("h2, header, #menu")].find(el => el.textContent.trim().startsWith(text));
    if (h) h.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const commands = [
    ["Go to Samples", "section", () => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })],
    ["Go to Capabilities", "section", goTo("What ZortGPT can do")],
    ["Go to Tokenizer", "section", goTo("Chop it")],
    ["Go to Timeline", "section", goTo("How we got")],
    ["Go to Limitations", "section", goTo("Known limitations")],
    ["Go to Pricing", "section", goTo("Pricing")],
    ["Go to Chat", "section", () => { document.getElementById("animatedPlaceholderInput").scrollIntoView({ behavior: "smooth", block: "center" }); document.getElementById("animatedPlaceholderInput").focus({ preventScroll: true }); }],
    ["Toggle dark mode", "action", () => zort.toggleDark && zort.toggleDark()],
    ["Clear chat", "action", () => zort.clearChat && zort.clearChat()],
    ["Throw confetti", "action", () => zort.confetti && zort.confetti()],
    ["Scroll to top", "action", () => window.scrollTo({ top: 0, behavior: "smooth" })]
  ];

  const pal = document.createElement("div");
  pal.id = "palette";
  pal.innerHTML = '<div class="box font-söhne"><input placeholder="Type a command..." aria-label="Command palette"><ul></ul></div>';
  document.body.appendChild(pal);
  const palInput = pal.querySelector("input");
  const palList = pal.querySelector("ul");
  let shown = [];
  let sel = 0;

  function paint() {
    const q = palInput.value.trim().toLowerCase();
    shown = commands.filter(c => c[0].toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(shown.length - 1, 0));
    palList.innerHTML = "";
    shown.forEach((c, i) => {
      const li = document.createElement("li");
      li.className = i === sel ? "sel" : "";
      li.innerHTML = "<span></span><small></small>";
      li.firstChild.textContent = c[0];
      li.lastChild.textContent = c[1];
      li.addEventListener("click", () => run(i));
      palList.appendChild(li);
    });
  }

  function open() {
    pal.classList.add("open");
    palInput.value = "";
    sel = 0;
    paint();
    palInput.focus();
  }
  function close() { pal.classList.remove("open"); palInput.blur(); }
  function run(i) {
    const cmd = shown[i];
    if (!cmd) return;
    close();
    cmd[2]();
  }

  pal.addEventListener("click", event => { if (event.target === pal) close(); });
  palInput.addEventListener("input", () => { sel = 0; paint(); });
  palInput.addEventListener("keydown", event => {
    if (event.key === "ArrowDown") { sel = (sel + 1) % Math.max(shown.length, 1); paint(); event.preventDefault(); }
    else if (event.key === "ArrowUp") { sel = (sel - 1 + shown.length) % Math.max(shown.length, 1); paint(); event.preventDefault(); }
    else if (event.key === "Enter") run(sel);
    else if (event.key === "Escape") close();
  });
  document.addEventListener("keydown", event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      pal.classList.contains("open") ? close() : open();
    }
  });

  const hint = document.createElement("button");
  hint.className = "fab";
  hint.style.bottom = "132px";
  hint.setAttribute("aria-label", "Command palette");
  hint.innerHTML = '<i class="fa-solid fa-terminal"></i>';
  hint.addEventListener("click", open);
  document.body.appendChild(hint);
});
