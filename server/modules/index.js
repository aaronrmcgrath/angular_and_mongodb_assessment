var express = require('express');
var router = express.Router();
var path = require('path');

// DB STUFF

router.get('/*', function(request, response) {
  var file = request.params[0] || '/views/index.html';
  response.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
