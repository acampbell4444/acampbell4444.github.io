$(function(){
  //name page
	 $('.head').on('mouseenter',function(){
	 	$(this).addClass('headerGrow')
	 	$('#work, #about, #contact, #nametab').css( {'color' : '#66ff33' } )
	 });

	 $('#nametab').click(function(){
	 	 $('footer').css({'background-color':'black'})
	 });

	 $('.dots').on('mouseenter',function(){
	  	$('.dot1').animate({ "left": "-330px"}, "slow" ).css({ "color": "#66ff33" });;$('.dot3').animate({ "right": "-330px"}, "slow" ).css({ "color": "#66ff33" });
	  	$('.dot2').css({ "color": "white" });
	 });

	  $('.title').on('mouseenter',function(){
	 	$(this).addClass('titleSwitch')
	 });

	  $('.dots').on('mouseleave',function(){
	 	$(this).css({'color':'white'})
	  	$('.dot1').animate({ "left": "380px" }, "slow" );$('.dot3').animate({ "right": "380px" }, "slow" );
	  	$('.dot1').css({ "color": "white" });$('.dot3').css({ "color": "white" });$('.dot2').css({ "color": "#66ff33" });
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
	var n=90, arrowPosit = 1, firstClick=0;
	$('#work').click(function(){
		 $('#ball1, #ball2, #ball3, #ball0').hide()
		 $('body').css({ "background-color": "black" });
		 $('footer').css({'background-color':'#66ff33'})
		 shake++ < 1 ?  $('#arrowPic').addClass('shake') : $('#arrowPic').removeClass('shake');
		 firstClick > 0 ? arrowPosit%4===0 ? $('#ball0').show() : arrowPosit%4===1 ? $('#ball1').show() :
		 	arrowPosit%4===2 ? $('#ball2').show() : arrowPosit%4===3 ? $('#ball3').show() : null : null
	});

	$('#arrowPic').click(function(){
		if(firstClick++ > 0 ) {
			arrowPosit++;
			$(this).css( { 'transform': 'rotate('+n+'deg)', 'transition' : 'all 0.5s'}) 
			n+=90
		}
		
		if(arrowPosit%4===0){
			$("html, body").animate({scrollLeft: 0}, 500).animate({scrollTop: 0}, 500)
			$('#box7, #box9').text("");
			$('#ball3').hide();$('#ball0').show();
			$('#box1').text('').append("<p class='well descrips'>I constructed this app using Angular and Bootstrap. Key features include a dynamic search form and pop-up modals.</p>")
			$('#box7').append("<a href='https://github.com/acampbell4444/bloccit' target='-blank'><img class='git' src='https://www.enterprisemodules.com/images/github-icon.png'></img></a>");
		}

		if(arrowPosit%4===1){
			$("html, body").animate({scrollTop: 0}, 500);
			$('#ball0').hide();$('#ball1').show();
			$('#box1').text('').append("<p class='well descrips'>I constructed this app using Angular and Bootstrap. Key features include a dynamic search form and pop-up modals.</p>")
			$('#box7').text("").removeClass('boxLinks');
			$('#box3').append("<a href='https://github.com/acampbell4444/ngQuiz' target='-blank'><img class='git' src='https://www.enterprisemodules.com/images/github-icon.png'></img></a>");
		}

		if(arrowPosit%4===2){
			$("html, body").animate({scrollRight: 0}, 500); 
			$('#ball1').hide();$('#ball2').show();
			$('#box9').append("<a href='https://github.com/acampbell4444/GuessingGame' target='-blank'><img class='git' src='https://www.enterprisemodules.com/images/github-icon.png'></img></a>");
			$('#box3').text('').append("<p class='well descrips'>I constructed this app using Angular and Bootstrap. Key features include a dynamic search form and pop-up modals.</p>")
			$('#box1').text(""); 
		}

		if(arrowPosit%4===3){
			console.log('hey')
			$("html, body").animate({scrollTop: $(document).height()}, 500);
			$('#ball2').hide();$('#ball3').show();
			$('#box9').text("").append("<a href='https://github.com/acampbell4444/blocipedia' target='-blank'><img class='git' src='https://www.enterprisemodules.com/images/github-icon.png'></img></a>");
			$('#box7').append("<p class='well descrips'>I constructed this app using Angular and Bootstrap. Key features include a dynamic search form and pop-up modals.</p>");
			$('#box3').text("").removeClass('boxDescrip');
		}
	});
	


 });