'use strict';

/**
 * Application Header Widget
 */
angular.module('AppHeader', [])

.directive('appHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'widgets/appheader/template.html',
        replace: true
    };
})

/*
 * @ngdoc controller
 * @name HeaderController
 * @module AppHeader
 *
 */
.controller('HeaderController', function($scope, $location){
    
    $scope.navItems = [{
        pageUrl: 'home',
        text: 'Shop'
    },{
        pageUrl: 'profile',
        text: 'Profile'
    },{
        pageUrl: 'about',
        text: 'About'
    }];
    
    //set "active" css on selected menu item
    $scope.isActive = function(viewLocation){ 
        var path = $location.path();
        path = path.substr(1, path.length);
        return viewLocation.toString() === path;
    };
});