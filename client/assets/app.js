console.log('in the app js page')
var myApp = angular.module('myApp', ['ngRoute', 'ngCookies']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/edit/:id', {
		templateUrl: 'partials/edit.html'
	})
	.when('/new', {
		templateUrl: 'partials/new.html'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html'
	})
	.when('/messages', {
		templateUrl: 'partials/messages.html'
	})
	.when('/', {
		templateUrl: 'partials/index.html'
	})
	.otherwise({
		redirectTo: '/'
	})

});