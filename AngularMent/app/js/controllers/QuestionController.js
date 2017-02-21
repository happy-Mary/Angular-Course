questApp.controller('QuestionController',
    function QuestionController($scope, $http){
     $scope.loaded = false;
    	
    $scope.load = function(){
    	var conf = {
    		timeout: 6000
    	}
    	
    	$http.get("question.json", conf).
    	success(function(data, status, headers, config){
    		$scope.question = data.question;
    		$scope.loaded = true;
    		console.log(config);
    	}).error(function(data, status, headers, config){
    		console.log("Код ответа: "+ status);
    	})
    }
      
      $scope.voteUp = function (answer){
            answer.rate++;
        };
      $scope.voteDown = function (answer){
            answer.rate--;
        };
    }
)
