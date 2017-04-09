;(function (){
	"use strict";

	angular.
		module("todoApp", []).
		controller('mainCtrl', function ($scope) {
			$scope.saved = localStorage.getItem('todos');
			$scope.tasks = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [];

			$scope.addTask = function() {
				if(!$scope.taskText) {
					return;
				}
				$scope.tasks.push({
					text: $scope.taskText.trim(),
					done: false
				});
				$scope.taskText = '';
				localStorage.setItem('todos', JSON.stringify($scope.tasks));
			};

			$scope.storage = function() {
				var savedTasks = $scope.tasks;
				$scope.tasks = [];
				angular.forEach(savedTasks, function(todo){
					console.log(todo.done);
					if (!todo.done)
						$scope.tasks.push(todo);
				});
				localStorage.setItem('todos', JSON.stringify($scope.tasks));
			};



			// $scope.removoTodo = function (todo) {
			// 	$scope.tasks.splice(todo, 1);
			// 	localStorage.removeItem(localStorage.key(todo));
			// };

});


})();
