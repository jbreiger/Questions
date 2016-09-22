myApp.controller('usersController', ['$scope','usersFactory', '$routeParams', '$cookies', function($scope, usersFactory, $routeParams, $cookies) {

$scope.create =function(){
     usersFactory.create();
}

}]);