'use strict';
angular.module('myAppDep').directive('mySidebar', ['$route', function ($route) {
  return {
    restrict: 'E',
    templateUrl: 'views/sidebar.html',
    scope: {
      activeNav: '@'
    },
    link: function (scope, element, attrs) {
        scope.$on('$routeChangeSuccess', function (event, curr, prev) {
            scope.activeNav = curr.$$route.originalPath || '/about';
        });

        // Get routes established in routes.js
        scope.routes = [];
        angular.forEach($route.routes,function (config,route) {
            if (config['controller'] != undefined) {
                scope.routes.push(config.originalPath.replace('/', ''));
            }
        });
    }
  };
}]);
