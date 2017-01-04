(function(){
    "use strict";

    angular.module('MyApp')
        .run(['$rootScope', runFunc]);

    function runFunc($rootScope) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
            //console.log(event, current, previous, rejection);
        });
    }
})();
