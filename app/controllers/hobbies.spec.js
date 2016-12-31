'use strict';
describe('hobbiesCtrl', function() {
    var $controller,
        testController,
        $scope;

    beforeEach(module('MyApp'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        $scope = {};
        testController = $controller('hobbiesCtrl', { $scope: $scope });
    }));

    it('sets title', function() {
        expect(testController.title).toEqual('Spare Time');
    });
});
