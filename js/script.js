(function(){
	// SETTING VARS FOR ELEMENTS WE USE
	var landingBg = document.querySelector('.landing_background'),
			about = document.querySelector('#about'),
			menu = document.querySelector('#hidden_menu'),
			resumeArticles = document.querySelectorAll('.resume_article');

	// FADE-IN HERO IMAGE ON LOAD
	setTimeout(function(){
		landingBg.classList.add("has-landed");
	}, 500);

	// SETTING UP SCROLL EVENTS USING WAYPOINTS.JS
	new Waypoint({
	  element: document.querySelector('#about'),
	  handler: function(direction) {
	  	if ( direction === "down" ) {
	    	menu.classList.add("is-active");
	    } else {
	    	menu.classList.remove("is-active");
	    }
	  }
	});

	new Waypoint({
		element: document.querySelector('#resume'),
		handler: function(direction) {
			// converting nodelist into array to use forEach function
			var resumeArray = [].slice.call(resumeArticles);

			if ( direction === "down" ) {
				resumeArray.forEach(function(article){
					article.classList.add('is-active')
				});
			} else {
				resumeArray.forEach(function(article){
					article.classList.remove('is-active')
				});
			}
		}
	});

  // TYPED.JS MESSAGE 
  $("#typed").typed({
    strings: ["Interested?", "Want to know more?", "Get in touch?", "Meow?", "Prrrrrrrrrr?"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    showCursor: false
  });

})();