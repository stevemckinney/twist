<?php 
  $page = $_SERVER['REQUEST_URI'];
  $page = basename($page);
  $page = $page ? $page : 'home';
 ?>
<!DOCTYPE html>
<!--[if IE 7 ]><html class="ie ie7 no-js <?php echo $page; ?>" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8 no-js <?php echo $page; ?>" lang="en"> <![endif]-->
<!--[if IE 9 ]><html class="ie ie9 no-js <?php echo $page; ?>" lang="en"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html class="<?php echo $page; ?> no-js" lang="en"><!--<![endif]-->

	<!-- Meta -->
	<meta charset="utf-8">
	<!-- In loving memory of Albert Phillips -->
	<title>Framework</title>
	<meta name="description" content="framework, sass">
	<meta name="keywords" content="A SASS/Compass framework">

	<!-- Mobile -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- CSS -->
	<link href="assets/css/master.css" media="screen" rel="stylesheet">
	
	<!-- JavaScript -->
	<script src="assets/js/modernizr.js"></script>
	<script src="//use.typekit.net/yol4bnj.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

	<!-- Other -->
	<!-- <link rel="alternate" type="application/rss+xml" title="Blog | Portfolio of Steve McKinney" href="http://iamsteve.me/blog/feed">
	<link rel="shortcut icon" href="http://iamsteve.me/favicon.ico">
	<link rel="apple-touch-icon" href="http://iamsteve.me/apple-touch-icon.png"> -->
	
	<!-- IE -->
	<meta http-equiv="cleartype" content="on">
	<!--[if (gt IE 6)&(lte IE 8)]>
		<script src="assets/js/selectivizr.js"></script>
		<script src="assets/js/nwmatcher.js"></script>
	<![endif]-->

</head>
<body>

<div class="container">

	<header role="banner">
		<h1><a href="/">Framework</a></h1>
		<nav role="navigation">
			<ul>
				<li><a href="/" title="Back to the homepage">Home</a></li>
				<li><a href="base.php" title="Base styles">Base CSS</a></li>
				<li><a href="elements.php" title="Most commonly used elements">Elements</a></li>	
			</ul>
		</nav>
	</header>