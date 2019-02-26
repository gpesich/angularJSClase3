(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    
    cursoAngular.controller('ControladorSuperior', function($http, $scope, $interval) {

        function obtenerSegundosActuales() {
            return Math.floor(new Date().getTime() / 100);
        }

        $scope.startstop = "START";
        $scope.segundosDesde = 0;
        $scope.ultimoTimeStamp = obtenerSegundosActuales();
        $scope.tiemposObtenidos = [];

        $scope.cambioEstado = function() {
            if ($scope.startstop === "START") {
                $scope.startstop = "STOP";
                $scope.ultimoTimeStamp = obtenerSegundosActuales();
            }
            else { // le di STOP
                $scope.startstop = "START";
                $scope.tiemposObtenidos.push($scope.segundosDesde);
                $scope.segundosDesde = 0;                
            }
        }

        $interval(function() {
            console.log(obtenerSegundosActuales());

            if ($scope.startstop === "STOP") {
                $scope.segundosDesde = 
                    obtenerSegundosActuales() - $scope.ultimoTimeStamp;
            }

        }, 100);
        
    });


})();