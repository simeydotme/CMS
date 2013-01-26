

	$(function() {
		
		
	/* ==========================================================================
	   notification for the flagged page.
	   ========================================================================== */
	   
		notify("Logs that seem important or were manually selected by an admin as 'flagged' are shown here.", { where: '#log-flagged', method:'prepend', style: 'warning' })

		
		
		
	/* ==========================================================================
	   fake showing the log id in the tab
	   ========================================================================== */

		$('#logs-table .view, #logs-flagged-table .view').on('click',function() {
			
			$('#tab-logs-current a span').remove();
			$('#tab-logs-current a').enableTab().trigger('click').append( '<span>' + $(this).attr('href') + "</span>" );
			
		});		
		
		
		
		
		
	});