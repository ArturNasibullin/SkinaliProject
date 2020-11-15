function openModal () {
	const modal = $(.)
}




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

	// Фиксированное меню после прокрутки
	let header = $('.header-top__wrapper');
	let mainPage = $('.header');
	let mainPageH = mainPage.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	$(window).on('scroll load resize', function() {
		let mainPageH = mainPage.innerHeight();
		scrollPos = $(this).scrollTop();
	
		if (scrollPos > mainPageH) {
		header.addClass('fixed');
		} else {
		header.removeClass('fixed');
		}
	});
	
});

$(window).on('load', (function() {
	// Плагин twentyTwenty
	$(".before-after").twentytwenty({
		before_label: 'Без скинали',
    	after_label: 'Со скинали',
	});

	// Слик слайдер
	$('.before-slider').slick({
		draggable: false,
		swipe: false,
		dots: true,
		dotsClass: 'before-slider__dots',
		prevArrow: $('.arrow-left'),
		nextArrow: $('.arrow-right')
	});

	// Показать меню
	$('.header-top__nav-btn').on('click', function(){
		$('.nav-bar').toggleClass('nav-bar--active');
	});

	  // Smooth scroll
	$('[data-scroll]').on('click', function(event){
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;
		

		$('html, body').animate({
		scrollTop: elementOffset - 80
		}, 1000);


		$('.nav-bar').removeClass('nav-bar--active');
		
	});

  }));

  

