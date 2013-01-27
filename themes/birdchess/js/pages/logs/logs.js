

	$(function() {
		
		
	/* ==========================================================================
	   notification for the flagged page.
	   ========================================================================== */
	   
		notify("Logs that seem important or were manually selected by an admin as 'flagged' are shown here.", { where: '#log-flagged', method:'prepend', style: 'warning' })

		
		
		
	/* ==========================================================================
	   fake showing the log id in the third tab
	   ========================================================================== */

		$('#logs-table .view, #logs-flagged-table .view').on('click',function() {
			
			$('#tab-logs-current a span').remove();
			$('#tab-logs-current a').enableTab().trigger('click').append( '<span>' + $(this).attr('href') + "</span>" );
			
		});		
		
		
		
		
		
		
		
	/* ==========================================================================
	   re-populate tables once the flag status has changed. update the object.
	   ========================================================================== */
		
		var howManyFlags = function() {
			var flags = 0;

			// find the flaggeds in the {logsData} object
			for(i=0;i<logsData.length;i++) {
				if( logsData[i].flagged ) {
					flags++;
				}
			}
			
			return flags;
			
		};
		
		// track the state-change of the flagged and unflagged items
		$('#logs-table, #logs-flagged-table').on('stateChange', '.state.flagged, .state.unflagged', function() {
			
			var $_this = $(this);
			var id = $_this.data('log-id');
			
			// find the item in the {logsData} object using the data-log-id
			for(i=0;i<logsData.length;i++) {
				if( logsData[i].id == id ) {
					// and flag it.
					logsData[i].flagged = $_this.is('.flagged');
				}
			}
			
			// us howManyFlags() function to populate the badge on tab.
			if( howManyFlags() == 0 ) {
			$('#tab-logs-flagged .badge').hide().text(howManyFlags());
			} else {
			$('#tab-logs-flagged .badge').show().text(howManyFlags());
			}
		});
		
		
		
	/* ==========================================================================
	   re-populate (update) tables when we navigate tabs.
	   ========================================================================== */

		$('.logs-tabs li:not(.disabled) a').on('click', function() {
			
			populateLogsTable();
			populateLogsFlaggedTable();
			
		});














		
		
		
	});