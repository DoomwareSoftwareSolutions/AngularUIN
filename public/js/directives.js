'use strict';

/* Directives */

angular.module('myApp.directives', []).
    directive('navBar', function () {
        return {templateUrl: 'partials/NavBarView', controller: 'NavCtrl'};
    });
