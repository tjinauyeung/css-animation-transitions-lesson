(function(){
  // Init Controller
  var controller = new ScrollMagic.Controller();

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

})();