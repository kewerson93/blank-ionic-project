(function(){

  'use strict';

  angular.module('app')

  .controller('LayoutController', LayoutController)

  function LayoutController($scope, $localStorage){

    var vm = this;
    vm.user = $localStorage.user;
 
  }
})();


