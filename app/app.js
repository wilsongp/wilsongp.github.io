'use strict';
angular.module('MyApp', [ 'myAppDep']);

// Faux lazy loader
angular.module('myAppDep', ['ngRoute']);
