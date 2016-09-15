//we do this funtion to make sure our variables don't bleed outside of the app into global scope
(function () {
'use strict';	

// here we define our application and bound to html tag in out html file
angular.module('myFirstApp', [])

//this is a controller that responsible for our view and it bounds to the div in html file
.controller('MyFirstController', function ($scope) {
	$scope.items = "";
	$scope.message = "";
	$scope.displayMessage = function () {
		if ($scope.items == "" || $scope.items.trim() == "" || $scope.items.replace(/,/g , "").trim() == "") {
			$scope.message = "Please enter some data first!";
			
		} else if ($scope.items.split(",").length <= 3) {
			$scope.message = "Enjoy!";
		} else if ($scope.items.split(",").length > 3) {
			$scope.message = "Too much!!!";
		}
		return $scope.message;
	};

});

})();