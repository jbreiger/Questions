console.log('in the app js page')
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html'
	})
	.when('/users', {
		templateUrl: 'partials/users.html'
	})
	.when('/questions/:id', {
		templateUrl: 'partials/show_question.html'
	})
	.when('/questions/:id/new_answer', {
		templateUrl: 'partials/show_answer.html'
	})
	.when('/new_question', {
		templateUrl: 'partials/new_question.html'
	})
	.when('/', {
		templateUrl: 'partials/index.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});