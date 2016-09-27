myApp.controller('questionsController', ['$scope','questionsFactory', '$routeParams', '$cookies', function($scope, questionsFactory, $routeParams, $cookies) {

$scope.create = function(){
	// console.log($scope.newQuestion);
	form_data= $scope.newQuestion;
	if($scope.newQuestion.content.length>10){
	console.log($scope.newQuestion.content.length);
		questionsFactory.create(form_data);
		window.location = "#/";

	}
	

	

}

$scope.clear_form= function(){
	console.log('in clear form');
	$scope.newQuestion ="";
}

$scope.index=  function(){
 questionsFactory.index(function(all_questions){
     	// console.log(all_users)
     	$scope.all_questions= all_questions;
     	console.log($scope.all_questions, "here is all the questions");
     });
}

$scope.show= function(){
	// console.log($routeParams.id);
	questionsFactory.show($routeParams.id, function(factory_data){
		// console.log(factory_data, "this is the factory data");
		$scope.question = factory_data;
		console.log($scope.question);

	});
}

$scope.index();

$scope.show();

}]);