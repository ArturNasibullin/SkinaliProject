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