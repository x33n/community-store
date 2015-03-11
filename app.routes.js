angular.module('CommunityStoreApp')

.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        var startPage = 'login';
        
             
        // ~~~ Redirects and Otherwise
        $urlRouterProvider
//            .when('/home', '/home.store') // set redirect from "/home" to "/home/store"
            .otherwise( '/'+ startPage );
    
        
        // ~~~ State Configurations
        $stateProvider
            .state(startPage, {
                url: '/'+ startPage,
                templateUrl: 'views/login/page.html',
                controller: 'LoginViewController'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'views/home/page.html',
                controller: 'HomeViewController'
            })

            .state('home.store', {
                url: '/store',
                templateUrl: 'views/store/page.html',
                controller: 'StoreViewController'
            })

            .state('home.profile', {
                url: '/profile',
                templateUrl: 'views/profile/page.html',
                controller: 'ProfileViewController'
            })

            .state('home.about', {
                url: '/about',
                templateUrl: 'views/about/page.html',
                controller: 'AboutViewController'
            });
    }
]);