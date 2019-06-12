'use strict';

angular.module('mapa',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Mapas',{templateUrl:'views/Mapa/search.html',controller:'SearchMapaController'})
      .when('/Mapas/new',{templateUrl:'views/Mapa/detail.html',controller:'NewMapaController'})
      .when('/Mapas/edit/:MapaId',{templateUrl:'views/Mapa/detail.html',controller:'EditMapaController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
