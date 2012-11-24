

	$(function() {

		
			
			var generateUsername = function() {
				
				$fname = $('input.firstname');
				$sname = $('input.surname');
				$uname = $('input.username');
				
				if( $uname.val() == "" ) {
					$fname.add( $sname ).on('change blur keyup', function() {
						$uname.val( $fname.val() +'.'+ $sname.val() );
					});
				}
			
			}
			
			generateUsername();
		
		
	});