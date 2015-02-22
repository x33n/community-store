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
    var appPallete = $mdThemingProvider.extendPalette('grey',{
        '0': '#ffffff',
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#00b6ad', //custom blue
        '600': '#00837D', //custom 500 darken
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        '1000': '#000000',
        'A100': '#ffffff',
        'A200': '#eeeeee',
        'A400': '#bdbdbd',
        'A700': '#616161',
        'contrastDefaultColor': 'light', //fonts color
        'contrastLightColors': '600 700 800 900'
  });
    
    // Register the new color palette map with the name <code>appPallete</code>
    $mdThemingProvider.definePalette('appPallete', appPallete);
    
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default').primaryPalette('appPallete',{
        'hue-1': '400' // use shade 400 for the <code>md-hue-1</code> class to be used on buttons
    });
    
    //accent - lighter palette for secondary elements
//    .accentPalette('cyan', {
//        'default': '400' // use shade 400 for default, and keep all other shades the same
//    });
    

})


/*
 * Main Controller
 */
.controller('MainViewController', ['$scope', function($scope){
    
    $scope.appTitle = 'CommunityStore';
    $scope.isPageEffectActive = false;

}]);