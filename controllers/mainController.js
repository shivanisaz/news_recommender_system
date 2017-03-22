myApp.controller('mainCtrl', ['$scope','myService', function($scope,myService){
	$scope.myService = myService;

	$scope.myService.getCurrentUser();
	// console.log("controller loaded");
}])

