var mongoose = require('mongoose');

var Schema= mongoose.Schema;


var UserSchema= new mongoose.Schema({
	name:{
	type: String,
	required: true,
	unique: true
	}
	// posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
})

mongoose.model("Users", UserSchema);

var QuestionSchema= new mongoose.Schema({
	content:{
	type: String,
	required: true,
	// unique: true
	},
	description:{
	type: String,
	// required: true,
	// unique: true
	},
	_answer: [{type: String, ref: "Answers"}]



	// posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
})

mongoose.model("Questions", QuestionSchema);

var AnswerSchema= new mongoose.Schema({
	content:{
	type: String,
	// required: true,
	// unique: true
	},
	details:{
	type: String,
	// required: true,
	// unique: true
	},
	likes:{
		type:Number
	},
	_question: {type: mongoose.Schema.ObjectId, ref: 'Users'},
	_user: {type: mongoose.Schema.ObjectId, ref: 'Users'}

	// posts: [{type: Schema.Types.ObjectId, ref: 'Posts'}]
})

mongoose.model("Answers", AnswerSchema);