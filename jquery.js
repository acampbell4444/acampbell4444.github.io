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



 
 

 });