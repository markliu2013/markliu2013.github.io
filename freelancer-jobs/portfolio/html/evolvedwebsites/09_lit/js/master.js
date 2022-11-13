$(function() {
	
	$(".big-img").cycle({
		fx: 'fade',
		timeout:  600000,
		speed:  3000,
		prev: "#big-img-nav-prev",
		next: "#big-img-nav-next",
		before: function(currSlideElement, nextSlideElement, options, forwardFlag) {
			var slideIndex = $(nextSlideElement).index()+1;
			$("#thumb .preview ul li.active").removeClass("active");
			$("#thumb .preview ul li:nth-child("+slideIndex+")").addClass("active");
			
			var curLiWidth = $("#thumb .preview ul li:nth-child("+slideIndex+")").outerWidth(true);
			var slidedWidth = 0;
			
			$("#thumb .preview ul li").each(function(index, element) {
				if(index < slideIndex) {
					slidedWidth = slidedWidth + $(element).outerWidth(true);
				}
			});
			var leftWidth = (parseInt($("#thumb .preview ul").css("left")))*-1;
			var visibleWidth = 1000+leftWidth;
			if(visibleWidth < slidedWidth) {//move left
				var leftVisibleWidth = curLiWidth - (slidedWidth-visibleWidth);
				var newLeftWidth = leftWidth + (1000 - leftVisibleWidth);
				var maxLeftWidth = ulWidth-1000;
				if (newLeftWidth > maxLeftWidth) newLeftWidth = maxLeftWidth;
				$("#thumb .preview ul").animate({left: "-"+newLeftWidth+"px"},1000);
			}
			else {
				var slidedWidthLeft = 0;
				$("#thumb .preview ul li").each(function(index, element) {
					if(index < (slideIndex-1)) {
						slidedWidthLeft = slidedWidthLeft + $(element).outerWidth(true);
					}
				});
				
				if (slidedWidthLeft<leftWidth) {
					var rightUnVisibleWidth = leftWidth - slidedWidthLeft;
					var newLeftWidth = leftWidth - rightUnVisibleWidth;
					if (newLeftWidth < 0) newLeftWidth = 0;
					$("#thumb .preview ul").animate({left: "-"+newLeftWidth+"px"},1000);
				}
			}
		}
		
	});
	
	
	//preview ul width
	var ulWidth = 0;
	$("#thumb .preview ul li").each(function(index, element) {
		ulWidth = ulWidth + $(element).outerWidth(true);
	});
	$("#thumb .preview ul").width(ulWidth);
	
	//preview li click
	$("#thumb .preview ul li a").click(function(e) {
		var index=$(this).parent().index()
		$(".big-img").cycle(index);
		return false;
	});
	
	
	var moveLeftInterval = null;
	var moveRightInterval = null;
	$("#preview-nav-prev").click(function(e) {
		return false;
	});
	
	$("#preview-nav-prev").hover(
		function() {
			moveLeftInterval = setInterval(moveLeft,1);
		},
		function() {
			if (moveLeftInterval) {
				clearInterval(moveLeftInterval);
			}
		}
	)
	$("#preview-nav-next").click(function(e) {
		return false;
	});
	
	$("#preview-nav-next").hover(
		function() {
			moveRightInterval = setInterval(moveRight,1);
		},
		function() {
			if (moveRightInterval) {
				clearInterval(moveRightInterval);
			}
		}
	)
	
	
	
	
	function moveLeft() {
		var leftWidth = (parseInt($("#thumb .preview ul").css("left")))*-1;
		leftWidth=leftWidth-3;
		if(leftWidth<0) leftWidth = 0;
		$("#thumb .preview ul").css("left", "-"+leftWidth+"px");
	}
	function moveRight() {
		var leftWidth = (parseInt($("#thumb .preview ul").css("left")))*-1;
		leftWidth=leftWidth+3;
		var maxLeftWidth = ulWidth-1000;
		if (leftWidth > maxLeftWidth) leftWidth = maxLeftWidth;
		$("#thumb .preview ul").css("left", "-"+leftWidth+"px");
	}
	
	
	
	//Footer menu cascade effect
	var $currentCol = $('#site-link .right .col1');
	var colHeight = $currentCol.height()
	var colContentHeight = 0;
	
	var $separateImg = $('#site-link .right .col1 img');
	var separateImgHeight = $separateImg.outerHeight(true);
	
	
	var $pList = $currentCol.find("p");
	var heightArr = new Array($pList.length);
	
	$pList.each(function(index, element) {
		heightArr[index] = $(element).outerHeight(true);
	});
	$pList = $pList.clone();
	$currentCol.html("");
	$pList.each(function(index, element) {
		
		if($(element).hasClass("links-title")) {
			if(colContentHeight > 0 && colContentHeight < (colHeight - separateImgHeight)) {//not at top of col and not at bottom
				$currentCol.append('<img src="images/site_link_div.png" width="170" height="3" alt="" />');
				colContentHeight = colContentHeight + separateImgHeight;
			}
		}
		
		
		colContentHeight = colContentHeight + heightArr[index];
		if( colContentHeight > colHeight ) {
			colContentHeight = heightArr[index];
			$currentCol = $currentCol.next('.col');
		}
		
		$currentCol.append($(element).clone());
		
	});
	$('#site-link .right .col1').css("visibility","visible");
	
	//directory list
	$("#member #main .directory-list > ul > li:even").css("background-color", "#e6e5e5");
	
	//member page image hover
	$("#member #main .images .right a").mouseover(function(e) {
		$("#member #main .images .left img").attr("src", $(this).attr("href"));
	});
	
	
	
	
	
		
})