var app = angular.module('calcApp', []);

app.controller('calcCtrl', calcCtrl);

function calcCtrl($scope) {

    $scope.operatorClick = function (operation) {
        $scope.operator = operation;

    }

    $scope.getResult = function (){
        
        var nbrText1 = parseFloat($scope.text1);
        var nbrText2 = parseFloat($scope.text2);
        var res;
        switch ($scope.operator)
        {
            case '+':
                res = nbrText1 + nbrText2;
                break;
            case '-':
                res = nbrText1 - nbrText2;
                break;
            case '*':
                res = nbrText1 * nbrText2;
                break;
            case '/':
                res = nbrText1 / nbrText2;
            
        }

        $scope.result = res;
    }
    
}

app.controller("TodoCtrl",TodoCtrl);

function TodoCtrl($scope){

    $scope.myTodoList= [
        {"TodoItem": "Read book1"},
        {"TodoItem": "Read book2"},
        {"TodoItem": "Read book3"}
    ]
    $scope.editText = "Edit";
    $scope.editState = false;

    $scope.deleteTodo = function(listNbr) {
        console.log(listNbr);
        var myTodoLength = $scope.myTodoList.length-1;
        var myTodoCtr = 0;
        for (var i=0; i <= myTodoLength; i++){
            if (i!==listNbr){
            $scope.myTodoList[myTodoCtr] = $scope.myTodoList[i];
            myTodoCtr = myTodoCtr + 1;
            }
        }
        $scope.myTodoList.pop();
    }

    $scope.addTodo = function() {
        $scope.myTodoList.push({"TodoItem": $scope.inputTodo});
    }

    $scope.editClick = function() {
        if ($scope.editText === "Edit"){
            $scope.editText = "Done";
            $scope.editState = true;
        }

        else {
            $scope.editText = "Edit";
            $scope.editState = false;

        }
    }
}
//node dealserver.js