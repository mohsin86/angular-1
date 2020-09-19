var app = angular.module('CalendarApp', ['ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'DayController',
            templateUrl: 'views/day.html'
        })
        .when('/event/:id', {
            controller: 'EventController',
            templateUrl: 'views/event.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});