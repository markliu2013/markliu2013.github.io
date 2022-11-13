$(document).ready(function() {
	//scroll menu
	var $page = $("#page");
	var $scrollNav = $("#scrolled-header-wrap");
	var scrollToShow = 400;
	$page.bind("scroll", function() {
        var scrollTop = $page.scrollTop();
        if (scrollTop < scrollToShow) {
			$scrollNav.fadeOut();
        } else {
			$scrollNav.fadeIn(500);
        }
    }).scroll();
	
	$("#google-map a").fancybox({
		type: 'iframe',
		overlayColor: '#000000',
		overlayOpacity : 0.8
	});
	
	
	//content text always visible
	var initialVisibleHeight = 250;
	var $pageNeedAdjust = $("#profile #content, #inventory #content, #wireless #content, #ultimate-ears #content");
	var $win = $(window);
	var headerHeight = $("#header-wrap").height();
	var footerHeight = $("#footer-wrap").height();
	$win.resize(function(e) {
		var winHeight = $win.height();
		var centerVisibleHeight = winHeight-headerHeight-footerHeight;
		var marginTop = centerVisibleHeight - initialVisibleHeight;
		if (marginTop < 0 ) marginTop = 0;
		$pageNeedAdjust.css("margin-top", marginTop+"px");
	}).trigger("resize");
	
	
});