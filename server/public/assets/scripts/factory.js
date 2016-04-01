

myApp.factory('HeroService', ['$http', function($http){
  var heroes = {};

  var getHeroes = function() {
    $http.get('/heroes').then(function(response){
      heroes.data = response.data;
      console.log('Here is heroes object: ', heroes.data);
      return heroes.data;
    });
  };


  var postHero = function(data){
    $http.post('/heroes', data).then(function(response) {
      console.log('Hero Post to Server: ', response.data);
    });
  };


  var initCall = function() {
    if(heroes.data === undefined) {
      $http.get('/heroes').then(function(response){
        heroes.data = response.data;
      });
    }
  };


  var deleteHero = function(data) {
    $http.delete('/heroes', data).then(function(response){
      console.log('REMOVED HERO: ', response.data);
    });
  };


  return {
    postHero: postHero,
    getHeroes: getHeroes,
    heroes: heroes,
    deleteHero: deleteHero,
    initCall: initCall
  }

}]);
