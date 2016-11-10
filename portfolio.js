$(function(){
  
  $('h1').hover(function(){                 //h1
  	$(this).css({'color':'green'})});
  $('h1').mouseleave(function(){
  	$(this).css({'color':'black'})});       //h1
 
 $('.badges').find('ul').hide();
 
 $('button').click(function(){                 //h1
  	$(this).closest('.badges').find('ul').slideToggle();
  	if(butt === 'off') {
      $('.butt').text('See Badges');
      butt = 'on';
    }else {
       $('.butt').text('Hide Badges');
      butt = 'off';
    }
  });

 $('.projects').find('img').mouseenter(function(){
    $(this).addClass('rotated');});
 $('.projects').find('img').mouseleave(function(){
    $(this).removeClass('rotated');});

   
 
});
var butt = "on"
//.addClass('.rotated');

