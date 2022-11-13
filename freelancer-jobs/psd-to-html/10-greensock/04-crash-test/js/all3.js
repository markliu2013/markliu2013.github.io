
// JavaScript Document

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
            
           
            e.preventDefault();

        }
		}
		
		});
		
		// Cache selectors
var lastId,
    topMenu = jQuery(".page_links"),
    topMenuHeight = topMenu.outerHeight() -140,
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
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }    
                  
});
	

$(window).load(function() {
	$('body').css('visibility','visible');
	//$('html, body').animate({ scrollTop: 0 }, 0);
	
	var controller = $.superscrollorama();

/*
	TweenMax.from( $('#header-safety-tips'), 0.5+Math.random(), {css:{ left:'-300px', opacity:'0'}, delay:1, ease:Expo.easeIn});	
	controller.addTween('#box1-value', TweenMax.from( $('#box1-value'), 1.25, {css:{ top:-150, opacity:0}, delay:0.5, ease:Expo.easeIn}), 0, -200);*/
	TweenMax.from( $('#more-than-sixty-years'), 1+Math.random(), {css:{ left:'-300px', opacity:'0'}, delay:0.5, ease:Expo.easeOut});
	TweenMax.from( $('#the-chavy-logo'), 0.5, {css:{ left:'-300px', opacity:'0'}, delay:1, ease:Circ.easeOut});
	TweenMax.from( $('#corvette-logo'), 1.25, {css:{ left:'-300px', opacity:'0'}, delay:1.5, ease:Circ.easeOut});
	TweenMax.from( $('#header-car'), .5, {css:{ right:'-300px', opacity:'0'}, delay:2, ease:Circ.easeIn});
	
	controller.addTween('#map', TweenMax.from( $('#map'), 1.25, {css:{ right:-300, opacity:0}, delay:0.5, ease:Bounce.easeOut}), 0, -130);
	controller.addTween('#harley-j-earl-photo', TweenMax.from( $('#harley-j-earl-photo'), 1.25, {css:{ left:-500, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -230);
	controller.addTween('#harley-j-earl-name', TweenMax.from( $('#harley-j-earl-name'), 1.25, {css:{ left:-500, opacity:0}, delay:1.7, ease:Bounce.easeOut}), 0, -260);
	
	controller.addTween('#c1-generation-heading', TweenMax.from( $('#c1-generation-heading'), 1.25, {css:{ right:-300, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -280);
	controller.addTween('#c1-generation-car', TweenMax.from( $('#c1-generation-car'), 1.25, {css:{ right:-300, opacity:0}, delay:3.2, ease:Bounce.easeOut}), 0, -150);
	
	
	controller.addTween('#ninteen-fifty-three', TweenMax.from( $('#ninteen-fifty-three'), 1.25, {css:{ left:-300, opacity:0}, delay:0.5, ease:Bounce.easeOut}), 0, 30);
	controller.addTween('#blue-flame-engine', TweenMax.from( $('#blue-flame-engine'), 1.25, {css:{ left:-300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, 110);
	controller.addTween('#blue-flame-heading', TweenMax.from( $('#blue-flame-heading'), 1.25, {css:{ left:-300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -30);
	
	controller.addTween('#ninteen-fifty-four', TweenMax.from( $('#ninteen-fifty-four'), 0.5, {css:{ left:-300, opacity:0}, delay:2.5, ease:Elastic.easeOut}), 0, -100);
	controller.addTween('#second-edition-car', TweenMax.from( $('#second-edition-car'), 0.5, {css:{ left:-300, opacity:0}, delay:3, ease:Elastic.easeOut}), 0, 0);
	
	controller.addTween('#ninteen-fifty-five', TweenMax.from( $('#ninteen-fifty-five'), 0.5, {css:{ left:300, opacity:0}, delay:.5, ease:Elastic.easeOut}), 0, -120);
	controller.addTween('#small-block-photo', TweenMax.from( $('#small-block-photo'), 0.5, {css:{ left:300, opacity:0}, delay:1, ease:Elastic.easeOut}), 0, -50);
	controller.addTween('#small-block-heading', TweenMax.from( $('#small-block-heading'), 0.5, {css:{ left:300, opacity:0}, delay:2, ease:Elastic.easeOut}), 0, -180);
	
	controller.addTween('#ninteen-fifty-six', TweenMax.from( $('#ninteen-fifty-six'), 1.25, {css:{ left:-300, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -80);
	controller.addTween('#car-of-ninteen-fifty-six', TweenMax.from( $('#car-of-ninteen-fifty-six'), 1.25, {css:{ left:-300, opacity:0}, delay:3.5, ease:Bounce.easeOut}), 0, -50);
	
	controller.addTween('#ninteen-fifty-six', TweenMax.from( $('#ninteen-fifty-seven'), 1.25, {css:{ left:300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, 300);
	controller.addTween('#ninteen-fifty-eight', TweenMax.from( $('#ninteen-fifty-eight'), 1.25, {css:{ left:300, opacity:0}, delay:0.5, ease:Bounce.easeOut}), 0, -100);
	
	controller.addTween('#ninteen-sixty-one', TweenMax.from( $('#ninteen-sixty-one'), 1.25, {css:{ left:300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -100);
	controller.addTween('#ninteen-sixty-one-car', TweenMax.from( $('#ninteen-sixty-one-car'), 1.25, {css:{ left:300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -100);
	controller.addTween('#ninteen-sixty-two', TweenMax.from( $('#ninteen-sixty-two'), 1.25, {css:{ right:300, opacity:0}, delay:2, ease:Expo.easeOut}), 0, -150);
	controller.addTween('#ninteen-sixty-two-car', TweenMax.from( $('#ninteen-sixty-two-car'), 1.25, {css:{ left:-300, opacity:0}, delay:2.5, ease:Expo.easeOut}), 0, 50);
		
	controller.addTween('#ninteen-sixty-four', TweenMax.from( $('#ninteen-sixty-four'), 1.25, {css:{ left:-300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -150);
	controller.addTween('#ninteen-sixty-four-car', TweenMax.from( $('#ninteen-sixty-four-car'), 1.25, {css:{ left:-300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -200);

	controller.addTween('#c2-generation-car', TweenMax.from( $('#c2-generation-car'), 1.25, {css:{ right:-300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -50);
	controller.addTween('#c2-generation-heading', TweenMax.from( $('#c2-generation-heading'), 1.25, {css:{ right:-300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -200);

	
	controller.addTween('#ninteen-sixty-five', TweenMax.from( $('#ninteen-sixty-five'), 11.25, {css:{ left:-400, opacity:0}, delay:0, ease:Elastic.easeOut}), 0, -100);
	controller.addTween('#big-block-photo', TweenMax.from( $('#big-block-photo'), 11.25, {css:{ left:-400, opacity:0}, delay:0.3, ease:Bounce.easeOut}), 0, -60);
	controller.addTween('#big-block-heading', TweenMax.from( $('#big-block-heading'), 11.25, {css:{ left:-400, opacity:0}, delay:0.8, ease:Bounce.easeOut}), 0, -220);
	
	controller.addTween('#ninteen-sixty-seven', TweenMax.from( $('#ninteen-sixty-seven'), 11.25, {css:{ left:500, opacity:0}, delay:2, ease:Elastic.easeOut}), 0, -100);
	controller.addTween('#ninteen-sixty-seven-car', TweenMax.from( $('#ninteen-sixty-seven-car'), 11.25, {css:{ left:500, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -60);
	
	controller.addTween('#c3-generation-car', TweenMax.from( $('#c3-generation-car'), 1.25, {css:{ right:-300, opacity:0}, delay:1, ease:Circ.easeOut}), 0, 50);
	controller.addTween('#c3-generation-heading', TweenMax.from( $('#c3-generation-heading'), 1.25, {css:{ right:-300, opacity:0}, ease:Circ.easeOut}), 0, -150);
	
	controller.addTween('#ninteen-seventy', TweenMax.from( $('#ninteen-seventy'), 1.25, {css:{ left:-300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -150);
	controller.addTween('#lt1-photo', TweenMax.from( $('#lt1-photo'), 1.25, {css:{ left:-300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -100);
	
	controller.addTween('#lt1-heading', TweenMax.from( $('#lt1-heading'), 1.25, {css:{ left:-300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -200);
	
	controller.addTween('#ninteen-seventy-one', TweenMax.from( $('#ninteen-seventy-one'), 1.25, {css:{ left:400, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, 0);
	controller.addTween('#ninteen-seventy-one-form-photo', TweenMax.from( $('#ninteen-seventy-one-form-photo'), 1.25, {css:{ left:400, opacity:0}, delay:.8, ease:Bounce.easeOut}), 0, 0);
	controller.addTween('#ninteen-seventy-six', TweenMax.from( $('#ninteen-seventy-six'), 1.25, {css:{ left:-400, opacity:0}, delay:1.2, ease:Bounce.easeOut}), 0, -120);
	controller.addTween('#ninteen-seventy-six-car', TweenMax.from( $('#ninteen-seventy-six-car'), 1.25, {css:{ left:-400, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -80);
	
	controller.addTween('#ninteen-seventy-seven', TweenMax.from( $('#ninteen-seventy-seven'), 1.25, {css:{ left:400, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -100);
	controller.addTween('#ninteen-seventy-seven-photo', TweenMax.from( $('#ninteen-seventy-seven-photo'), 1.25, {css:{ left:400, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -80);
	
	controller.addTween('#c4-generation-heading', TweenMax.from( $('#c4-generation-heading'), 1.25, {css:{ right:-450, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -250);
	controller.addTween('#c4-generation-car', TweenMax.from( $('#c4-generation-car'), 1.25, {css:{ right:-400, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, 0);
	
	controller.addTween('#ninteen-eighty-four', TweenMax.from( $('#ninteen-eighty-four'), 1.25, {css:{ left:-400, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -130);
	controller.addTween('#ninteen-eighty-four-car', TweenMax.from( $('#ninteen-eighty-four-car'), 1.25, {css:{ left:-400, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -50);
	
	
	
	
	controller.addTween('#ninteen-eighty-five', TweenMax.from( $('#ninteen-eighty-five'), 1.25, {css:{ left:-400, opacity:0}, delay:0, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#robust', TweenMax.from( $('#robust'),1, {css:{ left:-400, opacity:0}, delay:1, ease:Circ.easeOut}), 0, -10);
	controller.addTween('#robust', TweenMax.from( $('#robust-heading'), 1, {css:{ left:-400, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -10);
	
	controller.addTween('#ninteen-eighty-six', TweenMax.from( $('#ninteen-eighty-six'), 0.5, {css:{ left:400, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#ninteen-eighty-six-car', TweenMax.from( $('#ninteen-eighty-six-car'), 1, {css:{ left:400, opacity:0}, delay:2.5, ease:Circ.easeOut}), 0, -90);
	
	controller.addTween('#ninteen-eighty-seven', TweenMax.from( $('#ninteen-eighty-seven'), 0.5, {css:{ left:300, opacity:0}, delay:0.5, ease:Circ.easeOut}), 0, -140);
	controller.addTween('#ninteen-eighty-seven-car', TweenMax.from( $('#ninteen-eighty-seven-car'), 1, {css:{ left:300, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -120);
	
	controller.addTween('#ninteen-eighty-eight', TweenMax.from( $('#ninteen-eighty-eight'), 0.5, {css:{ left:-400, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -250);
	controller.addTween('#ninteen-eighty-eight-car', TweenMax.from( $('#ninteen-eighty-eight-car'), 0.5, {css:{ right:-400, opacity:0}, delay:2.5, ease:Circ.easeOut}), 0, -200);
	
	controller.addTween('#ninteen-eighty-nine', TweenMax.from( $('#ninteen-eighty-nine'), 0.5, {css:{ left:400, opacity:0}, delay:1, ease:Circ.easeOut}), 0, -160);
	controller.addTween('#six-speed-manual', TweenMax.from( $('#six-speed-manual'), 0.5, {css:{ left:400, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -100);
	controller.addTween('#epa-rating-low', TweenMax.from( $('#epa-rating-low'), 0.5, {css:{ left:400, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -90);
	
	controller.addTween('#ninteen-ninety', TweenMax.from( $('#ninteen-ninety'), 0.5, {css:{ left:-400, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#ninteen-ninety-car', TweenMax.from( $('#ninteen-ninety-car'), 0.5, {css:{ left:-400, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -90);
	
	controller.addTween('#ninteen-ninety-one', TweenMax.from( $('#ninteen-ninety-one'), 0.5, {css:{ left:300, opacity:0}, delay:2.5, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#dollar-green-big-box1', TweenMax.from( $('#dollar-green-big-box1'), 0.5, {css:{ left:300, opacity:0}, delay:2.7, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#dollar-green-big-box2', TweenMax.from( $('#dollar-green-big-box2'), 0.5, {css:{ left:300, opacity:0}, delay:3, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#dollar-green-big-box3', TweenMax.from( $('#dollar-green-big-box3'), 0.5, {css:{ left:300, opacity:0}, delay:3.2, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#dollar-green-small-box', TweenMax.from( $('#dollar-green-small-box'), 0.5, {css:{ left:300, opacity:0}, delay:3.4, ease:Circ.easeOut}), 0, -150);
	
	
	controller.addTween('#ninteen-ninety-three', TweenMax.from( $('#ninteen-ninety-three'), 0.5, {css:{ left:300, opacity:0}, delay:0, ease:Circ.easeOut}), 0, -100);
	controller.addTween('#fortieth-anniversary', TweenMax.from( $('#fortieth-anniversary'), 0.5, {css:{ left:300, opacity:0}, delay:1, ease:Circ.easeOut}), 0, 0);
	controller.addTween('#ninteen-ninety-three-car', TweenMax.from( $('#ninteen-ninety-three-car'), 0.5, {css:{ right:-300, opacity:0}, delay:0.5, ease:Circ.easeOut}), 0, -100);
	
	controller.addTween('#ninteen-ninety-four', TweenMax.from( $('#ninteen-ninety-four'), 0.5, {css:{ left:-300, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#ninteen-ninety-four-car', TweenMax.from( $('#ninteen-ninety-four-car'), 0.5, {css:{ left:-300, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -50);
	
	
	
	controller.addTween('#c5-generation-car', TweenMax.from( $('#c5-generation-car'), 0.5, {css:{ right:-300, opacity:0}, delay:1, ease:Circ.easeOut}), 0, -100);
	controller.addTween('#c5-generation-heading', TweenMax.from( $('#c5-generation-heading'), 0.5, {css:{ right:-300, opacity:0}, delay:0.5, ease:Circ.easeOut}), 0, -250);
	controller.addTween('#ninteen-ninety-seven', TweenMax.from( $('#ninteen-ninety-seven'), 0.5, {css:{ left:-300, opacity:0}, delay:0, ease:Circ.easeOut}), 0, -100);
	
	controller.addTween('#ninteen-ninety-eight', TweenMax.from( $('#ninteen-ninety-eight'), 0.5, {css:{ left:-300, opacity:0}, delay:0, ease:Circ.easeOut}), 0, -100);
	controller.addTween('#ninteen-ninety-eight-car', TweenMax.from( $('#ninteen-ninety-eight-car'), 0.5, {css:{ right:-300, opacity:0}, delay:1, ease:Circ.easeOut}), 0, -150);
	controller.addTween('#car-of-the-year', TweenMax.from( $('#car-of-the-year'), 0.5, {css:{ left:-300, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -130);
	
	controller.addTween('#ninteen-ninety-nine', TweenMax.from( $('#ninteen-ninety-nine'), 1.25, {css:{ left:-300, opacity:0}, delay:0, ease:Circ.easeOut}), 0, -120);
	controller.addTween('#ninteen-ninety-nine-car', TweenMax.from( $('#ninteen-ninety-nine-car'), 1.25, {css:{ left:-300, opacity:0}, delay:1, ease:Circ.easeOut}), 0, -60);
	controller.addTween('#two-thousand', TweenMax.from( $('#two-thousand'), 1.25, {css:{ left:300, opacity:0}, delay:1.5, ease:Circ.easeOut}), 0, -180);
	controller.addTween('#two-thousand-car-colors', TweenMax.from( $('#two-thousand-car-colors'), 1.25, {css:{ left:300, opacity:0}, delay:2, ease:Circ.easeOut}), 0, -100);
	controller.addTween('#two-thousand-car-wheels', TweenMax.from( $('#two-thousand-car-wheels'), 1.25, {css:{ left:300, opacity:0}, delay:2.5, ease:Circ.easeOut}), 0, -100);
	
	controller.addTween('#two-thousand-one', TweenMax.from( $('#two-thousand-one'), 1.25, {css:{ left:300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, 0);
	controller.addTween('#two-thousand-two-car', TweenMax.from( $('#two-thousand-two-car'), 1.25, {css:{ right:300, opacity:0}, delay:3, ease:Bounce.easeOut}), 0, 0);
	controller.addTween('#two-thousand-two', TweenMax.from( $('#two-thousand-two'), 1.25, {css:{ left:300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -200);
	
	controller.addTween('#two-thousand-three', TweenMax.from( $('#two-thousand-three'), 1.25, {css:{ left:300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -130);
	controller.addTween('#two-thousand-three-car', TweenMax.from( $('#two-thousand-three-car'), 1.25, {css:{ left:-300, opacity:0}, delay:0.5, ease:Bounce.easeOut}), 0, -80);
	controller.addTween('#fiftieth-anniversary', TweenMax.from( $('#fiftieth-anniversary'), 1.25, {css:{ left:300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -100);
	
	controller.addTween('#two-thousand-four', TweenMax.from( $('#two-thousand-four'), 1.25, {css:{ left:300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -150);
	controller.addTween('#two-thousand-four-car', TweenMax.from( $('#two-thousand-four-car'), 1.25, {css:{ left:-300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -150);
	controller.addTween('#the-24-hours-of-le-mans', TweenMax.from( $('#the-24-hours-of-le-mans'), 1.25, {css:{ left:-300, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -300);
	
	controller.addTween('#c6-generation-car', TweenMax.from( $('#c6-generation-car'), 1.25, {css:{ right:-400, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -50);
	controller.addTween('#c6-generation-heading', TweenMax.from( $('#c6-generation-heading'), 1.25, {css:{ right:-400, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -200);
	
	controller.addTween('#two-thousand-seven', TweenMax.from( $('#two-thousand-seven'), 1.25, {css:{ left:-300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -180);
	controller.addTween('#two-thousand-seven-seats', TweenMax.from( $('#two-thousand-seven-seats'), 1.25, {css:{ left:-300, opacity:0}, delay:.5, ease:Bounce.easeOut}), 0, -100);
	
	controller.addTween('#two-thousand-eight', TweenMax.from( $('#two-thousand-eight'), 1.25, {css:{ left:-300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -300);
	
	controller.addTween('#two-thousand-nine', TweenMax.from( $('#two-thousand-nine'), 1.25, {css:{ left:-300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -250);
	controller.addTween('#two-thousand-nine-car', TweenMax.from( $('#two-thousand-nine-car'), 1.25, {css:{ left:-300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -180);
	
	controller.addTween('#two-thousand-ten', TweenMax.from( $('#two-thousand-ten'), 1.25, {css:{ left:300, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -250);
	controller.addTween('#two-thousand-ten-car', TweenMax.from( $('#two-thousand-ten-car'), 1.25, {css:{ right:-300, opacity:0}, delay:3, ease:Bounce.easeOut}), 0, -180);
	
	controller.addTween('#two-thousand-eleven', TweenMax.from( $('#two-thousand-eleven'), 1.25, {css:{ left:300, opacity:0}, delay:0, ease:Bounce.easeOut}), 0, -100);
	controller.addTween('#corvette-engine-build-experience', TweenMax.from( $('#corvette-engine-build-experience'), 1.25, {css:{ left:-300, opacity:0}, delay:0.5, ease:Bounce.easeOut}), 0, -80);
	
	controller.addTween('#carbon-limited-edition-car', TweenMax.from( $('#carbon-limited-edition-car'), 1.25, {css:{ right:-300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -250);
	controller.addTween('#two-thousand-twelwe', TweenMax.from( $('#two-thousand-twelwe'), 1.25, {css:{ left:-300, opacity:0}, delay:.5, ease:Bounce.easeOut}), 0, -100);
	controller.addTween('#two-thousand-twelwe-car', TweenMax.from( $('#two-thousand-twelwe-car'), 1.25, {css:{ right:-300, opacity:0}, delay:1, ease:Bounce.easeOut}), 0, -80);
	
	controller.addTween('#two-thousand-thirteen', TweenMax.from( $('#two-thousand-thirteen'), 1.25, {css:{ left:300, opacity:0}, delay:1.5, ease:Bounce.easeOut}), 0, -180);
	controller.addTween('#two-thousand-thirteen-car', TweenMax.from( $('#two-thousand-thirteen-car'), 1.25, {css:{ left:-300, opacity:0}, delay:2, ease:Bounce.easeOut}), 0, -150);
	controller.addTween('#sixtieth-anniversary', TweenMax.from( $('#sixtieth-anniversary'), 1.25, {css:{ right:-300, opacity:0}, delay:2.5, ease:Bounce.easeOut}), 0, -150);
	
	
	controller.addTween('#c7-generation-car', TweenMax.from( $('#c7-generation-car'), 1.25, {css:{ right:-300, opacity:0}, delay:1, ease:Circ.easeIn}), 0, -350);
	controller.addTween('#c7-generation-heading', TweenMax.from( $('#c7-generation-heading'), 1.25, {css:{ right:-300, opacity:0}, delay:0, ease:Circ.easeIn}), 0, -520);
	
	
	
	
	
})