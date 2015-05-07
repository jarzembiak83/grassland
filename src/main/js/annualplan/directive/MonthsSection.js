annualPlanModule.directive('monthsSection', function(){
    return {
        restrict: 'E',
        scope: {
            year: '='
        },
        templateUrl: '/templates/annualplan/months-section.tpl.html',
        controller: function ($scope) {
            this.calculateDaysOfMonth = function(monthOrderNumber) {
                var seletedMonthDate = new Date(parseInt($scope.year), monthOrderNumber, 1);
                var arrayOfDays = [];
                while (seletedMonthDate.getMonth() == monthOrderNumber) {
                    var day = {date: new Date(seletedMonthDate)};
                    arrayOfDays.push(day);
                    seletedMonthDate.setDate(seletedMonthDate.getDate() + 1);
                }
                return arrayOfDays;
            };
            
            this.calculateEmptyDaysRange = function(monthOrderNumber) {
                var firstDayOfMonth = new Date(parseInt($scope.year), monthOrderNumber, 1);
                var emptyDaysRange = [];
                for(var i=0;i<firstDayOfMonth.getDay();i++) {
                    emptyDaysRange.push(i);
                  }
                
                return emptyDaysRange;
            };
        },
        link : function (scope) {
            scope.months = [ {
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
        }
    }
});