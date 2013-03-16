

	$(function() {
		
		
	/* ==========================================================================
	   Set the DATA for the tables.
	   ========================================================================== */

		window.blogData = [
		
			{ "id":"1", "type":"blog", "title": "A long time ago", 					"updated": "10 minutes ago", "author": "Jimbob", 	"comments":0  },
			{ "id":"2", "type":"blog", "title": "In a galaxy far far away...", 		"updated": "2 hours ago", "author": "Jimbob", 		"comments":2  },
			{ "id":"3", "type":"blog", "title": "Mary had a little lamb", 			"updated": "2 hours ago", "author": "Jimbob", 		"comments":4  },
			{ "id":"4", "type":"blog", "title": "Its fleece as white as snow.", 	"updated": "1 day ago", "author": "Jimbob", 		"comments":7  },
			{ "id":"5", "type":"blog", "title": "I <3 Lemurs", 						"updated": "3 days ago", "author": "Jimbob", 		"comments":13  },
			{ "id":"6", "type":"blog", "title": "A man walks into a bar", 			"updated": "10 days ago", "author": "Jimbob", 		"comments":19  },
			{ "id":"7", "type":"blog", "title": "Party at the Whitehouse", 			"updated": "2 weeks ago", "author": "Jimbob", 		"comments":25  },
			{ "id":"8", "type":"blog", "title": "I stayed up way too late!", 		"updated": "2 weeks ago", "author": "Jimbob", 		"comments":56  },
			{ "id":"9", "type":"blog", "title": "The Reacharound", 					"updated": "3 weeks ago", "author": "Jimbob", 		"comments":99  },
			{ "id":"10", "type":"blog", "title": "All aboard the Man Train", 		"updated": "last month", "author": "Jimbob", 		"comments":103  },
			
		];
		
		
	/* ==========================================================================
	   update the logs table with the data in the {logsData} object.
	   ========================================================================== */
	   
		// self-executing function.
		window.populateBlogTable = (function reference(){
			
			var blogTableData = tmpl("tmpl-blog-table", window.blogData);
			$('#blog-table tbody').empty().append( blogTableData );
				
			return reference; 
			//return the function itself to reference
		
		}());

		
		
	});