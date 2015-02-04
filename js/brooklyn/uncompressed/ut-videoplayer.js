;(function($){
	
	$(document).ready(function(){
		
        /* simple function to check if elements does exist */
        jQuery.fn.exists = function(){
            return this.length>0;
        }
                
        /* check if we have video players available */
        if( $(".ut-selfvideo-player").exists() ) {
            
            $(".ut-selfvideo-player").each(function() {
                
                var $videoplayer = $(this)[0],
                    playervolume = $(this).attr("volume") / 100;
                
                /* set volume */
                $videoplayer.volume=playervolume;                
                
            });
            
            $('.ut-video-control').not('.youtube').click( function( event ) {
                                                
                var player_id = $(this).data("for"),
                    $videoplayer = $('#'+player_id)[0];
                
                if( $(this).hasClass("ut-unmute") ) {
                                    
                    $videoplayer.muted=false;
                    $(this).removeClass("ut-unmute").addClass("ut-mute");
            
                } else {
                                    
                    $videoplayer.muted=true;
                    $(this).removeClass("ut-mute").addClass("ut-unmute");
                    
                }
                
                event.preventDefault();
                
            });            
            
        }            
        
	});
	
})(jQuery);
 /* ]]> */