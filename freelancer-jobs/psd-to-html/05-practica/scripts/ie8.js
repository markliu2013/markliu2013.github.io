$(function() {
	
	var $subMenus = $("#menu > ul > li > .submenu");
	
	$subMenus.each(function(index, element){
		var $subMenu = $(element);
		$subMenu.css("visibility", "hidden");
		$subMenu.css("display", "block");
		var subMenuWidth = $subMenu.width();
		var subMenuHeight = $subMenu.height();
		$subMenu.css("visibility", "visible");
		$subMenu.css("display", "none");
		
		$subMenu.find("ul").css("position", "absolute");
		$subMenu.find("ul").css("left", "5px");
		$subMenu.find("ul").css("right", "5px");
		$subMenu.trigger("mousemove");
		$subMenu.css("width", subMenuWidth + "px");
		$subMenu.css("height", subMenuHeight + "px");
		
	})
})