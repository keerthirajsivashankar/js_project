console.log("file running");

let heading = document.getElementById("greetings");
let productContainer = document.getElementById("products");

// --- 1. Style the static parts of the page (Good!) ---
heading.style.fontSize = "2.5rem";
heading.style.textAlign = "center";
heading.style.fontFamily = "Arial, sans-serif";

// Style the container *before* we add content
productContainer.style.display = "flex";
productContainer.style.justifyContent = "center";
productContainer.style.flexWrap = "wrap";
productContainer.style.gap = "20px";
productContainer.style.padding = "20px"; // Added some padding

// --- 2. Our Component (Now with styles built-in!) ---
// The component is now a "complete package" of structure AND style.
function productcard(props) {
  // Notice the "style='...'" attributes.
  // I also fixed the typos: 'aspectRatio' (camelCase) and 'height' (lowercase)
  return `
    <div class="product-card" style="
      width: 250px;
      aspect-ratio: 3/4; 
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
      text-align: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    ">
      <img src="${props.imageUrl}" alt="${props.name}" class="product-image" style="
        width: 100%;
        height: 200px; 
        object-fit: cover; /* Added this to make images look clean */
        border-radius: 4px; /* Added this */
      "/>
      <h2 class="product-name" style="font-size: 1.25rem;">${props.name}</h2>
      <p class="product-price" style="
        color: #007bff;
        font-weight: bold;
        font-size: 1.1rem;
      ">$${props.price}</p>
    </div>
  `;
}

// --- 3. Our Data (Good!) ---
let products = [
  {
    name: "Wireless Headphones",
    price: 49.99,
    // Using placeholder images that will actually load
    imageUrl: "https://placehold.co/600x400/007bff/white?text=Headphones",
  },
  {
    name: "Smart Watch",
    price: 99.99,
    imageUrl: "https://placehold.co/600x400/28a745/white?text=Watch",
  },
  {
    name: "Bluetooth Speaker",
    price: 29.99,
    imageUrl: "https://placehold.co/600x400/dc3545/white?text=Speaker",
  },
];

// --- 4. The New, Faster Render Logic ---

// Use .map() to turn our 'products' array into an 'html' array.
// This is the standard "functional" way to do this.
let allProductsHtml = products
  .map((product) => {
    return productcard(product);
  })
  .join(""); // Join all the HTML strings into one giant string

// Now, set the innerHTML just ONCE. This is super fast.
productContainer.innerHTML = allProductsHtml;

// We don't need the other loops anymore!
// The component handled all its own styling.
