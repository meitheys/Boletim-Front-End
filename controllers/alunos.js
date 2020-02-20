app.controller('alunosController', function ($scope, $http) {

    $scope.alunosDTO = { nomeAluno: '', responsavel: '', telefone: '', turma: '' };

    $scope.salvarAluno = function () {
        console.log("Salvando Aluno")
        console.log($scope.alunosDTO);
        $http({ method: 'POST', url: 'http://localhost:8080/alunos', data: $scope.alunosDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                $scope.toInit();
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });
    };

    $scope.toInit = function (){
        $http({ method: 'GET', url: 'http://localhost:8080/alunos/findAlunos' })
            .then(function (response) {
                $scope.alunos = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });                              
    };

    $scope.exibirAlunos = function (i) {
        $scope.alunos = { id: i.id, nomeAluno: i.nomeAluno, responsavel: i.responsavel, telefone: i.telefone, turma: i.turma }
    };
    
    $scope.excluirAluno = function (id){
        $http({ method: 'DELETE', url: 'http://localhost:8080/alunos/' + id, data: id })
        .then(function (response) {
            $scope.alunos = response.data;
            console.log(response.data);
            console.log(response.status);
            $scope.toInit();
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });         
    };
});