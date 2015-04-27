profileModule.controller('ProfileDetailsController', ['$scope', 'ProfileDetailsService', 'SystemDictionaryService', function ($scope, ProfileDetailsService, SystemDictionaryService) {
         $scope.profileDetails = ProfileDetailsService.get();
    
        $scope.materials = SystemDictionaryService.query({dictionaryName:'dict1'});
    }
]);