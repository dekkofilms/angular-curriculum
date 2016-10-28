var app = angular.module("firstApp", []);

app.controller("MyFirstController", ['$scope', function($scope) {
  $scope.name = "Severus Snape";
}])

app.controller("ExercisesController", ['$scope', ($scope) => {
  $scope.FavColor = 'Burnt Orange';
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightNow = new Date();
}])

app.controller('madLib', ['$scope', ($scope) => {
  $scope.generateBoo = false;
  $scope.generate = function () {
    $scope.generateBoo = true;
  };


  $scope.madlibs = [
    {name: "",
     description: 'Boy\'s name'
   },
    {name: '',
     description: 'yo'
   },
    {name: '',
     description: 'yo'
   },
    {name: '',
     description: 'yo'
   },
    {name: '',
     description: 'yo'
   },
    {name: '',
     description: 'yo'
   },
    {name: '',
     description: 'yo'
   },
 ]

  $scope.playAgain = function () {
    $scope.generateBoo = false;
    $scope.boyname = null;
    $scope.adjective = null;
    $scope.pluralnoun1 = null;
    $scope.pluralnoun2 = null;
    $scope.insectplural = null;
    $scope.pluralnoun3 = null;
    $scope.verbs = null;
  }
}])
