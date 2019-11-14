import angular from 'angular';

/**
 * 左侧菜单栏中控制子菜单展开收缩的按钮事件
 * @param $state
 * @returns {{link: link}}
 */
function menuCollapseExpand($state) {
  return {
    link: function ($scope, element, $attrs) {
      var $ele = angular.element(element);
      $ele.on('click', function () {
        if ($scope.subItem.rightIcon == 'fa-minus-square-o') {
          $scope.subItem.rightIcon = 'fa-plus-square-o';
          $scope.subItem.hiddenSubMenu = true;
          $scope.$apply();
        } else if ($scope.subItem.subMenu.length > 0) {
          $scope.subItem.rightIcon = 'fa-minus-square-o';
          $scope.subItem.hiddenSubMenu = false;
          let subMenu = $scope.subItem.subMenu[0];
          $state.go(subMenu.href);
        }
      })
    }
  }
}

menuCollapseExpand.$inject = ['$state'];
export default angular.module('directives.menu', [])
  .directive('menuCollapseExpand', menuCollapseExpand)
  .name;
