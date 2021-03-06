
		<header class="page-header">
			<h2>
				Pages / Content
				<small>Manage your pages and main content</small>
			</h2>
			<hr>
		</header>
		
		
		
		<ul class="nav nav-tabs pages-tabs">
		
			<li id="tab-page-list" class="active">
				<a href="#page-list" data-toggle="tab">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-list-box-blue.png" class="icon"> Page List
				</a>
			</li>
			
			<li id="tab-page-edit" class="disabled">
				<a href="#page-edit" data-toggle="">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-rename.png" class="icon"> <span class="page-name">Edit page</span>
				</a>
			</li>
			
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="page-list">
				
				<table id="pages-table" class="table table-hover table-collapsible">
				
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">Title</th>
							<th scope="col">Sub Pages</th>
							<th scope="col" colspan="2"></th>
						</tr>
					</thead>
					
					<tbody></tbody>
					
					<!-- Template for the list of pages -->
					<script type="text/x-tmpl" id="tmpl-pages-table">
				
						{% for (var i=0; i<o.length; i++) { %}
							
							<tbody>
							
								<!-- Section Header -->
								<tr class="section">
									<td class="collapse"><a href="#" class="collapse tooltip" title="collapse this section"></a></td>
									<th scope="row">{%=o[i].title%}</th>
									<td colspan="3"><span class="badge">{%=o[i].subPages.length%}</span></td>
								</tr>
								
								<!-- Pages under section -->
								{% for( var j=0; j<o[i].subPages.length; j++) { %}
								
									<tr>
										<td class="collapse"></td>
										<th scope="row"><a href="#page-edit" data-page-id="{%=o[i].subPages[j].id%}" data-page-title="{%=o[i].subPages[j].title%}" class="edit">{%=o[i].subPages[j].title%}</a></th>
										<td></td>
										<td class="icon"><a href="#" class="state active tooltip" title="toggle active/visible status">active</a></td>
										<td class="icon"><a href="#" class="edit tooltip" title="edit this" data-page-id="{%=o[i].subPages[j].id%}" data-page-title="{%=o[i].subPages[j].title%}"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
									</tr>
								
								{% } %}
						
							</tbody>
							
						{% } %}
						
					</script>					
				
				</table>
				
			</div>
			
			
			
			<div class="tab-pane" id="page-edit">
			
					
					<ul class="nav nav-tabs nav-tabs-secondary current-page-tabs">
		
						<li id="tab-page-content" class="active">
							<a href="#page-content" data-toggle="tab">
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-text-image.png" class="icon"> Content
							</a>
						</li>
						
						<li id="tab-page-meta">
							<a href="#page-meta" data-toggle="tab">
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-code.png" class="icon"> Meta Data
							</a>
						</li>
						
						<li id="tab-page-background">
							<a href="#page-background" data-toggle="tab">
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/television-image.png" class="icon"> Background Image
							</a>
						</li>
						
					</ul>
					
					
					<div class="tab-content">
						
						
						<div class="tab-pane active" id="page-content">
							
							<form novalidate>
							
								<div class="formRow">
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<h4>Content
										<small>Edit the main content for this page</small></h4>
										
									</div>
								</div>
								<br>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Content Heading</label>
									</div>
									<div class="formAnswer">
										<input id="txtTitle" type="text" class="medium">
									</div>
								</div>
								
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Body</label>
									</div>
									<div class="formAnswer">
										<textarea class="ckeditor" name="txtBody" id="txtBody"></textarea>
									</div>
								</div>	
								
								
															
								<div class="formRow buttonRow">
									
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<button type="submit" class="new btn green">
											<span>Save</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="edit">
										</button>
									</div>
					
								</div>
								
								
							</form>
							
						</div>
						
						
						
						<div class="tab-pane" id="page-meta">
					
							<form novalidate>
								
								<div class="formRow">
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<h4>Page Meta Data
										<small>The options are inherited from the <a href="?settings">website settings</a> by default</small></h4>
										
									</div>
								</div>
								<br>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Page Title</label>
									</div>
									<div class="formAnswer">
										<input id="txtTitle" type="text" class="medium">
									</div>
								</div>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Page Description</label>
									</div>
									<div class="formAnswer">
										<input id="txtDescription" type="text">
									</div>
								</div>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Page Keywords</label>
									</div>
									<div class="formAnswer">
										<input id="txtKeywords" type="text" value="company, partner, website, product">
									</div>
								</div>
								
								
								
								
								
								
								<div class="formRow buttonRow">
									
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<button type="submit" class="new btn green">
											<span>Save</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="edit">
										</button>
										
										<button type="reset" class="reset btn">
											<span>Reset to default</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/eraser.png" class="icon" alt="save">
										</button>
									</div>
					
								</div>
								
							</form>
						
						</div>
						
						
						
						
						
						
						
						
						<div class="tab-pane" id="page-background">
		
							<form novalidate>
							
								<div class="formRow">
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<h4>Page Background Image
										<small>Background for this specific page, by default inherits from <a href="?settings">website settings</a></small></h4>
										
									</div>
								</div>
								<br>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Upload Image</label>
									</div>
									<div class="formAnswer">
									
										<div class="address-bar">
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/image-sunset.png" class="icon favicon">
											file_name_of_bg.png
										</div>
										<span href="#" class="btn file-input">change <input type="file"></span>
										
										<br><small class="text red">uploading a new image will remove the old one from this page</small>						
									</div>
								</div>
								
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Current Background</label>
									</div>
									<div class="formAnswer">
										<img src="http://www.yorkscene.com/files/2012/09/ccaa1.jpg" alt="current background image" class="background-image-preview">
										<br><small class="text blue">This is the default image for all pages</small>
									</div>
								</div>
								
								
								<div class="formRow buttonRow">
									
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<button type="submit" class="new btn green">
											<span>Save</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="save">
										</button>
										
										<button type="reset" class="reset btn">
											<span>Reset to default</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/eraser.png" class="icon" alt="save">
										</button>
									</div>
					
								</div>
			
								
							</form>
							
						</div>
			
			
			
			
					</div>
					
								
			</div>
			
			
		</div>
			
		
		<div id="dialog-pages-reset" style="display:none;">
			Are you sure you wish reset this to inherit from the main website settings?
		</div>	
		