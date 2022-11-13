function moveElement(elementID,final_x,final_y,interval) {
	if (!document.getElementById) return false;
	if (!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		var dist = Math.ceil((final_x - xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil((xpos - final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil((final_y - ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil((ypos - final_y)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}

function ontouch(el, callback){

	var touchsurface = el,
		dir,
		swipeType,
		startX,
		startY,
		distX,
		distY,
		threshold = 150, //required min distance traveled to be considered swipe
		restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		allowedTime = 500, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handletouch = callback || function(evt, dir, phase, swipetype, distance){}

	touchsurface.addEventListener('touchstart', function(e){
		var touchobj = e.changedTouches[0]
		dir = 'none'
		swipeType = 'none'
		dist = 0
		startX = touchobj.pageX
		startY = touchobj.pageY
		startTime = new Date().getTime() // record time when finger first makes contact with surface
		handletouch(e, 'none', 'start', swipeType, 0) // fire callback function with params dir="none", phase="start", swipetype="none" etc
		e.preventDefault()

	}, false)

	touchsurface.addEventListener('touchmove', function(e){
		var touchobj = e.changedTouches[0]
		distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
		distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
		if (Math.abs(distX) > Math.abs(distY)){ // if distance traveled horizontally is greater than vertically, consider this a horizontal movement
			dir = (distX < 0)? 'left' : 'right'
			handletouch(e, dir, 'move', swipeType, distX) // fire callback function with params dir="left|right", phase="move", swipetype="none" etc
		}
		else{ // else consider this a vertical movement
			dir = (distY < 0)? 'up' : 'down'
			handletouch(e, dir, 'move', swipeType, distY) // fire callback function with params dir="up|down", phase="move", swipetype="none" etc
		}
		e.preventDefault() // prevent scrolling when inside DIV
	}, false)

	touchsurface.addEventListener('touchend', function(e){
		var touchobj = e.changedTouches[0]
		elapsedTime = new Date().getTime() - startTime // get time elapsed
		if (elapsedTime <= allowedTime){ // first condition for awipe met
			if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
				swipeType = dir // set swipeType to either "left" or "right"
			}
			else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
				swipeType = dir // set swipeType to either "top" or "down"
			}
		}
		// Fire callback function with params dir="left|right|up|down", phase="end", swipetype=dir etc:
		handletouch(e, dir, 'end', swipeType, (dir =='left' || dir =='right')? distX : distY)
		e.preventDefault()
	}, false)
}
//初始化左边菜单
function initNav() {
	$('#nav ul li').on('click', function(e) {
		$('#nav ul li.active').removeClass('active');
		$(this).addClass('active');
		var target = $(this).find('a').attr('href');
		$('#content .content.show').removeClass('show');
		$(target).addClass('show');
	});
}

function initItemList() {
	$('.itemList .item .description').forEach(function(ele, index) {
		if ($(ele).overflown()) {
			$(ele).addClass('text-over');
		}
	});
}

function initSlider() {
	var cWidth = $('#slider').width();
	var itemLength = $('#slider ul li').length;
	$('#slider ul li').width(cWidth);
	$('#slider ul').width(itemLength*cWidth);
	$('#slider .slider-nav a').on('click', function() {
		$('#slider .slider-nav a.active').removeClass('active');
		$(this).addClass('active');
		var index = $(this).attr('index');
		var dest = cWidth*index*-1;
		moveElement('movePoint', dest,0,10);
		return false;
	});

	//touch device
	var el = document.getElementById('slider');
	var gallerywidth = el.offsetWidth;
	var ul = el.getElementsByTagName('ul')[0];
	var curindex = 0, ulLeft = 0;

	ontouch(el, function(evt, dir, phase, swipetype, distance){
		if (phase == 'start'){ // on touchstart
			ulLeft = parseInt(ul.style.left) || 0;
		}
		else if (phase == 'move' && (dir =='left' || dir =='right')){ //  on touchmove and if moving left or right
			var totaldist = distance + ulLeft // calculate new left position of UL based on movement of finger
			var destinate = Math.min(totaldist, (curindex+1) * gallerywidth);
			if (destinate<0&&destinate>(itemLength-1)*cWidth*-1) {
				ul.style.left = destinate + 'px' // set gallery to new left position
			}
		}
		else if (phase == 'end') { // on touchend
			if (swipetype == 'left' || swipetype == 'right'){ // if a successful left or right swipe is made
				curindex = (swipetype == 'left')? Math.min(curindex+1, itemLength-1) : Math.max(curindex-1, 0) // get new index of image to show
			}
			ul.style.left = -curindex * gallerywidth + 'px'; // move UL to show the new image
			$('#slider .slider-nav a.active').removeClass('active');
			$('#slider .slider-nav a:nth-child('+(curindex+1)+')').addClass('active');
		}
	}) // end ontouch
}

initNav();
initItemList();
initSlider();