(function() {
    var cursoAngular = angular.module('CursoAngular', []);
    
    cursoAngular.controller('ControladorSuperior', function($http, $scope, $servicioMensjes) {

        $scope.mostrarAdvertencia = true;

        $scope.llamarServicio = function() {
            $servicioMensjes.saludar();
        }

        $scope.observarNombre = function() {
            let t = $scope.frmalumno.nombre.$invalid;
            $scope.mostrarAdvertencia = t;
            console.log(t);
        }

        $scope.onSubmit = function(alumno) {
            alert(JSON.stringify(alumno));

            postData = {
                method: 'POST',
                url : 'alumno',
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : alumno
            }

            $http(postData).then(function(resp) {
                alert(JSON.stringify(resp));
            }, function(err) {
                alert(JSON.stringify(err));
            });
        }
    });

    cursoAngular.factory('$servicioMensjes', function($http) {
        return {
            saludar: function() {
                alert('aqui dentro del servicio');
            }, 
            agregarAlumno: function() {

            }
        }
    });



})();