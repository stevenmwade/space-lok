$(document).ready(function() {
		var url = window.location.href;
	 	var page = url.substr(url.lastIndexOf('/'));
	 	// $('a[href="'+page+'"]').addClass('blue');
	 	$('a[href="'+page+'"]').css({'color' : '#2d98e8'});
});