// JavaScript Document
function clickTab(whichTab)  {
	var clickedLi = whichTab.parentNode;
	//去除之前的current。希望扩充getElementsByClass
	var liElements = clickedLi.parentNode.getElementsByTagName("li");
	for (var i=0; i<liElements.length; i++) {
		var preClassName = liElements[i].className;
		if(preClassName.indexOf("current")>-1) {
			liElements[i].className = preClassName.replace("current", "");
		}
	}
	clickedLi.className=clickedLi.className.concat(" current");
}


function addEventOnTab() {
 	var tab=document.getElementById("menu");
	var ulElement=tab.getElementsByTagName("ul")[0];
	var liElements=ulElement.getElementsByTagName("li");
	for (var i=0; i<liElements.length; i++) {
		var hrefElement=liElements[i].getElementsByTagName("a")[0];
		hrefElement.onclick=function() {clickTab(this);};
	}
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addEventOnTab);