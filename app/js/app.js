'use strict';

var josephcacioppo = angular.module('josephcacioppo', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      })
      .when('/aboutme', {
        templateUrl: 'templates/aboutme.html',
        controller: 'AboutMeController'
      })
      .when('/projects', {
        templateUrl: 'templates/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'templates/resume.html',
        controller: 'ResumeController'
      })
      .otherwise({redirectTo: '/'});
    
    // Use the HTML5 History API
    $locationProvider.html5Mode(true);    
  });

josephcacioppo.controller('InitializingController', function($scope, $window, Util) {
  let headerBackground = '';
  let homeTitle = '';

  window.addEventListener('load', function () {
    headerBackground = document.getElementById('headerBackground');
    homeTitle = document.getElementById('hometitle');
    configureWindowSize();
    setResize();
  });
  
  function configureWindowSize() {
    headerBackground.style.height = `${window.innerHeight}px`;
    headerBackground.style.width = `${window.innerWidth}px`;
    homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
  }

  function setResize() {
    var resizeWindow = Util.debounce(function () {
      headerBackground.style.height = `${window.innerHeight}px`;
      headerBackground.style.width = `${window.innerWidth}px`;
      homeTitle.style.marginTop = `${window.innerHeight * .15}px`;
    }, 20);
  
    window.addEventListener("resize", resizeWindow);
  }
});
