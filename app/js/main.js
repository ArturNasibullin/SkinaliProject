$(function() {
	let item = $('.prices__item');
	

	item.hover(function(){
		$(this).addClass('prices__item--hovered');
	}, function(){
		item.removeClass('prices__item--hovered');
	});

});