
		<header class="page-header">
			<h2>
				Users
				<small>Manage Users and Permissions</small>
			</h2>
			<hr>
		</header>
		
		
		
		<ul class="nav nav-tabs">
			<li class="active">
				<a href="#user-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-list-box-blue.png" class="icon"> Users List</a>
			</li>
			<li>
				<a href="#user-new" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/user-silhouette.png" class="icon"> Add User</a>
			</li>
			<li class="disabled">
				<a href="#user-edit" data-toggle=""><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/user-worker.png" class="icon"> Edit User</a>
			</li>
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="user-list">
		
		
				<div class="form-actions above-table">
					
					<a href="#user-new" class="new btn purple pull-right">
						<span>New User</span>
						<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/user-silhouette.png" class="icon">
					</a>
					
				</div>
				
				
				
				<table class="table table-striped table-hover" id="user-table">
				
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Username</th>
							<th scope="col">Email</th>
							<th scope="col">Last Login</th>
							<th scope="col" colspan="3"></th>
						</tr>
					</thead>
					
					<tbody>
						<tr>
							<th scope="row">Jim Podolski</th>
							<td><a href="#" class="tooltip" title="edit this user">Jimbob</a></td>
							<td><a href="#" class="tooltip" title="send an email to this user">jimbob@hotmail.com</a></td>
							<td>3 minutes ago</td>
							<td class="icon"><a href="#" class="state active tooltip" title="toggle this user as active/inactive">active</a></td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<th scope="row">Jefferey McDougall</th>
							<td><a href="#" class="tooltip" title="edit this user">Jefferey</a></td>
							<td><a href="#" class="tooltip" title="send an email to this user">jeffers@mcjeffjeff.uk</a></td>
							<td>2 days ago</td>
							<td class="icon"><a href="#" class="state active tooltip" title="toggle this user as active/inactive">active</a></td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<th scope="row">Jenny Plank</th>
							<td><a href="#" class="tooltip" title="edit this user">Jenx</a></td>
							<td><a href="#" class="tooltip" title="send an email to this user">jenxxx85@yahoomail.com</a></td>
							<td>last week</td>
							<td class="icon"><a href="#" class="state active tooltip" title="toggle this user as active/inactive">active</a></td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<th scope="row">James Stephenson</th>
							<td><a href="#" class="tooltip" title="edit this user">Usurper</a></td>
							<td><a href="#" class="tooltip" title="send an email to this user">js@mail.com</a></td>
							<td>last year</td>
							<td class="icon"><a href="#" class="state active tooltip" title="toggle this user as active/inactive">active</a></td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
						<tr>
							<th scope="row">Jordy Laforge</th>
							<td><a href="#" class="tooltip" title="edit this user">J-Dawg</a></td>
							<td><a href="#" class="tooltip" title="send an email to this user">j@enterprise.gov</a></td>
							<td>last month</td>
							<td class="icon"><a href="#" class="state active tooltip" title="toggle this user as active/inactive">active</a></td>
							<td class="icon"><a href="#" class="edit tooltip" title="edit this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/pencil.png" class="icon" alt="edit"></a></td>
							<td class="icon"><a href="#" class="delete tooltip" title="delete this user"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/cross.png" class="icon" alt="delete"></a></td>
						</tr>
					</tbody>
				
				</table>
				
									

			
			</div>
			
			<div class="tab-pane" id="user-new">
		
				<form novalidate>
				
					<h3>New User</h3>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Name</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="small firstname" placeholder="name"><input type="text" class="medium surname" placeholder="surname">
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Username</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="medium username">
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Email</label>
						</div>
						<div class="formAnswer">
							<input type="email" required="required">
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Mobile</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="medium">
						</div>
					</div>
					
					<hr>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Password</label>
						</div>
						<div class="formAnswer">
							<input type="password" class="medium">
						</div>
					</div>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Confirm</label>
						</div>
						<div class="formAnswer">
							<input type="password" class="medium">
						</div>
					</div>
					


				
					<h3>Permissions</h3>
					
					<div class="formRow">
						<div class="formQuestion">
							<p>Permissions Level</p>
							<small><a href="#" class="show-more-permissions btn btn-small">Show more</a></small>
						</div>
						<div class="formAnswer">
						
							<div class="ui-slider"></div>
							
							<div class="permissionLevel">
							
								<div class="level super text red">
									<h5>Super Admin</h5>
									<p>Access and control for entire website.</p>
								</div>

								<div class="level admin text purple">
									<h5>Admin</h5>
									<p>Control over all content and settings.</p>
								</div>

								<div class="level creator text blue">
									<h5>Content Admin</h5>
									<p>Full control over content.</p>
								</div>

								<div class="level editor text green">
									<h5>Content Editor</h5>
									<p>Ability to edit existing content.</p>
								</div>

								<div class="level peon text dark">
									<h5>Zero Permission</h5>
									<p>No ability to edit anything.</p>
								</div>

							</div>
							
						</div>
					</div>
					
					
					
					
					<div class="row-fluid more-permissions" style="display: none;">
					
						<div class="span4">
							<div class="boss"><input type="checkbox" id="site-admin" class="level1"> <label for="site-admin"><strong>Site Admin</strong></label></div>
							<hr>
							<div><input type="checkbox" id="website-settings" class="level2 site-admin"> <label for="website-settings">Website Settings</label></div>
							<div><input type="checkbox" id="manage-users" class="level2 site-admin"> <label for="manage-users">Manage Users</label></div>
							<div><input type="checkbox" id="manage-logs" class="level2 site-admin"> <label for="manage-logs">Manage Logs</label></div>
						</div>
						
						<div class="span4">
							<div class="boss"><input type="checkbox" id="content-admin" class="level1"> <label for="content-admin"><strong>Content Admin</strong></label></div>
							<hr>
							<div><input type="checkbox" id="page-content" class="level2 content-admin"> <label for="page-content">Page Content</label></div>
							<div><input type="checkbox" id="manage-news" class="level2 content-admin"> <label for="manage-news">Manage News</label></div>
							<div><input type="checkbox" id="manage-galleries" class="level2 content-admin"> <label for="manage-galleries">Manage Galleries</label></div>
							<div><input type="checkbox" id="manage-blog" class="level2 content-admin"> <label for="manage-blog">Manage Blog</label></div>
							<div><input type="checkbox" id="manage-twitter" class="level2 content-admin"> <label for="manage-twitter">Manage Twitte</label>r</div>
						</div>
						
						<div class="span4">
							<div class="boss"><input type="checkbox" id="modules-admin" class="level1"> <label for="website-settings"><strong>Modules Admin</strong></label></div>
							<hr>
							<div><input type="checkbox" id="manage-expressions" class="level2 modules-admin"> <label for="manage-expressions">Manage Expressions</label></div>
							<div><input type="checkbox" id="manage-rare-crafts" class="level2 modules-admin"> <label for="manage-rare-crafts">Manage Rare Crafts</label></div>
							<div><input type="checkbox" id="manage-comments" class="level2 modules-admin"> <label for="manage-comments">Manage Comments</label></div>
							<div><input type="checkbox" id="manage-quicklinks" class="level2 modules-admin"> <label for="manage-quicklinks">Manage Quicklinks</label></div>
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
				
			<div class="tab-pane" id="user-edit">
				blank
			</div>		
		
		
		
			<div id="dialog-deleteuser" style="display:none;">
				Really delete this user?<br>
				<span class="red text">This action cannot be undone.</span>
			</div>
		
		
		
		
		