(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    
    cursoAngular.controller('ControladorSuperior', function($http, $scope, $interval, $filter) {

        $scope.salida = '';

        $scope.usarFiltro = function() {            
            $scope.salida =  $filter('lenguajeInclusivo')('hola a todos');
        }
        
    });

    cursoAngular.filter('lenguajeInclusivo', function() {
        return function(z) {
            return z.replace('todos','todxs');
        }
    });


})();