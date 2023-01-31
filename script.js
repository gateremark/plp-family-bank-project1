"use strict";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__link");

hamburger.addEventListener("click", function () {
	navLinks.classList.toggle("hidden");
});
