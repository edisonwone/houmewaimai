;
(function() {

	'use strict';

	// iPad and iPod detection	
	var isiPad = function() {
		return(navigator.platform.indexOf("iPad") != -1);
	}

	var isiPhone = function() {
		return(
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	}

	// Mobile Menu Clone ( Mobiles/Tablets )
	var mobileMenu = function() {
		if($(window).width() < 769) {
			$('html,body').addClass('fh5co-overflow');

			if($('#fh5co-mobile-menu').length < 1) {
				//克隆一个导航，设置id
				var clone = $('#fh5co-primary-menu').clone().attr({
					"id": "fh5co-mobile-menu-ul",
					"class": ""
				});

				//对于手机端，有一级导航，无法打开二级导航问题，做的修改
				//				var lis=clone.children("li").has("ul")
				//				lis.children("a").addClass("fh5co-sub-ddown");
				//				$.each(lis,function(index,li){
				//					var href=$(li).children("a").attr("href");
				//					var texts=$(li).children("a").html();
				//					if($(li).hasClass("active")&&$(li).find(".active").length==0){
				//						$(li).children("ul").prepend("<li class='active'><a href='" + href + "'>" +texts+ "</a></li>")
				//					}else{
				//						$(li).children("ul").prepend("<li><a href='" + href + "'>" +texts+ "</a></li>")
				//					}
				//					
				//				});

				var cloneLogo = $('#fh5co-logo').clone().attr({
					"id": 'fh5co-logo-mobile',
					"class": ''
				});

				$('<div id="fh5co-logo-mobile-wrap">').append(cloneLogo).insertBefore('#fh5co-header-section');
				// $('#fh5co-logo-mobile-wrap').append('<a href="#" id="fh5co-mobile-menu-btn"><i class="ti-menu"></i></a>')

				$('#fh5co-logo-mobile-wrap').append('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white " data-toggle="collapse" data-target="#fh5co-navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>');
				$('<div id="fh5co-mobile-menu">').append(clone).insertBefore('#fh5co-header-section');

				$('#fh5co-header-section').hide();
				$('#fh5co-logo-mobile-wrap').show();
				$('#fh5co-logo-mobile-wrap').children("h1").hide();
			} else {
				$('#fh5co-header-section').hide();
				$('#fh5co-logo-mobile-wrap').show();
			}

		} else {

			$('#fh5co-logo-mobile-wrap').hide();
			$('#fh5co-header-section').show();
			$('html,body').removeClass('fh5co-overflow');
			$('.js-fh5co-nav-toggle').removeClass('active');
			if($('body').hasClass('fh5co-mobile-menu-visible')) {
				$('body').removeClass('fh5co-mobile-menu-visible');
			}
		}
	};

	// ScrollTop 
	var scrlTop = function() {
		$('.fh5co-gotop').click(function(event) {
			$('html, body').animate({
				scrollTop: 0
			}, 500, 'easeInOutExpo');

			event.preventDefault();
			return false;
		});
	};

	// SmoothScroll
	var smoothScroll = function() {
		$('.smoothscroll').click(function() {

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 700, 'easeInOutExpo');
			return false;
		});
	};

	// Click outside of the Mobile Menu
	var mobileMenuOutsideClick = function() {
		$(document).click(function(e) {
			var container = $("#fh5co-mobile-menu, .js-fh5co-nav-toggle");
			if(!container.is(e.target) && container.has(e.target).length === 0) {
				$('body').removeClass('fh5co-mobile-menu-visible');
				$('.js-fh5co-nav-toggle').removeClass('active');
			}
		});
	};

	// Mobile Button Click
	var mobileBtnClick = function() {
		$(document).on('click', '.js-fh5co-nav-toggle', function(e) {
			e.preventDefault();
			// fh5co-mobile-menu-visible
			if($('body').hasClass('fh5co-mobile-menu-visible')) {
				$('body').removeClass('fh5co-mobile-menu-visible');
				$(this).removeClass('active');
			} else {
				$('body').addClass('fh5co-mobile-menu-visible');
				$(this).addClass('active');
			}

		});
	};

	// Main Menu Superfish
	var mainMenu = function() {

		$('#fh5co-primary-menu').superfish({
			delay: 0,
			animation: {
				opacity: 'show'
			},
			speed: 'fast',
			cssArrows: true,
			disableHI: true
		});

	};

	// Superfish Sub Menu Click ( Mobiles/Tablets )
	var mobileClickSubMenus = function() {

		$('body').on('click', '.fh5co-sub-ddown', function(event) {
			event.preventDefault();
			var $this = $(this),
				li = $this.closest('li');
			li.find('> .fh5co-sub-menu').slideToggle(200);
		});

	};

	// Window Resize
	var windowResize = function() {
		$(window).resize(function() {
			mobileMenu();
		});

	};

	// Window Scroll
	var windowScroll = function() {
		$(window).scroll(function() {

			var scrollPos = $(this).scrollTop();
			if($('body').hasClass('fh5co-mobile-menu-visible')) {
				$('body').removeClass('fh5co-mobile-menu-visible');
				$('.js-fh5co-nav-toggle').removeClass('active');
			}

		});
	};

	// Fast Click for ( Mobiles/Tablets )
	var mobileFastClick = function() {
		if(isiPad() && isiPhone()) {
			FastClick.attach(document.body);
		}
	};

	// Easy Repsonsive Tabs
	var responsiveTabs = function() {

		$('#fh5co-tab-feature').easyResponsiveTabs({
			type: 'default',
			width: 'auto',
			fit: true,
			inactive_bg: '',
			active_border_color: '',
			active_content_border_color: '',
			closed: 'accordion',
			tabidentify: 'hor_1'

		});
		$('#fh5co-tab-feature-center').easyResponsiveTabs({
			type: 'default',
			width: 'auto',
			fit: true,
			inactive_bg: '',
			activetab_bg: '#ffd02e',
			active_border_color: '',
			active_content_border_color: '#ffd02e',
//			closed: 'accordion',
			closed:false,
			tabidentify: 'hor_1'

		});
		$('#fh5co-tab-feature-vertical').easyResponsiveTabs({
			type: 'vertical',
			width: 'auto',
			fit: true,
			inactive_bg: '',
			active_border_color: '',
			active_content_border_color: '',
			closed: 'accordion',
			tabidentify: 'hor_1'
		});
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			]
		});
	};
	var owlCrouselFeatureSlides = function() {
		var owl = $('.owl-carousels');
		owl.owlCarousel({
			items: 4,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
			navText: [
				"<i class='ti-arrow-left owl-direction'></i>",
				"<i class='ti-arrow-right owl-direction'></i>"
			]
		});
	};
	var testimonialCarousel = function() {
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 500,
//			autoHeight: true
		});
	};

	var testimonialCarousels = function() {
		setTimeout(function() {
			var owl = $('.owl-carousel-fullwidths');
			owl.owlCarousel({
				items: 1,
				loop: true,
				margin: 0,
				responsiveClass: true,
				nav: false,
				dots: true,
				smartSpeed: 500,
				autoHeight: true
			});
		}, 200)

	};
		var testimonialCarouselss = function() {

			var owl = $('.owl-carousel-fullwidthss');
			owl.owlCarousel({
				items: 3,
				loop: true,
				margin: 0,
				responsiveClass: true,
				nav: false,
				dots: true,
				smartSpeed: 500,
				autoHeight: true
			});


	};

	// MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	};

	// Scroll Animations

	// Animate Feature
	var animateFeature = function() {
		if($('.feature-box').length > 0) {
			$('.feature-box').each(function(k) {

				var el = $(this);

				setTimeout(function() {
					// el.animate({opacity: 1} , 600 );
					el.addClass('fadeInUp animated');
				}, k * 200, 'easeInOutExpo');

			});
		}
	};
	// Animate Works
	var animateWork = function() {
		if($('.work-box').length > 0) {
			$('.work-box').each(function(k) {

				var el = $(this);

				setTimeout(function() {
					// el.animate({opacity: 1} , 600 );
					el.addClass('fadeInUp animated');
				}, k * 200, 'easeInOutExpo');

			});
		}
	};

	// Animate Works
	var animateFooter = function() {

		$('.footer-box').each(function(k) {

			var el = $(this);

			setTimeout(function() {
				// el.animate({opacity: 1} , 600 );
				el.addClass('fadeInUp animated');
			}, k * 200, 'easeInOutExpo');

		});
	};

	// Waypoints 
	var featureWayPoint = function() {
		if($('#fh5co-features').length > 0) {
			$('#fh5co-features').waypoint(function(direction) {

				if(direction === 'down' && !$(this).hasClass('animated')) {

					setTimeout(animateFeature, 200);

					$(this).addClass('animated');

				}
				// 95%
			}, {
				offset: '90%'
			});
		}
	};

	var worksWayPoint = function() {
		if($('#fh5co-works').length > 0) {
			$('#fh5co-works').waypoint(function(direction) {

				if(direction === 'down' && !$(this).hasClass('animated')) {

					setTimeout(animateWork, 200);

					$(this).addClass('animated');

				}
				// 95%
			}, {
				offset: '90%'
			});
		}
	};

	var footerWayPoint = function() {
		if($('#fh5co-footer').length > 0) {
			$('#fh5co-footer').waypoint(function(direction) {

				if(direction === 'down' && !$(this).hasClass('animated')) {

					setTimeout(animateFooter, 200);

					$(this).addClass('animated');

				}
				// 95%
			}, {
				offset: '90%'
			});
		}
	};

	var heroWayPoint = function() {
		if($('#fh5co-hero').length > 0) {
			$('#fh5co-hero').waypoint(function(direction) {

				if(direction === 'down' && !$(this).hasClass('animated')) {

					setTimeout(function() {
						$('.hero-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function() {
						$('.hero-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(function() {
						$('.hero-animate-3').addClass('fadeInUp animated');
					}, 600);
					setTimeout(function() {
						$('.hero-animate-4').addClass('fadeInDown animated');
					}, 1000);

					$(this).addClass('animated');

				}
			}, {
				offset: '90%'
			});
		}
	};

	var contentWayPoint = function() {

		$('.animate-box').waypoint(function(direction) {

			if(direction === 'down' && !$(this).hasClass('animated')) {
				$(this.element).addClass('fadeInUp animated');
			}

		}, {
			offset: '99%'
		});

		$('.animate-box').waypoint(function(direction) {

			if(direction === 'down' && !$(this).hasClass('animated')) {
				$(this.element).addClass('fadeInUp animated');
			}

		}, {
			offset: '99%'
		});

	};

	$(function() {
		mobileFastClick();
		responsiveTabs();
		mobileMenu();
		mainMenu();
		magnifPopup();
		mobileBtnClick();
		mobileClickSubMenus();
		mobileMenuOutsideClick();
		owlCrouselFeatureSlide();
		owlCrouselFeatureSlides();	
		testimonialCarousel();
		testimonialCarousels();
		testimonialCarouselss();
		windowResize();
		smoothScroll();
		windowScroll();
		scrlTop();
		heroWayPoint();
		featureWayPoint();
		worksWayPoint();
		footerWayPoint();
		contentWayPoint();
	});



	$(".zhibolists").on("click", "li", function() {
		$(this).siblings().children("div").removeClass("active");
		$(this).children("div").last().addClass("active");
		var src = $(this).attr("date");
		$(".zhibo_body iframe").attr("src", src);
	})

}());

$(function() {
	function myBrowser1() {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
		var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
		var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
		if(isIE) {			
			var IE5 = IE55 = IE6 = IE7 = IE8 =IE9 = false;
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);		
			var fIEVersion = parseFloat(RegExp["$1"]);
			
			IE55 = fIEVersion == 5.5;
			IE6 = fIEVersion == 6.0;
			IE7 = fIEVersion == 7.0;
			IE8 = fIEVersion == 8.0;
			IE9 = fIEVersion == 9.0;
		
			if(IE55) {
				return "IE55";
			}
			if(IE6) {
				return "IE6";
			}
			if(IE7) {
				return "IE7";
			}
			if(IE8) {
				return "IE8";
			}
			if(IE9){
				return "IE9";
			}
		} //isIE end
		if(isFF) {
			return "FF";
		}
		if(isOpera) {
			return "Opera";
		}
	} //myBrowser() end
	//以下是调用上面的函数
	var banben=myBrowser1();
	if( banben== "IE8") {
		$(".jionus_tu").css("margin","0 15%")

	} else if(banben == "IE9") {		
		$(".js .to-animate,.js .feature-box,.js .work-box,.js .footer-box,.js .animate-box,.js .hero-animate-1").css("opacity","1")
	} else if(banben == "IE7") {		
		$(".js .to-animate,.js .feature-box,.js .work-box,.js .footer-box,.js .animate-box,.js .hero-animate-1").css("opacity","1")
	}
	
})