var profileModule = angular.module('profile', ['dx', 'ngRoute', 'ngResource']);

profileModule.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/profile/product/:id', {
            templateUrl: 'profile/view/product-edit.tpl.html',
            controller: 'EditProductController'
        });
        $routeProvider.when('/profile/products', {
            templateUrl: 'profile/view/profile-products.tpl.html',
            controller: 'ProfileController'
        });
        $routeProvider.when('/profile/details', {
            templateUrl: 'profile/view/profile-details.tpl.html',
            controller: 'ProfileDetailsController'
        });
    }]);