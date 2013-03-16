

	$(function() {
		
		
		
		
	/* ==========================================================================
	   Activate and populate tabs
	   ========================================================================== */

		$('#blog-table').on('click', '.edit' ,function() {
			
			$('#tab-blog-edit .blog-name').html( '#' + $(this).data('blog-id') + ' &mdash; ' + $(this).data('blog-title') );
			$('#tab-blog-edit a').enableTab().trigger('click');
			
		});		





		
		
		
	});