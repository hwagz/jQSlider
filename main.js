'use strict';

$(document).ready(function(){
  //config vars
  var width = 720;
  var speed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache dom
  var windowW = $(window).width();
  var windowH = $(window).height();
  var container = '.container';
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

function centerElement(element){
  var desiredx = windowW/2-$(element).width()/2;
  var desiredy = windowH/2-$(element).height()/2;
  $(element).css({left: desiredx, top: desiredy});
}

centerElement(container);

  var interval;
  function startSlider(){
    interval = setInterval(function () {
      $slideContainer.animate({'margin-left': '-='+width},speed,function(){
        currentSlide++;
        if(currentSlide===$slides.length){
          currentSlide=1;
          $slideContainer.css('margin-left',0);
        }
      });
    }, pause);
  }

  function stopSlider(){
    clearInterval(interval);
  }

$slider.on('mouseenter',stopSlider).on('mouseleave',startSlider);
startSlider();
  //listen for mouseenter and pause
  //resume on mouseleave

})
