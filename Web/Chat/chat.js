$( document ).ready(function() {


	// Wag the tail
	$("div#body").on("click",function(){
		var targetObject=".tailContainer";
		var aniTransition = "transform 0.2s";
		var aniDelay=100;

		for (i = 0; i < 200; i++)
		{
			if( i%2==0)
			{
				console.log("even", i);
				var aniID = delayAni(".tailContainer",aniDelay,aniTransition,-120 );
			}
			else
			{
				var aniID = delayAni(".tailContainer",aniDelay,aniTransition,-10 );
				console.log("odd", i);
			}
		}
	});

});

//////////////////////functions///////////////////////////////

function delayAni(targetObject,delayTime, aniTransition, aniTransformAngle ){

	$(targetObject)
  				.delay(delayTime)
  				.queue(function (next) {
					$(targetObject).css({ 	transition: aniTransition,
										 	transform: 'rotate(' + aniTransformAngle + 'deg)' });
					next();
				});

};



