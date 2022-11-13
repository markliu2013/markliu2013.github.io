<?php
	$page_title = 'Contact Page';
	$selected = 'contact';
?>
<?php include 'include'.DIRECTORY_SEPARATOR.'html-head.php' ?>
<script type="text/javascript">
$(function() {
	Aticus.Contact.Init();
})
</script>
</head>
<body id="contact">

<?php

if( !empty($_POST['submit']) && $_POST['submit'] == "Submit")

{
	
$full_name = $_POST['fullName'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = "mailto:studio@hivecommunication.com";

$mail_subject = $full_name . "Contact Us";

$msg = "Hello Admin,<br /><br />&nbsp;&nbsp;Full Name:".$full_name."<br/>&nbsp;&nbsp;Email:".$email."<br/>&nbsp;&nbsp;Subject:".$subject."<br/>&nbsp;&nbsp;Message:".$message;

$headers  = 'MIME-Version: 1.0' . "\r\n";

$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

//$headers .= 'From: felixmarshal@gmail.com' . "\r\n";
$headers .= 'From: '.$email . "\r\n";

$aa = mail($to,$mail_subject,$msg,$headers);

$successfully_message = "Thank you for your enquiry, we will get back to you shortly.";

?>

<?

}

?>
<div id="bg-wrap">
	<?php include 'include'.DIRECTORY_SEPARATOR.'header.php' ?>
	<div id="banner" class="container">
		<p>Get in touch and see how we can tailor a solution for you,<br />simply fill out the form below.</p>
	</div><!-- end banner -->
</div><!-- end bg-wrap -->

<div id="content-wrap">
<div id="content" class="container">
	<?php
		if( !empty($successfully_message) ) {
			echo '<div id="successfully_message">Thank you for your enquiry, we will get back to you shortly.</div>';
		}
	?>
	<h2 class="title">All Fields Are Required</h2>
	<form class="contact" action="contact.php" method="post">
		<div class="input-wrap full-name">
			<label>Full Name</label>
			<input type="text" name="fullName" value="Mark Liu" />
		</div>
		<div class="input-wrap email">
			<label>Email Address</label>
			<input type="text" name="email" value="markliu2013@gmail.com" />
		</div>
		<div class="input-wrap subject">
			<label>Subject</label>
			<input type="text" name="subject" value="Test" />
		</div>
		<div class="input-wrap message">
			<label>Message</label>
			<textarea name="message">Test</textarea>
		</div>
		<input class="submit" type="submit" name="submit" value="Submit" />
	</form>
	<div class="contact-info">
		<p class="desc">Alternatively you can contact us at the details below:</p>
		<p class="info">
			<strong>T  +613 9629 1180</strong><br />
			M +61 413 010 890<br />
			F  +613 9629 7883<br />
			E  <a href="mailto:info@aticus.com">info@aticus.com</a>
		</p>
	</div>
	<div class="clearfix"></div>
</div><!-- end content -->
</div><!-- end content-wrap -->

<?php include 'include'.DIRECTORY_SEPARATOR.'footer.php' ?>

</body>
</html>
