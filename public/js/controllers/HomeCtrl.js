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

        $scope.firstFeature = {
            heading: 'Fiddlesticks',
            subheading: 'The Harbinger of Doom',
            description: 'For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger of Doom keeps a silent vigil. His is a cautionary tale of power run amok, taught to all summoners within the League.',
            image: 'img/fiddleSquare.png'
        };

        $scope.secondFeature = {
            heading: 'Ziggs',
            subheading: 'The Hexplosives Expert',
            description: 'Ziggs was born with a talent for tinkering, but his chaotic, hyperactive nature was unusual among yordle scientists. Aspiring to be a revered inventor like  Heimerdinger, he rattled through ambitious projects with manic zeal, emboldened by both his explosive failures and his unprecedented discoveries. Word of Ziggs volatile experimentation reached the famed Yordle Academy in Piltover and its esteemed professors invited him to demonstrate his craft.',
            image: 'img/ziggsSquare.png'
        };

        $scope.thirdFeature = {
            heading: 'Brand',
            subheading: 'The Burning Vengeance',
            description: 'In a faraway place known as Lokfar there was a seafaring marauder called Kegan Rodhe. As was his people’s way, Kegan sailed far and wide with his fellows, stealing treasures from those unlucky enough to catch their attention. To some, he was a monster; to others, just a man. One night, as they sailed through the arctic waters, strange lights danced over the frozen wastes.',
            image: 'img/brandSquare.png'
        };

    }]);