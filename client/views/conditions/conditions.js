/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu', function($scope, wu){
    $scope.title='Current Conditions';

    $scope.getConditions= function(){
      wu.getConditions($scope.zip).then(function(response){
        $scope.temperatureF = response.data.current_observation.temp_f;
        $scope.temperatureC = response.data.current_observation.temp_c;
        $scope.img = response.data.current_observation.icon_url;
        $scope.time = response.data.current_observation.local_time_rfc822;
        $scope.humidity = response.data.current_observation.relative_humidity;
      });
    };

  }]);
})();
