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
<head>
	<!-- Meta -->
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<!-- In loving memory of Albert Phillips -->
	<title>Sass starter</title>
	<meta name="description" content="framework, sass">
	<meta name="keywords" content="A SASS/Compass framework">

	<!-- Mobile -->
	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-title" content="">
	
	<!-- CSS -->
	<!--[if gt IE 8]><!--><link href="assets/css/master.css" rel="stylesheet"><!--<![endif]-->
	
	<!-- JavaScript -->
	<script src="assets/js/modernizr.js"></script>
	<script src="//use.typekit.net/yol4bnj.js"></script>
	<script>try{Typekit.load();}catch(e){}</script>

	<!-- Other -->
	<!-- <link rel="alternate" type="application/rss+xml" title="Blog | Portfolio of Steve McKinney" href="http://iamsteve.me/blog/feed">
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="apple-touch-icon-precomposed" href="/assets/apple-touch-icon.png">
	<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/apple-touch-icon-144x144.png"> -->
	
	<!-- IE -->
	<meta http-equiv="cleartype" content="on">
	<!--[if lt IE 9]>
		<link href="assets/css/ie.css" rel="stylesheet">
  	<script src="http://s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
  	<script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
  <![endif]-->

</head>
<body>

<div class="container">

	<header role="banner">
		<h1><a href="/">Sass starter</a></h1>
	</header>
	<nav role="navigation" class="nav">
		<a href="#" data-tab="0" title="Back to the homepage">Home</a><a href="#" data-tab="1" title="Base HTML elements styled">Basic elements</a><a href="#" data-tab="2" title="Mixins library">Mixins</a>
	</nav>
	<section role="main">