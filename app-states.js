myApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('app', {
        url:'/',
        views: {
            'header': {
                templateUrl: 'partials/header.html'
            },
            'content': {
            	templateUrl: 'partials/recommendedArticles.html',
            	controller: 'mainCtrl'
            },

            'navSide':{
            	templateUrl: 'partials/navSide.html',
            	controller: 'navCtrl'
            }
        }
    })   //Dashboard
});



