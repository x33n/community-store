/**
 * Load all JS dependencies, then bootstrap the application.
 */
$script([
    //widgets
    'widgets/header/module.js',
    'widgets/product/module.js',
    //views
    'views/main/controller.js',
    'views/login/controller.js',
    'views/home/controller.js',
    'views/store/controller.js',
    'views/profile/controller.js',
    'views/about/controller.js',
    //app files
    'app.module.js'

], 'appDependencies');


// finally load routes
$script.ready('appDependencies', function(){
    $script([
        'app.routes.js'

    ], function(){
        angular.bootstrap(document, ['CommunityStoreApp']);
    });
});