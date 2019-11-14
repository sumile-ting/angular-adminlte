import config from './menu.config';

export default class BodyController {
  constructor($scope, $state, $rootScope) {
    /**
     * 顶部菜单点击事件
     * @param router
     */
    $scope.routeNav = function (router) {
      angular.forEach(config, function (conf) {
        if (conf.id == router && conf.subMenu.length > 0) {
          let subMenu = conf.subMenu[0];
          if (subMenu.isLeaf) {
            $state.go(subMenu.href);
          } else {
            if (subMenu.subMenu.length > 0)
              $state.go(subMenu.subMenu[0].href);
          }
        }
      })
    }

    /**
     * 顶部右侧鼠标悬浮到用户图像上的事件
     * @param isHover
     */
    $scope.hoverMenu = function (isHover) {
      $scope.isUserMenuHover = isHover;
    }

    /**
     * 顶部左侧收缩左侧菜单的按钮点击事件
     */
    $scope.toggleLeftMenu = function () {

    }

    $rootScope.menuConfig = config;
  }
}

BodyController.$inject = ['$scope', '$state', '$rootScope'];
