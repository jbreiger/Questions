var mongoose = require('mongoose');
var User = mongoose.model('Users');
var Question = mongoose.model('Questions');

function QuestionsController(){
  
this.index = function(req,res){
  Question.find({}, function(err, user){
  	if(err){
  		res.json(err)
  	} else{
  		res.json(user);
  	}
  })
}  

this.create = function(req,res){
console.log(req.body);
var question= new Question(req.body);
question.save(function(err, success){
	if(err){
		res.json(err);
	}else{
		res.json(success);
	}
})

}

this.show = function(req, res){
 Question.findOne({_id: req.params.id})
  .populate('_answer')
  .populate({ path : '_answer', populate : { path : '_user' } })

  .exec (function(err, success){
    if(err){
      res.json(err)
    }else{
      console.log(success);
      res.json(success);
    }
  }) 


  // Question.findOne({_id: req.params.id}, (function(err, success){
  //   if(err){
  //     res.json(err)
  //   }else{
  //     console.log(success);
  //     res.json(success);
  //   }
  // })
  // )
  // res.json({test: "in create"})
} // var question= new Question(req.body);
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
module.exports = new QuestionsController(); // what does this export?    