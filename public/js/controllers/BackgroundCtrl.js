'use strict';

/* Controllers */

var controllerName = 'BackgroundCtrl';

angular.module(controllerName, []).
    controller(controllerName, function ($scope) {

        $scope.bgClass = '';

        $scope.$on("BackgroundChange", function (event, data) {
            $scope.bgClass = data;
            triggerDigest();
        });

        var triggerDigest = function () {
            if (!$scope.$$phase) {
                $scope.$digest();
            }
        }

    });
