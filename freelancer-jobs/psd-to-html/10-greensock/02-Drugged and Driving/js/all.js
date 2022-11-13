/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// section01
	TweenMax.from($('#sec01-03'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn});
	TweenMax.from($('#sec01-01'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-02'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn});
	TweenMax.from($('#sec01-04'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn});
	TweenMax.from($('#sec01-06'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-07'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn});
	TweenMax.from($('#sec01-08'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-09'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn});

	var controller = $.superscrollorama();
	// section02
	controller.addTween('#sec02-01', TweenMax.from( $('#sec02-01'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec02-01', TweenMax.from( $('#sec02-02'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#sec02-05', TweenMax.from( $('#sec02-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -180);
	controller.addTween('#sec02-05', TweenMax.from( $('#sec02-05'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -180);
	controller.addTween('#sec02-05', TweenMax.from( $('#sec02-04'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -180);

	controller.addTween('#sec02-05', TweenMax.from( $('#sec02-07'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 20);
	controller.addTween('#sec02-05', TweenMax.from( $('#sec02-06'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 20);

	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-09'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-14'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-11'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-12'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -90);

	// section03
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-01'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-02'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-03'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-04'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:1.6, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-05'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:1.8, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-06'), 0.85, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Elastic.easeOut}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.85, ease:Circ.easeIn}),0, 300);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.7, ease:Circ.easeIn}),0, 300);

	controller.addTween('#sec02-11', TweenMax.from( $('#sec03-09'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 520);

	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-14'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-17'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-18'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-16'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-19'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-20'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:5, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-21'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:5.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec03-22', TweenMax.from( $('#sec03-22'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6, ease:Circ.easeIn}),0, -100);

	controller.addTween('#sec03-23', TweenMax.from( $('#sec03-23'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-23', TweenMax.from( $('#sec03-25'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-23', TweenMax.from( $('#sec03-24'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-26'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-27'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-28'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-30'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-29'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-31'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-32'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec03-33', TweenMax.from( $('#sec03-33'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -80);

	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-34'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-35'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-36'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-37'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-38'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-39'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-40'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-41'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-42'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.3, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-43'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.4, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-44'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-45'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.6, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-46'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.7, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-47'), 0.8, {css:{ left:'+=300px', opacity:'0'}, delay:2.8, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-48'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-49'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4.1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-50'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:4.6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-51'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5.1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-52'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5.6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec03-38', TweenMax.from( $('#sec03-53'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6.1, ease:Circ.easeIn}),0, 0);

	//	section04
	controller.addTween('#section04', TweenMax.from( $('#sec04-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section04', TweenMax.from( $('#sec04-02'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section04', TweenMax.from( $('#sec04-03'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-04'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-05'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0.1, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-06'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0.2, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-07'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0.3, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-08'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:0.4, ease:Elastic.easeOut}),0, 0);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-09'), 1, {css:{ bottom:'-=300px', opacity:'0'}, delay:0.4, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-13'), 0.5, {css:{ right:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-14'), 0.5, {css:{ right:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-15'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec04-14', TweenMax.from( $('#sec04-16'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -40);

	//	section05
	controller.addTween('#section05', TweenMax.from( $('#sec05-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05', TweenMax.from( $('#sec05-02'), 1, {css:{ bottom:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec05-03', TweenMax.from( $('#sec05-03'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-03', TweenMax.from( $('#sec05-04'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-03', TweenMax.from( $('#sec05-05'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-03', TweenMax.from( $('#sec05-06'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec05-03', TweenMax.from( $('#sec05-07'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);

	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-09'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-10'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-09', TweenMax.from( $('#sec05-12'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-19'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-20'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-13'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-15'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-16'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-14'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-17'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-13', TweenMax.from( $('#sec05-18'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section05 .block05', TweenMax.from( $('#sec05-21'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -100);

	controller.addTween('#sec05-22', TweenMax.from( $('#sec05-23'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-22', TweenMax.from( $('#sec05-25'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec05-22', TweenMax.from( $('#sec05-22'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-22', TweenMax.from( $('#sec05-24'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-36'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-26'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-29'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-27'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-30'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-28'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#section05 .block07', TweenMax.from( $('#sec05-31'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec05-33', TweenMax.from( $('#sec05-35'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec05-33', TweenMax.from( $('#sec05-34'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec05-33', TweenMax.from( $('#sec05-32'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -80);
	controller.addTween('#sec05-33', TweenMax.from( $('#sec05-33'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -80);

	// section06
	controller.addTween('#sec06-03', TweenMax.from( $('#sec06-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec06-03', TweenMax.from( $('#sec06-02'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-03', TweenMax.from( $('#sec06-03'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-03', TweenMax.from( $('#sec06-04'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-07'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-08'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-09'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-10'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-11'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-12'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-13'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec06-09', TweenMax.from( $('#sec06-14'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, -70);

	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-31'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-16'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-19'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.1, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-22'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.2, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-25'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.3, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-28'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.4, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-17'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:1.9, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-20'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-23'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.1, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-26'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.2, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-29'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.3, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-18'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.8, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-21'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:2.9, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-24'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-27'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:3.1, ease:Elastic.easeOut}),0, 180);
	controller.addTween('#section06 .block02', TweenMax.from( $('#sec06-30'), 0.8, {css:{ top:'-=300px', opacity:'0'}, delay:3.2, ease:Elastic.easeOut}),0, 180);

	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-32'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -250);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-33'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -250);

	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-34'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-35'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-36'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-37'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-38'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-39'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec06-35', TweenMax.from( $('#sec06-40'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -100);

	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-41'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-42'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 100);
	controller.addTween('#section06 .block03 .animation-holder1', TweenMax.from( $('#sec06-43'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 100);

	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-44'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-51'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-45'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-46'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-47'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-48'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-49'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-48', TweenMax.from( $('#sec06-50'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec06-52', TweenMax.from( $('#sec06-53'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec06-52', TweenMax.from( $('#sec06-54'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec06-52', TweenMax.from( $('#sec06-52'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec06-52', TweenMax.from( $('#sec06-55'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -140);

	controller.addTween('#sec06-56', TweenMax.from( $('#sec06-56'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 200);
	controller.addTween('#sec06-56', TweenMax.from( $('#sec06-57'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 200);

	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-58'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-60'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-61'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-62'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-59'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-63'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-64'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-67'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-68'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-71'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:4.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-72'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-65'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:5.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-66'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-69'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:6.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-70'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:7, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-73'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:7.5, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-60', TweenMax.from( $('#sec06-74'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:8, ease:Circ.easeIn}),0, 0);

	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-75'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-76'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-77'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-78'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-79'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-80'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-81'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-82'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, 30);
	controller.addTween('#section06 .block08', TweenMax.from( $('#sec06-83'), 0.5, {css:{ top:'+=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, 30);

	// section07
	controller.addTween('#section07', TweenMax.from( $('#sec07-01'), 1, {css:{ bottom:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);

	controller.addTween('#section07 .block02 .animation-holder1', TweenMax.from( $('#sec07-02'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 70);
	controller.addTween('#section07 .block02 .animation-holder1', TweenMax.from( $('#sec07-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 70);
	controller.addTween('#section07 .block02 .animation-holder1', TweenMax.from( $('#sec07-04'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 70);
	controller.addTween('#section07 .block02 .animation-holder1', TweenMax.from( $('#sec07-05'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, 70);

	controller.addTween('#sec07-06', TweenMax.from( $('#sec07-06'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -120);
	controller.addTween('#sec07-06', TweenMax.from( $('#sec07-07'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -120);

	controller.addTween('#sec07-10', TweenMax.from( $('#sec07-08'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec07-10', TweenMax.from( $('#sec07-12'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -100);
	controller.addTween('#sec07-10', TweenMax.from( $('#sec07-09'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#sec07-10', TweenMax.from( $('#sec07-10'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -100);

	controller.addTween('#sec07-14', TweenMax.from( $('#sec07-13'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec07-14', TweenMax.from( $('#sec07-15'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec07-14', TweenMax.from( $('#sec07-16'), 1, {css:{ top:'+=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -70);
	controller.addTween('#sec07-14', TweenMax.from( $('#sec07-14'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -70);

	controller.addTween('#sec07-17', TweenMax.from( $('#sec07-17'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec07-17', TweenMax.from( $('#sec07-22'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec07-17', TweenMax.from( $('#sec07-22-1'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);

	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-18'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-23'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec07-18', TweenMax.from( $('#sec07-23-1'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);

	controller.addTween('#sec07-19', TweenMax.from( $('#sec07-19'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec07-19', TweenMax.from( $('#sec07-24'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec07-19', TweenMax.from( $('#sec07-24-1'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);

	controller.addTween('#sec07-20', TweenMax.from( $('#sec07-20'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec07-20', TweenMax.from( $('#sec07-25'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec07-20', TweenMax.from( $('#sec07-25-1'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);

	controller.addTween('#sec07-21', TweenMax.from( $('#sec07-21'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -140);
	controller.addTween('#sec07-21', TweenMax.from( $('#sec07-26'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -140);
	controller.addTween('#sec07-21', TweenMax.from( $('#sec07-26-1'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -140);

	controller.addTween('#section07 .block06', TweenMax.from( $('#sec07-27'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	controller.addTween('#section07 .block06', TweenMax.from( $('#sec07-29'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 150);
	controller.addTween('#section07 .block06', TweenMax.from( $('#sec07-28'), 1, {css:{ bottom:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 150);
});



