$("ul").on("click","li",function(){
	console.log($(this).css("color"));
	if($(this).css("color")==="rgb(0, 128, 0)")
	{
		$(this).css({
			color:"black",
			textDecoration:"none"
		});
		
	}
	else
	{
	$(this).css({
		color:"green",
		textDecoration:"line-through"
	});
	}
});

$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	
	
});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
	var todo=$(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+todo+"</li>");
	}
	
	$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
	});
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

		