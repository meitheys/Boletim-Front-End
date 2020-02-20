app.controller('turmaController', function ($scope, $http) {

    $scope.turma = {numeroTurma: '', periodo: ''};

    $scope.salvarTurma = function () {
        console.log("Salvando turma")
        console.log($scope.turma);
        $http({ method: 'POST', url: 'http://localhost:8080/turma', data: $scope.turma})
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });
    };
});