const burger = document.querySelector(".burger");
let xmark = document.querySelector(".mark")
let mobileMenu = document.querySelector(".mobile_nav");


burger.addEventListener("click", function () {
    mobileMenu.classList.add("show");
    mobileMenu.querySelector.add(".mobile_nav")
    burger.style.display = "none";
    xmark.style.display = "block";
    mobile_nav.classList.add("show_mobile_nav")
} )

xmark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    mobileMenu.querySelector.add(".mobile_nav")
    burger.style.display = "block";
    xmark.style.display = "none";
  }

);