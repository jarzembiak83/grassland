profileModule.controller('EditProductController', ['$scope', '$http', '$location', '$routeParams', 'ProfileService', function ($scope, $http, $location, $routeParams, ProfileService) {

    $scope.params = $routeParams;

    $http.get('/api/resource/profile/product/' + $scope.params.id).success(function (data) {
        $scope.product = data;
    });

    $scope.backButton = {
        text: 'Wróć do listy',
        onClick: function () {
            $location.path('/profile/products')
        }
    }
}]);