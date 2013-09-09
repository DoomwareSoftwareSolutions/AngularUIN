'use strict';

/* Controllers */

var controllerName = 'EventRegisterCtrl';

angular.module(controllerName, []).
    controller(controllerName, ['$scope', function ($scope) {

        $scope.$emit("BackgroundChange", "event-register-background");

    }]);