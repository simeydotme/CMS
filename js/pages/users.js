

	/* ==========================================================================
	  Javascript for the users page
	   ========================================================================== */


	$(function() {



		/* ==========================================================================
		 	Generate a username based off user's first and last names.
		   ========================================================================== */

			var generateUsername = function() {
				
				$fname = $('input.firstname');
				$sname = $('input.surname');
				$uname = $('input.username');
				
				// output is: "firstname.lastname" when user changes his name.
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
			
			}
			
			generateUsername();
			
			
			
			
			
			
		/* ==========================================================================
		 	Change the labels via CSS depending on slider value.
		   ========================================================================== */

			function sliderLabel( val ) { 
				
				var $slider = $('.ui-slider');
				var colors = 'red blue green purple dark';
				
				switch( val ) {
						
					case 4: 
						$('.permissionLevel .super').removeClass('out').addClass('in'); 
						$slider.removeClass(colors).addClass('red'); 
						break;
						
					case 3: 
						$('.permissionLevel .admin').removeClass('out').addClass('in'); 
						$slider.removeClass(colors).addClass('purple'); 
						break;
					
					case 2: 
						$('.permissionLevel .creator').removeClass('out').addClass('in'); 
						$slider.removeClass(colors).addClass('blue'); 
						break;
					
					case 1: 
						$('.permissionLevel .editor').removeClass('out').addClass('in'); 
						$slider.removeClass(colors).addClass('green'); 
						break;
					
					case 0: 
						$('.permissionLevel .peon').removeClass('out').addClass('in'); 
						$slider.removeClass(colors).addClass('dark'); 
						break;
					
				}
			
			};
			
			
			$('.ui-slider').slider({
				
				value: 1, min: 0, max: 4, range: 'min',
				slide: function( event, ui ) { 
					
					$('.permissionLevel').find('.super, .admin, .creator, .editor, .peon').not('.out').removeClass('in').addClass('out');
					
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

			// grant all priviledges to super admin.
			$('.super').on('click', function() {
				if( $(this).is(':checked') ) {
					$('.level1, .level2').prop('checked',true);
				} else {
					$('.level1, .level2').prop('checked',false);
				}
			});
			
			// grant all sub-priviledges to section-admin
			$('.level1').on('click', function() {

				var admin = $(this).attr('id');
				if( $(this).is(':checked') ) {
					$('.'+admin).prop('checked',true);
				} else {
					$('.'+admin).prop('checked',false);
				}
			
			});















		
	});