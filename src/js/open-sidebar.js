$(document).ready(function(){
	$(".open-notification").on("click", function(e){
		e.preventDefault();
		$(".sidebar").addClass("active");
	});
	
	$(".close-notification-sidebar").on("click", function(e){
		e.preventDefault();
		$(".sidebar").removeClass("active");
	});
});