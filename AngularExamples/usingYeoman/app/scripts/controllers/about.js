'use strict';

/**
 * @ngdoc function
 * @name usingYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the usingYeomanApp
 */
angular.module('usingYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
