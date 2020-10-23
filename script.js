const cursor = document.querySelector("#cursor"),
  anchor = document.querySelectorAll("a");
window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;
  (cursor.style.left = `${x}px`), (cursor.style.top = `${y}px`);
});
anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    (cursor.style.transform = "scale(10)"),
      (cursor.style.animationName = "borderAnim");
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});

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
/*-----------logo reel-----------*/
$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
/*-------------------tagball--------------*/

(function ($) {
  $.fn.cloudTag = function (options) {
      var defualts = {
           tag:"tag"
          ,ballSize:200
      };
      var opts = $.extend({}, defualts, options);
      var tagEle = "querySelectorAll" in document ? document.querySelectorAll("."+opts.tag) : getClass(opts.tag),
          paper = $(this)[0];
          RADIUS =opts.ballSize,
          fallLength = 300,
          tags=[],
          angleX = Math.PI/fallLength,
          angleY = Math.PI/fallLength,
          CX = paper.offsetWidth/2,
          CY = paper.offsetHeight/2,
          EX = paper.offsetLeft + document.body.scrollLeft + document.documentElement.scrollLeft,
          EY = paper.offsetTop + document.body.scrollTop + document.documentElement.scrollTop;

      function getClass(className){
          var ele = document.getElementsByTagName("*");
          var classEle = [];
          for(var i=0;i<ele.length;i++){
              var cn = ele[i].className;
              if(cn === className){
                  classEle.push(ele[i]);
              }
          }
          return classEle;
      }

      function innit(){
          for(var i=0;i<tagEle.length;i++){
              var a , b;
              var k = (2*(i+1)-1)/tagEle.length - 1;
              var a = Math.acos(k);
              var b = a*Math.sqrt(tagEle.length*Math.PI);
              // var a = Math.random()*2*Math.PI;
              // var b = Math.random()*2*Math.PI;
              var x = RADIUS * Math.sin(a) * Math.cos(b);
              var y = RADIUS * Math.sin(a) * Math.sin(b);
              var z = RADIUS * Math.cos(a);
              var t = new tag(tagEle[i] , x , y , z);
              
              tags.push(t);
              t.move();
          }
      }

      Array.prototype.forEach = function(callback){
          for(var i=0;i<this.length;i++){
              callback.call(this[i]);
          }
      }

      function animate(){
          setInterval(function(){
              rotateX();
              rotateY();
              tags.forEach(function(){
                  this.move();
              })
          } , 17)
      }

      if("addEventListener" in window){
          paper.addEventListener("mousemove" , function(event){
              var x = event.clientX - EX - CX;
              var y = event.clientY - EY - CY;
              // angleY = -x* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
              // angleX = -y* (Math.sqrt(Math.pow(x , 2) + Math.pow(y , 2)) > RADIUS/4 ? 0.0002 : 0.0001);
              angleY = x*0.0001;
              angleX = y*0.0001;
          });
      }
      else {
          paper.attachEvent("onmousemove" , function(event){
              var x = event.clientX - EX - CX;
              var y = event.clientY - EY - CY;
              angleY = x*0.0001;
              angleX = y*0.0001;
          });
      }

      function rotateX(){
          var cos = Math.cos(angleX);
          var sin = Math.sin(angleX);
          tags.forEach(function(){
              var y1 = this.y * cos - this.z * sin;
              var z1 = this.z * cos + this.y * sin;
              this.y = y1;
              this.z = z1;
          })

      }

      function rotateY(){
          var cos = Math.cos(angleY);
          var sin = Math.sin(angleY);
          tags.forEach(function(){
              var x1 = this.x * cos - this.z * sin;
              var z1 = this.z * cos + this.x * sin;
              this.x = x1;
              this.z = z1;
          })
      }

      var tag = function(ele , x , y , z){
          this.ele = ele;
          this.x = x;
          this.y = y;
          this.z = z;
      }

      tag.prototype = {
          move:function(){
              var scale = fallLength/(fallLength-this.z);
              var alpha = (this.z+RADIUS)/(2*RADIUS);
              this.ele.style.fontSize = 15 * scale + "px";
              this.ele.style.opacity = alpha+0.5;
              this.ele.style.filter = "alpha(opacity = "+(alpha+0.5)*100+")";
              this.ele.style.zIndex = parseInt(scale*100);
              this.ele.style.left = this.x + CX - this.ele.offsetWidth/2 +"px";
              this.ele.style.top = this.y + CY - this.ele.offsetHeight/2 +"px";
          }
      }
      innit();
      animate();
  }
})(jQuery);

 /*---------------tag ball------------*/
 $(document).ready(function () {
  $(".tagBall").cloudTag({ ballSize: 150 });
});

/*---------loading animation-----------*/

setTimeout(function(){
 $('.loading').fadeToggle();
} ,1800);

/*---------fixed menu-----------*/
function lockScroll() {
  $("body").toggleClass("fixedPosition");
     
}