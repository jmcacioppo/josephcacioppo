'use strict';

josephcacioppo.controller('ProjectsController',
    function($scope, $http) {
        $scope.title = 'Projects Page';
        $http.get('../js/services/projects.json')
            .then(function(res) {
                $scope.projects = res.data;
        });
    }
);
