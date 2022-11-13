<div id="header" class="container clearfix">
	<a href="/" class="logo"><img src="images/logo.png" width="141" height="30" alt="ATICUS" /></a>
	<ul>
		<li <?php if (!empty($selected) && $selected == "home") echo 'class="current"'; ?>><a href="home.php">Home</a></li>
		<li <?php if (!empty($selected) && $selected == "what-we-do") echo 'class="current"'; ?>><a href="what-to-do.php">What We Do</a></li>
		<li <?php if (!empty($selected) && $selected == "testimonials") echo 'class="current"'; ?>><a href="testimonials.php">Testimonials</a></li>
		<li <?php if (!empty($selected) && $selected == "contact") echo 'class="current"'; ?>><a href="contact.php">Contact Us</a></li>
	</ul>
</div><!-- end header -->