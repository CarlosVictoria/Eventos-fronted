'use strict';

angular.module('eventosApp', [
        'eventosApp.constants',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'satellizer'
    ])
    .constant("API", "http://10.72.196.37:8080/Eventos")

//config satellizer
.config(function(API, $authProvider) {
        $authProvider.loginUrl = API + '/api/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'eventos';
    })
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });