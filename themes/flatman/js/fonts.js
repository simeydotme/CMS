
WebFontConfig = {
	google: { families: [ 'Averia+Sans+Libre:400,700,400italic,700italic:latin', 'Open+Sans:400italic,600italic,700italic,400,600,700:latin' ] }
};

(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})(); 
