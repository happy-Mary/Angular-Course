questApp.directive("answerList", function () {
	return {
		restrict: "A",
		templateUrl: "templates/answersTemplate.html",
		transclude: true
	}
});