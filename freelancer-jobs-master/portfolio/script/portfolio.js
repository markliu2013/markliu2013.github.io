$(function() {
	calculatorContainerMinWidth();
	$(window).resize(function(e) {
		centerContent();
	}).resize();
	
	var overlayDuration = 400;
	$("#porfolio-list ul li").hover(
		function() {
			$(this).find(".cover").stop(true, false);
			$(this).find(".cover").animate({top: "19px"},overlayDuration);
		},
		function() {
			$(this).find(".cover").stop(true, false);
			$(this).find(".cover").animate({top: "-185px"},overlayDuration);
		}
	);
	
})
function centerContent() {
	var containerWidth = $("#container").width();
	var listWidth = $("#porfolio-list ul li").outerWidth(true);
	var rowCount = Math.floor(containerWidth/listWidth)
	var contentWidth = listWidth * rowCount;
	$("#content").width(contentWidth);
}

function calculatorContainerMinWidth() {
	var minRowCount = 1;
	var listWidth = $("#porfolio-list ul li").outerWidth(true);
	var contentWidth = listWidth * minRowCount;
	$("#container").css("min-width", contentWidth + "px");
}























