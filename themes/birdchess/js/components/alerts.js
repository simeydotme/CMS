	
	
	/* ==========================================================================
	   Alerts
	   ========================================================================== */
		



		var alertImages = {
			
			warning: 	window.cms.theme+"/img/vendor/fugue/icons/exclamation.png",
			error:		window.cms.theme+"/img/vendor/fugue/icons/exclamation-red.png",
			info:		window.cms.theme+"/img/vendor/fugue/icons/question.png",
			success:	window.cms.theme+"/img/vendor/fugue/icons/tick-circle.png",
			
		};






	/* ==========================================================================
	   Growl-style Alerts function.
	   ========================================================================== */

		function growl( message, options ) {
	
			var settings = {
			
				duration: 8000,
				style: 'alert',
				position: 'top-right',
				sticky: false
			
			};
			
			$.extend( settings, options );
			
			
			var $alert = $('<div class="alert growl">'+ message +'</div>');
			var $close = $('<button type="button" class="close">×</button>').prependTo( $alert );
			var $img = $('<img class="icon">');
			
			
			switch( settings.style ) {
				
				case 'warning':
				
						$alert.addClass('yellow');	
						$img.attr('src', alertImages.warning );
						break;
				
				case 'info':
				
						$alert.addClass('blue');	
						$img.attr('src', alertImages.info );
						break;
				
				case 'error':
				
						$alert.addClass('red');	
						$img.attr('src', alertImages.error );
						break;
				
				case 'success':
				
						$alert.addClass('green');	
						$img.attr('src', alertImages.success );
						break;
						
			}
			
			
			// apply the icon if we've set it
			if( settings.style != "alert" ) {
				$alert.prepend( $img );
			}
			
			
			if( $('.growlHolder').length > 0 ) {
				var $holder = $('.growlHolder');
			} else { 
				var $holder = $('<div class="growlHolder '+ settings.position +'"></div>').appendTo('body');
			}
			
			$alert.appendTo( $holder ).addClass('animated flipInX');
			
			
			
			// close the growl if we chose to.
			$close.on('click', function(e) {
				e.preventDefault();
				removeAlert( $alert, 100 );
			});
			
			
			
			// function to handle removing the alert
			var removeAlert = function( $what, wait ) {
				
				// first timeout handles main timing of event.
				setTimeout( function() { 
					
					// css animate the fade out.
					$what.removeClass('flipInX').addClass('fadeOutUp');
					
					// second timeout to wait for css animation
					setTimeout( function() { 
						
						// slide up and remove the growl (looks nicer)
						$what.slideUp( function() {
							 
							$what.remove(); 
							if( $holder.is(':empty') ) { $holder.remove(); }
							
						});
													
					}, 400 );					
					
				}, wait );
			
			};
			
			// dont remove if it's sticky.
			if( !settings.sticky ) {
				removeAlert( $alert, settings.duration );
			}
			
		};
		
	
	
		
		
		
		
		
		
		
		
		
		
	/* ==========================================================================
	   Notify function.
	   ========================================================================== */

		function notify( message, options ) {
	
			var settings = {
			
				duration: 10000,
				style: 'alert',
				sticky: true,
				where: '.page-header',
				method: 'append' // before / after / append / prepend
			
			};
			
			$.extend( settings, options );
			
			
			var $notify = $('<div class="alert notify animated fadeInDown">'+ message +'</div>');
			var $close = $('<button type="button" class="close">×</button>').prependTo( $notify );
			var $img = $('<img class="icon">');
			
			
			switch( settings.style ) {
				
				case 'warning':
				
						$notify.addClass('yellow');	
						$img.attr('src', alertImages.warning );
						break;
				
				case 'info':
				
						$notify.addClass('blue');	
						$img.attr('src', alertImages.info );
						break;
				
				case 'error':
				
						$notify.addClass('red');	
						$img.attr('src', alertImages.error );
						break;
				
				case 'success':
				
						$notify.addClass('green');	
						$img.attr('src', alertImages.success );
						break;
						
			}

			
			
			// apply the icon if we've set it
			if( settings.style != "alert" ) {
				$notify.prepend( $img );
			}
			
			
			
			
			switch( settings.method ) {
			
				case 'append':
				
						$notify.appendTo( $( settings.where ) );
						break;
						
				case 'prepend':
				
						$notify.prependTo( $( settings.where ) );
						break;
						
				case 'after':
				
						$notify.insertAfter( $( settings.where ) );
						break;
						
				case 'before':
				
						$notify.insertBefore( $( settings.where ) );
						break;
						
				default:
				
						$notify.appendTo( $( settings.where ) );
			}
			
			
			
			// close the growl if we chose to.
			$close.on('click', function(e) {
				e.preventDefault();
				removeNotify( $notify, 100 );
			});
			
			
			
			// function to handle removing the notify
			var removeNotify = function( $what, wait ) {
				
				setTimeout( function() { 
					
					// css animate the fade out.
					$what.removeClass('fadeInDown').addClass('fadeOutUp');
					
					// second timeout to wait for css animation
					setTimeout( function() { 
						
						// slide up and remove the growl (looks nicer)
						$what.slideUp( function() {
							 
							$what.remove();
							
						});
													
					}, 400 );					
				
				}, wait );
			
			};
			

			
			// dont remove if it's sticky.
			if( !settings.sticky ) {
				removeNotify( $notify, settings.duration );
			}
			
		};
		
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		