

	$(function() {
		
		
		
		
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



	/* ==========================================================================
	   Zoom the background image on click;
	   ========================================================================== */

		$('.background-image-preview').on('click', function() {
			imageZoom( $(this) );
		});





	/* ==========================================================================
	   Reset to defaults (show dialog)
	   ========================================================================== */


		$('button.reset').on('click', function(e) {
			
			e.preventDefault();
			var $confirm = $('#dialog-pages-reset');
			
			$confirm.dialog({
				
				modal: true,
				buttons: {
					
					"ok": {
					  text:'Yes', class:'btn alt',
					  click: function() { $(this).animateDialogClose(); }
					},
					"cancel": {
					  text:'Cancel', class:'btn',
					  click: function() { $(this).animateDialogClose(); }
					}
				}
				
			}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');;
			
	
		});





		
		
		
	});