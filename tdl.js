var appX = angular.module("mainApp", ["ui.router"]);
appX.config([
  "$stateProvider",
  function($stateProvider) {
    $stateProvider
      .state("first", {
        url: "/first-message",
        templateUrl: "tdl1.html",
        controller: "app"
      })
      .state("second", {
        url: "/second-message",
        templateUrl: "tdl2.html",
        controller: "app"
      });
  }
]);
appX.controller("app", function($scope) {
  $scope.tasks = [];
  $scope.searchEnter = function() {
    if (event.keyCode == 13 && $scope.task != "") {
      $scope.addTask();
      document.getElementById("textBox").value = "";
    }
  };
  $scope.addTask = function() {
    $scope.tasks.push({ taskMessage: $scope.task, status: "false" });
  };
  $scope.delete = function(i) {
    var index = $scope.tasks.indexOf(i);
    $scope.tasks.splice(index, 1);
  };
  $scope.blurOn = function() {
    document.activeElement.blur();
  };
  $scope.enterEdit = function(msg) {
    if (event.keyCode == 13 && msg != "") {
      document.activeElement.blur();
    }
  };
});
appX.directive("addTask", function() {
  return {
    templateUrl: "tdl1.html"
  };
});
