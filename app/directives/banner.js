'use strict';
angular
    .module('myAppDep')
    .directive('myBanner', ['personalService', myBanner]);

function myBanner(personalService) {
  return {
    restrict: 'E',
    templateUrl: 'views/banner.html',
    scope: {},
    link: function (scope) {
        scope.logo = {
            alt: "Greg Wilson",
            href: "http://wilsongp.net",
            src: "assets/images/logos/rel.ico.png"
        };

        /* Init */
        getLinks();

        /* Function Definitions */
        function getLinks() {
            var request = {};

            personalService
                .getAllResources(request)
                .then(function(results) {
                    console.log(results);
                    scope.links = results.data;
                })
                .catch(function (err) {

                });
        }
    }
  };
};
