

	/* ==========================================================================
	  Javascript for the users page
	   ========================================================================== */


	$(function() {






		/* ==========================================================================
		 	Pretend to delete a user when we click on delete.
		   ========================================================================== */


			$('#user-table .delete').on('click', function(e) {
				
				e.preventDefault();
				
				var $confirm = $('#dialog-deleteuser');
				var $userRow = $(this).parents('tr');
				
				$confirm.dialog({
					
					buttons: {
						
						"ok": {
						  text:'Ok', class:'btn red',
						  click: function() { $userRow.fadeOut().attr('data-destroy','_destroy'); $(this).animateDialogClose(); }
						},
						"cancel": {
						  text:'Cancel', class:'btn',
						  click: function() { $(this).animateDialogClose(); }
						}
					}
					
				}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');
				
				
			});









		/* ==========================================================================
		 	Generate a username based off user's first and last names.
		   ========================================================================== */
			
			// self-executing function.
			window.generateUsername = (function reference(){
			
				$fname = $('input.firstname');
				$sname = $('input.surname');
				$uname = $('input.username');
				
				// output is: "firstname.lastname" when user changes his name.
				var create = function() {
					if( $uname.val() == "" ) {
						$fname.add( $sname ).on('change blur keyup', function() {
							
							// only add a spacer if the surname exists.
							var spacer;
							if( ($sname.val() != "") && ($fname.val() != "") ) { spacer = "_"; } else { spacer = ""; };
							$uname.val( $fname.val() + spacer + $sname.val() );
							
						});
					}
				};create(); 
				
				// but if the user edits the username, we don't want to overwrite anymore.
				$uname.on('keyup', function() {
					
					if( !$(this).val() == "" ) {
						$fname.add( $sname ).off('change blur keyup');
					} else {
						create();	
					}
					
				});
			
				return reference;
				//return the function itself to reference

			}());
			
			
			
			
			
			
		/* ==========================================================================
		 	Change the labels via CSS depending on slider value.
		   ========================================================================== */

			function sliderLabel( val ) { 
				
				var $slider = $('.ui-slider');
				
				$('.permissionLevel .level ').xhide();
				
				switch( val ) {
						
					case 4: 
						$('.permissionLevel .super').xshow(); 
						break;
						
					case 3: 
						$('.permissionLevel .admin').xshow(); 
						break;
					
					case 2: 
						$('.permissionLevel .creator').xshow();
						break;
					
					case 1: 
						$('.permissionLevel .editor').xshow();
						break;
					
					case 0: 
						$('.permissionLevel .peon').xshow(); 
						break;
					
				}
			
			};
			
			
			$('.ui-slider').slider({
				
				value: 1, min: 0, max: 4, range: 'min',
				slide: function( event, ui ) { 
					
					sliderLabel( ui.value );
				
				}
				
			});
			
			sliderLabel( $('.ui-slider').slider('value') );
			
			
			
			
		/* ==========================================================================
		 	Show more permissions
		   ========================================================================== */

			$('.show-more-permissions').on('click', function(e) {
				
				$('.more-permissions').slideDown();
				e.preventDefault();
				
			});


			
			
		/* ==========================================================================
		 	Tik box priviledge assignments
		   ========================================================================== */

			
			
			// grant all sub-priviledges to section-admin
			$('input.level1').on('change', function() {
				
				var admin = $(this).attr('id');
				if( $(this).is(':checked') ) {
					$('.'+admin).prop('checked',true).trigger('change');
				} else {
					$('.'+admin).prop('checked',false).trigger('change');
				}
			
			});















		
	});