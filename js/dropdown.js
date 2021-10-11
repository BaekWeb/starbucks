$(function() {
  // header gnb dropdown
  var header = $(".header");
  var nav = header.find(".content .nav");
  var gnb = nav.children(".gnb");

  // sideMenu
  var wrap = $(".wrap")
  var sideMenu = $(".sideMenu");
  var main = sideMenu.find(".content .main");
  var dropBox = main.find(".dropBox")

  // open & close
  var sideOpen = header.find(".content .btn");
  var sideClose = sideMenu.find(".content .close");

  // dropdown - header pc
  gnb.children("li").each(function() {
    $(this).hover(
      function() {
        $(this).addClass("on").children(".dropMenu").stop().slideDown(500);
      },
      function() {
        $(this).removeClass("on").children(".dropMenu").stop().slideUp(0);
      },
    )
  })
  // dropdown end

  // open & close
  sideOpen.on("click", function () {
    sideMenu.addClass("open");
    wrap.animate({left: -70 + '%'}, 400);
  })
  sideClose.on("click", function () {
    sideMenu.removeClass("open");
    wrap.animate({left: 0}, 0);
  })
  // open & close end

  // dropdown - sideMenu mo
  main.children("li").each(function () {
    // first drop
    $(this).children("h3").on("click", function () {
      var target = $(this);
      
      drop(target)
    })
    // first drop end

    // sc drop
    $(this).find("h4").on("click", function () {
      var target = $(this);

      drop(target)
    })
    // sc drop end
  })
  // dropdown - sideMenu mo

  // sideMenu drop 함수
  function drop(target) {
    if (target.parent().is(".on") == true) {
      target.parent().removeClass("on");
    } else {
      target.parent().addClass("on");
    }

    target.next().slideToggle(500);
  }
  // sideMenu drop 함수 end

  // 드롭메뉴가 있을 경우에만 icon 추가
  dropBox.children("li").each(function () {
    if ($(this).children("h4").next().is(".item") == true) {
        $(this).children("h4").addClass("icon");
    }
  })
})