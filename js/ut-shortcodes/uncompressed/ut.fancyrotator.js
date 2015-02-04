(function ( $ ) {
    
    $.fn.utfancyrotate = function( options ) {
        
        var settings = $.extend({
            effect : 'fxSlideForward'
        }, options );
        
        return this.each(function() {
            
            var support = { animations : Modernizr.cssanimations },
		
                animEndEventNames = {
                    'WebkitAnimation' : 'webkitAnimationEnd',
                    'OAnimation'      : 'oAnimationEnd',
                    'msAnimation'     : 'MSAnimationEnd',
                    'animation'       : 'animationend'
                },
        
		        animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
                $slides     = $(this).find('ul').children(),
                current     = 0,
                itemsCount  = $slides.length,
                $nav        = $(this).find( 'nav' ),
                $navNext    = $nav.find( '.next' ),
                $navPrev    = $nav.find( '.prev' ),
                isAnimating = false;
            
            $navNext.click(function(event){
                                
                navigate( 'next' );                
                event.preventDefault();
                
            });
            
            $navPrev.click(function(event){
                               
                navigate( 'prev' );                
                event.preventDefault();
                
            });		
            
            function navigate( dir ) {
                                
                if( isAnimating ) return false;
                isAnimating = true;
                
                var cntAnims = 0;
                var currentItem = $slides[ current ];
        
                if( dir === 'next' ) {
                    current = current < itemsCount - 1 ? current + 1 : 0;
                }
                else if( dir === 'prev' ) {
                    current = current > 0 ? current - 1 : itemsCount - 1;
                }
        
                var nextItem = $slides[ current ];
                                
                var onEndAnimationCurrentItem = function() {
                    
                    this.removeEventListener( animEndEventName, onEndAnimationCurrentItem );
                    classie.removeClass( this, 'current' );
                    classie.removeClass( this, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
                    ++cntAnims;
                    if( cntAnims === 2 ) {
                        isAnimating = false;
                    }
                    
                }
        
                var onEndAnimationNextItem = function() {
                    
                    this.removeEventListener( animEndEventName, onEndAnimationNextItem );
                    classie.addClass( this, 'current' );
                    classie.removeClass( this, dir === 'next' ? 'navInNext' : 'navInPrev' );
                    ++cntAnims;
                    if( cntAnims === 2 ) {
                        isAnimating = false;
                    }
                    
                }
        
                if( support.animations ) {

                    currentItem.addEventListener( animEndEventName, onEndAnimationCurrentItem );
                    nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
                
                } else {
                
                    onEndAnimationCurrentItem();
                    onEndAnimationNextItem();
                    
                }
        
                classie.addClass( currentItem, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
                classie.addClass( nextItem, dir === 'next' ? 'navInNext' : 'navInPrev' );            
            
            }
            
            
        });
        
    };
    
}( jQuery ));