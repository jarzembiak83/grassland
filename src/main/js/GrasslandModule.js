var grasslandModule = angular.module('grassland', ['ngRoute', 'annualPlan']);
grasslandModule.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider.when('/index', {
            templateUrl: 'templates/common/index.tpl.html',
            controller: 'IndexController'
        });
        
        //na potrzeby developmentu
        $routeProvider.otherwise({
            redirectTo: '/plan/annual'
        });
    }]
);
