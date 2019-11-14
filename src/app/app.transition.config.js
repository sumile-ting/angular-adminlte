
transition.$inject = ['$rootScope', '$transitions', 'RefreshMenuConfigService']
/**
 * 路由到新页面前刷新左侧菜单
 * 路由到新页面前刷新lefNav变量控制顶部菜单的高亮
 * @param $rootScope
 * @param $transitions
 * @param RefreshMenuConfigService
 */
export default function transition($rootScope, $transitions, RefreshMenuConfigService) {
  $transitions.onBefore({}, function (trans) {
    let to = trans.$to().name;
    $rootScope.leftNav = {};
    RefreshMenuConfigService.refresh($rootScope.menuConfig, $rootScope.leftNav, to);
  })
}
