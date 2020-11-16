//Top popup
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
  $("#pop").hide();
}
$(document).ready(function () {
  cookiedata = document.cookie;
  if (cookiedata.indexOf("close=Y") < 0) {
    $("#pop").show();
  } else {
    $("#pop").hide();
  }
  $("#pop__close").click(function () {
    couponClose();
  });
});

$(document).ready(function () {
  // PC Language Drop Down
  $(".lang__link").click(function () {
    $(".lang-list").slideToggle("fast");
  });

  // PC Menu Hover

  $(".dept1__item-link").hover(
    function (e) {
      if ($(window).width() >= 1024) {
        $(".dept1-wrap").removeClass("m-menu-active");

        let dataValue = $(this).data("order");
        let selector = `.dept2-wrap[data-order=${dataValue}]`;

        $(selector).css("display", "block");
        $(this).addClass("dept1__item-link--active");

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
        let selector = `.dept2-wrap[data-order=${dataValue}]`;

        $(selector).css("display", "none");
        $(this).removeClass("dept1__item-link--active");
      }
    }
  );

  // Mobile Hamberger toggle
  $(".m-hamberger").click(function () {
    $(".dept2-wrap").css("display", "none");

    $(".dept1-wrap").toggleClass("m-menu-active");
    $(".m-shade").toggleClass("m-shade-active");
    $(".down-arrow").toggleClass("none");
  });
  //shade
  $(".m-shade").click(function () {
    $(".dept2-wrap").css("display", "none");

    $(".m-shade").removeClass("m-shade-active");
    $(".dept1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  });
  //m-menu-close
  $(".m-menu-close").click(function () {
    $(".dept2-wrap").css("display", "none");

    $(".m-shade").removeClass("m-shade-active");
    $(".dept1-wrap").removeClass("m-menu-active");
    $(".down-arrow").removeClass("none");
  });

  // Mobile Menu Drop Down (dept-1)
  $(".dept1__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = `.dept2-wrap[data-order=${dataValue}]`;

      $(".dept2-wrap").not(selector).slideUp("fast");
      $(".dept3-wrap").not(selector).slideUp("fast");

      $(selector).slideToggle("fast");
    }
  });
  // Mobile Menu Drop Down (dept-2)
  $(".dept2__item-link").click(function (e) {
    if ($(window).width() < 1024) {
      let dataValue = $(this).data("order");
      let selector = `.dept3-wrap[data-order=${dataValue}]`;

      $(".dept3-wrap").not(selector).slideUp("fast");

      $(selector).slideToggle("fast");
    }
  });
});

$(window).on("resize", function () {
  var win = $(this); //this = window
  if (win.width() >= 1024) {
    $(".dept2-wrap").css("display", "none");
    $(".dept2-wrap").removeClass("dept1__item-link--active");
  }
});
