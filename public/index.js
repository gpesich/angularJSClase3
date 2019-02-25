(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    
    cursoAngular.controller('ControladorSuperior', function($http, $scope) {

        $scope.top = 10;
        $scope.variableOrden = 'id';

        $scope.ordenar = function(col) {            
            $scope.variableOrden = col;
        }

        $scope.alumnos = [];

        $scope.consultaXid = function() {            
            $http.get('/alumnos/' + $scope.idAlumno)
            .then(
            function(resultado) {
                $scope.alumnos = resultado.data;
                if (resultado.data.length === 0) {
                    alert('resultado vacio');
                }
            }, 
            function() {

            });
        }
        
        $scope.borrarAlumno = function(objAlumno) {            
            let idx = $scope.alumnos.indexOf(objAlumno);
            $scope.alumnos.splice(idx, 1);
        }
    });

    cursoAngular.filter('escribirBien', function() {
        return function(z) {
            let arrZ = z.split('');
            let prim = arrZ[0].toUpperCase();
            arrZ[0] = prim;        
            return arrZ.join('');
        }
    });

    cursoAngular.filter('lengujeInclusivo', function() {
        return function(z) {
            return z.replace('todos','todxs');
        }
    });

    cursoAngular.filter('tamanio', function() {
        return function(z) {
            return z.length;
        }
    });

    cursoAngular.filter('ordenamientoInicial', function() {
        return function(arrInput) {
            let arrOutput = arrInput.sort(function(a, b) {
                if (a.apellido < b.apellido) {
                    return -1;
                }
                if (a.apellido === b.apellido) {
                    if (a.nombre < b.nombre) {
                        return -1;
                    }
                }
                return 1;
            });
            console.log(arrOutput);
            return arrOutput;
        }
    });


})();