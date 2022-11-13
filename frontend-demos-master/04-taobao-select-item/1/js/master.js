$(function() {

	$("#select-type ul li").bind("click", function(event) {
		$("#select-type ul li.selected").removeClass("selected");
		$(this).addClass("selected");
		$("#type-input").val($(this).attr("data-value"));
		event.preventDefault();
		event.stopPropagation();
		return false;
	});
})