/**
 * Created by Artiom on 30/12/2015.
 */

myapp.controller('mainSearchCtrl', ['$scope', 'uiGmapGoogleMapApi', '$geolocation', function($scope, uiGmapGoogleMapApi, $geolocation){

	$geolocation.getCurrentPosition({ timeout: 60000}).then(function(position){
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

	uiGmapGoogleMapApi.then(function(maps) {

	});

}]);