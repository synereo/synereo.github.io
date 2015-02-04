/* <![CDATA[ */

(function ($, sr) {
    "use strict";
    var debounce = function (func, threshold, execAsap) {
        var timeout = '';
        return function debounced() {
            var obj = this, args = arguments;
            function delayed() {
                if (!execAsap) {
                    func.apply(obj, args);
                }
                timeout = null;
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'utresize');

/*
 * Supposition v0.3a - an optional enhancer for Superfish jQuery menu widget
 *
 * Copyright (c) 2013 Joel Birch - based on work by Jesse Klaasse - credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 * 	http://www.gnu.org/licenses/gpl.html
 */

;(function($){

	$.fn.supposition = function(){
		var $w = $(window), /*do this once instead of every onBeforeShow call*/
			_offset = function(dir) {
				return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
				|| document.documentElement && document.documentElement[dir=='y' ? 'scrollTop' : 'scrollLeft']
			    || document.body[dir=='y' ? 'scrollTop' : 'scrollLeft'];
			},
			onInit = function(){
				/* I haven't touched this bit - needs work as there are still z-index issues */
				$topNav = $('li',this);
				var cZ=parseInt($topNav.css('z-index')) + $topNav.length;
				$topNav.each(function() {
					$(this).css({zIndex:--cZ});
				});
			},
			onHide = function(){
				this.css({marginTop:'',marginLeft:''});
			},
			onBeforeShow = function(){
				this.each(function(){
					var $u = $(this);
					$u.css('display','block');
					var menuWidth = $u.width(),
						parentWidth = $u.parents('ul').width(),
						totalRight = $w.width() + _offset('x'),
						menuRight = $u.offset().left + menuWidth;
					if (menuRight > totalRight) {
						$u.css('margin-left', ($u.parents('ul').length == 1 ? totalRight - menuRight : -(menuWidth + parentWidth)) + 'px');
					}

					var windowHeight = $w.height(),
						offsetTop = $u.offset().top,
						menuHeight = $u.height(),
						baseline = windowHeight + _offset('y');
					var expandUp = (offsetTop + menuHeight > baseline);
					if (expandUp) {
						$u.css('margin-top',baseline - (menuHeight + offsetTop));
					}
					$u.css('display','none');
				});
			};
		
		return this.each(function() {
			var $this = $(this),
				o = $this.data('sf-options'); /* get this menu's options */
			
			/* if callbacks already set, store them */
			var _onInit = o.onInit,
				_onBeforeShow = o.onBeforeShow,
				_onHide = o.onHide;
				
			$.extend($this.data('sf-options'),{
				onInit: function() {
					onInit.call(this); /* fire our Supposition callback */
					_onInit.call(this); /* fire stored callbacks */
				},
				onBeforeShow: function() {
					onBeforeShow.call(this); /* fire our Supposition callback */
					_onBeforeShow.call(this); /* fire stored callbacks */
				},
				onHide: function() {
					onHide.call(this); /* fire our Supposition callback */
					_onHide.call(this); /* fire stored callbacks */
				}
			});
		});
	};

})(jQuery);


;(function($){
	
	"use strict";
	
    $(document).ready(function(){
		
		/* Lazy Load
		================================================== */
        var $imgs = $("img.utlazy");
    
        $imgs.lazyload({
            effect: 'fadeIn',
            effectspeed: '200',
            event : 'scroll',
			load : function() {
				$.waypoints("refresh");
			},
            failure_limit: Math.max($imgs.length - 1, 0)
        });
		
		
		/* Main Navigation & Mobile Navigation
		================================================== */
		$('#navigation ul.menu').find(".current-menu-ancestor").each(function() { $(this).find("a").first().addClass("active"); }).end().find(".current_page_parent").each(function() { $(this).find("a").first().addClass("active"); }).end().superfish({autoArrows : true}).supposition();
    	$('#ut-mobile-menu').find(".current-menu-ancestor").each(function() { $(this).find("a").first().addClass("active"); }).end().find(".current_page_parent").each(function() { $(this).find("a").first().addClass("active"); });

        /* Mobile Navigation
		================================================== */
		$('#ut-mobile-menu .sub-menu li:last-child').addClass('last');
    	$('#ut-mobile-menu li:last-child').addClass('last');		
		
		function mobile_menu_dimensions() {
			
			var nav_new_width	= $(window).width(),
				nav_new_height  = $(window).outerHeight();
			
			$("#ut-mobile-nav").width( nav_new_width ).height( nav_new_height );
			$(".ut-scroll-pane").width( nav_new_width + 17 ).height( nav_new_height );
		
		}
		
		function mobilemenu(){
                
			 if (($(window).width() > 979)) {
				$("#ut-mobile-nav").hide(); 
			 }
			
		}

		$(".ut-mm-trigger").click(function(event){
			
			$(this).toggleClass("active").next().slideToggle(500);
            mobile_menu_dimensions();
                        
			event.preventDefault();
			
		});		
				
		var mobiletimer;
		
		$(window).utresize(function(){
		  
		  clearTimeout(mobiletimer);
		  mobiletimer = setTimeout(mobilemenu, 100);
		  mobile_menu_dimensions();
          
		});
        
        
        /*var windows_height	= $(window).height();
        
        $('.main-content-background section').each(function(index, element) {
            
            if( $(this).height() < windows_height ) {
                $(this).height( windows_height )
            }
            
        });*/
        
        $('.ut-scroll-pane').on('touchstart', function(event){ });
        
		/* Tablet Slider
		================================================== */
		$(".ut-tablet-nav li a").click( function(event) {
			
			var index = $(this).parent().index();
						
			/* remove selected state from previuos tabs link */
			$(".ut-tablet-nav li").removeClass("selected");
			
			/* add class selected to current link */
			$(this).parent().addClass("selected");
			
			/* hide all tabs images */
			$(".ut-tablet").children().hide().removeClass("show");		
			
			/* show the selected tab image */
			$(".ut-tablet").children().eq(index).fadeIn("fast").addClass("show");
			
			event.preventDefault();
		
		});
		
		
		/* Scroll to Top
		================================================== */
		var ut_scrolleffect = $('body').data("scrolleffect"),
			ut_scrollspeed	= $('body').data("scrollspeed");
		
		$('.logo a[href*=#]').click( function(event) { 
				
			event.preventDefault();			
			$.scrollTo( $(this).attr('href') , ut_scrollspeed, { easing: ut_scrolleffect , offset: -80 , 'axis':'y' } );			
			
		});
		
		$('.toTop').click( function(event) { 
				
			event.preventDefault();			
			$.scrollTo( $(this).attr('href') , ut_scrollspeed, { easing: ut_scrolleffect , offset: -80 , 'axis':'y' } );			
			
		});
		
		
		/* Scroll to sections for hero buttons
		================================================== */        
        $('.hero-second-btn[href^="#"] , .hero-btn[href^="#"]').click( function( event ) {
        
            event.preventDefault();
            
            var target = $(this).attr('href');
            
            if( target === '#ut-to-first-section' ) {
			
				$.scrollTo( $('.wrap') , ut_scrollspeed, {  easing: ut_scrolleffect , offset: -79 , 'axis':'y' } );
			
			} else {
				
				$.scrollTo( target , ut_scrollspeed, {  easing: ut_scrolleffect , offset: 0 , 'axis':'y' } );
				
			}
            
        
        });         
		
		$('.hero-slider-button[href^="#"]').click( function( event ) {
			
            event.preventDefault();
            
            var target = $(this).attr('href');
            
            if( target === '#ut-to-first-section' ) {
			
				$.scrollTo( $('.wrap') , ut_scrollspeed, {  easing: ut_scrolleffect , offset: -79 , 'axis':'y' } );
			
			} else {
				
                $.scrollTo( $(this).attr('href') , ut_scrollspeed, {  easing: ut_scrolleffect , offset: 0 , 'axis':'y' } );
				
			}
			
		});
		
		/* Scroll to Section if Hash exists
		================================================== */
		$(window).load(function() {
						
			if( window.location.hash ) {
				
				setTimeout ( function () {
																		
					$.scrollTo( window.location.hash , ut_scrollspeed , { easing: ut_scrolleffect , offset: 0 , "axis":"y" } );
																		
				}, 400 );
								
			}
			
		});
				
		/* Scroll to Sections / Main Menu
		================================================== */
		$('#navigation a').click( function(event) { 
						
			if(this.hash && !$(this).hasClass('external') ) {
			
				$.scrollTo( this.hash , ut_scrollspeed, { easing: ut_scrolleffect , offset: 0 , 'axis':'y' } );			
				event.preventDefault();				
				
			} else if( this.hash && $(this).parent().hasClass('contact-us') ) {
				
				$.scrollTo( this.hash , ut_scrollspeed, { easing: ut_scrolleffect , offset: 0 , 'axis':'y' } );			
				event.preventDefault();		
				
			}
			
		});
		
        /* Scroll to Sections / Mobile Menu
		================================================== */
		$('#ut-mobile-menu a').click( function(event) { 
			
			if(this.hash && !$(this).hasClass('external') ) {
				$.scrollTo( this.hash , ut_scrollspeed, { easing: ut_scrolleffect , offset: 0 , 'axis':'y' } );			
				event.preventDefault();				
			}
			
			/* close menu */
			$('#ut-mobile-nav').slideToggle(500);
			
		});
        

		/* reflect scrolling in navigation
		================================================== */
		$('.ut-offset-anchor').each(function() {
        	
			$(this).waypoint( function( direction ) {
				
				if( direction === 'down' ) {
					
					var containerID = $(this).attr('id');
					
					if( $(this).data('parent') ) {
						containerID = $(this).data('parent');
					}

					/* update navigation */
					$('#navigation a').removeClass('selected');
					$('#navigation a[href*=#'+containerID+']').addClass('selected');
									
				}
                
                if( direction === 'up' && $(this).attr('id') === 'to-main-content' ) {
                                        
                    /* update navigation home */
                    $('#navigation a').removeClass('selected');
                    $('.ut-home-link a').addClass('selected');
                
                }
							
			} , { offset: '80px' });
			  	  
        });
		
		$('.ut-scroll-up-waypoint').each(function() {
        	
			$(this).waypoint( function( direction ) {
				
				if( direction === 'up' ) {
					
					var containerID = $(this).data('section');
					
					if( $(this).data('parent') ) {
						containerID = $(this).data('parent');
					}

					/* update navigation */
					$('#navigation a').removeClass('selected');
					$('#navigation a[href*=#'+containerID+']').addClass('selected');
									
				}
							
			} , { offset: '90px' });
			  	  
        });	
		
		/* Youtube WMODE
		================================================== */
		$('iframe').each(function() {
			
			var url = $(this).attr("src");
			
			if ( url!=undefined ) {
				
				var youtube   = url.search("youtube"),			
					splitable = url.split("?");
				
				/* url has already vars */	
				if( youtube > 0 && splitable[1] ) {
					$(this).attr("src",url+"&wmode=transparent")
				}
				
				/* url has no vars */
				if( youtube > 0 && !splitable[1] ) {
					$(this).attr("src",url+"?wmode=transparent")
				}
			
			}
			
		});
		
		/* Member POPUP
		================================================== */
		var current_member = null;
		$('.ut-show-member-details').click( function(event) { 
		
			event.preventDefault();	
			
			/* show overlay */
			$('.ut-overlay').addClass('ut-overlay-show');			
			
			/* execute animation to make member visible */
			$('#member_'+$(this).data('member')).addClass('ut-box-show').animate( {top: "15%" , opacity: 1 } , 1000 , 'easeInOutExpo' , function() {
				
				var offset  = $(this).offset().top,
					id		= $(this).data("id");
					
				/* now append clone to body */
				$(this).clone().attr("id" , id).css({"position" : "absolute" , "top" : offset , "padding-top" : 0}).appendTo("body").addClass("member-clone");
			
				/* store current member ID */
				$(this).removeClass('ut-box-show').css({ "top" : "30%" , "opacity" : "0" });				
								
			});			
					
		});
		
		$(document).on("click" , '.ut-hide-member-details, body:not(.member-social)' , function(event) {
			
            if( $('.ut-modal-box.member-clone').length ) {
            
			    event.preventDefault();
            
            }
			
			/* execute animation to make member invisible */
			$('.ut-modal-box.member-clone').animate({top: "0%" , opacity: 0 } , 600 , 'easeInOutExpo' ,function() {
				
				$(this).remove();
				
				/* hide overlay */
				$('.ut-overlay').removeClass('ut-overlay-show');				
				
			});
			
		});
		
		$(document).on("click" , '.ut-overlay' , function(event) {
			
			event.preventDefault();
			
			/* execute animation to make member invisible */
			$('.ut-modal-box.member-clone').animate({top: "0%" , opacity: 0 } , 600 , 'easeInOutExpo' ,function() {
				
				$(this).remove();
				
				/* hide overlay */
				$('.ut-overlay').removeClass('ut-overlay-show');				
				
			});
			
		});				
		
		/* FitVid
		================================================== */
		$(".ut-video, .entry-content").fitVids();
		
		
		/* Lightbox Effect
		================================================== */		
		$('.ut-lightbox').prettyPhoto({
			social_tools : false,
			markup: '<div class="pp_pic_holder"> \
						<div class="pp_top"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
						<div class="pp_content_container"> \
							<div class="pp_left"> \
							<div class="pp_right"> \
								<div class="pp_content"> \
									<div class="pp_loaderIcon"></div> \
									<div class="pp_fade"> \
										<a href="#" class="pp_expand" title="Expand the image">Expand</a> \
										<div class="pp_hoverContainer"> \
											<a class="pp_next" href="#">next</a> \
											<a class="pp_previous" href="#">previous</a> \
										</div> \
										<div id="pp_full_res"></div> \
										<div class="pp_details"> \
											<div class="pp_nav"> \
												<a href="#" class="pp_arrow_previous">Previous</a> \
												<p class="currentTextHolder">0/0</p> \
												<a href="#" class="pp_arrow_next">Next</a> \
											</div> \
											<p class="pp_description"></p> \
											<div class="ppt">&nbsp;</div> \
											{pp_social} \
											<a class="pp_close" href="#">Close</a> \
										</div> \
									</div> \
								</div> \
							</div> \
							</div> \
						</div> \
						<div class="pp_bottom"> \
							<div class="pp_left"></div> \
							<div class="pp_middle"></div> \
							<div class="pp_right"></div> \
						</div> \
					</div> \
					<div class="pp_overlay"></div>',

		});
		
		/* Split Screen Calculation
		================================================== */
		$(window).load(function() {
			$(".ut-split-screen-poster").each(function() {
				
				var parent_ID = $(this).data("posterparent"),
					newHeight = $("#"+parent_ID).height();
				
				$(this).height(newHeight);			
				
			});
			
		});
		
		$('.ut-btn[href^="#"]').click( function( event ) {
			
			$.scrollTo( $(this).attr('href') , ut_scrollspeed, {  easing: ut_scrolleffect , offset: -79 , 'axis':'y' } );
			event.preventDefault();
			
		});
		
		
	});
	
})(jQuery);
 /* ]]> */