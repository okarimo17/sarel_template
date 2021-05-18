

function mainMenuService(){
    
	$('.menu-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots: false,
		smartSpeed: 500,
		autoplayTimeout: 2000,
		autoplay: false,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			600:{
				items:2
			},
			800:{
				items:3
			},
			1200:{
				items:3
			}
		}
	});    		

	let menu_holder = $('.menu-holder');
	$('.menu-open_btn').click(function(){
		menu_holder.removeClass('closed');
	})
	$('.menu-close_btn').click(function(){
		menu_holder.addClass('closed');
	})
	setTimeout(function(){
		menu_holder.addClass('animated');
	},700)
}


mainMenuService()