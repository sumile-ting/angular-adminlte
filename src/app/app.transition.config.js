
transition.$inject = ['$rootScope', '$transitions', 'RefreshMenuConfigService']

export default function transition($rootScope, $transitions, RefreshMenuConfigService) {
  $transitions.onBefore({}, function (trans) {
    let to = trans.$to().name;
    $rootScope.leftNav = {};
    RefreshMenuConfigService.refresh($rootScope.menuConfig, $rootScope.leftNav, to);
  })
}
