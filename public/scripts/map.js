function initialize() {
	var mapOptions = {
		center: { lat: 33.911578, lng: -118.301949},
		zoom: 14
	};

	var map = new google.maps.Map(document.getElementById('contact-map'),
						mapOptions);

	var centerMarker = new google.maps.Marker({
		position: new google.maps.LatLng(33.911578, -118.301949),
		map: map,
		title: 'Space-Lok, Inc.'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);