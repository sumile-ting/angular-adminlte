routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider.state('menu1-2', {
    url: '/menu1-2',
    template: require('./home.html')
  })
}
