josephcacioppo.controller('HomeController', function($scope, Util) {
  let headerBackground = document.getElementById('headerBackground');
  let homeTitle = document.getElementById('hometitle');
  configureWindowSize();
  
  var resizeWindow = Util.debounce(function () {
      headerBackground.style.height = `${window.innerHeight}px`;
      headerBackground.style.width = `${window.innerWidth}px`;
      homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
  }, 20);

  window.addEventListener("resize", resizeWindow);
  
  $scope.phone = "(305) 794-7034";

  $(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
  });

  function configureWindowSize() {
    headerBackground.style.height = `${window.innerHeight}px`;
    headerBackground.style.width = `${window.innerWidth}px`;
    homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
  }
});
