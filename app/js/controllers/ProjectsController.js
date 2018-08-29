josephcacioppo.controller('ProjectsController', function($scope, $http) {
  $scope.title = 'Projects Page';
  $http.get('../js/services/projects.json')
    .then((response) => $scope.projects = response.data);
});
