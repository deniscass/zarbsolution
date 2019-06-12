
angular.module('mapa').controller('NewMapaController', function ($scope, $location, locationParser, flash, MapaResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.mapa = $scope.mapa || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The mapa was created successfully.'});
            $location.path('/Mapas');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        MapaResource.save($scope.mapa, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Mapas");
    };
});