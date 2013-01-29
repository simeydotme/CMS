	
	
	/* ==========================================================================
	   Avoid `console` errors in browsers that lack a console.
	   ========================================================================== */

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





		
	/* ==========================================================================
	   Override the default jQuery hide/show functions.
	   ========================================================================== */

		$.fn.xhide = function() {
			return $(this).each( function(k,v) {
				$(v).addClass('hidden');
			});
		};

		$.fn.xshow = function() {
			return $(this).each( function(k,v) {
				$(v).removeClass('hidden');
			});
		};


















