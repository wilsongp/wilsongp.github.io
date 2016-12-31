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
