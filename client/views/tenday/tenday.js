/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('TendayController', ['$scope', 'wu', function($scope, wu){
    $scope.title='Ten Day Forecast';

    $scope.getTenday= function(){
      wu.getTenday($scope.zip).then(function(response){
        $scope.tenday = response.data.forecast.txt_forecast.forecastday;
      });
    };

  }]);
})();
