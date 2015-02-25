'use strict';

/**
 * Responsible for managing main aspects of the application
 */
angular.module('MainView', [])


/*
 * On intialization - create a custom theme for this application.
 */
.config(function($mdThemingProvider){
    // Extend the grey theme with a few different colors
    var appPrimaryPallete = $mdThemingProvider.extendPalette('grey',{
//        '0': '#ffffff',
//        '50': '#fafafa',
//        '100': '#f5f5f5',
//        '200': '#eeeeee',
//        '300': '#e0e0e0',
//        '400': '#bdbdbd',
        '500': '#00b6ad', //custom blue
        '600': '#00837D', //custom 500 darken
//        '700': '#616161',
//        '800': '#424242',
//        '900': '#212121',
//        '1000': '#000000',
//        'A100': '#ffffff',
//        'A200': '#eeeeee',
//        'A400': '#bdbdbd',
        'A700': '#6e5e56', //custom brown
        'contrastDefaultColor': 'light', //white fonts color
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
        'A200': '#b2ff59',
        'A400': '#76ff03',
        'A700': '#64dd17',
        'contrastDefaultColor': 'dark',
        'contrastLightColors': '800 900',
        'contrastStrongLightColors': '800 900'
    });
    
    // Register the new color palette map with the name <code>appPrimaryPallete</code>
    $mdThemingProvider.definePalette('appPrimaryPallete', appPrimaryPallete);
    
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default').primaryPalette('appPrimaryPallete',{
        'hue-1': 'A700' // use this shade for the <code>class="md-hue-1"</code>
    })
    
    //accent - lighter palette for secondary elements
    .accentPalette('app-accent-pallete', {
        'default': '400', // use shade 500 for default, and keep all other shades the same
        'hue-1': '50'
    });
    
})


/*
 * Main Controller
 */
.controller('MainViewController', ['$scope', function($scope){
    
    $scope.appTitle = 'CommunityStore';
    $scope.isPageEffectActive = false;

}]);