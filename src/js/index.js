jQuery(function($) { 
    $('.js-mainslick').slick({ 
        infinite: true,
		autoplay: false,  
		autoplaySpeed: 2000, 
		speed: 2000,        
		cssEase: 'linear',  
		slidesToShow: 1,  
		dots: true,
		fade: true,
		arrows: false, 
		pauseOnFocus: false, 
		pauseOnHover: false,
		pauseOnDotsHover: false,
		slidesToScroll: 1,
    })    


	$('.slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 6900,
		infinite: true,
		pauseOnHover: false,
		pauseOnFocus: false,
		cssEase: 'linear',
		slidesToShow: 6.1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 426,
			settings: {
				slidesToShow: 1.77,
				}
		}
	  ]
	  });
});               