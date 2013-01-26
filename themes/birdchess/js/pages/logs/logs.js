

	$(function() {
		
	/* ==========================================================================
	   fake showing the log id in the tab
	   ========================================================================== */

		$('#logs-table .view, #logs-flagged-table .view').on('click',function() {
			
			$('#tab-logs-current a span').remove();
			$('#tab-logs-current a').enableTab().trigger('click').append( '<span>' + $(this).attr('href') + "</span>" );
			
		});		

		
		
	});