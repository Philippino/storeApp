var app = angular.module('storeApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'pages/homepage.html',
		controller: 'homepageController'
	})
	.when('/order', {
		templateUrl: 'pages/order.html',
		controller: 'orderController'
	})
	.when('/order-confirmation', {
		templateUrl: 'pages/orderConfirmation.html',
		controller: 'orderConfirmController'
	});
});

