myApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/main.html'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
    })
    .when('/user/:id', {
        templateUrl: 'partials/user.html'
    })
});
