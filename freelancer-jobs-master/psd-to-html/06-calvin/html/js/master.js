$(function() {
	
jQuery(window).bind("resize scroll", function() {
	centerGridImageAndLandingbox();
}).resize();

initLandingForm();
formValidate();

})

function centerGridImageAndLandingbox() {
	var $window = jQuery(window);
	var windowWidth = $window.width();
	var windowHeight = $window.height();
	
	//center gridImage
	var imageWidth = 200;
	var rowCount = Math.floor(windowWidth/imageWidth);
	if ( rowCount > 8 ) {
		rowCount = 8;
	} else if ( rowCount < 3 ) {
		rowCount = 3;
	}
	var gridWidth = imageWidth * rowCount;
	jQuery("#photo-grid").width(gridWidth);
	
	//center Landingbox
	var landingBoxWidth = 590;
	var landingBoxHeight = 590;
	var topPos = (windowHeight-landingBoxHeight)/2
	var leftPos = (windowWidth-landingBoxWidth)/2
	jQuery("#landing-box").css("top", topPos);
	jQuery("#landing-box").css("left", leftPos);
}


function initLandingForm() {
	$("#landing-box form .input-wrap").each(function(index, element) {
		var $input = $(element).find("input");
		var $label = $input.prev("label");
		var inputVal = $input.val();
		if (inputVal != "") {
			$label.hide();
		}
		$input.focus(function() {
			$label.hide();
		}).blur(function() {
			inputVal = $input.val();
			if (inputVal == "") {
				$label.show();
			}
		});
		
		$label.bind("click", function() {
			$input.focus();
		})
		
	});
}

function formValidate() {

	$("#landing-form").bind("submit", function() {
		
		var validateResult = true;
		
		$("#landing-box form .input-wrap.first-name input").bind("focus", function() {
			$("#landing-box form .input-wrap.first-name").removeClass("error");
			$("#landing-box form .input-wrap.first-name label").text("First Name");
		});
		
		$("#landing-box form .input-wrap.email input").bind("focus", function() {
			$("#landing-box form .input-wrap.email").removeClass("error");
			$("#landing-box form .input-wrap.email label").text("Email");
		});
		
		var firstNameVal = $(this).find(".first-name input").val();
		var emailVal = $(this).find(".email input").val();
		if (!firstNameVal || firstNameVal=="") {
			$("#landing-box form .input-wrap.first-name").addClass("error");
			$("#landing-box form .input-wrap.first-name label").text("First Name required");
			validateResult = false;
		}
		if (!emailVal || emailVal=="") {
			$("#landing-box form .input-wrap.email").addClass("error");
			$("#landing-box form .input-wrap.email label").text("Email required");
			validateResult = false;
		} else {
			var reg = /^\w{3,}@\w+(\.\w+)+$/;
			if ( !reg.test(emailVal) ) {
				$("#landing-box form .input-wrap.email").addClass("error");
				$("#landing-box form .input-wrap.email input").val("");
				$("#landing-box form .input-wrap.email label").show();
				$("#landing-box form .input-wrap.email label").text("Email Invlidate Format");
				validateResult = false;
			}
		}
		$("#landing-box form .input-wrap input").blur();
		return validateResult;
	});
}







































