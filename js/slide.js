$(function () {
  var swiper = new Swiper(".promSlide", {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".promSlide-pagenation",
      clickable: true
    },
    navigation: {
      prevEl: ".promSlide-prev",
      nextEl: ".promSlide-next",
    },
    // swiper display: none 오류
    observer: true,
    observeParents: true,
    breakpoints: {
      660: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });

  var promotion_info = $(".promotion_info");
  var stop = promotion_info.find(".button2 .stop");
  var start = promotion_info.find(".button2 .start");

  stop.on("click", function() {
    swiper.autoplay.stop();
    $(this).removeClass("on").next(".start").addClass("on");
  })

  start.on("click", function() {
    swiper.autoplay.start();
    $(this).removeClass("on").prev(".stop").addClass("on");
  })
})