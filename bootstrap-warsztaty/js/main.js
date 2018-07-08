'use strict';
$(function () {

$(window).scroll(function(){
   if($(document).scrollTop()>20){
       $("#main-nav").css(
       'background-color', 'rgba(14, 216, 214, 0.5)');
   } else {
      $("#main-nav").css(
     'background-color', 'rgba(14, 216, 214, 0)' ); 
   }
});
    
});