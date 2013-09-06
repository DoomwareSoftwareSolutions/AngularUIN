'use strict';

/* Controllers */

var controllerName = 'EventsCtrl';

angular.module(controllerName, []).
    controller(controllerName, ['$scope', 'EventService', function ($scope, EventService) {

        $scope.$emit("BackgroundChange", "events-background");

        $scope.events = EventService.getEvents();

    }]);
