(function () {
    'use strict';

    angular
        .module('myAppDep')
        .service('personalService',
            ['$resource', 'endpoints', '$q', personalService]);

    function personalService($resource, endpoints, $q) {
        var service = {
            getAllResources: getAllResources
        };

        return service;

        /* Function Definitions */
        function getAllResources(request) {
            var deferred = $q.defer();

            serviceResources()
                .personalResources(request,
                function(response) {
                    deferred.resolve(response);
                },
                function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function serviceResources() {
            return $resource(endpoints.personalApiUrl, null, {
                personalResources: {
                    method: 'GET',
                    url: endpoints.personalApiUrl.url + '/resources',
                    responseType: 'json',
                    headers: endpoints.personalApiUrl.headers
                }
            });
        }
    }
})();