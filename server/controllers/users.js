var mongoose = require('mongoose');
var User = mongoose.model('Users');

function UsersController(){
  
this.index = function(req,res){
  User.find({}, function(err, user){
  	if(err){
  		res.json(err)
  	} else{
  		res.json(user);
  	}
  })
}  

this.create = function(req,res){
console.log(req.body.name);
	User.findOne({name: req.body.name}, function(err, success){
		if(err){
			res.json(err)
		} else{
			// console.log(success);
				if(success == null){
					console.log('making new')
					var user= new User(req.body);
					user.save(function(err, newperson){
						if(err){
							console.log(err);
						}else{
							console.log('didnt find current user creating new person')
							res.json(newperson);
						}
					})
				}
				else{
					console.log('found')
					res.json(success)
				}
		}
	})
} 

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
module.exports = new UsersController(); // what does this export?    