
		<header class="page-header">
			<h2>
				Admin Logs
				<small>See what has happened in the admin interface</small>
			</h2>
			<hr>
		</header>
		
		
		
		
		<ul class="nav nav-tabs">
			<li id="tab-logs-list" class="active">
				<a href="#log-list" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/book-open-list.png" class="icon" alt=""> Logs for Jan 1st 2013</a>
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
								<option>03</option>
							</select>
						
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
						<tr class="flagged">
							<th scope="row">11:34</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jimbob</a></td>
							<td><a href="#" class="view">Deleted a photo from "My Horses"</a></td>
							<td><a href="#" class="tooltip state flagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
						<tr class="unflagged">
							<th scope="row">11:34</th>
							<td><a href="#" class="tooltip" title="send an email to this user">Jimbob</a></td>
							<td><a href="#" class="view">Deleted a photo from "My Horses"</a></td>
							<td><a href="#" class="tooltip state unflagged" title="toggle flagging this log as important">Flag this</a></td>
						</tr>
					</tbody>
				
				
				</table>
				
				

			
			</div>
			
			
			<div class="tab-pane" id="log-flagged">
			
				<h3>All flagged logs</h3>

			</div>			
			
			<div class="tab-pane" id="log-current">
			
				<h3>asdasd</h3>

			</div>			
			
			
			
			
		
		
		