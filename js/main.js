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
  // Language Drop Down
  $(".lang__link").click(function () {
    $(".lang-list").slideToggle("fast");
  });

  // Mobile Menu Drop Down (dept-1)
  $(".dept1__item-link").click(function (e) {
    let dataValue = $(this).data("order");
    let selector = `.dept2-wrap[data-order=${dataValue}]`;

    $(".dept2-wrap").not(selector).slideUp("fast");

    $(selector).slideToggle("fast");
    e.preventDefault();
  });
  // Mobile Menu Drop Down (dept-2)
  $(".dept2__item-link").click(function (e) {
    let dataValue = $(this).data("order");
    let selector = `.dept3-wrap[data-order=${dataValue}]`;

    $(".dept3-wrap").not(selector).slideUp("fast");

    $(selector).slideToggle("fast");
    e.preventDefault();
  });
});
