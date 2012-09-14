<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
<!-- Meta -->
<meta charset="utf-8">
<title>{block:TagPage}Posts Tagged &lsquo;{Tag}&rsquo; | {/block:TagPage}{block:PostTitle}{PostTitle} | {/block:PostTitle}{Title}</title>
{block:Description}
<meta name="description" content="{MetaDescription}">
{/block:Description}
<meta name="keywords" content="">

<!--

Travel blog theme
by Steve McKinney

Questions or comments? 
email: steve@iamsteve.me
twitter: @irSteve

-->

<meta name="font:Title" content="Arial">
<meta name="font:Body" content="Arial">
<meta name="font:Accent" content="Lucida Sans">
<meta name="font:Heading" content="Enriqueta">
<meta name="font:Body" content="Enriqueta">

<meta name="image:Header" content="">
<meta name="image:Background" content="">

<meta name="color:Background" content="#3b627e">
<meta name="color:Primary" content="">
<meta name="color:Secondary" content="">

<meta name="if:Show People I Follow" content="1">
<meta name="if:Show Tags" content="1">
<meta name="if:Show Album Art on Audio Posts" content="1">
<meta name="if:Enable Jump Pagination" content="0">
<meta name="if:Following Links" content="0">

<meta name="text:Disqus Shortname" content="">
<meta name="text:Copyright Text" content="Copyright &copy; {CopyrightYears} {Title}">

<meta name="image:Header" content="">
<meta name="image:Background" content="">

<!-- CSS -->
<link rel="stylesheet" href="http://iamsteve.me/assets/themes/travel/master.css" media="screen">
<style type="text/css">{CustomCSS}</style>
<!-- JavaScript -->
<script src="modernizr.js"></script>

<!-- Mobile -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
<!-- Other -->
<link rel="alternate" type="application/rss+xml" href="{RSS}">
<link rel="shortcut icon" href="{Favicon}">
<link rel="apple-touch-icon" href="{PortraitURL-128}">

<!-- IE -->
<meta http-equiv="cleartype" content="on">
<!--[if (gt IE 6)&(lte IE 8)]>
<script src="selectivizr.js"></script>
<script src="nwmatcher.js"></script>
<![endif]-->
</head>
<body class="{block:IndexPage}index{/block:IndexPage}{block:TagPage}tag{/block:TagPage}{block:DayPage}day{/block:DayPage}{block:IfLeftSidebar}left{/block:IfLeftSidebar}{block:IfNotLeftSidebar}right{/block:IfNotLeftSidebar}{block:SearchPage}results{/block:SearchPage}">

<div class="container">
	
	<header role="banner">
	
	<form action="/search" method="get">
		<input type="search" name="q" value="{SearchQuery}">
		<input type="submit" value="Search">
	</form>
	
	<h1><a href="/" title="Back to the homepage">{Title}</a></h1>
	{block:HasPages}
	<nav role="navigation">
		<ul>
			{block:Pages}
				<li><a href="{URL}">{Label}</a></li>
			{/block:Pages}
			{block:AskEnabled}<li><a href="/ask" title="My ask form">{AskLabel}</a></li>{/block:AskEnabled}
			{block:SubmissionsEnabled}<li><a href="/submit" title="Submit something to my blog">{SubmitLabel}</a></li>{/block:SubmissionsEnabled}
		</ul>
	</nav>
	{/block:HasPages}
	</header>
	
	<section role="main">
	{block:SearchPage}
		<h1>{SearchResultCount} of results for {SearchQuery}</h1>
	
		<form action="/search" method="get">
			<input type="search" name="q" value="{SearchQuery}">
			<input type="submit" value="Search">
		</form>
	{/block:SearchPage}
	{block:Posts}
		
		{block:Photo}
		<article role="article" class="photo{block:Tags} {URLSafeTag}{/block:Tags}">
		<div class="content">
			{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
			
			<figure>
				<img src="{PhotoURL-500}" alt="{PhotoAlt}">
				{block:Caption}<figcaption>{Caption}</figcaption>{/block:Caption}
			</figure>
		</div>
				
		<ul role="menu">
			{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
			{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
			{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
			{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
		</ul>	
		</article>
		{block:PostNotes}
		<section role="region">
		{PostNotes}
		</section>
		{/block:PostNotes}
		{/block:Photo}
		
		{block:Photoset}
		<article role="article" class="photo{block:Tags} {URLSafeTag}{/block:Tags}">
		<div class="content">
			{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
			{Photoset-500}
			{block:Caption}<figcaption>{Caption}</figcaption>{/block:Caption}
		</div>
			
		<ul role="menu">
			{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
			{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
			{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
			{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
		</ul>
	
		</article>
		{/block:Photoset}
			
		{block:Video}
		<article role="article" class="video{block:Tags} {URLSafeTag}{/block:Tags}">
		<div class="content">
			{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
			
			<figure>
				{Video-500}
				{block:Caption}<figcaption>{Caption}</figcaption>{/block:Caption}
			</figure>
		</div>
		
		<ul role="menu">
			{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
			{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
			{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
			{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
		</ul>
	
		</article>
		{/block:Video}
		
		{block:Audio}
		<article role="article" class="audio{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				<figure>
				{block:IfShowAlbumArtOnAudioPosts}
					{block:AlbumArt}<img src="{AlbumArtURL}" alt="{block:Artist}{Artist}{/block:Artist}{block:TrackName} - {TrackName}{/block:TrackName}, album art">{/block:AlbumArt}
				{/block:IfShowAlbumArtOnAudioPosts}
				{AudioPlayerBlack}
				{block:Caption}<figcaption>
					<ul>
						<li>{Caption}</li>
						{block:ExternalAudio}<li><a class="download" href="{ExternalAudioURL}" title="{lang:Download} {TrackName}">{lang:Download this track}</a></li>{/block:ExternalAudio}
					</ul>
				</figcaption>{/block:Caption}
				</figure>
			</div>
			
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
		{/block:Audio}
		
		{block:Quote}
		<article role="article" class="quote{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				
				<blockquote>
					<p>{Quote}</p>
					{block:Source}<footer>{Source}</footer>{/block:Source}
				</blockquote>
			</div>
			
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
		{/block:Quote}
		
		{block:Chat}
		<article role="article" class="chat{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				
				<ul>
				{block:Lines}
				<li>
					{block:Label}{Label}{/block:Label}	
					{Line}
				</li>
				{/block:Lines}
				</ul>
			</div>
				
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
		{/block:Chat}
		
		{block:Text}
		<article role="article" class="text{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				{body}
			</div>	
	
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
		{/block:Text}
		
		{block:Link}
		<article role="article" class="link{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				<h1><a href="{URL}" title="View this link">{Name}</a></h1>
				{block:Description}<p>{Description}</p>{/block:Description}
			</div>
				
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
	  {/block:Link}
	  
		{block:Answer}
		<article role="article" class="question{block:Tags} {URLSafeTag}{/block:Tags}">
			<div class="content">
				{block:Title}<h1><a href="{Permalink}" title="View {Title} in full">{Title}</a></h1>{/block:Title}
				<blockquote>
					<dl>
						<dt>{Question}</dt>
						<dd>{Answer}</dd>
					</dl>
					<footer>{Asker}</footer>
				</blockquote>
			</div>
			<ul role="menu">
				{block:RebloggedFrom}<li><a href="{ReblogRootURL}" title="{ReblogParentName} &ndash; {ReblogParentTitle}">Source</a></li>{/block:RebloggedFrom} 
				{block:NoteCount}<li><a href="{Permalink}" title="{NoteCount} post notes for this post">&hearts; {NoteCount}</a></li>{/block:NoteCount}
				{block:Date}<li><a href="{Permalink}"><time datetime="{Year}-{DayOfMonthWithZero}-{DayOfWeekNumber}">{DayOfWeekNumber} {Month} {Year}</time></a></li>{/block:Date}
				{block:IfDisqusShortname}<li><a class="dsq" href="{Permalink}#disqus_thread">Comments</a></li>{/block:IfDisqusShortname}
			</ul>
		</article>
		{/block:Answer}
	{/block:Posts}
	
	{block:Pagination}
	<nav role="navigation" class="pagination">
		<ul>
			{block:PreviousPage}<li><a href="{PreviousPage}" title="Previous set of posts">Previous</a></li>{/block:PreviousPage}
			{block:JumpPagination length="5"}
				{block:CurrentPage}<li><a href="{URL}" title="Go to posts page number {PageNumber}">{PageNumber}</a></li>{/block:CurrentPage}
				{block:JumpPage}<li><a href="{URL}" title="Go to posts page number {PageNumber}">{PageNumber}</a></li>{/block:JumpPage}
			{/block:JumpPagination} 
			{block:NextPage}<li><a href="{NextPage}" title="Next set of posts">Next</a></li>{/block:NextPage}
		</ul>
	</nav>
	{/block:Pagination}
	
	</section>
	
	<aside role="complementary">
		{block:Description}
    	<img src="{PortraitURL-64}" alt="">
    	<p></p>
    {/block:Description}
		{block:Following}
		<ul {block:IfFollowingLinks}class="links"{/block:IfFollowingLinks}{block:IfNotFollowingLinks}class="images"{/block:IfNotFollowingLinks}>
			{block:IfFollowingLinks}
				<li><a href="{FollowedURL}" title="{FollowedTitle}">{FollowedName}</a></li>
			{/block:IfFollowingLinks}
			{block:IfNotFollowingLinks}
				<li><a href="{FollowedURL}" title="{FollowedTitle}">{FollowedPortraitURL-48}</a></li>
			{/block:IfNotFollowingLinks}
		{/block:Following}
		</ul>
		{block:Twitter}
    <div id="twitter" style="display:none;">
        <div id="tweets"></div>
				<h2><a href="http://twitter.com/{TwitterUsername}">{TwitterUsername}</a></h2>
    </div>

    <script type="text/javascript">
        function recent_tweets(data) {
            for (i=0; i<data.length; i++) {
                document.getElementById("tweets").innerHTML =
                    document.getElementById("tweets").innerHTML +
                    '<a href="http://twitter.com/{TwitterUsername}/status/' +
                    (data[i].id_str ? data[i].id_str : data[i].id) +
                    '"><div class="content">' + data[i].text +
                    '</div></a>';
            }
            document.getElementById("twitter").style.display = 'block';
        }
    </script>
		{/block:Twitter}
	</aside>
	
	<footer role="contentinfo">
		<ul>
			<li><a href="/rss" title="">{lang:RSS}</a></li>
			<li><a href="/random">{lang:Random}</a></li>
			<li><a href="/archive">{lang:Archive}</a></li>
			{block:AskEnabled}<li><a href="/ask">{AskLabel}</a></li>{/block:AskEnabled}
			{block:SubmissionsEnabled}<li><a href="/submit">{SubmitLabel}</a></li>{/block:SubmissionsEnabled}
			<li><a href="/mobile">{lang:Mobile}</a></li>
			{block:IfCopyrightText}<li><small>{text:Copyright Text}</small></li>{/block:IfCopyrightText}
		</ul>
	</footer>

</div>

<!-- JS -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="{site_url}/assets/js/consistent.js"></script>
{block:IfGoogleAnalytics}
<script>
var _gaq=[["_setAccount","{text:Google Analytics}"],["_trackPageview"]];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
s.parentNode.insertBefore(g,s)}(document,"script"));
</script>
{/block:IfGoogleAnalytics}
{block:Twitter}
<script type="text/javascript" src="/tweets.js"></script>
{/block:Twitter}
{block:IfDisqusShortname}
<script type="text/javascript">
    //<![CDATA[
    (function() {
        var links = document.getElementsByTagName('a');
        var query = '?';
        for(var i = 0; i < links.length; i++) {
            if(links[i].href.indexOf('#disqus_thread') >= 0) {
                query += 'url' + i + '=' + encodeURIComponent(links[i].href) + '&';
            }
        }
        document.write('<script charset="utf-8" type="text/javascript" src="http://disqus.com/forums/{text:Disqus Shortname}/get_num_replies.js' + query + '"></' + 'script>');
    })();
    //]]>
</script>
{/block:IfDisqusShortname}
</body>
</html>