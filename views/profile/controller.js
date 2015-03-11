'use strict';

/**
 * User profile page
 */
angular.module('ProfileView', [])

.controller('ProfileViewController', function($scope){
    
    Chart.defaults.global.maintainAspectRatio = false;
    Chart.defaults.global.colours[0] = { // blue
        fillColor: 'rgba(255,255,255,0)',
        strokeColor: '#00b4ac',
        pointColor: '#00b4ac',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(70,191,189,0.8)'
    };
    Chart.defaults.global.colours[1] = {
        fillColor: 'rgba(255,255,255,0)',
        strokeColor: '#92908a',
        pointColor: '#92908a',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,0.8)'
    };
    
    $scope.chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'],
        series: ['2014', '2015'],
        data: [
            [1, 5, 3, 19, 22, 5, 15, 2, 8, 25, 11, 14],
            [14, 25, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    };
    
    
    $scope.gallery = [{
        img: 'product1',
        name: 'Nullam sit',
        price: '15'
    },{
        img: 'product2',
        name: 'Lorem',
        price: '9'
    },{
        img: 'product1',
        name: 'Nullam sit',
        price: '15'
    },{
        img: 'product2',
        name: 'Lorem',
        price: '9'
    },{
        img: 'product1',
        name: 'Nullam sit',
        price: '15'
    }];


    $scope.friends = [{
        img: 'user',
        name: 'Abcd Efg'
    },{
        img: 'user',
        name: 'Abcd Efg'
    }];
});