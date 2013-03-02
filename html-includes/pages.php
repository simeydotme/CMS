
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
									<td><span class="badge">{%=o[i].subPages.length%}</span></td>
									<td colspan="2"></td>
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
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-text-image.png" class="icon"> Main Content
							</a>
						</li>
						
						<li id="tab-page-meta">
							<a href="#page-meta" data-toggle="tab">
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-code.png" class="icon"> Meta Data
							</a>
						</li>
						
					</ul>
					
					
					<div class="tab-content">
					
						<div class="tab-pane" id="page-meta">
					
							<form novalidate>
							
								<h3>Edit meta data</h3>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Title</label>
									</div>
									<div class="formAnswer">
										<input id="txtTitle" type="text" class="medium">
									</div>
								</div>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Description</label>
									</div>
									<div class="formAnswer">
										<input id="txtDescription" type="text">
									</div>
								</div>
								
								<div class="formRow">
									<div class="formQuestion">
										<label>Keywords</label>
									</div>
									<div class="formAnswer">
										<input id="txtKeywords" type="text" value="company, partner, website, product">
									</div>
								</div>
								
								<div class="formRow buttonRow">
									
									<div class="formQuestion"></div>
									<div class="formAnswer">
										<button type="submit" href="#" class="new btn green">
											<span>Save</span>
											<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="edit">
										</button>
									</div>
					
								</div>
								
							</form>
						
						</div>
						
						
						<div class="tab-pane" id="page-content">
						
						</div>	
			
			
			
			
					</div>
					
					
			
			
			</div>
			
			
			
			
			
			
			
		</div>
			
			
			
			
			
		
		
		