josephcacioppo.controller('ContactMeController', function($scope) {
  $scope.name = '';
  $scope.email = '';
  $scope.message = '';
  
  $scope.submitForm = function(){ 
    console.log($scope.name);
    console.log($scope.email);
    console.log($scope.message);
  }

});
