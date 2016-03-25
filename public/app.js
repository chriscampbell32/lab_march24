angular.module("RoutingApp", ["ngRoute"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
        $routeProvider
            .when('/first', {
                templateUrl: "first.html"
            })
            .when('/second',{
                templateUrl: "second.html"
            })
            .when('/third', {
                templateUrl: "third.html"
            })
            .when('/fourth', {
                templateUrl: "fourth.html"
            })
            .otherwise({
                templateUrl: "initial.html"
            });
        $locationProvider.html5Mode(true);
    }]);