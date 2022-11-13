function loadDetailPage() {
	$.getJSON("planning-json.js", null, function(json){
		var attractionListHtml = '';
		if (json.length > 0) {
			
			
			
		}
		
		$("#attractions-list").html(attractionListHtml);
		
		$(window).trigger("resize");
		$("#attractions-list h2").scrollToFixed({zIndex: 97, marginTop: $("#header").outerHeight(true)});
		homeAttractionHover();
	});
	
	
}

$(function() {
	loadDetailPage();
})