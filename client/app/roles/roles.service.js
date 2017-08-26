'use strict';

function rolesService($resource,API) {
	return $resource(API+"/api/roles/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('eventosApp')
  .factory('rolesService', rolesService);
