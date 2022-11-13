$(function() {
	
	$("#menu ul li .submenu").hide();
	$("#menu ul li").hover(
		function() {
			//$(this).find(".submenu").css("visibility", "hidden");
			//$(this).find(".submenu").show(100, function() {
			//	$(this).css("visibility", "visible");
			//})
			$(this).find(".submenu").fadeIn(100);			
		},
		function() {
			$(this).find(".submenu").hide();
		}
	)
})