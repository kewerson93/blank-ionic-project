(function(){

  'use strict';

  angular.module('app.core', ['ionic', 'ngStorage', 'InterceptorModule'])
  .run(runBlock)
  .config(configBlock);

  function runBlock($ionicPlatform, $rootScope, $state, $localStorage) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }

      
      $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams, options) {
        console.log("Going to state: ",toState);
      });

      $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
        console.log("Resolve Reject to: ",toState);
      });

    });
  }

  function configBlock($ionicConfigProvider, $httpProvider, $compileProvider) {

  }

})();