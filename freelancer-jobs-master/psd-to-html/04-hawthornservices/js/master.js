$(function() {
	jQuery.preLoadImages("images/icon-new-rollover.png", "images/icon-projects-rollover.png", "images/icon-map-rollover.png", "images/icon-stock-rollover.png"); // put all images which needs preload feature
	initGallery();
	initSlider();
	initIconRollover();
	adjustSidebarHeight();
})




function initSlider() {

	$('#slideshow').cycle({
		fx: 'scrollHorz',
		timeout: 6000,
		speed: 500,
		pager: '#slide-nav',
		pagerAnchorBuilder: function(idx, slide) {return '<a href="#"></a>';}
	});

}

function initIconRollover() {
	$("#icons ul li").hover(
		function(){
			$(this).find(".normal").hide();
			$(this).find(".rollover").show();
		},
		function(){
			$(this).find(".rollover").hide();
			$(this).find(".normal").show();
		}
	);
}


function initGallery() {

	var stepWidth = 3;
	var moveTimeout = 1;
	var ulWrapWidth = $("#gallery .ul-wrap").width();
	//preview ul width
	var $ul = $("#gallery ul");
	var ulWidth = 0;
	$ul.find("li").each(function(index, element) {
		ulWidth = ulWidth + $(element).outerWidth(true);
	});
	$ul.width(ulWidth);
	
	
	
	var moveLeftInterval = null;
	var moveRightInterval = null;
	$("#gallery .left-arrow").hover(
		function(){
			moveLeftInterval = setInterval(moveLeft, moveTimeout);
		},
		function(){
			if (moveLeftInterval) {
				clearInterval(moveLeftInterval);
			}
		}
	);
	$("#gallery .right-arrow").hover(
		function() {
			moveRightInterval = setInterval(moveRight,moveTimeout);
		},
		function() {
			if (moveRightInterval) {
				clearInterval(moveRightInterval);
			}
		}
	);
	function moveLeft() {
		var leftWidth = (parseInt($ul.css("left")))*-1;
		leftWidth = leftWidth-stepWidth;
		if(leftWidth<0) leftWidth = 0;
		$ul.css("left", "-"+leftWidth+"px");
	}
	function moveRight() {
		var leftWidth = (parseInt($ul.css("left")))*-1;
		leftWidth = leftWidth + stepWidth;
		var maxLeftWidth = ulWidth-ulWrapWidth;
		
		if (leftWidth > maxLeftWidth) leftWidth = maxLeftWidth;
		$ul.css("left", "-"+leftWidth+"px");
	}
}

function adjustSidebarHeight() {
	var sideBarHeight = $("#secondary").height();
	var mainHeight = $("#primary").outerHeight(true);
	if ( sideBarHeight < mainHeight ) {
		$("#secondary").height(mainHeight);
	}
}

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


function fixIE7SubMenuWidth() {
	$("#header .right-wrap ul li").hover(function(){
		$(this).find("ul").show();
		var maxWidth = 0;
		$(this).find("ul li").each(function(index, element) {
			var width = $(element).width();
			if ( width > maxWidth ) maxWidth = width;
		});
		$(this).find("ul li").width(maxWidth);
	}, function() {
		$(this).find("ul").hide();
	})
	
	
}






