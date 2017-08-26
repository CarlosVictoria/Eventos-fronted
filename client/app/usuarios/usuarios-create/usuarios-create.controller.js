'use strict';
(function(){

class UsuariosCreateComponent {
  constructor(usuariosService) {
    this.usuariosService = usuariosService;
  }

  createUser() {
    this.usuariosService.save(this.usuario).$promise
      .then(response => {
        console.log("Usuario registrado correctamente ", response);
        this.$state.go('usuarios-list');
          })
          .catch(err => {
            console.log("Error al crear el usuario ", err);
            })
          }
}

UsuariosCreateComponent.$inject = ['usuariosService'];
angular.module('eventosApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
