$(document).ready(function(){
//	if($("input[type=checkbox]").is(':checked')){
//		$(this).siblings(".custom-checkbox").addClass("anim");
//		console.log("gf");
//	}
	
//	$("label.checkbox-label").on("click", function(){
////		if($("input[type=checkbox]").is(':checked')){
////			$(this).siblings(".custom-checkbox").addClass("anim");
////			console.log("gf");
////		}else{
////			$(this).siblings(".custom-checkbox").removeClass("anim");
////		}
//		console.log("gf");
////		if($(this).siblings('input[type=checkbox]').is(':checked')){
//		if($(this).parents('.checkbox-wrapper').children("input[type=checkbox]").is(':checked')){
//			console.log("checked");
//		}
//	});
	
	$("label.checkbox-label").on("click", function(){
		$("label.checkbox-label").removeClass("anim");
		if($(this).find('input[type=checkbox]').is(':checked')){
//			$("label.checkbox-label").removeClass("anim");
			$(this).addClass("anim");
		}
	});
//
//	$("label.save-default").on("click", function(){
//
//		if($(this).find('input[type=checkbox]').is(':checked')){
//			$(this).find(".custom-checkbox").addClass("active-state");
//		}else{
//			$(this).find(".custom-checkbox").removeClass("active-state");
//		}
//	});
	
});