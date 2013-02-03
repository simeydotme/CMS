

	$(function() {
		
		
	/* ==========================================================================
	   Set the DATA for the tables.
	   ========================================================================== */

		window.pagesData = [
		
			{ "id":"1", "title": "Home", 
				"subPages": [
					{"id": "11", "title": "A Sub Page"}
				]
			},
			
			{ "id":"2", "title": "Main Content Area", 
				"subPages": [
					{ "id": "21", "title": "Main Content Page 1" },
					{ "id": "22", "title": "Page of Content" },
					{ "id": "23", "title": "Super dooper page!" }
				]
			}
			
		];
		
		
	/* ==========================================================================
	   update the logs table with the data in the {logsData} object.
	   ========================================================================== */
	   
		// self-executing function.
		window.populatePagesTable = (function reference(){
			
			var pagesTableData = tmpl("tmpl-pages-table", window.pagesData);
			$('#pages-table tbody').replaceWith( pagesTableData );
				
			return reference; 
			//return the function itself to reference
		
		}());

		
		
	});