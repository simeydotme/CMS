
	/* ==========================================================================
	   Jquery UI Defaults
	   ========================================================================== */
		
		$(function() {
			
			// Dialog needs a wrapper to run perspective CSS animations from.
			$('body').prepend('<div class="ui-dialog-perspective-wrapper"></div>');
			$.extend( $.ui.dialog.prototype.options, { 
				modal: true, draggable: false,
				open: 			function() { $(this).parents('.ui-dialog').removeClass('out').addClass('in') },
				beforeClose: 	function(event, ui) { $('.ui-dialog').removeClass('in').addClass('out'); } 
			});
			
					
			$.datepicker.setDefaults({ dateFormat: "yy-mm-dd", defaultDate: new Date(), showOn: 'both', buttonImage: "img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
			
			// only apply datepicker to desktop devices. Why? Mobiles have good datepickers.
			// not fool-proof, but pretty close.
			if( !Modernizr.touch || screen.width > 680 ) { 
				$('input[type=date]').datepicker(); $('[type=date]').each( function() {
					if ( $(this).val() == "" )
						$(this).datepicker('setDate', new Date());
				});
			}
			
			
			
			
		
		});
		
		
		
		
	/* ==========================================================================
	   Close Alerts
	   ========================================================================== */
		
		$(function() {
						
			$('.alert .close').on('click', function() { $(this).parents('.alert').fadeOut() });
						
		});
		
		
		
		
		
		
