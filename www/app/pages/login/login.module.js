(function() {

  'use strict';

  angular.module('app.login', [

    ])
    .config(configBlock);

  function configBlock($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/pages/login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })

  }

})();