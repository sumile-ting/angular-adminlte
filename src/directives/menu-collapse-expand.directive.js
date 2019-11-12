import angular from 'angular';

function menuCollapseExpand($state) {
  return {
    link: function ($scope, element, $attrs) {
      var $ele = angular.element(element);
      $ele.on('click', function () {
        console.log('menu ele click function');
        var $ele_i = angular.element($ele.children('i')[1]);
        if($ele_i.hasClass('fa-minus-square-o')) {
          $ele_i.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
          $ele.next('ul').addClass('ng-hide');
        } else if($ele_i.hasClass('fa-plus-square-o')) {
          var siblings = $ele.parent().parent().children();
          angular.forEach(siblings, function (sibling) {
             var $sibling = angular.element(sibling);
             if($sibling.hasClass('navmenu-submenu')) {
               var $iParent = angular.element($sibling.children()[0]);
               var $ele_icon = angular.element($iParent.children('i')[1]);
               var $uiDom = angular.element($sibling.children()[1]);
               $ele_icon.removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
               $uiDom.addClass('ng-hide');
             }
          })
          $ele_i.addClass('fa-minus-square-o').removeClass('fa-plus-square-o');
          $ele.next('ul').removeClass('ng-hide');
          let $aParent = angular.element($ele.next('ul').children()[0]);
          let hrefVal = $aParent.children().attr('ui-sref');
          $state.go(hrefVal);
        } else {
          var $aDom = angular.element($ele.children()[1]);
          let hrefVal = $aDom.attr('ui-sref');
          $state.go(hrefVal);
        }
      })
    }
  }
}
menuCollapseExpand.$inject = ['$state'];
export default angular.module('directives.menu', [])
  .directive('menuCollapseExpand', menuCollapseExpand)
  .name;
