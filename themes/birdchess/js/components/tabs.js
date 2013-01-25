	/* ==========================================================================
	   Disabled / Enable Tabs
	   ========================================================================== */
		
		$(function() {
			
			// don't allow people to click disabled tabs
			$('[data-toggle]').parent('.disabled').find('a').on('click', function(e) { e.preventDefault(); });
			
			
			// helper function to disable tabs
			$.fn.disableTab = function() {
								
				return $(this).each( function() {
					
					var $_this = $(this);
					
					// allow targetting of the <li> or the <a>.
					if( $_this.is('a') ) { $_this = $_this.parent('li'); }
					
					// add disabled class, set data-toggle off
					$_this.addClass('disabled').children('a').attr('data-toggle','');
					
					if( $_this.hasClass('active') ) { 
						$_this.removeClass('active'); 
						$('.tab-pane.active').removeClass('active'); 
					}
						
				});
				
			}
			
			// helper function to enable tabs
			$.fn.enableTab = function() {
								
				return $(this).each( function() {
					
					var $_this = $(this);
					
					// allow targetting of the <li> or the <a>.
					if( $_this.is('a') ) { $_this = $_this.parent('li'); }
					
					// remove disabled class, set data-toggle on
					$_this.removeClass('disabled').children('a').attr('data-toggle','tab');
					
				});
				
			}
			
								
		});




	/* ==========================================================================
	   Trigger a tab if it's in the hash
	   ========================================================================== */
		
		$(function() {
			

			if( $('[data-toggle=tab]').length > 0 && window.location.hash != "" ) {
			
				var hash = window.location.hash;
				$('[href='+ hash +']').trigger('click').parents('[data-toggle=tab]').trigger('click');
			
			}			

		});