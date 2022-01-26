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

let popupBg = document.querySelector('.modal__overlay'); // Фон попап окна
let popup = document.querySelector('.modal__dialog'); // Само окно
let openPopupButtons = document.querySelectorAll('.mod'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.modal__close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('modal__overlay--visible'); // Добавляем класс 'active' для фона
        popup.classList.add('modal__dialog--visible'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('modal__overlay--visible'); // Убираем активный класс с фона
    popup.classList.remove('modal__dialog--visible'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('modal__overlay--visible'); // Убираем активный класс с фона
        popup.classList.remove('modal__dialog--visible'); // И с окна
    }
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
      popupBg.classList.remove('modal__overlay--visible'); // Убираем активный класс с фона
        popup.classList.remove('modal__dialog--visible'); // И с окна
    }
  });

var menuButton = $(".menu-button");
menuButton.on("click", function () {
$(".navbar-right").toggleClass("navbar-right--visible");
$(".unpub-slider").css("display", "none");
}); 


var Butt = $(".form-button");
Butt.on("click", function () {
  
$(".form-button").css("margin-top", "0px");



});




/* var modalButton = $("[data-toggle=modal]");
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
 */
/* document.addEventListener("click" , function() {
  if(addEventListener === closeModalButton) {
    modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  }
}) */

/* function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
} */



// Обработка форм


$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Пожалуйста, укажите ваше имя",
      minlength: "Имя должно быть не менее 2 букв"
    },
    email: {
      required: "Нам нужен ваш адрес электронной почты, чтобы связаться с вами",
      email: "Ваш адрес электронной почты должен быть в формате имя@домен.com"
    },
    phone: {
       required: "Пожалуйста, укажите ваш номер телефона",
       minlength: "Пожалуйста, введите корректный телефонный номер"
    }
  },
});
})

$(".form-form").validate({
    errorClass: "inval",
    messages: {
    email: {
      required: "Заполните поле",
      email: "Введите действительный адрес"
    },
  },
});

/* $('.form-form').on('afterValidate', function (e) {
    $(".form-form").css("border", "10px");
    
}); */

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
  slidesToScroll: 1,
  infinite: false,
  variableWidth: true,

  responsive: [

        {
      breakpoint: 1441,
      settings:{
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,   
          variableWidth: true,
          
      },
    },
    
    {
      breakpoint: 1201,
      settings:{
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,   
          variableWidth: false,
          
      },
    },
        {
      breakpoint: 993,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          variableWidth: false,
          
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
          variableWidth: true,
          centerMode: true
      },
    },
  ]
});


$('.cont-slaid').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: false,
  centerMode: false,
  variableWidth: true,
  rows: 2,

    responsive: [
        {
      breakpoint: 401,
      settings:{
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false,   
          variableWidth: false,
          rows: 2,
          
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

/* var player;
$('.video-button').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '100%',
          videoId: 'eRHbk8bV7C0',
          events: {
            'onReady': playVideo,
            
          }
        });
        function videoPlay(event) {
          event.target.playVideo();
        }
      });  */

    