$(function(){
	var headerHeight = $('header').outerHeight(),
		startPos = 0;
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > startPos && scrollPos > headerHeight ) {
			$('header').fadeOut();
		} else {
			$('header').fadeIn();
		}
		startPos = scrollPos;
	});
});