document.addEventListener("DOMContentLoaded", () => {
  // scroll progress bar + back-to-top
  const progress = document.getElementById("progress");
  const toTop = document.createElement("button");
  toTop.id = "toTop";
  toTop.className = "fab";
  toTop.setAttribute("aria-label", "Back to top");
  toTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  document.body.appendChild(toTop);

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    toTop.classList.toggle("show", window.scrollY > 600);
  });

  // dark mode
  const root = document.documentElement;
  const dark = document.createElement("button");
  dark.id = "darkToggle";
  dark.className = "fab";
  dark.setAttribute("aria-label", "Toggle dark mode");
  dark.innerHTML = '<i class="fa-solid fa-moon"></i>';
  document.body.appendChild(dark);
  try { if (localStorage.getItem("zort-dark") === "1") root.classList.add("dark"); } catch (e) {}
  dark.addEventListener("click", () => {
    root.classList.toggle("dark");
    try { localStorage.setItem("zort-dark", root.classList.contains("dark") ? "1" : "0"); } catch (e) {}
  });

  // reveal on scroll, staggered
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = [...el.parentElement.querySelectorAll(":scope > [data-reveal]")];
      el.style.transitionDelay = Math.min(siblings.indexOf(el), 5) * 90 + "ms";
      el.classList.add("in");
      reveal.unobserve(el);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll("[data-reveal]").forEach(el => reveal.observe(el));

  // count-up numbers
  const counter = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      counter.unobserve(el);
      const target = +el.dataset.count;
      const state = { n: 0 };
      anime({
        targets: state,
        n: target,
        round: 1,
        duration: 1800,
        easing: "easeOutExpo",
        update: () => { el.textContent = state.n.toLocaleString("en-US"); }
      });
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach(el => counter.observe(el));

  // toy tokenizer
  const tokIn = document.getElementById("tokIn");
  const tokOut = document.getElementById("tokOut");
  const tokStats = document.getElementById("tokStats");
  const colors = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3", "#ede9fe", "#ffedd5"];

  function tokenize(text) {
    const pieces = text.match(/\s?[A-Za-z]+|\s?\d+|\s+|[^\sA-Za-z\d]/g) || [];
    const out = [];
    pieces.forEach(p => {
      const lead = /^\s/.test(p) && p.trim() ? p[0] : "";
      const word = p.trim() ? p.trim() : p;
      for (let i = 0; i < word.length; i += 5) {
        out.push((i === 0 ? lead : "") + word.slice(i, i + 5));
      }
    });
    return out;
  }

  function renderTokens() {
    const text = tokIn.value;
    const tokens = tokenize(text);
    tokOut.innerHTML = "";
    tokens.forEach((t, i) => {
      const span = document.createElement("span");
      span.className = "tok";
      span.style.background = colors[i % colors.length];
      span.style.color = "#111";
      span.textContent = t;
      tokOut.appendChild(span);
    });
    const words = (text.match(/\S+/g) || []).length;
    tokStats.textContent = tokens.length + " tokens · " + words + " words · " + text.length + " characters";
  }
  tokIn.addEventListener("input", renderTokens);
  renderTokens();

  // konami: confetti
  const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
  let pos = 0;
  document.addEventListener("keydown", event => {
    if (/INPUT|TEXTAREA/.test(document.activeElement.tagName)) return;
    pos = event.key.toLowerCase() === code[pos].toLowerCase() ? pos + 1 : 0;
    if (pos === code.length) { pos = 0; confetti(); }
  });

  window.zort = window.zort || {};
  window.zort.confetti = confetti;
  window.zort.toggleDark = () => dark.click();

  function confetti() {
    const palette = ["#000", "#10a37f", "#f5c542", "#e3eee9", "#ff6b6b", "#6b8cff"];
    for (let i = 0; i < 120; i++) {
      const bit = document.createElement("div");
      bit.className = "confetti";
      bit.style.left = Math.random() * 100 + "vw";
      bit.style.background = palette[i % palette.length];
      document.body.appendChild(bit);
      anime({
        targets: bit,
        translateY: window.innerHeight + 40,
        translateX: (Math.random() - 0.5) * 300,
        rotate: Math.random() * 720,
        duration: 1800 + Math.random() * 1800,
        delay: Math.random() * 500,
        easing: "easeInQuad",
        complete: () => bit.remove()
      });
    }
  }
});
