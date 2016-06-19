(function() {
  'use strict';

  angular
    .module('sureshRana')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
