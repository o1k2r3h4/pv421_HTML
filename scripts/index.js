function burgerControllers() {
  const BURGER_BTN = document.querySelector("#burger");
  const MOBILE_MENU = document.querySelector("#burger-menu");
  const HEADER = document.querySelector("#header");

  BURGER_BTN.classList.toggle("active");
  MOBILE_MENU.classList.toggle("active");
  HEADER.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  //! init
  const BURGER_BTN = document.querySelector("#burger");
  const MENU_LIST_ITEMS = document.querySelectorAll("#burger-menu a");

  //! on press burger btn
  BURGER_BTN.addEventListener("click", () => {
    burgerControllers();
  });
  //! on press burger-menu items
  MENU_LIST_ITEMS.forEach((el) => {
    el.addEventListener("click", () => {
      burgerControllers();
    });
  });
});
