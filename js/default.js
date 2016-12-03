$(document).ready(function(){
	
	/* **********************
	* HEADER ONSCROLL *
	*********************** */
	if($('header').length){
		window.addEventListener('scroll', function(e){
			var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 100;
			if (distanceY > shrinkOn) {
				$('header').addClass('scrolled');
			} else {
				if ($('header').hasClass('scrolled')) {
					$('header').removeClass('scrolled');
				}
			}
		});
	}
	
	
	/* *****************
	* SMOOTH SCROLLING *
	****************** */
	(function ($) {
		$.fn.smoothScroll = function(t, setHash) {
			// Set time to t variable to if undefined 500 for 500ms transition
			t = t || 1000;
			setHash = (typeof setHash == 'undefined') ? true : setHash;
			// Return this as a proper jQuery plugin should
			return this.each(function() {
				$('html, body').animate({
						scrollTop: $(this).offset().top-70
				}, t);
			});
			return this;
		};
	}( jQuery ));	
	
	if (window.location.hash) {
			window.scrollTo(0,0);
			$(window.location.hash).smoothScroll();
	}
	
	$('a[href^="/'+window.location.pathname.substring(1)+window.location.search+'#"]').click(function(e) {
			//console.log('smoothscroll: '+$(this).attr('href').slice($(this).attr('href').indexOf('#'),$(this).attr('href').length));
			e.preventDefault();
			$($(this).attr('href').slice($(this).attr('href').indexOf('#'),$(this).attr('href').length)).smoothScroll();
	});
	
	$('header nav span').click(function(e) {
			$($(this).attr('data-target').slice($(this).attr('data-target').indexOf('#'),$(this).attr('data-target').length)).smoothScroll();
	});

	/* *********
	* PARALLAX *
	********** */
	function positionParallax(){
		$('#bigImage').each(function(){				
			$(this).css({'top': -$(document).scrollTop()/2});			
		});
	}	
	
	/* **************
	* SCROLL WINDOW *
	*************** */
	$(window).scroll(function() {
		positionParallax();
	});
	
	/* *****************
	*      RESIZE      *
	****************** */
	
	function resize(){
		if($('body').width()<768){
			$('#homeProjects .height-1 .project').css({'height':'200px'});
			$('#homeProjects .height-2 .project').css({'height':'300px'});
			$('#homeServices .height-1').css({'height':'200px'});
			$('#homeServices .height-2').css({'height':'200px'});
		} else {
			var projectHeight = Math.round($('body').width()/5);
			$('#homeProjects .height-1 .project').css({'height':projectHeight});
			$('#homeProjects .height-2 .project').css({'height':projectHeight*2});
			$('#homeServices .height-1').css({'height':projectHeight});
			$('#homeServices .height-2').css({'height':projectHeight*2+1});
		}
		$('.project a').each(function(){
			$(this).css({'height':$(this).parent().parent().parent().height(),'width':$(this).parent().width()});
		});
	}
	
	$(window).resize(function() {
		resize();
	});
	
	resize();
	
});
