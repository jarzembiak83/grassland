annualPlanModule.directive('monthPanels', function(){
    return {
        restrict: 'E',
        scope: {
            year: '@'
        },
        templateUrl: '/templates/annualplan/month-panels.tpl.html',
        controller: function($scope) {
            $scope.months = [ {
                name : 'January',
                symbol : 'JAN',
                orderNumber: 0
            }, {
                name : 'February',
                symbol : 'FEB',
                orderNumber: 1
            }, {
                name : 'March',
                symbol : 'MAR',
                orderNumber: 2
            }, {
                name : 'April',
                symbol : 'APR',
                orderNumber: 3
            }, {
                name : 'May',
                symbol : 'MAY',
                orderNumber: 4
            }, {
                name : 'June',
                symbol : 'JUN',
                orderNumber: 5
            }, {
                name : 'July',
                symbol : 'JUL',
                orderNumber: 6
            }, {
                name : 'August',
                symbol : 'AUG',
                orderNumber: 7
            }, {
                name : 'September',
                symbol : 'SEP',
                orderNumber: 8
            }, {
                name : 'October',
                symbol : 'OCT',
                orderNumber: 9
            }, {
                name : 'November',
                symbol : 'NOV',
                orderNumber: 10
            }, {
                name : 'December',
                symbol : 'DEC',
                orderNumber: 11
            }];
        
            $scope.daysOfMonth = function(monthOrderNumber) {
            	var seletedMonthDate = new Date(parseInt($scope.year), monthOrderNumber, 1);
                var arrayOfDays = [];
                while (seletedMonthDate.getMonth() == monthOrderNumber) {
                	var day = {dayOfMonth: seletedMonthDate.getDate(), dayOfWeek:(seletedMonthDate.getDay())};
                	arrayOfDays.push(day);
                	seletedMonthDate.setDate(seletedMonthDate.getDate() + 1);
                }
                
                return arrayOfDays;
            };
        }
    }
});