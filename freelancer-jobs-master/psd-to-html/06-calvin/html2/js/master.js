$(function() {
	initFormLabel();
	formValidate();
})


function initFormLabel() {
	$("form .input-wrap").each(function(index, element) {
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

	$("form").bind("submit", function() {
		
		var validateResult = true;
		
		
		$("form .input-wrap.email input").bind("focus", function() {
			$("form .input-wrap.email").removeClass("error");
			$("form .input-wrap.email label").text("Enter Email");
		});
		
		var emailVal = $(this).find(".email input").val();
		
		if (!emailVal || emailVal=="") {
			$("form .input-wrap.email").addClass("error");
			$("form .input-wrap.email label").text("Email required");
			validateResult = false;
		} else {
			var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if ( !reg.test(emailVal) ) {
				$("form .input-wrap.email").addClass("error");
				$("form .input-wrap.email input").val("");
				$("form .input-wrap.email label").show();
				$("form .input-wrap.email label").text("Email Invlidate Format");
				validateResult = false;
			}
		}
		$("form .input-wrap input").blur();
		return validateResult;
	});
}


































