$(document).ready(function(){
	$(".dropdown-select .dropdown-menu-link").on("click", function(e){
		e.preventDefault();
		var selected_val = $(this).attr("data-item");
		var chosen_val = $(this).html();

		$(this).parents(".form-element").children(".select-menu").find("option[data-option="+selected_val+"]").prop('selected', true);

		console.log("selected value: "+$(this).parents(".form-element").children(".select-menu").find("option:selected").attr("data-option"));

		$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").children(".selected-value").html(chosen_val);
		$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").children(".selected-value").attr("data-selcted-option", selected_val);
	});

	/*For a small dorpdown... like the one on individual job page*/
	$(".dropdown-menu--status .dropdown-menu-link").on("click", function(e){
		e.preventDefault();
		var chosen_val = $(this).html();
		var data_val = $(this).attr("data-status-link");

		$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").children(".selected-value").html(chosen_val);
		$(this).parents(".dropdown-menu").siblings(".dropdown-toggle").attr("data-status", data_val);

	});
	/*END: For a small dorpdown... like the one on individual job page*/
});