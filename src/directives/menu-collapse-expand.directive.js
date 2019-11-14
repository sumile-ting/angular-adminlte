import angular from 'angular';

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
