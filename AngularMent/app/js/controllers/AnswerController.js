
questApp.controller("AnswerController", 
    function AnswerController($scope){
        $scope.save = function(answer, answerForm) {
            if(answerForm.$valid)
            //saving data
            alert(answer.author + ", ваш ответ сохранен");
        }
});