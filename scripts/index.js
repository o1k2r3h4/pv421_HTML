document.addEventListener("DOMContentLoaded", () => {
  BURGER_BTN = document.querySelector("#burger");
  BURGER_BTN.addEventListener("click", () => {
    BURGER_BTN.classList.toggle("active");
  });
});
