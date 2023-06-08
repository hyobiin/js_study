var f_site=document.querySelector(".familtsite button")
var site_list=document.querySelector(".site-list")
var arrow1_f=document.querySelector(".arrow1-f")
var arrow2_f=document.querySelector(".arrow2-f")

var m_menu_btn=document.querySelector(".m-menu-btn")
var m_menu_close_btn=document.querySelector(".close-btn")
var nav=document.querySelector(".nav")
var depth1=document.querySelectorAll(".depth1")
var gnb_bg=document.querySelectorAll(".gnb_bg")

var arrow1_h=document.querySelectorAll(".arrow1")
var arrow2_h=document.querySelectorAll(".arrow2")

m_menu_btn.addEventListener("click", function(){
  nav.style.right="0"
})

m_menu_close_btn.addEventListener("click", function(){
  nav.style.right="-100%"
})


f_site.addEventListener("click",function(){
  if(site_list.classList.contains("on")){
    site_list.classList.remove("on");
    arrow1_f.classList.remove("trans1")
    arrow2_f.classList.remove("trans2")
}else{
  site_list.classList.add("on")
  arrow1_f.classList.add("trans1")
  arrow2_f.classList.add("trans2")
}
})


for(let i=0; i<depth1.length; i++){
  
  depth1[i].addEventListener("click",function(){
    if(gnb_bg[i].classList.contains("open")){
      gnb_bg[i].classList.remove("open")
    }else{
      gnb_bg.forEach(function(el){
        el.classList.remove("open")
        gnb_bg[i].classList.add("open")
      })
      gnb_bg.classList.add("open")
      gnb_bg[i].classList.add("open")
    }

  })
}


const progressCircle = document.querySelector(".visual .autoplay-progress svg");
const progressContent = document.querySelector(".visual .autoplay-progress span");
var swiper1 = new Swiper(".visual .mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});


var swiper2 = new Swiper(".contents4 .mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  observer: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600:{
      slidesPerView: 2
    },
    1000:{
      slidesPerView: 3
    }
  }
});


$(window).scroll(function(){
  let sct=$(this).scrollTop()

  if(sct>$(".contents1").offset().top-500){
    $(".contents1").addClass("ani_fadeIn");
  }

  if(sct>$(".contents2").offset().top-700){
      $(".contents2").addClass("ani_fadeIn-l");
  }

  if(sct>$(".contents3").offset().top-650){
      $(".contents3").addClass("ani_fadeIn-r");
  }

  if(sct>$(".contents4").offset().top-500){
    $(".contents4").addClass("ani_fadeIn");
  }

})


var ww = $(window).width();
var mySwiper = undefined;

function initSwiper() {

  if (ww >= 800 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  } else if (ww < 800 && mySwiper == undefined) {
    var swiper3 = new Swiper(".menu", {
      rewind: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

}

initSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});