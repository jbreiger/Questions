console.log('in the routes');
var users= require('./../controllers/users.js')
var questions= require('./../controllers/questions.js')
var answers= require('./../controllers/answers.js')
var path = require('path');

module.exports = function(app){
  app.get('/users', users.index);
  app.get('/questions/:id', questions.show);
  app.post('/users', users.create);
  app.put('/answers/:id', answers.update_likes);
  // // app.delete('/friends/:id', friends.delete);
  app.post('/answers', answers.create);
  app.get('/answers', answers.index);
  app.get('/questions', questions.index);
  app.post('/questions', questions.create);
}