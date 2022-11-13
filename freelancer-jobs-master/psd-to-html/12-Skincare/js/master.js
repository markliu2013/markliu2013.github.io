/**
 * Common functions
 */
Skincare = {
	
	centerPopup: function($model) {
		
		var bodyWidth = $(document).width()
		var bodyHeight = $(document).height()
		$("#model-overlay").width(bodyWidth);
		$("#model-overlay").height(bodyHeight);
		
		var $win = $(window);
		var windowWidth = $win.width();
		var windowHeight = $win.height();
		var popupWidth = $model.width();
		var popupHeight = $model.height();
		var centerX = (windowWidth - popupWidth) / 2;
		var centerY = 50;
		$model.css("left", centerX + "px");
		$model.animate({top: centerY + "px"}, 500);
		
	},
	
	bottomLinksPopup: function() {
		
		$("#content-wrap .links .how-work").bind("click", function() {
			$("#how-does-work").css("top", 0);
			$("#model-overlay").show();
			$("#how-does-work").show(0, function() {
				Skincare.centerPopup($(this));
			});
			return false;
		});
		
		$(".popup .bottom .btn").bind("click", function() {
			var $parentModel = $(this).parents(".popup");
			var modelHeight = $parentModel.height();
			$parentModel.animate({top: "-" + modelHeight + "px"}, 300, null, function() {
				$("#model-overlay").hide();
				$parentModel.hide();
			});
			return false;
		});
		
		
		$("#content-wrap .links .terms-conditions").bind("click", function() {
			$("#terms-conditions-model").css("top", 0);
			$("#model-overlay").show();
			$("#terms-conditions-model").show(0, function() {
				Skincare.centerPopup($(this));
			});
			return false;
		});
		
		$("#content-wrap .links .privacy-policy").bind("click", function() {
			$("#privacy-policy-model").css("top", 0);
			$("#model-overlay").show();
			$("#privacy-policy-model").show(0, function() {
				Skincare.centerPopup($(this));
			});
			return false;
		});
		
		$("#content-wrap .links .contact-us").bind("click", function() {
			$("#contact-us-model").css("top", 0);
			$("#model-overlay").show();
			$("#contact-us-model").show(0, function() {
				Skincare.centerPopup($(this));
			});
			return false;
		});
		
	},
	
	timeRemainingDown: function() {
		var $settings={id:533433, remain:+900};
		$("#time-remaining span").countdown({
			until:$settings.remain,
			format:"HMS",
			layout:"{mnn}:{snn}",
			expiryText:"Expired!",
			onExpiry: function() {
				$("#timeout-warning-model").css("top", 0);
				$("#model-overlay").show();
				$("#timeout-warning-model").show(0, function() {
					Skincare.centerPopup($(this));
				});
			}
		});
	},
	
	placesRemainingDown: function() {
		var $settings={id:533433, remain:+900};
		$("#places-available .number").countdown({
			until:$settings.remain,
			format:"HMS",
			layout:"{mnn}",
			expiryText:"0",
		});
	},
	
	vidateModelShow: function() {
		
		$("#user-check .top .progress .range").animate({width: "340px"}, 2000);
		
		setTimeout(function() {
			$("#model-overlay").show();
			$("#user-check").show(0, function() {
				
				var acceptImageHtml = '<img src="images/shape03.png" width="32" height="36" />';
				
				setTimeout(function() {
					$("#user-check .checking-location div span").before(acceptImageHtml);
				}, 500)
				
				setTimeout(function() {
					$("#user-check .checking-available").removeClass("hidden");
					//Skincare.centerPopup($("#user-check"));
				}, 1000)
				
				setTimeout(function() {
					$("#user-check .result").removeClass("hidden");
					//Skincare.centerPopup($("#user-check"));
				}, 1500)
				
			});
			Skincare.centerPopup($("#user-check"));
			
		}, 500);
	},
	
	submitModelShow: function() {
		$("#user-submit .top .progress .range").animate({width: "340px"}, 2000);
		$("#model-overlay").show();
		$("#user-submit").show(0, function() {
			setTimeout(function() {
				$("#user-submit .content .checking-available").removeClass("hidden");
			}, 500)
			setTimeout(function() {
				$("#user-submit .content .checking-discounts").removeClass("hidden");
			}, 1000)
			setTimeout(function() {
				$("#user-submit .bottom").removeClass("hidden");
			}, 1500)
			Skincare.centerPopup($("#user-submit"));
		});
		$("#user-submit .bottom .btn").bind("click", function() {
			window.location.href = "result.html?a="+$("#places-available .number").text();
			return false;
		})
	},
	
	getURLParam: function(name) {
		// get query string part of url into its own variable
		var url = window.location.href;
		var query_string = url.split("?");
		// make array of all name/value pairs in query string
		if(query_string.length<=1) return "";
		var params = query_string[1].split("&");
		// loop through the parameters
		var i = 0;
		while (i < params.length) {
			// compare param name against arg passed in
			var param_item = params[i].split("=");
			if (param_item[0] == name) {
				// if they match, return the value
				return param_item[1];
			}
			i++;
		}
		return "";
	},
	
	initContactForm: function() {
		
		$("#contact-form input, #contact-form textarea").each(function(index, element) {
			if ( $(element).val() != "" ) {
				$(element).next("label").hide();
			}
			$(element).focus(function() {
				$(element).next("label").hide();
			}).blur(function() {
				if ( $(element).val() == "" ) {
					$(element).next("label").show();
				}
			})
		});
		
		$("#contact-us-model .btn").unbind("click");
		
		$("#contact-us-model .btn").bind("click", function() {
			
			$("#contact-us-model input").removeClass("error");
			
			var nameVal = $("#contact-form-name").val();
			var emailVal = $("#contact-form-email").val();
			
			if (!nameVal || nameVal == "") {
				$("#contact-form-name").addClass("error");
			}
			if (!emailVal || emailVal == "") {
				$("#contact-form-email").addClass("error");
			} else if ( emailVal.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) < 0 ) {
				$("#contact-form-email").addClass("error");
			}
			
			
			
			if ( !$("#contact-form-name").hasClass("error") && !$("#contact-form-email").hasClass("error") ) {
				var $parentModel = $("#contact-us-model");
				var modelHeight = $parentModel.height();
				$parentModel.animate({top: "-" + modelHeight + "px"}, 300, null, function() {
					$("#model-overlay").hide();
					$parentModel.hide();
				});
			}
			return false;
		})
		
		$("#contact-us-model .close").bind("click", function() {
			var $parentModel = $("#contact-us-model");
			var modelHeight = $parentModel.height();
			$parentModel.animate({top: "-" + modelHeight + "px"}, 300, null, function() {
				$("#model-overlay").hide();
				$parentModel.hide();
			});
			return false;
		})
		
	}
	
	
	
}

Skincare.Home = {
	Init: function() {
		
		$("#questions .question :radio").bind("click", function() {
			
			var $questionDiv = $(this).parents(".question");
			var $nextQuestion = $questionDiv.next(".question");
			if ($nextQuestion.length > 0) {
				$questionDiv.hide(0, function() {
					$nextQuestion.show();
				})
			} else {
				Skincare.submitModelShow();
			}
			
		});
		
		
		$("#user-check .bottom .section.result .btn").bind("click", function() {
			var modelHeight = $("#user-check").height();
			$("#user-check").animate({top: "-" + modelHeight + "px"}, 300, null, function() {
				$("#model-overlay").hide();
				$("#user-check").hide();
			});
			return false;
		})
		
		$(window).bind("resize", function(event) {
			Skincare.centerPopup($(".popup"));
		})
		
		Skincare.bottomLinksPopup();
		Skincare.timeRemainingDown();
		Skincare.placesRemainingDown();
		Skincare.vidateModelShow();
		
		Skincare.initContactForm();
	}
}

Skincare.Result = {
	Init: function() {
		
		$(window).bind("resize", function(event) {
			Skincare.centerPopup($(".popup"));
		})
		Skincare.centerPopup($(".popup"));
		
		Skincare.bottomLinksPopup();
		
		$("#result #header p .number").text(Skincare.getURLParam("a"));
		
		Skincare.initContactForm();
		
	}
}





