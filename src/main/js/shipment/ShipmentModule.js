var shipmentModule = angular.module('shipment', ['dx', 'ngRoute', 'ngResource']);

shipmentModule.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/shipment/import', {
            templateUrl: 'shipment/view/import-shipment.tpl.html',
            controller: 'ImportShipmentGridController'
        });
  }]);