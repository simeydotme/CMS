
		<header class="page-header">
			<h2>
				Your Options
				<small>Options for your admin account</small>
			</h2>
			<hr>
		</header>
		
		
		
		<ul class="nav nav-tabs">
			<li class="active">
				<a href="#user-edit" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-text-field.png" class="icon"> Details</a>
			</li>
			<li>
				<a href="#user-password" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/ui-text-field-password.png" class="icon"> Password</a>
			</li>
		</ul>
		
		<div class="tab-content">
			
				
			<div class="tab-pane active" id="user-edit">

				<form novalidate>
				
					<div class="formRow">
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<h4>User Options
							<small>Change how you appear in the admin interface</small></h4>
						</div>
					</div>
					<br>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Your name</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="small firstname" placeholder="name" value="Jimmzer"><input type="text" class="medium surname" placeholder="surname" value="McJimmykins">
						</div>
					</div>
				
					<div class="formRow">
						<div class="formQuestion">
							<label>Your username</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="medium username" value="Jimbob">
						</div>
					</div>
					
					<br>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Email</label>
						</div>
						<div class="formAnswer">
							<input type="email" value="jimbob@hotmail.com">
						</div>
					</div>
					
					<br>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Mobile</label>
						</div>
						<div class="formAnswer">
							<input type="text" class="medium" value="0123456789">
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
			
			<div class="tab-pane" id="user-password">
				
				<form novalidate="novalidate">
				
					<div class="formRow">
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<h4>Password
							<small>Change your password</small></h4>
						</div>
					</div>
					<br>
					
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Current Password</label>
						</div>
						<div class="formAnswer">
							<input type="password" class="medium">
						</div>
					</div>	
								
					<div class="formRow">
						<div class="formQuestion">
							<label>New Password</label>
						</div>
						<div class="formAnswer">
							<input type="password" class="medium" id="txtPassword">
							<div id="passwordStrength" class="passwordStrengthWrapper medium">
								<div class="passwordStrength"></div>
							</div>
						</div>
					</div>	
								
					<div class="formRow">
						<div class="formQuestion">
							<label>Confirm New Password</label>
						</div>
						<div class="formAnswer">
							<input type="password" class="medium">
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
		
		
		
		</div>
		
		