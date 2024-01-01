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

$(document).ready(function() {
  $('#menu-toggle, #menu > ul > li > a').click(function(e) { 
      var $toggle = $(this); 
      var $menu = $('#' + $(this).attr('aria-controls')); 
  
      if ($menu.attr('aria-hidden') == 'true') {
          $('body').addClass('open');
          $menu.attr('aria-hidden', 'false');
          $toggle.attr('aria-expanded', 'true');
      }
      else if ($menu.attr('aria-hidden') == 'false') {
          $('body').removeClass('open');
          $menu.attr('aria-hidden', 'true');
          $toggle.attr('aria-expanded', 'faremove'); 
      }
  });
});