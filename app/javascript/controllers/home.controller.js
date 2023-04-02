const app = angular.module('Main', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: '../templates/landing.template.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: '../templates/login.template.html',
            controller: 'LoginController'
        })
        .when('/sign-up', {
            templateUrl: '../templates/signup.template.html',
            controller: 'SignupController'
        })
        .otherwise({
            redirectTo: '/home'
        })
})

app.controller('HomeController', ['$scope', function($scope){

    this.$onInit = () => {
        console.log("hello")
    }

    $scope.login = () => {
        console.log("asdfasdf")
        window.location.href = '#!login'
    }
}])

app.controller('LoginController', ['$scope', function($scope){

    this.$onInit = () => {
        console.log('login controller')
    }
}])

app.controller('SignupController', ['$scope', function($scope){

    this.$onInit = () => {
        console.log('signup conroller')
    }
}])