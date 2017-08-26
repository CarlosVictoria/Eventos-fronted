'use strict';

angular.module('eventosApp', [
<<<<<<< HEAD
  'eventosApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'satellizer'
])
  .constant("API", "")

  //config satellizer
.config(function(API, $authProvider) {
    $authProvider.loginUrl = API + '/api/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'videoClub';
})
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');
=======
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap'
    ])
    .constant("API", "")
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');
>>>>>>> 804327540b29838e559ab81dc2d1d1d2db8c0ae8

        $locationProvider.html5Mode(true);
    });