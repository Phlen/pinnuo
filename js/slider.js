/**
 * Created by Allen on 15-11-28.
 * 控制图片轮播
 */

$(function() {
  var speed = 500;    // 配置切换时间。
  var autoPlay = 4000;  // 自动切换时间(幻灯片停留时间)
  var curIndex = 0;   // 标志当前图片
  var winWidth;       // 屏幕大小
  var $item = $('.slider-item');  // 获取item元素
  var timeId;

/***************** 初始化 **************/
  function initSlider() {
    winWidth = $(window).width();     // 获取当前屏幕宽度

  // 将slider-wrap的宽度设为winWidth的item个数倍
    var sliderWrapWidth = winWidth * $item.length;
    // 将每个slider-item的宽度设为winWidth
    $("#slider .slider-item").css({width:winWidth})

    $(".slider-wrap").css({
      width:sliderWrapWidth,
      left: -curIndex * winWidth
    });
  }

  /************* 循环 ******************/
  function loop(){
    if(curIndex < $item.length -1) {
      curIndex += 1;
    }else {
      curIndex = 0;
    }
    slideTo(curIndex);
  }

  timeId = setInterval(loop ,autoPlay)  // 定时

  /*************** 展示幻灯片 *****************/
  function slideTo (index) {
    $('.slider-wrap').animate({left: -winWidth * index}, speed, function() {
      if (!timeId) {
        timeId = setInterval(loop, autoPlay);
      }
    });
  }


  /************** 前一张图片 *******************/
  $("#prev").click(function() {
    clearInterval(timeId);
    timeId = 0;
    if(curIndex > 0) {
      curIndex--;
    }else {
      curIndex = $item.length - 1;
    }
    slideTo(curIndex);
  });

  /************** 下一张图片 *********************/
  $("#next").click(function() {
    clearInterval(timeId);
    timeId = 0;
    if(curIndex < $item.length -1) {
      curIndex++;
    } else {
      curIndex = 0;
    }
    slideTo(curIndex);
  })



  window.onresize = function() {
    initSlider();
  }
  window.onload = function() {
    window.onresize();
  }

})
