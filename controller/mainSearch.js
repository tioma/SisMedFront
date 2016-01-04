/**
 * Created by Artiom on 30/12/2015.
 */

myapp.controller('mainSearchCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation', function($scope, uiGmapGoogleMapApi, $geolocation){

	$geolocation.getCurrentPosition({ timeout: 60000, enableHighAccuracy: true}).then(function(position){
		console.log(position);

		$scope.map = {
			center: {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			},
			zoom: 12
		};

		$scope.myPositionMarker = {
			position: {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			},
			options: {
				title: 'Mi posición'
			}
		};
	});

	$geolocation.watchPosition({
		timeout: 5,
		maximumAge: 250,
		enableHighAccuracy: true
	});

	$scope.$on('$geolocation.position.changed', function(ev, data){
		console.log(data);
	});

	// To be set by previous step
	/*$scope.chosenTown = "Roma";

	// geocode the given address
	var geocodeAddress = function(address, callback) {
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode( { 'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				callback(results[0].geometry.location);
			} else {
				console.log("Geocode was not successful for the following reason: " + status);
			}
		});
	};*/

	// google maps is ready
	uiGmapGoogleMapApi.then(function(maps) {
		// geocode chosen town
		/*geocodeAddress($scope.chosenTown, function(latLng){
			console.log(latLng);
			//$scope.map = { center: { latitude: latLng.lat(), longitude: latLng.lng() }, zoom: 12, bounds: {}};
		});*/

	});

}]);