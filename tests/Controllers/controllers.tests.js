describe('AppCtrl', function() {
  beforeEach(module('starter'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('AppCtrl');
  }));

  it('has a player function', function() {
    expect(ctrl.player()).toBeDefined;
  })
})