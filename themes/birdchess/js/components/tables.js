

	/* ==========================================================================
	  	Collapse / Expand sections of tables
	   ========================================================================== */
		
		$(function() {
			
			var $section = $('tbody .section');
			//$section.nextAll('tr').hide();
			
			$section.toggle( function() {
			
				$(this).nextAll('tr').hide();
				$(this).find('td.collapse a').addClass('expand');
			
			}, function() {
			
				$(this).nextAll('tr').show();
				$(this).find('td.collapse a').removeClass('expand');
			
			});
		
		});




		$(function() {
		
		
	/* ==========================================================================
	   This function shows tiny spinner in place of 'states' in main tables.
	   ========================================================================== */

			$('.state').on('click', function(e) {
				
				e.preventDefault();
				
				var $this = $(this).hide();
				var $i = $('<i class="spinner tiny"></i>');
				
				$this.after( $i );
				
		/* ==========================================================================
		   Active States
		   ========================================================================== */
				
				if( $this.is('.active') ) { 
					$this.removeClass('active').addClass('inactive'); 
				}
				
				else if( $this.is('.inactive') ) { 
					$this.removeClass('inactive').addClass('active'); 
				}
				
		/* ==========================================================================
		   Flagged States
		   ========================================================================== */

				else if( $this.is('.flagged') ) { 
					$this.removeClass('flagged').addClass('unflagged');
					$this.parents('tr').removeClass('flagged').addClass('unflagged');
				}
				
				else if( $this.is('.unflagged') ) { 
					$this.removeClass('unflagged').addClass('flagged'); 
					$this.parents('tr').removeClass('unflagged').addClass('flagged'); 
				}


		/* ==========================================================================
		   Get rid of spinner
		   ========================================================================== */

				// timeout to simulate ajax call
				setTimeout( function() {
					
					$i.fadeOut( function() { $this.fadeIn(); $i.remove(); });
					
				}, 800);
				
			});
		
		
		
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
