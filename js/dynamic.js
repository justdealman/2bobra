function video() {
	$('.photos li iframe').each(function() {
		$(this).css({
			'height': $(this).parent().width()*315/560+'px'
		});
	});
}
$(document).ready(function() {
	if ( $('.carousel').length > 0 ) {
		$('.carousel > ul').jcarousel({
			scroll: 1,
			animation: 500,
			wrap: 'circular'
		});
	}
	$('.product .list li div').hover(
		function() {
			$('body').append('<img src="'+$(this).find('img').attr('src')+'" width="160" height="160" class="tempimg" alt="">');
			var l = $(this).offset().left+$(this).outerWidth()+4;
			if ( l+160 <= $('.wrapper').width() ) {
				$('img.tempimg').css({
					'left': l+'px',
					'right': 'auto',
					'top': $(this).offset().top+'px'
				});
			}
			else {
				$('img.tempimg').css({
					'left': 'auto',
					'right': ($('.wrapper').width()-l)+$(this).outerWidth()+8+'px',
					'top': $(this).offset().top+'px'
				});
			}
		},
		function() {
			$('img.tempimg').remove();
		}
	);
	if ( $('.photos iframe').length > 0  ) {
		video();
	}
	$('header .open').bind('click', function(event) {	
		$('.megamenu').css({
			'top': $('header').height()+'px'
		}).slideToggle(0);
		event.preventDefault();
	});
	if ( $('.megamenu').length > 0 ) {
		$('.megamenu > li > ul').each(function() {
			$(this).parent().addClass('sub');
		});
		$('.megamenu > li.sub > a').bind('click', function(event) {	
			$(this).parent().toggleClass('active');
			event.preventDefault();
		});
	}
	$('html').click(function() {
		$('.megamenu').hide();
	});
	$('.megamenu, header .open').click(function(event){
		event.stopPropagation();
	});
	$('[data-open]').bind('click', function(event) {
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		t.css({
			'top': $('body').scrollTop()+'px'
		}).stop(true,true).fadeIn(250);
		$('.fade').stop(true,true).fadeIn(250);
		event.preventDefault();
	});
	$('.fade, .modal .close').bind('click', function(event) {
		$('.modal, .fade').stop(true,true).fadeOut(250);
		event.preventDefault();
	});
});
$(window).resize(function() {
	if ( $('.photos iframe').length > 0  ) {
		video();
	}
	if ( $('.megamenu').length > 0 ) {
		$('.megamenu').hide();
	}
	if ( $('.modal').length > 0 ) {
		$('.modal, .fade').hide();
	}
});