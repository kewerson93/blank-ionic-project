(function() {

  'use strict';

  angular.module('app', [
      //Modulo principal com todos os servicos
      'app.core',

      'app.login',
      'app.main'
    ])
    .config(configBlock);

  function configBlock($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'app/layout/menu.html',
        controller: 'LayoutController',
        controllerAs: 'vm'
      })

    $urlRouterProvider.otherwise('/login');

  }

  

})();