(function () {
    'use strict';
    


    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    
    $scope.checkLunch = function() {
      var items = $scope.lunchItems.split(',');
      var itemCount = items.length;
      
      if ($scope.lunchItems.trim() === "") {
        $scope.message = "Please enter dish first";
      } else if (itemCount <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };
  }

  
    
    })();
    
    
