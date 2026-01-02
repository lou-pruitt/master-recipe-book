// ---------- Helpers ----------

function getApprovedRecipes() {
  return recipes.filter((recipe) => recipe.approved);
}

function getRecipeById(id) {
  return recipes.find((recipe) => recipe.id === id);
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

// ---------- Index Page (Recipe List) ----------

function renderRecipeList() {
  const recipeList = document.getElementById("recipe-list");
  const categorySelect = document.querySelector("aside select");
  const timeInput = document.querySelector('aside input[type="number"]');

  if (!recipeList) return;

  const selectedCategory = categorySelect ? categorySelect.value : "All";
  const maxTime = timeInput && timeInput.value ? Number(timeInput.value) : null;

  let approvedRecipes = getApprovedRecipes();

  if (selectedCategory !== "All") {
    approvedRecipes = approvedRecipes.filter(
      (recipe) => recipe.category === selectedCategory
    );
  }

  if (maxTime !== null) {
    approvedRecipes = approvedRecipes.filter(
      (recipe) => recipe.prepTime <= maxTime
    );
  }

  recipeList.innerHTML = "";

  if (approvedRecipes.length === 0) {
    recipeList.innerHTML = "<p>No recipes match these filters.</p>";
    return;
  }

  approvedRecipes.forEach((recipe) => {
    const article = document.createElement("article");

    article.innerHTML = `
      <h3>
        <a href="recipe.html?id=${recipe.id}">
          ${recipe.title}
        </a>
      </h3>
      <p>${recipe.category} • ${recipe.prepTime} minutes</p>
    `;

    recipeList.appendChild(article);
  });
}

// ---------- Recipe Page (Single Recipe) ----------

function renderRecipePage() {
  const recipeId = getQueryParam("id");
  if (!recipeId) return;

  const recipe = getRecipeById(recipeId);
  if (!recipe) return;

  const page = document.querySelector(".recipe-page");
  if (!page) return;

  page.innerHTML = `
    <h1>${recipe.title}</h1>

    ${recipe.image ? `<img src="${recipe.image}" alt="${recipe.title}">` : ""}

    <section>
      <h2>Ingredients</h2>
      <ul>
        ${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section>
      <h2>Prep Instructions</h2>
      <ol>
        ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
      </ol>
    </section>
  `;
}

// ---------- Events ----------

const categorySelect = document.querySelector("aside select");
if (categorySelect) {
  categorySelect.addEventListener("change", renderRecipeList);
}

const timeInput = document.querySelector('aside input[type="number"]');
if (timeInput) {
  timeInput.addEventListener("input", renderRecipeList);
}

const clearButton = document.getElementById("clear-filters");
if (clearButton) {
  clearButton.addEventListener("click", () => {
    const categorySelect = document.querySelector("aside select");
    const timeInput = document.querySelector('aside input[type="number"]');

    if (categorySelect) categorySelect.value = "All";
    if (timeInput) timeInput.value = "";

    renderRecipeList();
  });
}
// ---------- Init ----------

renderRecipeList();
renderRecipePage();
