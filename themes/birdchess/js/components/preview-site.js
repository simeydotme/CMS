	
	
	/* ==========================================================================
	   For creating the site preview pane.
	   ========================================================================== */
		
	$(function() {
		
		
		
		
		$.fn.previewSite = function( src ) {
			
			var $this = $(this);
			var $frame = $('<iframe src="'+src+'" class="site-preview-pane">');
			var $overlay = $('<div class="ui-widget-overlay"></div>');
			
			$this.append( $overlay );
			$('.ui-dialog-perspective-wrapper').append( $frame );
			
			$frame.css({ 
				'height' : $(window).height() + 100
			});
			
			$('#container').addClass('blur');
			
			$frame.delay(400).addClass('in-view');
			
			
			
			$overlay.on('click', function() {
				
				$frame.removeClass('in-view');
				$('#container').removeClass('blur');
				$(this).fadeOut( function() { $overlay.remove(); $frame.remove(); });
				
			});
			
		
		};

		
		
		
	});



					
					
					
					
					
					
					
					
					
					