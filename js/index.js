let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navigation .navbar");
let layer = document.querySelector(".layer");
let cart = document.querySelector(".cart");
let sliderImages = Array.from(document.querySelectorAll('.img-section .main-img img'));
let imgBullets = Array.from(document.querySelectorAll(".img-section .img-bullets li"));
let sliderImages2 = Array.from(document.querySelectorAll('#img-section2 .main-img img'));
let imgBullets2 = Array.from(document.querySelectorAll("#img-section2 .img-bullets li"));
let currentSlide = 1;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let close = document.getElementById("close");

prev.onclick = () => {
    if (currentSlide == 1) {
        return false;
    } else{
        currentSlide--;
        theChecker();
    }
}
next.onclick = () => {
    if (currentSlide == 4) {
        return false;
    } else{
        currentSlide++;
        theChecker();
    }
}

for(let i=0; i < imgBullets.length; i++){
    imgBullets[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
for(let i=0; i < imgBullets2.length; i++){
    imgBullets2[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    }
}
theChecker();

function theChecker(){
    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');
    imgBullets[currentSlide - 1].classList.add('active');
    sliderImages2[currentSlide - 1].classList.add('active');
    imgBullets2[currentSlide - 1].classList.add('active');
}

function removeAllActive() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });
    sliderImages2.forEach(function (img) {
        img.classList.remove('active');
    });

    imgBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
    imgBullets2.forEach(function (bullet) {
        bullet.classList.remove('active');
    });
}

function showNavbar() {
    navbar.classList.toggle("active");
    layer.classList.toggle("active");
    if (navbar.classList.contains("active")){
        document.querySelector(".menu-icon img").src = "images/icon-close.svg";
    }else{
        document.querySelector(".menu-icon img").src = "images/icon-menu.svg";
    }
}
function showSlider2(){
    document.getElementById("img-section2").classList.toggle("active");
}
function showCart(){
    cart.classList.toggle("active");
}
function addContent(){
    let a = document.querySelector(".cart .content:has(.emptyCart)");

    try {
        a.remove();
    } catch (error) {
        
    }

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

    let b = document.querySelector(".cart .content:has(.info)");

    dlt.onclick = () => {
        if(cart.children.length > 2){
            cart.removeChild(cartContent);
        }else{
            cart.removeChild(cartContent);
            cart.innerHTML += `<div class="content">
              <div class="emptyCart">
                Your cart is empty
              </div>
            </div>`;
        }
    }
}