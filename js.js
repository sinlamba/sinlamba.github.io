var gambar = document.querySelector(".madd");
window.addEventListener("load", function () {
  gambar.style.display = "none";
});
var dep = document.querySelector(".madd-dua");
window.addEventListener("load", function () {
  dep.style.display = "none";
});
var ter = document.querySelector(".bg");
window.addEventListener("load", function () {
  ter.style.display = "none";
});
const menu = document.querySelector(".menu-toggle input");
const ul = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("slide");
});

var il = document.querySelector("nav ul");
var oo = document.querySelector("menu-toggle-input");

il.addEventListener("click", function (e) {
  if (!il.contains(e.target) && !oo.target.contains(e.target)) {
    ul.classList.remove("slide");
  }
});
