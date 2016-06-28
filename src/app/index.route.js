(function() {
  'use strict';

  angular
    .module('sureshRana')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/templates/about.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('news', {
        url: '/news',
        templateUrl: 'app/templates/news.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/templates/events.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('volunteer', {
        url: '/voluteer',
        templateUrl: 'app/templates/volunteers.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'app/templates/gallery.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('contact-us', {
        url: '/contact-us',
        templateUrl: 'app/templates/contact-us.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
