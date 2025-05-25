import "./style.css";
import { loadHomepage } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

window.onload = loadHomepage;

// Event listeners for tab buttons
document.getElementById("home-btn").addEventListener("click", () => {
  loadHomepage();
});

document.getElementById("menu-btn").addEventListener("click", () => {
  loadMenu();
});

document.getElementById("about-btn").addEventListener("click", () => {
  loadAbout();
});
