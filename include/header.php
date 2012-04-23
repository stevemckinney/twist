<!DOCTYPE html>
<html lang="en"
{if embed:body_class} class="{embed:body_class} no-js"{if:elseif segment_1} class="{segment_1} {if segment_1 == "blog"}{segment_3} entry {if:elseif segment_1 == "portfolio"} {segment_3} item {if:elseif segment_1 == "downloads"} dl {/if}no-js"{if:else} class="home no-js"{/if}>
<head>
<!-- Meta -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta charset="utf-8">
<title>{if embed:entry_title}{embed:entry_title} | Portfolio of Steve McKinney{if:else}Portfolio of Steve McKinney a web designer from Manchester | {site_name}{/if}</title>
<meta name="description" content="">
<meta name="keywords" content="">
<meta name="author" content="Steve McKinney">
<meta name="copyright" content="Steve McKinney (http://iamsteve.me).">

<!-- CSS -->
<link rel="stylesheet" href="{site_url}/assets/css/master.css" media="screen">
<!-- JavaScript -->
<script src="http://use.typekit.com/azr7hey.js"></script>
<script>try{Typekit.load();}catch(e){};</script>
<script src="{site_url}/assets/js/modernizr.js"></script>

<!-- Mobile -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<!-- Verification -->
<meta name="google-site-verification" content="kvxM4eH_QHyUGdJK0LEQj3aZi7Vew5AooNVxk79zruU">
<meta name="y_key" content="e831cde43ec8e068">
<!-- Other -->
<link rel="alternate" type="application/rss+xml" title="insert" href="{site_url}/blog/feed">
<link rel="shortcut icon" href="{site_url}/favicon.png">
<link rel="apple-touch-icon" href="{site_url}/apple-touch-icon.png">

<!-- IE crap -->
<meta http-equiv="cleartype" content="on">
<!--[if (gt IE 6)&(lte IE 8)]>
<script src="{site_url}/assets/js/selectivizr.js"></script>
<script src="{site_url}/assets/js/nwmatcher.js"></script>
<![endif]-->
</head>
<body>

<div class="container">

<header role="banner">
<h1><a href="/" title="Back to the homepage">I am Steve</a></h1>

<nav role="navigation">
	<ul>
		<li><a href="{site_url}" title="Back to the homepage">Home</a></li>
		<li><a href="{site_url}/about" title="About">About</a></li>
		<li><a href="{site_url}/contact" title="Contact">Contact</a></li>	
	</ul>
</nav>
</header>

<section role="main">