'use strict';

var josephcacioppo = angular.module('josephcacioppo', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      })
      .otherwise({redirectTo: '/'});
    
    // Use the HTML5 History API
    $locationProvider.html5Mode(true);    
  });

josephcacioppo.directive("mAppLoading", function ($animate) {
    return ({
      link: link,
      restrict: "C"
    });
    
    function link(scope, element, attributes) {
      $animate.leave(element.children().eq(1)).then(
        function cleanupAfterAnimation() {
          
          element.remove();
          scope = element = attributes = null;
          
        }
      );
    }
  }
);

setTimeout(function asyncBootstrap() {
  angular.bootstrap(document, ["josephcacioppo"]);
}, 2000);
