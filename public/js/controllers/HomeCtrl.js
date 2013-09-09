'use strict';

/* Controllers */

var controllerName = 'HomeCtrl';

angular.module(controllerName, []).
    controller(controllerName, ['$scope', '$http', '$q', 'HomeService', function ($scope, $http, $q, HomeService) {

        $scope.$emit("BackgroundChange", "home-background");

        var setCarouselDimensions = function () {
            $('#myCarousel').height(window.innerHeight);
            //$('.carousel-inner').css({height: window.innerHeight + 'px', width: '100%', maxHeight: '768px', maxWidth: '1280px'});
        }

        $(window).resize(function () {
            setCarouselDimensions();
        });

        $(document).ready(function () {
            setCarouselDimensions();
        });

        $scope.arrowLink = 'home#myCarousel';

        $scope.slides = HomeService.getSlides($q);
        $scope.features = HomeService.getFeatures($q);

    }]);