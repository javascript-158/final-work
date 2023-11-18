let burger = document.querySelector(".burger_menu");
let xMark = document.querySelector(".mark");
let mobileMenu = document.querySelector(".header_nav");
let currencyLanguage = document.querySelector(".header_li")

burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
    currencyLanguage.classList.add("show_option2")
    burger.style.display = "none";
    xMark.style.display = "block";
} )

xMark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    currencyLanguage.classList.remove("show_option2")
    burger.style.display = "block";
    xMark.style.display = "none";
  }

);