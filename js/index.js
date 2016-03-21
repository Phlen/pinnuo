/**
 * Created by Allen on 15-11-27.
 */

$("#top").click(function( ) {
  $('html , body').animate({scrollTop:'0'},1000);
})

window.onresize = function () {
  var winWidth = window.innerWidth;     //获取设备宽度
  var html = document.getElementsByTagName("html")[0];
  html.style.fontSize = winWidth / 10 + 'px';     //设置HTML根文字大小，作为rem参考
}

function change(e) {
  console.log(e);
  $('.hand').removeClass("current");
  $(e).addClass("current");
}

window.onload = function () {
  window.onresize();

}