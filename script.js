// script.js

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");

    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    };
});
