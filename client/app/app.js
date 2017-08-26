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

>>>>>>> 119c8812c596db19f6a8c2b66fe0dafe38144820

        $locationProvider.html5Mode(true);
    });
