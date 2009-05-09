x$(window).on('load',function(){
	
	var cb = function(d) {		
		var data = eval('(' + this.responseText + ')');	

		// Speakers
		for (var i = 0; i < data.sessions.length; i++) {
			x$('#speakers ul').top("<li><h1>" + data.sessions[i].speaker.name + "</h1><p>"+ data.sessions[i].speaker.bio +"</p></li>");
		}
		
		// Schedule
		for (var i = 0; i < data.sessions.length; i++) {
			x$('#schedule ul').top("<li><h1>" + data.sessions[i].speaker.name + "</h1><h3>"+ data.sessions[i].title +"</h3><p>"+data.sessions[i].description +"</p></li>");
		}
		
	}


	

	x$('#index').xhr('data.json', {callback : cb } );
});