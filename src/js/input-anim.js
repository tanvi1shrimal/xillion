$(document).ready(function(){
	var input_class = "value-entered";
	var input_flag;
	/*File upload code*/
	$('#attach-file input[type="file"]').on('change', function () {
        var o = this.value || 'No file selected.';
        $(this).closest('#attach-file').find('.choose-file-text').text(o);
    });
	/*END: File upload code*/

	$(".form-element--input").on("click", function(){
		$(this).children(".enter-input").siblings(".input-style-detail").focus();
		$(this).children(".enter-input").parents(".form-element--input").addClass("float-up");

		$(".input-style-detail").each(function(){
			input_flag = $(this).hasClass(input_class);
			if(input_flag){
				$(this).parents(".form-element--input").addClass("float-up");
			}
		});

	});

	$(".input-style-detail").on("keyup", function(){
		var valu = $(this).val();
		valu = $.trim(valu);
		if(valu == ""){
			console.log("empty");
			$(this).removeClass(input_class);
		}else{
			console.log("value entered: "+valu);
			$(this).addClass(input_class);
		}
	});

	$(".input-style-detail").blur(function(){
		$(".input-style-detail").each(function(){
			input_flag = $(this).hasClass(input_class);
			if(input_flag){
				$(this).parents(".form-element--input").addClass("float-up");
			}else{
				$(this).parents(".form-element--input").removeClass("float-up");
			}
		});

	});

	$(".input-style-detail").focus(function(){
		$(this).parents(".form-element--input").addClass("float-up");
	});

	/*For selecting row in a table - radio button*/
	$(".select-row").on("click", function(){
		$(this).find("input[type=radio]").prop("checked", true);
		$(".select-row .radio-btn-wrapper .custom-radio").removeClass("active");

		if($(this).find('input[type=radio]').is(':checked')){
			$(this).find(".radio-btn-wrapper").children(".custom-radio").addClass("active");
		}
	});

	$(".select-employee").on("click", function(){

		if($(this).hasClass("selected")){
			$(this).find("input[type=checkbox]").prop("checked", false);
			$(this).find(".checkbox-btn-wrapper").children(".custom-checkbox").removeClass("active");
			$(".select-employee").removeClass(".selected-employee");
		}else{
			$(this).find("input[type=checkbox]").prop("checked", true);
			$(this).find(".checkbox-btn-wrapper").children(".custom-checkbox").addClass("active");
			$(".select-employee").removeClass(".selected-employee");
			$(this).addClass("selected-employee");
		}
	});

	$(".label-wrapper").on("click", function(){
		$(this).find("input[type=radio]").prop("checked", true);
		$(".label-wrapper .radio-btn-wrapper .custom-radio").removeClass("active");

		if($(this).find('input[type=radio]').is(':checked')){
			$(this).find(".radio-btn-wrapper").children(".custom-radio").addClass("active");
		}
	});
	/*END: For selecting row in a table - radio button*/

	/*----------To enable input elments to be editable----------*/

	$(document).on("click", function(e){
		var tar_ele = $(e.target);
		var save_ele = "<a href='#' class='pull-right save-link'>SAVE</a>";
		var edit_ele = "<a href='#' class='pull-right edit-link'>EDIT</a>";

		if(tar_ele.hasClass("save-link")){
			tar_ele.siblings(".editable-section").find(".editable-info").attr("readonly", true);
			tar_ele.siblings(".editable-section").find(".editable-info").removeClass("enable-edit");
			tar_ele.replaceWith(edit_ele);
		}else if(tar_ele.hasClass("edit-link")){
			tar_ele.siblings(".editable-section").find(".editable-info").attr("readonly", false);
			tar_ele.siblings(".editable-section").find(".editable-info").addClass("enable-edit");
			tar_ele.replaceWith(save_ele);
		}else if(tar_ele.hasClass("preview-invoice")){
			var file_path = tar_ele.attr("data-file-path");
			$(".invoice-preview-image").attr("src", file_path);
		}
	});

	/*----------END: To enable input elments to be editable----------*/

	/*---------File upload and preview---------*/
	$('.attach-file input[type="file"]').on('change', function (e) {
        var file_path = this.value || 'No file selected.';
		var tmppath = URL.createObjectURL(e.target.files[0]);
		var view_file_link = "<a href='#' class='upload-invoice preview-invoice' data-toggle='modal' data-target='#upload-file-popup' data-file-path="+tmppath+">View</a>";

		$(this).siblings(".upload-file-text").replaceWith(view_file_link);
    });

	/*---------END: File upload and preview---------*/

});