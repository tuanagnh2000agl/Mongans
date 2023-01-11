jQuery(function($) {
//
// 変数を定義  
//------------------------------------
	var $body = $('body'),
		$header = $('l-header'),
		$menuButton = $('.l-menu');
		function headerHeight() {
			$headerHeight = $header.outerHeight();   
		}       

// header-menu 
//------------------------------------
	//ハンバーガーボタンクリック   
	$menuButton.click(function() {
		if ( $(this).hasClass('is-open') ) {
			$(this).removeClass('is-open');
			$('body').removeClass('is-hidden');
			$('.l-header__menu').removeClass('--is-active');
		} else {
			$(this).addClass('is-open');  
			$('body').addClass('is-hidden')
			$('.l-header__menu').addClass('--is-active');
		}
	});

	// call when on sp screen -- footer
	$(window).on('resize', function() {
		if($(this).width() < 960) {
			$('.l-header__menu').css('transition','all 0.3s linear');
		}else{
			$('.l-header__menu').css('transition','unset');
		}
	});

});
