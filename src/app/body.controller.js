import config from './menu.config';

export default class BodyController {
  constructor($scope, $state) {

      $scope.routeNav = function(router) {
         $state.go(router + '-1-1');
      }

      $scope.hoverMenu = function (isHover) {
        $scope.isUserMenuHover = isHover;
      }

      $scope.menuConfig = config;
  }
}

BodyController.$inject = ['$scope', '$state'];
