/*   scrollorama  */
$(document).ready(function() {
	$('body').css('visibility','visible');
	// section01
	TweenMax.from($('#sec01-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn});
	TweenMax.from($('#sec01-04'), 0.5, {css:{ left:'-=200px', opacity:'0'}, delay:1, ease:Bounce.easeOut});
	TweenMax.from($('#sec01-05'), 0.5, {css:{ top:'-=200px', opacity:'0'}, delay:1.5, ease:Circ.easeIn});
	TweenMax.from($('#sec01-01'), 0.5, {css:{ left:'-=200px', opacity:'0'}, delay:2, ease:Circ.easeIn});
	TweenMax.from($('#sec01-02'), 0.5, {css:{ left:'-=200px', opacity:'0'}, delay:2.5, ease:Circ.easeIn});
	TweenMax.from($('#sec02-01'), 0.5, {css:{ top:'-=200px', opacity:'0'}, delay:3, ease:Circ.easeIn});
	TweenMax.from($('#sec02-02'), 0.5, {css:{ left:'-=200px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut});

	var controller = $.superscrollorama();
	controller.addTween('#section02 .block01 .animation-holder3', TweenMax.from( $('#sec02-03'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -200);
	controller.addTween('#section02 .block01 .animation-holder3', TweenMax.from( $('#sec02-04'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -200);

	controller.addTween('#sec02-06', TweenMax.from( $('#sec02-05'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-06', TweenMax.from( $('#sec02-06'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec02-06', TweenMax.from( $('#sec02-07'), 1, {css:{ right:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -50);

	controller.addTween('#sec02-09', TweenMax.from( $('#sec02-09'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -60);
	controller.addTween('#sec02-09', TweenMax.from( $('#sec02-08'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -60);

	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-10'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -40);
	controller.addTween('#sec02-11', TweenMax.from( $('#sec02-11'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -40);

	controller.addTween('#sec02-12', TweenMax.from( $('#sec02-12'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -40);
	controller.addTween('#sec02-12', TweenMax.from( $('#sec02-13'), 1, {css:{ left:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -40);

	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-01'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-02'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-03'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-04'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block01 .animation-holder2', TweenMax.from( $('#sec03-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, -50);

	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-09'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section03 .block02 .animation-holder', TweenMax.from( $('#sec03-10'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);

	controller.addTween('#section03 .block03 .animation-holder', TweenMax.from( $('#sec03-11'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section03 .block03 .animation-holder', TweenMax.from( $('#sec03-12'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section03 .block03 .animation-holder', TweenMax.from( $('#sec03-16'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -50);

	controller.addTween('#sec03-14', TweenMax.from( $('#sec03-13'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-14', TweenMax.from( $('#sec03-14'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-14', TweenMax.from( $('#sec03-17'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-14', TweenMax.from( $('#sec03-18'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec03-14', TweenMax.from( $('#sec03-19'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-15'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -160);

	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-20'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 50);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-21'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-23'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-22'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#sec03-15', TweenMax.from( $('#sec03-24'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 50);

	controller.addTween('#sec03-25', TweenMax.from( $('#sec03-25'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 50);
	controller.addTween('#sec03-25', TweenMax.from( $('#sec03-26'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 50);
	controller.addTween('#sec03-25', TweenMax.from( $('#sec03-27'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 50);

	controller.addTween('#section03 .block07 .animation-holder', TweenMax.from( $('#sec03-28'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section03 .block07 .animation-holder', TweenMax.from( $('#sec03-29'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);

	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-30'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-31'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-32'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-33'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-34'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-35'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-36'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-37'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section03 .block07 .col', TweenMax.from( $('#sec03-38'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4, ease:Circ.easeIn}),0, -20);

	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-39'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-40'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-41'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-42'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-43'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, 150);
	controller.addTween('#sec03-39', TweenMax.from( $('#sec03-44'), 0.5, {css:{ left:'+=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, 150);

	controller.addTween('#section04 .block01', TweenMax.from( $('#sec04-01'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -20);
	controller.addTween('#section04 .block01', TweenMax.from( $('#sec04-02'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -20);
	controller.addTween('#section04 .block01', TweenMax.from( $('#sec04-03'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -20);
	controller.addTween('#section04 .block01', TweenMax.from( $('#sec04-04'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -20);

	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-05'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .animation-holder', TweenMax.from( $('#sec04-06'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);

	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-09'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row1 .col1', TweenMax.from( $('#sec04-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);

	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-14'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-16'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-17'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -100);
	controller.addTween('#section04 .block02 .row2 .col1', TweenMax.from( $('#sec04-18'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Circ.easeIn}),0, -100);

	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-25'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-26'), 0.5, {css:{ bottom:'+=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-24'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-19'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-20'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-21'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-22'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -80);
	controller.addTween('#sec04-25', TweenMax.from( $('#sec04-23'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, -80);

	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-01'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-02'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -30);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-03'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -30);

	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-04'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 100);
	controller.addTween('#sec05-02', TweenMax.from( $('#sec05-05'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 100);

	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-06'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-07'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-08'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-09'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-10'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-11'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-12'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-13'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-14'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block02 .col', TweenMax.from( $('#sec05-15'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:4.5, ease:Bounce.easeOut}),0, -50);

	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-16'), 1.4, {css:{ top:'+=200px', opacity:'0'}, delay:0, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-18'), 1.4, {css:{ top:'+=200px', opacity:'0'}, delay:0.2, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-20'), 1.4, {css:{ top:'+=200px', opacity:'0'}, delay:0.4, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-22'), 1.4, {css:{ top:'+=200px', opacity:'0'}, delay:0.6, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-24'), 1.4, {css:{ top:'+=200px', opacity:'0'}, delay:0.8, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-17'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Elastic.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-19'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-21'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-23'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:2.5, ease:Bounce.easeOut}),0, -50);
	controller.addTween('#section05 .block03 .col1', TweenMax.from( $('#sec05-25'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:3, ease:Bounce.easeOut}),0, -50);

	controller.addTween('#sec05-26', TweenMax.from( $('#sec05-26'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec05-26', TweenMax.from( $('#sec05-27'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, 0);

	controller.addTween('#sec05-26', TweenMax.from( $('#sec05-28'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 80);

	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-29'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-30'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0.5, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-33'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-34'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.4, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-35'), 0.8, {css:{ left:'-=300px', opacity:'0'}, delay:1.8, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-29', TweenMax.from( $('#sec05-36'), 0.8, {css:{ right:'+=300px', opacity:'0'}, delay:2.2, ease:Circ.easeIn}),0, -90);

	controller.addTween('#sec05-31', TweenMax.fromTo( $('#sec05-31'), 2.25, {css:{opacity:0, left:'+=400px' }, immediateRender:true, ease:Circ.easeIn}, {css:{opacity:1, left:'0'}, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-32', TweenMax.fromTo( $('#sec05-32'), 2.25, {css:{opacity:0, right:'+=400px'}, immediateRender:true, ease:Circ.easeIn}, {css:{opacity:1,right:'0'}, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-31', TweenMax.fromTo( $('#sec05-37'), 2.25, {css:{opacity:0, left:'+=400px' }, immediateRender:true, ease:Circ.easeIn}, {css:{opacity:1, left:'0'}, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-32', TweenMax.fromTo( $('#sec05-38'), 2.25, {css:{opacity:0, right:'+=400px'}, immediateRender:true, ease:Circ.easeIn}, {css:{opacity:1,right:'0'}, ease:Bounce.easeOut}),0, -90);

	controller.addTween('#sec05-40', TweenMax.from( $('#sec05-39'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-40', TweenMax.from( $('#sec05-40'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:0.5, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-40', TweenMax.from( $('#sec05-41'), 0.5, {css:{ top:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -90);
	controller.addTween('#sec05-40', TweenMax.from( $('#sec05-42'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:1.5, ease:Circ.easeIn}),0, -90);
	controller.addTween('#sec05-40', TweenMax.from( $('#sec05-43'), 0.5, {css:{ left:'-=300px', opacity:'0'}, delay:2, ease:Circ.easeIn}),0, -90);

	controller.addTween('#sec06-02', TweenMax.from( $('#sec06-01'), 1, {css:{ top:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, 0);
	controller.addTween('#sec06-02', TweenMax.from( $('#sec06-02'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, 0);
	controller.addTween('#sec06-02', TweenMax.from( $('#sec06-03'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:2, ease:Bounce.easeOut}),0, 0);

	controller.addTween('#sec06-04', TweenMax.from( $('#sec06-04'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Circ.easeIn}),0, -50);
	controller.addTween('#sec06-04', TweenMax.from( $('#sec06-05'), 1, {css:{ right:'+=300px', opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -50);

	controller.addTween('#sec06-06', TweenMax.from( $('#sec06-06'), 1, {css:{ left:'-=300px', opacity:'0'}, delay:0, ease:Bounce.easeOut}),0, -50);
});