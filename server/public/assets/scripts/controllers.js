

myApp.controller('ViewHeroController', ['$scope', 'HeroService', function($scope, HeroService){

  var heroService = HeroService;

  console.log('View working!');

  heroService.initCall();

  heroService.getHeroes();
  console.log('* HEROES: ', heroService.heroes);

  $scope.heroesArray = heroService.heroes;
  console.log('heroesArray ===>: ', $scope.heroesArray);

  $scope.heroID = function(object) {
    console.log(object._id);
    heroService.deleteHero(object._id);
  };

}]);


myApp.controller('AddHeroController', ['$scope', 'HeroService', function($scope, HeroService){
  var heroObject = {};
  var heroService = HeroService;

  $scope.powerArray = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  $scope.submit = function(data) {
    heroService.postHero(data);
  };

}]);
