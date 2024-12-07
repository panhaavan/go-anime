//search
let search = document.querySelector('.search');
let search_icon = document.querySelector('.search-icon');

search_icon.onclick = ()=>{
  search.classList.toggle('search_input');
}

//menu
let menu = document.querySelector('.menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = ()=>{
  // menu.classList.toggle("");
  navlist.classList.toggle('open');
}

//swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// form login
function loginWithFacebook() {
    alert("Facebook login functionality goes here!");
}

function loginWithGoogle() {
    alert("Google login functionality goes here!");
}
function signupWithFacebook() {
  alert("Facebook signup functionality goes here!");
}

function signupWithGoogle() {
  alert("Google signup functionality goes here!");
}

