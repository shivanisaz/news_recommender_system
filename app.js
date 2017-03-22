var myApp = angular.module('myApp', ['ui.router','ngMaterial','ngCookies','ngAnimate','ngTouch','ui.bootstrap','restangular']);

myApp.config(function(RestangularProvider) {
	RestangularProvider.setBaseUrl('http://10.60.70.91:3000/');
	// RestangularProvider.setBaseUrl('http://192.168.43.216:3000/');
	// RestangularProvider.setBaseUrl('http://localhost:3000/');

});

