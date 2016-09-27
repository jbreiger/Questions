myApp.factory('usersFactory', ['$http', function($http) {

function UsersFactory(){
this.create = function(form_data, callback){
	// console.log(form_data);
	$http.post('/users', form_data).then(function(returned_data){
       callback(returned_data.data);
      });  
}

this.index = function(callback){
	$http.get('/users').then(function(returned_data){
		// console.log(returned_data.data);
		callback(returned_data.data);
	})	
}

}
return new UsersFactory();
}]);