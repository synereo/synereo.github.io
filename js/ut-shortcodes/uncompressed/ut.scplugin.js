/* <![CDATA[ */
(function($){
	
	"use strict";
	
    $(document).ready(function(){
                
		/* FitVid
		================================================== */
		$(".ut-video").fitVids();
        
        
        /* Video Testimonials Player Call
		================================================== */
        function create_id() {
             return '-' + Math.random().toString(36).substr(2, 9);
        }
        
        function ut_load_video_player(url, uniqueID, callback){
            
            if( !url ) {
		        return;
			}
                        
            var ajaxURL = utShortcode.ajaxurl;            
            
            $.ajax({
              
              type: 'POST',
              url: ajaxURL,
              data: {"action": "ut_get_video_player", "video" : url },
              success: function(response) {                  
                  $('#ut-video-testimonial'+uniqueID).hide().html(response).fitVids().show("fast");
                  return false;                  
              },
              complete : function() {
			        			
                  if (callback && typeof(callback) === "function") {   
                      callback();  
                  }
						
			  }
					
			});
        
        }
        
        function create_unique_prettyphoto(url,$testimonial) {
            
            if( !url ) {
		        return;
			}
            
            var uniqueID = create_id(),
                div = '<div id="ut-video-testimonial'+uniqueID+'"></div>';
            
            $testimonial.prettyPhoto({
                custom_markup: div,
                allow_resize: true,
                social_tools: '',
                changepicturecallback: function(){ 
                    ut_load_video_player(url, uniqueID, function() { 
                    
                    }); 
                }
            });
        
        }
        
        $(".ut-load-vtestimonial").each(function(){
            
            var url = $(this).find('div').html();                     
            create_unique_prettyphoto(url,$(this));
         
        });
                		
		/* Animated Skillbar
		================================================== */
		$(".ut-skill-active").each(function(i, el){
			
			var el = $(el),
				bar_width = el.data('width');
			
			if ( el.visible(true) && !el.hasClass('ut-already-visible') ) {
			
				el.stop(true, true).animate({width : bar_width+"%"} , 1000 );
				
				el.addClass('ut-already-visible');
			
			}
				
		});
		
		/* Milestone Counter - animate when visible on load
		================================================== */		
		$('.ut-counter').each(function(i, el){
									
			var counter = $(el).data('counter');
			
			if ( $(el).visible(true) && !$(el).hasClass('ut-already-counted') ) {
							
				setTimeout ( function () {
				
					$(el).addClass('ut-already-counted');
											
					$(el).find('.ut-count').countTo({
						from: 0,
						to: counter,
						speed: 2000,
						refreshInterval: 100
					});
				
				}, 1000 );
					
			}
			
		});	
		
				
		var win 		= $(window),
			allMods 	= $(".ut-animate-image, .ut-counter, .ut-skill-active");
		
		/* element effects
		================================================== */
		$('.ut-animate-element').appear(function() {
			
			var effect = $(this).data('effect');
			
			$(this).delay(200).queue( function() {
				
				$(this).removeClass('ut-animate-element').addClass( effect );
				
			});
			
			  		  
		});
				
		/* Image already visible when page is loaded
		================================================== */
	    $(".ut-animate-image").each(function(i, el) {
			
			if ($(el).visible(true)) {
				
				var el = $(el),
					effecttype = el.data('effecttype');
				
				if( effecttype === 'image' ) {
					
					var effect = el.data('effect');
					
					if ( el.visible(true) ) {
				  
						el.addClass( effect ); 
					  
					}  else {
				  
					  	el.removeClass( effect + " ut-already-visible" );
					  
					}
					
					
				}
				
			}
			  
		});
			
		
		/* Run Site Effect Animation
		================================================== */
		win.scroll( function(event) {
		
			allMods.each(function(i, el) {
				
				var el = $(el),
					effecttype = el.data('effecttype');
				
				if( effecttype === 'image' ) {
					
					var effect = el.data('effect');
					
					if ( el.visible(true) && !el.hasClass( effect ) ) {
				  		
						el.addClass( effect ); 
					  
					}  else if( !el.visible(true) ) {
				  
					  	el.removeClass( effect );
					  
					}
					
				}
				
				if( effecttype === 'skillbar' ) {
					
					var bar_width = el.data('width');
			
					if ( el.visible(true) && !el.hasClass('ut-already-visible') ) {
						
						el.addClass("ut-already-visible");
						el.stop(true, true).animate({width : bar_width+"%"} , 1000 );
					
					} else if( !el.visible(true) ) {
				  
					  	el.removeClass("ut-already-visible");
						el.css("width" , 0);
					  
					}
					
				}
				
				if( effecttype === 'counter') {
				
					var counter = el.data('counter');
					
					if ( el.visible(true) && !$(el).hasClass('ut-already-counted') ) {
				  		
						el.addClass('ut-already-counted');
						
						el.find('.ut-count').countTo({
							from: 0,
							to: counter,
							speed: 2000,
							refreshInterval: 100
						});
					  
					}
				
				}
				
			});
			  
		});
		
    });
	
	
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
	
	
})(jQuery);
 /* ]]> */