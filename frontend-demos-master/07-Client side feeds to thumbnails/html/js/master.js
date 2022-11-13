function initialize() {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?id=27755172@N02";
	var feed = new google.feeds.Feed(url);
	feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
	feed.setNumEntries(50);
	feed.load(function(result) {
	
		if (!result.error) {
			var $container = jQuery("#feed");
			var html = '<ul>';
			var $xml = jQuery(result.xmlDocument);
			var entries = $xml.find("entry");
			for (var i = 0; i < entries.length; i++) {
				var $entry = jQuery(entries[i]);
				var title = $entry.find("title").text();
				var content = $entry.find("content").text();
				var imageUrl = jQuery($entry.find('link[rel="enclosure"]')).attr("href");
				var alternateUrl = jQuery($entry.find('link[rel="alternate"]')).attr("href");
				var $thumbnail = jQuery(content).find("img");
				var imgDesc = jQuery((jQuery(content).get(4))).html();
				var thumbnailUrl = $thumbnail.attr("src");
				var thumbnailWidth = $thumbnail.attr("width");
				var thumbnailHeight = $thumbnail.attr("height");
				
				html += '<li>';
				
				//var ratios = thumbnailWidth / thumbnailHeight;
				
				if ( thumbnailWidth > thumbnailHeight ) {
					var acWidth = thumbnailWidth * (100/thumbnailHeight);
					var marginLeft = (acWidth - 100) / 2;
					html += '<a href="'+imageUrl+'" rel="gallery" title="'+title+'" alternate="'+alternateUrl+'"><img src="'+thumbnailUrl+'" class="wider" style="margin-left: -' + marginLeft + 'px;" /></a><p class="desc">'+imgDesc+'</p>';
				} else {
					var acHeight = thumbnailHeight * (100/thumbnailWidth);
					var marginTop = (acHeight - 100) / 2;
					html += '<a href="'+imageUrl+'" rel="gallery" title="'+title+'" alternate="'+alternateUrl+'"><img src="'+thumbnailUrl+'" class="taller" style="margin-top: -' + marginTop + 'px;" /></a><p class="desc">'+imgDesc+'</p>';
				}
				html += '</li>';
			}
			html += '</ul>';
			$container.html(html);
		}
		
		
		function formatTitle(title, currentArray, currentIndex, currentOpts) {
			//alert($(currentArray).attr("alternate"));
			return '<h3><a href="'+$(currentArray).attr("alternate")+'" target="_blank">'+$(currentArray).attr("title")+'</a></h3><p>'+$(currentArray).next(".desc").html()+'</p>';
		}
		
		$("#feed ul li a[rel=gallery]").fancybox({
			centerOnScroll: true,
			titlePosition: 'inside',
			titleFormat : formatTitle,
			//title: '<h3><a href="'+$(this).attr("alternate")+'" target="_blank">'+$(this).attr("title")+'</a></h3><p>'+$(this).next(".desc").html()+'</p>',
			onComplete: function() {
				$(window).trigger("resize");
			}
		});
		
	});
	
}

google.setOnLoadCallback(initialize);


//function 