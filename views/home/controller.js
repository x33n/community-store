'use strict';

/**
 * Home page - responsible for main frame which contains the other pages of the application
 */
angular.module('HomeView', [])

.controller('HomeViewController', function($scope){
    
    $scope.pageClass = 'page-home';
    
});