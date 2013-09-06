'use strict';

var name = 'EventService';

angular.module(name, []).factory(name, ['$http', function ($http) {

    var EventService = {};

    var eventList = [];

    EventService.getEvents = function () {
        $.ajax({
            url: 'http://localhost:3000/api/events',
            async: false,
            method: 'GET'
        }).done(function (data) {
                eventList = data;
            });
        return eventList;
    }

    return EventService;

}]);