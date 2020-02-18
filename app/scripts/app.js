var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/list', {
        templateUrl: 'views/listAlunos.html',
        controller: 'Controller'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);
