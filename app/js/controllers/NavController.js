josephcacioppo.controller('NavController', function($scope, $location, $window) {
  setTimeout(() => {
    let aboutMePosition = document.getElementById('about-me').offsetTop;
    let contactMePosition = document.getElementById('contact-me').offsetTop;
    let projectsPosition = document.getElementById('projects').offsetTop;
    let skillsPosition = document.getElementById('skills').offsetTop;
    
    $scope.navOptions = [
      {
        position : aboutMePosition,
        title : 'About Me',
        active: false
      }, 
      {
        position: skillsPosition,
        title: 'Skills',
        active: false
      },
      {
        position: projectsPosition,
        title: 'Projects',
        active: false
      },
      {
        position: contactMePosition,
        title: 'Contact Me',
        active: false
      }
    ];
  }, 0);

  $scope.scrollToPosition = (position) => {
    $window.scrollTo(0, position);
  }

  $scope.checkActive = function (option) {
    if(option.link === $location.path()) return true;
    else return false;
  };
});
