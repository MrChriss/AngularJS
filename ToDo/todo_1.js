angular.module('ToDo', []);

angular.module('ToDo').controller('Main', function($scope) {
    $scope.data;
    $scope.toDoTasks = [];    
    $scope.addTask = function(input) {
        return $scope.toDoTasks.push(input);
    };
});
