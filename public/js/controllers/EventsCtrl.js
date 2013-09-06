'use strict';

/* Controllers */

var controllerName = 'EventsCtrl';

angular.module(controllerName, []).
    controller(controllerName, function ($scope, $http) {

        var eventOne = {
            heading: 'Best Lee Sin',
            body: '1v1 top. Lee Sin Only',
            link: '',
            image: 'img/event.png'
        };

        var eventTwo = {
            heading: 'Diamond Only',
            body: '5v5 Diamond rank only',
            link: '',
            image: 'img/event.png'
        };

        var eventThree = {
            heading: 'Bronze Div',
            body: 'Bronze division tournament! Noob spree!',
            link: '',
            image: 'img/event.png'
        };

        $scope.events = [eventOne, eventTwo, eventThree];

    });
