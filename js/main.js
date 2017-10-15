var map
var service;
var infowindow;
var search;
var list = [];
var button = document.getElementById('button');
var searchResults = document.getElementById('searchResults')

button.addEventListener('click', function() {
	search = document.getElementById('location').value;
})

function init() {
	//If geolocation is disabled, map will be centered in San Francisco
	var mapProp = {
		center: new google.maps.LatLng(37.788890, -122.3938104),
		zoom: 12,
		mapTypeId: google.maps.MapTypeId.ROADMAP	
	}
	if (navigator.geolocation) {
     	navigator.geolocation.getCurrentPosition(function (position) {
	        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	         map.setCenter(initialLocation);
     	}, errorCallback);
 	}
 	//If geolocation is disabled
 	function errorCallback(error) {
 		if (error.code == error.PERMISSION_DENIED) {
 			alert('You have disallowed geolocation on your computer')
 		}
 	}

	map = new google.maps.Map(document.getElementById('googleMap'), mapProp)
}

function initialize() {
	//Make sure a location is definied
	if (search !== "") {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
		   		initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		    	map.setCenter(initialLocation);
	   		 }, errorCallback);		

	   		map = new google.maps.Map(document.getElementById('googleMap'), {
				center: initialLocation,
				zoom: 12,
				mapTypeId: google.maps.MapTypeId.ROADMAP	
			});

			request();
		}
		//If geolocation is disabled run the app with SF at the center
		function errorCallback(error) {
	 		if (error.code == error.PERMISSION_DENIED) {
	 			map = new google.maps.Map(document.getElementById('googleMap'), {
					center: new google.maps.LatLng(37.788890, -122.3938104),
					zoom: 12,
					mapTypeId: google.maps.MapTypeId.ROADMAP	
				});

				request();
	 		}
 		}
 	//If location is not defined
	} else {
		alert("You must define a location")
	}
		
}

function callback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (i = 0; i < results.length; i++) {
			var place = results[i];
			createMarker(results[i]);
		}
		//Clear the resulting list everytime Search button is presed
		if ($('#searchResults').is(':empty')){
			for(j = 0; j < results.length; j++) {
				searchResults.innerHTML += '<li id="' + j + '" class="animated bounceInUp">' + results[j].name + '</li>';				
			}
		} else {
			$('#searchResults').empty();
			for(j = 0; j < results.length; j++) {
				searchResults.innerHTML += '<li id="' + j + '" class="animated bounceInUp">' + results[j].name + '</li>';				
			}	
		}
		document.getElementById('0').addEventListener('click', function() {
			var html = "<b>" + results[0].name + "</b> <br/>" + results[0].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[0]);
		})		
		document.getElementById('1').addEventListener('click', function() {
			var html = "<b>" + results[1].name + "</b> <br/>" + results[1].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[1]);
		})			
		document.getElementById('2').addEventListener('click', function() {
			var html = "<b>" + results[2].name + "</b> <br/>" + results[2].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[2]);
		})			
		document.getElementById('3').addEventListener('click', function() {
			var html = "<b>" + results[3].name + "</b> <br/>" + results[3].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[3]);
		})			
		document.getElementById('4').addEventListener('click', function() {
			var html = "<b>" + results[4].name + "</b> <br/>" + results[4].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[4]);
		})			
		document.getElementById('5').addEventListener('click', function() {
			var html = "<b>" + results[5].name + "</b> <br/>" + results[5].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[5]);
		})			
		document.getElementById('6').addEventListener('click', function() {
			var html = "<b>" + results[6].name + "</b> <br/>" + results[6].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[6]);
		})			
		document.getElementById('7').addEventListener('click', function() {
			var html = "<b>" + results[7].name + "</b> <br/>" + results[7].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[7]);
		})			
		document.getElementById('8').addEventListener('click', function() {
			var html = "<b>" + results[8].name + "</b> <br/>" + results[8].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[8]);
		})			
		document.getElementById('9').addEventListener('click', function() {
			var html = "<b>" + results[9].name + "</b> <br/>" + results[9].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[9]);
		})			
		document.getElementById('10').addEventListener('click', function() {
			var html = "<b>" + results[10].name + "</b> <br/>" + results[10].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[10]);
		})			
		document.getElementById('11').addEventListener('click', function() {
			var html = "<b>" + results[11].name + "</b> <br/>" + results[11].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[11]);
		})			
		document.getElementById('12').addEventListener('click', function() {
			var html = "<b>" + results[12].name + "</b> <br/>" + results[12].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[12]);
		})			
		document.getElementById('13').addEventListener('click', function() {
			var html = "<b>" + results[13].name + "</b> <br/>" + results[13].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[13]);
		})			
		document.getElementById('14').addEventListener('click', function() {
			var html = "<b>" + results[14].name + "</b> <br/>" + results[14].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[14]);
		})			
		document.getElementById('15').addEventListener('click', function() {
			var html = "<b>" + results[15].name + "</b> <br/>" + results[15].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[15]);
		})			
		document.getElementById('16').addEventListener('click', function() {
			var html = "<b>" + results[16].name + "</b> <br/>" + results[16].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[16]);
		})			
		document.getElementById('17').addEventListener('click', function() {
			var html = "<b>" + results[17].name + "</b> <br/>" + results[17].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[17]);
		})			
		document.getElementById('18').addEventListener('click', function() {
			var html = "<b>" + results[18].name + "</b> <br/>" + results[18].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[18]);
		})			
		document.getElementById('19').addEventListener('click', function() {
			var html = "<b>" + results[19].name + "</b> <br/>" + results[19].formatted_address;
			infowindow.setContent(html)
			infowindow.open(map, list[19]);
		})		

	}
}

function createMarker(place) {
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location,
		animation: google.maps.Animation.DROP
	});

	google.maps.event.addListener(marker, 'click', function() {
		var html = "<b>" + place.name + "</b> <br/>" + place.formatted_address;
		infowindow.setContent(html);
		infowindow.open(map, this);
	});
	//Clear the list array everytime Search button is pressed
	if ($('#searchResults').is(':empty')) {
		list.push(marker);
	} else {
		$('#searchResults').empty();
		list = [];
		list.push(marker);
	}
}

function request() {

	var request = {
		location: map.center,
		radius: 8047,
		query: search
	}
	infowindow = new google.maps.InfoWindow();

	service = new google.maps.places.PlacesService(map);
	service.textSearch(request, callback);
}

google.maps.event.addDomListener(window, 'load', init)
google.maps.event.addDomListener(button, 'click', initialize)



