questApp.controller('QuestionController',
    function QuestionController($scope, $http){
      
         $http.get('question.json').success(function(data) {
            $scope.question=data.question;
        });
         
        $scope.voteUp = function (answer){
            $http({method:'GET', url:'setAnswer.php', params: {'id':answer.id, 'up': true}}).
             success(function(data) {
                 answer.rate++;
                 console.log(data);
            })
        };
        $scope.voteDown = function (answer){
            $http({method:'GET', url:'setAnswer.php', params: {'id':answer.id,'up': false}}).
             success(function(data) {
                 answer.rate--;
                 console.log(data);
            })
        };
    }
)