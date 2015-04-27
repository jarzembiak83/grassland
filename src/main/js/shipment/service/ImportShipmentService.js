shipmentModule.factory("ImportShipmentService", ['$resource',
  function ($resource) {
        return $resource('/api/resource/shipment/import');
  }]);