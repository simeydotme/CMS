			

	/* ==========================================================================
	  Simple function for zooming a preview image.
	   ========================================================================== */
		function imageZoom( $el ) {
			
			if( !$el.hasClass('open') ) {
				$el.addClass('open');
			} else {
				$el.removeClass('open');	
			}
			
		}