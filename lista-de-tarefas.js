(function () {
    "use strict";

    //módulo
    angular.module('listaDeTarefasApp', []);

    //controller
    angular.module('listaDeTarefasApp')
        .controller("listaDeTarefasController", listaDeTarefasController);
        
        listaDeTarefasController.$inject = ['$scope'];

        function listaDeTarefasController($scope) {
            var vm = this; //this aqui está referenciando ao contexto dessa função

            vm.tarefas = [
                { text: 'Estudar AngularJS', feito: true },
                { text: 'Fazer uma aplicação em AnjularJS', feito: false },
            ];

            vm.restam = restam;
            vm.addTarefa = addTarefa;
            vm.arquivar = arquivar;

            function restam() {
                var contador = 0;
                angular.forEach(vm.tarefas, function (trf) {
                    if (!trf.feito) contador++;
                });
                return contador;
            }

            function addTarefa() {
                vm.tarefas.push({ text:  vm.tarefaText, feito: false });
                vm.tarefaText = '';
            }

            function arquivar() {
                // var oldTarefas = vm.tarefas;
                // vm.tarefas = [];
    
                // angular.forEach(oldTarefas, function (trf) {
                //     if (!trf.feito)
                //         vm.tarefas.push(trf);
                // });
    
                vm.tarefas = vm.tarefas.filter(function (trf) { return !trf.feito });
            }
        }

})();