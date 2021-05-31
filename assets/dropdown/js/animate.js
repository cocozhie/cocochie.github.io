$(document).ready(function(){
    $('.animate').css({opacity:'0.5'});
    
    $('.animate').hover(function(){
        $(this).stop().animate({opacity:'1'});
    },function(){
        $(this).stop().animate({opacity:'0.5'});
    });
});