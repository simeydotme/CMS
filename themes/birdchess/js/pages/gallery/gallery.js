

	$(function() {






	/* ==========================================================================
	   Create a global object for the gallery function.
	   ========================================================================== */

		window.gallery = {};
		
		
		
		$('.gallery-image-link').on('click', function(e) {
			imageZoom( $(this) );
			e.preventDefault();
		});		
		
		
		
		
		
		
		
		
		
		
		
	/* ==========================================================================
	   Enable the gallery edit tab when you've clicked edit.
	   ========================================================================== */
	   
		$('#gallery-table .edit').on('click',function() {
			$('#tab-gallery-edit a').enableTab().trigger('click');
		});
		
		
		
		
		
	/* ==========================================================================
	   Function for deleting a gallery from the table
	   ========================================================================== */
		
		$('#gallery-table .delete').on('click', function() {
			
			var $confirm = $('#dialog-deletegallery');
			var $galleryRow = $(this).parents('tr');
			
			$confirm.dialog({
				
				buttons: {
					
					"ok": {
					  text:'Ok', class:'btn red',
					  click: function() { 
					  	$galleryRow.fadeOut();
						$(this).animateDialogClose();
					  }
					},
					"cancel": {
					  text:'Cancel', class:'btn',
					  click: function() { $(this).animateDialogClose(); }
					}
				}
				
			}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');
			
			
		});
		
		
		
		
		
		
		
		
	/* ==========================================================================
	   When a user clicks 'save order'.
	   ========================================================================== */

		$('#button-savechanges').on('click', function() {
			
			var $confirm = $('#dialog-savechanges');
			
			$confirm.dialog({
				
				modal: true,
				buttons: {
					
					"ok": {
					  text:'Ok', class:'btn red',
					  click: function() { 
					  
					  	gallery.saveState();
						gallery.sendGalleryState(); 
						
						$(this).animateDialogClose(); 
						
					  }
					},
					"cancel": {
					  text:'Cancel', class:'btn',
					  click: function() { $(this).animateDialogClose(); }
					}
				}
				
			}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');;
			
			
		});
		
		
		
	/* ==========================================================================
	   When a user clicks 'reset order'.
	   ========================================================================== */

		$('#button-resetorder').on('click', function(e) {
			gallery.resetState();
			e.preventDefault();
		});
		
		
		
		
		
		
		
	/* ==========================================================================
	   When a user clicks 'delete image'.
	   ========================================================================== */

		$('.gallery-image-list').on('click', '.btn.delete-image', function(e) {
			
			var $_this = $(this).parents('.gallery-image-link');
			var id = $_this.data('image-id');
			
			// find the item in the {galleryData} object using the data-image-id
			for(i=0; i<galleryData.length; i++) {
				if( galleryData[i].id == id ) {
					// and destroy it.
					galleryData[i].destroy = true;
				}
			}
			
			// remove the image
			$_this.fadeOut( function() {
				gallery.enableButtons();
				$_this.remove();
			});
			
			e.preventDefault();
		});
		
		
		
		
		
		
	/* ==========================================================================
	   Make hte gallery draggable/sortable
	   ========================================================================== */

		gallery.makeSortable = function() {
			
			$('.gallery-wrapper').sortable({ 
			
				items: 			'.gallery-image-link',
				placeholder: 	'placeholder',
				forcePlaceholderSize: true,
				stop: function() { gallery.enableButtons(); }
				
			});
		
		};
		gallery.makeSortable();
		
		
		
		

	/* ==========================================================================
	   Load the gallery from the object into it's placeholder.
	   ========================================================================== */

		gallery.loadState = function() { window.populateGallery(); };
		
	/* ==========================================================================
	   Save the order of the gallery
	   ========================================================================== */

		gallery.saveState = function() { 
		
			$('.gallery-wrapper .gallery-image-link').each( function(k,v) {
			
				var id = $(this).data('image-id');
				
				// for every item in the object
				for(i=0; i<galleryData.length; i++) {
					if( galleryData[i].id == id ) {
						// un-destroy it
						galleryData[i].order = k;
					}
				}
				
			});	
								
		};
		
	/* ==========================================================================
	   Reset the gallery to it's page-load state.
	   ========================================================================== */

		gallery.resetState = function() {
			
			// for every item in the object
			for(i=0; i<galleryData.length; i++) {
				// un-destroy it
				galleryData[i].destroy = false;
			}
			
			// reload the images
			gallery.loadState();
			
		};
		
		
	/* ==========================================================================
	   Enable the save and reset buttons.
	   ========================================================================== */

		gallery.enableButtons = function() { $('#button-savechanges, #button-resetorder').attr('disabled',false); };
	
	
	/* ==========================================================================
	   Send the new state of hte gallery to the server
	   ========================================================================== */

		gallery.sendGalleryState = function() {
			
			console.log('data posted back to server, check the new order and the destroyed status');
			console.log('---------------------------------------');
			console.log( window.galleryData );
			
		};
		
		
		
		

		
		
	});