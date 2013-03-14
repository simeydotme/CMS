

	$(function() {
		
	/* ==========================================================================
	   Warning for Maintenance
	   ========================================================================== */

		notify('Warning: <span class="text red">This will take your website offline and replace it with a "Down for Maintenance" page!</span>', {
			sticky: true,
			style: 'error',
			where: '#site-maintenance',
			method: 'prepend'
		});
		
	/* ==========================================================================
	   Maintenance confirmation hoops
	   ========================================================================== */
		
		// when the heckbox is changed to on/off.
			$('#chkMaintenance').on('change', function() {
				if( $(this).is(':checked') ) { showConfirmRow(); } 
				else { hideConfirmRow(); }
			});
		
		// as the user enters CONFIRM, enable/disable submit
			$('#txtMaintenanceConfirm').on('keyup', function() {
				var conf = ( $('#txtMaintenanceConfirm').val() == "CONFIRM" ) ? false : true;
				$('#btnMaintenanceSubmit').prop('disabled', conf );	
			});
		
		
		var showConfirmRow = function() {
			$('.rowConfirm').slideDown();	
		}

		var hideConfirmRow = function() {
			$('.rowConfirm').slideUp();	
			$('#txtMaintenanceConfirm').val("");
		}
		


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
			
			if( !$(this).hasClass('open') ) {
				$(this).addClass('open');
			} else {
				$(this).removeClass('open');	
			}
			
		});





	/* ==========================================================================
	   Add Contact fields
	   ========================================================================== */

		$('.add-contact-email-1').on('click', function(e) {
			
			$('.contact-email-wrapper-1').slideDown();
			e.preventDefault();
			
		});
		
		$('.add-contact-email-2').on('click', function(e) {
			
			$('.contact-email-wrapper-2').slideDown();
			e.preventDefault();
			
		});
		
		$('[class*=contact-email-wrapper]').each( function() {
			
			if( $(this).find('input').val() == "" ) {
				$(this).hide();
			}
			
		});
















		
		
		
	});