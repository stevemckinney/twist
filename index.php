<?php include('assets/inc/header.php'); ?>
<h2>Buttons</h2>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>
<a href="#" class="button">Button</a>

<hr>

<h2>Forms</h2>
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

<h2>Table</h2>
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

<h2>Headings</h2>
<h1>Heading level one</h1>
<h2>Heading level two</h2>
<h3>Heading level three</h3>
<h4>Heading level four</h4>
<h5>Heading level five</h5>
<h6>Heading level six</h6>

<?php include('assets/inc/footer.php'); ?>
