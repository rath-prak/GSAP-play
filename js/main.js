$(document).ready(function(){

	var tl = new TimelineMax({repeat: -1});
	var letters = $(".letter").toArray();

	tl.staggerFrom(letters, 3, {
		y: "-400", 
		ease: Bounce.easeOut, 
		// repeat: -1,
		repeatDelay: .5
	}, .5)

	$('#pause').click(function(){
		tl.pause();
	})

	$('#resume').click(function(){
		tl.resume();
	})

	var circle = $(".circle")
	var plane = $(".fa-plane")
	
	circle.hover(function(){
		TweenMax.to(circle, .5, {
			x: "50px"
		})
		TweenMax.to(plane, .5, {
			rotation : "360"
		})
	}, function(){
		TweenMax.to(circle, .5, {
			x: "0px"
		})
		TweenMax.to(plane, .5, {
			rotation : "0"
		})
	})

});


