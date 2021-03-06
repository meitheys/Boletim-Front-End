app.controller('notasController', function ($scope, $http) {

    $scope.notasDTO = { primeiraNota: '', segundaNota: '', media: '', semestre: '', aluno: '', disciplina: ''};

    $scope.salvarNotas = function () {
        console.log("Salvando Notas")
        console.log($scope.notasDTO);
        $http({ method: 'POST', url: 'http://localhost:8080/notas', data: $scope.notasDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                window.alert("SUCCESS! STATUS: " + response.status)
                $scope.toInit();
            }, function (response) {
                window.alert("Impossivel executar 'POST', STATUS: " + response.status + "( " + response.data.error + " )" + "\n"
                + "ERROR: " + response.data.message)
                console.log(response.data);
                console.log(response.status);
            });
    };

    $scope.disciplinaDTO = { id: '', disciplina: '' };

    $scope.toInit = function (){
        $http({ method: 'GET', url: 'http://localhost:8080/disciplinas/findDisciplinas' })
            .then(function (response) {
                $scope.disciplina = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                window.alert("Impossivel executar 'GET', STATUS: " + response.status + "( " + response.data.error + " )" + "\n"
                + "ERROR: " + response.data.message)
                console.log(response.data);
                console.log(response.status);
            });     
    };

    $scope.exibirDisciplinas = function (i) {
        $scope.disciplina = { disciplina: i.disciplina }
    };
});