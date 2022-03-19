(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope','$filter'];
function LunchCheckController($scope,$filter)
{
   $scope.item_count = 0;  
   $scope.lunch_message = "";

$scope.checkLunch = function () 
    {
        var lunchitems = $scope.items;

        if(!lunchitems)
        {          
          $scope.item_count = 0;
          $scope.lunch_message ="Please enter data first";       
        }
        else
        {
            var count = splitString(lunchitems,',');
            $scope.item_count = count;

            if(count> 0 && count<= 3)
            $scope.lunch_message = "Enjoy!";
            else 
                $scope.lunch_message = "Too much!";
            

            function splitString(stringToSplit, separator) 
            {
                const arrayOfStrings = stringToSplit.split(separator);
                return arrayOfStrings.length;
            }
        }

    }   
};
})();






/* 
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope', '$filter'];
function MsgController($scope, $filter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = .45;

  $scope.sayMessage = function () {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}
 */