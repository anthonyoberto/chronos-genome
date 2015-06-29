

$(document).ready(function() {

	// NAV ACTIVITY
	$('nav li').click(function() {
		$('nav li').not(this).removeClass('current');
	    
	    if($(this).hasClass('current')){
	    	return false;
	    }
		
		$(this).toggleClass('current');
	});


	// MESSAGES DROPDOWN
	$('#messages').click(function() {
		$('#messages-dropdown').toggleClass('hidden');
	});


	//FEATURED IMAGE CHANGE
	$('.featured-category').click(function() {
		$('.featured-category').not(this).removeClass('active');
	    
	    if($(this).hasClass('active')){
	    	return false;
	    }
		
		$(this).toggleClass('active');
	});

	$(function(){
	    $('#Container').mixItUp();  
	});

});