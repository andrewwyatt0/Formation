///////////////////////////////
//
//  Simpsons_responsive
//
//  20/10/2017
//
///////////////////////////////


//////// Page Parameters ///////

// Mobile BrowserSize
var browsersize=640;
var menuHidden=true;


//////// Menu /////////////////

//Functions

function hideMenu(){
    if(document.body.clientWidth <= browsersize)
	{
		$("nav ul").slideUp(400);
        menuHidden=true;
	}
}

// Burger Click
$('#dropDown').on("click", function(){

    if(menuHidden)
    {//Show
        $("nav ul").css("display", "flex")
            .css("flex-direction", "column")
            .hide()
            .slideDown(400);
        menuHidden=false;
    }
    else
    {//Hide
       hideMenu();
    }
});

//Hide rolldown menu on mouse off
$("header").mouseleave(function(){
    hideMenu();
});

//Handle window is resized effect on Menu and aside
$(window).resize(function() {

	// Menu
	if($(window).width()>640 && menuHidden==true ){
		$("nav ul").css("display","inline-block");
	}
	else
	{
		$("nav ul").hide();
        menuHidden=true;
	}
	// Aside
	if($(window).width()>640 ){
		$("#author").show();
	}
	else
	{
		$("#author").hide();
		$('#asideHandleOut').show();
	}
});


////////// Aside /////////////////

//Show
$('#asideHandleOut').on("click", function(){
        $("#author").animate({width:'toggle'},350);
        $('#asideHandleOut').hide();
        $('#content').css("paddingRight","0");
		window.scrollTo(0,0);
});
//Hide
$('#asideHandleIn').on("click", function(){
        $("#author").animate({width:'toggle'},350);
        $('#asideHandleOut').show(400);
        $('#content').css("paddingRight","30px");

});


///////// Image Carrousel ///////////

// Left CLick
$("#imageLeft").on("click", function(){

	var activeImg=$(".articleMovie.active");

	if(activeImg.is(":first-child")){
		//console.log("FIRST .....");
		activeImg.removeClass("active");
		$(".articleMovie:last-child").addClass("active");
	}
	else
	{
		activeImg.removeClass("active");
		activeImg.prev("img").addClass("active");
	};

});

// Right CLick
$("#imageRight").on("click", function(){

	var activeImg=$(".articleMovie.active");

	if(activeImg.is(":last-child")){
		//console.log("LAST .....");
		activeImg.removeClass("active");
		$(".articleMovie:first-child").addClass("active");
	}
	else
	{
		activeImg.removeClass("active");
		activeImg.next("img").addClass("active");
	};

});
