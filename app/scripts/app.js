var app = angular.module('myApp', []);

app.controller('Controller', function($scope){
    $scope.message = "Hello World!"; 
    $scope.alunos = ['Matheus', 'Abigail', 'Daniel', 'Gabriel', 'Roger', 'Rafael'];
});