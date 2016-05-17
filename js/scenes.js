(function(){
  // Init Controller
  var controller = new ScrollMagic.Controller(),
  	 	tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});

 	new ScrollMagic.Scene({
 		triggerElement: "#about",
 		offset: 300
 	})
	.setClassToggle('#hidden_menu', 'is-active')
	// .addIndicators() 
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#resume"
	})
	.setClassToggle('.resume_article', 'is-active')
	// .addIndicators()
	.addTo(controller);

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "a#top", duration: 200, triggerHook: "onLeave"})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);

	// change behaviour of controller to animate scroll instead of jump
	controller.scrollTo(function (newpos) {
		TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	});

	//  bind scroll to anchor links
	$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});

})();