'use strict';
describe('capitalize filter', function() {
    var $filter;

    beforeEach(module('MyApp'));

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    it('Capitalizes lowercase string', function() {
        var testFilter = $filter('capitalize');
        expect(testFilter('test')).toEqual('Test');
    });

    it("Doesn't change pre-capitalized string", function() {
       var testFilter = $filter('capitalize');
        expect(testFilter('Test')).toEqual('Test');
    });
});
