panjivaBisModule.controller('LoginController', ['$scope', '$rootScope', '$location', '$http', '$cookieStore', 'appConfiguration', 'LoginService',
 function ($scope, $rootScope, $location, $http, $cookieStore, appConfiguration, LoginService) {
        //na potrzeby developmentu
        $scope.username = 'mj';
        $scope.password = 'mj';

        $scope.login = function () {
            LoginService.authenticate($.param({
                username: $scope.username,
                password: $scope.password
            }), function (user) {
                $rootScope.user = user;
                $http.defaults.headers.common[appConfiguration.xAuthTokenHeaderName] = user.token;
                $cookieStore.put('user', user);
                $location.path("/");
            });
        }
 }]);