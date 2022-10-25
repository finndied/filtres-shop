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
for (let i = 0; i < items.length; i++) {}

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

// Создание корзины

function createCart() {
  const cart = document.createElement("div");
  const field = document.createElement("div");
  const heading = document.createElement("div");
  const closeBtn = document.createElement("button");
  const menuBuy = document.createElement("div");
  const totalPrice = document.createElement("div");
  const buyBtn = document.createElement("button");
  const hitsBtnDelete = document.createElement("button");
  cart.classList.add("header__basket-menu");
  field.classList.add("basket-menu__items");
  closeBtn.classList.add("basket-menu__close");
  menuBuy.classList.add("basket-menu__buy");
  totalPrice.classList.add("basket-menu__total");
  buyBtn.classList.add("basket-menu__button");
  heading.classList.add("basket-menu__title");
  hitsBtnDelete.classList.add("basket-menu__delete");
  heading.textContent = "Корзина";
  closeBtn.textContent = "X";
  hitsBtnDelete.textContent = "Очистить корзину";
  totalPrice.textContent = "Общая стоимость: ";
  buyBtn.textContent = "оформить заказ";

  document.body.appendChild(cart);
  cart.appendChild(heading);
  cart.appendChild(closeBtn);
  cart.appendChild(field);
  cart.appendChild(menuBuy);
  cart.appendChild(totalPrice);
  cart.appendChild(buyBtn);
  cart.appendChild(hitsBtnDelete);

  // Открытие корзины

  const cartBtn = document.querySelector(".header__cart");
  cartBtn.onclick = function () {
    cart.classList.toggle("open");
    event.preventDefault();
  };

  // Закрытие корзины

  closeBtn.onclick = function () {
    cart.classList.toggle("open");
    event.preventDefault();
  };
}

createCart();

// Добавление товаров в корзину

const hits = document.querySelectorAll(".hits__container");
const hitsBtn = document.querySelectorAll(".hits__button-btn");

hitsBtn.forEach(function (item, i) {
  item.addEventListener("click", function () {
    const item = hits[i].cloneNode(true);
    const field = document.querySelector(".basket-menu__items");
    const hitsBtn = item.querySelector(".hits__button-btn");
    const hitsArticle = item.querySelector(".hits__article");
    const hitsRating = item.querySelector(".hits__rating");
    const hitsPrice = item.querySelector(".hits__price");
    const hitsDescription = item.querySelector(".hits__description");
    const hitsImage = item.querySelector(".hits__image");
    const hitsBlock = item.querySelector(".hits__block");
    hitsImage.classList.toggle("open");
    hitsBlock.classList.toggle("open");
    hitsDescription.classList.toggle("open");
    hitsPrice.classList.toggle("open");
    hitsBtn.style.display = "none";
    hitsArticle.style.display = "none";
    hitsRating.style.display = "none";
    field.appendChild(item);
  });
});

// Очистка корзины

const hitsBtnDelete = document.querySelectorAll("button.basket-menu__delete");
hitsBtnDelete.forEach(function (item, i) {
  item.addEventListener("click", function () {
    const itemChild = document.querySelector(".hits__block.open");
    itemChild.remove(itemChild);
  });
});
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
