		
		
		/* ==========================================================================
		   Tiny functions to replace a table-state icon with a spinner.
		   ========================================================================== */

		$.fn.swapOutForSpinner = function() {
			
			return $(this).each( function(k,v) {
				
				var $_this = $(v).hide();
				var $i = $('<i class="spinner tiny"></i>');
				
				$_this.after( $i );
				
			});
			
		};
		
		$.fn.swapInForSpinner = function() {
			
			return $(this).each( function(k,v) {
				
				var $_this = $(v)
				var $i = $_this.next('.spinner');
				$i.fadeOut( function() { $_this.fadeIn(); $i.remove(); });
				
			});
			
		};
		
