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
	$('.product .more h5 span').bind('click', function(event) {
		if ( $('.complectation-popup').is(':visible') ) {
			$('.complectation-popup').stop().fadeOut(250);
		}
		else {
			$('.complectation-popup').css({
				'left': $(this).offset().left+'px',
				'top': $(this).offset().top+'px'
			}).stop().fadeIn(250);
		}
	});
	$('html').click(function() {
		$('.megamenu, .complectation-popup').hide();
	});
	$('.megamenu, header .open, .product .more h5 span, .complectation-popup').click(function(event){
		event.stopPropagation();
	});
	$('[data-open]').bind('click', function(event) {
		var t = $('.modal[data-target="'+$(this).attr('data-open')+'"]');
		if ( t.outerHeight() <= $(window).height() ) {
			t.css({
				'position': 'fixed',
				'top': ($(window).height()-t.outerHeight())/2+'px'
			}).stop(true,true).fadeIn(250);
		}
		else {
			t.css({
				'position': 'absolute',
				'top': $('body').scrollTop()+'px'
			}).stop(true,true).fadeIn(250);
		}
		$('.fade').stop(true,true).fadeIn(250);
		event.preventDefault();
	});
	$('.fade, .modal .close').bind('click', function(event) {
		$('.modal, .fade').stop(true,true).fadeOut(250);
		event.preventDefault();
	});
	$('.faq li h5 span').bind('click', function(event) {
		$(this).parent().parent().toggleClass('active');
		event.preventDefault();
	});
	if ( $('a.zoom').length > 0 ) {
		$('a.zoom').fancybox();
	}
	if ( $('.contacts .cover').length > 0 ) {
		$('.contacts .cover').each(function() {
			if ( $(this).find('img').length > 1 ) {
				$(this).append('<span class="prev"></span>');
				$(this).append('<span class="next"></span>');
				$(this).find('img').hide();
				$(this).find('img[data-img="1"]').show()
			}
		});
	}
	$('.contacts .cover .next').bind('click', function() {	
		var c = $(this).parent().find('img:visible').attr('data-img');
		var n = eval(c)+1;
		if ( n > $(this).parent().find('img').size() ) {
			n = 1;
		}
		$(this).parent().find('img').hide();
		$(this).parent().find('img[data-img="'+n+'"]').show();
		event.preventDefault();
	});
	$('.contacts .cover .prev').bind('click', function() {	
		var c = $(this).parent().find('img:visible').attr('data-img');
		var p = eval(c)-1;
		if ( p < 1 ) {
			p = $(this).parent().find('img').size();
		}
		$(this).parent().find('img').hide();
		$(this).parent().find('img[data-img="'+p+'"]').show();
		event.preventDefault();
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
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