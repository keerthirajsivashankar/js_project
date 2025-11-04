function hero(props) {
  return `
    <div class="hero bg-blue-500 text-white p-8 rounded-lg text-center">
      <h1 class="text-4xl font-bold mb-4">${props.title}</h1>
      <p class="text-lg">${props.subtitle}</p>
      <button class="bg-white text-blue-500 px-4 py-2 rounded-lg mt-4">${props.buttonText}</button>
    </div>
    `;
}

// --- 3. Our Data (Good!) ---
let heroData = {
  title: "Welcome to Our Store",
  subtitle: "Find the best products here",
  buttonText: "Shop Now",
};
// --- 4. Render to the DOM (Good!) ---
document.getElementById("app").innerHTML = hero(heroData);
// --- 1. Get the container where we want to put our products ---
let app = document.getElementById("app");
// --- 2. Add the hero component to the container ---
app.innerHTML = hero(heroData);
// --- 3. Create a new div for products and add it below the hero ---
let productContainer = document.createElement("div");
productContainer.id = "products";
app.appendChild(productContainer);
// --- 4. Now we can add products to the product container ---
productContainer.innerHTML = products
  .map((product) => productcard(product))
  .join("");

// --- 5. Add a footer to the page ---
let footer = document.createElement("footer");
footer.innerHTML = `<p>&copy; 2023 Our Store. All rights reserved.</p>`;
app.appendChild(footer);
// --- 1. Get the container where we want to put our products ---
