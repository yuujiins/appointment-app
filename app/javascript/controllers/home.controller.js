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

    $scope.user = {
        email: '',
        password: ''
    }

    this.$onInit = () => {
        console.log('login controller')
    }

    $scope.login = () => {
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify($scope.user)
        })
            .then(data => data.json())
            .then(result => {
                alert('Welcome!')
            })
    }
}])

app.controller('SignupController', ['$scope', function($scope){

    $scope.user = {
        last_name: '',
        first_name: '',
        middle_name: '',
        address: '',
        contact_number: '',
        email: '',
        password: ''
    }
    $scope.retypePassword

    this.$onInit = () => {
        console.log('signup conroller')
    }

    $scope.formSubmit = () => {
        fetch('/users/', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify($scope.user)
        }, )
            .then(data => data.json())
            .then(result => {
                alert("You are now signed up")
            })
    }


}])