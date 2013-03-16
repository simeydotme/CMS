
		<header class="page-header">
			<h2>
				Blog
				<small>Manage your personal blog</small>
			</h2>
			<hr>
		</header>
		
		
				
		<ul class="nav nav-tabs">
			<li id="tab-blog-list" class="active">
				<a href="#blog-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-list-box-blue.png" class="icon"> Blog entries</a>
			</li>
			<li id="tab-blog-new" >
				<a href="#blog-new" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/balloon--plus.png" class="icon"> Create</a>
			</li>
			<li id="tab-blog-edit"  class="disabled">
				<a href="#blog-edit" data-toggle=""><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/balloon--pencil.png" class="icon"> <span class="blog-name">Edit entry</span></a>
			</li>
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="blog-list">
				
				
				<div class="form-actions above-table">
					
					<input type="text" class="blog-search search medium pull-right" placeholder="search posts">
					
				</div>
				
				
				
				<table class="table table-striped table-hover" id="blog-table">
				
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Comments</th>
							<th scope="col">Updated</th>
							<th scope="col">Author</th>
							<th scope="col" colspan="3"></th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>Blog</td>
							<th scope="row"><a href="#">Once upon a time</a></th>
							<td>3 minutes ago</td>
							<td><a href="#">Jimbob</a></td>
							<td class="icon"><a href="#" class="state active" title="deactivate this">active</a></td>
							<td class="icon"><a href="#" class="edit" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
					</tbody>
					
					<!-- Template for the list of pages -->
					<script type="text/x-tmpl" id="tmpl-blog-table">
				
						{% for (var i=0; i<o.length; i++) { %}
								
								
								<tr>
									<th scope="row"><a href="#">{%=o[i].title%}</a></th>
									
							{% if( o[i].comments==0 ) { %}
									<td><span class="badge grey">0</span></td>
							{% } else if( o[i].comments > 0 &&  o[i].comments <= 3 ) { %} 
									<td><span class="badge">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 3 &&  o[i].comments <= 6 ) { %} 
									<td><span class="badge green">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 6 &&  o[i].comments <= 12 ) { %} 
									<td><span class="badge yellow">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 12 &&  o[i].comments <= 20 ) { %} 
									<td><span class="badge orange">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 20 &&  o[i].comments <= 50 ) { %} 
									<td><span class="badge red">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 50 &&  o[i].comments <= 100 ) { %} 
									<td><span class="badge purple">{%=o[i].comments%}</span></td>
							{% } else if( o[i].comments > 100 ) { %} 
									<td><span class="badge dark">{%=o[i].comments%}</span></td>
							{% } %}
									
									<td>{%=o[i].updated%}</td>
									<td><a href="#">{%=o[i].author%}</a></td>
									<td class="icon"><a href="#" class="state active" title="deactivate this">active</a></td>
									<td class="icon"><a href="#" class="edit" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
									<td class="icon"><a href="#" class="delete" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
								</tr>
							
						{% } %}
						
					</script>
					
					
					
				
				</table>
				
									
					<div class="pagination pagination-centered">
						<ul>
							<li class="prev disabled"><span>Prev</span></li>
							<li class="active"><a href="#">1</a></li>
							<li><a href="#">2</a></li>
							<li><a href="#">3</a></li>
							<li><a href="#">4</a></li>
							<li class="next"><a href="#">Next</a></li>
						</ul>
					</div>
				

			
			</div>
			
			<div class="tab-pane" id="blog-new">
		
				<form novalidate>
				
					<h3>Create Blog Entry</h3>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Title</label>
						</div>
						<div class="formAnswer">
							<input type="text">
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
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Category</label>
						</div>
						<div class="formAnswer">
							<select>
								<option>Category1</option>
								<option>Category2</option>
								<option>Category3</option>
								<option>Category4</option>
							</select>
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Date</label>
						</div>
						<div class="formAnswer">
							<input type="text" placeholder="DD/MM/YYYY" class="date">
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Published</label>
						</div>
						<div class="formAnswer">
							<input type="checkbox" id="chk_published" checked>
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
				
			<div class="tab-pane" id="blog-edit">
				blank
			</div>		
		
		
		