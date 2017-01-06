(function(){

  'use strict';

  angular.module('app.login')

  .controller('LoginCtrl', LoginCtrl)

  function LoginCtrl($scope, $state, $ionicLoading, RequestService){

    var vm = this;
    vm.user = {};

    vm.loginConvencional = loginConvencional;

    function loginConvencional(userForm){
      $ionicLoading.show();
      RequestService.loginConvencional(userForm)
      .then(
        function success(response){
          console.log("Logado com sucesso.", response);
          $state.go('app.main');
        }, 
        function error(response){
          console.log("Não autorizado");
        }
      )
      .finally(function (){
        $ionicLoading.hide();
      })
    }

  }
})();


