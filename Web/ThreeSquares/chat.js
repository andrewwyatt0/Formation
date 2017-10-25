
	$("div#head").on("click",function(){
		console.log("Click");
		/*
		$("#tail").animate({
				height:"130px",
				bottom:"105px",
				transform:"rotate(-70deg)"
			},500,function(){}
		);
		*/
		$('#tail').animate({  borderSpacing: -90 }, {
				step: function(now,fx) {
			  		$(this).css('transform','rotate(-70deg)');
                    $(this).css('height','130px');
                    $(this).css('bottom','105px');
				},
				duration:30000
			},'linear');

	});


