'use strict';

josephcacioppo.controller('AboutMeController',
    function($scope, $http) {
        $scope.title = 'About Me';
        $http.get('../js/services/skills.json')
            .then(function(res) {
                $scope.skills = res.data;
        });
    }
);
