josephcacioppo.controller('ProjectsController', function($scope, $http) {
  getProjects();
  
  async function getProjects() {
    await $http.get('../js/services/projects.json', { cache: true })
      .then((response) => $scope.projects = response.data);
  }

  $scope.mouseIsOver = function(project) {
    project.showImage = false;
    project.showData = true;
  };
  
  $scope.mouseIsGone = function(project) {
    project.showData = false;
    project.showImage = true;
  };

  $scope.goToLink = function(project) {
    window.open(project.link, '_blank');
  };
  
});
