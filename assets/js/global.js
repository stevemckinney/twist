var $n = $('.navigation'),
		$nt = $('.navigation-toggle'),
		$c = $('.site'),
		$h = $('.header'),
		$b = $('body');

var navigation_size_class_names = 'navigation-small navigation-large',
		navigation_state_class = 'navigation-inactive navigation-active';

// $c
enquire.register('screen and (min-width: 48em)', {
	
	match : function() {
		// Remove small navigation styles, add large styles,
		// append to header and remove state classes
		$n.toggleClass(navigation_size_class_names)
			.removeClass(navigation_state_class)
			.appendTo($h);
		$c.removeClass('site-active');
	},
	
	unmatch : function() {
		$n.toggleClass(navigation_size_class_names)
			.prependTo($b);
	},

	setup : function() {},

	deferSetup : true,

	// OPTIONAL
	// If supplied, triggered when handler is unregistered.
	// Place cleanup code here
	destroy : function() {}
});

// Navigation toggle
// ---------------------------
$nt.on('click touchstart', function(e) {
	e.preventDefault();
	
	$n.toggleClass(navigation_state_class);
	
	// Toggle active state
	$nt.toggleClass('navigation-toggle-active');
	
	// Slide the container over
	$c.toggleClass('site-active');
	
	// Apply overflow: hidden to body,
	// otherwise we get a nasty empty scroll area,
	// certain this is a bug
	$b.toggleClass('overflow-hidden');
});