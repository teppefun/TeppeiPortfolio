// Hello.
//
// This is The Scripts used for ___________ Theme
//
//
$(document).ready(function() {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});

//page topボタン
$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){
    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();
  }else{
    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();
  }
});

// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;
});

});


document.ontouchstart = function(){};
function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
      } else {
          $('#tf-menu').removeClass('stick');
      }
  }

  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });


 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 30
        }, 550);
        return false;
      }
    }
  });
});




}());


}
main();
