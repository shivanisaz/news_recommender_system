myApp.controller('navCtrl', ['$scope','myService', function($scope,myService){
	$scope.myService = myService;
	
	$scope.myService.getAllCategories();

}]);