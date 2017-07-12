'use strict';

josephcacioppo.controller('AboutMeController',
    function($scope, $http) {
        $scope.title = 'About Me';
        $http.get('../js/services/skills.json')
            .then(function(res) {
                $scope.skills = res.data;
        });

        $http.get('../js/services/mylife.json')
            .then(function(res) {
                $scope.mylife = res.data;
        });

        $scope.getLifeExp = function(life) {
            $scope.experience = life.id;
            life.isCollapsed = !life.isCollapsed;
        }

        $('.row .btn').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('.collapse-group').find('.collapse');
            $collapse.collapse('toggle');
        });
    }
);
