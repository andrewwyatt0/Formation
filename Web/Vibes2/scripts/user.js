//BrowserSize
var browsersize=800;

//Onload hide menu
menuformat();

//Handle window resize on menu items
$(window).on("resize", function(){
	menuformat();
});

//funstion to handle menus
function menuformat(){
	if($(document).width() >= browsersize)
	{
		$("nav ul").show();
		$("#hamburger").hide();
		$("nav ul").addClass("normalmenu");
		$("nav ul").removeClass("burgermenu");
	}
	else
	{
		$("nav ul").hide();
		$("#hamburger").show();
		$("nav ul").removeClass("normalmenu");
		$("nav ul").addClass("burgermenu");
	}
}

// Burger Click
$('#hamburger').on("click", function(){
	$("nav ul").slideDown(400);
	$('#hamburger').hide();
});

//Hide rolldown menu on mouse off
$("header").mouseleave(function(){

	if(document.body.clientWidth <= browsersize)
	{
		$("nav ul").slideUp(400, null, function(){
									$('#hamburger').fadeIn(100);
								});
	}

});


////////////////////////////////
// Table

//resize
/*
$(window).resize(function(){
	$(".photoTableDiv").css("height",  $(".photoTableTd").css("width") );

});
*/
//




////////////////////////////////
//Jquery
$( function() {
	$( "#accordion" ).accordion({
	  heightStyle: "content"
	});
 } );

