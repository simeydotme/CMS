
		<header class="page-header">
			<h2>
				Admin Logs
				<small>See what has happened in the admin interface</small>
			</h2>
			<hr>
		</header>
		
		
		
		
		<ul class="nav nav-tabs">
			<li id="tab-logs-list" class="active">
				<a href="#log-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/book-open-list.png" class="icon" alt=""> Logs for 3rd Jan 2013</a>
			</li>			
			
			<li id="tab-logs-flagged">
				<a href="#log-flagged" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/flag.png" class="icon" alt=""> All flagged logs</a>
			</li>

			<li id="tab-logs-current" class="disabled">
				<a href="#log-current" data-toggle=""><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/book-open-bookmark.png" class="icon" alt=""> </a>
			</li>
		</ul>
		
		<div class="tab-content">
		
			<div class="tab-pane active" id="log-list">
		
		
				<div class="form-actions above-table">
					
					<div class="formRow">
					
						<div class="formQuestion">
							<label>See logs from:</label>
						</div>
						
						<div class="formAnswer">
					
							<select class="input-small">
								<option>2013</option>
								<option>2012</option>
								<option>2011</option>
							</select>
							
							<select class="input-medium">
								<option>January</option>
								<option>February</option>
								<option>March</option>
							</select>
							
							<select class="input-small">
								<option>01</option>
								<option>02</option>
								<option selected="selected">03</option>
							</select>
							
							<button class="btn blue">show logs</button>
						
						</div>
						
					</div>
					
				</div>
				
				
				
				<table class="table table-hover" id="logs-table">
				
					<thead>
						<tr>
							<th scope="col">Time</th>
							<th scope="col">Who</th>
							<th scope="col">What</th>
							<td></td>
						</tr>
					</thead>
					
					<tbody>
						<tr class="unflagged">
							<th scope="row">22:17</th>
							<td><a href="#" class="tooltip" title="send an email to this user">James</a></td>
							<td><a href="#" class="view">Added "Paul" as a new user</a></td>
							<td class="icon"><a href="#" class="tooltip state unflagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="flagged">
							<th scope="row">13:34</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jimbob</a></td>
							<td><a href="#" class="view">Deleted a news article</a></td>
							<td class="icon"><a href="#" class="tooltip state flagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="unflagged">
							<th scope="row">10:59</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jenny</a></td>
							<td><a href="#" class="view">Uploaded image into "Cats"</a></td>
							<td class="icon"><a href="#" class="tooltip state unflagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="unflagged">
							<th scope="row">10:58</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jenny</a></td>
							<td><a href="#" class="view">Uploaded image into "Cats"</a></td>
							<td class="icon"><a href="#" class="tooltip state unflagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="unflagged">
							<th scope="row">10:55</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jenny</a></td>
							<td><a href="#" class="view">Uploaded image into "Cats"</a></td>
							<td class="icon"><a href="#" class="tooltip state unflagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="flagged">
							<th scope="row">09:55</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jenny</a></td>
							<td><a href="#" class="view">Deleted a news post</a></td>
							<td class="icon"><a href="#" class="tooltip state flagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
					</tbody>
				
				
				</table>
				
				
				<div class="pagination pagination-centered">
					<ul>
						<li class="prev"><a href="#"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/arrow-180-medium.png" class="icon" alt="view logs for 2nd Jan 2013"> 2nd</a></li>
						<li class="active"><a>3rd Jan 2013</a></li>
						<li class="next"><a href="#">4th <img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/arrow-000-medium.png" class="icon" alt="view logs for 4th Jan 2013"></a></li>
					</ul>
				</div>
				
				

			
			</div>
			
			
			<div class="tab-pane" id="log-flagged">
			
				<table class="table table-hover" id="logs-table">
				
					<thead>
						<tr>
							<th scope="col">Time</th>
							<th scope="col">Who</th>
							<th scope="col">What</th>
							<td></td>
						</tr>
					</thead>
					
					<tbody>
						<tr class="flagged">
							<th scope="row">13:34</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jimbob</a></td>
							<td><a href="#" class="view">Deleted a news article</a></td>
							<td class="icon"><a href="#" class="tooltip state flagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="flagged">
							<th scope="row">09:55</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jenny</a></td>
							<td><a href="#" class="view">Deleted a news post</a></td>
							<td class="icon"><a href="#" class="tooltip state flagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
					</tbody>
				
				
				</table>

			</div>			
			
			<div class="tab-pane" id="log-current">
			
				<h3>asdasd</h3>

			</div>			
			
			
			
			
		
		
		