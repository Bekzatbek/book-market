$(document).ready(function () {
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  }

 
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  }

 
});

var menuButton = $(".menu-button");
menuButton.on("click", function () {
$(".navbar-right").toggleClass("navbar-right--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on('click', openModal);
closeModalButton.on("click", closeModal);



function openModal() {

  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  $("modal__overlay--visible").css("overflow", "auto");
  $("modal__dialog--visible").css("overflow", "auto");
 
  
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}
// Обработка форм

$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please specify your name",
      minlength: "Name must be at least 2 letters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone: {
       required: "Please specify your phone number",
       minlength: "please enter a valid phone number"
    }
  },
});
})

$(".subscribe").validate({
    errorClass: "inval",
    messages: {
    email: {
      required: "This field is required",
      email: "Please enter a valid email address"
    },
  },
});

$(document).ready(function () {
$("#phone").mask("+7(999) 999-99-99");
});

$(document).ready(function () {
$("#phone-1").mask("+7(999) 999-99-99");
});

var allStates = $("svg.us > *");

allStates.on("click", function() {
  
  allStates.removeClass("on");
  $(this).addClass("on");
  
});

   $("#koob").click(function () {
     $("span.book-like").toggleClass("kob");
   });
  $("#koobi").click(function () {
     $("span.one").toggleClass("kob");
   });
  $("#koobi-two").click(function () {
     $("span.two").toggleClass("kob");
   });
     $("#koobi-three").click(function () {
     $("span.three").toggleClass("kob");
   });
     $("#koobi-four").click(function () {
     $("span.four").toggleClass("kob");
   });
     $("#koobi-five").click(function () {
     $("span.five").toggleClass("kob");
   });


$('.cont-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  infinite: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1201,
      settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,   
          variableWidth: false
      },
    },
        {
      breakpoint: 993,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false
      },
    },
            {
      breakpoint: 769,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false
      },
    },
    {
      breakpoint: 576,
      settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: true
      },
    },
        {
      breakpoint: 401,
      settings:{
          slidesToShow: 1,
          slidesToScroll: 7,
          centerMode: false,
          infinite: false,
          variableWidth: false,
         
        
      },
    },
  ]
});


$('.unpub-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1201,
      settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,   
          variableWidth: true
      },
    },
        {
      breakpoint: 993,
      settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false
      },
    },
            {
      breakpoint: 768,
      settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false
      },
    },
    {
      breakpoint: 576,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false
      },
    },
        {
      breakpoint: 401,
      settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: false,
          variableWidth: true,
         
        
      },
    },
  ]
});


});