document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  const searchForm = document.querySelector(".search-form");

  function toggleMenu() {
    navLinks.classList.toggle("active");
    searchForm.classList.toggle("active");
  }

  burger.addEventListener("click", toggleMenu);
  burger.addEventListener("keypress", (e) => {
    if (e.key === "Enter") toggleMenu();
  });
});