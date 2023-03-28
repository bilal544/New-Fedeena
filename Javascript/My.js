$(document).ready(function () {
  $(".owl-one").owlCarousel({
    items: 1,
    loop: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: true,
    mouseDrag: true,
    singleItem: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    nav: true,
  });
});
//counter===============================================
const counter = function() {
    const counters = document.querySelectorAll(".numbers");
    counters.forEach((counter) => {
      function updateCounter() {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 10;
  
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 20);
        } else {
          counter.innerText = target +" "+ "+";
        }
      }
      updateCounter();
    });
  }
  counter();
// carousel 2
$(document).ready(function () {
    $(".owl-2").owlCarousel({
      items: 1,
      loop: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      autoPlay: true,
      mouseDrag: true,
      singleItem: true,
      animateIn: "fadeIn",
      animateOut: "fadeOut",
    });
  });

  // animation initalization
  AOS.init();

  //Get the button
let mybutton = document.getElementById("btn-back-to-top");
let phoneBtn= document.getElementById("phone-icon");
let emailBtn= document.getElementById("email-icon");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
    phoneBtn.style.display= "block";
    emailBtn.style.display= "block";
  } else {
    mybutton.style.display = "none";
    phoneBtn.style.display = "none";
    emailBtn.style.display= "none";
  }
}
// preloader================================
var loader= document.getElementById("loading");
function myfunction(){
  loader.style.display="none";
}

