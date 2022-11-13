(function($) {


$.fn.feed = function(options) {
	
	var o = $.extend({}, $.fn.feed.defaults, options || {});
	
	var urls = o.urls;
	if( !urls || urls.length<1 ) {
		console.log("Url is must");
		return;
	}
	
	google.setOnLoadCallback(initialize);
	
	var jQueryThis = this;
	
	return jQueryThis;//chainable
	
	function initialize() {
	
		var imagesArr = new Array();
		var completeLoadNum = 0;
		
		
		for ( var i = 0; i < urls.length; i++ ) {
			
			var url = urls[i];
			var images = null;
			
			if ( url.indexOf("facebook") > 0 ) {
			
				url = url + "&callback=?";
				$.ajax(
					{
						url: url,
						type: "GET",
						async: false,
						contentType: "application/json",
						dataType: "jsonp",
						success: function(json) {
							images = parseJSONFacebook(json);
							imagesArr = imagesArr.concat(images);
							completeLoadNum++;
						},
						error: function(e) {
							console.log(e.message);
							completeLoadNum++;
						}
					}
				);
				
			} else if ( url.indexOf("foursquare") > 0 ) {
			
				url = url + "&callback=?";
				$.ajax(
					{
						url: url,
						type: "GET",
						async: false,
						contentType: "application/json",
						dataType: "jsonp",
						success: function(json) {
							images = parseJSONFoursquare(json);
							imagesArr = imagesArr.concat(images);
							completeLoadNum++;
						},
						error: function(e) {
							console.log(e.message);
							completeLoadNum++;
						}
					}
				);
				
			} else if ( url.indexOf("twitter") > 0 ) {
			
				url = url + "&callback=?";
				
				try {
				
					$.ajax(
						{
							url: url,
							type: "GET",
							async: false,
							contentType: "application/json",
							dataType: "json",
							success: function(json) {
								images = parseJSONTwitter(json);
								imagesArr = imagesArr.concat(images);
							},
							error: function(e) {
								console.log(e.message);
							}
						}
					);
					
				} catch (ex) {
					console.log(ex);
				} finally {
					completeLoadNum++;
				}
			}
			else {
				
				var feed = new google.feeds.Feed(url);
				feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
				feed.setNumEntries(o.entriesNum);
				feed.load(function(result) {
					
					if ( !result.error ) {
					
						var feedType = "";
						
						var $xml = $(result.xmlDocument);
						var flickrHref = $xml.find('feed > link[rel="self"]').attr("href");
						var channelLink = $xml.find('channel > link').text();
						
						if (flickrHref) {
							
							if ( flickrHref.indexOf("flickr") > 0 ) {
								images = parseXmlFlickr(result.xmlDocument);
							}
						} else if (channelLink) {
							
							if ( channelLink.indexOf("ink361") > 0 ) {
								images = parseXmlInstagram(result.xmlDocument);
							} else if ( channelLink.indexOf("vimeo") > 0 ) {
								images = parseXmlVimeo(result.xmlDocument);
							} else if ( channelLink.indexOf("youtube") > 0 ) {
								images = parseXmlYoutube(result.xmlDocument);
							}
						}
						imagesArr = imagesArr.concat(images);
					} else {
						console.log(result.error.code + ' ' + result.error.message);
					}
					completeLoadNum++;
					
				});
			}
		}
		
		
		var checkComplete = setInterval(function() {
			if ( completeLoadNum == urls.length ) {
				imagesArr = pickLastestImages(imagesArr, o.entriesNum);
				var itemsHtml = parseImageObjectToHtml(imagesArr);
				jQueryThis.html(itemsHtml);
				if (o.onComplete) {
					o.onComplete();
				}
				clearInterval(checkComplete);
			}
		}, 100)
		
	}
	
	
	
	function parseXmlFlickr(xml) {
		
		var $xml = $(xml);
		var entries = $xml.find("entry");
		var imageArr = new Array(entries.length);
		for (var i = 0; i < entries.length; i++) {
			var $entry = $(entries[i]);
			var title = $entry.find("title").text();
			var content = $entry.find("content").text();
			var imageUrl = jQuery($entry.find('link[rel="enclosure"]')).attr("href");
			var alternateUrl = jQuery($entry.find('link[rel="alternate"]')).attr("href");
			var $thumbnail = jQuery(content).find("img");
			var imgDesc = jQuery((jQuery(content).get(4))).html();
			var thumbnailUrl = $thumbnail.attr("src");
			var thumbnailWidth = $thumbnail.attr("width");
			var thumbnailHeight = $thumbnail.attr("height");
			var updateDate = strToDate2($entry.find("updated").text());
			
			var Image = {};
			
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			Image.title = title;
			Image.alternateUrl = alternateUrl;
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = imgDesc;
			Image.date = updateDate;
			Image.crop = howToCrop;
			
			Image.video = false;
			
			imageArr.push(Image);
		}
		return imageArr;
	}
	
	function parseXmlInstagram(xml) {
	
		var imageArr = new Array();
		var $xml = $(xml);
		var items = $xml.find("item");
		
		for (var i = 0; i < items.length; i++) {
			var $item = $(items[i]);
			var title = $item.find("title").text();
			
			var content = $item.find("description").text();
			var $thumbnail = jQuery(content).find("img");
			var thumbnailUrl = $thumbnail.attr("src");
			var thumbnailWidth = $thumbnail.attr("width");
			var thumbnailHeight = $thumbnail.attr("height");
			
			var imageUrl = thumbnailUrl;
			var alternateUrl = $item.find('link').text();
			
			var imgDesc = "";
			
			var updateDate = new Date($item.find("pubDate").text())
			
			var Image = {};
			
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			Image.title = title;
			Image.alternateUrl = alternateUrl;
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = imgDesc;
			Image.date = updateDate;
			Image.crop = howToCrop;
			
			Image.video = false;
			
			imageArr.push(Image);
		}
		return imageArr;
	}
	
	function parseXmlVimeo(xml) {
		
		var imageArr = new Array();
		var $xml = $(xml);
		var items = $xml.find("item");
		
		for (var i = 0; i < items.length; i++) {
			var $item = $(items[i]);
			var title = $item.find("title").text();
			var content = $item.find("description").text();
			
			var $thumbnail = $item.find("[nodeName='media:content'] [nodeName='media:thumbnail']");
			var thumbnailUrl = $thumbnail.attr("url");
			var thumbnailWidth = $thumbnail.attr("width");
			var thumbnailHeight = $thumbnail.attr("height");
			var imageUrl = $item.find("[nodeName='media:content'] [nodeName='media:player']").attr("url") + "&autoplay=1";
			var alternateUrl = "";
			
			var imgDesc = "";
			
			var updateDate = new Date($item.find("pubDate").text())
			
			var Image = {};
			
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			Image.title = title;
			Image.alternateUrl = alternateUrl;
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = imgDesc;
			Image.date = updateDate;
			Image.crop = howToCrop;
			
			Image.video = true;
			
			imageArr.push(Image);
		}
		return imageArr;
	}
	
	function parseXmlYoutube(xml) {
		
		var imageArr = new Array();
		var $xml = $(xml);
		var items = $xml.find("item");
		
		for (var i = 0; i < items.length; i++) {
			var $item = $(items[i]);
			var title = $item.find("title").text();
			var content = $item.find("description").text();
			
			var $thumbnail = jQuery(content).find("a > img");
			var thumbnailUrl = $thumbnail.attr("src");
			var thumbnailWidth = $thumbnail.attr("width");
			var thumbnailHeight = $thumbnail.attr("height");
			
			
			var imageUrl = $item.find("link").text();
			imageUrl = 'http://www.youtube.com/embed/'+getUrlParam(imageUrl,'v')+'?autoplay=1';
			
			var alternateUrl = "";
			
			var imgDesc = "";
			
			var updateDate = new Date($item.find("pubDate").text())
			
			var Image = {};
			
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			Image.title = title;
			Image.alternateUrl = alternateUrl;
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = imgDesc;
			Image.date = updateDate;
			Image.crop = howToCrop;
			Image.video = true;
			imageArr.push(Image);
		}
		return imageArr;
	}
	
	function parseJSONFacebook(data) {
		var imageArr = new Array();
		$.each(data.photos.data, function(i, item) {
			var images = item.images;
			var j = images.length;
			for (; j > 0; j--) {
				var image = images[j-1];
				if (image.width > o.width*2 && image.height > o.height*2) {
					break;
				}
			}
			if ( j==0 ) {
				j = images.length;
			}
			var thumbnailUrl = images[j-1].source;
			var thumbnailWidth = images[j-1].width;
			var thumbnailHeight = images[j-1].height;
			
			var imageUrl = images[0].source;
			
			var updateDate = strToDate1(item.updated_time);
			
			var title = item.from.name;
			var alternateUrl = item.link;
			var imgDesc = item.name;
			var Image = {};
			
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			
			Image.title = title;
			Image.alternateUrl = alternateUrl;
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = imgDesc;
			Image.date = updateDate;
			Image.crop = howToCrop;
			Image.video = false;
			imageArr.push(Image);
		})
		return imageArr;
	}
	
	function parseJSONFoursquare(data) {
		var imageArr = new Array();
		
		$.each(data.response.photos.items, function(i, item) {
			
			var thumbnailUrl = item.prefix+"100x100"+item.suffix;
			var thumbnailWidth = 100;
			var thumbnailHeight = 100;
			var imageUrl = item.prefix+"original"+item.suffix;
			
			var updateDate = parseCreatedAtFoursquare(item.createdAt);
			var formattedDate = parseMonth(updateDate.getMonth()) + " " + updateDate.getDate() + ", " + updateDate.getFullYear();
			var userLink = "https://foursquare.com/user/"+item.user.id;
			var photoLink = "https://foursquare.com/view_photo?id="+item.id;
			var userName = "";
			if ( item.user.firstName ) {
				userName = userName + item.user.firstName;
			} else if ( item.user.lastName ) {
				userName = userName + item.user.lastName;
			}
			var Image = {};
			var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
			Image.url = imageUrl;
			Image.title = "";
			Image.alternateUrl = "";
			Image.thumbnailUrl = thumbnailUrl;
			Image.description = 'Added ' + formattedDate + ' to <a href="'+photoLink+'" target="_blank">Foursquare</a> by <a href="'+userLink+'" target="_blank">'+userName+'</a>';
			Image.date = updateDate;
			
			Image.crop = howToCrop;
			Image.video = false;
			imageArr.push(Image);
		});
		return imageArr;
	}
	
	function parseJSONTwitter(data) {
		var imageArr = new Array();
		
		$.each(data, function(i, item) {
			
			if (item.entities.media) {
			
				var media = item.entities.media;
				$.each(media, function(i2, item2) {
					var thumbnailUrl = item2.media_url+":thumb";
					var thumbnailWidth = 150;
					var thumbnailHeight = 150;
					var imageUrl = item2.media_url;
					var updateDate = new Date(item.created_at);// to-do need fix ie
					var Image = {};
					var howToCrop = cropImage(thumbnailWidth, thumbnailHeight);
					Image.url = imageUrl;
					Image.title = item.user.name;
					Image.alternateUrl = item2.expanded_url;
					Image.thumbnailUrl = thumbnailUrl;
					Image.description = item.text;
					Image.date = updateDate;
					Image.crop = howToCrop;
					Image.video = false;
					imageArr.push(Image);
				})
				
			}
		});
		return imageArr;
	}
	
	function parseImageObjectToHtml(images) {
		var itemsHtml = "<ul>";
		for ( var i = 0; i < images.length; i++) {
			itemsHtml += '<li>';
			var image = images[i];
			if (!image) {continue;}
			if ( image.video == true ) {
				if (image.crop) {
					if ( image.crop[0] == 1 ) {						
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a>';
						}
					} else if (image.crop[0] == 2) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a>';
						}
					}
				} else {
					if ( image.description && image.description != "" ) {
						itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a><p class="desc">'+image.description+'</p>';
					} else {
						itemsHtml += '<a href="'+image.url+'" rel="video" class="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a>';
					}
				}
			} else {
				if (image.crop) {
					if ( image.crop[0] == 1 ) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a>';
						}
					} else if (image.crop[0] == 2) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a>';
						}
					}
				} else {
					if ( image.description && image.description != "" ) {
						itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a><p class="desc">'+image.description+'</p>';
					} else {
						itemsHtml += '<a href="'+image.url+'" rel="gallery" class="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><span class="roll"></span><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a>';
					}
					
				}
			}
		}
		itemsHtml += '</ul>';
		return itemsHtml;
	}
	
	/*
		checking crop width or height,
		if width return 1, if heigh return 2, if no need crop return 0.
	*/
	function checkCrop(imageWidth, imageHeight) {
		var A_Container = o.width / o.height;
		var A_Image = imageWidth / imageHeight;
		if (A_Image < A_Container) { //crop height, scale image using width
			return 1;
		} else if (A_Image == A_Container) { // no crop
			return 0;
		} else { //crop width, scale image using height
			return 2;
		}
	}
	
	/*
	how to crop the images
	return an array. the first element is crop width or height, 1 width, 2 height.
	the second element is crop size. if no need crop, return null
	*/
	function cropImage(imageWidth, imageHeight) {
		var howToCrop = new Array(2);
		howToCrop[0] = checkCrop(imageWidth, imageHeight);
		if (howToCrop[0] == 1) {//crop height, set margin-top
			var acHeight = imageHeight * (o.width / imageWidth);
			howToCrop[1] = (acHeight - o.height) / 2;
		} else if (howToCrop[0] == 2) {
			var acWidth = imageWidth * (o.height / imageHeight);
			howToCrop[1] = (acWidth - o.width) / 2;
		} else {
			howToCrop = null;
		}
		return howToCrop;
	}
	
	/*
	pick latest images
	*/
	function pickLastestImages(images, num) {
		images = sortImages(images);
		return images.slice(0, num);
	}
	
	function sortImages(imageArr) {
		imageArr.sort(compareImages);
		return imageArr;
	}
	
	/*
		compare images by date
	*/
	function compareImages(image1, image2) {
		var date1 = image1.date;
		var date2 = image2.date;
		return date2 - date1;
	}
	
	function getUrlParam(url, name) {
		
		var query_string = url.split("?");
		
		if(query_string.length<=1) return "";
		var params = query_string[1].split("&");
		
		var i = 0;
		while (i < params.length) {
			
			var param_item = params[i].split("=");
			if (param_item[0] == name) {
				return param_item[1];
			}
			i++;
		}
		return "";
	}
	
	function parseCreatedAtFoursquare(createdAt) {
		var seconds = parseInt(createdAt);
		var milliseconds = seconds*1000;
		var myDate = new Date(milliseconds);
		return myDate;
	}
	
	function parseMonth(month) {
		var monthShorts = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		return monthShorts[month];
	}
	
	
	/* format 2013-06-06T06:21:52+0000 */
	function strToDate1(dateStr) {
		var tempArr1 = dateStr.split("T");
		var date = tempArr1[0];
		var time = tempArr1[1];
		
		var tempArr2 = date.split("-");
		var tempArr3 = time.split(":");
		var year = tempArr2[0];
		var month = tempArr2[1];
		var day = tempArr2[2];
		var hour = tempArr3[0];
		var min = tempArr3[1];
		
		var tempArr4 = tempArr3[2].split("+");
		var seconds = tempArr4[0];
		var milliseconds = tempArr4[1];
		
		var date = new Date();
		date.setFullYear(year,month-1,day);
		date.setHours(hour);
		date.setMinutes(min);
		date.setSeconds(seconds);
		date.setMilliseconds(milliseconds);
		return date;
	}
	
	/* format 2012-05-14T09:33:47Z */
	function strToDate2(dateStr) {
		var tempArr1 = dateStr.split("T");
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
	
}

$.fn.feed.defaults = {
	//type : 'flickr', //flickr, instagram, vimeo, youtube
	entriesNum : 5, //size of entries to load
	width: 100,
	height: 100,
	onComplete: null
}


/*
Image Object
*/
$.fn.feed.Image = {
	url: '',
	title: '',
	alternateUrl: '',
	thumbnailUrl: '',
	date: null,
	crop: null
}

})(jQuery);