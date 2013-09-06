'use strict';

/* Controllers */

angular.module('AppCtrl', []).
controller('AppCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.name = "UIN DEVS";
}]);

angular.module('OneCtrl', []).
controller('OneCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.name = "Page 1";
}]);

angular.module('TwoCtrl', []).
controller('TwoCtrl', ['$scope', '$location', function($scope, $location) {
	$scope.name = "Page 2";
}]);
