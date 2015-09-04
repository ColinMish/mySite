$(document).ready(function(){

	$('.header').ready(function(){
		$('.header').slideDown(800);
	});

	$('#myPic').load(function(){
		$('.jumbotron').fadeIn(1400);
	});

	$("#projectsButtonProjects, #projectsButtonGlyph").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects").offset().top
	    }, 700);
	});

	$("#helloButtonColin, #helloButtonAbout").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#hello").offset().top
	    }, 700);
	});
	
});