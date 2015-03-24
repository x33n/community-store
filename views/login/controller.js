'use strict';

/**
 * Login page
 */
angular.module('LoginView', [])


/*
 * @ngdoc directive
 * @name flipLoginPanel
 * @module CoomunityStore.LoginView
 */
.directive('flipLoginPanel', function(){
    return {
        restrict: 'E',
        template: '<a ng-click="flipPanels($event)" ng-transclude></a>',
        replace: true,
        transclude: true
    };
})


.controller('LoginViewController', function($scope, $state, $mdBottomSheet){
    
    $scope.pageClass = 'page-login';
    
    $scope.stateChange = 'loginMode';
    $scope.flipPanels = function(event){
        var buttonEl = angular.element(event.target);
        var parent = buttonEl.parents('form');
        
        parent.toggleClass('animated');
        $scope.stateChange = ($scope.stateChange === 'loginMode') ? 'registerMode' : 'loginMode';
        event.preventDefault();
    };
    
    $scope.showBottomBar = function(event){
        $mdBottomSheet.show({
            templateUrl: 'views/login/bottom-bar.html',
            targetEvent: event
        });
    };
    
    $scope.doLogin = function(form){
        if(!form.$valid){
            return;
        }
        $state.go('home.store');
    };
    
});