var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Question = mongoose.model('Questions');
var Answer = mongoose.model('Answers');

function AnswersController(){
  
this.index = function(req,res){
  Answer.find({}, function(err, user){
  	if(err){
  		res.json(err)
  	} else{
  		res.json(user);
  	}
  })
}  

this.create = function(req,res){
// console.log(req.body, "the answer boyd");
var answer= new Answer(req.body);
console.log(answer);
answer.save(function(err, success){
	if(err){
    console.log('error');
		res.json(err);
	}else{
    console.log('succesffuly saved answer')
		// res.json(success);
    Question.findByIdAndUpdate(success._question, {$push: {_answer: success._id}}, {safe:true, upsert:true, new:true}, function(err,answer){
        res.json(answer);
      })
	}
})

}

this.update_likes = function(req, res){
  Answer.findByIdAndUpdate(req.params.id, {$inc: { likes: 1}}).exec();
    res.json({'answer like': 'success'});
}

// need to add which user made this

// this.show = function(req, res){
//   Question.findOne({_id: req.params.id}, (function(err, success){
//     if(err){
//       res.json(err)
//     }else{
//       res.json(success);
//     }
//   })
//   )
//   // res.json({test: "in create"})
// } // var question= new Question(req.body);
// 					user.save(function(err, newperson){
// 						if(err){
// 							console.log(err);
// 						}else{
// 							console.log('didnt find current user creating new person')
// 							res.json(newperson);
// 						}
// 					})
// 				}
// 				else{
// 					console.log('found')
// 					res.json(success)
// 				}
// 		}
// 	})
// } 

// 	var user= new User(req.body);
// 	user.save(function(err, success){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			res.json(success);
// 		}
// 	})
//   // res.json({test: "in create"})
// }   



}
module.exports = new AnswersController(); // what does this export?    