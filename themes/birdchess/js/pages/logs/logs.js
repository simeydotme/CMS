

	$(function() {
		
		
	/* ==========================================================================
	   notification for the flagged page.
	   ========================================================================== */
	   
		notify("Logs that seem important or were manually selected by an admin as 'flagged' are shown here.", { where: '#log-flagged', method:'prepend', style: 'warning' })

		
		
		
	/* ==========================================================================
	   fake showing the log id in the third tab
	   ========================================================================== */

		$('#logs-table , #logs-flagged-table').on('click', '.view' ,function() {
			
			$('#tab-logs-current a span').remove();
			$('#tab-logs-current a').enableTab().trigger('click').append( '<span>' + $(this).attr('href') + "</span>" );
			
		});		
		
		
		
		
		
		
		
	/* ==========================================================================
	   re-populate tables once the flag status has changed. update the object.
	   ========================================================================== */
		
		
		// count and return the number of flagged logs.
		// this would usually be done via an ajax call to php.
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
		
		
		var colorTimer;
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
			
			
			
			var $badge = $('#tab-logs-flagged .badge');
			
			// use howManyFlags() function to populate the badge on tab.
			if( howManyFlags() == 0 ) {
				$badge.xhide().text(howManyFlags());
			} else {
				
				// remove the colors and the timer.
				$badge.removeClass( 'red green' );
				clearTimeout( colorTimer );
				
				// add the color red if we flagged a new item, add green if we removed a flag.
				// also reset color after 1 second.
				if( howManyFlags() > parseInt( $badge.text() ) ) { $badge.addClass('red'); } 
				else { $badge.addClass('green'); }
				colorTimer = setTimeout( function() { $badge.removeClass('red green'); }, 1000 );
				
				$badge.xshow().text(howManyFlags());				
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