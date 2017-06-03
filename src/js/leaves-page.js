$(document).ready(function(){
	var default_hd = '<li class="add-button-style pull-right"><a href="#" data-toggle="modal" data-target="#add-job-popup" class="btn"><i aria-hidden="true" class="fa fa-plus"></i> Add Job</a><a href="#" data-toggle="modal" data-target="#card-popup2" class="import-btn btn"><img src="img/chart.png" alt=""><span class="small-info"> Import Job</span></a></li>';
	var leaves_hd = '<li class="add-button-style pull-right"><a href="#" data-toggle="modal" data-target="#apply-leaves" class="btn"><i aria-hidden="true" class="fa fa-plus"></i> Apply Leave</a></li>';
	var ele_replace = ".add-member-subhead .add-button-style.pull-right";

	$(".job-activity-item a").on("click", function(){

		var href_val = $(this).attr("href");
		if(href_val == "#leaves"){
			$(ele_replace).replaceWith(leaves_hd);
		}
		else{
			$(ele_replace).replaceWith(default_hd);
		}
	});
});