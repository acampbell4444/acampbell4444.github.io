$(function(){
  //name page
	 $('.name').on('mouseenter',function(){
	 	$(this).css({'transform':'scale(1.1)', 'transition': 'all 3s','color':'black'})
	 });

	 $('.dots').on('mouseenter',function(){
	  	$('.dot1').animate({ "left": "-330px"}, "slow" ).css({ "color": "black" });;
	  	$('.dot3').animate({ "right": "-330px"}, "slow" ).css({ "color": "black" });
	  	$('.dot2').css({ "color": "white" });
	 });

	  $('#title').on('mouseenter',function(){
	 	$(this).addClass('titleSwitch')
	 	$('.title').css({'color':'black'})
	 });

	  $('.dots').on('mouseleave',function(){
	 	$(this).css({'color':'white'})
	  	$('.dot1').animate({ "left": "330px" }, "slow" );
	  	$('.dot3').animate({ "right": "330px" }, "slow" );
	  	$('.dot1').css({ "color": "white" });
	  	$('.dot3').css({ "color": "white" });
	  	$('.dot2').css({ "color": "black" });
	 });

	$('.glyphicon-tree-conifer').on('mouseenter',function(){
		$(this).addClass('grow');
	 });
//name page



 
 

 });