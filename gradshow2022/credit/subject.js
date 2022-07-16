

$(document).ready(function(){
    $(document).ready(function(){
        $('.sec').delay(000).animate({'opacity': '100%', 'margin-top': '0px'}, 1000, 'easeOutBack');
	});

});


$(document).ready(function(){



    $("#r1Button").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
        $('#r1Text').stop().animate({'left':'50px', 'opacity':'100%'}, 100, 'easeOutExpo'); });
    $("#r1Button").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
        $('#r1Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo'); });
    
    $("#r2Button").on('mouseover', function(){
		$(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
	});
	$("#r2Button").on('mouseleave', function(){
		$(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
	});

    $("#r3Button").on('mouseover', function(){
		$(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
	});
	$("#r3Button").on('mouseleave', function(){
		$(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
	});
    
    $("#r4Button").on('mouseover', function(){
		$(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
	});
	$("#r4Button").on('mouseleave', function(){
		$(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
	});

    $("#r5Button").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
        $('#r5Text').stop().animate({'left':'50px', 'opacity':'100%'}, 100, 'easeOutExpo'); });
    $("#r5Button").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
        $('#r5Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo'); });
    
    $("#r6Button").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
        $('#r6Text').stop().animate({'left':'50px', 'opacity':'100%'}, 100, 'easeOutExpo'); });
    $("#r6Button").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
        $('#r6Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo'); });
       
    $("#r7Button").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
        $('#r7Text').stop().animate({'left':'50px', 'opacity':'100%'}, 100, 'easeOutExpo'); });
    $("#r7Button").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
        $('#r7Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo'); });
    
    $("#r8Button").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 300, 'easeOutExpo');
        $('#r8Text').stop().animate({'left':'50px', 'opacity':'100%'}, 100, 'easeOutExpo'); });
    $("#r8Button").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
        $('#r8Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo'); });
        






    $("#exit").on('mouseover', function(){
        $(this).stop().animate({'opacity':'100%'}, 100, 'easeOutExpo');
        $('#exitNoti').stop().animate({'left':'30px', 'opacity':'100%'}, 100, 'easeOutExpo');
    });
    $("#exit").on('mouseleave', function(){
        $(this).stop().animate({'opacity':'55%'}, 100, 'easeOutExpo');
        $('#exitNoti').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo');
    });
	$("#exit").on('click', function(){
		$('#remote').animate({'opacity': '100%'}, 600);
		$('#s3').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s2').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s1').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 00, 'easeInExpo', function(){$(location).attr('href','index.html');});
	});


    $(".pic").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $(".pic").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });
	
	
	
	$("#r1Button").on('click', function(){
		$(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
		$('#r1Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo');
		$('#s3').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s2').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s1').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'-50px', 'opacity':'0%'}, 0);
	});
	
	$('#quitMenu').on('click', function(){
		$('#s3').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s2').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#s1').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'-50px', 'opacity':'0%'}, 0);
	});
	
	
	
	
$("#r2Button").on('click', function(){
	$('#s3').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#s2').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#s1').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'50px', 'opacity':'100%'}, 0);
});
	
	
$("#r3Button").on('click', function(){
	$('#s2').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#s1').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#s3').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'100px', 'opacity':'100%'}, 0);
});
	
	
$("#r4Button").on('click', function(){
	$('#s1').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#s3').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#s2').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'150px', 'opacity':'100%'}, 0);
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

	
$("#ham").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'0%'}, 600, 'easeOutExpo');		
});
	$("#burger_x").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'200%'}, 300, 'easeInCirc');		
});

	
	
});
