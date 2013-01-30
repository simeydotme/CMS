	
	
	/* ==========================================================================
	  Custom Checkbox
	   ========================================================================== */
		

		$.fn.chkbox = function() {
		  
			return $(this).each( function(k,v) {
			
				var $this = $(v);
				if( $this.is(':checkbox') ) {
				 	
					// create HTML for the new checkbox.
					var $l = $('<label for="'+$this.attr('id')+'" class="chkbox"></label>');
					var $y = $('<span class="yes">&#10003;</span>');
					var $n = $('<span class="no">&#10060;</span>');
					var $t = $('<span class="toggle"></span>');
					
					// insert the HTML in before the checkbox.
					$l.append( $y, $n, $t ).insertBefore( $this );
					$this.addClass('replaced');
					
					// check if the checkbox is checked, apply styling. trigger focus.
					$this.on('change', function() {
					
						if ($this.is(':checked')) {  $l.addClass('on'); }
						else { $l.removeClass('on'); }
						
						$this.trigger('focus');
					
					});
					
					$this.on('focus', function() { $l.addClass('focus') });
					$this.on('blur', function() { $l.removeClass('focus') });
					
					
					
					
					// check if the checkbox is checked on init.
					if ($this.is(':checked')) {  $l.addClass('on'); }
					else { $l.removeClass('on'); }
				  
				}
			
			});
	
		}; 
		$(':checkbox').chkbox();
		

