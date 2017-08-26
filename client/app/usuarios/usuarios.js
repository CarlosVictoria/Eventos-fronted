'use strict';

angular.module('eventosApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('usuarios-list', {
        url: '/usuarios-list',
        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-create', {
        url: '/usuarios-create',
        template: '<usuarios-create></usuarios-create>'
      });
  });
