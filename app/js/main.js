$(function() {
	let pricesItem = $('.prices__item');

	pricesItem.hover(function(){
		$(this).addClass('prices__item--hovered');
	}, function(){
		pricesItem.removeClass('prices__item--hovered');
	});


	let catalogitem = $('.catalog-item');

	catalogitem.hover(function(){
		$(this).addClass('catalog-item--hover');
	}, function(){
		catalogitem.removeClass('catalog-item--hover');
	});
});

$(window).on('load', (function() {
	$(".before-after").twentytwenty({
		before_label: 'Без скинали',
    	after_label: 'Со скинали',
	});

	$('.before-slider').slick({
		draggable:false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});

	$('.header-top__nav-btn').on('click', function(){
		$('.nav-bar__content').toggleClass('nav-bar__content--active');
	});

  }));


