const cursor = document.querySelector("#cursor"),
anchor = document.querySelectorAll("a");
  

//   custom cursor

window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  cursor.style.left = `${x}px`,
  cursor.style.top = `${y}px`;
});

// anchor tag hover effect

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(10)",
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});



 /*---------------index page animation------------*/  
window.sr = ScrollReveal({ reset: true });

sr.reveal('.animate-left', {
  origin:'left',
  duration:1200,
  distance:'25rem',
  delay:300
})

sr.reveal('.animate-right', {
  origin:'right',
  duration:1200,
  distance:'25rem',
  delay:300
})

sr.reveal('.animate-top', {
  origin:'top',
  duration:1000,
  distance:'25rem',
  delay:300
})

sr.reveal('.animate-bottom', {
  origin:'bottom',
  duration:1000,
  distance:'25rem',
  delay:300
})

/*---------------top image scroll effect------------*/




   /*---------------automatically close menu when back is pressed------------*/

  $(document).ready(function(){
    $(".menu a").click(function(){
        $(".toggler").prop("checked", false);
        $(".toggler").prop("overflow-y", hidden);
    });
});


  /*---------------scroll button------------*/
  $(document).ready(function(){
    $(window).scroll(function(){
      if($(window).scrollTop() > 300){
        $('#up').css({
          "opacity":"1", "pointer-events":"auto"
        });
      }else{
        $('#up').css({
          "opacity":"0", "pointer-events":"none"
        });
      }
    });
    $('#up').click(function(){
      $('html').animate({scrollTop:0}, 500);
    });
  });

  

  








  



