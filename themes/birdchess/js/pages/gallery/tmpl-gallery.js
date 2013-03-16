

	$(function() {
		
		
	/* ==========================================================================
	   Set the DATA for the gallery.
	   ========================================================================== */

		window.galleryData = [
		
			{  "id":"0", 'order':'1', "title": "Image Zero", "url": "http://placehold.it/640x480" },
			{  "id":"1", 'order':'2', "title": "Cute Kitten", "url": "http://2.bp.blogspot.com/_hUOe7alne4g/TAmJiRpx57I/AAAAAAAACFY/byEIoTn_XMY/s1600/1478_-_de_volta_pra_casa-3.jpg" },
			{  "id":"2", 'order':'3', "title": "Image Two", "url": "http://placehold.it/640x480" },
			{  "id":"3", 'order':'4', "title": "Image Three", "url": "http://placehold.it/640x480" },
			{  "id":"4", 'order':'5', "title": "Image Four", "url": "http://placehold.it/640x480" },
			{  "id":"5", 'order':'6', "title": "Image Five", "url": "http://placehold.it/640x480" },
			{  "id":"6", 'order':'7', "title": "Image Six", "url": "http://placehold.it/640x480" },
			{  "id":"7", 'order':'8', "title": "Image Seven", "url": "http://placehold.it/640x480" },
			{  "id":"8", 'order':'9', "title": "Image Eight", "url": "http://placehold.it/640x480" },
			{  "id":"9", 'order':'10', "title": "Image Nine", "url": "http://placehold.it/640x480" },
			{  "id":"10", 'order':'11', "title": "Puppies", "url": "http://www.psfshl.pudong-edu.sh.cn/sourcefile/0/0/35/35111.jpg" },
			{  "id":"11", 'order':'12', "title": "Image Eleven", "url": "http://placehold.it/640x480" },
			{  "id":"12", 'order':'13', "title": "Image Twelve", "url": "http://placehold.it/640x480" },
			{  "id":"13", 'order':'14', "title": "Image Thirteen", "url": "http://placehold.it/640x480" },
			{  "id":"14", 'order':'15', "title": "Image Fourteen", "url": "http://placehold.it/640x480" },
			{  "id":"15", 'order':'16', "title": "Image Fifteen", "url": "http://placehold.it/640x480" },
			{  "id":"16", 'order':'17', "title": "Image Sixteen", "url": "http://placehold.it/640x480" },
			{  "id":"17", 'order':'18', "title": "Image Seventeen", "url": "http://placehold.it/640x480" },
			{  "id":"18", 'order':'19', "title": "Image Eighteen", "url": "http://placehold.it/640x480" },
			{  "id":"19", 'order':'20', "title": "LEMUR!", "url": "http://2.bp.blogspot.com/_-zOrAL1V5Jg/S8HgRG4OoHI/AAAAAAAAD5M/6NgeP4ZFe7k/s640/ring%2Btailed%2Blemur%2Bfacts%2Babout%2Blemurs.jpg" },
			{  "id":"20", 'order':'21', "title": "Image Twenty", "url": "http://placehold.it/640x480" },
		];
		
		
	/* ==========================================================================
	   update the image list with the data in the {galleryData} object.
	   ========================================================================== */
	   
		// self-executing function.
		window.populateGallery = (function reference(){
			
			var imageListData = tmpl("tmpl-gallery", window.galleryData);
			$('.gallery-image-list').empty().append( imageListData );
				
			return reference; 
			//return the function itself to reference
		
		}());

		
		
	});