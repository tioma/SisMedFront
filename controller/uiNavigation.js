/**
 * Created by Artiom on 04/01/2016.
 */
myapp.controller('uiNavigationCtrl', ['$scope', '$facebook', function($scope, $facebook){

	$scope.isLoggedIn = false;
	$scope.user = {};

	$scope.logOut = function(){
		$scope.isLoggedIn = false;
	};

	//Provisorio-- en realidad la integracion de fb solo se veria en el login, creando un user en la app, para luego usar ese id
	$facebook.getLoginStatus().then(function(result){
		console.log(result);
		if (result.status === 'connected'){
			//conectado en fb y en la app
			$facebook.api("/me?fields=name,email,picture").then(
					function(userData) {
						$scope.user = userData;
						console.log(userData);
						//$scope.welcomeMsg = "Welcome " + response.name;
						$scope.isLoggedIn = true;
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

}]);