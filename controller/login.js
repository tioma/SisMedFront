/**
 * Created by Artiom on 21/12/2015.
 */
myapp.controller('loginCtrl', ['$scope', '$facebook', function($scope, $facebook){

	$scope.isLoggedIn = false;
	$scope.login = function() {
		$facebook.login().then(function() {
			refresh();
		});
	};

	function refresh() {
		$facebook.api("/me").then(
				function(response) {
					$scope.welcomeMsg = "Welcome " + response.name;
					$scope.isLoggedIn = true;
				},
				function(err) {
					$scope.welcomeMsg = "Please log in";
				});
		console.log($scope.welcomeMsg);
	}

	refresh();

}]);