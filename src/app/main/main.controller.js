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
    'image':'assets/images/suresh-rana.jpg',
    'thumbUrl': 'https://farm6.staticflickr.com/5830/20552523531_ef720cd2f1_s.jpg',
    'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg',
    'thumbUrl': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_s.jpg'
    },
    {name:'ram',
    'image':'assets/images/suresh-rana.jpg',
    'thumbUrl': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_s.jpg',
    'caption': 'The left and right arrow keys are binded for navigation. The escape key for closing the modal is binded by AngularUI Bootstrap.'
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
