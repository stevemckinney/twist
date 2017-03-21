// Notice constructor
function Notice(status, selector) {
	this.selector = (selector === true) ? selector : 'notice';
	this.status = (status === true) ? selector : 'info';
	this.notice;
	this.close;
}

// Generate the notice
Notice.prototype.generate = function(text) {
  text = typeof text !== 'undefined' ? text : 'Added todo list item.';
  
	var markup = '<div class="' + this.selector + ' ' + this.selector + '-' + this.status + '">' + '<p class="' + this.selector + '-body ' + this.selector + '-' + this.status + '-body">' + text + '</p>' + '</div>';
	this.notice = $('body').prepend(markup);
	
	return this;
};

// Append a close button
Notice.prototype.close = function() {
	this.close = $('.' + this.selector)
		.append('<button class="' + this.selector + '-close">&#x2421;</button>')
		.on('touchstart click', function() {
			$(this).addClass('notice-hidden');
		});
		
	return this;
};

// Remove the notice after closing
Notice.prototype.remove = function() {
	this.delay(200).remove();
	return this;
};