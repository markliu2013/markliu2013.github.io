$(function() {
	
	$('#slidershow').cycle({
  		fx: 'fade',
  		timeout:  10000,
  		speed:  1000,
		pager: '#slider-nav',
		pagerAnchorBuilder: function(idx, slide) {return '<a href="#"></a>';}
  	});
	
	$("#slider-preview ul li img").click(function(e) {
		var index=$(this).parent().index();
		$("#slider-preview ul li").removeClass("active");
		$("#slider-preview ul li:nth-child("+(index+1)+")").addClass("active");
		var newLeftWidth = 87+(index)*158;
		$("#slider-preview .position-flag").css("left", newLeftWidth+"px");
		$("#slidershow").cycle(index);
		return false;
	});
	
})