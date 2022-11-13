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
		
		for ( var i = 0; i < urls.length; i++ ) {
			
			var url = urls[i];
			
			
			var feed = new google.feeds.Feed(url);
			feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
			feed.setNumEntries(o.entriesNum);
			feed.load(function(result) {
				
				if ( !result.error ) {
					
					var images = null;
					
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
					
					//if ( imagesArr.length >  ((images.length)*(urls.length-1)) ) {
						imagesArr = pickLastestImages(imagesArr, o.entriesNum);
						var itemsHtml = parseImageObjectToHtml(imagesArr);
						jQueryThis.html(itemsHtml);
						if (o.onComplete) {
							o.onComplete();
						}
					//}
					
				} else {
					console.log(result.error.message);
				}
			});
			
			
		}
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
			var updateDate = new Date($entry.find("updated").text())
			
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
			
			imageArr[i] = Image;
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
			
			imageArr[i] = Image;
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
			console.log($thumbnail.length);
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
			
			imageArr[i] = Image;
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
			
			imageArr[i] = Image;
		}
		return imageArr;
	}
	
	function parseImageObjectToHtml(images) {
		var itemsHtml = "<ul>";
		for ( var i = 0; i < images.length; i++) {
			itemsHtml += '<li>';
			var image = images[i];
			
			if ( image.video == true) {
				if (image.crop) {
					if ( image.crop[0] == 1 ) {						
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a>';
						}
					} else if (image.crop[0] == 2) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a>';
						}
					}
				} else {
					if ( image.description && image.description != "" ) {
						itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a><p class="desc">'+image.description+'</p>';
					} else {
						itemsHtml += '<a href="'+image.url+'" rel="video" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a>';
					}
				}
			} else {
				if (image.crop) {
					if ( image.crop[0] == 1 ) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="taller" width="'+o.width+'" style="margin-top: -' + image.crop[1] + 'px;" /></a>';
						}
					} else if (image.crop[0] == 2) {
						if ( image.description && image.description != "" ) {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a><p class="desc">'+image.description+'</p>';
						} else {
							itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" class="wider" height="'+o.height+'" style="margin-left: -' + image.crop[1] + 'px;" /></a>';
						}
					}
				} else {
					if ( image.description && image.description != "" ) {
						itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a><p class="desc">'+image.description+'</p>';
					} else {
						itemsHtml += '<a href="'+image.url+'" rel="gallery" title="'+image.title+'" alternate="'+image.alternateUrl+'"><img src="'+image.thumbnailUrl+'" width="'+o.width+'" height="'+o.height+'" /></a>';
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