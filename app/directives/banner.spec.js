'use strict';
describe('banner directive', function () {
    var $compile,
        $rootScope,
        scope,
        element,
        personalService;

    var createScope;

    beforeEach(module('MyApp'));
    beforeEach(module('my.templates')); // ng-html2js karma template loader

    beforeEach(inject(function(_$compile_, _$rootScope_, $q, _personalService_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        personalService = _personalService_;
        scope = $rootScope.$new();

        spyOn(personalService, 'getAllResources').and.callFake(function(request){
            var deferred = $q.defer();
            deferred.resolve({ data: [{ id: 1 }]});
            return deferred.promise;
        });

        createScope = function() {
            element = $compile("<my-banner></my-banner>")(scope);
            $rootScope.$digest();
            return element.children().scope();
        };
    }));

    it("loads the logo info", function() {
        var linkScope = createScope();
        expect(linkScope.logo).toBeDefined();
        checkLinkDetails(linkScope.logo);
    });

    it('loads all social links', function() {
        var linkScope = createScope();

        expect(linkScope.links).toBeDefined();
        expect(linkScope.links.length).toBeGreaterThan(0);
    });
});

function checkLinkDetails( linkObj ) {

    expect(linkObj.alt).toBeDefined();
    expect(linkObj.href).toBeDefined();
    expect(linkObj.src).toBeDefined();
}
