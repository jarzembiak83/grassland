panjivaBisModule.factory("LoginService", ['$resource',
  function ($resource) {
        return $resource('/api/authenticate', {},
			{
				authenticate: {
					method: 'POST',
					headers : {'Content-Type': 'application/x-www-form-urlencoded'}
				}
			}
		);
  }]);