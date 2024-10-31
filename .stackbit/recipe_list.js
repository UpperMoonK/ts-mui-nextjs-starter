// Recipe data array to store recipes
const recipes = [];

// Function to add a recipe
function addRecipe(name, ingredients, instructions, category) {
    const recipe = {
        id: recipes.length + 1,
        name,
        ingredients,
        instructions,
        category
    };
    recipes.push(recipe);
    renderRecipes();
}

// Function to filter recipes by category
function filterRecipes(category) {
    return recipes.filter(recipe => recipe.category === category);
}

// Function to render all recipes
function renderRecipes(category = null) {
    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = "";

    const filteredRecipes = category ? filterRecipes(category) : recipes;
    filteredRecipes.forEach(recipe => {
        const recipeElement = document.createElement("div");
        recipeElement.className = "recipe";

        recipeElement.innerHTML = `
            <h2>${recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
            </ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;

        recipeContainer.appendChild(recipeElement);
    });
}

// Sample categories for filtering
const categories = ["Dessert", "Main Course", "Appetizer"];

// Function to render category buttons for filtering
function renderCategoryButtons() {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");
        button.textContent = category;
        button.onclick = () => renderRecipes(category);
        categoryContainer.appendChild(button);
    });
}

// Initialization function
function init() {
    renderRecipes();
    renderCategoryButtons();
}

// Call init on page load
document.addEventListener("DOMContentLoaded", init);

