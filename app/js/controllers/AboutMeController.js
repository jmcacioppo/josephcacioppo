josephcacioppo.controller('AboutMeController', function($scope, $http) {
  getSkills();
  getMyLife();
  
  async function getSkills() {
    await $http.get('../js/services/skills.json')
      .then(response => $scope.skills = response.data);
  }

  async function getMyLife() {
    await $http.get('../js/services/mylife.json')
      .then(response => $scope.mylife = response.data);
  }
});
