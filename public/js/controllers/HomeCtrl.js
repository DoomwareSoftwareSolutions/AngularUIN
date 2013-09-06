'use strict';

/* Controllers */

var controllerName = 'HomeCtrl';

angular.module(controllerName, []).
    controller(controllerName, function ($scope, $http) {

        var setCarouselDimensions = function () {
            $('#myCarousel').height(window.innerHeight);
            $('.carousel-inner').css({height: window.innerHeight + 'px', width: '100%', maxHeight: '768px', maxWidth: '1280px'});
        }

        $(window).resize(function () {
            setCarouselDimensions();
        });

        $(document).ready(function () {
            setCarouselDimensions();
        });

        $scope.arrowLink = 'home#myCarousel';

        $scope.$emit("BackgroundChange", "home-background");

        var udyrSlide = {
            image: 'img/leesin.jpg',
            heading: 'Best Lee Sin LAS',
            caption: 'Torneo 1vs1 top. Sos el mejor Lee Sin del server latinoamerica?',
            linkText: 'Inscribirse',
            linkRef: '#'
        };

        var zedSlide = {
            image: 'img/zed.jpg',
            heading: 'Zed',
            caption: 'The master of shadows.',
            linkText: 'Sign up today',
            linkRef: '#'
        };

        var threshSlide = {
            image: 'img/thresh.jpg',
            heading: 'Thresh',
            caption: 'The chain warden.',
            linkText: 'Sign up today',
            linkRef: '#'
        };

        $scope.slides = [udyrSlide, zedSlide, threshSlide];

    });
