profileModule.controller('ProfileController', ['$scope', '$http', '$location', '$routeParams', 'ProfileService', function ($scope, $http, $location, $routeParams, ProfileService) {

    var customStore = new DevExpress.data.CustomStore({
        load: function (loadOptions) {
            var d = $.Deferred();
            $http.get('/api/resource/profile/myProducts').success(function (data) {
                d.resolve(data, {totalCount: data.length});
            });
            return d.promise();
        }
    });

    $scope.gridDataSourceConfiguration = {
        store: customStore
    };

    $scope.products = {
        dataSource: this.gridDataSourceConfiguration,
        noDataText: 'Brak danych',

        bindingOptions: {
            dataSource: 'gridDataSourceConfiguration'

        },
        onItemClick: function (data) {
            $scope.product = data.itemData;
            $location.path('/profile/product/'+data.itemData.id)
        }
    };

}]);