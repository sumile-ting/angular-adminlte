routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('menu1-2-1', {
    url: '/menu1-2-1',
    template: require('./home.html')
  })
}
