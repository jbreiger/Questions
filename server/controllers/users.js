console.log('in the users controller');

function UsersController(){
  
  this.index = function(req,res){
      res.json({test: "test"})
    }  

}
module.exports = new UsersController(); // what does this export?    