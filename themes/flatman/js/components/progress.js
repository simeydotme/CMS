	
	
	/* ==========================================================================
	   Progress Bar Javascript
	   ========================================================================== */
		
		$(function() {
			
			
			
			window.ajaxProgressDialog = function( title ) {

				if( typeof(title) === "undefined" ) { var title = "Processing..."; }
				
				var $t = $('<div><div class="progress progress-striped active"><div class="bar" style="width: 100%"></div></div></div>');
				
				$t.dialog({
				
					dialogClass: 'ui-action',
					closeOnEscape: false,
					title: title,
					draggable: false, resizable: false
				
				}).dialog('widget').appendTo('.ui-dialog-perspective-wrapper');
				
				setTimeout(function() { $t.animateDialogClose(); } , 2000 );
				setTimeout(function() { $t.dialog('destroy'); } , 3000 );
				
			};











		});
		
		
		
		
		
		
		
		
		
		
		
		
		