console.log('Hey, this is working!');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/herolist', {
        templateUrl: '/views/routes/herolist.html',
        controller: 'ViewHeroController'
      }).
      when('/heroentry', {
        templateUrl: '/views/routes/heroentry.html',
        controller: 'AddHeroController'
      }).
      otherwise({
        redirectTo: '/herolist'
      });
}]);
