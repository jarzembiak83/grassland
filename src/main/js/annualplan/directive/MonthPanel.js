annualPlanModule.directive('monthPanel', function(){
    return {
        restrict: 'E',
        scope: {
            month: '='
        },
        require: "^monthsSection",
        templateUrl: '/templates/annualplan/month-panel.tpl.html',
        link : function (scope, element, attrs, monthsCtrl) {
            scope.daysOfMonth = monthsCtrl.calculateDaysOfMonth(scope.month.orderNumber);
            
            scope.emptyDaysRange = monthsCtrl.calculateEmptyDaysRange(scope.month.orderNumber);
        }
    }
});