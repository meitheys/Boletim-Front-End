app.controller('turmaController', function ($scope, $http) {

    $scope.turmaDTO = {numeroTurma: '', periodo: ''};

    $scope.salvarTurma = function () {
        console.log("Salvando turma")
        console.log($scope.turmaDTO);
        $http({ method: 'POST', url: 'http://localhost:8080/turma', data: $scope.turmaDTO})
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            $scope.toInit();
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });
    };

    $scope.toInit = function () {
        $http({ method: 'GET', url: 'http://localhost:8080/turma/findTurmas' })
            .then(function (response) {
                $scope.turma = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
            });                              
    };

    $scope.exibirTurm = function (i) {
        $scope.alunos = { id: i.id, numeroTurma: i.numeroTurma, periodo: i.periodo }
    };

    $scope.excluirTurma = function (id){
        $http({ method: 'DELETE', url: 'http://localhost:8080/turma/' + id, data: id })
        .then(function (response) {
            $scope.turma = response.data;
            console.log(response.data);
            console.log(response.status);
            $scope.toInit();
        }, function (response) {
            console.log(response.data);
            console.log(response.status);
        });         
    };








});