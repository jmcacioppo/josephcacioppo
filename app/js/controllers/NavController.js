'use strict'

josephcacioppo.controller('NavController', 
    function($scope, $location) { 
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    });