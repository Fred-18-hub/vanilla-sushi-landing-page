import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

const mobileHeaderMenu = document.querySelector(".header__menu-mobile ul");
const mobileHeaderMenuIcon = document.querySelector(".header__menu-mobile img");
let menuExpanded = false;

mobileHeaderMenuIcon.addEventListener("click", () => {
  console.log("first");
  menuExpanded = !menuExpanded;

  if (menuExpanded) {
    mobileHeaderMenu.style.display = "flex";
  } else {
    mobileHeaderMenu.style.display = "none";
  }
});
