<?php include('assets/inc/header.php'); ?>
<h2 id="buttons">Buttons</h2>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>

<hr>

<h2 id="alerts">Alerts</h2>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>
<p class="alert">Here is an alert, hello.</p>

<hr>

<h2 id="forms">Forms</h2>
<form action="/">
	<fieldset>
		<label for="name">Name</label>
		<input type="text" id="name" class="form-text">
		<p class="form-help">This is help text under the form field.</p>
	</fieldset>
	
	<fieldset>
		<label for="email">Email</label>
		<input type="email" id="email" class="form-text">
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

<hr>

<h2 id="table">Table</h2>
<table>
	<thead>
		<tr>
			<th>Type</th>
			<th>Date</th>
			<th>Rating</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Cheddar</td>
			<td>Jan 3, 2012</td>
			<td>★★★</td>
		</tr>
		<tr>
			<td>Havarti</td>
			<td>Jan 12, 2012</td>
			<td>★★★★</td>
		</tr>
		<tr>
			<td>Muenster</td>
			<td>Jan 20, 2012</td>
			<td>★★</td>
		</tr>
		<tr>
			<td>Swiss</td>
			<td>Jan 22, 2012</td>
			<td>★</td>
		</tr>
		<tr>
			<td>Gouda</td>
			<td>Jan 25, 2012</td>
			<td>★★★★★</td>
		</tr>
		<tr>
			<td>Emmentaler</td>
			<td>Jan 27, 2012</td>
			<td>★★★</td>
		</tr>
	</tbody>
</table>

<hr>

<h2 id="typography">Typography</h2>

<h3>Headings</h3>
<h1>Heading level one</h1>
<h2>Heading level two</h2>
<h3>Heading level three</h3>
<h4>Heading level four</h4>
<h5>Heading level five</h5>
<h6>Heading level six</h6>

<blockquote>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</blockquote>

<hr>

<h2 id="grid">Grid</h2>
<div class="show-grid grid-unit">
	<div class="grid-1">.grid-1</div>
	<div class="grid-1">.grid-1</div>
	<div class="grid-1">.grid-1</div>
	<div class="grid-1">.grid-1</div>
	<div class="grid-1">.grid-1</div>
	<div class="grid-1">.grid-1</div>
</div>
<div class="show-grid grid-unit">
	<div class="grid-2">.grid-2</div>
	<div class="grid-2">.grid-2</div>
	<div class="grid-2">.grid-2</div>
</div>
<div class="show-grid grid-unit">
	<div class="grid-3">.grid-3</div>
	<div class="grid-3">.grid-3</div>
</div>
<div class="show-grid grid-unit">
	<div class="grid-4">.grid-4</div>
	<div class="grid-2">.grid-2</div>
</div>
<div class="show-grid grid-unit">
	<div class="grid-6">.grid-6</div>
</div>
<?php include('assets/inc/footer.php'); ?>
