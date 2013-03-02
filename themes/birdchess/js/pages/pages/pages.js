

	$(function() {
		
		
	/* ==========================================================================
	   notification for the flagged page.
	   ========================================================================== */
	   
		//notify("Logs that seem important or were manually selected by an admin as 'flagged' are shown here.", { where: '#log-flagged', method:'prepend', style: 'warning' })

		

		
		
	/* ==========================================================================
	   Activate and populate tabs
	   ========================================================================== */

		$('#pages-table').on('click', '.edit' ,function() {
			
			$('#tab-page-edit .page-name').html( '#' + $(this).data('page-id') + ' &mdash; ' + $(this).data('page-title') );
			$('#tab-page-edit a').enableTab().trigger('click');
			
		});		






	/* ==========================================================================
	   Tokens for Keywords field
	   ========================================================================== */

		$("#txtKeywords").select2({
			tags: "",
			tokenSeparators: [",", " "]
		});
		
		$("#txtKeywords").select2("container").find("ul.select2-choices").sortable({
			containment: 'parent',
			start: function() { $("#txtKeywords").select2("onSortStart"); },
			update: function() { $("#txtKeywords").select2("onSortEnd"); }
		});







		
		
		
	});