/**
* Common functions
*/
Aticus = {

	initContactForm: function() {
		$("form.contact > .input-wrap").each(function(index, element) {
			var $input = $(element).find("input, textarea");
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
		});
	},
	
	contactFormValidate: function() {
	
		$("form.contact").bind("submit", function() {
		
			var validateResult = true;
			
			$(this).find(".input-wrap.full-name input").bind("focus", function() {
				$("form.contact .input-wrap.full-name").removeClass("error");
				$("form.contact .input-wrap.full-name label").text("Full Name");
			});
			
			$(this).find(".input-wrap.email input").bind("focus", function() {
				$("form.contact .input-wrap.email").removeClass("error");
				$("form.contact .input-wrap.email label").text("Email Address");
			});
			
			$(this).find(".input-wrap.subject input").bind("focus", function() {
				$("form.contact .input-wrap.subject").removeClass("error");
				$("form.contact .input-wrap.subject label").text("Subject");
			});
			
			$(this).find(".input-wrap.message textarea").bind("focus", function() {
				$("form.contact .input-wrap.message").removeClass("error");
				$("form.contact .input-wrap.message label").text("Subject");
			});
			
			
			var fullNameVal = $(this).find(".full-name input").val();
			var emailVal = $(this).find(".email input").val();
			var subjectVal = $(this).find(".subject input").val();
			var messageVal = $(this).find(".message textarea").val();
			
			if (!fullNameVal || fullNameVal=="") {
				$(this).find(".full-name").addClass("error");
				$(this).find(".full-name label").text("Full Name required");
				validateResult = false;
			}
			if (!emailVal || emailVal=="") {
				$(this).find(".email").addClass("error");
				$(this).find(".email label").text("Email Address required");
				validateResult = false;
			} else {
				var reg = /^\w{3,}@\w+(\.\w+)+$/;
				if ( !reg.test(emailVal) ) {
					$(this).find(".email").addClass("error");
					$(this).find(".email input").val("");
					$(this).find(".email label").show();
					$(this).find(".email label").text("Email Invlidate Format");
					validateResult = false;
				}
			}
			if (!subjectVal || subjectVal=="") {
				$(this).find(".subject").addClass("error");
				$(this).find(".subject label").text("Subject required");
				validateResult = false;
			}
			if (!messageVal || messageVal=="") {
				$(this).find(".message").addClass("error");
				$(this).find(".message label").text("Message required");
				validateResult = false;
			}
			$(this).find(".input-wrap input").blur();
			$(this).find(".input-wrap textarea").blur();
			return validateResult;
		});
	}
	
}

Aticus.Contact = {
	
	

	Init: function() {
		Aticus.initContactForm();
		Aticus.contactFormValidate();
	}
}

