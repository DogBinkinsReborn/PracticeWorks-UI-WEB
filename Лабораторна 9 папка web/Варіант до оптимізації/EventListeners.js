document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".hh");

  elements.forEach(el => {
    el.addEventListener("mouseover", () => {
      el.style.color = "rgb(50,250,50)";
    });

    el.addEventListener("mouseout", () => {
      el.style.color = ""; 
    });
  });
});