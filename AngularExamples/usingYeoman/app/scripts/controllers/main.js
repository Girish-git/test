'use strict';

/**
 * @ngdoc function
 * @name usingYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the usingYeomanApp
 */
angular.module('usingYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
