

	/* ==========================================================================
	  Javascript for the account-bar 
	   ========================================================================== */


	$(function() {



		/* ==========================================================================
		 	log out of admin
		   ========================================================================== */

			
			var adminLogout = function() {
				
				window.location = "http://google.com";
				
			};
			
			$('.account-bar .logout').on('click', function() {
					
				
						var $confirm = $('#dialog-admin-logout');
						
						$confirm.dialog({
							
							modal: true,
							buttons: {
								
								"ok": {
								  text:'Yes', class:'btn alt',
								  click: function() { $(this).animateDialogClose(); adminLogout(); }
								},
								"cancel": {
								  text:'Cancel', class:'btn',
								  click: function() { $(this).animateDialogClose(); }
								}
							}
							
						}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');;
						
				
			});
			
			
			
		
	});