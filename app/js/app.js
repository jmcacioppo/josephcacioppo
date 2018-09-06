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

josephcacioppo.controller('InitializationController', function($scope, $window, Util) {
  let headerBackground = '';
  let headerTitle = '';

  // window.addEventListener('load', function () {
  window.onload = function () {
    setTimeout(function() {
      headerBackground = document.getElementById('headerBackground');
      headerTitle = document.getElementById('headerTitle');
  
      configureWindowSize();
      setResize();
    }, 0)
  };
  
  function configureWindowSize() {
    headerBackground.style.height = `${window.innerHeight}px`;
    headerTitle.style.marginTop = `${window.innerHeight * .20}px`;
  }

  function setResize() {
    var resizeWindow = Util.debounce(function () {
      headerBackground.style.height = `${window.innerHeight}px`;
      headerTitle.style.marginTop = `${window.innerHeight * .20}px`;
    }, 20);

    window.addEventListener("resize", resizeWindow);    
  }
});
