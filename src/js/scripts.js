import Headroom from "headroom.js";
import gsap from "gsap";

/*------------------------------------*\
  # AFFICHAGE DU MENU POUR LE MOBILE
\*------------------------------------*/

// On cible les éléments à modifier
const hamburger = document.querySelector(".menuBurger");
const menu = document.querySelector(".menu");
const page = document.documentElement;

// La fonction permettant de basculer l'affichage en ajoutant/supprimant des classes
function doToggle() {
  this.classList.toggle('menuBurger--open');
  menu.classList.toggle('menu--open');
  page.classList.toggle('noscroll');
}

// La fonction doToggle() est appelé lorsqu'on clique sur l'icone de menu
hamburger.addEventListener('click', doToggle);

/*------------------------------------*\
  # INIT HEADROOM
\*------------------------------------*/
const navBar = document.querySelector(".headroom");
const headroom = new Headroom(navBar, {
  offset: 205,
});
headroom.init();

/*------------------------------------*\
  # ANIMATIONS PATTERN
\*------------------------------------*/

const lines = document.querySelectorAll(".curveLines path");
const i = 0;
