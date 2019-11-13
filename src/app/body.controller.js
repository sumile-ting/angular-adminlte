import config from './menu.config';

export default class BodyController {
  constructor($scope, $state, $rootScope) {

      $scope.routeNav = function(router) {
         angular.forEach(config, function (conf) {
           if(conf.id == router && conf.subMenu.length > 0) {
              let subMenu = conf.subMenu[0];
              if(subMenu.isLeaf) {
                $state.go(subMenu.href);
              } else {
                if(subMenu.subMenu.length > 0)
                $state.go(subMenu.subMenu[0].href);
              }
           }
         })
      }

      $scope.hoverMenu = function (isHover) {
        $scope.isUserMenuHover = isHover;
      }

      $rootScope.menuConfig = config;
  }
}

BodyController.$inject = ['$scope', '$state', '$rootScope'];
