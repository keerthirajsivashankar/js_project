// This object describes a single user.
let user = {
  // "key": value,
  name: "Alice",
  age: 30,
  isLoggedIn: true,
  favoriteFoods: ["Pizza", "Tacos"], // Yes, an object can contain an array!
};

// Access the value associated with the 'name' key.
console.log(user.name); // Output: Alice

// Access the value for the 'age' key.
console.log(user.age); // Output: 30

// You can even access items in the array inside the object.
console.log(user.favoriteFoods[0]); // Output: Pizza

// My Take //

let product = {
  name: "Headphones",
  price: 99.99,
  inStock: true,
};

console.log("Product name is :", product.name, ", price is :", product.price);
console.table(product);
