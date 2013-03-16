

	/* ==========================================================================
	  Javascript for the personal options page
	   ========================================================================== */


	$(function() {






		/* ==========================================================================
		 	Generate a username based off user's first and last names.
		   ========================================================================== */


			$('#txtPassword').on('keyup', function() {
				
				var str = scorePassword( $(this).val() );
				var $pwBar = $('#passwordStrength .passwordStrength').css( 'width' , str + '%' );
				
				var color = "red";
				if( str > 20 && str <= 40 ) { color = "orange"; }
				else if( str >= 40 && str < 65 ) { color = "yellow"; }
				else if( str >= 65 && str < 85 ) { color = "green"; }
				else if( str >= 85 ) { color = ""; }
				
				$pwBar.removeClass("red orange yellow green").addClass(color);
				
			}).on('blur', function() {
				
				growl('clear');
				
				var str = scorePassword( $(this).val() );
				if( str < 30 ) {
					
					var message = "Your password doesn't satisfy complexity requirements, it must be more resistant to forcing. <hr><a href='http://en.wikipedia.org/wiki/Password_strength#Guidelines_for_strong_passwords' target='_blank'>Read about password strength and why it's important</a>";
					growl( message , { style: "error", sticky: true });
				}
				else if( str < 60 ) {
					
					var message = "Your password is quite weak, please increase it's compexity by adding <strong>some numbers</strong> or characters like: <strong>$ ! ? * ^ #</strong>";
					growl( message , { style: "warning", sticky: true });
				}
				
			});









		/* ==========================================================================
		 	Generate a username based off user's first and last names.
		   ========================================================================== */
			
			// self-executing function.
			window.generateUsername = (function reference(){
			
				$fname = $('input.firstname');
				$sname = $('input.surname');
				$uname = $('input.username');
				
				// output is: "firstname_lastname" when user changes his name.
				var create = function() {
					if( $uname.val() == "" ) {
						$fname.add( $sname ).on('change blur keyup', function() {
							
							// only add a spacer if the surname exists.
							var spacer;
							if( ($sname.val() != "") && ($fname.val() != "") ) { spacer = "_"; } else { spacer = ""; };
							$uname.val( $fname.val() + spacer + $sname.val() );
							
						});
					}
				};create(); 
				
				// but if the user edits the username, we don't want to overwrite anymore.
				$uname.on('keyup', function() {
					
					if( !$(this).val() == "" ) {
						$fname.add( $sname ).off('change blur keyup');
					} else {
						create();	
					}
					
				});
			
				return reference;
				//return the function itself to reference

			}());
			
			
			
			
			
			
		/* ==========================================================================
		 	Change the labels via CSS depending on slider value.
		   ========================================================================== */

			function sliderLabel( val ) { 
				
				var $slider = $('.ui-slider');
				
				$('.permissionLevel .level ').xhide();
				
				switch( val ) {
						
					case 4: 
						$('.permissionLevel .super').xshow(); 
						break;
						
					case 3: 
						$('.permissionLevel .admin').xshow(); 
						break;
					
					case 2: 
						$('.permissionLevel .creator').xshow();
						break;
					
					case 1: 
						$('.permissionLevel .editor').xshow();
						break;
					
					case 0: 
						$('.permissionLevel .peon').xshow(); 
						break;
					
				}
			
			};
			
			
			$('.ui-slider').slider({
				
				value: 1, min: 0, max: 4, range: 'min',
				slide: function( event, ui ) { 
					
					sliderLabel( ui.value );
				
				}
				
			});
			
			sliderLabel( $('.ui-slider').slider('value') );
			
			
			
			
		/* ==========================================================================
		 	Show more permissions
		   ========================================================================== */

			$('.show-more-permissions').on('click', function(e) {
				
				$('.more-permissions').slideDown();
				e.preventDefault();
				
			});


			
			
		/* ==========================================================================
		 	Tik box priviledge assignments
		   ========================================================================== */

			
			
			// grant all sub-priviledges to section-admin
			$('input.level1').on('change', function() {
				
				var admin = $(this).attr('id');
				if( $(this).is(':checked') ) {
					$('.'+admin).prop('checked',true).trigger('change');
				} else {
					$('.'+admin).prop('checked',false).trigger('change');
				}
			
			});















		
	});