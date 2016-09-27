var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
approot     = __dirname;
var app = express();

app.use(bodyParser.json())

// app.use(session({
//   secret:'somesecrettokenhere',
//   resave: false,
//   saveUninitialized: true,
//   maxAge: 5000000
// }));



// set an environment variable called APPROOT to keep track of the root folder of your app
process.env['APPROOT'] = __dirname;

// require(path.join(approot, 'test.js'));
console.log(approot);
// console.log(process.env['APPROOT']);

app.use( express.static( path.join( approot, 'client' )));
app.use( express.static( path.join( approot, 'bower_components' )));

require(path.join(approot, 'server/config/mongoose.js'));
//require routes configuration, get a function from the module.exports, that gets invoked while passing it the app
require(path.join(approot, 'server/config/routes.js'))(app);

app.listen(8000, function(){
  console.log('Server is running');
});
