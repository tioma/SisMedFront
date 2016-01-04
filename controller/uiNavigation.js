/**
 * Created by Artiom on 04/01/2016.
 */
myapp.controller('uiNavigationCtrl', ['$scope', '$facebook', function($scope, $facebook){

	$scope.isLoggedIn = false;
	$scope.user = {};

	$facebook.getLoginStatus().then(function(result){
		console.log(result);
		if (result.status == 'connected'){
			$facebook.api("/me?fields=name,email").then(
				function(userData) {
					$scope.user = userData;
					console.log(userData);
					//$scope.welcomeMsg = "Welcome " + response.name;
					$scope.isLoggedIn = true;
				},
				function(err) {
					console.log(err);
					$scope.welcomeMsg = "Please log in";
				});
			console.log($scope.welcomeMsg);
		}
	});

}]);