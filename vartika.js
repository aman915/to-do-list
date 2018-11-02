"use strict";

var taskManagerModule = angular.module("taskManager", ["ui.router"]);
taskManagerModule.config([
  "$stateProvider",
  "$urlRouterProvider",
  function($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state("home", {
      abstract: true,
      url: "/home",
      templateUrl: 'index.html'
    }).state("home.list", {
      url: "/list",
      templateUrl: "task-list.html",
      controller: "addTaskManager"
    }).state("home.task", {
      url: "/:id",
      templateUrl: "task-detail.html"
    });

    $urlRouterProvider.otherwise("/home/list");
  }
]);

// taskManagerModule.directive("editableInput", function() {
//   return {
//     templateUrl: "tdl1.html"
//   };
// });

taskManagerModule.controller("addTaskManager", function($scope) {
  /********************************************************************************************************************************************/
  /************************************************** CONTROLLER ANGULAR SCOPE DEFCLARATIONS **************************************************/
  /********************************************************************************************************************************************/
  $scope.tasks = [];
  $scope.newTask = {
    id : 0,
    title: "",
    status: false,
    editable: false
  };

  $scope.addTask = addTask;

  $scope.deleteTask = deleteTask;

  
  /********************************************************************************************************************************************/
  /************************************************** CONTROLLER ANGULAR EVENT DEFINITIONS ****************************************************/
  /********************************************************************************************************************************************/

  /**
   * ...
   * @param {*} $event
   */
  function addTask($event) {
    if ($event.keyCode == 13 && $scope.newTask.title != "") {
      $scope.newTask.id = Math.random()*10000;
      $scope.tasks.push($scope.newTask);
      $scope.newTask = {};
    }
  }

  /**
   *
   */
  function deleteTask(task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index, 1);
  }

  /**
   * disable task editing ...
   * @param {*} $event ...
   * @param {*} task ...
   */
  // function disableTaskEditing($event, task) {
  //   // disable if ....
  //   if ((keyCode in $event && $event.keyCode == 13 && task.title !== "") || !(keyCode in $event)) {
  //     task.editable = false;
  //   }
  // }  
});


