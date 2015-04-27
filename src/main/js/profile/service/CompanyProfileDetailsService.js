profileModule.factory("ProfileDetailsService", ['$resource',
  function ($resource) {
        return $resource('/api/resource/profile/details');
  }]);