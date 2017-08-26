'use strict';

angular.module('eventosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('eventos-create', {
        url: '/eventos-create',
        template: '<eventos-create></eventos-create>'
      })
      .state('eventos-list', {
        url: '/eventos-list',
        template: '<eventos-list></eventos-list>'
      });
  });
