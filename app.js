var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html'
    })
    .when('/list', {
        templateUrl: 'views/alunos.html'
    })
    .when('/report', {
        templateUrl: 'views/report.html'
    })
    .when('/turma', {
        templateUrl: 'views/turma.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
}]);