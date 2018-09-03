josephcacioppo.controller('MainController', function($scope) {
  $(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
  });
});
