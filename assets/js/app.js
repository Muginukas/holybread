/* Šventos virtuvės receptyno logika: paieška, filtrai, recepto langas. */

(function () {
  "use strict";

  const grid = document.getElementById("grid");
  const chipBox = document.getElementById("cat-chips");
  const search = document.getElementById("search");
  const countEl = document.getElementById("count");
  const dialog = document.getElementById("recipe");
  const modalBody = document.getElementById("modal-body");

  let activeCategory = "visi";

  const catName = (id) => (CATEGORIES.find((c) => c.id === id) || {}).name || id;
  const catIcon = (id) => (CATEGORIES.find((c) => c.id === id) || {}).icon || "🍽";

  /* ------------------------------ Statistika ---------------------------- */
  function renderStats() {
    const books = new Set(
      RECIPES.flatMap((r) =>
        r.scripture.split(";").map((s) => s.trim().replace(/\s+\d+[:\d\-–,\s]*$/, ""))
      )
    );
    document.getElementById("stat-recipes").textContent = RECIPES.length;
    document.getElementById("stat-cats").textContent = CATEGORIES.length;
    document.getElementById("stat-books").textContent = books.size;
  }

  /* ------------------------------- Filtrai ------------------------------ */
  function renderChips() {
    const all = [{ id: "visi", name: "Visi receptai", icon: "📜" }].concat(CATEGORIES);
    chipBox.innerHTML = all
      .map(
        (c) =>
          `<button class="chip" type="button" data-cat="${c.id}" aria-pressed="${
            c.id === activeCategory
          }">${c.icon} ${c.name}</button>`
      )
      .join("");
  }

  function matches(recipe, query) {
    if (activeCategory !== "visi" && recipe.category !== activeCategory) return false;
    if (!query) return true;
    const haystack = [
      recipe.title,
      recipe.scripture,
      recipe.verse,
      recipe.note,
      recipe.balance,
      catName(recipe.category),
      recipe.tags.join(" "),
      recipe.ingredients.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    return query
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean)
      .every((word) => haystack.includes(word));
  }

  /* ------------------------------ Kortelės ------------------------------ */
  function cardHtml(r) {
    return `
      <button class="card" type="button" data-id="${r.id}">
        <span class="cat">${catIcon(r.category)} ${catName(r.category)}</span>
        <h3>${r.title}</h3>
        <span class="ref">${r.scripture}</span>
        <p class="verse">„${r.verse}“</p>
        <div class="meta">
          <span>⏱ ${r.time}</span>
          <span>🍽 ${r.servings}</span>
          <span>📊 ${r.difficulty}</span>
        </div>
        <div class="tags">${r.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </button>`;
  }

  function render() {
    const query = search.value.trim();
    const list = RECIPES.filter((r) => matches(r, query));
    grid.innerHTML = list.length
      ? list.map(cardHtml).join("")
      : `<p class="empty">Tokio patiekalo receptyne nėra. Pabandyk „duona“, „lęšiai“ ar „medus“.</p>`;
    countEl.textContent = `${list.length} iš ${RECIPES.length}`;
  }

  /* --------------------------- Recepto langas --------------------------- */
  function openRecipe(id) {
    const r = RECIPES.find((x) => x.id === id);
    if (!r) return;
    modalBody.innerHTML = `
      <button class="modal-close" type="button" aria-label="Uždaryti" data-close>×</button>
      <span class="cat">${catIcon(r.category)} ${catName(r.category)}</span>
      <h2>${r.title}</h2>
      <blockquote>„${r.verse}“<br><cite>${r.scripture}</cite></blockquote>
      <div class="modal-meta">
        <span>⏱ Trukmė: ${r.time}</span>
        <span>🍽 Kiekis: ${r.servings}</span>
        <span>📊 Sudėtingumas: ${r.difficulty}</span>
      </div>
      <h4>Produktai</h4>
      <ul>${r.ingredients.map((i) => `<li>${i}</li>`).join("")}</ul>
      <h4>Gaminimas</h4>
      <ol>${r.steps.map((s) => `<li>${s}</li>`).join("")}</ol>
      <div class="callout"><strong>Kodėl subalansuota:</strong> ${r.balance}</div>
      <div class="callout"><strong>Iš Rašto:</strong> ${r.note}</div>
      <div class="modal-actions">
        <button class="btn" type="button" data-print>🖨 Spausdinti receptą</button>
        <button class="btn ghost" type="button" data-close>Uždaryti</button>
      </div>`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    modalBody.scrollTop = 0;
    history.replaceState(null, "", "#" + r.id);
  }

  function closeRecipe() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    history.replaceState(null, "", location.pathname + location.search);
  }

  /* ---------------------------- Savaitės meniu -------------------------- */
  const WEEK = [
    ["Pirmadienis", ["Pusryčiai: manų paplotėliai su medumi", "Pietūs: Ezavo lęšių troškinys su maca", "Vakarienė: Egipto agurkų ir melionų salotos"]],
    ["Antradienis", ["Pusryčiai: sviestas ir medus ant Ezekielio duonos", "Pietūs: Danieliaus daržovės", "Vakarienė: labaneh su isopu ir alyvuogėmis"]],
    ["Trečiadienis", ["Pusryčiai: figų pyragaitis ir pienas su kardamonu", "Pietūs: pupelių, sorų ir spelta sriuba", "Vakarienė: žuvis ant žarijų"]],
    ["Ketvirtadienis", ["Pusryčiai: miežinė bandelė su datulių medumi", "Pietūs: Egipto porų troškinys", "Vakarienė: ožkų sūris, granatai, migdolai"]],
    ["Penktadienis", ["Pusryčiai: skrudinti grūdai su actu", "Pietūs: kepta žuvis su medaus koriu", "Vakarienė (šabo išvakarės): keptos putpelės, padėtinė duona"]],
    ["Šeštadienis (poilsis)", ["Viskas paruošta iš vakaro", "Šalti patiekalai: labaneh, alyvuogės, charosetas", "Razinų pyragaitis ir vynuogių gėrimas"]],
    ["Sekmadienis (šventė)", ["Pusryčiai: Saros paplotėliai su zaataru", "Pietūs: Pesacho avinėlis su karčiosiomis žolelėmis", "Vakarienė: granatų ir migdolų desertas"]]
  ];

  function renderWeek() {
    document.getElementById("week").innerHTML = WEEK.map(
      ([day, meals]) =>
        `<article class="day"><h3>${day}</h3><ul>${meals
          .map((m) => `<li>${m}</li>`)
          .join("")}</ul></article>`
    ).join("");
  }

  /* ------------------------------- Įvykiai ------------------------------ */
  chipBox.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    activeCategory = btn.dataset.cat;
    chipBox.querySelectorAll(".chip").forEach((c) =>
      c.setAttribute("aria-pressed", String(c.dataset.cat === activeCategory))
    );
    render();
  });

  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openRecipe(card.dataset.id);
  });

  modalBody.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeRecipe();
    if (e.target.closest("[data-print]")) window.print();
  });

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) closeRecipe();
  });

  dialog.addEventListener("close", () => {
    if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  });

  let timer;
  search.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(render, 120);
  });

  /* -------------------------------- Startas ----------------------------- */
  renderStats();
  renderChips();
  renderWeek();
  render();

  const initial = decodeURIComponent(location.hash.replace("#", ""));
  if (initial && RECIPES.some((r) => r.id === initial)) openRecipe(initial);
})();
