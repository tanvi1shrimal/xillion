$(".multi-list").select2();
$("#checkbox").click(function(){
    if($("#checkbox").is(':checked') ){
        $(".multi-list > option").prop("selected","selected");
        $(".multi-list").trigger("change");
    }else{
        $(".multi-list > option").removeAttr("selected");
         $(".multi-list").trigger("change");
     }
});