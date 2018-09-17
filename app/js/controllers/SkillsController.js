josephcacioppo.controller('SkillsController', function($scope, $http) {
  getSkills();
  
  async function getSkills() {
    await $http.get('../js/services/skills.json', { cache: true })
      .then(response => $scope.skills = response.data);
  }
});
