<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
   
   
    <head>
		<title></title>
		
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/vendor/normalize/1.0.1/normalize.min.css">
        <link rel="stylesheet" href="css/vendor/bootstrap/2.2.1/bootstrap.custom.min.css">
        
		
		<link rel="stylesheet/less" type="text/css" href="css/main.less">
		
        <script src="js/fonts.js"></script>
        <script src="js/vendor/less/1.3.1/less.js"></script>
        <script src="js/vendor/modernizr/2.6.1/modernizr.min.js"></script>
		
    </head>
	
    <body>
				
		<div id="container">
		
			<header class="container-fluid">
				<h1>Dot Label CMS</h1>
			</header>
			
			<?php include('html-includes/account-bar.html'); ?>
			
			
			<section class="body" role="main">
			
				<?php include('html-includes/navigation.html'); ?>
			
				<section class="content">
					<?php 
						
						$page = ( $_SERVER['QUERY_STRING'] == "" ? 'dashboard' : $_SERVER['QUERY_STRING']  );
						include('html-includes/' . $page . '.html'); 
					
					?>
				</section>
				
			</section>
			
			<footer></footer>
		
		</div>
		
		
        <script src="js/vendor/jquery/1.8.2/jquery.min.js"></script>
        <script src="js/vendor/jqueryui/1.9.1/jqueryui.custom.min.js"></script>
		
        <script src="js/vendor/bootstrap/2.2.1/bootstrap.min.js"></script>
        <script src="js/vendor/qtip/2.0.0/qtip.min.js"></script>

        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
		
		
		<?php 
			
			echo('<script src="js/pages/' . $page . '.js"></script>'); 
		
		?>
		

    </body>
	
	
</html>
