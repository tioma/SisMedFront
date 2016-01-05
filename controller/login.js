/**
 * Created by Artiom on 21/12/2015.
 */
myapp.controller('loginCtrl', ['$scope', '$state', '$facebook', function($scope, $state, $facebook){

	$scope.isLoggedIn = false;

	$facebook.getLoginStatus().then(function(result){
		console.log(result);
	});

	$scope.login = function() {
		$facebook.login().then(function(result) {
			console.log(result);
			if (result.status === 'connected'){
				//conectado en fb y en la app
				$facebook.api("/me?fields=first_name,last_name,email,picture").then(
						function(userData) {
							$scope.user = userData;
							console.log(userData);
							//$scope.welcomeMsg = "Welcome " + response.name;
							$scope.isLoggedIn = true;
							$state.transitionTo('main');
						},
						function(err) {
							console.log(err);
							//$scope.welcomeMsg = "Please log in";
						});
			} else if (result.status === 'not_authorized'){
				//conectado en fb pero no en la app
			} else { //status = 'unknown'
				//no está conectado en fb así que no se sabe
			}
		});
	};

	//refresh();

}]);