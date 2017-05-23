$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > '2') {
    	$('#nav').addClass('shrink');
    		
    }
    else {
    $('#nav').removeClass('shrink');
     }
  });
  });
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() <'2') {
    	$('footer').addClass('disp');
    		
    }
    else {
    $('footer').removeClass('disp');
     }
  });
  });