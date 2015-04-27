profileModule.factory("ProfileService", ['$resource',
    function ($resource) {
        return $resource('/api/resource/shipment/import');
    }]);