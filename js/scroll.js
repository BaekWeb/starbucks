$(function () {
  
  // 각 요소 찾기
  var bean = $(".bean");
  var beanImg = bean.find(".content .img");
  var beanText = bean.find(".content .text");

  var reserve = $(".reserve");
  var reserve_bg = reserve.children(".bg");
  
  var favorite = $(".favorite");
  var favorite_text = favorite.find(".content .text");
  var favorite_title = favorite_text.children("h3");
  var favorite_sub = favorite_text.children("strong");
  var favorite_main = favorite_text.children("p");
  var favorite_detail = favorite_text.children(".detail_btn");

  var magazine = $(".magazine");
  var magazine_img = magazine.find(".content .img");

  var store = $(".store");
  var store_img = store.find(".content .img");
  var store_text = store.find(".content .text");
  var store_title = store_text.children("h3");
  var store_sub = store_text.children("strong");
  var store_main = store_text.children("p");
  var store_detail = store_text.children(".detail_btn");

  // scoll 이벤트 적용할 모든요소
  var items = [
    beanImg,
    beanText,
    reserve_bg,
    favorite_title,
    favorite_sub,
    favorite_main,
    favorite_detail,
    magazine_img,
    store_img,
    store_title,
    store_sub,
    store_main,
    store_detail
  ];

  // 초기값에 대한 변수
  var left = -100 + '%';
  var right = -100 + '%';
  var top = -10 + '%';
  var opacity = 0;
  var transition = 1 + 's';
  var transitionTiming = 'cubic-bezier(0, 0, 0.03, 0.82)';
  var translate_left = 'translateX(' +  -700 + 'px)'
  var translate_right = 'translateX(' +  700 + 'px)'
  var translate_top = 'translateY(' +  -200 + 'px)'
  var translate_bottom = 'translateY(' +  200 + 'px)'

  // 브라우저화면 대한 너비
  var width = $(window).width();

 // animate 함수
  function animate(width, left, right, top, opacity, translate_left, translate_right, translate_top, translate_bottom) {
    width = width;
    left = left;
    right = right;
    top = top;
    translate_left = translate_left
    translate_right = translate_right
    translate_top = translate_top
    translate_bottom = translate_bottom
    opacity = opacity;
    transition = transition;
    transitionTiming = transitionTiming;

    // 너비가 961 이상의 화면
    if (width > 961) {
      beanImg.css({
        left: left,
        opacity: opacity,
        transition: transition,
      });
      beanText.css({
        right: right,
        opacity: opacity,
        transition: transition,
      });
      reserve_bg.css({
        opacity: opacity,
        transition: transition,
      })
      favorite_title.css({
        transform: translate_left,
        opacity: opacity,
        transition: 2 + 's',
      })
      favorite_sub.css({
        transform: translate_left,
        opacity: opacity,
        transition: 2 + 's',
      })
      favorite_main.css({
        transform: translate_left,
        opacity: opacity,
        transition: 2 + 's',
      })
      favorite_detail.css({
        opacity: opacity,
        transition: transition,
        transitionDelay: 1 + 's'
      })
      magazine_img.css({
        opacity: opacity,
        transition: transition,
      })
      store_img.css({
        opacity: opacity,
        transition: transition,
      })
      store_title.css({
        transform: translate_right,
        opacity: opacity,
        transition: 2 + 's',
      })
      store_sub.css({
        transform: translate_right,
        opacity: opacity,
        transition: 2 + 's',
      })
      store_main.css({
        transform: translate_right,
        opacity: opacity,
        transition: 2 + 's',
        transitionDelay: 0.5 + 's'
      })
      store_detail.css({
        transform: translate_right,
        opacity: opacity,
        transition: 2 + 's',
        transitionDelay: 1 + 's'
      })
    } else {
      beanImg.css({
        left: left,
        opacity: opacity,
        transition: transition,
      });
      beanText.css({
        right: right,
        opacity: opacity,
        transition: transition,
      });
      reserve_bg.css({
        opacity: opacity,
        transition: transition,
        transitionDelay: 0.5 + 's',
      })
      favorite_sub.css({
        transform: translate_top,
        opacity: opacity,
        transition: 2 + 's',
      })
      favorite_main.css({
        transform: translate_bottom,
        opacity: opacity,
        transition: 2 + 's',
      })
      favorite_detail.css({
        opacity: opacity,
        transition: 2 + 's',
        transitionDelay: 1 + 's'
      })
      magazine_img.css({
        opacity: opacity,
        transition: transition,
        transitionDelay: 0.5 + 's',
      })
      store_img.css({
        opacity: opacity,
        transition: transition,
        transitionDelay: 0.5 + 's',
      })
      store_title.css({
        transform: translate_top,
        opacity: opacity,
        transition: 2 + 's',
      })
      store_sub.css({
        transform: translate_top,
        opacity: opacity,
        transition: 2 + 's',
      })
      store_main.css({
        transform: translate_bottom,
        opacity: opacity,
        transition: 2 + 's',
        transitionDelay: 0.5 + 's'
      })
      store_detail.css({
        transform: '',
        opacity: opacity,
        transition: transition,
        transitionDelay: 2 + 's'
      })
    }
    // 너비가 640 이하의 화면
    if(width < 640) {
      beanImg.css({
        left: '',
        top: top,
        opacity: opacity,
        transition: transition,
      });
      beanText.css({
        right: right,
        opacity: opacity,
        transition: transition,
        transitionDelay: 1 + 's',
      });
    }
  }

  // 함수 실행
  animate(
    width,
    left,
    right,
    top,
    opacity,
    translate_left,
    translate_right,
    translate_top,
    translate_bottom,
  )

  $(window).resize(function () {
    width = $(window).width();

    animate(
      width,
      left,
      right,
      top,
      opacity,
      translate_left,
      translate_right,
      translate_top,
      translate_bottom,
    )
  })

  // 스크롤이벤트
  $(window).scroll(function () {
    // 스크롤된 높이
    var scrollTop = $(window).scrollTop();
    // 브라우저화면의 하단
    var bottoms = $(window).outerHeight();

    for (let i = 0; i < items.length; i++) {
      // 모든요소의 위치
      var offsetTop = items[i].offset().top;

      // scrollTop 100 이상일때 기존의 값을 animation 함수로 보내 초기값으로 복원
      if (scrollTop < 100) {
        width = $(window).width();
        left = -100 + '%';
        right = -100 + '%';
        top = -10 + '%';
        opacity = 0;
        translate_left = 'translateX(' +  -700 + 'px)'
        translate_right = 'translateX(' +  700 + 'px)'
        translate_top = 'translateY(' +  -200 + 'px)'
        translate_bottom = 'translateY(' +  200 + 'px)'

        animate(
          width,
          left,
          right,
          top,
          opacity,
          translate_left,
          translate_right,
          translate_top,
          translate_bottom,
        )
      } else {
        // 요소의 높이 < 스크롤높이 + 브라우저화면하단
        if (scrollTop + bottoms > offsetTop) {
          // 모든요소의 css 초기화
          items[i].css({
            left: '',
            right: '',
            top: '',
            transform: '',
            opacity: 1,
            transitionTimingFunction: transitionTiming,
          })
        }
      }
    }
  })
})