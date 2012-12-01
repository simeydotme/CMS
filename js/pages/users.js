

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
							$uname.val( $fname.val() +'.'+ $sname.val() );
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
		
		
	});