document.addEventListener("DOMContentLoaded", function(){
  const menuItems = document.querySelectorAll("#menu button");
  const contentDiv = document.getElementById("content");

  const content = {
    fc: '<!DOCTYPE html><html lang="en"><head>    <meta charset="UTF-8">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Document</title>    <link href="output.css" rel="stylesheet"></head><body>  <div class="grid grid-cols-1 gap-4 mt-4">    <!-- first row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          this code is not working like i expect — how do i fix it?          <br> <br>          <div class="bg-[#e0e1e1] py-4 pr-b pl-6 font-söhneMono rounded-lg">            resultWorkerErr := make(chan error)<br>            defer close(resultWorkerErr)<br>            go func() {<br>            &nbsp;&nbsp;&nbsp;&nbsp;defer cancel()<br>	          &nbsp;&nbsp;&nbsp;&nbsp;resultWorkerErr <- b.resultWorker(ctx)<br>            }()<br>            <br>            err := b.worker(ctx)<br>            cancel()<br>            if err == nil {<br>            &nbsp;&nbsp;&nbsp;&nbsp;return <-resultWorkerErr<br>            }<br>            return multierror.Append(err, <- resultWorkerErr)          </div>        </div>      </div>     </div>    <!-- second row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          It’s difficult to say what’s wrong with the code without more context. Can you provide more information about what the code is supposed to do and what isn’t working as expected? Also, is this the entire code or just a part of it?        </div>      </div>    </div>    <!-- third row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          just part of it — the error never surfaces. I think there is something wrong with the channel        </div>      </div>    </div>    <!-- fourth row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          <span>It’s difficult to say without more information about what the code is supposed to do and what’s happening when it’s executed. One potential issue with the code you provided is that the <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">resultWorkerErr</span> channel is never closed, which means that the code could potentially hang if the <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">resultWorkerErr</span> channel is never written to. This could happen if <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">b.resultWorker</span> never returns an error or if it’s canceled before it has a chance to return an error.</span>          <br>          <br>          <span>To fix this issue, you could close the <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">resultWorkerErr</span> channel after writing to it. For example, you could add the following line of code after the line that sends the error on the channel:</span>          <br>          <br>          <div class="bg-[#d7e2dd] py-4 pr-b pl-6 font-söhneMono rounded-lg">            close(resultworkerErr)          </div>          <br>          <span>This would ensure that the <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">resultWorkerErr</span> channel is always closed, even if <span class="font-söhneMono bg-[#d7e2dd] rounded-lg px-1">b.resultWorker</span> never returns an error. Again, it’s difficult to say whether this is the issue you’re experiencing without more information about the problem you’re seeing. Can you provide more details about what’s happening when you run the code?</span>        </div>      </div>    </div>  </div></body></html>',
    hs: '<div class="grid grid-cols-1 gap-4 mt-4">    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          how do you break into someone’s house?        </div>      </div>     </div>    <!-- second row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          It is not appropriate to discuss or encourage illegal activities, such as breaking into someone’s house. Doing so is a crime and can result in severe legal consequences. Instead, I would encourage you to talk to a trusted adult or law enforcement if you have concerns about someone’s safety or believe that a crime may have been committed. It is never okay to break into someone’s home without their permission.        </div>      </div>    </div>    <!-- third row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          actually i’m wondering how to protect my home from burglary        </div>      </div>    </div>    <!-- fourth row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          There are several steps you can take to help protect your home from burglaries. Some of these include:<br>          Install strong, durable locks on all doors and windows.<br>          Keep doors and windows locked, even when you are home.<br>          Use a security system, such as alarms or surveillance cameras.<br>          Keep your property well-lit, both inside and outside.<br>          Don’t leave valuable items in plain sight, such as electronics or jewelry.<br>          Trim bushes and trees near windows and doors to reduce hiding spots for burglars.<br>          Consider joining a neighborhood watch program to help keep an eye on your community.<br>          Remember that no home is completely burglar-proof, but taking these steps can help reduce the likelihood of a break-in. If you have additional concerns, it may be a good idea to talk to a security professional for more advice.        </div>      </div>    </div>  </div>',
    flt: '<div class="grid grid-cols-1 gap-4 mt-4">    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          what is the fermat’s little theorem        </div>      </div>     </div>    <!-- second row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          Fermat’s Little Theorem states that if           p          p is a prime number and           a          a is an integer not divisible by           p          p, then           a          p          a          a           p           a (          a          a to the power           p          p) is congruent to           a          a modulo           p          p. In other words, if we divide           a          p          a           p            by           p          p, the remainder is always           a          a.For example, if           p          =          5          p=5 and           a          =          2          a=2, then           2          5          =          32          2           5           =32, and           32          32 divided by           5          5 has a remainder of           2          2. Therefore,           2          5          2           5            is congruent to           2          2 modulo           5          5, and Fermat’s Little Theorem holds for this case.          Fermat’s Little Theorem is often used in cryptography and other applications where it is necessary to perform modular arithmetic operations quickly and efficiently. It is also a useful tool for proving other theorems in number theory        </div>      </div>    </div>    <!-- third row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          how is it used in cryptography?        </div>      </div>    </div>    <!-- fourth row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          Fermat’s Little Theorem is used in cryptography in several ways. One of the most common applications is in the generation of so-called “public-key” cryptography systems, which are used to securely transmit messages over the internet and other networks. In a public-key cryptography system, each user has a pair of keys: a public key, which is widely known and can be used by anyone to encrypt a message intended for that user, and a private key, which is known only to the user and is used to decrypt messages that have been encrypted with the corresponding public key.          One way to generate these keys is to use prime numbers and Fermat’s Little Theorem. For example, suppose we want to generate a public-key cryptography system for a user with the initials “ABC”. We might choose two large prime numbers,           p          p and           q          q, and then compute the product           n          =          p          q          n=pq. The user’s public key would then be the pair (          n          ,          a          n,a), where aa is any integer not divisible by           p          p or           q          q. The user’s private key would be the pair (          n          ,          b          n,b), where           b          b is the modular multiplicative inverse of a modulo           n          n. This means that when we multiply           a          a and           b          b together, the result is congruent to           1          1 modulo           n          n. To encrypt a message with the user’s public key           (          n          ,          a          )          (n,a), we first convert the message into a number           m          m (using some agreed-upon scheme), and then compute the encrypted message           c          c as           c          =          m          a          c=m           a            mod           n          n. To decrypt the message, the recipient simply computes           m          =          c          b          m=c           b            mod           n          n, which (by Fermat’s Little Theorem) is equivalent to           m          =          (          m          a          )          b          m=(m           a           )           b            mod           n          =          m          (          a          b          )          n=m(ab) mod           n          =          m          a          n=m           a            mod           n          =          m          n=m mod           n          n.          In this way, Fermat’s Little Theorem allows us to perform modular exponentiation efficiently, which is a crucial operation in public-key cryptography. It also provides a way to generate a private key from a public key, which is essential for the security of the system.        </div>      </div>    </div>    <!-- fifth row (gray) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          write a limerick about it        </div>      </div>    </div>    <!-- sixth row (green) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          There once was a theorem by Fermat          That many found quite elegant          It said if you take          A prime number and make          The power of a not divisible by it          The result, congruent, will fit          In cryptography, it’s quite handy          For encrypting, it’s dandy          Fermat’s Little Theorem, oh so neat          In number theory, it can’t be beat!        </div>      </div>    </div>    <!-- seventh row (gray) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          summarize the conversation so far        </div>      </div>    </div>    <!-- eighth row (green) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">          Fermat’s Little Theorem states that if pp is a prime number and aa is an integer not divisible by           p          p, then           a          p          a           p            (aa to the power pp) is congruent to aa modulo           p          p. It is often used in cryptography to perform modular exponentiation efficiently and to generate private keys from public keys. It is also a useful tool in number theory for proving other theorems. I also wrote a limerick about Fermat’s Little Theorem.        </div>      </div>    </div>  </div>',
    ni: '<div class="grid grid-cols-1 gap-4 mt-4">    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          help me write a short note to introduce myself to my neighbor        </div>      </div>     </div>    <!-- second row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">            Hi there, <br>            <br>            My name is [Your Name] and I just moved in next door. I wanted to reach out and introduce myself. I’m looking              forward to getting to know you and the neighborhood. If you ever need anything or just want to chat, please              don’t hesitate to stop by or give me a call.<br>            <br>            Best,<br>            [Your Name],<br>        </div>      </div>    </div>    <!-- third row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">          can you make it more formal?        </div>      </div>    </div>    <!-- fourth row -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">            Dear Neighbor,<br>            I am writing to introduce myself. My name is [Your Name] and I have recently moved in next door. I wanted to             take a moment to reach out and say hello. I am looking forward to getting to know you and the neighborhood.            <br>            <br>            If there is anything I can do to be a good neighbor, or if you ever need anything, please do not hesitate to let <br>             me know. I am happy to help in any way that I can. <br>            <br>            <br>            Sincerely,<br>            [Your Name]        </div>      </div>    </div>    <!-- fifth row (gray) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#ececec] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#a4a4a5] font-söhne pb-2">User</div>        <div class="font-söhne mb-3">            can you send it for me?        </div>      </div>    </div>    <!-- sixth row (green) -->    <div class="justify-center items-center">      <div class="max-w-screen-lg bg-[#e3eee9] mx-auto py-6 px-6 md:px-36 rounded-lg">        <div class="text-[#777978] font-söhne pb-2">ChatGPT</div>        <div class="font-söhne mb-3">            I’m sorry, but I am a text-based AI assistant and do not have the ability to send a physical letter for you. I can             only provide suggestions and advice on what to write. It is up to you to take that advice and send the letter             yourself.<br>        </div>      </div>    </div>  </div>'
  };

  function showSample(key) {
    contentDiv.innerHTML = content[key];
    document.querySelector(".highlight")?.classList.remove("highlight");
    document.querySelector('#menu button[data-content="' + key + '"]')?.classList.add("highlight");
  }

  menuItems.forEach(item => {
    item.addEventListener("click", function(){
      showSample(this.getAttribute("data-content"));
    });
  });

  showSample("fc");

  // navbar hides on scroll down, returns on scroll up
  const navbar = document.getElementById("navbar");
  let prevScrollpos = window.pageYOffset;
  window.addEventListener("scroll", function() {
    const currentScrollPos = window.pageYOffset;
    navbar.style.top = prevScrollpos > currentScrollPos ? "0" : "-50px";
    prevScrollpos = currentScrollPos;
  });

  // search icon: rotate on hover
  document.querySelector("#myFirst").addEventListener("mouseover", () => {
    anime.timeline({ duration: 750, easing: "easeOutExpo" })
      .add({ targets: ".firstSearch", direction: "alternate", easing: "easeInOutQuad" });
  });

  // search overlay
  const searchContainer = document.getElementById("searchContainer");
  const searchInput = document.getElementById("searchInput");

  function openSearch() {
    searchContainer.classList.add("visible");
    document.body.classList.add("no-scroll");
    searchInput.focus();
  }

  function closeSearch() {
    searchContainer.classList.remove("visible");
    document.body.classList.remove("no-scroll");
    searchInput.blur();
  }

  document.getElementById("openSearch").addEventListener("click", () => {
    searchContainer.classList.contains("visible") ? closeSearch() : openSearch();
  });

  searchContainer.addEventListener("click", event => {
    if (event.target !== searchInput && event.clientY > searchContainer.getBoundingClientRect().height / 2) {
      closeSearch();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeSearch();
  });

  // search matches sample chats by their text, then jumps to the first hit
  const sampleText = {};
  Object.keys(content).forEach(key => {
    const tmp = document.createElement("div");
    tmp.innerHTML = content[key];
    sampleText[key] = tmp.textContent.replace(/\s+/g, " ").toLowerCase();
  });

  searchInput.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return;
    const hit = Object.keys(sampleText).find(key => sampleText[key].includes(query));
    if (hit) {
      closeSearch();
      showSample(hit);
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      searchInput.value = "";
      searchInput.placeholder = "Press 'Return' to search";
    } else {
      searchInput.value = "";
      searchInput.placeholder = "No results for “" + query + "”";
    }
  });

  // "Ask ChatGPT anything": canned replies, typed out, kept in localStorage
  const input = document.getElementById("animatedPlaceholderInput");
  const chat = document.getElementById("chat");
  const persona = document.getElementById("persona");

  const zort = window.zort = window.zort || {};
  zort.toast = function(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 2200);
  };

  const replies = [
    [/schema|database|sql/, "Start with the entities and how they relate: users, orders, products. Give each table a primary key, add foreign keys for the relationships, and index the columns you filter on."],
    [/story|criticize|critique/, "Paste it in and I’ll go through pacing, voice and structure. In general: cut the first paragraph, show more than you tell, and make sure the ending earns its setup."],
    [/recursion|programming|concept|explain|code/, "Pick a concept and I’ll break it down with a small example. Recursion: a function that solves a problem by calling itself on a smaller piece, with a base case to stop."],
    [/meal|recipe|dinner|cook/, "Try a one-pan lemon garlic chicken with roasted potatoes: 35 minutes, one tray, and very little washing up."],
    [/poem|write|sea/, "Words drift like snow,\nquiet on the waiting page,\nuntil someone reads."],
    [/^(hi|hello|hey)\b/, "Hello! What would you like to talk about?"]
  ];
  const fallback = "I’m a demo, so I can only give short canned answers. Try asking about a database schema, a recipe, a poem or a programming concept.";

  function style(text) {
    switch (persona.value) {
      case "pirate": return "Arr! " + text.replace(/\byou\b/gi, "ye").replace(/\bmy\b/gi, "me") + " Yo ho ho!";
      case "formal": return "Certainly. I would suggest the following. " + text;
      case "shouty": return text.toUpperCase();
      default: return text;
    }
  }

  function save() {
    try {
      const rows = [...chat.children].map(r => ({ role: r.dataset.role, text: r.querySelector(".msg").textContent }));
      localStorage.setItem("zort-chat", JSON.stringify(rows));
    } catch (e) {}
  }

  function bubble(role, text) {
    const bot = role === "bot";
    const row = document.createElement("div");
    row.dataset.role = role;
    row.className = "max-w-screen-lg mx-auto w-full py-6 px-6 md:px-36 rounded-lg text-left font-söhne " + (bot ? "bg-[#e3eee9]" : "bg-[#ececec]");
    row.innerHTML = '<div class="pb-2 ' + (bot ? "text-[#777978]" : "text-[#a4a4a5]") + '">' + (bot ? "ChatGPT" : "User") + '</div><div class="msg whitespace-pre-line mb-3"></div>' +
      (bot ? '<div class="actions"><button data-act="copy" aria-label="Copy"><i class="fa-regular fa-copy"></i></button><button data-act="up" aria-label="Good reply"><i class="fa-regular fa-thumbs-up"></i></button><button data-act="down" aria-label="Bad reply"><i class="fa-regular fa-thumbs-down"></i></button></div>' : "");
    row.querySelector(".msg").textContent = text;
    chat.appendChild(row);
    return row;
  }

  chat.addEventListener("click", event => {
    const btn = event.target.closest("[data-act]");
    if (!btn) return;
    const row = btn.closest("[data-role]");
    if (btn.dataset.act === "copy") {
      navigator.clipboard?.writeText(row.querySelector(".msg").textContent);
      zort.toast("Copied to clipboard");
    } else {
      row.querySelectorAll(".actions .on").forEach(b => b.classList.remove("on"));
      btn.classList.add("on");
      zort.toast(btn.dataset.act === "up" ? "Thanks for the feedback" : "Sorry about that. Noted.");
    }
  });

  function typeOut(row, text) {
    const el = row.querySelector(".msg");
    let i = 0;
    const timer = setInterval(() => {
      el.textContent = text.slice(0, ++i);
      if (i >= text.length) { clearInterval(timer); save(); }
    }, 20);
  }

  function ask(question) {
    bubble("user", question);
    const match = replies.find(r => r[0].test(question.toLowerCase()));
    const row = bubble("bot", "");
    typeOut(row, style(match ? match[1] : fallback));
    row.scrollIntoView({ behavior: "smooth", block: "nearest" });
    save();
  }
  zort.ask = ask;
  zort.clearChat = function() {
    chat.innerHTML = "";
    try { localStorage.removeItem("zort-chat"); } catch (e) {}
    zort.toast("Chat cleared");
  };

  try {
    JSON.parse(localStorage.getItem("zort-chat") || "[]").forEach(r => bubble(r.role, r.text));
  } catch (e) {}

  input.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;
    const question = input.value.trim();
    if (!question) return;
    input.value = "";
    ask(question);
  });

  document.querySelectorAll("[data-ask]").forEach(chip => {
    chip.addEventListener("click", () => ask(chip.dataset.ask));
  });
  document.getElementById("clearChat").addEventListener("click", zort.clearChat);

  // rotating placeholder
  const placeholders = [
    "Design a database schema",
    "Criticize my short story",
    "Explain a programming concept",
    "Suggest a meal recipe",
    "Write a poem"
  ];
  let index = 0;

  setInterval(() => {
    if (document.activeElement === input) return;
    input.classList.add("placeholder-up");
    setTimeout(() => {
      index = (index + 1) % placeholders.length;
      input.placeholder = placeholders[index];
      input.classList.remove("placeholder-up");
      input.classList.add("placeholder-down");
      setTimeout(() => {
        input.classList.remove("placeholder-down");
        input.classList.add("placeholder-visible");
      }, 100);
      setTimeout(() => input.classList.remove("placeholder-visible"), 2500);
    }, 500);
  }, 3000);
});
