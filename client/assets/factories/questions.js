myApp.factory('questionsFactory', ['$http', function($http) {

function QuestionsFactory(){

this.create = function(form_data){
	console.log(form_data);
	$http.post('/questions', form_data).then(function(returned_data){
       console.log(returned_data);
       // callback(returned_data.data);
      });  
}

this.index = function(callback){
	$http.get('/questions').then(function(returned_data){
		// console.log(returned_data.data);
		callback(returned_data.data);
	})	
}

this.show = function(id, callback){
	$http.get('/questions/'+ id).then(function(returned_data){
		// console.log(returned_data.data);
		callback(returned_data.data)
	});	
}



}
return new QuestionsFactory();
}]);