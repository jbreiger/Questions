myApp.controller('answersController', ['$scope','answersFactory', '$routeParams', '$cookies', function($scope, answersFactory, $routeParams, $cookies) {

$scope.create = function(form_data, question_id){
	if($scope.newAnswer.content.length>5){

		$scope.newAnswer._question = $routeParams.id;
		$scope.newAnswer._user = $cookies.id;
		$scope.newAnswer.likes = 0;
		form_data= $scope.newAnswer;
		console.log(form_data);
		// console.log($routeParams.id);
		answersFactory.create(form_data);
		$cookies.refresh = "true";
		window.location = "#/"
		
	}

	$scope.newAnswer ="";
	// window.location = "#/"

}

$scope.clear_form= function(){
	console.log('in clear form');
	$scope.newAnswer ="";
}

$scope.index = function(){
	answersFactory.index(function(factory_data){
		console.log(factory_data)
	});
}

$scope.update_likes = function(answer){
	answersFactory.update_likes(answer, $routeParams.id);
	$scope.index();
	// if this was set up correctly and had an answers controller then would run 
	// get index of update likes
}

$scope.index();
// $scope.question_id = $routeParams.id
// console.log($scope.question_id);


}]);