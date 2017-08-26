'use strict';
(function(){

class EventosListComponent {
  constructor(eventosService) {
    this.eventosService = eventosService;
  }

  $onInit(){
  	this.eventosService.query().$promise
  	.then(response => {
  		console.log("USUARIOS OK",response);
      this.eventos = response;
  	})
  	.catch(err => {
  		console.log("ERROR", err);
    });
  }
}

EventosListComponent.$inject = ['eventosService'];
angular.module('eventosApp')
  .component('eventosList', {
    templateUrl: 'app/eventos/eventos-list/eventos-list.html',
    controller: EventosListComponent,
    controllerAs: 'vm'
  });

})();
