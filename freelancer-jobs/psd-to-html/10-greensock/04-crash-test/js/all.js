/*---------nav bar----------------------*/
/*
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
*/	
/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// TimelineLite for title animation, then start up superscrollorama when complete
	
	//1 Header
	TweenMax.from( $('#sec01-01'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut});
	TweenMax.from( $('#sec01-02'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut});
	TweenMax.from( $('#sec01-03'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut});
	TweenMax.from( $('#sec01-04'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut});
	TweenMax.from( $('#sec01-05'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut});
	TweenMax.from( $('#sec01-06'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut});
	
	var controller = $.superscrollorama();
	//2
	// 30,000 and small text
	TweenMax.from( $('#sec02-01'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn});
	TweenMax.from( $('#sec02-02'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn});
	TweenMax.from( $('#sec02-03'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn});
	// blueish green box
	TweenMax.from( $('#sec02-05'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn});
	TweenMax.from( $('#sec02-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn});
	// Orange Box
	TweenMax.from( $('#sec02-04'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:5, ease:Circ.easeIn});
	
	//3
	// 3 dummies with text
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-07'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -300);
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-08'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -300);
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-09'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -300);
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-10'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -300);
	// Car image
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-11'),1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-11', TweenMax.from( $('#sec03-12'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	// Years
	controller.addTween('#sec03-05', TweenMax.from( $('#sec03-05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-03', TweenMax.from( $('#sec03-03'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-06', TweenMax.from( $('#sec03-06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	// US symbol and ribbon
	controller.addTween('#sec03-01', TweenMax.from( $('#sec03-01'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-01', TweenMax.from( $('#sec03-02'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	//Computer
	controller.addTween('#sec03-03', TweenMax.from( $('#sec03-04'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	
	//4
	// Box
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-01'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Title 
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-02'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	// Each dummy section
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-04'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-05'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-06'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -100);
	
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-07'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-09'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-10'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, -100);
	
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-11'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:4.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-12'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-13'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:5.5, ease:Bounce.easeOut}),0, -100);
	
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-14'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:6, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-15'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:6.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-16'),0.5, {css:{ top:'-=100px', opacity:'0'}, delay:7, ease:Bounce.easeOut}),0, -100);
	//Arrows
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-03'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:7.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-08'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:8, ease:Circ.easeIn}),0, -100);
	
	//5
	//Green Box
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-10'),0.5, {css:{ left:'-=100px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-11'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-12'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-13'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-14'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-15'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -150);
	//Dummy section
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-01'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-02'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-03'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-04'),0.5, {css:{ right:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-05'),0.5, {css:{ right:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-06'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-07'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-08'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -150);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-09'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -150);
	// Orange and Greenish box
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-16'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-17'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-18'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-19'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-20'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec05-21'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	// More Stars 每 Safer Cars
	controller.addTween('#sec05-17', TweenMax.from( $('#sec06-01'),1, {css:{ bottom:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	// White boxes
	controller.addTween('#sec05-17', TweenMax.from( $('#sec06-02'),1, {css:{ bottom:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec05-17', TweenMax.from( $('#sec06-03'),1, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 100);
	//6
	// Thumbs section
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-14'),1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-15'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-16'),1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-17'),1, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -100);
	// Stars section
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-05'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-04'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-07'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-06'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-09'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-08'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-11'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-10'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-13'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-08', TweenMax.from( $('#sec06-12'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, -100);
	// Dark grey box
	controller.addTween('#sec07-04', TweenMax.from( $('#sec07-04'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-04', TweenMax.from( $('#sec07-05'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	// Two guys
	controller.addTween('#sec07-04', TweenMax.from( $('#sec07-01'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-04', TweenMax.from( $('#sec07-02'),0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-04', TweenMax.from( $('#sec07-03'),0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	
	//7
	// Car / thumb / model section
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-06'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-07'),0.5, {css:{ rotation: 720, opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-08'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-09'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-10'),0.5, {css:{ rotation: 720, opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-11'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-12'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-13'),0.5, {css:{ rotation: 720, opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-14'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-15'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-16'),0.5, {css:{ rotation: 720, opacity:'0'}, delay:5, ease:Circ.easeIn}),0, -200);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-17'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:5.5, ease:Circ.easeIn}),0, -200);
	// Text 每 from left to right
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-18'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Two more people
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-19'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-20'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-21'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-22'),1, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 0);
	// Small greenish box 每 motion in from right to left
	controller.addTween('#sec07-23', TweenMax.from( $('#sec07-23'),1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Orange and Greenish box
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-24'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-25'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-26'),1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-27'),1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-28'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-24', TweenMax.from( $('#sec07-29'),1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 150);
	
	// 8
	// Title
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-01'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Small thumbs and person
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-02'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-03'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-04'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-05'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-06'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-07'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -100);
	// Each Main box section ( with box, car, and dummy)
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-08'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-09'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-09', TweenMax.from( $('#sec08-10'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-12', TweenMax.from( $('#sec08-11'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-12', TweenMax.from( $('#sec08-12'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-12', TweenMax.from( $('#sec08-13'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-15', TweenMax.from( $('#sec08-14'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-15', TweenMax.from( $('#sec08-15'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-15', TweenMax.from( $('#sec08-16'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-18', TweenMax.from( $('#sec08-17'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-18', TweenMax.from( $('#sec08-18'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-18', TweenMax.from( $('#sec08-19'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-21', TweenMax.from( $('#sec08-20'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-21', TweenMax.from( $('#sec08-21'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-21', TweenMax.from( $('#sec08-22'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-24', TweenMax.from( $('#sec08-23'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-24', TweenMax.from( $('#sec08-24'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-24', TweenMax.from( $('#sec08-25'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-27', TweenMax.from( $('#sec08-26'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-27', TweenMax.from( $('#sec08-27'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-27', TweenMax.from( $('#sec08-28'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-30', TweenMax.from( $('#sec08-29'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-30', TweenMax.from( $('#sec08-30'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-30', TweenMax.from( $('#sec08-31'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-33', TweenMax.from( $('#sec08-32'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-33', TweenMax.from( $('#sec08-33'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-33', TweenMax.from( $('#sec08-34'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-36', TweenMax.from( $('#sec08-35'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-36', TweenMax.from( $('#sec08-36'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-36', TweenMax.from( $('#sec08-37'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-39', TweenMax.from( $('#sec08-38'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-39', TweenMax.from( $('#sec08-39'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec08-39', TweenMax.from( $('#sec08-40'),1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	
	//9
	// Text on left
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-01'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Car and ribbon
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-02'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-03'),1, {css:{ right:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	// Big Text 每 how does＃
	controller.addTween('#sec09-04', TweenMax.from( $('#sec09-04'),1, {css:{ rotation: 720, opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	// Light green box
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-07'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 300);
	// Blue car, big image, dummy in car
	controller.addTween('#sec09-05', TweenMax.from( $('#sec09-08'),1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec09-05', TweenMax.from( $('#sec09-09'),1, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 100);
	// Text and speedomter
	controller.addTween('#sec09-05', TweenMax.from( $('#sec09-05'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec09-05', TweenMax.from( $('#sec09-06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 100);
	// Small dummy images 每 paint brush
	controller.addTween('#sec09-05', TweenMax.from( $('#sec10-01'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 400);
	controller.addTween('#sec09-05', TweenMax.from( $('#sec10-02'),1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 400);
	//Dummy image and box
	controller.addTween('#sec10-03', TweenMax.from( $('#sec10-03'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec10-03', TweenMax.from( $('#sec10-04'),1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	
	//10
	// Title
	controller.addTween('#sec11-01', TweenMax.from( $('#sec11-01'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -100);
	// Two greenish box sections
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-02'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-03'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-04'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-05'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-06'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec11-02', TweenMax.from( $('#sec11-07'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	// Conclusion section
	controller.addTween('#sec12-04', TweenMax.from( $('#sec12-01'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec12-04', TweenMax.from( $('#sec12-02'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec12-04', TweenMax.from( $('#sec12-03'),0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec12-04', TweenMax.from( $('#sec12-04'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec12-04', TweenMax.from( $('#sec12-05'),0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	// NHTSA image 每 from left to right
	controller.addTween('#sec12-06', TweenMax.from( $('#sec12-06'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Chart section
	controller.addTween('#sec12-06', TweenMax.from( $('#sec12-07'),1, {css:{ bottom:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	
	//11
	// Title text 每 from left to right
	controller.addTween('#sec13-02', TweenMax.from( $('#sec13-02'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	// Car and ribbon
	controller.addTween('#sec13-02', TweenMax.from( $('#sec13-01'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec13-02', TweenMax.from( $('#sec13-03'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	// Worker and lightbulb
	controller.addTween('#sec13-02', TweenMax.from( $('#sec13-04'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec13-02', TweenMax.from( $('#sec13-05'),0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	// White box with skulls
	controller.addTween('#sec13-07', TweenMax.from( $('#sec13-06'),1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec13-07', TweenMax.from( $('#sec13-07'),1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec13-07', TweenMax.from( $('#sec13-08'),1, {css:{ right:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -100);
	
	//12
	// Frontal Collision Section
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-01'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-02'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-10'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-11'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-12'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-13'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-01', TweenMax.from( $('#sec14-14'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 100);
	// Side impact
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-03'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-04'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-15'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-16'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-17'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-18'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-03', TweenMax.from( $('#sec14-19'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 100);
	// Rear Collision
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-05'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-06'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-20'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-21'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-22'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-23'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-05', TweenMax.from( $('#sec14-24'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 100);
	// Rollover
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-07'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-08'),0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-25'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-26'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-27'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-28'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 100);
	controller.addTween('#sec14-07', TweenMax.from( $('#sec14-29'),0.85, {css:{ top:'+=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 100);
	// Orange box 每 from left to right
	controller.addTween('#sec14-09', TweenMax.from( $('#sec14-09'),1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	
	
	
	
	
	
	
	
	
	
});



