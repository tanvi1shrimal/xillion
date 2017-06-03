$(document).ready(function(){

	$("label.checkbox-label").on("click", function(){
		$("label.checkbox-label").removeClass("anim");
		if($(this).find('input[type=checkbox]').is(':checked')){
			$(this).addClass("anim");
		}
	});

});