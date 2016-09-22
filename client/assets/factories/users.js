myApp.factory('usersFactory', ['$http', function($http) {

function UsersFactory(){
this.create = function(){
	console.log('hello');
}

}
return new UsersFactory();
}]);