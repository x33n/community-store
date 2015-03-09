'use strict';

/**
 * Home page
 */
angular.module('HomeView', [])

.controller('HomeViewController', function($scope){
    
    $scope.pageClass = 'page-home';
    $scope.tags = ['All', 'Newest Items', 'Trending Items', 'Best Sellers', 'Best Rated', 'Best Match', 'On Sale'];
    $scope.categories = ['Arts & Craft', 'Baby', 'Beauty', 'Books', 'Clothing & Shoes', 'Furnitures', 'Food'];

    $scope.price = {
        from: 0,
        to: 300
    };
    
    $scope.products = [{
        title: 'Some Product',
        price: '11.20',
        image: 'product1'
    },{
        title: 'Another Product',
        price: '15.00',
        image: 'product1'
    },{
        title: 'Product #3',
        price: '10.80',
        image: 'product1'
    }];
    
});