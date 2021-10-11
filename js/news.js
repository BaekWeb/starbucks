$(function () {
  var news = $(".news");
  var notice = news.find(".content .notice");
  var scrolling = notice.children(".scrolling"); 
  var promotion = news.find(".content .promotion");
  
  var promotion_info = $(".promotion_info");

  promotion.on("click", function() {
    promotion_info.slideToggle(500);
  })

  // notice scrolling
  window.setInterval(function () {
    scrolling.children(".box").animate({
      marginTop: -24 + 'px',
    }, 200, function() {
      $(this).append($(this).children().first())
      .css("marginTop", 0);
    });
  }, 3000);
  // notice scrolling;
})