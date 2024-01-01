document.addEventListener("DOMContentLoaded", function(){

	var loading = new TimelineMax();
	loading.fromTo(".name",0.6,{ 
		autoAlpha: 0,
		y: 20
	},{ 
		autoAlpha: 1,
		y: 0
	})
	
	.fromTo("#intro",0.6,{ 
		autoAlpha: 0,
	},{ 
		autoAlpha: 1,
	})

	.fromTo("#btn1",0.6,{ 
		autoAlpha: 0,
		x: -20
	},{ 
		autoAlpha: 1,
		x: 0
	},"-=0.6")

	.fromTo("#btn2",0.6,{ 
		autoAlpha: 0,
		x: 20
	},{ 
		autoAlpha: 1,
		x: 0
	},"-=0.6")

	.fromTo("#intro2",0.6,{ 
		autoAlpha: 0,
	},{ 
		autoAlpha: 1,
	})
	;

})