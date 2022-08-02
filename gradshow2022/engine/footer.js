$(document).ready(function(){

    $("#footers_image").on('mouseover', function(){
		$(this).stop().animate({'opacity':'44%'}, 90);
	});
	$("#footers_image").on('mouseleave', function(){
		$(this).stop().animate({'opacity':'22%'}, 300);	
	});
	
});

