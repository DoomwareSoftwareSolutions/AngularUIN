'use strict';

var depList = ['myApp.filters', 'myApp.services', 'myApp.directives', 'AppCtrl', 'OneCtrl', 'TwoCtrl'];

// Declare app level module which depends on filters, and services
angular.module('myApp', depList).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	  
    $routeProvider.when('/view1', {templateUrl: 'partial/1', controller: 'OneCtrl'});
    $routeProvider.when('/view2', {templateUrl: 'partial/2', controller: 'TwoCtrl'});
    
    $routeProvider.otherwise({redirectTo: '/view1'});
    
    $locationProvider.html5Mode(true);
    
  }]);
