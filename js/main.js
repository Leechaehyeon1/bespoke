$(document).ready(function(){
  TweenMax.staggerTo('.tit span', 2,
  { y: 0, rotation: 0 }, 0.2);

  $('.menu_btn').on('click', function(e){
    e.preventDefault();
  
    if($('.gnb').hasClass('show')){
      $('.gnb').removeClass('show');
      $('.gnb').addClass('hide');
      TweenMax.staggerTo('.header .gnb li', 0,
      { opacity: 1 }, 0);
    } else {
      $('.gnb').addClass('show');
      $('.gnb').removeClass('hide');
      TweenMax.staggerFromTo('.header .gnb li', 1.2,
      { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, 0.3);
    }
  });

  // Swiper
  var menu = ['Cotta Metal', 'Satin Glass', 'Glam Glass'];
  var swiper = new Swiper('.panel_slide', {
		speed: 1000,
		loop: true,
    pagination: {
      el: '.panel_nav',
      clickable: true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
      }
    }
  });

  var swiper = new Swiper('.installation_slide', {
		speed: 1000,
		loop: true,
    pagination: {
      el: '.installation_slide .swiper-pagination',
      clickable: true,
    },
  });

  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });
});

$(window).on('scroll', function(){
  curr = $(this).scrollTop();
  if( curr > 80 ){
    $('.header').addClass('on');
  } else {
    $('.header').removeClass('on');
  }

  ani01('.product_wrap .content_wrap', '.product_wrap', $(window).height()/1.2);
  ani01('.panel_wrap .inner h2', '.panel_wrap', $(window).height()/1.5);
  ani01('.panel_wrap .swiper-pagination-bullet', '.panel_wrap', $(window).height()/1.5);
  ani01('.panel_wrap .panel_slide .img_wrap ul li:first-child img', '.panel_wrap', $(window).height()/1.5);
  ani01('.reserve_wrap .inner .ani', '.reserve_wrap', $(window).height()/1.5);
});

function ani01(el, trigger, offset){
  target = $(trigger).offset().top - offset;
  if(curr > target){
    TweenMax.staggerTo(el, 1,
    { y: 0, rotation: 0, opacity: 1 }, 0.2);
  }
}

var controller = new ScrollMagic.Controller();

// txt_effect
var tween1 = TweenMax.to('.bg_txt01', 0.5, { x: '-270%' });
var tween2 = TweenMax.to('.bg_txt02', 0.5, { x: '100%' });

var scene = new ScrollMagic.Scene({
  triggerElement: '.bg_txt_wrap',
  duration: '200%',
  offset: -$(window).height()/2
})
.setTween(tween1)
.addTo(controller)

var scene = new ScrollMagic.Scene({
  triggerElement: '.bg_txt_wrap',
  duration: '200%',
  offset: -$(window).height()/2
})
.setTween(tween2)
.addTo(controller)