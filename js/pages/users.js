

	/* ==========================================================================
	  Javascript for the users page
	   ========================================================================== */


	$(function() {

			
			// generate a username based off user's first and last names.
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