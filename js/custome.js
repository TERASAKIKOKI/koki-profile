
/*=======================================
                  GENERIC
=======================================*/
$(function () {
  // animate on scroll
  new WOW().init();

});

/*=======================================
              navigation
=======================================*/
// Show/Hide transparent black nabigation

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //hide nav
    $("nav").removeClass("top-nav");
    } else {
      //show nav
    $("nav").addClass("top-nav");
    };
  });
});

//smooth scrolling
$(function(){
  $(a[href^="#"]).on('click',function(){
    var Target = $(this.hash);
    var TargetOffset = $(Target).offset.top - 64;
    var Time = 700;
    $('html body').animate({
      scrollTop: TargetOffset
    }, Time);
    return false;
  });
});