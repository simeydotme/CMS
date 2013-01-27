
		<header class="page-header">
			<h2>
				News
				<small>Manage your news or blog</small>
			</h2>
			<hr>
		</header>
		
		
				
		<ul class="nav nav-tabs">
			<li class="active">
				<a href="#news-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-list-box-blue.png" class="icon"> News List</a>
			</li>
			<li>
				<a href="#news-new" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/newspaper--plus.png" class="icon"> Create</a>
			</li>
			<li class="disabled">
				<a href="#news-edit" data-toggle=""><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/newspaper--pencil.png" class="icon"> Edit</a>
			</li>
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="news-list">
		
		
				<div class="form-actions above-table">
					
					<div class="btn-group">
						<a class="btn alt dropdown-toggle" id="ddl-filter" role="button" data-toggle="dropdown" data-target="#" href="news.php">Filter News <span class="caret"></span></a>
						<ul class="dropdown-menu" id="menu-filter" role="menu" aria-labelledby="ddl-filter">
						
							<li><a href="#">by direct</a></li>
							<li><a href="#">by twitter</a></li>
							<li><a href="#">by blog</a></li>
						
						</ul>
					</div>
					
					<a href="#" class="new btn purple pull-right">
						<span>Add News</span>
						<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/newspaper--plus.png" class="icon">
					</a>
					
				</div>
				
				<table class="table table-striped table-hover">
				
					<thead>
						<tr>
							<th scope="col">Type</th>
							<th scope="col">Title</th>
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
						<tr>
							<td>Twitter</td>
							<th scope="row"><a href="#">Twittery wittery woo wah</a></th>
							<td>2 days ago</td>
							<td><a href="#">Jefferey</a></td>
							<td class="icon"><a href="#" class="state active" title="deactivate this">active</a></td>
							<td class="icon"><a href="#" class="edit" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
					</tbody>
				
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
			
			<div class="tab-pane" id="news-new">
		
				<form novalidate>
				
					<h3>Create News Item</h3>
					
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
							<select><option></option></select>
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
				
			<div class="tab-pane" id="news-edit">
				black
			</div>		
		
		
		