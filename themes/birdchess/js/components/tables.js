

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
		
			$('table').on('click', '.state', function(e) {
				
				e.preventDefault();
				var $this = $(this);
				
				$this.swapOutForSpinner();
				
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
					
					// swap the classes out for the flags
					$this.removeClass('flagged').addClass('unflagged');
					$this.parents('tr').removeClass('flagged').addClass('unflagged');
					
					// growl out hte result
					growl("Log has been <strong>unflagged</strong>", { style: "info", duration: 3000 });
				}
				
				else if( $this.is('.unflagged') ) { 
				
					// swap the classes out for the flags
					$this.removeClass('unflagged').addClass('flagged'); 
					$this.parents('tr').removeClass('unflagged').addClass('flagged'); 
					
					// growl out hte result
					growl("Log has been <strong>flagged</strong>", { style: "info", duration: 3000 })
				}


		/* ==========================================================================
		   Get rid of spinner
		   ========================================================================== */

				// timeout to simulate ajax call
				setTimeout( function() {
					
					$this.swapInForSpinner();
					
				}, 800);
				
				
				
				$this.trigger('stateChange');
				
			});
		
		
		
		});
		
		
		
		
		
		
		
		
		
		
		
