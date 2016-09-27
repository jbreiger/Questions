myApp.controller('usersController', ['$scope','usersFactory', '$routeParams', '$cookies', function($scope, usersFactory, $routeParams, $cookies) {

$scope.create =function(){
	form_data= $scope.newUser;
     usersFactory.create(form_data, function(factory_returned_data){
     	// console.log(factory_returned_data._id);
     	$cookies.id = factory_returned_data._id;
     	$cookies.name = factory_returned_data.name;
     	console.log($cookies.name);
     	// $cookies.name ='josh';
     	$scope.name = $cookies.name;
     	// console.log($cookies.id);
     	 window.location = '#/';
     });

    // find out how to clear the  newUser = ''
   
}

$scope.logout = function(){
     $cookies.id = null;
     window.location ="/#/users"
}

$scope.index =function(){
     usersFactory.index(function(all_users){
     	// console.log(all_users)
     	// $scope.all_users= all_users;
     });
}
$scope.test = "test";
$scope.index();
console.log($cookies.name);
$scope.name= $cookies.name;

if ($cookies.id == null){
     window.location = "/#/users"
}
     

}]);