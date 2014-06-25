$(document).ready(function(){

	// Skype.ui({
	//   "name": "chat",
	//   "element": "skypeme",
	//   "participants": ["flashbaggg"],
	//   "imageSize": 32
	// });

	$('.si').mouseover(function(){
		$(this).animate({width: '140px'
			// , height: '60px'
			// , 'margin-top': '4px'
		}, 500,function(){
			$(this).animate({width: '135px'
				// , height: '64px'
				// , 'margin-top': '0px'
			},100)
		});
	});

	$('.si').mouseleave(function(){
		$(this).animate({width: "125px"
			// , height: '64px'
		}, 200);
	});

});