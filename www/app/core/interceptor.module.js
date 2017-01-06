(function() {

    'use strict';

    angular.module('InterceptorModule', [])
      .config(configBlock);

    function configBlock($httpProvider) {


      $httpProvider.interceptors.push(function($q, CONFIG) {
        return {
          'request': function(config) {
            //Coloca o timeout em todas requisições.
            config.timeout = CONFIG.HTTP_TIMEOUT_MS;
            return config;
          },
          'responseError': function(rejection) {
            console.log(rejection);
            if(rejection.status <= 0 && rejection.config.method == "POST"){
              alert("Não foi possível conectar-se ao servidor. \nVerifique sua conexão com a internet ou tente novamente mais tarde");
            }
            else if(rejection.status === 401) {
              $state.go('login');
            }
            return $q.reject(rejection);
          }
        };
      })
        

    }

})()