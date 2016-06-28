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
	
});