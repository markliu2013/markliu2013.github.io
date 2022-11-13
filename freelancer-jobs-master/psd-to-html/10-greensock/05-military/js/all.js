/*---------nav bar----------------------*/
jQuery('a[href*=#]').click(function(e) {
	if (location.pathname.replace('/^\//','') == this.pathname.replace('/^\//','') && location.hostname == this.hostname) {
		var hash = this.hash;
		var $target = $(this.hash);
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
		if ($target.length) {
			$('.active').removeClass('active');
			$(this).parent().addClass('active');
            e.preventDefault();
        }
	}
});
		
// Cache selectors
var lastId,
	topMenu = jQuery(".page_links"),
	topMenuHeight = topMenu.outerHeight() -124,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});


// Bind to scroll
jQuery(window).scroll(function(){
	// Get container scroll position
	var fromTop = $(this).scrollTop()+topMenuHeight;
	// Get id of current scroll item
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
		return this;
	});
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
	
	if (lastId !== id) {
		lastId = id;
		// Set/remove active class
		menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
	}
});
	
/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// hide content until after title animation
	// lettering.js to split up letters for animation
	
	// TimelineLite for title animation, then start up superscrollorama when complete
	//1
	TweenMax.from( $('#header-05'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Expo.easeOut});
	TweenMax.from( $('#header-03'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut});
	TweenMax.from( $('#header-04'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut});
	TweenMax.from( $('#header-01'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut});
	TweenMax.from( $('#header-02'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut});
	
	var controller = $.superscrollorama();
	
	//2
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle01'),1, {css:{ top:'+=200px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle02'),1, {css:{ top:'+=200px', opacity:'0'}, delay:0.2, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle03'),1, {css:{ top:'+=200px', opacity:'0'}, delay:0.4, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle04'),1, {css:{ top:'+=200px', opacity:'0'}, delay:0.6, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle05'),1, {css:{ top:'+=200px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle06'),1, {css:{ top:'+=200px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle07'),1, {css:{ top:'+=200px', opacity:'0'}, delay:1.2, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle08'),1, {css:{ top:'+=200px', opacity:'0'}, delay:1.4, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#each-vehicle01', TweenMax.from( $('#each-vehicle09'),1, {css:{ top:'+=200px', opacity:'0'}, delay:1.6, ease:Bounce.easeOut}),0, -200);
	
	
	controller.addTween('#each-vehicle10', TweenMax.from( $('#each-vehicle10'),1.5, {css:{ left:'-=800px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 50);
	controller.addTween('#each-vehicle10', TweenMax.from( $('#each-vehicle11'),1.5, {css:{ left:'-=800px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 50);
	controller.addTween('#each-vehicle10', TweenMax.from( $('#each-vehicle12'),1, {css:{ left:'-=800px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 50);
	
	//3
	controller.addTween('#the-armored-car02', TweenMax.from( $('#the-armored-car01'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#the-armored-car02', TweenMax.from( $('#the-armored-car02'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -200);
	
	controller.addTween('#the-armored-car09', TweenMax.from( $('#the-armored-car09'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 30);
	controller.addTween('#the-armored-car05', TweenMax.from( $('#the-armored-car05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 30);
	controller.addTween('#the-armored-car05', TweenMax.from( $('#the-armored-car03'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#the-armored-car05', TweenMax.from( $('#the-armored-car04'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#the-armored-car08', TweenMax.from( $('#the-armored-car08'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 30);
	controller.addTween('#the-armored-car08', TweenMax.from( $('#the-armored-car06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#the-armored-car08', TweenMax.from( $('#the-armored-car07'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#the-armored-car15', TweenMax.from( $('#the-armored-car15'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 30);
	controller.addTween('#the-armored-car15', TweenMax.from( $('#the-armored-car13'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#the-armored-car15', TweenMax.from( $('#the-armored-car14'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 30);
	
	controller.addTween('#the-armored-car17', TweenMax.from( $('#the-armored-car17'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 30);
	controller.addTween('#the-armored-car17', TweenMax.from( $('#the-armored-car18'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Quad.easeInOut}),0, 30);
	controller.addTween('#the-armored-car17', TweenMax.from( $('#the-armored-car19'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 30);
	
	controller.addTween('#the-armored-car20', TweenMax.from( $('#the-armored-car20'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#the-armored-car20', TweenMax.from( $('#the-armored-car22'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-armored-car20', TweenMax.from( $('#the-armored-car11'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-armored-car20', TweenMax.from( $('#the-armored-car12'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-armored-car20', TweenMax.from( $('#the-armored-car21'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 100);
	
	//4
	//Main header image
	controller.addTween('#the-jeep02', TweenMax.from( $('#the-jeep03'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-jeep02', TweenMax.from( $('#the-jeep01'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-jeep02', TweenMax.from( $('#the-jeep02'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -500);
	//Quotes
	controller.addTween('#the-jeep04', TweenMax.from( $('#the-jeep04'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#the-jeep04', TweenMax.from( $('#the-jeep05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#the-jeep04', TweenMax.from( $('#the-jeep06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#the-jeep27', TweenMax.from( $('#the-jeep25'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-jeep27', TweenMax.from( $('#the-jeep26'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-jeep27', TweenMax.from( $('#the-jeep27'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-jeep14', TweenMax.from( $('#the-jeep14'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-jeep20', TweenMax.from( $('#the-jeep19'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-jeep20', TweenMax.from( $('#the-jeep20'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	//All Small Circle images
	controller.addTween('#the-jeep07', TweenMax.from( $('#the-jeep07'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep09', TweenMax.from( $('#the-jeep09'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep10', TweenMax.from( $('#the-jeep10'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep15', TweenMax.from( $('#the-jeep15'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep15', TweenMax.from( $('#the-jeep16'),1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep17', TweenMax.from( $('#the-jeep17'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-jeep18', TweenMax.from( $('#the-jeep18'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	//1st green box - karl Probst
	controller.addTween('#the-jeep28', TweenMax.from( $('#the-jeep28'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#the-jeep28', TweenMax.from( $('#the-jeep11'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-jeep28', TweenMax.from( $('#the-jeep12'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-jeep28', TweenMax.from( $('#the-jeep13'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 100);
	//2nd Green box - Jeep
	controller.addTween('#the-jeep21', TweenMax.from( $('#the-jeep21'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	//Jeep Wrangler Image
	controller.addTween('#the-jeep23', TweenMax.from( $('#the-jeep24'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-jeep23', TweenMax.from( $('#the-jeep22'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-jeep23', TweenMax.from( $('#the-jeep23'),1, {css:{ bottom:'-=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -500);
	
	
	//5
	//Header Image
	controller.addTween('#the-hummer02', TweenMax.from( $('#the-hummer03'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer02', TweenMax.from( $('#the-hummer01'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer02', TweenMax.from( $('#the-hummer02'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -500);
	//Years
	controller.addTween('#the-hummer04', TweenMax.from( $('#the-hummer04'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, -30);
	controller.addTween('#the-hummer04', TweenMax.from( $('#the-hummer05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, -30);
	controller.addTween('#the-hummer10', TweenMax.from( $('#the-hummer10'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, -30);
	controller.addTween('#the-hummer10', TweenMax.from( $('#the-hummer09'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#the-hummer11', TweenMax.from( $('#the-hummer11'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, -30);
	controller.addTween('#the-hummer15', TweenMax.from( $('#the-hummer15'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, -30);
	//Two small circle images
	
	controller.addTween('#the-hummer16', TweenMax.from( $('#the-hummer16'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#the-hummer16', TweenMax.from( $('#the-hummer17'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -150);
	//Green box - M1151
	controller.addTween('#the-hummer37', TweenMax.from( $('#the-hummer37'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#the-hummer37', TweenMax.from( $('#the-hummer38'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-hummer37', TweenMax.from( $('#the-hummer06'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-hummer37', TweenMax.from( $('#the-hummer07'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#the-hummer37', TweenMax.from( $('#the-hummer08'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 100);
	//Quote
	controller.addTween('#the-hummer12', TweenMax.from( $('#the-hummer12'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#the-hummer12', TweenMax.from( $('#the-hummer13'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#the-hummer12', TweenMax.from( $('#the-hummer14'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	
	//6  BIG green box - with bullet points
	//Circle and jeep - middle images
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer18'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer19'),1, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer29'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer30'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer31'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer32'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer31'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer32'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer33'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer34'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer35'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer36'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer18', TweenMax.from( $('#the-hummer .the-reason .sec h3'),1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -200);
	controller.addTween('#the-hummer20', TweenMax.from( $('#the-hummer20'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	//bullet point and line
	
	//7 Two bottom images
	controller.addTween('#the-hummer23', TweenMax.from( $('#the-hummer21'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer23', TweenMax.from( $('#the-hummer22'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer23', TweenMax.from( $('#the-hummer23'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer28', TweenMax.from( $('#the-hummer26'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer28', TweenMax.from( $('#the-hummer27'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -500);
	controller.addTween('#the-hummer28', TweenMax.from( $('#the-hummer28'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Quad.easeInOut}),0, -500);
	
	//8
	//Title Text
	controller.addTween('#military-vehicles07', TweenMax.from( $('#military-vehicles07'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -200);
	//Row of vehicles
	controller.addTween('#military-vehicles01', TweenMax.from( $('#military-vehicles01'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#military-vehicles01', TweenMax.from( $('#military-vehicles02'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#military-vehicles01', TweenMax.from( $('#military-vehicles03'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -30);
	//Quote
	controller.addTween('#military-vehicles04', TweenMax.from( $('#military-vehicles04'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#military-vehicles04', TweenMax.from( $('#military-vehicles05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Quad.easeInOut}),0, -100);
	controller.addTween('#military-vehicles04', TweenMax.from( $('#military-vehicles06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Quad.easeInOut}),0, -100);
	
});



