(function () {
    "use strict";

    //precisa selecionar o elemento, no caso aqui pelo id, para dizer onde
    //vai fechar a aplicação
    var div1 = document.getElementById('app1');
    var div2 = document.getElementById('app2');

    //aplicação1
    angular
        .module('app1', [])
        .controller('controlador1', function ($scope) {
            $scope.nome = 'Frederico';
        });

    //aplicação2
    angular
        .module('app2', [])
        .controller('controlador2', function ($scope) {
            $scope.contador = '10';
        });

    //com o bootstrap é passado o elemento no qual vai renderizar a aplicação
    //primeiro parâmetro o elemento, segundo o modulo da aplicação
    angular.bootstrap(div1, ['app1']);
    angular.bootstrap(div2, ['app2']);


})();