export default class BodyController {
  constructor($scope, $state) {

      $scope.routeNav = function(router) {
         $state.go(router + '-1-1');
      }
  }
}

BodyController.$inject = ['$scope', '$state'];
