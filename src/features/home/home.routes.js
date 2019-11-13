routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('menu1-1-1', {
    url: '/menu1-1-1',
    template: require('./home.html'),
    controller: 'HomeController',
    controllerAs: 'home'
  })
}
