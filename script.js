let burger = document.querySelector(".burger");

let mobileMenu = document.querySelector(".header_nav");


burger.addEventListener("click", () => {
    mobileMenu.classList.add("show");
 
    burger.style.display = "none";
    xMark.style.display = "block";
} )

xMark.addEventListener("click", () => {
    mobileMenu.classList.remove("show");

    burger.style.display = "block";
    xMark.style.display = "none";
  }

);