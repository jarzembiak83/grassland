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
                orderNumber: 1
            }, {
                name : 'February',
                symbol : 'FEB',
                orderNumber: 2
            }, {
                name : 'March',
                symbol : 'MAR',
                orderNumber: 3
            }, {
                name : 'April',
                symbol : 'APR',
                orderNumber: 4
            }, {
                name : 'May',
                symbol : 'MAY',
                orderNumber: 5
            }, {
                name : 'June',
                symbol : 'JUN',
                orderNumber: 6
            }, {
                name : 'July',
                symbol : 'JUL',
                orderNumber: 7
            }, {
                name : 'August',
                symbol : 'AUG',
                orderNumber: 8
            }, {
                name : 'September',
                symbol : 'SEP',
                orderNumber: 9
            }, {
                name : 'October',
                symbol : 'OCT',
                orderNumber: 10
            }, {
                name : 'November',
                symbol : 'NOV',
                orderNumber: 11
            }, {
                name : 'December',
                symbol : 'DEC',
                orderNumber: 12
            }];
        
            $scope.daysOfMonth = function(monthOrderNumber) {
                var numberOfDays = new Date(parseInt($scope.year), monthOrderNumber, 0).getDate();
                var arrayOfDays = [];
                for (i = 1; i<= numberOfDays; i++) {
                    arrayOfDays.push(i);
                }
                
                return arrayOfDays;
            };
        }
    }
});