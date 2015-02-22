angular.module('CommunityStoreApp')

.config(['$routeProvider',
    function($routeProvider){
        var startPage = '/login';
                
        $routeProvider
        
        .when('/', {redirectTo: startPage})
        .when(startPage, {
            templateUrl: 'views/login/page.html',
            module: 'LoginView',
            controller: 'LoginViewController'
        })
        
        .when('/home', {
            templateUrl: 'views/home/page.html',
            module: 'HomeView',
            controller: 'HomeViewController'
        })
          
        .otherwise({ redirectTo: startPage });
    }
]);