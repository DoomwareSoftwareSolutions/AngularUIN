'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('HomeCtrl',function ($scope, $http) {

        $(document).ready(function () {
                $('#myCarousel').height(window.innerHeight);
            }
        )

        var udyrSlide = {
            image: 'img/udyr.jpg',
            heading: 'Spirit Guard Udyr',
            caption: 'Udyr uses the stance mechanic. His abilities all have a persistent effect which remain until he activates another ability.',
            linkText: 'Sign up today',
            linkRef: '#'
        };

        var zedSlide = {
            image: 'img/zed.jpg',
            heading: 'Spirit Guard Udyr',
            caption: 'Udyr uses the stance mechanic. His abilities all have a persistent effect which remain until he activates another ability.',
            linkText: 'Sign up today',
            linkRef: '#'
        };

        var threshSlide = {
            image: 'img/thresh.jpg',
            heading: 'Spirit Guard Udyr',
            caption: 'Udyr uses the stance mechanic. His abilities all have a persistent effect which remain until he activates another ability.',
            linkText: 'Sign up today',
            linkRef: '#'
        };

        $scope.slides = [udyrSlide, zedSlide, threshSlide];

    }).
    controller('MyCtrl1',function ($scope) {
        // write Ctrl here

    }).
    controller('MyCtrl2', function ($scope) {
        // write Ctrl here

    });
