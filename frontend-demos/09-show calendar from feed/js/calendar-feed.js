(function($) {

$.fn.calendarFeed = function(options) {
	var jQueryThis = this;
	var o = $.extend({}, $.fn.calendarFeed.defaults, options || {});
	var url = o.url;
	if( !url ) {
		console.log("Url is must");
		return;
	}
	
	var eventArr = {};
	var eventArrSorted = {};
	
	if ($.browser.msie && window.XDomainRequest) {
		var xdr = new XDomainRequest();
		xdr.open("get", url);
		
		xdr.onload = function () {
			ajaxCallBack(xdr.responseText)
		}
		xdr.onerror = function () { };
		xdr.ontimeout = function () { };
		xdr.onprogress = function () { };
		
		setTimeout(function() {xdr.send();}, 0)
		
	} else {
		$.ajax({
			url: url,
			type: "GET",
			complete: function(xhr, ts) {
				if (ts == "success") {
					ajaxCallBack(xhr.responseText)
				}
			}
		});
	}
	
	function ajaxCallBack(data) {
		var jsonData = jQuery.parseJSON(data);
		parseJSON(jsonData);
		sortEvent();
		jQueryThis.html(parseEventArrToHTML(eventArrSorted));
		adjustWidth();
	}
	
	return jQueryThis;//chainable
	
	function parseJSON(data) {
		$.each(data.data, function(i, item) {
			var event = {};
			event.date = jsonToDate(item.what.whens[0].start_time);
			event.name = item.what.name;
			event.description = item.what.summary;
			event.pageUrl = item.what.existing_web_address_url;
			if (eventArr[item.what.address.state]) {
				eventArr[item.what.address.state].push(event);
			} else {
				eventArr[item.what.address.state] = [event];
			}
		})
	}
	
	
	function parseEventArrToHTML(eventArr) {
		var html = '';
		html += '<div id="calendars">';
		for (var key in eventArr) {
			eventArr[key].sort(compareEvent);
			html += '<div class="event">';
			html += '<h2>' + key + '</h2>';
			
			var rowNum = Math.ceil(eventArr[key].length/2);
			var isEven = eventArr[key].length % 2 == 0 ? true : false;
			
			html += '<table>';
			for (var i=0; i<rowNum-1; i++) {
				var event1 = eventArr[key][i*2];
				var event2 = eventArr[key][i*2+1];
				
				html += '<tr>';
				html += '<td>';
				html += '<div class="date">';
				html += '<div class="month"><a href="' + event1.pageUrl + '">' + parseMonth(event1.date) + '</a></div>';
				html += '<div class="day"><a href="' + event1.pageUrl + '">' + event1.date.getDate() + '</a></div>';
				html += '</div>';
				html += '<div class="content">';
				html += '<h3><a href="' + event1.pageUrl + '">' + event1.name + '</a></h3>';
				html += '<div class="description">' + event1.description + '</div>';
				html += '</div>';
				html += '</td>';
				html += '<td>';
				html += '<div class="date">';
				html += '<div class="month"><a href="' + event2.pageUrl + '">' + parseMonth(event2.date) + '</a></div>';
				html += '<div class="day"><a href="' + event2.pageUrl + '">' + event2.date.getDate() + '</a></div>';
				html += '</div>';
				html += '<div class="content">';
				html += '<h3><a href="' + event2.pageUrl + '">'+event2.name+'</a></h3>';
				html += '<div class="description">'+event2.description+'</div>';
				html += '</div>';
				html += '</td>';
				html += '</tr>';
			}
			
			html += '<tr>';
			html += '<td>';
			html += '<div class="date">';
			html += '<div class="month"><a href="' + eventArr[key][(rowNum-1)*2].pageUrl + '">' + parseMonth(eventArr[key][(rowNum-1)*2].date) + '</a></div>';
			html += '<div class="day"><a href="' + eventArr[key][(rowNum-1)*2].pageUrl + '">' + eventArr[key][(rowNum-1)*2].date.getDate() + '</a></div>';
			html += '</div>';
			html += '<div class="content">';
			html += '<h3><a href="' + eventArr[key][(rowNum-1)*2].pageUrl + '">' + eventArr[key][(rowNum-1)*2].name+'</a></h3>';
			html += '<div class="description">'+eventArr[key][(rowNum-1)*2].description+'</div>';
			html += '</div>';
			html += '</td>';
			
			if (isEven) {
				html += '<td>';
				html += '<div class="date">';
				html += '<div class="month"><a href="' + eventArr[key][(rowNum-1)*2+1].pageUrl + '">' + parseMonth(eventArr[key][(rowNum-1)*2+1].date) + '</a></div>';
				html += '<div class="day"><a href="' + eventArr[key][(rowNum-1)*2+1].pageUrl + '">' + eventArr[key][(rowNum-1)*2+1].date.getDate() + '</a></div>';
				html += '</div>';
				html += '<div class="content">';
				html += '<h3><a href="' + eventArr[key][(rowNum-1)*2+1].pageUrl + '">' + eventArr[key][(rowNum-1)*2+1].name + '</a></h3>';
				html += '<div class="description">' + eventArr[key][(rowNum-1)*2+1].description + '</div>';
				html += '</div>';
				html += '</td>';
			} else {
				html += '<td></td>';
			}
			html += '</tr>';
			html += '</table>';
			html += '</div>';
		}
		html += '</div>';
		return html;
	}
	
	function jsonToDate(jsonStr) {
		var tempArr1 = jsonStr.split("T");
		var date = tempArr1[0];
		var time = tempArr1[1].replace("Z", "");
		var tempArr2 = date.split("-");
		var tempArr3 = time.split(":");
		var year = tempArr2[0];
		var month = tempArr2[1];
		var day = tempArr2[2];
		var hour = tempArr3[0];
		var min = tempArr3[1];
		var second = tempArr3[2];
		var date = new Date();
		date.setFullYear(year,month-1,day);
		date.setHours(hour);
		date.setMinutes(min);
		date.setSeconds(second);
		
		return date;
	}
	
	
	function parseMonth(date) {
		var monthArr = {
			1 : 'Jan',
			2 : 'Feb',
			3 : 'Mar',
			4 : 'Apr',
			5 : 'May',
			6 : 'Jun',
			7 : 'Jul',
			8 : 'Aug',
			9 : 'Sep',
			10 : 'Oct',
			11 : 'Nov',
			12 : 'Dec'
		};
		return monthArr[date.getMonth()+1];
	}
	
	function adjustWidth() {
		var cWidth = $("#calendars").width();
		var dateWidth = $("#calendars .event table td .date").width();
		$("#calendars .event table td .content").width(cWidth/2 - dateWidth - 5 - 10);
	}
	
	function sortEvent() {
		var keyArr = new Array();
		for (var key in eventArr) {
			keyArr.push(key)
		}
		keyArr.sort();
		for (var i=0; i<keyArr.length; i++) {
			eventArrSorted[keyArr[i]] = eventArr[keyArr[i]];
		}
	}
	
	function compareEvent(event1, event2) {
		var date1 = event1.date;
		var date2 = event2.date;
		return date1 - date2;
	}
	
	
}



$.fn.calendarFeed.defaults = {
	
}


})(jQuery);























