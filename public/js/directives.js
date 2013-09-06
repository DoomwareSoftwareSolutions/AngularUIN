'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('includePage', [function() {
    return {templateUrl: 'partial/directive'};
  }]);
