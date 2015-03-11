'use strict';

/**
 * Application Header Widget
 */
angular.module('Header', [])

.directive('appHeader', function(){
    return {
        restrict: 'E',
        templateUrl: 'widgets/header/template.html',
        replace: true
    };
})

/*
 * @ngdoc controller
 * @name HeaderController
 * @module Header
 *
 */
.controller('HeaderController', function($scope, $state){
    $scope.tabs = [{
        pageUrl: '.store',
        text: 'Store'
    },{
        pageUrl: '.profile',
        text: 'Profile'
    },{
        pageUrl: '.about',
        text: 'About'
    }];
        
    $scope.changePage = function(tab){
        var level = $state.is('home') ? '' : '^';
        $state.go(level + tab.pageUrl);
    };
});