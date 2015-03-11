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
    
    // accent
    $mdThemingProvider.definePalette('app-accent-pallete',{
        '50': '#fbfdf8',
        '100': '#f5faf0',
        '200': '#eff7e6',
        '300': '#e1f0d0',
        '400': '#b3dc88',
        '500': '#98cf5c',
        '600': '#71ab32',
        '700': '#5d8d29',
        '800': '#3f601c',
        '900': '#20300e',
        'A100': '#b3dc88', //400
        'A200': '#ffffff', 
        'A400': '#3f601c', // 800
        'A700': '#20300e', //900
        'contrastDefaultColor': 'light',
        'contrastLightColors': '600 700 800 900'
    });
    
    // warn
    $mdThemingProvider.definePalette('app-warn-pallete',{
        '50': '#fff9f5',
        '100': '#fff4eb',
        '200': '#ffecdd',
        '300': '#ffdcc1',
        '400': '#feac6e',
        '500': '#fe8a32',
        '600': '#df6101',
        '700': '#b95001',
        '800': '#7e3701',
        '900': '#401c01',
        'A100': '#808080',
        'A200': '#cccccc',
        'A400': '#efefef',
        'A700': '#ffffff',
        'contrastDefaultColor': 'light',
        'contrastLightColors': '800 900',
        'contrastStrongLightColors': '800 900'
    });
    
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
    
    .primaryPalette('app-primary-pallete',{
        'hue-2': '600' // use this shade in html: <code>class="md-hue-2"</code>
    })
    
    .accentPalette('app-accent-pallete',{
        'hue-1': '500'
    })
    
    .warnPalette('app-warn-pallete');
//    .backgroundPalette('app-background-pallete');
})


/*
 * Main Controller
 */
.controller('MainViewController', ['$scope', function($scope){
    
    $scope.appTitle = 'CommunityStore';

}]);