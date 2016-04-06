$(document).ready(function(){
//file:///Users/Hunt/Development/jQSlider/index.html


  (function(){
    var slider = {
      fWidth: 720,
      speed: 1000,
      pause: 3000,
      interval: null,
      currentSlide: 1,
      init: function(){
        this.cacheDom();
        this.bindEvents();
        this.centerElement(this.$container);
        this.startSlider();
      },
      cacheDom: function(){
        this.$container = $('.container');
        this.$windowW = $(window).width();
        this.$windowH = $(window).height();
        this.$slider = $('#slider');
        this.$slideContainer = $('.slides');
        this.$slides = $('.slide');
        this.$RB = $('#RB');
        this.$LB = $('#LB');
      },
      centerElement: function($el){
        var desiredx = this.$windowW/2-$el.width()/2;
        var desiredy = this.$windowH/2-$el.height()/2;
        $el.css({left: desiredx, top: desiredy});
      },
      bindEvents: function(){
        this.$slider.on('mouseenter',this.stopSlider.bind(this)).on('mouseleave',this.startSlider.bind(this));
        this.$RB.on('click',this.rClick.bind(this));
        this.$LB.on('click',this.lClick.bind(this));
      },
      startSlider: function(){
        this.interval = setInterval(function () {
          slider.$slideContainer.animate({'margin-left': '-='+slider.fWidth},slider.speed,function(){
            slider.currentSlide++;
            if(slider.currentSlide===slider.$slides.length){
              slider.currentSlide=1;
              slider.$slideContainer.css('margin-left',0);
            }
          });
        }, this.pause);
      },
      stopSlider: function(){
        clearInterval(this.interval);
      },
      rClick: function(){
        slider.$slideContainer.animate({'margin-left': '-='+slider.fWidth},slider.speed,function(){
          slider.currentSlide++;
          if(slider.currentSlide===slider.$slides.length){
            slider.currentSlide=1;
            slider.$slideContainer.css('margin-left',0);
          }
        })
      },
      lClick: function(){
        slider.$slideContainer.animate({'margin-left': '+='+slider.fWidth},slider.speed,function(){
          slider.currentSlide--;
          if(slider.currentSlide<1){
            slider.currentSlide=slider.$slides.length-2;
            slider.$slideContainer.css('margin-left',(-1)*slider.fWidth*slider.currentSlide);
          }
        })
      }
    };
    slider.init();
  })()

})
