var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/list', {
        templateUrl: 'views/alunos.html',
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);