

			// Show LightBox //
			var activeImage = "";


			$("li").on("click", function(){

					activeImage = $(this).children("img");
					console.log("monImg",activeImage);

					$("#lightbox-img").css(
						"background-image", "url('"+activeImage.attr("src")+"')"
					);
					$("#lightbox-text").html(activeImage.attr("alt"));

					$("#overlay").fadeIn(300);
					$("#lightbox").fadeIn(1400);

					// reset arrows
					$("#lightbox-right").show();
					$("#lightbox-left").show();
					// handle arrows on first image
					if( activeImage.parent().is(':first-child') )
					{
						$("#lightbox-left").hide();
					}
					// handle arrow on last image
					if ( activeImage.parent().is(':last-child') )
					{
						$("#lightbox-right").hide();
					}
			});


			$("#lightbox-close").on("click",function(){
				$("#lightbox").fadeOut(600);
				$("#overlay").fadeOut(300);
			});



			///////// Light box images advance/recule ///////////

			// Left CLick
			$("#lightbox-left").on("click", function(){

					//decrement the active image
					activeImage= activeImage.parent().prev('li').children("img");

					//slide out
					$("#lightbox-img").hide('slide', {direction: 'right'}, 300, function(){
													$("#lightbox-img").css("background-image", "url('"+activeImage.attr("src")+"')")
												}); //Change background
					$("#lightbox-text").hide('slide', {direction: 'right'}, 300, function(){
													$("#lightbox-text").html(activeImage.attr("alt"))
												}); //Change text

					//slide in
					$("#lightbox-img").show('slide',{direction:'left'},700);
					$("#lightbox-text").show('slide',{direction:'left'},700);


					//make sure right arrow is shown
					$("#lightbox-right").show();

					// disactivate arrow on last image
					if( activeImage.parent().is(':first-child') )
					{
						$("#lightbox-left").hide();
					}
			});



			// Right CLick
			$("#lightbox-right").on("click", function(){

					//increment the active image
					activeImage= activeImage.parent().next('li').children("img");

					//slide out
					$("#lightbox-img").hide('slide', {direction: 'left'}, 300, function(){
													$("#lightbox-img").css("background-image", "url('"+activeImage.attr("src")+"')")
												}); //Change background
					$("#lightbox-text").hide('slide', {direction: 'left'}, 300, function(){
													$("#lightbox-text").html(activeImage.attr("alt"))
												}); //Change text

					//slide in
					$("#lightbox-img").show('slide',{direction:'right'},700);
					$("#lightbox-text").show('slide',{direction:'right'},700);


					//make sure left arrow is shown
					$("#lightbox-left").show();

					// disactivate arrow on last image
					if ( activeImage.parent().is(':last-child') )
					{
						$("#lightbox-right").hide();
					}

			});


