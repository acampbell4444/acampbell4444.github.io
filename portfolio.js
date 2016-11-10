$(function(){
  
  $('h1').hover(function(){                 //h1
  	$(this).css({'color':'green'})});
  $('h1').mouseleave(function(){
  	$(this).css({'color':'black'})});       //h1
 
 $('.badges').find('ul').hide();
 
 $('button').click(function(){                 //h1
  	$(this).closest('.badges').find('ul').toggle();
  	if(butt === 'off') {
      $('.butt').text('Click to See My Badges');
      butt = 'on';
    }else {
       $('.butt').text('Hide My Badges');
      butt = 'off';
    }

  });
   
 
});
var butt = "on"

