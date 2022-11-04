let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navigation .navbar");
let layer = document.querySelector(".layer");
let cart = document.querySelector(".cart");

function showNavbar() {
    navbar.classList.toggle("active");
    layer.classList.toggle("active");
    if (navbar.classList.contains("active")){
        document.querySelector(".menu-icon img").src = "images/icon-close.svg";
    }else{
        document.querySelector(".menu-icon img").src = "images/icon-menu.svg";
    }
}
function addContent(){
    let a = document.querySelector(".cart .content");

    let info = document.createElement("div");
    info.classList.add("info");
    
    let img = document.createElement("img");
    img.src = "images/image-product-1-thumbnail.jpg";
    
    let txt = document.createElement("div");
    txt.classList.add("txt");
    
    let par = document.createElement("p");
    par.innerHTML = `Fall Limited Edition Sneakers<br>$125.00 x 3 <span>$375.00</span>`;

    let dlt = document.createElement("div");
    dlt.classList.add("delete");
    dlt.innerHTML = `<img src="images/icon-delete.svg" alt="">`;

    let checkBtn = document.createElement("div");
    checkBtn.classList.add("checkBtn");
    checkBtn.innerHTML = `<a href="">Check out</a>`;

    let cartContent = document.createElement("div");
    cartContent.classList.add("content");

    txt.appendChild(par);
    info.appendChild(img);
    info.appendChild(txt);
    info.appendChild(dlt);
    cartContent.appendChild(info);
    cartContent.appendChild(checkBtn);

    cart.appendChild(cartContent);

    dlt.onclick = () => {
        cart.removeChild(cartContent);
    }
}