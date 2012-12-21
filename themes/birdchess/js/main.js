	
	
	window.cms = { theme: "themes/birdchess" };
	
	
($(function() {
		
		
	/* ==========================================================================
	   This function shows tiny spinner in place of 'visible' in main tables.
	   ========================================================================== */
				
		$('.state.active, .state.inactive').on('click', function(e) {
			
			e.preventDefault();
			
			var $this = $(this).hide();
			var $i = $('<i class="spinner tiny"></i>');
			
			$this.after( $i );
			
			if( $this.is('.active') ) { $this.removeClass('active').addClass('inactive'); }
			else if( $this.is('.inactive') ) { $this.removeClass('inactive').addClass('active'); }
			
			// timeout to simulate ajax call
			setTimeout( function() {
				
				$i.fadeOut( function() { $this.fadeIn(); });
				
			}, 800);
			
		});
		
		
		
}));





