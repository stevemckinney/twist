function Password(toggle, password) {
	this.toggle = (toggle === true) ? selector : $('.button-password');
	this.password = (password === true) ? selector : $('.input-password');
	this.wrap;
	this.button;
	this.change;
}

Password.prototype.wrap = function() {
	this.password.wrap('<div class="field-group"></div>');
	
	return this;
}

Password.prototype.change = function(toggle, password) {
	var password = this.password,
			toggle = this.toggle;
	
	$('.field-password').on('click', this.toggle, function(e) {
		if (password.attr('type') === 'text') {	
			password.attr('type', 'password');
		}
		else {
			password.attr('type', 'text');
			this.toggle.toggleClass('button-password-hide').text('hide');
		}
	});
	
	return this;
}

Password.prototype.button = function() {
	var button = $('<button type="button" role="button" aria-label="Show Password" class="button button-group button-password button-password-show">Show</button>');
	$('.field-group').append(button);
	
	return this;
}

var password = new Password();
password.wrap();
password.button();
password.change();