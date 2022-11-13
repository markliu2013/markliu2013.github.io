$(document).ready(function() {
	
	initInputHolder();
	

});

$(window).load(function(e) {
	equalHeight();
	initSubMenu();
});


function initInputHolder() {
	
	$(".input-label-wrap").each(function(index, element) {
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
	})
	
}

function equalHeight() {
	
	$(".equalHeight").each(function(index, element) {
		var maxHeight = 0;
		$(element).find(".col").each(function(index, element) {
			var colHeight = $(element).height();
			if( colHeight > maxHeight ) maxHeight = colHeight;
		});
		$(element).find(".col").height(maxHeight);
	});
	
}

function initSubMenu() {
	
	var w1 = $("#nav > ul > li:eq(0)").outerWidth(true);
	var w2 = $("#nav > ul > li:eq(1)").outerWidth(true);
	var w3 = $("#nav > ul > li:eq(2)").outerWidth(true);
	var w4 = $("#nav > ul > li:eq(3)").outerWidth(true);
	var w5 = $("#nav > ul > li:eq(4)").outerWidth(true);
	var w6 = $("#nav > ul > li:eq(5)").outerWidth(true);
	
	var lastWidth = 738 - w1 - w2 - w3 - w4 - w5;
	$("#nav ul li.last a").width(lastWidth);
	
	
	$("#nav > ul > li").each(function(index, element) {
		var $subMenu  = $(element).find(".submenu");
		if ($subMenu.length>0) {
			
			var arrowWidth = $subMenu.find(".arrow").outerWidth(true);
			var divLeftPos = 0;
			var arrowLeftPos = 0;
			
			switch(index) {
				case 0:
					break;
				case 1:
					divLeftPos = -w1;
					arrowLeftPos = w1+w2/2-arrowWidth/2;
					break;
				case 2:
					divLeftPos = -(w1+w2);
					arrowLeftPos = w1+w2+w3/2-arrowWidth/2;
					break;
				case 3:
					//divLeftPos = -(w1+w2);
				//	arrowLeftPos = w1+w2+w3/2-arrowWidth/2;
					break;
				default:
					break;
			}
			
			$subMenu.css("left", divLeftPos + "px");
			$subMenu.find(".arrow").css("left", arrowLeftPos + "px");
		}
		
		
	});
	
}




















