'use strict';
describe('sidebar directive', function () {
    var $compile,
        $rootScope,
        $route,
        $location,
        scope,
        element,
        linkScope;

    beforeEach(module('MyApp'));
    beforeEach(module('my.templates')); // ng-html2js karma template loader

    beforeEach(inject(function(_$compile_, _$rootScope_, _$route_, _$location_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $location = _$location_;
        $route = _$route_;
        scope = $rootScope.$new();
        element = $compile("<my-sidebar></my-sidebar>")(scope);
    }));

    describe('handles routes and', function() {
        beforeEach(inject(function() {
            $route.reload();
            $rootScope.$digest();
            linkScope = element.children().scope();
        }));

        it('gets all registered routes', function() {
            expect(linkScope.routes.length).toBeGreaterThan(0);
        });

        it('defaults to /about route', function() {
            expect(linkScope.activeNav).toBe('/about');
        });

        it('sets activeNave to correct route on change', function() {
            $location.path('/experience');
            $route.reload();
            $rootScope.$digest();
            expect(linkScope.activeNav).toBe('/experience');
        });
    });

});
