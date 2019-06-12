angular.module('mapa').factory('MapaResource', function($resource){
    var resource = $resource('rest/mapas/:MapaId',{MapaId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});