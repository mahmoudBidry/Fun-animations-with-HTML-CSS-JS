$(document).ready(function(){
	$(".emoji").on("click", function(){
		var id = $(this).attr("id");
		$(".btn-emoji").removeClass().addClass("btn-emoji").addClass("like-btn-"+id.toLowerCase());
		$(".name-text").text(id).removeClass().addClass("name-text").addClass("name-text-"+id.toLowerCase())
	});
});