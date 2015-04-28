var annualPlanModule = angular.module('annualPlan', ['ngRoute', 'ngResource']);

annualPlanModule.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/plan/annual', {
            templateUrl: 'templates/annualplan/annual-plan-view.tpl.html',
            controller: 'AnnualPlanViewController'
        });
  }]);