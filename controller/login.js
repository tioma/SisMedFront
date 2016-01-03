/**
 * Created by Artiom on 21/12/2015.
 */
myapp.controller('loginCtrl', ['$scope', '$facebook', function($scope, $facebook){

	$scope.isLoggedIn = false;

	$facebook.getLoginStatus().then(function(result){
		console.log(result);
	});

	$scope.login = function() {
		$facebook.login().then(function() {
			refresh();
		});
	};

	function refresh() {
		$facebook.api("/me?fields=name,email").then(
				function(response) {
					console.log(response);
					//$scope.welcomeMsg = "Welcome " + response.name;
					$scope.isLoggedIn = true;
				},
				function(err) {
					console.log(err);
					$scope.welcomeMsg = "Please log in";
				});
		console.log($scope.welcomeMsg);
	}

	//refresh();

}]);