// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.




	/* ==========================================================================
	   Disabled / Enable Tabs
	   ========================================================================== */
		
		$(function() {
			
			$('[data-toggle]').parent('.disabled').find('a').on('click', function(e) { e.preventDefault(); });
			
			$.fn.disableTab = function() {
								
				return $(this).each( function() {
					
					var $_this = $(this);
					$_this.attr('data-toggle','').parents('li').addClass('disabled');
					
				});
				
			}
			
			$.fn.enableTab = function() {
								
				return $(this).each( function() {
					
					var $_this = $(this);
					$_this.attr('data-toggle','tab').parents('li').removeClass('disabled');
					
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
























