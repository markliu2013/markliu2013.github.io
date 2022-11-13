$(function() {
	
	/* pre-load images */
	(function($) {
  		var cache = [];
  		// Arguments are image paths relative to the current page.
  		$.preLoadImages = function() {
    		var args_len = arguments.length;
    		for (var i = args_len; i--;) {
      			var cacheImage = document.createElement('img');
      			cacheImage.src = arguments[i];
      			cache.push(cacheImage);
    		}
  		}
	})(jQuery)
	jQuery.preLoadImages("images/CTALoginBgHover.png", "images/industryBoxLearnMoreBgHover.png", "images/educationContactBgHover.png", "images/contactUsBgHover.png", "images/learnMoreBgHover.png", "images/fourteenDayiMeetFreeTrialBtnBgHover.png", "images/thirtyDayGlobalMeetFreeTrialBtnBgHover.png", "images/watchTheVideoBgHover.png", "images/RHSGreyBtnBgHover.png", "images/RHSBlueBtnBgHover.png");
	
	
	/* form dropdown */
	$(".dropdown").click(
		function() {
			$(this).find("ul").show();
		}
	);
	
	$(".dropdown ul li").live("click", function() {
		var selectedValue = $(this).attr("value");
		var selectedText = $(this).text();
		$(this).parents(".dropdown").next('input.hidden').attr("value", selectedValue);
		$(this).parent().prev().text(selectedText);
		$(this).parent().hide();
	});
	$("#top-login #select-product-dropdown ul li").click(function(e) {
		var selectedValue = $(this).attr("value");
	//	var selectedText = $(this).text();
	//	$(this).parent().prev().text(selectedText);
		$("#product-pay-dropdown ul").remove();
		$("#product-pay-dropdown").append("<ul></ul>");
		$("#product-pay-dropdown ul").html('<li value="1">View/Pay Online Bill</li>');
		if (selectedValue == 2) {
			$("#product-pay-dropdown ul").append('<li value="2">Manage Meetings</li>');
		} else if (selectedValue == 3) {
			$("#product-pay-dropdown ul").append('<li value="3">Manage Meetings</li>');
		}
		$(this).parent().hide();
		
	});
	$("#top-login form input.submit").click(function() {
		var payOptionVal = $("#productPayHidden").val();
		if(payOptionVal == 1) {
			window.location.href = "https://premconf.ap.hotbilling.com/premiere/GB/startH.asp";
		} else if(payOptionVal == 2) {
			window.location.href = "https://apdemo.globalmeet.com/home.aspx";
		} else if(payOptionVal == 3) {
			window.location.href = "https://www.myrcplus.com/resmenu.asp?BWebID=5323353";
		} else {
			
		}
		return false;
	})
	
	
	/* home slidershow */
	$('#home-hero .slidershow').cycle({
  		fx: 'fade',
  		timeout:  3000,
  		speed:  1000,
		pager: '#home-hero .slider-nav',
		pagerAnchorBuilder: function(idx, slide) {return '<a href="#"></a>';}
  	});
	
	
	//icon flip
	var iconFlipSpeed = 200;
	var margin = $("#icon-section ul li .icon-image-wrap").width()/2;
    var width = $("#icon-section ul li .icon-image-wrap").width();
    var height = $("#icon-section ul li .icon-image-wrap").height();
    
    $("#icon-section ul li .icon-image-wrap .hover").css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});
	
	$("#icon-section ul li .icon-image-wrap").hover(
		function() {
			var $this = $(this);
			var $normalImage = $(this).children(".normal");
			var $hoverImage = $(this).children(".hover");
			$normalImage.stop(true, false);
			$hoverImage.stop(true, false);
			$("#icon-section ul li .icon-image-wrap .hover").css({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'});
			$normalImage.animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration: iconFlipSpeed});
			window.setTimeout(function() {
				$hoverImage.animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration: iconFlipSpeed});
			},iconFlipSpeed);
		},
		function() {
			var $this = $(this);
			var $normalImage = $(this).children(".normal");
			var $hoverImage = $(this).children(".hover");
			$normalImage.stop(true, false);
			$hoverImage.stop(true, false);
			$hoverImage.animate({width:'0px',height:''+height+'px',marginLeft:''+margin+'px',opacity:'0.5'},{duration: iconFlipSpeed});
			window.setTimeout(function() {
				$normalImage.animate({width:''+width+'px',height:''+height+'px',marginLeft:'0px',opacity:'1'},{duration: iconFlipSpeed});
			},iconFlipSpeed);
		}
	)
	
	//adjust the cols to equal height
	$(".colEqualHeight").each(function(index, element) {
		var maxHeight = 0;
		$(element).children(".col").each(function(index2, element2) {
			if ($(element2).height() > maxHeight) {
				maxHeight = $(element2).height();
			}
		});
		$(element).children(".col").height(maxHeight);
		
	});
	
	//benefits-by-role heading height
	var benefitsByRoleHeadingMaxHeight = 0;
	$("#benefits-by-role .col h3").each(function(index4, element) {
		if ($(element).height() > benefitsByRoleHeadingMaxHeight) {
			benefitsByRoleHeadingMaxHeight = $(element).height();
		}
	});
	$("#benefits-by-role .col h3").height(benefitsByRoleHeadingMaxHeight);
	
	//placeholder
	$("[placeholder]").focus(function() {
		var input = $(this);
		input.removeClass("placeholder")
		if (input.val() == input.attr("placeholder")) {
			input.val("");
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == "" || input.val() == input.attr("placeholder")) {
			input.val(input.attr("placeholder"));
			input.addClass("placeholder")
		}
	}).blur();
 
	$("[placeholder]").parents("form").submit(function() {
		$(this).find("[placeholder]").each(function() {
			var input = $(this);
			if (input.val() == input.attr("placeholder")) {
				input.val("");
			}
		})
	});
	
	
	//customer-testimonials image vertical center
	$(".customer-testimonials").each(function(index, element) {
		var $image = $(this).find(".image img:nth-child(1)");
		var imageHeight = $image.height();
		var marginTop = imageHeight/2 * -1;
		$image.css("margin-top", marginTop+"px"); 
	});
	
	//form validate
	$("#contact-form form").validate(
		{
			errorElement: "span",
			ignore: "",
			messages: {
				firstName: "Please enter your First Name",
				lastName: "Please enter your Last Name",
				email: "Please enter a valid email address",
				jobFunction: "Please enter your Job Title",
				companyName: "Please enter your Company Name",
				businessPhoneNo: "Please enter a valid business phone number"
			}
		}
	);
	
	//the Circles icons link
	$("#icon-section ul li").click(function(e) {
		var index = $(this).index();
		
		switch (index) {
			case 0:
				window.location.href = "imeet.html";
				break;
			case 1:
				window.location.href = "GlobalMeet.html";
				break;
			case 2:
				window.location.href = "meetNow.html";
				break;
			case 3:
				window.location.href = "OPAssist.html";
				break;
		}
	});
	
	
	
	
})