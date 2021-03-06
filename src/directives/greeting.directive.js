import angular from "angular";

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>菜单1-1-1 页面内容, {{name}}</h1>'
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
