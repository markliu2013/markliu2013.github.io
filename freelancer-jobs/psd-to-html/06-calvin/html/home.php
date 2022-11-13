<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Home Page</title>
<link href='http://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
<link href="css/master.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/master.js"></script>
</head>
<body id="home">

<div id="landing-box">
<div class="logo">
<span>Hi, I'm</span>
<img src="images/logo.png" width="257" height="78" alt="calvin" />
</div>
<div class="text">
	<p>Your personal calendar who removes  the hassle out of making plans by figuring out the who, what, where and when, so it's as simple as it should be.</p>
	<p class="last">It'll be ready to launch soon, so leave me your details and I'll be in touch.</p>
</div>
<form id="landing-form" action="#" method="post">
	<div class="input-wrap first-name">
		<label>First Name</label>
		<input type="text" name="firstName" />
	</div>
	<div class="input-wrap email">
		<label>Email</label>
		<input type="text" name="email" />
	</div>
	<div class="clearfix"></div>
	<input class="submit" type="submit" value="submit" />
</form>
</div><!-- end landing-box -->



<div id="photo-grid">
<?php
for ($i = 1; $i <= 9; $i++) {
	echo '<img src="images/dummy/img0' . $i . '.jpg" width="150" height="150" alt="Photo" />';
}
for ($i = 10; $i <= 40; $i++) {
	echo '<img src="images/dummy/img' . $i . '.jpg" width="150" height="150" alt="Photo" />';
}

?>
</div>
</body>
</html>
