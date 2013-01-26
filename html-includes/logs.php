
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
				<a href="#log-flagged" data-toggle="tab"><img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/flag.png" class="icon" alt=""> All flagged logs <span class="badge">4</span></a>
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
					
					<!-- Template for the current list of logs -->
					<script type="text/x-tmpl" id="tmpl-logs-table">
				
						{% for (var i=0; i<o.length; i++) { %}
							
							{% if (o[i].flagged) { %}
							<tr class="flagged">
							{% } else { %}
							<tr class="unflagged">
							{% } %}
								<th scope="row">{%=o[i].time%}</th>
								<td><a href="mailto:{%=o[i].email%}" class="tooltip" title="send an email to this user">{%=o[i].user%}</a></td>
								<td><a href="#{%=o[i].id%}" class="view">{%=o[i].description%}</a></td>
								<td class="icon"><a href="#" class="tooltip state {% if (o[i].flagged) { %}flagged{% } else { %}unflagged{% } %}" title="toggle flagging this log as important" data-flag-id="{%=o[i].id%}">Flag this</a></td>
							</tr>
							
							
						{% } %}
						
						{% if (o.length<=0) { %}
								
							<tr class="unflagged">
								<th scope="row">&mdash;</th>
								<td>&mdash;</td>
								<td>Couldn&prime;t find any logs.</td>
								<td class="icon"></td>
							</tr>
						
						{% } %}
						
					</script>
					
					<tbody>
						
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
				
				<table class="table table-hover" id="logs-flagged-table">
				
					<thead>
						<tr>
							<th scope="col">Time</th>
							<th scope="col">Who</th>
							<th scope="col">What</th>
							<td></td>
						</tr>
					</thead>
					
					<tbody>
						<!-- Template for the current list of logs -->
						<script type="text/x-tmpl" id="tmpl-logs-flagged-table">
					
							{% for (var i=0; i<o.length; i++) { %}
								
								{% if (o[i].flagged) { %} 
								<tr class="flagged"> 
								
									<th scope="row">{%=o[i].time%}</th>
									<td><a href="mailto:{%=o[i].email%}" class="tooltip" title="send an email to this user">{%=o[i].user%}</a></td>
									<td><a href="#{%=o[i].id%}" class="view">{%=o[i].description%}</a></td>
									<td class="icon"><a href="#" class="tooltip state {% if (o[i].flagged) { %}flagged{% } else { %}unflagged{% } %}" title="toggle flagging this log as important" data-flag-id="{%=o[i].id%}">Flag this</a></td>
								</tr>
								{% } %}
								
							{% } %}
							
							
							{% if (o.length<=0) { %}
								
								<tr class="unflagged">
									<th scope="row">&mdash;</th>
									<td>&mdash;</td>
									<td>No logs flagged! <img src="<?php echo( $theme ) ?>/img/vendor/fugue/icons/script-smiley.png" class="icon" alt="no logs flagged for warning (smiley face)"></td>
									<td class="icon"></td>
								</tr>
							
							{% } %}
							
						</script>
					
						
											
					</tbody>
				
				</table>

			</div>			
			
			<div class="tab-pane" id="log-current">
			
				<!-- Template for the selected log 
				<script type="text/x-tmpl" id="tmpl-log-selected">-->
					
					
					<h3>Log #13</h3>
					<hr>
					
					<div class="formRow text">
						<div class="formQuestion"><strong>Date:</strong></div>
						<div class="formAnswer"><p>Jan 1st 2013</p></div>
					</div>
			
					<div class="formRow text">
						<div class="formQuestion"><strong>Time:</strong></div>
						<div class="formAnswer"><p>12:29 pm</p></div>
					</div>
						
					<div class="formRow text">
						<div class="formQuestion"><strong>User:</strong></div>
						<div class="formAnswer"><p>Jenny</p></div>
					</div>
					
						
				<!--</script>-->

			</div>			
			
			
			
			
		
		
		