'use strict';
describe('banner directive', function () {
    var $compile,
        $rootScope,
        linkScope,
        scope,
        element;

    beforeEach(module('MyApp'));
    beforeEach(module('my.templates')); // ng-html2js karma template loader

    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();

        element = $compile("<banner></banner>")(scope);
        $rootScope.$digest();
        linkScope = element.children().scope();
    }));

    it("loads the logo info", function() {
        expect(linkScope.logo).toBeDefined();
        checkLinkDetails(linkScope.logo);
    });

    it('loads all social links', function() {
        expect(linkScope.links).toBeDefined();
        expect(linkScope.links.length).toBeGreaterThan(0);
        checkLinkDetails(linkScope.links[0]);
    });
});

function checkLinkDetails( linkObj ) {
    expect(linkObj.alt).toBeDefined();
    expect(linkObj.href).toBeDefined();
    expect(linkObj.src).toBeDefined();
}
