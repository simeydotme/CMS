	
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
								
				var tourdata = [
				   {
					  html: "Hello World"
				   },{
					  html: "Welcome to the Tour",
					  live: 5000,
					  delayIn: 500
				   }
				];
				var myTour = jTour(tourdata);
				myTour.start();
			});			
			
			
			
			
			
			
			
			
			
			
		});

