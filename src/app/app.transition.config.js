
transition.$inject = ['$rootScope', '$transitions']

export default function transition($rootScope, $transitions) {
  $transitions.onBefore({}, function (trans) {
    let to = trans.$to().name;
    $rootScope.leftNav = {};
    $rootScope.leftNav[to.split('-')[0]] = true;
  })
}
