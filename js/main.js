
	/* ==========================================================================
	   Jquery UI Defaults
	   ========================================================================== */
		
		$(function() {
			
			// set defaults for jquery ui widgets
			$.extend( $.ui.dialog.prototype.options, { width: 400, height: 160 });
			$.datepicker.setDefaults({ dateFormat: "yy-mm-dd", showOn: 'both', buttonImage: "img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
			
			// only apply datepicker to desktop devices.
			// not fool-proof, but pretty close.
			if( !Modernizr.touch || screen.width > 680 ) { $('input[type=date]').datepicker(); }
			
			
			
			
		
		});
		
		
		
		
	/* ==========================================================================
	   Close Alerts
	   ========================================================================== */
		
		$(function() {
						
			$('.alert .close').on('click', function() { $(this).parents('.alert').fadeOut() });
						
		});
		
		
		
		
		
		
