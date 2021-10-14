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

  // award 슬라이드
  var width = $(window).width();
  var award = $(".award");
  var play = award.find(".main .button");
  var swiper2 = undefined;

  // award 슬라이드 함수
  function awardSlide() {
    if (width < 1200 && swiper2 == undefined) {
      swiper2 = new Swiper(".awardSlide", {
        slidesPerView: 'auto',
        loop: false,
        loopFillGroupWithBlank : true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            slidesPerGroup : 3,
            loop: true,
          },
          640: {
            slidesPerView: 1,
            slidesPerGroup : 1,
            loop: true,
          }
        },
      });

      play.on("click", function () {
        if (play.is(".stop") == true) {
          swiper2.autoplay.start();
          $(this).removeClass("stop");
        } else {
          swiper2.autoplay.stop();
          $(this).addClass("stop");
        }
      })
    } else if(width > 1199 && swiper2 != undefined) {
      swiper.destroy();
      swiper2 = undefined;
    }
  }

  // 함수실행
  awardSlide();

  // resize
  $(window).on('resize', function () {
    awardSlide();
  });
})