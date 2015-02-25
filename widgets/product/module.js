'use strict';

/**
 * Application Header Widget
 */
angular.module('Product', [])

.directive('product', function(){
    return {
        restrict: 'E',
        templateUrl: 'widgets/product/template.html',
        replace: true
    };
});