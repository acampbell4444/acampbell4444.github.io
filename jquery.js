$(function(){
  //name page
	 $('.head').on('mouseenter',function(){
	 	$(this).addClass('headerGrow')
	 });

	 $('.dots').on('mouseenter',function(){
	  	$('.dot1').animate({ "left": "-330px"}, "slow" ).css({ "color": "black" });;$('.dot3').animate({ "right": "-330px"}, "slow" ).css({ "color": "black" });
	  	$('.dot2').css({ "color": "white" });
	 });

	  $('.title').on('mouseenter',function(){
	 	$(this).addClass('titleSwitch')
	 });

	  $('.dots').on('mouseleave',function(){
	 	$(this).css({'color':'white'})
	  	$('.dot1').animate({ "left": "380px" }, "slow" );$('.dot3').animate({ "right": "380px" }, "slow" );
	  	$('.dot1').css({ "color": "white" });$('.dot3').css({ "color": "white" });$('.dot2').css({ "color": "black" });
	 });

	$('.glyphicon-tree-conifer').on('mouseenter',function(){
		if($('#nameCont').css('display')==='block'){$(this).addClass('grow');}
	 });
//name page

	$('#about, #contact, #work').on('click',function(){
		$('.glyphicon-tree-conifer').removeClass('grow').addClass('shrink');
		$('.head').removeClass('headerGrow');
		$('.title').removeClass('titleSwitch');
	 });

	$('#work').click(function(){
		$('body').css({ "background-color": "white" });
	});
	
	$('#nametab').click(function(){
		$('body').css({ "background-color": "coral" });
	});

	var n=90;
	var tankPosit = 0
	$('#tankPic').click(function(){
		console.log('hey')
		tankPosit++;
		$(this).css( { 'transform': 'rotate('+n+'deg)', 'transition' : 'all 1s', 'animation-iteration-count':  'infinite'});
		n+=90;
		if(tankPosit%4===0){
			$("html, body").animate({scrollTop: 0}, 500); 
			$("html, body").animate({scrollLeft: 0}, 500); 
			$('#box8').css({'background-color':'white'}); $('#box4').css({'background-color':'coral'})
			$('#box8, #box9').text("");
			$('#box1').text("Guessing Game Description");
			$('#box4').text("Guessing Game project");
			$('#box4').addClass('boxTitle');
			$('#box7').text("Guessing Game Links");
		}
		if(tankPosit%4===1){
			$("html, body").animate({scrollTop: 0}, 500); 
			$('#box4').css({'background-color':'white'});  $('#box2').css({'background-color':'coral'})
			$('#box1').text("Turtle Description");
			$('#box4, #box7').text("");
			$('#box2').text("Turtle Quiz");
			$('#box3').text("Turtle Game Links");
			$('#box4').removeClass('boxTitle'); $('#box2').addClass('boxTitle'); 
		}
		if(tankPosit%4===2){
			$("html, body").animate({scrollRight: 0}, 500); 
			$('#box2').css({'background-color':'white'});  $('#box6').css({'background-color':'coral'})
			$('#box1, #box2').text("");
			$('#box3').text("3rd Project Description");
			$('#box6').text("3rd Project Title");
			$('#box9').text("3rd Project Links");
			$('#box2').removeClass('boxTitle'); $('#box6').addClass('boxTitle'); 
		}
		if(tankPosit%4===3){
			$("html, body").animate({scrollTop: $(document).height()}, 500); 
			$('#box6').css({'background-color':'white'});  $('#box8').css({'background-color':'coral'})
			$('#box3, #box6').text("");
			$('#box7').text("4th project Description");
			$('#box8').text("4th Project Title");
			$('#box9').text("4th Project Links");
			$('#box6').removeClass('boxTitle'); $('#box8').addClass('boxTitle'); 
		}
	});
	
	$('#tankPic').mouseenter(function(){
			$("html, body").animate({scrollLeft: 0}, 500); 
			if(tankPosit===0){ $('#box4').css({'background-color':'coral'})
			$('#box1').text("Guessing Game Description");
			$('#box4').text("Guessing Game project");
			$('#box7').text("Guessing Game Links");
			$('#box8').removeClass('boxTitle'); $('#box4').addClass('boxTitle'); 
	}
	});



 
 

 });