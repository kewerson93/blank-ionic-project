(function() {

  'use strict';

  angular.module('app.main', [

    ])
    .config(configBlock);

  function configBlock($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app.main', {
        url: '/main',
        views: {
          'menuContent': {
            templateUrl: 'app/pages/main/main.html',
            controller: 'MainCtrl',
            controllerAs: 'vm'
          }
        }
      })

  }

})();