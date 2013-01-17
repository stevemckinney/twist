<footer role="contentinfo">
	<ul>
		<li>Sass starter, free to use as you please as long as you don't sell it on.</li>
	</ul>
</footer>

<!-- JavaScript -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<script src="assets/js/consistent.js"></script>
<script>
	
	slider = new Swipe(document.getElementById('slider'), {
		callback: function(event, index, elem) {
			setTab(selectors[index]);
		}
	}),
	selectors = document.querySelector('.nav').children;

	for (var i = 0; i < selectors.length; i++) {
		 var elem = selectors[i];

		 elem.setAttribute('data-tab', i);
		 elem.onclick = function(e) {
			 e.preventDefault();
			 setTab(this);
			 slider.slide(parseInt(this.getAttribute('data-tab'),10),300);
		 }
	}

	function setTab(elem) {
		 for (var i = 0; i < selectors.length; i++) {
			 selectors[i].className = selectors[i].className.replace('on','');
		 }
		 elem.className += 'on';
	}


</script>
</body>
</html>