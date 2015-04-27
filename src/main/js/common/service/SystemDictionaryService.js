panjivaBisModule.factory("SystemDictionaryService", ['$resource',
  function ($resource) {
        return $resource('/api/resource/dictionary/system/:dictionaryName', {dictionaryName:'@dictionaryName'});
  }]);