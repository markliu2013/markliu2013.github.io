<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.8.21.custom.min.js"></script>
<script type="text/javascript" >
	$(function() {
		
		
		$( "#task-slider > .slider").each(function() {
			var value = parseInt( $( this ).text(), 10 );
			$(this).empty().slider({
				value: value,
				range: "min",
				animate: true,
				orientation: "vertical",
				min: 100,
				min: 1,
				step: 20
			});
		})
		
		
		$("#task-slider a.submit").click(function(e) {
			e.preventDefault();
   		});
		
		
		
		
	});

</script>
<style>
.ui-slider-range {
	width:20px;
	height:358px;
	background:url(images/tabs/slider-back.png);
	position:relative;
	margin:0;
	padding:0;
	background-repeat:no-repeat;
}
/*Style for the slider button*/
.ui-slider-handle {
	
	
	padding:0px !important;
	margin-top:0px !important;
	position:absolute;
	left:0;
	margin-left:-4px;
	z-index:200;
	background:url(images/tabs/slider-thumb.png);
}
/*This is the fill bar colour*/
.preferences .ui-widget-header {
	background:url(images/tabs/fill-big.png) no-repeat bottom !important;
	width:6px;
	left:3px;
	bottom:15px;
	position:absolute;
}
a {
	outline:none;
	-moz-outline-style:none;
}



#task-slider {
	
	margin-top: 100px;
}
#task-slider div.slider {
	float: left;
	margin: 0 50px 50px 50px;
	height: 130px; 
}
/* slider image */
#task-slider div.slider .ui-corner-all {
	width: 59px;
	height: 71px;
	left: -22.5px;
	bottom: -20px;
}
#task-slider .vegetables .ui-corner-all {
	background: url(images/vegetables.png) no-repeat;
}
#task-slider .fruit .ui-corner-all {
	background: url(images/fruit.png) no-repeat;
}
#task-slider .nuts .ui-corner-all {
	background: url(images/nuts.png) no-repeat;
}
#task-slider .bacon .ui-corner-all {
	background: url(images/bacon.png) no-repeat;
}
a.submit {
		float: left;
		display: block;
		margin: 100px 0 0 50px;
		width: 84px;
		height: 29px;
		background: #be1300;
		color: #fefcfc;
		line-height: 29px;
		text-align: center;
		text-decoration: none;
		border-radius: 5px;
	}
</style>
</head>
<body>
<div id="task-slider">
<div class="ui-slider-range preferences slider vegetables" style="height:544px;background:url(images/tabs/slider-back-big.png);" >0</div>
<div class="ui-slider-range preferences slider fruit" style="height:544px;background:url(images/tabs/slider-back-big.png);" >0</div>
<div class="ui-slider-range preferences slider nuts" style="height:544px;background:url(images/tabs/slider-back-big.png);" >0</div>
<div class="ui-slider-range preferences slider bacon" style="height:544px;background:url(images/tabs/slider-back-big.png);" >0</div>
<a href="#" class="submit">Submit</a>
</div>
</body>
</html>
