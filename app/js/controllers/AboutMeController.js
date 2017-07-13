'use strict';

josephcacioppo.controller('AboutMeController',
    function($scope, $http) {
        //GET SKILLS
        $http.get('../js/services/skills.json')
            .then(function(res) {
                $scope.skills = res.data;
        });

        //GET MY LIFE EXPERIENCES
        $http.get('../js/services/mylife.json')
            .then(function(res) {
                $scope.mylife = res.data;
        });
    }
);
