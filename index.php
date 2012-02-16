<?php include('assets/inc/header.php'); ?>

<section role="main">
	<h1>Introduction</h1>
	
	<article role="article">
		<p>This framework uses SASS, Compass and Susy. My intention has been to bring together the best parts of my most used parts of SASS. As well as create my own base for projects. Something I should have done ages ago. As the flexibility of SASS is endless, I won't have to remember class names or be overly repetitive anywhere. Which was the push towards making this framework too.</p>
		<p>I have created many mixins to cover most elements of a website that will be reused and that I feel aren't available elsewhere. Also as I've done it myself, I know what parameters are needed and used. Easy to refer to files and import on a needed basis.</p>
	</article>
		
	<hr>
	
	<section role="region">
		<h1>Buttons</h1>
		<ul class="items">
			<li><a class="button">A button</a></li>
			<li><a class="button disabled">A button</a></li>
			<li><a class="subtle">A button</a></li>			
			<li><button class="alt">Button</button></li>
			<li><button class="alt disabled">Button</button></li>
			<li><a class="warning">A button</a></li>
			<li><a class="warning disabled">A button</a></li>
			<li><a class="success">A button</a></li>
			<li><a class="success disabled">A button</a></li>
			<li><a class="danger">A button</a></li>
			<li><a class="danger disabled">A button</a></li>
			<li><button class="info">Button</button></li>
			<li><button class="info disabled">Button</button></li>
		</ul>
	</section>
	
	<section role="region">
		<h1>Forms</h1>
		<form action="/">
			<fieldset>
				<label for="name">Name</label>
				<input type="text" id="name" class="form-text">
				<p class="form-help">This is help text under the form field.</p>
			</fieldset>
			
			<fieldset>
				<label for="email">Email</label>
				<input type="email" id="email" class="form-text error">
			</fieldset>
			
			<fieldset>
				<label for="gender">Gender</label>
				<select id="gender">
					<option>Male</option>
					<option>Female</option>
					<option>Cylon</option>
				</select>
			</fieldset>
		
			<fieldset class="radio">
				<label for="notifications">Notifications</label>
				<ul>
					<li><label><input type="radio" name="notifications"> Send me email</label></li>
					<li><label><input type="radio" name="notifications"> Don't send me email</label></li>
					<li><label><input type="radio" name="notifications"> Send me flowers</label></li>
				</ul>
			</fieldset>
		
			<fieldset>
				<label for="url">URL</label>
				<input type="url" id="url" class="form-text" placeholder="http://yourdomain.com">
			</fieldset>
		
			<fieldset>
				<label for="bio">Bio</label>
				<textarea id="bio"></textarea>
			</fieldset>
			
			<fieldset class="check">
				<label><input type="checkbox"> I accept the terms of service and lorem ipsum.</label>
			</fieldset>
		
			<fieldset class="form-actions">
				<input type="submit" value="Submit">
			</fieldset>
		</form>							
	</section>
	
	<section role="region">
		<h1>Notices</h1>
		
		<p class="notice">Data saved!</p>
		<p class="notice">Today 50% off only.</p>
		<p class="notice">Please update your info immediately</p>
		<p class="notice">You're due a payment in 3 days</p>
	
	</section>
	
	<section>
		<h1>General elements</h1>
		
		
		<article>
		
			<h2>Modal</h2>
			
			<div class="overlay">
				<div class="modal">
					<h3>Modal window</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="button_group">
						<a href="#modal" class="subtle">Remind me later</a>
						<a href="#" class="subtle">Now</a>
						<a href="#" class="subtle">Later</a>
					</div>
				</div>
			</div>
		
		</article>
		
		<article>
		
			<h2>Dropdowns</h2>
		
		</article>
		
		<article>
			
			<h2>Breadcrumbs</h2>
			
			<nav class="breadcrumb">
				<li><a href="#">This is a link</a></li>
				<li><a href="#">Lorem link</a></li>
				<li><a href="#">Dolor link two</a></li>
				<li><a href="#">Here is a link</a></li>
				<li><strong>Active Link</strong></li>
			</nav>			
					
		</article>
		
	</section>
	
</section>

<?php include('assets/inc/footer.php'); ?>