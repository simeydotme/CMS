
		<header class="page-header">
			<h2>
				Website Settings
				<small>Configuration for your whole website</small>
			</h2>
			<hr>
		</header>
		





		<ul class="nav nav-tabs nav-tabs-secondary current-page-tabs">
			
			<li id="tab-site-main" class="active">
				<a href="#site-main" data-toggle="tab">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/gear.png" class="icon"> Main Settings
				</a>
			</li>

			<li id="tab-site-meta">
				<a href="#site-meta" data-toggle="tab">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-code.png" class="icon"> Meta Data
				</a>
			</li>
			
			<li id="tab-site-background">
				<a href="#site-background" data-toggle="tab">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/television-image.png" class="icon"> Background Image
				</a>
			</li>
			
		</ul>
		
		
		<div class="tab-content">
		
		
		
			<div class="tab-pane active" id="site-main">
				
				<form novalidate>
									
					<div class="formRow">
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<h4>Main Settings
							<small>Various options for your website</small></h4>
							
						</div>
					</div>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Website Name</label>
						</div>
						<div class="formAnswer">
							<input id="txtSiteName" type="text" class="large">
							<br><small class="text blue">This is the name of your website for admin purposes, it doesn't affect the actual website</small>
						</div>
					</div>
					
					<hr>
					
					<div class="formRow">
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<h4>Emails
							<small>Configure where certain emails will go</small></h4>
							
						</div>
					</div>



					<div id="admin-support-email">

						<div class="formRow">
							<div class="formQuestion">
								<label>Administrator's email</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/mail-at-sign.png" class="icon"></label>
									<input id="txtAdminEmail" type="text" class="medium" placeholder="someone@company.com">
								</div>
								<br><small>Emails regarding security will go here</small>
							</div>
						</div>
	
						<div class="formRow">
							<div class="formQuestion">
								<label>Support email</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/mail-send-receive.png" class="icon"></label>
									<input id="txtSupportEmail" type="text" class="medium" placeholder="someone@company.com">
								</div>
								<br><small>Emails regarding website support will go here</small>
							</div>
						</div>
						
						<hr>
						
					</div>	
						
						
					<div id="contact-email">
					
						<div class="formRow">
							<div class="formQuestion">
								<label>Contact email</label>
							</div>
							<div class="formAnswer">
								
								<div>
									<div class="input-prepend">
										<label class="add-on"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/mail-open.png" class="icon"> <small>(1)</small></label>
										<input id="txtContactEmail" type="text" class="medium" placeholder="someone@company.com">
									</div>
									<a href="#" class="btn blue add-contact-email-1" title="add another contact email"><i class="icon icon-plus icon-white"></i></a>
								</div>
								
								<div class="contact-email-wrapper-1">
									<div class="input-prepend contact-email">
										<label class="add-on"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/mail-open.png" class="icon"> <small>(2)</small></label>
										<input id="txtContactEmail2" type="text" class="medium" placeholder="someone@company.com">
									</div>
									<a href="#" class="btn blue add-contact-email-2" title="add another contact email"><i class="icon icon-plus icon-white"></i></a>
								</div>
								
								<div class="contact-email-wrapper-2">
									<div class="input-prepend contact-email">
										<label class="add-on"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/mail-open.png" class="icon"> <small>(3)</small></label>
										<input id="txtContactEmail3" type="text" class="medium" placeholder="someone@company.com">
									</div>
								</div>
								
								<small>Emails sent from website forms will go to all contact email addresses</small>
							
							</div>
						</div>
						
						<hr>
						
					</div>
						
					
					<div id="social-accounts">

						<div class="formRow">
							<div class="formQuestion"></div>
							<div class="formAnswer">
								<h4>Social
								<small>Hook up your social accounts for use throughout the site</small></h4>
								
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Facebook Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/facebook16.png" class="icon"></label>
									<input id="txtFacebook" type="text" class="small" placeholder="facebook.name">
								</div>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Twitter Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/twitter16.png" class="icon"></label>
									<input id="txtTwitter" type="text" class="small" placeholder="@twitter_name">
								</div>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Google+ Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/google16.png" class="icon"></label>
									<input id="txtGooglePlus" type="text" class="medium" placeholder="12345678912345">
								</div>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Pinterest Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/pinterest16.png" class="icon"></label>
									<input id="txtPinterest" type="text" class="small" placeholder="pinterest_name">
								</div>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Flickr Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/flickr16.png" class="icon"></label>
									<input id="txtFlickr" type="text" class="small" placeholder="flikr_name">
								</div>
							</div>
						</div>
						
						<hr>
						
							
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Youtube Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/youtube16.png" class="icon"></label>
									<input id="txtYoutube" type="text" class="small" placeholder="youtube_name">
								</div>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Vimeo Handle</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/vimeo16.png" class="icon"></label>
									<input id="txtVimeo" type="text" class="small" placeholder="vimeo_name">
								</div>
							</div>
						</div>
						
						<hr>
						
					</div>
						
						
					<div id="analytics-account">

						<div class="formRow">
							<div class="formQuestion"></div>
							<div class="formAnswer">
								<h4>Statistics
								<small>Get your analytics and tracking running</small></h4>
							</div>
						</div>
						
						<div class="formRow">
							<div class="formQuestion">
								<label>Google Analytics Code</label>
							</div>
							<div class="formAnswer">
								<div class="input-prepend">
									<label class="add-on"><img src="<?php echo( $theme ) ?>/img/interface/social-icons/analytics16.png" class="icon"></label>
									<input id="txtAnalytics" type="text" class="small" placeholder="UA-1234567-3">
								</div>
							</div>
						</div>
						
						<hr>
						
					</div>
						
						
										
					<div class="formRow buttonRow">
						
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<button type="submit" href="#" class="new btn green">
								<span>Save</span>
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="save">
							</button>
						</div>
		
					</div>
				
				
				
				</form>
				
			</div>
			
			
			
			
			<div class="tab-pane" id="site-meta">
		
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
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Author</label>
						</div>
						<div class="formAnswer">
							<input id="txtAuthor" type="text" value="Your Company's name">
						</div>
					</div>
					
					<div class="formRow">
						<div class="formQuestion">
							<label>Favicon</label>
						</div>
						<div class="formAnswer">
						
							<div class="address-bar">
								<img src="http://david.chalkskeletons.com/files/favicon.png" alt="preview of favicon" class="favicon">
								http://www.yourwebsiteurl.com
							</div>
							<span href="#" class="btn file-input">change <input type="file"></span>
							
							<br><small>example of how your favicon should look in a browser, image will update after saving</small>
						</div>
					</div>
					
					
					
					
					<div class="formRow buttonRow">
						
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<button type="submit" href="#" class="new btn green">
								<span>Save</span>
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="save">
							</button>
						</div>
		
					</div>
					
				</form>
			
			</div>

			<div class="tab-pane" id="site-background">
		
				<form novalidate>
				
					<h3>Edit Background Image</h3>
					
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
							<img src="http://www.twodelighted.com/wp-content/uploads/2012/02/IMG_4819-1024x682.jpg" alt="current background image" class="background-image-preview">
							<br><small class="text blue">This is the default image for all pages</small>
						</div>
					</div>
					
					
					<div class="formRow buttonRow">
						
						<div class="formQuestion"></div>
						<div class="formAnswer">
							<button type="submit" href="#" class="new btn green">
								<span>Save</span>
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="save">
							</button>
						</div>
		
					</div>

					
				</form>
				
			</div>

		</div>