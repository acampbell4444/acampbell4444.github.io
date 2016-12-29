$(function(){
  //name page
	 $('.head').on('mouseenter',function(){
	 	$(this).addClass('headerGrow')
	 });

	 $('#nametab').click(function(){
	 	$('body').css({ "background-color": "coral" });
	 	 $('footer').css({'background-color':'black'})
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
	var shake=0
	var n=90, tankPosit = 1, firstClick=0;
	$('#work').click(function(){
		 $('#ball1, #ball2, #ball3, #ball0').hide()
		 $('body').css({ "background-color": "black" });
		 $('footer').css({'background-color':'#66ff33'})
		 shake++ < 1 ?  $('#tankPic').addClass('shake') : $('#tankPic').removeClass('shake');
		 firstClick > 0 ? tankPosit%4===0 ? $('#ball0').show() : tankPosit%4===1 ? $('#ball1').show() :
		 	tankPosit%4===2 ? $('#ball2').show() : tankPosit%4===3 ? $('#ball3').show() : null : null
	});

	$('#tankPic').click(function(){
		if(firstClick++ > 0 ) {
			tankPosit++;
			$(this).css( { 'transform': 'rotate('+n+'deg)', 'transition' : 'all 0.5s'}) 
			n+=90
		}
		
		if(tankPosit%4===0){
			$("html, body").animate({scrollTop: 0}, 500); 
			$("html, body").animate({scrollLeft: 0}, 500); 
			$('#box8').css({'background-color':'black'}); $('#box4').css({'background-color':'black'}).text("Bloccipedia").addClass('boxTitle');
			$('#box8, #box9, #box7').text("");
			$('#box1').text("Bloccipedia Description").addClass('boxDescrip');;
			$('#box7').append("<a href='https://lit-cove-24467.herokuapp.com/' target='-blank'>Link To App</a>").removeClass('boxDescrip').addClass('boxLinks');
		}

		if(tankPosit%4===1){
			$("html, body").animate({scrollTop: 0}, 500);
			$('#ball1').show();
			$('#box4').css({'background-color':'black'}).removeClass('boxTitle');
			$('#box1').text("Turtle Description").addClass('boxDescrip');
			$('#box4, #box7').text("").removeClass('boxLinks');
			$('#box3').append("<a href=' https://acampbell4444.github.io/ngQuiz/' target='-blank'>Link To App</a>").addClass('boxLinks');
		}

		if(tankPosit%4===2){
			$("html, body").animate({scrollRight: 0}, 500); 
			$('#ball1').hide();
			$('#ball2').show();
			$('#box9').append("<a href=' https://acampbell4444.github.io/GuessingGame/?#' target='-blank'>Link To App</a>").addClass('boxLinks');
			$('#box3').text("Guessing Description").removeClass('boxLinks').addClass('boxDescrip');
			$('#box1').removeClass('boxDescrip').text(""); 
		}

		if(tankPosit%4===3){
			$("html, body").animate({scrollTop: $(document).height()}, 500); 
			$('#box6').css({'background-color':'black'}).removeClass('boxTitle').text('');  $('#box8').css({'background-color':'black'}).text("Bloccipedia").addClass('boxTitle');
			$('#box9').text("").append("<a href=' https://dry-reef-8694.herokuapp.com' target='-blank'>Link To App</a>");
			$('#box7').text("Bloccit Description").addClass('boxDescrip');
			$('#box3').text("").removeClass('boxDescrip');
		}
	});
	


 });