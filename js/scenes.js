(function(){
  // Init Controller
  var controller = new ScrollMagic.Controller();

 	new ScrollMagic.Scene({
 		triggerElement: "#about",
 		offset: 300
 	})
	.setClassToggle('#hidden_menu', 'is-active')
	.addTo(controller);
})();