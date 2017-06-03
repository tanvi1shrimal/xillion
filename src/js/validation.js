$(document).ready(function(){

	$(".form-field-container").find("input").addClass("validate-field");
	$(".form-field-container, .form-dropdown-container").append("<span class='status-message'></span>");

	var form_id = "#signup-form",
//	var form_id = "#add-client",
		form_flag = "fals",
		error_msg = "Please enter the missing field",
		select_error = "Please select an option",
		pass_success = "Password matched",
		pass_error = "Password not matched",
		pass_length = 8,
		pass_length_msg = "Atleast "+pass_length+" characters password";

	/*Password validation*/

	$(".validate-field#password").on("keyup", function(){	//Password length validation
		var pass_val = $(this).val();
		var pass_val_length = pass_val.length;
		pass_val = $.trim(pass_val);
		console.log("password: "+pass_val);

		if(pass_val!=""){
			if(pass_val_length < pass_length){
				console.log("entered less: "+pass_val_length);
				if(pass_val_length <= 1){
					$(this).parents(".form-field-container").removeClass("pass-len-msg");
					setTimeout(function(){
						$(this).parents(".form-field-container").find(".status-message").text("");
					}, 300);
				}else{
					$(this).parents(".form-field-container").addClass("pass-len-msg");
					$(this).parents(".form-field-container").find(".status-message").text(pass_length_msg);
				}
			}else{
				console.log("cool: "+pass_val_length);
				$(this).parents(".form-field-container").removeClass("pass-len-msg");

				setTimeout(function(){
					$(this).parents(".form-field-container").find(".status-message").text("");
				}, 300);
			}
		}
	});

	$(".validate-field#confirm-password").on("keyup", function(){		//Password match validation
		var p_val = $("#password").val();
		var confirm_pass_val = $(this).val();
		confirm_pass_val = $.trim(confirm_pass_val);
//
		console.log("password value: "+p_val);
		console.log("confirm password value: "+confirm_pass_val);

		if(confirm_pass_val == p_val){
			$(this).parents(".form-field-container").removeClass("pass-not-matched");
			$(this).parents(".form-field-container").addClass("pass-matches");
			$(this).parents(".form-field-container").find(".status-message").text(pass_success);
		}else{
			$(this).parents(".form-field-container").removeClass("pass-matches");
			$(this).parents(".form-field-container").addClass("pass-not-matched");
			$(this).parents(".form-field-container").find(".status-message").text(pass_error);
		}

	})

	/*END: Password validation*/


	$(form_id).on("submit", function(){
		var input_val, input_ele;

		$(".form-field-container").each(function(i){		//Only for input fields
			var ele_id;
			input_ele = $(this).find(".validate-field");
			input_val = input_ele.val();
			if(input_val === ""){
				$(this).addClass("error");
				$(this).find(".status-message").text(error_msg);
				form_flag = "fals";

			}else{
				$(this).removeClass("error");
				setTimeout(function(){
					$(this).find(".status-message").text("");
				}, 300);
				form_flag = "tru";
			}

		});



		$(".form-dropdown-container").each(function(i){		//Only for dropdown list
			var attr_val = $(this).find(".dropdown-toggle").children(".selected-value").attr("data-selcted-option");
			console.log("select menu status: "+attr_val);

			if(attr_val == ""){
				$(this).addClass("error");
				$(this).find(".status-message").text(select_error);
				form_flag = "fals";
			}else{
				$(this).removeClass("error");
				setTimeout(function(){
					$(this).find(".status-message").text("");
				}, 500);
				form_flag = "tru";
			}

		});

		return false;		//Remove this for submiting form`
	});

});