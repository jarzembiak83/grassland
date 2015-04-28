annualPlanModule.controller('AnnualPlanViewController', [ '$scope',
        function($scope) {
            $scope.annualPlanColumns = 35;
            $scope.actualYear = new Date().getFullYear();
            $scope.months = [ {
                name : 'January',
                symbol : 'JAN'
            }, {
                name : 'February',
                symbol : 'FEB'
            }, {
                name : 'March',
                symbol : 'MAR'
            }, {
                name : 'April',
                symbol : 'APR'
            }, {
                name : 'May',
                symbol : 'MAY'
            }, {
                name : 'June',
                symbol : 'JUN'
            }, {
                name : 'July',
                symbol : 'JUL'
            }, {
                name : 'August',
                symbol : 'AUG'
            }, {
                name : 'September',
                symbol : 'SEP'
            }, {
                name : 'October',
                symbol : 'OCT'
            }, {
                name : 'November',
                symbol : 'NOV'
            }, {
                name : 'December',
                symbol : 'DEC'
            }];
            
            $scope.daysOfMonth = function(monthIndex) {
                var numberOfDays = new Date($scope.actualYear, monthIndex, 0).getDate();
                var arrayOfDays = [];
                for (i = 1; i<= numberOfDays; i++) {
                    arrayOfDays.push(i);
                }
                
                return arrayOfDays;
            };

        } ]);