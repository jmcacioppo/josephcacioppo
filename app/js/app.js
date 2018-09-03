'use strict';

var josephcacioppo = angular.module('josephcacioppo', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .otherwise({redirectTo: '/'});
    
    // Use the HTML5 History API
    $locationProvider.html5Mode(true);    
  });

josephcacioppo.controller('InitializationController', function($scope, $window, Util) {
  let headerBackground = '';
  let homeTitle = '';

  // window.addEventListener('load', function () {
  window.onload = function () {
    setTimeout(function() {
      headerBackground = document.getElementById('headerBackground');
      homeTitle = document.getElementById('homeTitle');
  
      configureWindowSize();
      setResize();
    }, 0)
  };
  
  function configureWindowSize() {
    headerBackground.style.height = `${window.innerHeight}px`;
    homeTitle.style.marginTop = `${window.innerHeight * .20}px`;
  }

  function setResize() {
    var resizeWindow = Util.debounce(function () {
      headerBackground.style.height = `${window.innerHeight}px`;
      homeTitle.style.marginTop = `${window.innerHeight * .20}px`;
    }, 20);

    window.addEventListener("resize", resizeWindow);    
  }
});
