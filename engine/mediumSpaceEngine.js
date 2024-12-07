

$(document).ready(function(){
 

	window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});




    $(document).ready(function(){
        $('#titleStart')
		.stop()
		.delay(900)
		.animate({'opacity':'0'}, 600)
		.queue(function (next) {$(this).css('display', 'none');next();});
		$('#titleBack').delay(1100).animate({'opacity':'0'}, 600).queue(function (next) {$(this).css('display', 'none');next();});
		$('#aniGuard').delay(2700).queue(function (next) {$(this).css('display', 'none');next();});
		$('#controller').delay(1500).animate({'width':'144px','height':'59px'}, 600, 'easeInExpo').animate({'width':'244px','height':'50px'}, 150, 'easeOutCirc').animate({'width':'232px','height':'54px'}, 300, 'easeOutBack');
		$('.conticon').delay(2100).animate({'opacity':'1'}, 300);
    });



 
 $("#homeButton").on('click', function(){
    $('#titleStart')
	.stop()
	.queue(function (next) {$(this).css('display', 'flex');next();})
	.animate({'opacity':'1'}, 600, 'easeOutExpo')
	.queue(function (next) {$(this).css('display', 'none');next();});
	$('#titleBack').delay(1100).animate({'opacity':'0'}, 600).queue(function (next) {$(this).css('display', 'none');next();});
    $(this).stop().delay(1200).animate({'height':'0px'}, 0);	
	$('#minilogo').stop().delay(900).animate({'top':'-100px'}, 300, 'easeInExpo');
	$('#logo').stop().delay(1200).animate({'top':'0px','width':'100%','height':'100%'}, 600, 'easeOutExpo');
	$('#controller').animate({'padding-top':'0px','margin-bottom':'0px'}, 150, 'easeOutExpo').animate({'width':'89px','height':'54px','padding-top':'0px','margin-bottom':'0px'}, 150, 'easeInCirc').animate({'width':'39px','height':'39px'}, 300, 'easeOutCirc').queue(function (next) {$(this).css('display', 'none');next();});
	$('.conticon').animate({'opacity':'0'}, 300);
	$('#t1').stop().delay(1150).animate({'opacity':'100%'}, 0);
	$('#t2').stop().delay(1150).animate({'opacity':'100%'}, 0);
	$('#t3').stop().delay(1150).animate({'opacity':'100%'}, 0);
	$('#t4').stop().delay(1150).animate({'opacity':'100%'}, 0);

	$('#titles').stop()
        .delay(590)
        .delay(0, function (next) {$(this).css('display', 'flex');next();})
        .animate({'opacity':'1'}, 0)
		.delay(200)
		.animate({'bottom':'110px'}, 300, 'easeInOutSine')
		.delay(600)
		.queue(function (next) {$(this).css('display', 'none');next();})
		.queue(function (next) {$(this).css('bottom', '110px');next();})
		.delay(300)
		.delay(0, function(){$(location).attr('href','../index.html');});
	$('#title1').stop()
		.delay(300)
		.animate({'left':'-133.5px','height':'68px','width':'68px','border-radius':'35%'}, 900, 'easeInOutExpo')
		.animate({'border-radius':'47%'}, 600, 'easeOutCirc');
		
	$('#title2').stop()
		.delay(300)
		.animate({'left':'-44.5px','height':'68px','width':'68px','border-radius':'35%'}, 900, 'easeInOutExpo')
		.animate({'border-radius':'47%'}, 600, 'easeOutCirc');
		
	$('#title3').stop()
		.delay(300)
		.animate({'left':'44.5px','height':'68px','width':'68px','border-radius':'35%'}, 900, 'easeInOutExpo')
		.animate({'border-radius':'47%'}, 600, 'easeOutCirc');
		
	$('#title4').stop()
		.delay(300)
		.animate({'left':'133.5px','height':'68px','width':'68px','border-radius':'35%'}, 900, 'easeInOutExpo')
		.animate({'border-radius':'47%'}, 600, 'easeOutCirc');
		
	$('#container').delay(300).queue(function (next) {$(this).css('display', 'flex');next();});
	$('#aniGuard').css('display','block').delay(2200).queue(function (next) {$(this).css('display', 'none');next();});
	$('#mousePad').css('display','none');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');




 });
 







 $("#genres").on('click', function(){
	$("#controller").stop().animate({'padding-top':'177px','margin-bottom':'177px'}, 300, 'easeOutExpo');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#cateTitles').stop().animate({'height':'152px','opacity':'1'}, 300, 'easeOutExpo');
//	$('#mousePad').stop().animate({'height':'100vh','width':'100vw'}, 0);
 });


 $("#search").on('click', function(){
	$("#controller").stop().animate({'padding-top':'377px','margin-bottom':'377px'}, 450, 'easeOutExpo');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
//	$('#mousePad').stop().animate({'height':'100vh','width':'100vw'}, 0);
 });


 $("#mousePad").on('mouseover', function(){
	$(this).stop().delay(100).animate({'height':'0vh','width':'0vw'}, 0);
	$("#controller").stop().animate({'width':'244px','height':'50px','padding-top':'0px','margin-bottom':'0px'}, 300, 'easeInOutCirc').delay(100).animate({'width':'232px','height':'54px'}, 450, 'easeOutBack');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#cateTitles').stop().animate({'opacity':'0'}, 0).animate({'height':'0px'}, 300, 'easeOutExpo');
 	$('#remote').stop().delay(100).animate({'bottom':'-3px'}, 250, 'easeInOutCirc').animate({'bottom':'0px'}, 300, 'easeOutBack');	

});





 $(".rButton").on('mouseover', function(){
	$("#controller").stop().animate({'padding-top':'46px','margin-bottom':'46px'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'100%','opacity':'100%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#cateTitles').stop().animate({'opacity':'0'}, 0).animate({'height':'0px'}, 300, 'easeOutExpo');
	$('#mousePad').stop().animate({'height':'100vh','width':'100vw'}, 0);

});

$(".conticon").on('mouseover', function(){
	$("#controller").stop().animate({'padding-top':'46px','margin-bottom':'46px'}, 300, 'easeOutExpo');
	$('#mousePad').stop().animate({'height':'100vh','width':'100vw'}, 0);

});

$("#genres").on('mouseover', function(){
	$('#ct1').stop().animate({'width':'100%','opacity':'100%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#cateTitles').stop().animate({'opacity':'0'}, 0).animate({'height':'0px'}, 300, 'easeOutExpo');

});
$("#search").on('mouseover', function(){
	$('#ct3').stop().animate({'width':'100%','opacity':'100%'}, 300, 'easeOutExpo');
	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
	$('#cateTitles').animate({'opacity':'0'}, 0).stop().animate({'height':'0px'}, 300, 'easeOutExpo');

});

// $("#remote").on('mouseleave', function(){
// 	$("#controller").stop().animate({'width':'244px','height':'50px','padding-top':'0px','margin-bottom':'0px'}, 300, 'easeInOutCirc').animate({'width':'232px','height':'54px'}, 450, 'easeOutBack');
// 	$(this).stop().animate({'bottom':'-3px'}, 250, 'easeInOutCirc').animate({'bottom':'0px'}, 300, 'easeOutBack');	
// 	$('#ct1').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
// 	$('#ct2').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
// 	$('#ct3').stop().animate({'width':'0%','opacity':'0%'}, 300, 'easeOutExpo');
// 	$('#cateTitles').stop().animate({'opacity':'0'}, 0).animate({'height':'0px'}, 300, 'easeOutExpo');


// });














     
 });
 
