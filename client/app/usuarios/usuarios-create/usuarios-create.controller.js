'use strict';
(function(){

class UsuariosCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent
  });

})();
