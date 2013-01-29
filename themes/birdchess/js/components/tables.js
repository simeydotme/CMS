

	/* ==========================================================================
	  	Collapse / Expand sections of tables
	   ========================================================================== */
		
		$(function() {
			
			var $section = $('tbody .section');
			
			$section.toggle( function() {
			
				$(this).nextAll('tr').xhide();
				$(this).find('td.collapse a').addClass('expand');
			
			}, function() {
			
				$(this).nextAll('tr').xshow();
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
				
				if( $this.hasClass('active') ) {
					// change it's state 
					$this.removeClass('active').addClass('inactive').text('Active');
					$this.parents('tr').removeClass('active').addClass('inactive');
					// trigger stateChange
					$this.trigger('stateChange', 'inactive'); 
					// growl out the result
					growl("Item has been set to <strong>inactive/hidden</strong>", { style: "warning", duration: 3000 });
				}
				
				else if( $this.hasClass('inactive') ) {
					// change it's state  
					$this.removeClass('inactive').addClass('active').text('Inactive');
					$this.parents('tr').removeClass('inactive').addClass('active');
					// trigger stateChange 
					$this.trigger('stateChange', 'active'); 
					// growl out the result
					growl("Item has been set to <strong>active/visible</strong>", { style: "warning", duration: 3000 });
				}
				
		/* ==========================================================================
		   Flagged States
		   ========================================================================== */

				else if( $this.hasClass('flagged') ) { 
					
					// swap the classes for the flags
					$this.removeClass('flagged').addClass('unflagged').text('Unflagged');
					$this.parents('tr').removeClass('flagged').addClass('unflagged');
					
					// trigger stateChange 
					$this.trigger('stateChange', 'unflagged'); 
					
					// growl out the result
					growl("Item has been <strong>unflagged</strong>", { style: "info", duration: 3000 });
				}
				
				else if( $this.hasClass('unflagged') ) { 
				
					// swap the classes for the flags
					$this.removeClass('unflagged').addClass('flagged').text('Flagged');; 
					$this.parents('tr').removeClass('unflagged').addClass('flagged'); 
					
					// trigger stateChange 
					$this.trigger('stateChange', 'flagged'); 
					
					// growl out the result
					growl("Item has been <strong>flagged</strong>", { style: "info", duration: 3000 });
				}


		/* ==========================================================================
		   Get rid of spinner
		   ========================================================================== */

				// timeout to simulate ajax call
				setTimeout( function() {
					
					$this.swapInForSpinner();
					
				}, 800);

				
				
			});
		
		
		
		});
		
		
		
		
		
		
		
		
		
		
		
