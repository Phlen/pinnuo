/**
 * Created by Allen on 15-11-27.
 */


/*window.onload = function() {
  showSlider();
  alert("hhhh");
}*/

var cur_image = 1;
showSlider();
function showSlider() {
  $(".slider, #item-1").css({left:'0'}).show();   //进入后显示第一张图片

  setTimeout(function() {
    loadSliderImages(2);
  },0)
}

function loadSliderImages(i) {
  cur_image = i;
  setTimeout(function() {
    /*$('#item-' +i).show().addClass("animate-left-1").css({left:'0'});*/
    $('#item-' +i).show().animate({left:'0'},1000);
    if(cur_image == 1) {
      var k = 4;
    }else {
      k = cur_image -1;       //获取上一张图片
    }
    setTimeout(function() {
      hideSlider(k);          //隐藏上一张图片
    },0);
    if(k == 3) {
      $("#item-1").show().animate({left:'0'},1000);  //第三张图片显示后，第一张图片显示
      setTimeout(function() {
        hideSlider(4);        //
      },1000)
    }
    if(cur_image == 4) {
      var l = 2;
    }else {
      l = cur_image+1;
    }
    loadSliderImages(l);
  },3000)
/*  cur_image = i;*/
}

function hideSlider(i) {
  setTimeout(function() {
    $('#item-' + i).removeClass('animate-left-1')
        .css({left: '100%'})
        .hide();
  },1000)
}