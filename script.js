/*-----------animation on scroll-----------*/
window.sr = ScrollReveal({ reset: true });
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1200,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-right", {
  origin: "right",
  duration: 1200,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

/*-----------menu closed on back-----------*/
$(document).ready(function () {
  $(".menu a").click(function () {
    $(".toggler").prop("checked", false);
    $(".toggler").prop("overflow-y", hidden);
  });
});

/*-----------arrow up icon-----------*/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#up").css({ opacity: "1", "pointer-events": "auto" });
    } else {
      $("#up").css({ opacity: "0", "pointer-events": "none" });
    }
  });
  $("#up").click(function () {
    $("html").animate({ scrollTop: 0 }, 500);
  });
});


/*---------loading animation-----------*/

setTimeout(function () {
  $(".loading").fadeToggle();
}, 1800);

/*---------fixed menu-----------*/
function lockScroll() {
  $("body").toggleClass("fixedPosition");
}
