// JavaScript Document
/*---------nav bar----------------------*/
	

	jQuery('a[href*=#]').click(function(e) {
    if (location.pathname.replace('/^\//','') == this.pathname.replace('/^\//','')
        && location.hostname == this.hostname) {
		
        var hash = this.hash;
        var $target = $(this.hash);
        $target = $target.length && $target
            || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
            $('.active').removeClass('active');
            $(this).parent().addClass('active');
            var targetOffset = $target.offset().top -60;
            $('html,body')
            .animate({
                scrollTop: targetOffset
            }, 1250, function() {
            });
            e.preventDefault();

        }
		}
		
		});
		
		// Cache selectors
var lastId,
    topMenu = jQuery(".page_links"),
    topMenuHeight = topMenu.outerHeight()- 70,
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
  }, 800);
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
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});
	
/*   scrollorama  */
$(document).ready(function() {

	
			$('body').css('visibility','visible');

			// hide content until after title animation

			// lettering.js to split up letters for animation
		
			
			// TimelineLite for title animation, then start up superscrollorama when complete
		
						TweenMax.from( $('#sec01-02'), .80+Math.random(), {css:{ top:'-200px', opacity:'0'}, delay:0.25, ease:Circ.easeIn});
		TweenMax.from( $('#sec01-01'), .80+Math.random(), {css:{ top:'200px', opacity:'0'}, delay:0.95, ease:Circ.easeIn});
		TweenMax.from( $('#sec01-03'), .80+Math.random(), {css:{opacity:'0', rotation: 720}, delay:1.95, ease:Circ.easeIn});


				var controller = $.superscrollorama();


		
				controller.addTween('#section-03', TweenMax.from( $('#section-03'),.02, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
				controller.addTween('#sec03-title', TweenMax.from( $('#sec03-title'),1, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
         controller.addTween('#middle-01', TweenMax.from( $('#middle-01'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
         //controller.addTween('#sec03-01', TweenMax.from( $('#sec03-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 //controller.addTween('#sec03-02', TweenMax.from( $('#sec03-02'),.65, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 //controller.addTween('#sec03-03', TweenMax.from( $('#sec03-03'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp01', TweenMax.from( $('#col-03-sp01'),.25, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp02', TweenMax.from( $('#col-03-sp02'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp03', TweenMax.from( $('#col-03-sp03'),1.45, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 //controller.addTween('#sec03-04', TweenMax.from( $('#sec03-04'),.25, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 //controller.addTween('#sec03-05', TweenMax.from( $('#sec03-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 //controller.addTween('#sec03-06', TweenMax.from( $('#sec03-06'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp04', TweenMax.from( $('#col-03-sp04'),.25, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp05', TweenMax.from( $('#col-03-sp05'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#col-03-sp06', TweenMax.from( $('#col-03-sp06'),1.45, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 
		 
		 controller.addTween('#section-04', TweenMax.from( $('#section-04'),.02, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
				controller.addTween('#sec04-title', TweenMax.from( $('#sec04-title'),1, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
         controller.addTween('#middle-02', TweenMax.from( $('#middle-02'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -200);
		 controller.addTween('#sec04-01', TweenMax.from( $('#sec04-01'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-02', TweenMax.from( $('#sec04-02'),.85, {css:{opacity:0, rotation: 720}, ease:Quad.easeInOut}),0, -300);
		 		 controller.addTween('#col-02-sp01', TweenMax.from( $('#col-02-sp01'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#col-02-sp02', TweenMax.from( $('#col-02-sp02'),.85, {css:{left:'1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-tx01', TweenMax.from( $('#sec04-tx01'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
		 controller.addTween('#sec04-tx02', TweenMax.from( $('#sec04-tx02'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);

		 controller.addTween('#sec04-03', TweenMax.from( $('#sec04-03'),.85, {css:{opacity:'0', width:'0px'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-04', TweenMax.from( $('#sec04-04'),.85, {css:{top:'-100px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 		 controller.addTween('#col-02-sp03', TweenMax.from( $('#col-02-sp03'),1, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#col-02-sp04', TweenMax.from( $('#col-02-sp04'),1, {css:{left:'1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-tx03', TweenMax.from( $('#sec04-tx03'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
		 controller.addTween('#sec04-tx04', TweenMax.from( $('#sec04-tx04'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
		 
		 controller.addTween('#sec04-05', TweenMax.from( $('#sec04-05'),1.85, {css:{opacity:'0', height:'0px'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-06', TweenMax.from( $('#sec04-06'),2.85, {css:{opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		 controller.addTween('#col-02-sp05', TweenMax.from( $('#col-02-sp05'),1.4, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#col-02-sp06', TweenMax.from( $('#col-02-sp06'),1.4, {css:{left:'1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -300);
		 controller.addTween('#sec04-tx05', TweenMax.from( $('#sec04-tx05'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
		 controller.addTween('#sec04-tx06', TweenMax.from( $('#sec04-tx06'),1.85, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
		 controller.addTween('#sec04-08', TweenMax.from( $('#sec04-08'),1.85, {css:{ opacity:'0'}, ease:Bounce.easeIn}),0, -300);
		 controller.addTween('#col-02-sp07', TweenMax.from( $('#col-02-sp07'),1.85, {css:{left:'-1000px', opacity:'0'}, ease:Elastic.easeOut}),0, -300);
		
				 controller.addTween('#section-05', TweenMax.from( $('#section-05'),.02, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
				controller.addTween('#sec05-title', TweenMax.from( $('#sec05-title'),1, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -400);
         controller.addTween('#middle-03', TweenMax.from( $('#middle-03'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Quad.easeInOut}),0, -400);
		 
		  controller.addTween('#mn-01', TweenMax.from( $('#mn-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-02', TweenMax.from( $('#mn-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-03', TweenMax.from( $('#mn-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-04', TweenMax.from( $('#mn-04'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-05', TweenMax.from( $('#mn-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-06', TweenMax.from( $('#mn-06'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-07', TweenMax.from( $('#mn-07'),.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-08', TweenMax.from( $('#mn-08'),.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-09', TweenMax.from( $('#mn-09'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-10', TweenMax.from( $('#mn-10'),1.15, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-11', TweenMax.from( $('#mn-11'),1.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn-12', TweenMax.from( $('#mn-12'),1.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  
		  controller.addTween('#mny-01', TweenMax.from( $('#mny-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-02', TweenMax.from( $('#mny-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-03', TweenMax.from( $('#mny-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-04', TweenMax.from( $('#mny-04'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-05', TweenMax.from( $('#mny-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-06', TweenMax.from( $('#mny-06'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-07', TweenMax.from( $('#mny-07'),.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-08', TweenMax.from( $('#mny-08'),.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-09', TweenMax.from( $('#mny-09'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-10', TweenMax.from( $('#mny-10'),1.15, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-11', TweenMax.from( $('#mny-11'),1.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-12', TweenMax.from( $('#mny-12'),1.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mny-13', TweenMax.from( $('#mny-13'),1.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-14', TweenMax.from( $('#mny-14'),1.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mny-15', TweenMax.from( $('#mny-15'),1.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-16', TweenMax.from( $('#mny-16'),1.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mny-17', TweenMax.from( $('#mny-17'),1.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-18', TweenMax.from( $('#mny-18'),1.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mny-19', TweenMax.from( $('#mny-19'),2.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mny-20', TweenMax.from( $('#mny-20'),2.15, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  
		  controller.addTween('#middle-04', TweenMax.from( $('#middle-04'),2.25, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#sec06-02', TweenMax.from( $('#sec06-02'),1.85, {css:{opacity:0, rotation: 720, left:'-300px', top:'-200px'}, ease:Quad.easeInOut}),0, -300);
		  controller.addTween('#sec06-03', TweenMax.from( $('#sec06-03'),1.85, {css:{opacity:0, rotation: 720, right:'-300px', top:'-200px'}, ease:Quad.easeInOut}),0, -300);
		  controller.addTween('#section-06 .col-01 .unord-amount', TweenMax.from( $('#section-06 .col-01 .unord-amount'),2.25, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#section-06 .col-02 .unord-pains', TweenMax.from( $('#section-06 .col-02 .unord-pains'),2.25, {css:{opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -300);
		  		  controller.addTween('#section-06 .col-03 .unord-amount', TweenMax.from( $('#section-06 .col-03 .unord-amount'),2.25, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#section-06 .col-04 .unord-pains', TweenMax.from( $('#section-06 .col-04 .unord-pains'),2.25, {css:{opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -300);
		  				controller.addTween('#section-07 #sec-07-cont', TweenMax.fromTo( $('#section-07 #sec-07-cont'), 1.25, {css:{opacity:0, 'letter-spacing':'30px', width:'1600px'}, immediateRender:true, ease:Quad.easeInOut}, {css:{opacity:1, 'letter-spacing':'-1px', width:'800px'}, ease:Quad.easeInOut}), 0, 100);
						
						controller.addTween('#middle-08', TweenMax.from( $('#middle-08'),2.25, {css:{top:'-100px', opacity:'0', left:'200px', rotation:-720}, ease:Sine.easeOut}),0, -300);
								  controller.addTween('#section-08 .col-01 .unord-amount', TweenMax.from( $('#section-08 .col-01 .unord-amount'),2.25, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#section-08 .col-02 .unord-pains', TweenMax.from( $('#section-08 .col-02 .unord-pains'),2.25, {css:{opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -300);
		  		  controller.addTween('#section-08 .col-03 .unord-amount', TweenMax.from( $('#section-08 .col-03 .unord-amount'),2.25, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#section-08 .col-04 .unord-pains', TweenMax.from( $('#section-08 .col-04 .unord-pains'),2.25, {css:{opacity:'0'}, delay:1, ease:Bounce.easeOut}),0, -300);
	
	controller.addTween('#sec-08bis-img', TweenMax.from( $('#sec-08bis-img'),1.4, {css:{left:'1000px', opacity:'0'}, ease:Circ.easeIn}),0, -300);
	controller.addTween('#unord-amount-08left', TweenMax.from( $('#unord-amount-08left'),2.4, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
	controller.addTween('#unord-pains-08right', TweenMax.from( $('#unord-pains-08right'),2.4, {css:{opacity:'0'}, ease:Circ.easeIn}),0, -300);
	
		  controller.addTween('#mn1-01', TweenMax.from( $('#mn1-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn1-02', TweenMax.from( $('#mn1-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn1-03', TweenMax.from( $('#mn1-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn1-05', TweenMax.from( $('#mn1-05'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn1-06', TweenMax.from( $('#mn1-06'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn1-07', TweenMax.from( $('#mn1-07'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  
		  controller.addTween('#mn2-01', TweenMax.from( $('#mn2-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-02', TweenMax.from( $('#mn2-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-03', TweenMax.from( $('#mn2-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-04', TweenMax.from( $('#mn2-04'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-05', TweenMax.from( $('#mn2-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-06', TweenMax.from( $('#mn2-06'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-7', TweenMax.from( $('#mn2-7'),.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-8', TweenMax.from( $('#mn2-8'),.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn2-9', TweenMax.from( $('#mn2-9'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  
		   controller.addTween('#mn3-01', TweenMax.from( $('#mn3-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-02', TweenMax.from( $('#mn3-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-03', TweenMax.from( $('#mn3-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-04', TweenMax.from( $('#mn3-04'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-05', TweenMax.from( $('#mn3-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-06', TweenMax.from( $('#mn3-06'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-07', TweenMax.from( $('#mn3-07'),.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-08', TweenMax.from( $('#mn3-08'),.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-09', TweenMax.from( $('#mn3-09'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-10', TweenMax.from( $('#mn3-10'),1.15, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-11', TweenMax.from( $('#mn3-11'),1.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn3-12', TweenMax.from( $('#mn3-12'),1.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  
		  controller.addTween('#mn4-01', TweenMax.from( $('#mn4-01'),.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-02', TweenMax.from( $('#mn4-02'),.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-03', TweenMax.from( $('#mn4-03'),.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-04', TweenMax.from( $('#mn4-04'),.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-05', TweenMax.from( $('#mn4-05'),.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-06', TweenMax.from( $('#mn4-06'),.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-07', TweenMax.from( $('#mn4-07'),.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-08', TweenMax.from( $('#mn4-08'),.95, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-09', TweenMax.from( $('#mn4-09'),1.05, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-10', TweenMax.from( $('#mn4-10'),1.15, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-11', TweenMax.from( $('#mn4-11'),1.25, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-12', TweenMax.from( $('#mn4-12'),1.35, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mn4-13', TweenMax.from( $('#mn4-13'),1.45, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-14', TweenMax.from( $('#mn4-14'),1.55, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mn4-15', TweenMax.from( $('#mn4-15'),1.65, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
		  controller.addTween('#mn4-16', TweenMax.from( $('#mn4-16'),1.75, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);
          controller.addTween('#mn4-17', TweenMax.from( $('#mn4-17'),1.85, {css:{top:'-100px', opacity:'0'}, ease:Elastic.easeInOut}),0, -300);

		  controller.addTween('#sec-09-01', TweenMax.from( $('#sec-09-01'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-02', TweenMax.from( $('#sec-09-02'),.85, {css:{left:'-1000px', opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-03', TweenMax.from( $('#sec-09-03'),.85, {css:{left:'1000px', opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-04', TweenMax.from( $('#sec-09-04'),.85, {css:{left:'1000px', opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-walk', TweenMax.from( $('#sec-09-walk'),1.85, {css:{rotation:720, opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-bike', TweenMax.from( $('#sec-09-bike'),1.85, {css:{rotation:720, opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-car', TweenMax.from( $('#sec-09-car'),1.85, {css:{rotation:-720, opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  controller.addTween('#sec-09-bus', TweenMax.from( $('#sec-09-bus'),1.85, {css:{rotation:-720, opacity:'0'}, ease:Bounce.easeInOut}),0, -300);
		  
		  controller.addTween('#middle-10 img', TweenMax.from( $('#middle-10 img'),.85, {css:{top:'-100px', opacity:'0'}, ease:Bounce.easeOut}),0, -300);
		  controller.addTween('#sec-10-01', TweenMax.from( $('#sec-10-01'),.85, {css:{top:'-100px', left:'-200px', opacity:'0'}, ease:Circ.easeOut}),0, -300);
		  controller.addTween('#sec-10-02', TweenMax.from( $('#sec-10-02'),.85, {css:{top:'-100px', opacity:'0'}, ease:Circ.easeOut}),0, -300);
		  controller.addTween('#sec-10-03', TweenMax.from( $('#sec-10-03'),.85, {css:{top:'-100px', left:'100px', opacity:'0'}, ease:Circ.easeOut}),0, -300);
		  controller.addTween('#sec-10-04', TweenMax.from( $('#sec-10-04'),.85, {css:{top:'100px', left:'-200px', opacity:'0'}, ease:Circ.easeOut}),0, -400);
		  controller.addTween('#sec-10-05', TweenMax.from( $('#sec-10-05'),.85, {css:{top:'100px', opacity:'0'}, ease:Circ.easeOut}),0, -400);
		  controller.addTween('#sec-10-06', TweenMax.from( $('#sec-10-06'),.85, {css:{top:'100px', left:'100px', opacity:'0'}, ease:Circ.easeOut}),0, -400);
		  
		  

			}
		);



