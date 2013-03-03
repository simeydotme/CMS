	
	/* ==========================================================================
	   Set the theme for the CMS
	   ========================================================================== */

		window.cms = { theme: "themes/birdchess" };
	
	


		$(function() {
			
			
			
		/* ==========================================================================
		   Init the Joyride when user clicks.
		   ========================================================================== */

			$('#take-a-tour').on('click', function(e) {
				e.preventDefault();
								
				$("#settings-joyride").joyride({
					tiplocation: 'left',
					template: {
						'button'  : '<span href="#" class="joyride-next-tip btn green"></span>'
					}
				});
			});			
			
			
			
			
			
			
			
			
			
			
		});

