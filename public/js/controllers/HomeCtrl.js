'use strict';

/* Controllers */

var controllerName = 'HomeCtrl';

angular.module(controllerName, []).
    controller(controllerName, ['$scope', '$http', '$q', 'HomeService', function ($scope, $http, $q, HomeService) {

        $(document).ready(function () {
                $('#myCarousel').height(window.innerHeight);
            }
        )

        $scope.arrowLink = 'home#myCarousel';

        $scope.slides = HomeService.getSlides($q);

    }]);
