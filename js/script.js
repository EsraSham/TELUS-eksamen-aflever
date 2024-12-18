"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    // event listener på burgermenuen
    hamburger.addEventListener("click", function () {
        // skifter menuens synlighed
        menu.classList.toggle("active");
        // skifter burgerens tilstand til et kryds
        hamburger.classList.toggle("active");
    });
});

