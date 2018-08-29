josephcacioppo.controller('NavController', function($scope, $location) {
  $scope.navOptions = [
    {
      link : "/",
      title : 'Home',
      active: false
    }, 
    {
      link : "/aboutme",
      title : 'About Me',
      active: false
    },
    {
      link : "/projects",
      title : 'Projects',
      active: false
    },
    {
      link : "/resume",
      title : 'Resume',
      active: false
    }
  ];

  $scope.checkActive = function (option) {
    if(option.link === $location.path()) return true;
    else return false;
  };
});
