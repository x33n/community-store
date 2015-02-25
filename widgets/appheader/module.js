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
});