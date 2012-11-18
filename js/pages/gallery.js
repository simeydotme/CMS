

	$(function() {
		
		
		$('#button-upload').on('click', function(e) {

			$('#tab-gallery-upload a').trigger('click');
			e.preventDefault();
		
		});
		
		
		
		
		
		
		




		// make the gallery sortable

		$('.gallery-wrapper').sortable({ 
			items: 			'.thumbnail',
			placeholder: 	'placeholder',
			forcePlaceholderSize: true
			
		});

		// this returns the order of the gallery items.

		var saveGalleryState = function() {
		
			var $gallery = $('.gallery-wrapper');
			var stack = {};
			
			$gallery.find('.thumbnail').each( function() {
			
				var $_this = $(this);
				var id = $_this.data('id');
				var position = $_this.index()+1;
				
				stack[id] = position;
			
			});
			
			return stack;
		
		}


		
		
	});