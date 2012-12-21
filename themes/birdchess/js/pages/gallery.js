

	$(function() {
		
		window.gallery = {};
		
		
		$('#gallery-table .edit').on('click',function() {
			
			$('#tab-gallery-edit a').enableTab().trigger('click');
			
		});
		
		
		$('#button-upload').on('click', function(e) {

			$('#tab-gallery-upload a').trigger('click');
			e.preventDefault();
		
		});
		
		
		
		
		
		
		
		
		$('#gallery-table .delete').on('click', function() {
			
			var $confirm = $('#dialog-deletegallery');
			var $galleryRow = $(this).parents('tr');
			
			$confirm.dialog({
				
				buttons: {
					
					"ok": {
					  text:'Ok', class:'btn red',
					  click: function() { $galleryRow.fadeOut().attr('data-destroy','_destroy'); $(this).animateDialogClose(); }
					},
					"cancel": {
					  text:'Cancel', class:'btn',
					  click: function() { $(this).animateDialogClose(); }
					}
				}
				
			}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');
			
			
		});
		

		$('#button-saveorder').on('click', function() {
			
			var $confirm = $('#dialog-saveorder');
			
			$confirm.dialog({
				
				modal: true,
				buttons: {
					
					"ok": {
					  text:'Ok', class:'btn red',
					  click: function() { gallery.sendGalleryState(); $(this).animateDialogClose(); }
					},
					"cancel": {
					  text:'Cancel', class:'btn',
					  click: function() { $(this).animateDialogClose(); }
					}
				}
				
			}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');;
			
			
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		$('#button-resetorder').on('click', function() {
			gallery.galleryReset();
		});
		
		$('.btn.delete-image').on('click', function(e) {
			$(this).parent('.thumbnail').attr('data-destroy','_destroy').fadeOut();
			$('#button-saveorder, #button-resetorder').attr('disabled',false);
			e.preventDefault();
		});
		
		
		
		

		

		// make the gallery sortable
		gallery.makeSortable = function() {
			
			$('.gallery-wrapper').sortable({ 
			
				items: 			'.thumbnail',
				placeholder: 	'placeholder',
				forcePlaceholderSize: true,
				
				stop: function() {
				
					$('#button-saveorder, #button-resetorder').attr('disabled',false);
					
				}
				
			});
		
		};
		gallery.makeSortable();

		// this returns the order of the gallery items.

		gallery.galleryState = function( set ) {
		
			var $gallery = $('.gallery-wrapper');
			var stack = {};
			
			$gallery.find('.thumbnail').each( function() {
			
				var $_this = $(this);
				var id = $_this.data('id');
				
				var position = $_this.attr('data-destroy') == '_destroy' ? '_destroy' : $_this.index()+1;
				
				stack[id] = position;
			
				if( set != "undefined" ) {
					$(this).attr('data-order', position);	
				}
			
			});
			
			return stack;
		
		};
		
		
		gallery.galleryReset = function() {
			
			var howMany = $('.thumbnail').length;
			
			for( i=0; i<=howMany; i++ ) {
				$('.gallery-wrapper').append( $('.gallery-wrapper .thumbnail[data-order="'+i+'"]').removeAttr('data-destroy').fadeIn() );
			}	
			
		};
		
		//save original state of gallery
		gallery.galleryState('set');
		
		
		gallery.sendGalleryState = function() {
			
			$.ajax( 'html-includes/fakejax.php' , {
				
				type: 'POST',
				data: gallery.galleryState(),
				
				success: function( response ) { console.log( response ); }
				
			});
			
			console.log('data posted, check network tab in console');
			
		};
		
		
		
		

		
		
	});