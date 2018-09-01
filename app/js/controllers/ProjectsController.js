josephcacioppo.controller('ProjectsController', function($scope, $http) {
  $scope.title = 'Projects Page';
  $http.get('../js/services/projects.json')
    .then((response) => $scope.projects = response.data);

  $scope.mouseIsOver = function(project) {
    project.showData = true;
  };
  
  $scope.mouseIsGone = function(project) {
    project.showData = false;
  };
});
