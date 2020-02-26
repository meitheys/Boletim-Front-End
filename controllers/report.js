app.controller('reportController', function ($scope, $http) {

    $scope.boletim = {aluno: '', format: ''};

    $scope.imprimir = function () {
        console.log("Imprimindo boletim")
        console.log($scope.boletim);
        $http({ method: 'GET', url: 'http://localhost:8080/jrxml/report/' + $scope.boletim.format + '/' + $scope.boletim.aluno})
        .then(function (response){
            console.log(response.status);
            console.log('200');
        }, function (response) {   
        });
    };
});