
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

// Scrollspy




//smooth scrolling 動かない
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロール速度
    var speed = 400;
    //アンカーの値を取得
    var href = $(this).attr("href");
    //移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //移動先を数値で取得
    var position = target.offset().top;
    //スムーススクロール
    $('body,html').animation({scrollTop:position}, speed, 'swing');
    return false;
  });
});

