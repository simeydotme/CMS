
	/* ==========================================================================
	   Datepickers
	   ========================================================================== */
		
		$(function() {
			
			if( !Modernizr.touch ) {
			
				$('input[type=date]').datepicker({ dateFormat: "yy-mm-dd", showOn: 'both', buttonImage: "img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
				
			}
		
		});
		
	/* ==========================================================================
	   Close Alerts
	   ========================================================================== */
		
		$(function() {
						
			$('.alert .close').on('click', function() { $(this).parents('.alert').fadeOut() });
						
		});
		
		
		
		
		
		
