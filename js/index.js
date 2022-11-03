let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navigation .navbar");
let layer = document.querySelector(".layer");

function showNavbar() {
    navbar.classList.toggle("active");
    layer.classList.toggle("active");
    if (navbar.classList.contains("active")){
        document.querySelector(".menu-icon img").src = "images/icon-close.svg";
    }else{
        document.querySelector(".menu-icon img").src = "images/icon-menu.svg";
    }
}