function initialize() {
	var mapOptions = {
		center: {lat: 0, lng: 0},
		zoom: 12
	};
	var map = new google.maps.Map(document.getElementById('contactMap'), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);