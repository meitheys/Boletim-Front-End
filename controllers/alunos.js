app.controller('alunosController', function ($scope, $http) {

    $scope.alunosDTO = {nomeAluno: '', responsavel: '', telefone: '', turma: ''};

    $scope.salvarAluno = function () {
        console.log("Salvando Aluno")
        console.log($scope.alunosDTO);
        $http({ method: 'POST', url: 'http://localhost:8080/alunos', data: $scope.alunosDTO})
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });
    };

    /*   $scope.toInit

        $http({ method: 'GET', url: 'http://localhost:8080/alunos/findAll' })
            .then(function (response) {
                $scope.alunos = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });                                                                                                                                 */
});