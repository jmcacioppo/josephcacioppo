'use strict'

josephcacioppo.controller('NavController', 
    function($scope, $location) {
        $scope.isActive = function (viewLocation) {
            var sameLocation = viewLocation === '#!' + $location.path();
            console.log(sameLocation);
            return sameLocation;
        };
    });