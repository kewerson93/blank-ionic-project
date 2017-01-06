(function(){

    'use strict';

    angular.module('app.core')
      .service('RequestService', RequestService);

    function RequestService($q, $http, $timeout, $httpParamSerializerJQLike, CONFIG){

      var RESOURCES_PATH = CONFIG.SERVER_IP+CONFIG.REST_PATH;
      var AUTH_PATH = CONFIG.SERVER_IP+CONFIG.REST_PATH+"/auth";
      var USER_RESOURCES = RESOURCES_PATH+"/user";

      var service = {
        loginConvencional:loginConvencional,
        getUserEmail:getUserEmail
      }

      return service;

      function getUserEmail() {
        return $http({
          method: 'GET',
          url: USER_RESOURCES+'/getUserEmail'
        })
      }

      function loginConvencional(userForm) {
        // return $http({
        //   method: 'POST',
        //   url: AUTH_PATH+'/login',
        //   data: $httpParamSerializerJQLike(userForm),
        //   headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        // })

        var deferred = $q.defer();
        $timeout(function(){
          deferred.resolve();
        }, 1000);
        return deferred.promise;
      }

    }

})()