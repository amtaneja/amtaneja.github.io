

/*----------------------Scrolling function using icon*/

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
        $(".fa").css({
          opacity: "1",
          "pointer-events": "auto",
        });
      } else {
        $(".fa").css({
          opacity: "0",
          "pointer-events": "none",
        });
      }
    });
    $(".fa").click(function () {
      $("html").animate({ scrollTop: 0 }, 500);
    });
  });




  