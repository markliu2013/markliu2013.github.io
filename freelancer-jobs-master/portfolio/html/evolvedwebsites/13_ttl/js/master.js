$(function() {
	
$("#slideshow").cycle({
	fx: 'fade',
	timeout: 5000,
	speed: 1000,
	pager: '#slide-nav',
	pagerAnchorBuilder: function(idx, slide) {return '<a href="#"></a>';},
	next: '#next-slider',
	prev: '#prev-slider'
});

adjustPanes();
initInputWrap();
})


function adjustPanes() {
	var maxHeight = 0;
	$("#panes .pane").each(function(index, element) {
		var height = $(element).height();
		if ( height > maxHeight ) {
			maxHeight = height;
		}
	});
	$("#panes .pane").height(maxHeight);
}

function initInputWrap() {
	$(".input-wrap").each(function(index, element) {
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
	});
}







































































































