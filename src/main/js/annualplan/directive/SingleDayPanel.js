annualPlanModule.directive('singleDayPanel', function(){
    return {
        restrict: 'E',
        scope: {
            day: '=?'
        },
        templateUrl: '/templates/annualplan/single-day-panel.tpl.html',
        link : function (scope) {
            scope.isWeekendDay = function() {
                return (scope.day.date.getDay() % 6 == 0);
            };
            
            scope.isEmptyDay = function() {
                return (scope.day);
            };
        }
    }
});