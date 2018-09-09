josephcacioppo.controller('ContactMeController', function ($scope, EMAILJSID) {
  emailjs.init(EMAILJSID);

  $scope.name = '';
  $scope.email = '';
  $scope.message = '';
  $scope.submitted = false;
  
  $scope.submitForm = function(event) {
    emailjs.sendForm('cacioppo-gmail', 'contact_template', event.srcElement);

    $scope.name = '';
    $scope.email = '';
    $scope.message = '';
    $scope.submitted = true;
  }
});
