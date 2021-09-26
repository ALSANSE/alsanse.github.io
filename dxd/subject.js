

$(document).ready(function(){
    $(document).ready(function(){
		$('#exit').delay(1000).animate({'opacity': '100%'}, 1000);
		$('#subject').delay(1000).animate({'opacity': '100%'}, 1000);
		$('#ham').delay(1000).animate({'opacity': '100%'}, 1000);
        $('#exit').delay(1000).animate({'opacity': '100%'}, 1000);
		$('#remote').delay(300).animate({'opacity': '100%'}, 1000);
        $('#sec1').delay(000).animate({'opacity': '100%', 'margin-top': '0px'}, 1000, 'easeOutBack');
        $('#sec2').delay(00).animate({'opacity': '100%', 'margin-top': '0px'}, 1000, 'easeOutBack');
		$('#sec3').delay(00).animate({'opacity': '100%', 'margin-top': '0px'}, 1000, 'easeOutBack');
        $('#sec4').delay(00).animate({'opacity': '100%', 'margin-top': '00px'}, 1000,'easeOutBack');
		$('#sec5').delay(00).animate({'opacity': '100%', 'margin-top': '00px'}, 1000,'easeOutBack');
		$('#sec6').delay(00).animate({'opacity': '100%', 'margin-top': '00px'}, 1000,'easeOutBack');
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
        $(this).stop().animate({'width':'50px', 'height':'50px'}, 100, 'easeOutExpo');
        $('#exitNoti').stop().animate({'left':'100px', 'opacity':'100%'}, 100, 'easeOutExpo');
    });
    $("#exit").on('mouseleave', function(){
        $(this).stop().animate({'width':'40px', 'height':'40px'}, 100, 'easeOutExpo');
        $('#exitNoti').stop().animate({'left':'80px', 'opacity':'0%'}, 100, 'easeOutExpo');
    });
	$("#exit").on('click', function(){
        $(this).stop().animate({'width':'40px', 'height':'40px'}, 100, 'easeOutExpo');
        $('#exitNoti').stop().animate({'left':'80px', 'opacity':'0%'}, 100, 'easeOutExpo');
		$('#remote').animate({'opacity': '100%'}, 600);
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 00, 'easeInExpo', function(){$(location).attr('href','index.html');});
	});


    $("#pic1").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $("#pic1").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });
	

	 $("#pic2").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $("#pic2").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });


	 $("#pic3").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $("#pic3").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });


	$("#pic4").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $("#pic4").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });


	$("#pic5").on('mouseover', function(){
		$(this).stop().animate({'top':'-10px'}, 300, 'easeOutExpo');
    });
    $("#pic5").on('mouseleave', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
    });
	
	
	
	
	$("#r1Button").on('click', function(){
		$(this).stop().animate({'opacity':'66%'}, 100, 'easeInSine');	
		$('#r1Text').stop().animate({'left':'0px', 'opacity':'0%'}, 100, 'easeOutExpo');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'-50px', 'opacity':'0%'}, 0);
});
			$('#quitMenu').on('click', function(){
				$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
				$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
				$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
				$('#quitMenu').animate({'top':'-50px', 'opacity':'0%'}, 0);
				});
	
	
	
	
$("#r2Button").on('click', function(){
	$('#go3_p').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#go1_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#go2_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'50px', 'opacity':'100%'}, 0);
});
	
	
$("#r3Button").on('click', function(){
	$('#go2_p').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#go1_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#go3_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'100px', 'opacity':'100%'}, 0);
});
	
	
$("#r4Button").on('click', function(){
	$('#go1_p').animate({'height':'310px'}, 600, 'easeOutExpo');
	$('#go3_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#go2_p').animate({'height':'0px'}, 00, 'easeOutCirc');
	$('#quitMenu').animate({'top':'150px', 'opacity':'100%'}, 0);
});	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	

	
$("#ham").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'50%'}, 600, 'easeOutExpo');		
});
	$("#burger_x").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'200%'}, 300, 'easeInCirc');		
});

	
	
		$("#pic1").on('click', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 300, 'easeInExpo', function(){$(location).attr('href','3_mgrp_ksj.html');});
	});
		$("#pic2").on('click', function(){
		$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 300, 'easeInExpo', function(){$(location).attr('href','3_mgrp_csg.html');});
	});
		$("#pic3").on('click', function(){
			$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 300, 'easeInExpo', function(){$(location).attr('href','3_mgrp_hhw.html');});
	});
		$("#pic4").on('click', function(){
			$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 300, 'easeInExpo', function(){$(location).attr('href','3_mgrp_cjw.html');});
	});
		$("#pic5").on('click', function(){
			$(this).stop().animate({'top':'0px'}, 100, 'easeInOutSine');
		$('#go3_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go2_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#go1_p').animate({'height':'0px'}, 200, 'easeOutCirc');
		$('#quitMenu').animate({'top':'0px', 'opacity':'0%'}, 0);
        $('body').animate({'opacity':'100%'}, 300, 'easeInExpo', function(){$(location).attr('href','3_mgrp_syl.html');});
	});
	
});
