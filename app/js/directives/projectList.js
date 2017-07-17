'use strict';

josephcacioppo.directive('projectList', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/projectList.html'
    }
});