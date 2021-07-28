AOS.init();

var toggle = document.querySelector(".theme-toggle");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dawn");
  toggle.classList.toggle("dusk");
});
