'use strict';
(function(){

class UsuariosCreateComponent {
  constructor(usuariosService,rolesService, tipoDocumentoService) {
    this.usuariosService = usuariosService;
    this.rolesService = rolesService;
    this.tipoDocumentoService = tipoDocumentoService;
  }


  $onInit() {

           this.tipoDocumentoService.query().$promise
               .then(response => {
                   this.tiposDocumento = response;
                   console.log(this.tipoDocumento);
               })
               .catch(err => console.error(err));

           this.rolesService.query().$promise
               .then(response => {
                   this.roles = response;
               })
               .catch(err => console.error(err));
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

UsuariosCreateComponent.$inject = ['usuariosService', 'rolesService','tipoDocumentoService'];
angular.module('eventosApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
