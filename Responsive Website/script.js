const nav = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const content = document.querySelector(".content");
const divider = document.querySelector(".content .divider");

hamburger.addEventListener("click", () => {
  
  nav.classList.toggle("show");
  content.classList.toggle("width-dec");
});

