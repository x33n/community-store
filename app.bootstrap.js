/**
 * Load all JS dependencies, then bootstrap the application.
 */
$script([
    //views
    'views/main/controller.js',
    'views/login/controller.js',
    'views/home/controller.js',
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