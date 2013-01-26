

	$(function() {
		
		
	/* ==========================================================================
	   Set the DATA for the tables.
	   ========================================================================== */

		window.logsData = [
			{ "id":"1", "flagged": false, 	"date": "03/01/2013", "time": "09:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"2", "flagged": false, 	"date": "03/01/2013", "time": "11:25", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"3", "flagged": true, 	"date": "03/01/2013", "time": "13:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
			{ "id":"4", "flagged": false, 	"date": "03/01/2013", "time": "09:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"5", "flagged": true, 	"date": "03/01/2013", "time": "11:25", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"6", "flagged": true, 	"date": "03/01/2013", "time": "13:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
			{ "id":"7", "flagged": false, 	"date": "03/01/2013", "time": "09:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"8", "flagged": false, 	"date": "03/01/2013", "time": "11:25", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"9", "flagged": false, 	"date": "03/01/2013", "time": "13:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
			{ "id":"10", "flagged": false, 	"date": "03/01/2013", "time": "09:56", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"11", "flagged": false, 	"date": "03/01/2013", "time": "11:25", "user":"Jenny", "email":"jenny@jen.com", "description": "Uploaded a picture into 'Cats'" },
			{ "id":"12", "flagged": true, 	"date": "03/01/2013", "time": "13:38", "user":"James", "email":"james@jen.com", "description": "Deleted a news post" },
		];
		
		var logsTableData = tmpl("tmpl-logs-table", window.logsData);
		$('#logs-table tbody').append( logsTableData );
		
		var logsFlaggedTableData = tmpl("tmpl-logs-flagged-table", window.logsData);
		$('#logs-flagged-table tbody').append( logsFlaggedTableData );
		
		
		
	});