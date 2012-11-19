
	/* ==========================================================================
	   Jquery UI Defaults
	   ========================================================================== */
		
		$(function() {
			
			
			$.extend( $.ui.dialog.prototype.options, { width: 400, height: 160 });
			//$.extend( $.ui.datepicker.prototype.options, { dateFormat: "yy-mm-dd", showOn: 'both', buttonImage: "img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
			$.datepicker.setDefaults({ dateFormat: "yy-mm-dd", showOn: 'both', buttonImage: "img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
			
			if( !Modernizr.touch ) {
			
				$('input[type=date]').datepicker();
				
			}
			
			
			
			
		
		});
		
		
		
		
	/* ==========================================================================
	   Close Alerts
	   ========================================================================== */
		
		$(function() {
						
			$('.alert .close').on('click', function() { $(this).parents('.alert').fadeOut() });
						
		});
		
		
		
		
		
		
