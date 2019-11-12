import angular from "angular";

function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    template: '<h1>菜单1-1-1 Hello, {{name}}</h1>',
    link: function () {
      console.log('greeting link function');
    }
  }
}

export default angular.module('directives.greeting', [])
  .directive('greeting', greeting)
  .name;
