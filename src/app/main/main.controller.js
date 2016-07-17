(function() {
  'use strict';

  angular
    .module('sureshRana')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.records=[
    {name:'Suresh Rana',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'Suresh Rana',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg'
    }
    ]
    vm.classAnimation = '';
    vm.creationDate = 1466334639926;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
