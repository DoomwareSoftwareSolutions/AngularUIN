'use strict';

// Declare app level module which depends on filters, and services

var depList = [
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'EventService',
    'BackgroundCtrl',
    'SignInCtrl',
    'HomeCtrl',
    'EventsCtrl',
    'NavCtrl'
]

angular.module('myApp', depList).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/HomeView',
                controller: 'HomeCtrl'
            }).
            when('/events', {
                templateUrl: 'partials/EventsView',
                controller: 'EventsCtrl'
            }).
            when('/signin', {
                templateUrl: 'partials/SignInView',
                controller: 'SignInCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });

        $locationProvider.html5Mode(true);
    });
