$(function(){
  
	 $('.name').on('mouseenter',function(){
	 	$(this).css({'color':'black','font-size':'90px'},'slow')
	 });
	 
	 $('.name').on('mouseleave',function(){
	 	$(this).css({'color':'white'})
	 });

	 $('.dots').on('mouseenter',function(){
	  	$('.dot1').animate({ "left": "-330px"}, "slow" );
	  	$('.dot3').animate({ "right": "-330px"}, "slow" );
	  	$('.dot1').css({ "color": "black" });
	  	$('.dot3').css({ "color": "black" });
	  	$('.dot2').css({ "color": "white" });
	 });
	  $('.dots').on('mouseleave',function(){
	 	$(this).css({'color':'white'})
	  	$('.dot1').animate({ "left": "330px" }, "slow" );
	  	$('.dot3').animate({ "right": "330px" }, "slow" );
	  	$('.dot1').css({ "color": "white" });
	  	$('.dot3').css({ "color": "white" });
	  	$('.dot2').css({ "color": "black" });

	 });
 
 

 });