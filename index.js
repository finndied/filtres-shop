"use strict";

// NAV-SUBMENU -------------------------------------------------------

const submenu = document.querySelector(".header__nav-submenu");

const arr1 = document.getElementById("arr1");
const arr2 = document.getElementById("arr2");
const arr3 = document.getElementById("arr3");
const arr4 = document.getElementById("arr4");

const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const block4 = document.getElementById("block4");

const items = document.querySelectorAll(".header__nav-child");
for (let i = 0; i < items.length; i++) {
  console.log(items);
}

// Функции для раскрывания сабменю при наведении

items[0].onmouseover = function () {
  submenu.classList.add("open");
  arr1.classList.add("open");
  block1.classList.add("open");
};

items[0].onmouseout = function () {
  submenu.classList.remove("open");
  arr1.classList.remove("open");
  block1.classList.remove("open");
};

items[1].onmouseover = function () {
  submenu.classList.add("open");
  arr2.classList.add("open");
  block2.classList.add("open");
};

items[1].onmouseout = function () {
  submenu.classList.remove("open");
  arr2.classList.remove("open");
  block2.classList.remove("open");
};
items[2].onmouseover = function () {
  submenu.classList.add("open");
  arr3.classList.add("open");
  block3.classList.add("open");
};

items[2].onmouseout = function () {
  submenu.classList.remove("open");
  arr3.classList.remove("open");
  block3.classList.remove("open");
};
items[3].onmouseover = function () {
  submenu.classList.add("open");
  arr4.classList.add("open");
  block4.classList.add("open");
};

items[3].onmouseout = function () {
  submenu.classList.remove("open");
  arr4.classList.remove("open");
  block4.classList.remove("open");
};

// items[2].onclick = function menu1() {
//   submenu.classList.toggle("open");
//   subArrow.classList.toggle("open");
//   submenuBlock.classList.toggle("open");
// }

// items[3].onclick = function menu1() {
//   submenu.classList.toggle("open");
//   subArrow.classList.toggle("open");
//   submenuBlock.classList.toggle("open");
// }

// SLIDER ------------------------------------------------------------

const slider2 = setInterval(function (slider2) {
  document.getElementById("slider-4").style.display = "none";
  document.getElementById("slider-3").style.display = "none";
  document.getElementById("slider-2").style.display = "flex";
  document.getElementById("slider-1").style.display = "none";
}, 15200);

const slider3 = setInterval(function (slider3) {
  document.getElementById("slider-4").style.display = "none";
  document.getElementById("slider-3").style.display = "flex";
  document.getElementById("slider-2").style.display = "none";
  document.getElementById("slider-1").style.display = "none";
  if (slider2 !== slider3) {
    clearInterval(slider3);
  }
}, 32200);
const slider4 = setInterval(function (slider4) {
  document.getElementById("slider-4").style.display = "flex";
  document.getElementById("slider-3").style.display = "none";
  document.getElementById("slider-2").style.display = "none";
  document.getElementById("slider-1").style.display = "none";
}, 43200);

const slider = setInterval(function (slider) {
  document.getElementById("slider-4").style.display = "none";
  document.getElementById("slider-3").style.display = "none";
  document.getElementById("slider-2").style.display = "none";
  document.getElementById("slider-1").style.display = "flex";
}, 54200);

// ---------------------------------------------------------------
