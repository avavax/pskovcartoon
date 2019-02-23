	var $menuLink = document.querySelector('.menu-link');
	var $menuMobile = document.querySelector('.menu-mobile');

	$menuLink.addEventListener('click', function() {
		$menuLink.classList.toggle('menu-link__active');
		$menuMobile.classList.toggle('menu-mobile__hidden');
	});

$(document).ready(function() {


    $('.menu-mobile').on('click', 'a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
	        top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
	});


	$('.header-contacts__btn').on('click', function() {
		$('.overlay').show();
	});
	$('.popup-close').on('click', function() {
		$('.overlay').hide();
	});


	$('.production-slider__top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.production-slider__bottom'
	});
	$('.production-slider__bottom').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.production-slider__top',
		autoplay: true,
		prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
		 responsive: [
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: false
		      }
		    }
		 ]
	});
	$('.feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: '<div class="slider-arrow slider-arrow_left slider-feedback"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_right slider-feedback"></div>',
		responsive: [
			{
			  breakpoint: 766,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    infinite: true,
			    arrows: true
			  }
			},
			{
			  breakpoint: 995,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1,
			    infinite: true,
			    arrows: true
			  }
			}			
		]
	});	

});



