$(function() {
	initMastHeadFade();
})


function initMastHeadFade() {
	var mastheadFadeSpeed = 500;
	
	var $defaultHead = $("#banner img.default");
	var $mwHead = $("#banner img.mw");
	var $ksHead = $("#banner img.ks");
	var $skHead = $("#banner img.sk");
	var $mfHead = $("#banner img.mf");
	
	$("#banner .hovers div").hover(
		function() {
			var index = $(this).index();
			$("#banner img").stop(true, true);
			var $pv = $("#banner img:visible");
			$pv.css("z-index", 2);
			if( index == 0 ) {
				$mwHead.css("z-index", 4);
				 $mwHead.fadeIn(mastheadFadeSpeed, function() {
					$pv.hide();
				});
			} else if ( index == 1 ) {
				 $ksHead.css("z-index", 4);
				 $ksHead.fadeIn(mastheadFadeSpeed, function() {
					$pv.hide();
				});
			} else if ( index == 2 ) {
				$skHead.css("z-index", 4);
				 $skHead.fadeIn(mastheadFadeSpeed, function() {
					$pv.hide();
				});
			} else if ( index == 3 ) {
				$mfHead.css("z-index", 4);
				 $mfHead.fadeIn(mastheadFadeSpeed, function() {
					$pv.hide();
				});
			}
			
			
		},
		function() {}
	)
	
	$("#banner .hovers").hover(
		function() {
			
		},
		function() {
			$("#banner img").stop(true, true);
			$("#banner img").css("z-index", 2);
			$defaultHead.css("z-index", 4);
			var $pv = $("#banner img:visible");
			$defaultHead.fadeIn(mastheadFadeSpeed, function() {
				$pv.hide();
			})
		}
	)
	
	
}



function adjustCotentColHeight() {
	var sideHeight = $(".side-menu").height();
	var primaryHeight = $("#content .main .primary").height();
	if ( primaryHeight > sideHeight ) {
		$(".side-menu").height(primaryHeight);
	} else if ( primaryHeight < sideHeight ) {
		$("#content .main .primary").height(sideHeight);
	}
}
































