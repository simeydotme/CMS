	
	
	/* ==========================================================================
	   Jquery UI Defaults
	   ========================================================================== */
		
		$(function() {
			
			
			// Dialog needs a wrapper to run perspective CSS animations from.
			$('body').prepend('<div class="ui-dialog-perspective-wrapper"></div>');
			$.extend( $.ui.dialog.prototype.options, { 
				modal: true, draggable: false,
				open: function() { $(this).parents('.ui-dialog').removeClass('out').addClass('in') }
			}); 
			
			// function to close dialog using css animations.
			$.fn.animateDialogClose = function() {
				var $dialog = $(this);
					$dialog.parents('.ui-dialog').removeClass('in').addClass('out');
					setTimeout( function() { $dialog.dialog('close'); }, 500);
					
				return $dialog;
					
			};
			
			
			
			
			
			
			
			
			// defaults for datepicker
			$.datepicker.setDefaults({ dateFormat: "dd/mm/yy", defaultDate: new Date(), showOn: 'both', buttonImage: window.cms.theme + "/img/vendor/fugue/icons/calendar-month.png", buttonImageOnly: true });
			
			// only apply datepicker to desktop devices. Why? Mobiles have good datepickers.
			// not fool-proof, but pretty close.
			if( !Modernizr.touch || screen.width > 680 ) { 
				$('input[type=date], input.date').datepicker().each( function() {
					
					if ( $(this).val() == "" )
						$(this).datepicker('setDate', new Date());
						
				});
			}
			
			
			
			
			
			
			$.extend( $.ui.slider.prototype.options, {
				 animate: true
			});
			
			// create sliders
			//$('.ui-slider').slider();







			// apply tooltips to any element with 'class=tooltip'
			// dont do it on touchscreens.
			if( !Modernizr.touch ) {
				
				$.fn.qtip.defaults = $.extend(true, {}, $.fn.qtip.defaults, {
					attr: 'title',
					position: { viewport: true, my: 'top center', at: 'bottom center', adjust: { y: 5, x: 5 } },
					style: { tip: { corner: true, width: 10 } },
					show: { event: 'mouseenter focus' },
					hide: { event: 'blur unfocus mouseleave' }
				});
			
				$('.tooltip').qtip();
				
			};
			
			
			
			
			
			
			
			
			
			
		
		});
		
		
		
		
		
		
		
		
		
		