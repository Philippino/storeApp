function homepageController ($scope, $http, $location, cart) {
	$scope.homepage ="Homepage";

	$scope.propertyName = "name";
	$scope.reverse = false;

	$http.get('data/items.json').then(function(response) {
		$scope.items = response.data;
	});

	$scope.sortBy = function(propertyName) {
		$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    	$scope.propertyName = propertyName;
	};

	$scope.order = function(item_id) {
		var item = $.grep($scope.items, function(item){ return item.id == item_id; })
		cart.item = item[0];
		$location.path('/order');
	}
}

function orderController ($scope, $location, cart) {
	$scope.item = cart.item;
	$scope.send = function () {
		cart.buyer = {
			'full_name': $scope.full_name,
			'address': $scope.address,
			'email': $scope.email,
			'phone': $scope.phone,
			'card_number': $scope.card_number
		};
		$location.path('/order-confirmation');
	}

}

function orderConfirmController ($scope, cart) {
	$scope.item = cart.item;
	$scope.buyer = cart.buyer;
}

app.controller('homepageController', ['$scope','$http', '$location', 'cart', homepageController]);
app.controller('orderController', ['$scope', '$location', 'cart', orderController]);
app.controller('orderConfirmController', ['$scope', 'cart', orderConfirmController]);