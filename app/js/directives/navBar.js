'use strict';

josephcacioppo.directive('navBar', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/navBar.html'
    }
});