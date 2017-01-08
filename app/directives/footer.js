(function () {
    'use strict';
    angular
        .module('myAppDep')
        .directive('myFooter', [myFooter]);

    function myFooter() {
        return {
            restrict: 'E',
            templateUrl: 'views/footer.html',
            scope: {},
            link: function (scope) {
                scope.links = [];

                /* Init */
                getLinks();

                /* Function Definitions */
                function getLinks() {
                }
            }
        };
    }
})();
