app.controller('disciplinasController', function ($scope, $http) {

    $scope.disciplinasDTO = { disciplinas: '' };

    $scope.salvarDisciplina = function () {
        console.log("Salvando Disciplina")
        console.log($scope.disciplinasDTO);
        $http({ method: 'POST', url: 'http://localhost:8080/disciplinas', data: $scope.disciplinasDTO })
            .then(function (response) {
                console.log(response.data);
                console.log(response.status);
                window.alert("STATUS: " + response.status)
                $scope.toInit();
            }, function (response) {
                console.log(response.data);
                console.log(response.status);
                window.alert("Impossivel executar 'POST', STATUS: " + response.status + "( " + response.data.error + " )" + "\n"
                + "ERROR: " + response.data.message)
            });
    };

    $scope.toInit = function (){
        $http({ method: 'GET', url: 'http://localhost:8080/disciplinas/findDisciplinas' })
            .then(function (response) {
                $scope.disciplinas = response.data;
                console.log(response.data);
                console.log(response.status);
            }, function (response) {
                window.alert("Impossivel executar 'GET', STATUS: " + response.status + "( " + response.data.error + " )" + "\n"
                + "ERROR: " + response.data.message)
                console.log(response.data);
                console.log(response.data.message);
                console.log(response.data.error);
                console.log(response.status);
            });                              
    };

    $scope.exibirDisciplinas = function (i) {
        $scope.disciplinas = { id: '', disciplinas: '' }
    };

    $scope.excluirDisciplinas = function (id){
        $http({ method: 'DELETE', url: 'http://localhost:8080/disciplinas/' + id, data: id })
        .then(function (response) {
            $scope.disciplinas = response.data;
            console.log(response.data);
            console.log(response.status);
            window.alert("Executado Delete, STATUS: " + response.status)
            $scope.toInit();
        }, function (response) {
            window.alert("Impossivel executar 'DELETE', STATUS: " + response.status + "( " + response.data.error + " )" + "\n"
            + "ERROR: " + response.data.message)
            console.log(response.data);
            console.log(response.status);
        });         
    };




});