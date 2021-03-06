<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
   
   
   <?php $theme = "themes/birdchess"; ?>
   
   
   
    <head>
		<title>Super Dooper CMS</title>
		
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="<?php echo( $theme ) ?>/css/vendor/normalize/1.0.1/normalize.min.css">
        <link rel="stylesheet" href="<?php echo( $theme ) ?>/css/vendor/bootstrap/2.2.1/bootstrap.custom.min.css">        
        <link rel="stylesheet" href="<?php echo( $theme ) ?>/css/vendor/jtour/1.2.0/theme3/style.css">        
		
		<link rel="stylesheet/less" type="text/css" href="<?php echo( $theme ) ?>/css/main.less">
		
        <script src="<?php echo( $theme ) ?>/js/fonts.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/tmpl/2.1.0/tmpl.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/less/1.3.1/less.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/modernizr/2.6.1/modernizr.min.js"></script>
		
    </head>
	
    <body>
				
		<div id="container">
		
			<header class="site-header">
				<h1>Dot Label CMS</h1>
			</header>
			
			<?php include('html-includes/account-bar.php'); ?>
			
			
			<section class="body" role="main">
			
				<?php include('html-includes/navigation.php'); ?>
			
				<section class="content">
					<?php 
						// include the PHP file with the content for this page.
						$page = ( $_SERVER['QUERY_STRING'] == "" ? 'dashboard' : $_SERVER['QUERY_STRING']  );
						include('html-includes/' . $page . '.php'); 
					
					?>
				</section>
				
			</section>
			
			<footer></footer>
		
		</div>
		

        <script src="<?php echo( $theme ) ?>/js/vendor/jquery/1.9.1/jquery.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/jqueryui/1.10.0/jqueryui.js"></script>
		<!--<script src="http://code.jquery.com/jquery-migrate-1.1.0.js"></script>-->
		
		<!-- load the js template file for current page -->
		<?php  echo('<script src="' . $theme . '/js/pages/' . $page . '/tmpl-' . $page . '.js"></script>');  ?>

		<script src="<?php echo( $theme ) ?>/js/vendor/bootstrap/2.3.1/bootstrap.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/qtip/2.0.1/qtip2.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/ckeditor/4.0.1/ckeditor.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/select2/3.4.0b/select2.js"></script>
        <script src="<?php echo( $theme ) ?>/js/vendor/jtour/1.3.0/jTour.js"></script>

        <script src="<?php echo( $theme ) ?>/js/plugins.js"></script>
        <script src="<?php echo( $theme ) ?>/js/main.js"></script>
		
		<script src="<?php echo( $theme ) ?>/js/shell/nav.js"></script>
		<script src="<?php echo( $theme ) ?>/js/shell/account-bar.js"></script>
		<script src="<?php echo( $theme ) ?>/js/shell/image-zoom.js"></script>
		
        <script src="<?php echo( $theme ) ?>/js/components/alerts.js"></script>
        <script src="<?php echo( $theme ) ?>/js/components/widgets.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/progress.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/tables.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/tabs.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/spinners.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/forms.js"></script>		
        <script src="<?php echo( $theme ) ?>/js/components/preview-site.js"></script>		
		
		
		<?php 
			// include the php file wit the jQuery Tour content.
			$page = ( $_SERVER['QUERY_STRING'] == "" ? 'dashboard' : $_SERVER['QUERY_STRING']  );
			include( $theme . '/tours/' . $page . '.php'); 
					
		?>
		
		<!-- load the script file for current page -->
		<?php  echo('<script src="' . $theme . '/js/pages/' . $page . '/' . $page . '.js"></script>');  ?>
		
	</body>
	
	
</html>
