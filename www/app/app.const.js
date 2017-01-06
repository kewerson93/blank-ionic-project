(function() {

  'use strict';

  angular.module('app')
  .constant('CONFIG',{
    'SENDER_ID':'313430295568',
    'SERVER_IP':'http://localhost:8080/TestServer',
    'RESTAPI_PATH': '/api',
    'HTTP_TIMEOUT_MS': 30000,
  })
})();