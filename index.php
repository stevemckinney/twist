<?php include('assets/inc/header.php'); ?>

<section role="main">
	<h1>HTML Ipsum Presents</h1>
	       
	<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
	
	<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
	
	<h2>Header Level 2</h2>
		       
	<ol>
	   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
	   <li>Aliquam tincidunt mauris eu risus.</li>
	</ol>
	
	<blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
	
	<h3>Header Level 3</h3>
	
	<ul>
	   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
	   <li>Aliquam tincidunt mauris eu risus.</li>
	</ul>
	
	<pre><code>
	#header h1 a { 
		display: block; 
		width: 300px; 
		height: 80px; 
	}
	</code></pre>
	
	<table>
		<thead>
			<tr>
				<th>Item</th>
				<th>Item 2</th>
				<th>Item 3</th>
				<th>Item 4</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Yes</td>
				<td>No</td>
				<td>Yes</td>
				<td>No</td>
			</tr>
			<tr>
				<td>Maybe</td>
				<td>No</td>
				<td>Maybe</td>
				<td>Yes</td>
			</tr>
			<tr>
				<td>All</td>
				<td>2</td>
				<td>3</td>
				<td>10</td>
			</tr>
		</tbody>
	</table>
	
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
	</section>
	
</section>

<?php include('assets/inc/footer.php'); ?>