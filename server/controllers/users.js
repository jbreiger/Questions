var mongoose = require('mongoose');
// var User = mongoose.model('Users');

function UsersController(){
  
  this.index = function(req,res){
      res.json({test: "test"})
    }  

}
module.exports = new UsersController(); // what does this export?    