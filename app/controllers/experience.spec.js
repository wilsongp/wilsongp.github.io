'use strict';
describe('experienceCtrl', function() {
    var $controller,
        testController,
        $scope;

    beforeEach(module('MyApp'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
        $scope = {};
        testController = $controller('experienceCtrl', { $scope: $scope });
    }));

    it('sets title', function() {
        expect(testController.title).toEqual('Experience');
    });
});
