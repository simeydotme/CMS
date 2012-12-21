/**
 * @license Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	
	
	// Toolbar configuration generated automatically by the editor based on config.toolbarGroups.
	config.toolbar = [
		{ 	name: 'document', groups: [ 'mode', 'document', 'doctools' ], 
			items: [ 'Source',/* '-', 'Save', 'NewPage', 'Preview', 'Print', */'-', 'Templates' ] },
		
		{ 	name: 'somedo', items: [ 'Undo', 'Redo' ] },
		
		{	 name: 'clipboard', groups: [ 'clipboard', 'undo' ], 
			items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-',  ] },
			
		/*{ 	name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], 
			items: [ 'Find', 'Replace', '-', 'SelectAll' ] },*/
			
		/*{	name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },*/
		
		/*{	name: 'others', 
			items: [ 'button1', 'button2', 'button3', '-' ] },*/
		
		{ 	name: 'insert', 
			items: [ 'Image', /*'Flash',*/ 'Table', 'HorizontalRule', /*'Smiley',*/ 'SpecialChar', /*'PageBreak', 'Iframe'*/ ] },
		
		'/',
		
		{ 	name: 'styles', 
			items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
				
		{ 	name: 'links', 
			items: [ 'Link', 'Unlink', 'Anchor' ] },

		'/',

		{ 	name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], 
			items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
			
		{ 	name: 'colors', 
			items: [ 'TextColor', 'BGColor' ] },
			
		{ 	name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], 
			items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', /*'Blockquote', 'CreateDiv', '-',*/ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'/*, '-', 'BidiLtr', 'BidiRtl'*/ ] },

		{	name: 'tools', 
			items: [ 'Maximize', 'ShowBlocks' ] },

		/*{ 	name: 'about', items: [ 'About' ] }*/
	];
	
	// Toolbar groups configuration.
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'forms' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'links' },
		{ name: 'insert' },
		'/',
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'tools' },
		{ name: 'others' },
		{ name: 'about' }
	];
	
	
	
	
	
	config.htmlbuttons = [
		{
			name:'button1',
			icon:'icon1.png',
			html:'<a href="http://www.google.com">eat me</a>',
			title:'A link to Google'
		},
		{
			name:'button2',
			icon:'icon2.png',
			html:'<table><tr><td> </td><td> </td></tr><tr><td> </td><td> </td></tr></table>',
			title:'A simple table'
		},
		{
			name:'button3',
			icon:'icon3.png',
			html:'<ol><li>Item 1 <ol><li>Sub item 1</li><li>Sub item 2</li></ol></li></ol>',
			title:'A nested list'
		}
	];
	
	
};
