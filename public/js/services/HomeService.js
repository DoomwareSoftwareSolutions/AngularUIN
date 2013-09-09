'use strict';

var name = 'HomeService';

// $http: http://docs.angularjs.org/api/ng.$http
angular.module(name, []).factory(name, ['$http', function ($http) {

    var HomeService = {};

    var slideList = [];

    HomeService.getSlides = function ($q) {
        // Promise: http://docs.angularjs.org/api/ng.$q
        return $q.all([$http.get('http://localhost:3000/api/slides')])
            .then(function (results) {
                slideList = results[0].data;
                return slideList;
            }, errorOnREST);
    }

    HomeService.getSlideList = function () {
        return slideList;
    }

    HomeService.setSlideList = function (newList) {
        slideList = newList;
    }

    return HomeService;

}]);