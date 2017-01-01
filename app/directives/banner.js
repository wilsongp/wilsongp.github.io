'use strict';
angular.module('myAppDep').directive('myBanner', function () {
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
