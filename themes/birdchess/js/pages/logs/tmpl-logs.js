

	$(function() {
		
		
	/* ==========================================================================
	   Set the DATA for the tables.
	   ========================================================================== */

		window.logsData = [
			{ "id":"1", "flagged": false, 	"date": "03/01/2013", "time": "09:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"2", "flagged": false, 	"date": "03/01/2013", "time": "11:25", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"3", "flagged": false, 	"date": "03/01/2013", "time": "13:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
			{ "id":"4", "flagged": false, 	"date": "03/01/2013", "time": "13:38", "user":"Jimbob", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"5", "flagged": false, 	"date": "03/01/2013", "time": "15:21", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"6", "flagged": false, 	"date": "03/01/2013", "time": "15:21", "user":"Jimbob", "email":"james@jen.com", "description": "Deleted a news post" },
			{ "id":"7", "flagged": false, 	"date": "03/01/2013", "time": "15:21", "user":"Jenny", "email":"jenny@jen.com", "description": "Edited a blog post" },
			{ "id":"8", "flagged": false, 	"date": "03/01/2013", "time": "17:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"9", "flagged": false, 	"date": "03/01/2013", "time": "17:58", "user":"James", "email":"james@jen.com", "description": "Edited a news post" },
			{ "id":"10", "flagged": false, 	"date": "03/01/2013", "time": "21:01", "user":"Simon", "email":"jenny@jen.com", "description": "Removed admin priviledges from user" },
			{ "id":"11", "flagged": false, 	"date": "03/01/2013", "time": "21:03", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"12", "flagged": false, 	"date": "03/01/2013", "time": "22:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
		];
		
		
		window.populateLogsTable = (function reference(){
			
			// update the logs table with the data in the {logsData} object.
			var logsTableData = tmpl("tmpl-logs-table", window.logsData);
			$('#logs-table tbody').html( logsTableData );
				
			return reference; //return the function itself to reference
		
		}());

		window.populateLogsFlaggedTable = (function reference(){
			
			// update the logs flagged table with the data in the {logsData} object.
			var logsFlaggedTableData = tmpl("tmpl-logs-flagged-table", window.logsData);
			$('#logs-flagged-table tbody').html( logsFlaggedTableData );	
				
			return reference; //return the function itself to reference
		
		}());

			
		
		
	});