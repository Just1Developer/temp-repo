
const hamburger = document.querySelector(".hamburger");
const nav_side = document.querySelector(".nav_side");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("show");
  nav_side.classList.toggle("show");
})