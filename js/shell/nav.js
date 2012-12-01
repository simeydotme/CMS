	
	
	/* ==========================================================================
	   Navigation Javascript
	   ========================================================================== */
		
	$(function() {
	
		$('nav .sub').hide();
		$('nav .item > a').on('click', function(e) {
			
			var $_this = $(this).parent('.item');
			
			// only collapse navigation if it's in wide-screen.
			if( $('nav').width() > 100 ) {
			
				// only prevent clicking on multi-level navigation
				if( $_this.find('.sub').length > 0 ) {
					e.preventDefault();
				}
				
				// if this item is active/expanded...
				if( $_this.hasClass('active') ) { 
					$_this.find('.sub').stop(true,true).slideUp();
					$_this.removeClass('active');
				} else { 
					$('nav .sub').not( $_this.find('.sub')).slideUp();
					$('nav .item').not( $_this ).removeClass('active');
					$_this.find('.sub').stop(true,true).slideDown();
					$_this.addClass('active');
				}
			
			
			}
			
		});
		
		
	});