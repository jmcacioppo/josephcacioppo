'use strict';

josephcacioppo.directive('header', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/header.html'
    }
});