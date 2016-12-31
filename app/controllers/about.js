'use strict';
angular.module('myAppDep')
.controller('aboutCtrl', [aboutCtrl]);

function aboutCtrl() {
  const vm = this;

  vm.title = 'About Me';

};
