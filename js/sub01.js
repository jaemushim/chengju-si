"use strict";

// 본문바로가기
$(".skip a").on("focus", function () {
  $(this).css("top", "0");
  $(this).css("opacity", "1");
});
$(".skip a").on("click", function () {
  $(this).css("top", "-30");
  $(this).css("opacity", "0");
});
$(".skip a").on("focusout", function () {
  $(this).css("top", "-30");
  $(this).css("opacity", "0");
}); //상단 팝업창

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == " ") c = c.substring(1);

    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }

  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function couponClose() {
  if ($("input[name='chkbox']").is(":checked") == true) {
    setCookie("close", "Y", 1);
  }

  $("#top-pop").hide();
}

$(document).ready(function () {
  cookiedata = document.cookie;

  if (cookiedata.indexOf("close=Y") < 0) {
    $("#top-pop").show();
  } else {
    $("#top-pop").hide();
  }

  $("#top-pop__close").click(function () {
    couponClose();
  });
});
$(document).ready(function () {
  // 언어 드롭다운
  $(".lang__link").click(function () {
    $(".lang-list").slideToggle("fast");
  }); // PC 메뉴 HOVER

  $(".dept-1__item-link").hover(
    function (e) {
      if ($(window).width() >= 1024) {
        $(".dept-1-wrap").removeClass("m-menu-active");
        let dataValue = $(this).data("order");
        let selector = `.dept-2-wrap[data-order=${dataValue}]`;
        $(selector).css("display", "block");
        $(this).addClass("dept-1__item-link--active");
        $(selector).hover(
          function () {
            $(selector).css("display", "block");
          },
          function () {
            $(selector).css("display", "none");
          }
        );
      }
    },
    function (e) {
      if ($(window).width() >= 1024) {
        let dataValue = $(this).data("order");
        let selector = `.dept-2-wrap[data-order=${dataValue}]`;
        $(selector).css("display", "none");
        $(this).removeClass("dept-1__item-link--active");
      }
    }
  ); // 모바일 햄버거 아이콘 토글

  $(".m-hamberger").click(function () {
    $(".dept-2-wrap").css("display", "none");
    $(".dept-1-wrap").toggleClass("m-menu-active");
    $(".m-shade").toggleClass("m-shade-active");
    $(".down-arrow").toggleClass("none");
  }); // 모바일 메뉴 그림자

  $(".m-shade").click(function () {
    $(".dept-2-wrap").css("display", "none");
    $(".m-shade").removeClass("m-shade-active");
    $(".dept-1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  }); //모바일 메뉴 x버튼 클릭

  $(".m-menu-close").click(function () {
    $(".dept-2-wrap").css("display", "none");
    $(".m-shade").removeClass("m-shade-active");
    $(".dept-1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  }); // 모바일메뉴 드롭다운 (dept-1)

  $(".dept-1__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = `.dept-2-wrap[data-order=${dataValue}]`;
      $(".dept-1__item-link").parent().removeClass("active");
      $(this).parent().toggleClass("active");
      $(".dept-2-wrap").not(selector).slideUp("fast");
      $(".dept-3-wrap").not(selector).slideUp("fast");
      $(selector).slideToggle("fast");
    }
  }); // 모바일메뉴 드롭다운 (dept-2)

  $(".dept-2__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = `.dept-3-wrap[data-order=${dataValue}]`;
      $(".dept-3-wrap").not(selector).slideUp("fast");
      $(selector).slideToggle("fast");
    }
  }); // 푸터 - 배너

  $footerBannerPrev = document.querySelector(".footer .banner .prev");
  $footerBannerNext = document.querySelector(".footer .banner .next");
  $(".footer .banner-item-wrap").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $footerBannerPrev,
    nextArrow: $footerBannerNext,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }); // 푸터 - 배너 - 슬라이더 재생 중지

  $(".footer .banner .play").on("click", function () {
    if (!$(".footer .banner .play").hasClass("pause")) {
      $(".footer .banner-item-wrap").slick("slickPause");
      $(this).toggleClass("pause");
    } else {
      $(".footer .banner-item-wrap").slick("slickPlay");
      $(this).toggleClass("pause");
    }
  });
});
$(window).on("resize", function () {
  var win = $(this);

  if (win.width() >= 1024) {
    $(".dept-2-wrap").css("display", "none");
    $(".dept-2-wrap").removeClass("dept-1__item-link--active");
  }
}); // 사이드메뉴 탭

$(".menu-list__item > a").click(function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("active")) {
    $(".menu-list__item").removeClass("active");
  } else {
    $(".menu-list__item").removeClass("active");
    $(this).parent().toggleClass("active");
  }
});
