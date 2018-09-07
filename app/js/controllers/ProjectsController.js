josephcacioppo.controller('ProjectsController', function($scope, $http, $timeout) {
  
  $http.get('../js/services/projects.json')
    .then((response) => $scope.projects = response.data);

  $scope.mouseIsOver = function(project) {
    project.hideImage = true;

    $timeout(function () {
      project.showData = true;
    }, 550);
  };
  
  $scope.mouseIsGone = function(project) {
    project.showData = false;
    project.hideImage = false;
  };
  
});
