/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );


;(function($){
	
	$(document).ready(function(){
        
        var support = { animations : Modernizr.cssanimations },
		
        animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation'      : 'oAnimationEnd',
			'msAnimation'     : 'MSAnimationEnd',
			'animation'       : 'animationend'
		},
        
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		$slider     = $( '#ut-fancy-slider' ),
		$slides     = $( 'ul.ut-fancy-slides' ).children(),
        current     = 0,
		itemsCount  = $slides.length,
		$nav        = $slider.find( 'nav' ),
		$navNext    = $nav.find( '.next' ),
		$navPrev    = $nav.find( '.prev' ),
		isAnimating = false;
                
        function init() {
                        
            $navNext.click(function(event){
                
                navigate( 'next' );                
                event.preventDefault();
                
            });
            
            $navPrev.click(function(event){
                
                navigate( 'prev' );                
                event.preventDefault();
                
            });		

        }
            
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
            }
            else {
                onEndAnimationCurrentItem();
                onEndAnimationNextItem();
            }
    
            classie.addClass( currentItem, dir === 'next' ? 'navOutNext' : 'navOutPrev' );
            classie.addClass( nextItem, dir === 'next' ? 'navInNext' : 'navInPrev' );
            
        }
        
        
        init();        
        
    });
	
})(jQuery);