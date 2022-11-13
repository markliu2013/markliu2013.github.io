/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// section01
	TweenMax.from($('#sec01-03'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn});
	TweenMax.from($('#sec01-04'), 0.5, {css:{ top:'+=200px', opacity:'0'}, delay:1, ease:Circ.easeIn});
	TweenMax.from($('#sec01-05'), 0.5, {css:{ top:'+=200px', opacity:'0'}, delay:1.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-01'), 0.5, {css:{ left:'-=200px', opacity:'0'}, delay:2, ease:Circ.easeIn});
	TweenMax.from($('#sec01-02'), 0.5, {css:{ right:'-=200px', opacity:'0'}, delay:2.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-06'), 0.5, {css:{ bottom:'+=200px', opacity:'0'}, delay:3, ease:Circ.easeIn});
	TweenMax.from($('#sec01-07'), 0.5, {css:{ top:'-=200px', opacity:'0'}, delay:3.7, ease:Bounce.easeOut});

	var controller = $.superscrollorama();
	// section02
	controller.addTween('#section02 .block01', TweenMax.from( $('#sec02-01'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -80);
	controller.addTween('#section02 .block01', TweenMax.from( $('#sec02-02'), 1, {css:{ bottom:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -80);

	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-03'), 0.8, {css:{opacity:0, rotation: 720}, ease:Quad.easeInOut}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-04'), 0.8, {css:{opacity:0, rotation: 720}, ease:Quad.easeInOut}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-05'), 0.8, {css:{opacity:0, rotation: 720}, ease:Quad.easeInOut}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-06'), 0.8, {css:{opacity:0, rotation: 720}, ease:Quad.easeInOut}),0, 0);

	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-07'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-08'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0.8, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-09'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec02-03', TweenMax.from( $('#sec02-10'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.4, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-11'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-12'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-13'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#sec02-15', TweenMax.from( $('#sec02-15'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-15', TweenMax.from( $('#sec02-14'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-15', TweenMax.from( $('#sec02-16'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -50);

	controller.addTween('#section02 .block03 .animation-holder1', TweenMax.from( $('#sec02-17'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section02 .block03 .animation-holder1', TweenMax.from( $('#sec02-19'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section02 .block03 .animation-holder1', TweenMax.from( $('#sec02-18'),1.85, {css:{opacity:0, rotation: 720, left:'-300px', top:'-200px'}, delay:1, ease:Quad.easeInOut}),0, 30);
	controller.addTween('#section02 .block03 .animation-holder1', TweenMax.from( $('#sec02-20'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 30);

	controller.addTween('#section02 .block03 .animation-holder2', TweenMax.from( $('#sec02-23'),1.85, {css:{opacity:0, rotation: 720, left:'-300px', top:'-200px'}, delay:0, ease:Quad.easeInOut}),0, 30);

	controller.addTween('#section03 .block01', TweenMax.from( $('#sec03-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-04'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-05'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-06'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-07'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-08'), 0.8, {css:{opacity:0, rotation: 720}, delay:1, ease:Quad.easeInOut}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-09'), 0.5, {css:{top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-10'), 0.5, {css:{top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-11'), 0.5, {css:{top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-12'), 0.5, {css:{top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -60);
	controller.addTween('#sec03-04', TweenMax.from( $('#sec03-13'), 0.5, {css:{top:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -60);

	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-14'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-16'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-17'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-18'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section04 .block01', TweenMax.from( $('#sec04-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-03'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-23'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-03', TweenMax.from( $('#sec04-24'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-04'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-25'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-26'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-04', TweenMax.from( $('#sec04-27'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-05', TweenMax.from( $('#sec04-05'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-05', TweenMax.from( $('#sec04-28'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-05', TweenMax.from( $('#sec04-29'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-05', TweenMax.from( $('#sec04-30'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-06', TweenMax.from( $('#sec04-06'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-06', TweenMax.from( $('#sec04-31'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-06', TweenMax.from( $('#sec04-32'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-06', TweenMax.from( $('#sec04-33'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-07', TweenMax.from( $('#sec04-07'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-07', TweenMax.from( $('#sec04-34'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-07', TweenMax.from( $('#sec04-35'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-07', TweenMax.from( $('#sec04-36'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-08', TweenMax.from( $('#sec04-08'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-08', TweenMax.from( $('#sec04-37'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-08', TweenMax.from( $('#sec04-38'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-09', TweenMax.from( $('#sec04-09'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-09', TweenMax.from( $('#sec04-39'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-09', TweenMax.from( $('#sec04-40'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-09', TweenMax.from( $('#sec04-41'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-10', TweenMax.from( $('#sec04-10'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-10', TweenMax.from( $('#sec04-42'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-10', TweenMax.from( $('#sec04-43'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-10', TweenMax.from( $('#sec04-44'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-11', TweenMax.from( $('#sec04-11'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-11', TweenMax.from( $('#sec04-45'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-11', TweenMax.from( $('#sec04-46'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-12', TweenMax.from( $('#sec04-12'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-12', TweenMax.from( $('#sec04-47'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-12', TweenMax.from( $('#sec04-48'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-12', TweenMax.from( $('#sec04-49'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-13', TweenMax.from( $('#sec04-13'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-13', TweenMax.from( $('#sec04-50'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-13', TweenMax.from( $('#sec04-51'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-13', TweenMax.from( $('#sec04-52'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-14'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-53'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-54'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-55'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-15', TweenMax.from( $('#sec04-15'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-15', TweenMax.from( $('#sec04-56'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-15', TweenMax.from( $('#sec04-57'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-15', TweenMax.from( $('#sec04-58'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-16', TweenMax.from( $('#sec04-16'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-16', TweenMax.from( $('#sec04-59'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-16', TweenMax.from( $('#sec04-60'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-17', TweenMax.from( $('#sec04-17'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-17', TweenMax.from( $('#sec04-61'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-17', TweenMax.from( $('#sec04-62'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-17', TweenMax.from( $('#sec04-63'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-18'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-64'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-18', TweenMax.from( $('#sec04-65'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-19', TweenMax.from( $('#sec04-19'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-19', TweenMax.from( $('#sec04-66'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-19', TweenMax.from( $('#sec04-67'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-20', TweenMax.from( $('#sec04-20'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-20', TweenMax.from( $('#sec04-68'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-20', TweenMax.from( $('#sec04-69'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-20', TweenMax.from( $('#sec04-70'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-21', TweenMax.from( $('#sec04-21'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-21', TweenMax.from( $('#sec04-71'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-21', TweenMax.from( $('#sec04-72'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-22', TweenMax.from( $('#sec04-22'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec04-22', TweenMax.from( $('#sec04-73'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec04-22', TweenMax.from( $('#sec04-74'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec04-11', TweenMax.from( $('#sec04-75'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -230);

	controller.addTween('#sec04-76', TweenMax.from( $('#sec04-76'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec04-76', TweenMax.from( $('#sec04-77'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section04 .block04 .animation-holder1', TweenMax.from( $('#sec04-78'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 80);
	controller.addTween('#section04 .block04 .animation-holder1', TweenMax.from( $('#sec04-79'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 80);
	controller.addTween('#section04 .block04 .animation-holder1', TweenMax.from( $('#sec04-80'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 80);
	controller.addTween('#section04 .block04 .animation-holder1', TweenMax.from( $('#sec04-81'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 80);

	controller.addTween('#section04 .block04 .animation-holder2', TweenMax.from( $('#sec04-82'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section05 .block01', TweenMax.from( $('#sec05-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#sec05-04', TweenMax.from( $('#sec05-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec05-04', TweenMax.from( $('#sec05-04'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec05-04', TweenMax.from( $('#sec05-05'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -80);

	controller.addTween('#sec05-06', TweenMax.from( $('#sec05-06'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-06', TweenMax.from( $('#sec05-12'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-06', TweenMax.from( $('#sec05-13'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-06', TweenMax.from( $('#sec05-14'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-07', TweenMax.from( $('#sec05-07'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-07', TweenMax.from( $('#sec05-15'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-07', TweenMax.from( $('#sec05-16'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-07', TweenMax.from( $('#sec05-17'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-08', TweenMax.from( $('#sec05-08'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-08', TweenMax.from( $('#sec05-18'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-08', TweenMax.from( $('#sec05-19'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-08', TweenMax.from( $('#sec05-20'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-09'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-21'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-22'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-23'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-10', TweenMax.from( $('#sec05-10'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-10', TweenMax.from( $('#sec05-24'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-10', TweenMax.from( $('#sec05-25'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-10', TweenMax.from( $('#sec05-26'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-10', TweenMax.from( $('#sec05-30'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-11', TweenMax.from( $('#sec05-11'), 0.8, {css:{opacity:0, rotation: 720}, delay:0, ease:Quad.easeInOut}),0, -50);
	controller.addTween('#sec05-11', TweenMax.from( $('#sec05-27'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0.8, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#sec05-11', TweenMax.from( $('#sec05-28'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec05-11', TweenMax.from( $('#sec05-29'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section05 .block04 .animation-holder', TweenMax.from( $('#sec05-31'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section05 .block04 .animation-holder', TweenMax.from( $('#sec05-32'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section05 .block04 .animation-holder', TweenMax.from( $('#sec05-33'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#sec05-34', TweenMax.from( $('#sec05-34'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-34', TweenMax.from( $('#sec05-35'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section06 .block01', TweenMax.from( $('#sec06-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-03'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-04'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-05'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-06'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-09'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-10'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-13'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:5.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-14'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:6, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-16'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-17'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-18'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-19'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-20'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-21'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block03 .animation-holder4', TweenMax.from( $('#sec06-22'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#section06 .block04 .animation-holder1', TweenMax.from( $('#sec06-23'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section06 .block04 .animation-holder1', TweenMax.from( $('#sec06-24'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section06 .block04 .animation-holder1', TweenMax.from( $('#sec06-25'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section06 .block04 .animation-holder2', TweenMax.from( $('#sec06-26'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section06 .block04 .animation-holder2', TweenMax.from( $('#sec06-27'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-28'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-29'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-30'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-31'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-32'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-33'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-34'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-35'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-36'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-37'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-38'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:5.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-39'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:6, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-40'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:6.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-41'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:7, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-42'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:7.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-43'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:8, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-44'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:8.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-45'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:9, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-46'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:9.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#section06 .block05 .animation-holder1', TweenMax.from( $('#sec06-47'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:10, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#section07 .block01', TweenMax.from( $('#sec07-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#section07 .block02', TweenMax.from( $('#sec07-03'),1.85, {css:{opacity:0, rotation: 720, right:'-300px', top:'-200px'}, delay:0, ease:Quad.easeInOut}),0, 30);

	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-04'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-05'), 0.8, {css:{ opacity:0, rotation: 720, left:'-300px'}, delay:1, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-06'), 0.8, {css:{ opacity:0, rotation: 720, left:'-300px'}, delay:1, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-07'), 0.8, {css:{ opacity:0, rotation: 720, left:'-300px'}, delay:1, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-08'), 0.8, {css:{ opacity:0, rotation: 720, left:'-300px'}, delay:1, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-09'), 0.8, {css:{ opacity:0, rotation: 720, left:'-300px'}, delay:1, ease:Quad.easeInOut}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-10'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-11'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.1, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-12'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.2, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-13'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.3, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section07 .block03', TweenMax.from( $('#sec07-14'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.4, ease:Circ.easeIn}),0, 100);

	controller.addTween('#section07 .block04 .left .animation-holder', TweenMax.from( $('#sec07-15'),1.8, {css:{opacity:0, rotation: 720, left:'-300px', top:'-200px'}, delay:0, ease:Quad.easeInOut}),0, 70);
	controller.addTween('#section07 .block04 .left .animation-holder', TweenMax.from( $('#sec07-16'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, 70);
	controller.addTween('#section07 .block04 .left .animation-holder', TweenMax.from( $('#sec07-17'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2.8, ease:Bounce.easeOut}),0, 70);

	controller.addTween('#section07 .block05 .animation-holder', TweenMax.from( $('#sec07-18'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section07 .block05 .animation-holder', TweenMax.from( $('#sec07-19'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section07 .block05 .animation-holder', TweenMax.from( $('#sec07-20'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section07 .block06 .animation-holder', TweenMax.from( $('#sec07-21'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 50);
	controller.addTween('#section07 .block06 .animation-holder', TweenMax.from( $('#sec07-22'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#section07 .block06 .animation-holder', TweenMax.from( $('#sec07-23'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#section07 .block06 .animation-holder', TweenMax.from( $('#sec07-24'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 50);
	controller.addTween('#section07 .block06 .animation-holder', TweenMax.from( $('#sec07-25'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 50);

	controller.addTween('#section08 .block01', TweenMax.from( $('#sec08-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);

	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-05'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0.1, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-07'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0.2, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-09'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0.3, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-11'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0.4, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-04'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section08 .block02', TweenMax.from( $('#sec08-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section08 .block03 .animation-holder1', TweenMax.from( $('#sec08-13'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section08 .block03 .animation-holder1', TweenMax.from( $('#sec08-14'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section08 .block03 .animation-holder1', TweenMax.from( $('#sec08-15'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-17'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 160);
	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-18'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 160);
	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-19'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 160);
	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-20'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 160);
	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-21'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 160);
	controller.addTween('#section08 .block03 .animation-holder2', TweenMax.from( $('#sec08-16'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 160);

});



