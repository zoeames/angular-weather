/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title='Webcams';

    $scope.getWebcams= function(){
      wu.getWebcams($scope.zip).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };

  }]);
})();
