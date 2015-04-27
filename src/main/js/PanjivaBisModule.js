var panjivaBisModule = angular.module('panjivabis', ['ngRoute', 'ngCookies', 'shipment', 'profile']);
panjivaBisModule.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider.when('/login', {
            templateUrl: 'common/view/login.tpl.html',
            controller: 'LoginController'
        });

        $routeProvider.when('/index', {
            templateUrl: 'common/view/index.tpl.html',
            controller: 'IndexController'
        });
        //na potrzeby developmentu
        $routeProvider.otherwise({
            redirectTo: '/shipment/import'
        });

        $locationProvider.hashPrefix('!');

        /* Intercept http errors */
        var interceptor = function ($rootScope, $q, $location) {

            function success(response) {
                return response;
            }

            function error(response) {

                var status = response.status;
                var config = response.config;
                var method = config.method;
                var url = config.url;

                if (status == 401) {
                    $location.path("/login");
                } else {
                    $rootScope.error = method + " on " + url + " failed with status " + status;
                }

                return $q.reject(response);
            }

            return function (promise) {
                return promise.then(success, error);
            };
        };
        $httpProvider.interceptors.push(interceptor);
    }]
)
    .constant('appConfiguration', {
        xAuthTokenHeaderName: 'x-auth-token'
    })
    .run(function ($rootScope, $http, $location, $cookieStore, appConfiguration, LoginService) {

        /* Reset error when a new view is loaded */
        $rootScope.$on('$viewContentLoaded', function () {
            delete $rootScope.error;
        });

        $rootScope.hasRole = function (role) {

            if ($rootScope.user === undefined) {
                return false;
            }

            if ($rootScope.user.roles[role] === undefined) {
                return false;
            }

            return $rootScope.user.roles[role];
        };

        $rootScope.logout = function () {
            delete $rootScope.user;
            delete $http.defaults.headers.common[appConfiguration.xAuthTokenHeaderName];
            $cookieStore.remove('user');
            $location.path("/login");
        };

        /* Try getting valid user from cookie or go to login page */
        var originalPath = $location.path();
        $location.path("/login");
        var user = $cookieStore.get('user');
        if (user !== undefined) {
            $rootScope.user = user;
            $http.defaults.headers.common[appConfiguration.xAuthTokenHeaderName] = user.token;

            $location.path(originalPath);
        }

    });
