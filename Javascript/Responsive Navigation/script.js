const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("show");
});

