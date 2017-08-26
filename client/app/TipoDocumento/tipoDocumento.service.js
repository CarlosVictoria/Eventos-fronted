
'use strict';

function tipoDocumentoService($resource,API) {
	return $resource(API+"/api/roles/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('eventosApp')
  .factory('tipoDocumentoService', tipoDocumentoService);
