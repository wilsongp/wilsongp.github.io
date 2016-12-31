'use strict';
angular.module('MyApp', [ 'myAppDep']);

// Faux lazy loader
angular.module('myAppDep', ['ngRoute']);

'use strict';
angular.module('MyApp', [ 'myAppDep']);

// Faux lazy loader
angular.module('myAppDep', ['ngRoute']);

(function(){
    "use strict";

    angular.module('MyApp')
        .run(['$rootScope', runFunc]);

    function runFunc($rootScope) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
            console.log(event, current, previous, rejection);
        });
    }
})();

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

'use strict';
angular.module('myAppDep')
.controller('aboutCtrl', [aboutCtrl]);

function aboutCtrl() {
  const vm = this;

  vm.title = 'About Me';

};

'use strict';
angular.module('myAppDep')
.controller('experienceCtrl', function () {
  const vm = this;

  vm.title = 'Experience';
});

'use strict';
angular.module('myAppDep')
    .controller('hobbiesCtrl', function () {
        const vm = this;

        vm.title = 'Spare Time';
    });

'use strict';
angular.module('myAppDep').directive('banner', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/banner.html',
    scope: {},
    link: function (scope, element, attrs, controllers) {
        scope.logo = {
            alt: "Greg Wilson",
            href: "http://wilsongp.net",
            src: "assets/images/logos/rel.ico.png"
        };

        scope.links = [
          {
              alt: 'Github',
              href: 'https://github.com/wilsongp',
              src: 'assets/images/logos/github.ico.png'
          },
          {
              alt: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gregory-wilson-3b188a36',
              src: 'assets/images/logos/linkedin.ico.png'
          },
          {
              alt: 'Resume',
              href: 'https://drive.google.com/open?id=0B9i9-Xf_WjsUeU43VGl2WXU1WUxVUV9uYVN0Zi1OaTNKYTBN',
              src: 'assets/images/logos/resume.ico.png'
          }
        ];
    }
  };
});

'use strict';
angular.module('myAppDep').directive('glam', ['$animate', '$document', function ($animate, $document) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element) {
        }
    };
}]);

'use strict';
angular.module('myAppDep').directive('sidebar', ['$route', function ($route) {
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

'use strict';
angular.module('myAppDep')
.directive('stickyScroll', ['$window', '$document', function ($window, $document) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element) {
            var MIN_WIDTH = 767;

            var target = element;
            if (window.innerWidth > MIN_WIDTH) {
                target = target.parent();
            }

            var targetOffsetTop = target.prop('offsetTop');;
            var basePosition = target.css('position');
            var baseTop = target.css('top');
            var baseWidth = target.css('width');

            angular.element($window).bind("scroll", function () {
                if ($window.innerWidth > MIN_WIDTH) {

                }
                else if ($window.pageYOffset > targetOffsetTop) {
                    target
                        .css('position', 'fixed')
                        .css('top', '0')
                        .css('width', '100%');
                    scope.$apply();
                }
                else {
                    target
                        .css('position', basePosition)
                        .css('top', baseTop);
                    scope.$apply();
                }
            });
        }
    };
}]);

angular.module('MyApp')
.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

(function(){
    "use strict";

    angular.module('MyApp')
        .run(['$rootScope', runFunc]);

    function runFunc($rootScope) {
        $rootScope.$on('$routeChangeError', function (event, current, previous, rejection) {
            console.log(event, current, previous, rejection);
        });
    }
})();

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

'use strict';
angular.module('myAppDep')
.controller('aboutCtrl', [aboutCtrl]);

function aboutCtrl() {
  const vm = this;

  vm.title = 'About Me';

};

'use strict';
angular.module('myAppDep')
.controller('experienceCtrl', function () {
  const vm = this;

  vm.title = 'Experience';
});

'use strict';
angular.module('myAppDep')
    .controller('hobbiesCtrl', function () {
        const vm = this;

        vm.title = 'Spare Time';
    });

'use strict';
angular.module('myAppDep').directive('banner', function () {
  return {
    restrict: 'E',
    templateUrl: 'views/banner.html',
    scope: {},
    link: function (scope, element, attrs, controllers) {
        scope.logo = {
            alt: "Greg Wilson",
            href: "http://wilsongp.net",
            src: "assets/images/logos/rel.ico.png"
        };

        scope.links = [
          {
              alt: 'Github',
              href: 'https://github.com/wilsongp',
              src: 'assets/images/logos/github.ico.png'
          },
          {
              alt: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gregory-wilson-3b188a36',
              src: 'assets/images/logos/linkedin.ico.png'
          },
          {
              alt: 'Resume',
              href: 'https://drive.google.com/open?id=0B9i9-Xf_WjsUeU43VGl2WXU1WUxVUV9uYVN0Zi1OaTNKYTBN',
              src: 'assets/images/logos/resume.ico.png'
          }
        ];
    }
  };
});

'use strict';
angular.module('myAppDep').directive('glam', ['$animate', '$document', function ($animate, $document) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element) {
        }
    };
}]);

'use strict';
angular.module('myAppDep').directive('sidebar', ['$route', function ($route) {
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

'use strict';
angular.module('myAppDep')
.directive('stickyScroll', ['$window', '$document', function ($window, $document) {
    return {
        restrict: 'A',
        scope: {},
        link: function (scope, element) {
            var MIN_WIDTH = 767;

            var target = element;
            if (window.innerWidth > MIN_WIDTH) {
                target = target.parent();
            }

            var targetOffsetTop = target.prop('offsetTop');;
            var basePosition = target.css('position');
            var baseTop = target.css('top');
            var baseWidth = target.css('width');

            angular.element($window).bind("scroll", function () {
                if ($window.innerWidth > MIN_WIDTH) {

                }
                else if ($window.pageYOffset > targetOffsetTop) {
                    target
                        .css('position', 'fixed')
                        .css('top', '0')
                        .css('width', '100%');
                    scope.$apply();
                }
                else {
                    target
                        .css('position', basePosition)
                        .css('top', baseTop);
                    scope.$apply();
                }
            });
        }
    };
}]);

angular.module('MyApp')
.filter('capitalize', function() {
    return function(input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
