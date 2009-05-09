x$(window).on('load',function(){
	
	var cb = function(d) {		
		var data = eval('(' + this.responseText + ')');	
		console.log(data)	;

	}

	x$('#index').xhr('data.json', {callback : cb } );
});