routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('menu2-1-1', {
    url: '/menu2-1-1',
    template: require('./home.html')
  })
}
