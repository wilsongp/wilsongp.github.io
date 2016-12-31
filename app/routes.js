angular.module('MyApp')
.config(['$routeProvider', function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl',
            controllerAs: 'about'
        })
        .when('/experience', {
            templateUrl: 'views/experience.html',
            controller: 'experienceCtrl',
            controllerAs: 'experience'
        })
        .when('/hobbies', {
            templateUrl: 'views/hobbies.html',
            controller: 'hobbiesCtrl',
            controllerAs: 'hobbies'
        })
        .otherwise({
            redirectTo: '/about'
        })
}]);
