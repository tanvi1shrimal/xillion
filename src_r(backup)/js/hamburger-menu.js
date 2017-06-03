$(document).ready(function(){
	$(".menu-icon").on("click", function(e){
		e.preventDefault();
		$(".hamburger-menu").toggleClass("active");
		$(".menu-icon span").toggleClass("icon-hamburger icon-left-arrow");
		$(".menu-icon span").addClass("icon-left-arrow");
		$(".logo-section").toggleClass("animate");
		$(".nav-overlay").fadeToggle();
	});
	
	$(".nav-overlay").on("click", function(){
		$(".hamburger-menu").toggleClass("active");
		$(".menu-icon span").toggleClass("icon-hamburger icon-left-arrow");
		$(".logo-section").removeClass("animate");
		$(".nav-overlay").fadeOut();
	});
});