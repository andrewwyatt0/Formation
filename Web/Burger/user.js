/**************** User Functions ******************/

			function modWidth(mappedImg, e){
			// Calculate decalage due to window resize
				var modValue=0;
				var winWidth = $(window).width(); //HTML document(document) of browser viewport (window)
				var imgWidth = $(mappedImg).width();

				if (winWidth >= imgWidth)
				{
					modValue = (winWidth - imgWidth)/2 ;
				}

				return modValue;
			};


			function tooltipShow(mappedImg,targetID,e){

					$(targetID+"Tooltip").text($(this).attr("alt"))
										  	.css({"top": event.pageY, "left": event.pageX - modWidth(mappedImg,e) })
										  	.slideDown(200);
					$(targetID+"Info").slideDown(200);

			};

			function tooltipHide(targetID,e){

					$(targetID+"Tooltip").slideUp(100);
					$(targetID+"Info").slideUp(100 );

			};

			function tooltipMove(mappedImg,targetID,e){
				$(targetID+"Tooltip").css({
				   left:  e.pageX  - modWidth(mappedImg,e) ,
				   top:   e.pageY
				});

			};

			function showHide(mappedImg,targetID){

				$(targetID).mouseenter(function(event){
					tooltipShow(mappedImg,targetID,event);
				});

				$(targetID).mouseleave(function(){

					tooltipHide(targetID);

				});


				$(document).on('mousemove', function(event){
					tooltipMove(mappedImg,targetID,event);

				});

			};

			/************** Event methods *****************/

			showHide("#burger","#beef");
			showHide("#burger","#bread");
			showHide("#burger","#tomato");
