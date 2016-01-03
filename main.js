/**
 * Created by Artiom on 21/12/2015.
 */

var myapp = angular.module('myapp',
	['ngFacebook', 'ui.router', 'ui.bootstrap', 'ngSanitize', 'ngCookies', 'angucomplete-alt', 'multi-select', 'angular-cache', 'ngGeolocation', 'uiGmapgoogle-maps']);

myapp.config(['$facebookProvider', function($facebookProvider){
	$facebookProvider.setAppId('655857134557595');
	$facebookProvider.setVersion('v2.5');
	$facebookProvider.setPermissions("public_profile,email");
}]);

myapp.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: 'AIzaSyCCKsEZwijdGJpCMwnB5twipBvGYvD7W5Q',
		v: '3.20', //defaults to latest 3.X anyhow
		libraries: 'weather,geometry,visualization'
	});
}]);

myapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/main");

	$stateProvider.state('login', {
		url:"/login",
		templateUrl: "view/login.html"
	}).state('main', {
		url: '/main',
		templateUrl: 'view/mainSearch.html'
	})

}]);

myapp.run(['$rootScope', '$geolocation', function($rootScope, $geolocation){
	// If we've already installed the SDK, we're done
	if (document.getElementById('facebook-jssdk')) {return;}

	// Get the first script element, which we'll use to find the parent node
	var firstScriptElement = document.getElementsByTagName('script')[0];

	// Create a new script element and set its id
	var facebookJS = document.createElement('script');
	facebookJS.id = 'facebook-jssdk';

	// Set the new script's source to the source of the Facebook JS SDK
	facebookJS.src = '//connect.facebook.net/es_LA/all.js';

	// Insert the Facebook JS SDK into the DOM
	firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
	//-------------------------------------------------------------------------
}]);