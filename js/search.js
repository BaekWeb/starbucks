 // 검색 - header = pc
function search1() {
  var header = $(".header");
  var search = header.find(".content .nav .top .search");
  var sear = search.find("form input[name=sear]");
  
  if (search.is(".on") == true) {
    if (sear.val() == "") {
      alert("검색어를 입력해 주세요");
      return false;
    } else {
      alert(sear.val() + "검색");
      return false;
      // true submit 작동
      // return true;
    }
  } else {
    search.addClass("on");
    return false;
  }
}

// 검색 - sidemenu = tablet, mobile
function search2() {
  var sideMenu = $(".sideMenu");
  var search = sideMenu.find(".content .search");
  var sear = search.find("form input[name=sear]");
  
  if (sear.val() == "") {
    alert("검색어를 입력해 주세요");
    return false;
  } else {
    alert(sear.val() + "검색");
    return false;
    // true submit 작동
    // return true;
  }
}