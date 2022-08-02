$(document).ready(function(){

    $("#navChip1").on('mouseover', function(){
		$(".X10D_symbol").stop().animate({'stroke-width':'8px'}, 300, 'easeOutExpo');
	});
	$("#navChip1").on('mouseleave', function(){
		$(".X10D_symbol").stop().animate({'stroke-width':'5px'}, 300, 'easeOutBack');	
	});
	
});

