(function(){
  'use strict';

  angular.module('weather', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/conditions', {templateUrl:'/views/conditions/conditions.html', controller:'ConditionsController'})
    .when('/webcams', {templateUrl:'/views/webcams/webcams.html', controller:'WebcamsController'})
    .when('/tenday', {templateUrl:'/views/tenday/tenday.html', controller:'TendayController'})
    .otherwise({redirectTo:'/'});
  }])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Weather';
  }]);
})();

