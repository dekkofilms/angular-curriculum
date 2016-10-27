var app = angular.module('myTodo', []);

app.controller('todo', ['$scope', function ($scope) {
  $scope.todoList = {};
  $scope.todoList.todos = ['make coffee', 'drink coffee'];

  $scope.addTodo = function (todo) {
    $scope.todoList.todos.push(todo);
    console.log($scope.todoList.todos);
  }
}])
