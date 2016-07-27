var app = angular.module('guestScanApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'HomeCtrl',
		templateUrl: 'templates/home.html',
	})
	$routeProvider.when('/signup', {
		controller: 'SignUpCtrl',
		templateUrl: 'templates/signup.html',
	})
	$routeProvider.when('/bmprofile', {
		controller: 'bmProfileCtrl',
		templateUrl: 'templates/bm/bmprofile.html',
	})
	$routeProvider.when('/tenantprofile', {
		controller: 'tenantProfileCtrl',
		templateUrl: 'templates/tenant/tenantprofile.html',
	})
	$routeProvider.when('/securityprofile', {
		controller: 'securityProfileCtrl',
		templateUrl: 'templates/security/securityprofile.html',
	})
	$routeProvider.when('/visitorprofile', {
		controller: 'visitorProfileCtrl',
		templateUrl: 'templates/visitor/visitorprofile.html',
	})



	$routeProvider.when('/bm/:uid', {
		controller: 'bmProfileCtrl',
		templateUrl: 'templates/bm/bmprofile.html',
	})
	$routeProvider.when('/tenant/:uid', {
		controller: 'tenantProfileCtrl',
		templateUrl: 'templates/tenant/tenantprofile.html',
	})
	$routeProvider.when('/security/:uid', {
		controller: 'securityProfileCtrl',
		templateUrl: 'templates/security/securityprofile.html',
	})
	$routeProvider.when('/visitor/:uid', {
		controller: 'visitorProfileCtrl',
		templateUrl: 'templates/visitor/visitorprofile.html',
	})

});

app.controller('HomeCtrl', function($scope, $http) {



	$scope.signin = function() {
		console.log("signed in!");


		$location.path("/$scope.usertype/$firebase.uid")
	}



	});

app.controller('SignUpCtrl', function($scope, $http) {
	

	});


app.controller('bmProfileCtrl', function($scope, $http) {
	

	});

app.controller('tenantProfileCtrl', function($scope, $http) {
	

	});

app.controller('securityProfileCtrl', function($scope, $http) {
	

	});

app.controller('visitorProfileCtrl', function($scope, $http) {
	

	});

