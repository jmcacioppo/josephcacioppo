'use strict';

josephcacioppo.controller('AboutMeController',
    function($scope, $http) {
        getSkills();
        getMyLife();
        
        // Get skills
        async function getSkills() {
            await $http.get('../js/services/skills.json')
                .then(function(res) {
                    $scope.skills = res.data;
            });
        }

        // Get life experiences
        async function getMyLife() {
            await $http.get('../js/services/mylife.json')
                .then(function(res) {
                    $scope.mylife = res.data;
            });
        }
    }
);
