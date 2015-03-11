'use strict';

/**
 * Login page
 */
angular.module('LoginView', [])

.controller('LoginViewController', function($scope, $state, $mdBottomSheet){
    
    $scope.pageClass = 'page-login';
    $scope.stateChange = 'loginMode';
    
    $scope.showBottomBar = function(event){
        $mdBottomSheet.show({
            templateUrl: 'views/login/bottom-bar.html',
            targetEvent: event
        });
    };
    
    $scope.changeFormState = function(event){
        if(event.target.id === 'loginFormTrigger'){
            $scope.stateChange = 'registerMode';
        }
        else{
            $scope.stateChange = 'loginMode';
        }
    };
    
    $scope.doLogin = function(form){
        if(!form.$valid){
            return;
        }
        $state.go('home.store');
    };
    
});