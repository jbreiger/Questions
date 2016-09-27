myApp.factory('answersFactory', ['$http', function($http) {

function AnswersFactory(){

this.create = function(form_data){
	console.log(form_data);
	$http.post('/answers', form_data).then(function(returned_data){
       console.log(returned_data);
       // callback(returned_data.data);
      });  
}

this.index = function(callback){
	$http.get('/answers').then(function(returned_data){
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

this.update_likes = function(answer_id, question_id, callback){
	console.log(question_id);
	$http.put('/answers/'+ answer_id).then(function(returned_data){
		console.log(returned_data);
	}) 

	$http.get('/questions/'+ question_id).then(function(returned_data){
		// console.log(returned_data.data);
		console.log(returned_data.data)
	});	
	
}

}
return new AnswersFactory();
}]);