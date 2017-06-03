$(document).ready(function(){

	function open_note(this_ele){
		this_ele.parents(".status-comment-line-list").siblings(".write-note-block").addClass("write-note");
		this_ele.parents(".status-comment-line-list").addClass("hide-block");
	}

	function close_note(this_ele){
		this_ele.parents(".write-note-block").removeClass("write-note");
		this_ele.parents(".write-note-block").siblings(".status-comment-line-list").removeClass("hide-block");
		this_ele.val("");
	}

	function close_all_notes(){
		$(".write-note-block").removeClass("write-note");
		$(".write-note-block").siblings(".status-comment-line-list").removeClass("hide-block");
		$(".note-field").val("");
	}

	//For expanding the notes
	$(".expand-notes").on("click", function(){
		var cur_parent = $(this).parents(".status-card-comment-line");
		var notes_block = cur_parent.next().attr("class");

		if(notes_block == "view-card-inner"){

			cur_parent.next("."+notes_block).slideToggle();
		}
	});
	//END: For expanding the notes

	//For writing a note
	$(".add-note").on("click", function(e){
		e.preventDefault();
		open_note($(this));
	});

	$(".note-field").on("keyup", function(){
		var string_val = $(this).val();
		string_val = $.trim(string_val);
		var string_len = string_val.length;

		if(string_len == 0){
			$(this).parents(".note-input-wrapper").children(".icon-return").removeClass("change-color");
		}else{
			$(this).parents(".note-input-wrapper").children(".icon-return").addClass("change-color");
		}
	});

	$(".note-field").on("keypress", function(e){
		var key_code = e.which;
		var time_ago = "1 min ago";			//to be reomved for backend data
		var user_initials = "RK";			//to be reomved for backend data
		var string_val = $(this).val();
		string_val = $.trim(string_val);
		var str_len = string_val.length;

		//Element to be appended
		var note_card = "<li class='view-note-card-item' style='display	:none'><div class='block-display'><span class='round'>"+user_initials+"</span></div><p class='view-note-content'>"+string_val+"</p><span class='last-seen pull-right'>"+time_ago+"</span></li>";

		if(key_code == 13){
			if(str_len!=0){
				$(this).parents(".status-card-comment-line").siblings(".view-card-inner").find(".view-note-card").append(note_card);
				$(this).parents(".status-card-comment-line").siblings(".view-card-inner").find(".view-note-card").children(".view-note-card-item:last").slideDown();
			}
			close_note($(this));
		}
	});

	$(document).on("click", function(e){
		var tar_ele = $(e.target);
		var tar_ele_class = tar_ele.attr("class");
		if(!tar_ele.parents(".write-note-block").hasClass("write-note-block")){
			if(tar_ele.parents(".add-note").hasClass("add-note")){
				tar_ele.parents(".status-comment-line-list").siblings(".write-note-block").addClass("write-note");
				tar_ele.parents(".status-comment-line-list").addClass("hide-block");
			}else{
				close_all_notes();
			}
		}
	});

	//END: For writing a note
});