'use strict';

/* Controllers */

var controllerName = 'HomeCtrl';

angular.module(controllerName, []).
    controller(controllerName, ['$scope', '$http', '$q', 'HomeService', function ($scope, $http, $q, HomeService) {

        $scope.$emit("BackgroundChange", "home-background");

        var setCarouselDimensions = function () {
            $('#homeSlider').height(window.innerHeight);
        }

        $(window).resize(function () {
            setCarouselDimensions();
        });

        $(document).ready(function () {
            setCarouselDimensions();
        });

        $scope.arrowLink = 'home#homeSlider';

        $scope.slides = HomeService.getSlides($q);
        $scope.features = HomeService.getFeatures($q);

    }]);