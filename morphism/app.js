const morphBtn = document.getElementById("morphBtn");
const polygon = document.getElementById("polygon");

// Define our two shapes using clip-path
// You can get these from a site like "cli-ppy"
const shapeTriangle = "polygon(50% 0%, 0% 100%, 100% 100%)";
const shapeStar =
  "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

let isMorphed = false;

morphBtn.addEventListener("click", () => {
  if (isMorphed) {
    // Change it back to a triangle
    polygon.style.clipPath = shapeTriangle;
    isMorphed = false;
  } else {
    // Change it to a star
    polygon.style.clipPath = shapeStar;
    isMorphed = true;
  }
});
