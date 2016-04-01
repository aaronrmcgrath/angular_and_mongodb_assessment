

myApp.controller('ViewHeroController', ['$scope', 'HeroService', function($scope, HeroService){
  var heroService = HeroService;

  heroService.initCall();

  heroService.getHeroes();
  console.log('* HEROES: ', heroService.heroes);

  $scope.heroesArray = heroService.heroes;
  console.log('heroesArray ===>: ', $scope.heroesArray);

}]);


myApp.controller('AddHeroController', ['$scope', 'HeroService', function($scope, HeroService){
  var heroObject = {};
  var heroService = HeroService;

  $scope.powerArray = ['Invisibility', 'Flight'];

  $scope.submit = function(data) {
    heroService.postHero(data);
  };

}]);
