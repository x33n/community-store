'use strict';

/**
 * Responsible for managing main aspects of the application
 */
angular.module('MainView', [])


/*
 * On intialization - create a custom theme for this application.
 */
.config(function($mdThemingProvider){
    
    // primary
    $mdThemingProvider.definePalette('app-primary-pallete',{
        '50': '#f7fefd',
        '100': '#eefcfb',
        '200': '#dffaf7',
        '300': '#c7f6f2',
        '400': '#00d8cf', 
        '500': '#00b4ac',
        '600': '#008680',
        '700': '#00706b',
        '800': '#004c49',
        '900': '#002624',
        'A100': '#A7FFEB',
        'A200': '#64FFDA',
        'A400': '#1DE9B6',
        'A700': '#00BFA5',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
    });
    
    $mdThemingProvider.definePalette('app-accent-pallete',{
        '50': '#ffffff',
        '100': '#dcedc8',
        '200': '#c5e1a5',
        '300': '#aed581',
        '400': '#98cf5c', //custom green
        '500': '#8bc34a',
        '600': '#7cb342',
        '700': '#689f38',
        '800': '#558b2f',
        '900': '#33691e',
        'A100': '#ccff90',
        'A200': '#ffffff',
        'A400': '#76ff03',
        'A700': '#64dd17',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': '800 900',
        'contrastStrongLightColors': '800 900'
    });
    
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
    
    .primaryPalette('app-primary-pallete',{
//        'default': '500', // by default use this shade for primary intentions
//        'hue-1': '50', // use this shade in html: <code>class="md-hue-1"</code>
        'hue-2': '600' // use this shade in html: <code>class="md-hue-2"</code>
//        'hue-3': 'A100' // use this shade in html: <code>class="md-hue-3"</code>
    })
    
    .accentPalette('app-accent-pallete');
//    .warnPalette('app-warn-pallete')
//    .backgroundPalette('app-background-pallete');
})


/*
 * Main Controller
 */
.controller('MainViewController', ['$scope', function($scope){
    
    $scope.appTitle = 'CommunityStore';

}]);