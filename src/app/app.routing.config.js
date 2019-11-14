import config from './menu.config';

routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  /**
   * 默认路由从配置中读取
   */
  if(config.length > 0 && config[0].subMenu.length > 0) {
    let subConf = config[0].subMenu[0];
    if(subConf.isLeaf) {
      $urlRouterProvider.otherwise(subConf.href);
    } else if(subConf.subMenu && subConf.subMenu.length > 0){
      $urlRouterProvider.otherwise(subConf.subMenu[0].href)
    } else {
      $urlRouterProvider.otherwise('/');
    }
  }
  $locationProvider.html5Mode(true);
}

