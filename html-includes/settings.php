
		<header class="page-header">
			<h2>
				Website Settings
				<small>Configuration for your whole website</small>
			</h2>
			<hr>
		</header>
		





		<ul class="nav nav-tabs nav-tabs-secondary current-page-tabs">

			<li id="tab-site-meta" class="active">
				<a href="#site-meta" data-toggle="tab">
					<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/document-code.png" class="icon"> Meta Data
				</a>
			</li>
			
		</ul>
		
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="site-meta">
		
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
								<img src="http://images.wikia.com/half-life/en/images/6/61/Flickr_favicon.png" alt="preview of favicon" class="favicon">
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
								<img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/disk-black.png" class="icon" alt="edit">
							</button>
						</div>
		
					</div>
					
				</form>
			
			</div>




		</div>