angular.module('ToDo', []);

angular.module('ToDo').controller('Main', function($scope) {
    $scope.data;
    $scope.toDoTasks = [];
    $scope.errMsg_1 = "Can't input an empty task!";
    $scope.errMsg_2 = "Your task already exsists!";
    $scope.err_1 = false;
 //   $scope.err_2 = $scope.check($scope.toDoTasks);
    
    $scope.addTask = function(input) {
        if (input.length > 0) {
            $scope.toDoTasks.push(input);
            $scope.err_1 = false;
        } else {
            $scope.err_1 = true;
        }
    };
    
    $scope.remember = function (z) {
        $scope.data = z;
    };
    
    $scope.remove = function(x) {
        var index = $scope.toDoTasks.indexOf(x)
        $scope.toDoTasks.splice(index, 1);
    };
 /* $scope.check = function(y) {
        for (var i = 0; $scope.toDoTasks.length >= i; i++) {
            if (y === toDoTasks[i]) {
                $scope.err_2 = true;
            } else {
                $scope.err_2 = false;
            }
        };
    }; */
 /*   $scope.check = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            for (var j = 0; j < myArray.length; j++) {
                if (i != j) {
                    if (myArray[i] == myArray[j]) {
                        return true;
                    }
                }
        }
        return false;
    }; */
           
           
});

