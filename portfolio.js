$(function(){

  //Fade In Intro
  $('body').hide().fadeIn(1500);



  //Link to Works
  $('a[href^="#"]').click(function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
     });

  // Go back to the top
  $('#title-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 500)
  });
});
