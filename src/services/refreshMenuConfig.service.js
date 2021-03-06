import angular from 'angular';

/**
 * 刷新menuConfig变量，以改变左侧菜单显示
 * 刷新leftNav变量，以改变顶部菜单高亮状态
 */
export default class RefreshMenuConfig {
  refresh(menuConfig, leftNav, routeName) {
    angular.forEach(menuConfig, function (config) {
      var secondLevelMenu = config.subMenu;
      angular.forEach(secondLevelMenu, function (secondLevelConfig) {
        if (!secondLevelConfig.isLeaf) {
          secondLevelConfig.hiddenSubMenu = true;
          secondLevelConfig.rightIcon = 'fa-plus-square-o';
          var thirdLevelMenu = secondLevelConfig.subMenu;
          angular.forEach(thirdLevelMenu, function (thirdLevelConfig) {
            if (thirdLevelConfig.href == routeName) {
              leftNav[config.id] = true;
              secondLevelConfig.hiddenSubMenu = false;
              secondLevelConfig.rightIcon = 'fa-minus-square-o'
            }
          })
        } else {
          if (secondLevelConfig.href == routeName) {
            leftNav[config.id] = true;
          }
        }
      })
    })
  }
}
