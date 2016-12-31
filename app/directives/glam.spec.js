'use strict';
describe('glam directive', function() {
    var $compile,
        $rootScope,
        $route,
        $location,
        scope,
        element;

    beforeEach(module('MyApp'));
    beforeEach(module('my.templates')); // ng-html2js karma template loader

    beforeEach(inject(function(_$compile_, _$rootScope_, _$route_, _$location_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        $route = _$route_;
        scope = $rootScope.$new();
        element = $compile("<sidebar></sidebar>")(scope);
    }));

    it("doesn't do anything but hold the header image", function() {

    });
});
