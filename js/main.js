//상단 팝업창
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
  });

  // PC 메뉴 HOVER
  $(".dept-1__item-link").hover(
    function (e) {
      if ($(window).width() >= 1024) {
        $(".dept-1-wrap").removeClass("m-menu-active");

        let dataValue = $(this).data("order");
        let selector = ".dept-2-wrap[data-order=" + dataValue + "]";

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
        let selector = ".dept-2-wrap[data-order=" + dataValue + "]";

        $(selector).css("display", "none");
        $(this).removeClass("dept-1__item-link--active");
      }
    }
  );

  // 모바일 햄버거 아이콘 토글
  $(".m-hamberger").click(function () {
    $(".dept-2-wrap").css("display", "none");

    $(".dept-1-wrap").toggleClass("m-menu-active");
    $(".m-shade").toggleClass("m-shade-active");
    $(".down-arrow").toggleClass("none");
    $(".dept-1__item-link").parent().removeClass("active");
  });
  // 모바일 메뉴 그림자
  $(".m-shade").click(function () {
    $(".dept-2-wrap").css("display", "none");

    $(".m-shade").removeClass("m-shade-active");
    $(".dept-1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  });
  //모바일 메뉴 x버튼 클릭
  $(".m-menu-close").click(function () {
    $(".dept-2-wrap").css("display", "none");

    $(".m-shade").removeClass("m-shade-active");
    $(".dept-1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  });

  // 모바일메뉴 드롭다운 (dept-1)
  $(".dept-1__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = ".dept-2-wrap[data-order=" + dataValue + "]";

      if ($(this).parent().hasClass("active")) {
        $(this).parent().removeClass("active");
      } else {
        $(".dept-1__item-link").parent().removeClass("active");
        $(this).parent().toggleClass("active");
      }

      $(".dept-2-wrap").not(selector).slideUp("fast");
      $(".dept-3-wrap").not(selector).slideUp("fast");

      $(selector).slideToggle("fast");
    }
  });
  // 모바일메뉴 드롭다운 (dept-2)
  $(".dept-2__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = ".dept-3-wrap[data-order=" + dataValue + "]";

      $(".dept-3-wrap").not(selector).slideUp("fast");

      $(selector).slideToggle("fast");
    }
  });
});

$(window).on("resize", function () {
  var win = $(this);
  if (win.width() >= 1024) {
    $(".dept-2-wrap").css("display", "none");
    $(".dept-2-wrap").removeClass("dept-1__item-link--active");
  }
});

// 메인화면 상단 섹션 이미지 슬라이더 (슬릭 X)
mainSlider();
function mainSlider() {
  var slideIndex = 1;

  function plusSlides(n) {
    $(".slider-sec .slider").removeClass("active");
    showSlides(slideIndex + n);
    slideIndex += n;
  }

  function showSlides(n) {
    var i;
    var output = n;
    var slides = document.getElementsByClassName("slider-sec__slide");
    if (n > slides.length) {
      output = 1;
      slideIndex = output - 1;
    }
    if (n < 1) {
      output = slides.length;
      slideIndex = output + 1;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[output - 1].style.display = "block";
  }

  showSlidesAuto(slideIndex);

  function showSlidesAuto(order) {
    if ($(" .slider-sec .slider").hasClass("active")) {
      var i;
      var slides = document.getElementsByClassName("slider-sec__slide");
      if (order > slides.length) {
        slideIndex = 1;
      }
      if (order < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
      function increaseIndex() {
        if ($(" .slider-sec .slider").hasClass("active")) {
          slideIndex += 1;
        }
      }
      setTimeout(function () {
        increaseIndex();
        showSlidesAuto(slideIndex);
      }, 5000);
    }
  }
  mainSlider.plusSlides = plusSlides;
}
//
$(document).ready(function () {
  // 자주찾는 메뉴 섹션 -  슬라이더 (Slick)
  $(".quick-menu-sec .slick-slider").slick({
    infinite: true,
    rows: 1,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
    ],
  });

  // 소식 섹션 - 팝업 슬라이더 (Slick)
  $(".news-sec .popup-slider").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 640,
        settings: {},
      },
    ],
  });

  //민원 및 소통 섹션 - 아이콘 슬라이더
  $complaintIconPrev = document.querySelector(
    ".complaint-sec .row .slick-prev"
  );
  $complaintIconNext = document.querySelector(
    ".complaint-sec .row .slick-next"
  );

  $(".complaint-sec .icon-grid").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 6,
    prevArrow: $complaintIconPrev,
    nextArrow: $complaintIconNext,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          rows: 1,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
  //민원 및 소통 섹션 - 미니 배너 슬라이더
  $(".banner-group").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // 문화섹션 슬라이더
  $(".culture-slider-wrap").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 200,
  });
  $(".slider-nav").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: ".culture-slider-wrap",
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          rows: 1,
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 4,
        },
      },
    ],
  });

  //문화 섹션 - 아이콘 슬라이더
  $(".culture-sec .icon-grid").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  });

  //문화 섹션 - 공연정보 슬라이더
  $(".culture-sec .col-1-2").slick({
    infinite: true,
    rows: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          rows: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          rows: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  // 고객 퀵메뉴 탭
  $(".customer-quick .title-box").click(function (e) {
    if ($(window).width() <= 730) {
      let dataValue = $(this).data("order");
      let selector = ".customer-quick .list[data-order=" + dataValue + "]";

      $(".customer-quick .list").not(selector).slideUp("fast");
      $(selector).slideToggle("fast");
      $(this).toggleClass("active");
    }
  });

  // 푸터 - 배너
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
  });
  // 푸터 - 배너 - 슬라이더 재생 중지
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

// 소식 섹션 - 탭 메뉴
function openTab(evt, contentName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".news-sec .tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".news-sec .tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}

// 민원 및 소통 섹션 - 탭 메뉴 + slick 슬라이더
$complaintSnsPrev = document.querySelector(".complaint-sec .row-2 .slick-prev");
$complaintSnsNext = document.querySelector(".complaint-sec .row-2 .slick-next");

var socialSlickOption = {
  infinite: true,
  rows: 1,
  slidesToScroll: 1,
  slidesToShow: 3,
  prevArrow: $complaintSnsPrev,
  nextArrow: $complaintSnsNext,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        rows: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        rows: 1,
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};
$(".complaint-sec .sns-wrap").slick(socialSlickOption);

function openTab2(evt, contentName) {
  var i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(".complaint-sec .tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".complaint-sec .tab-links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";

  //민원 및 소통 섹션 - SNS 슬라이더
  $("." + contentName).slick("unslick");
  $("." + contentName).slick(socialSlickOption);
}
// -- 탭메뉴 defaultOpen
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpen2").click();

// 푸터 - 관련기관 탭메뉴
$(".footer .dept-1").click(function (e) {
  e.preventDefault();
  var order = $(this).attr("data-order");
  $(".dept-2")
    .not(".dept-2[data-order=" + order + "]")
    .removeClass("active");
  $(".dept-2[data-order=" + order + "]").toggleClass("active");
});
