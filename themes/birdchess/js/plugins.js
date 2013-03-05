	
	
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
	   $.browser was removed from jQuery. Still need it.
	   ========================================================================== */

	/*	(function( jQuery, window, undefined ) {
		"use strict";
		 
		var matched, browser;
		 
		jQuery.uaMatch = function( ua ) {
		  ua = ua.toLowerCase();
		 
			var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
				/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
				/(msie) ([\w.]+)/.exec( ua ) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
				[];
		 
			return {
				browser: match[ 1 ] || "",
				version: match[ 2 ] || "0"
			};
		};
		 
		matched = jQuery.uaMatch( window.navigator.userAgent );
		browser = {};
		 
		if ( matched.browser ) {
			browser[ matched.browser ] = true;
			browser.version = matched.version;
		}
		 
		// Chrome is Webkit, but Webkit is also Safari.
		if ( browser.chrome ) {
			browser.webkit = true;
		} else if ( browser.webkit ) {
			browser.safari = true;
		}
		 
		jQuery.browser = browser;
		 
		})( jQuery, window );*/



		
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


















