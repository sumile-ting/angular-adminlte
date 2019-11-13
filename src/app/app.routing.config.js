routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/menu1-1-1');
  $locationProvider.html5Mode(true);
}

