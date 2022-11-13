/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// 1 Header
	// Flag
	TweenMax.from($('#sec01-01'), 1, {css:{ top:'-=343px', opacity:'0'}, delay:0, ease:Circ.easeIn});
	// Person
	TweenMax.from($('#sec01-02'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn});
	// History of
	TweenMax.from($('#sec01-03'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn});
	// Veterans day and honoring section
	TweenMax.from($('#sec01-04'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut});
	TweenMax.from($('#sec01-05'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut});

	var controller = $.superscrollorama();

	// 2
	// Circle
	controller.addTween('#sec02-01', TweenMax.from( $('#sec02-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	// 1st white box
	controller.addTween('#sec02-01', TweenMax.from( $('#sec02-03'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	// Memorial day white box
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-02'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	// Veterans day white box
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-04'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);

	// 3
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-05'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 300);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-06'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 500);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-07'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 500);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-08'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 500);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-09'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 500);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-10'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 500);
	controller.addTween('#sec02-02', TweenMax.from( $('#sec02-11'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 500);

	// 4
	// Title
	controller.addTween('#sec03-06', TweenMax.from( $('#sec03-06'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	// Small icons
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-01'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-02'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-03'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-04'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-05'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	// White box and Person
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-07'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-08'), 0.5, {css:{ right:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 0);

	// 5
	// Red bar
	controller.addTween('#sec03-07', TweenMax.from( $('#sec03-09'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	// 1918
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-23'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-10'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-11'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-12'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-13'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-10', TweenMax.from( $('#sec03-14'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 170);
	// 1919
	controller.addTween('#sec03-31', TweenMax.from( $('#sec03-24'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-31', TweenMax.from( $('#sec03-31'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-31', TweenMax.from( $('#sec03-32'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 170);
	controller.addTween('#sec03-31', TweenMax.from( $('#sec03-33'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 170);
	// 1927
	controller.addTween('#sec03-34', TweenMax.from( $('#sec03-25'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-34', TweenMax.from( $('#sec03-34'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-34', TweenMax.from( $('#sec03-35'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-34', TweenMax.from( $('#sec03-36'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	// 1938
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-26'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-15'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-16'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-17'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 100);
	// 1954
	controller.addTween('#sec03-18', TweenMax.from( $('#sec03-27'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-18', TweenMax.from( $('#sec03-18'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-18', TweenMax.from( $('#sec03-19'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-18', TweenMax.from( $('#sec03-37'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	// 1968
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-28'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-38'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-39'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	// 1971
	controller.addTween('#sec03-21', TweenMax.from( $('#sec03-29'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-21', TweenMax.from( $('#sec03-20'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-21', TweenMax.from( $('#sec03-21'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-21', TweenMax.from( $('#sec03-22'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	// 1975
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-30'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-40'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-41'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-42'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-43'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -30);
	// progress down
	controller.addTween('#sec03-42', TweenMax.from( $('#sec03-44'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);

	// 6
	// For red ribbon
	controller.addTween('#sec03-42', TweenMax.from( $('#sec04-01'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 320);
	controller.addTween('#sec03-42', TweenMax.from( $('#sec04-02'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 320);
	// First Image
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-03'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -230);
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-04'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -230);
	// Small images on right
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-18'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-19'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	// 6 image section
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 250);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-06'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 250);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 250);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-08'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 250);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-09'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 250);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-10'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 250);

	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-12'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-14'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-17'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 510);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-16'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 510);

	// 7
	// Big Image and bar
	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-01'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-02'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 100);
	// 1st set of small images and text
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-01'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-02'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-03'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-04'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-05'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-06'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-07'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 400);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec06-08'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, 400);
	// 2nd set of small images and text
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-09'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-10'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-11'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-12'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-13'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -200);
	// flowers
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-14'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	// Flowers with ribbon
	controller.addTween('#sec06-14', TweenMax.from( $('#sec06-15'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);

	// 8
	// header ribbon
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-16'), 1, {css:{ bottom:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);
	// Soldiers
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-17'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	// Numbers and text
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-18'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-19'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-20'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-21'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-22'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-23'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-24'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-25'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-26'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-27'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-28'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-29'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-30'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-31'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:7, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-32'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:7.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-18', TweenMax.from( $('#sec06-33'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:8, ease:Circ.easeIn}),0, 0);
	// Appreciate Section
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-04'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-02'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-09'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-14'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec07-01', TweenMax.from( $('#sec07-16'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:5.5, ease:Circ.easeIn}),0, 150);
	// 9
	// Red State Bubbles
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-17'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-18'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-19'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-20'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-21'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	// Grey box
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-22'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	// Images with text and percentages
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-23'), 0.5, {css:{ bottom:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-24'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-25'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-26'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-27'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-28'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -80);
	// Graph
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-29'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec07-29', TweenMax.from( $('#sec07-30'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 100);
	// Remaining items in section
	controller.addTween('#sec07-31', TweenMax.from( $('#sec07-31'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec07-31', TweenMax.from( $('#sec07-32'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec07-31', TweenMax.from( $('#sec07-33'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 100);
	controller.addTween('#sec07-31', TweenMax.from( $('#sec07-34'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 100);

	// 10
	// Red bar
	controller.addTween('#sec08-01', TweenMax.from( $('#sec08-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	// Conclusion text and hat
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-02'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	// Building and bar
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-03'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 220);
	controller.addTween('#sec09-01', TweenMax.from( $('#sec09-04'), 1, {css:{ bottom:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 220);
	// Circle with hand
	controller.addTween('#sec09-05', TweenMax.from( $('#sec09-05'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	// People and reb bubbles
	controller.addTween('#sec09-08', TweenMax.from( $('#sec09-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#sec09-08', TweenMax.from( $('#sec09-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#sec09-08', TweenMax.from( $('#sec09-08'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 30);
	controller.addTween('#sec09-08', TweenMax.from( $('#sec09-09'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 30);
	// White box
	controller.addTween('#sec09-10', TweenMax.from( $('#sec09-11'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 30);
	controller.addTween('#sec09-10', TweenMax.from( $('#sec09-10'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 30);
	controller.addTween('#sec09-10', TweenMax.from( $('#sec09-12'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 30);
	// Tan box & Brain and text
	controller.addTween('#sec09-13', TweenMax.from( $('#sec09-13'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 50);
	controller.addTween('#sec09-13', TweenMax.from( $('#sec09-14'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#sec09-13', TweenMax.from( $('#sec09-15'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 50);

	// 11
	// Red bar section
	controller.addTween('#sec09-13', TweenMax.from( $('#sec10-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 300);
	controller.addTween('#sec09-13', TweenMax.from( $('#sec10-02'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 300);
	controller.addTween('#sec09-13', TweenMax.from( $('#sec10-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 300);
	// Small images and text  & Black people image
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-01'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-02'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-03'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-04'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-05'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-06'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-07'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-08'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-09'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, -200);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-10'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-11'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-12'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-13'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-14'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-15'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#sec11-16', TweenMax.from( $('#sec11-16'), 0.5, {css:{ right:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 70);
	// White box
	controller.addTween('#sec12-01', TweenMax.from( $('#sec12-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);



});



