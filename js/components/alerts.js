	
	
	/* ==========================================================================
	   Close Alerts
	   ========================================================================== */
		
		$(function() {
						
						
			growl( 'Testing Growl-style notifications', { duration: 20000 } );
			growl( 'WARNING!', { style: 'warning' } );
			growl( 'oh... $h*t...' , { style: 'error' } );
			growl( "hehe, not really.<br>Oh, and I'm sticky" , { style: 'info', sticky: true } );
		
			
			notify( "<strong>Danger, Will Robinson!</strong><br>There's someone behind you!" );
			notify( "<strong>not really!</strong>", { duration: 5000, sticky: false, style: 'info' } );
			notify( "DANGER!", { duration: 6000, sticky: false, style: 'error' } );
			notify( "we should congratulate people!", { duration: 15000, sticky: false, style: 'success' } );


		});

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
			
			
			var $alert = $('<div class="alert">'+ message +'</div>');
			var $close = $('<button type="button" class="close">×</button>').prependTo( $alert );
			var $img = $('<img class="icon">');
			
			
			switch( settings.style ) {
				
				case 'warning':
				
						$alert.addClass('yellow');	
						$img.attr('src', 'img/vendor/fugue/icons/exclamation.png' );
						break;
				
				case 'info':
				
						$alert.addClass('blue');	
						$img.attr('src', 'img/vendor/fugue/icons/question.png' );
						break;
				
				case 'error':
				
						$alert.addClass('red');	
						$img.attr('src', 'img/vendor/fugue/icons/exclamation-red.png' );
						break;
				
				case 'success':
				
						$alert.addClass('green');	
						$img.attr('src', 'img/vendor/fugue/icons/tick-circle.png' );
						break;
						
			}
			
			
			// apply the icon if we've set it
			if( settings.style != "alert" ) {
				$alert.prepend( $img );
			}
			
			
			if( $('.alertHolder').length > 0 ) {
				var $holder = $('.alertHolder');
			} else { 
				var $holder = $('<div class="alertHolder '+ settings.position +'"></div>').appendTo('body');
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
				sticky: true
			
			};
			
			$.extend( settings, options );
			
			
			var $notify = $('<div class="alert">'+ message +'</div>');
			var $close = $('<button type="button" class="close">×</button>').prependTo( $notify );
			var $img = $('<img class="icon">');
			
			
			switch( settings.style ) {
				
				case 'warning':
				
						$notify.addClass('yellow');	
						$img.attr('src', 'img/vendor/fugue/icons/exclamation.png' );
						break;
				
				case 'info':
				
						$notify.addClass('blue');	
						$img.attr('src', 'img/vendor/fugue/icons/question.png' );
						break;
				
				case 'error':
				
						$notify.addClass('red');	
						$img.attr('src', 'img/vendor/fugue/icons/exclamation-red.png' );
						break;
				
				case 'success':
				
						$notify.addClass('green');	
						$img.attr('src', 'img/vendor/fugue/icons/tick-circle.png' );
						break;
						
			}
			
			
			// apply the icon if we've set it
			if( settings.style != "alert" ) {
				$notify.prepend( $img );
			}
			
			
			if( $('.notifyHolder').length > 0 ) {
				var $holder = $('.notifyHolder');
			} else { 
				var $holder = $('<div class="notifyHolder"></div>').insertAfter( $('.content hr').first() );
			}
			
			$notify.appendTo( $holder ).addClass('animated fadeInDown');
			
			
			
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
							if( $holder.is(':empty') ) { $holder.remove(); }
							
						});
													
					}, 400 );					
				
				}, wait );
			
			};
			

			
			// dont remove if it's sticky.
			if( !settings.sticky ) {
				removeNotify( $notify, settings.duration );
			}
			
		};
		
	
	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		