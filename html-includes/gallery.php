
		<header class="page-header">
			<h2>
				Gallery
				<small>Manage your picture galleries</small>
			</h2>
			<hr>
		</header>
		
		
		
		<ul class="nav nav-tabs">
			<li id="tab-gallery-list" class="active">
				<a href="#gallery-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-list-box-blue.png" class="icon"> Galleries</a>
			</li>
			<li id="tab-gallery-upload">
				<a href="#gallery-upload" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/picture--plus.png" class="icon"> Upload Image</a>
			</li>
			<li id="tab-gallery-edit" class="disabled">
				<a href="#gallery-edit" data-toggle=""><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/photo-album--pencil.png" class="icon"> Edit</a>
			</li>
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="gallery-list">

				<table class="table table-striped table-hover" id="gallery-table">
				
					<thead>
						<tr>
							<th scope="col">Page</th>
							<th scope="col">Title</th>
							<th scope="col">Images</th>
							<th scope="col">Updated</th>
							<th scope="col" colspan="2"></th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<td>Home</td>
							<th scope="row"><a href="#" class="edit tooltip">Landing Page Gallery</a></th>
							<td><span class="badge">12</span></td>
							<td>Last Week</td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<td>Product Gallery</td>
							<th scope="row"><a href="#" class="edit tooltip">Product Showcase</a></th>
							<td><span class="badge">4</span></td>
							<td>Yesterday</td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<td>Events Gallery</td>
							<th scope="row"><a href="#" class="edit tooltip">Gallery of Events and Activities</a></th>
							<td><span class="badge yellow">0</span> &mdash; <a href="#">add some!</a></td>
							<td>Yesterday</td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
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
			
			<div class="tab-pane" id="gallery-upload">
		
				<form novalidate action="#">
				
					<h3>Upload an Image</h3>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Gallery</label>
						</div>
						<div class="formAnswer">
							<select><option>Choose Gallery</option></select>
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Image</label>
						</div>
						<div class="formAnswer">
							<input type="file">
						</div>
					</div>
					
					<div class="formRow buttonRow">
						
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<button type="submit" class="new btn green">
								<span>Send it</span>
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/drive-upload.png" class="icon" alt="upload">
							</button>
						</div>
		
					</div>
					
				</form>
			
			</div>
				
			<div class="tab-pane" id="gallery-edit">
				
				<h3>Landing Page Gallery</h3>
				
				<div class="form-actions above-table">
					
					<button id="button-saveorder" class="new btn blue" disabled>
						<span>Save Changes</span>
						<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon">
					</button>
					
					<button id="button-resetorder" class="new btn alt pull-right" disabled>
						<span>Reset Changes</span>
						<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/arrow-circle-double.png" class="icon">
					</button>
					
				</div>
				
				<div class="gallery-wrapper">
				
					<a class="thumbnail" href="#" data-id="image[1]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=1">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[2]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=2">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[3]">
						<img src="http://placehold.it/200x350.png/efefef/333333/&text=3">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[4]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=4">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[5]">
						<img src="http://placehold.it/400x150.png/efefef/333333/&text=5">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[dmilk]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=6">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[7]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=7">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[8]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=8">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[9]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=9">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
					<a class="thumbnail" href="#" data-id="image[aceofspades]">
						<img src="http://placehold.it/200x150.png/efefef/333333/&text=10">
						<button class="btn small delete-image"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png"></button>
					</a>
				
				</div>
				
				
			</div>		

			
			
			
			<div id="dialog-deletegallery" style="display:none;">
				Really delete this gallery?<br>
				<span class="red text">This action cannot be undone.</span>
			</div>
			
			<div id="dialog-saveorder" style="display:none;">
				Are you sure you wish to save the state of gallery?<br>
				<span class="red text">This action cannot be undone.</span>
			</div>		
			
			
			
			
			
			
			
		