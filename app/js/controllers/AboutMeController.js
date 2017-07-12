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

        //GET THE EXPERIENCE THAT IS CLICKED
        $scope.getLifeExp = function(life) {
            $scope.experience = life.id;
            life.isCollapsed = !life.isCollapsed;
        }

        //CHANGE WHICH EXPERIENCE IS COLLAPSED
        $('.row .btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('.collapse-group').find('.collapse');
            $collapse.collapse('toggle');
        });
    }
);
