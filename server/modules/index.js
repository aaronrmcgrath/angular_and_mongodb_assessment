var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('./db.js');
var Heroes = require('../models/heroes.js');

// DB STUFF

router.get('/heroes', function(request, response){
  Heroes.find({}, function(err, data){
    if(err){
      console.log(err);
    }

    response.send(data);
  });
});


router.post('/heroes', function(request, response){
  console.log(request.body);

  var addedHero = new Heroes({
    alias: request.body.alias,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    city: request.body.city,
    power_name: request.body.power_name
  });

  addedHero.save(function(err, data){
    if(err) {
      console.log(err);
    }

    response.send(data);
  });
});


router.delete('/heroes', function(request, response){
  Heroes.findOne({ _id: request.body._id }).remove();
});



router.get('/*', function(request, response) {
  var file = request.params[0] || '/views/index.html';
  response.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
