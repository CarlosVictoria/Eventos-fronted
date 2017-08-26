'use strict';

describe('Component: EventosListComponent', function () {

  // load the controller's module
  beforeEach(module('eventosApp'));

  var EventosListComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventosListComponent = $componentController('EventosListComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
