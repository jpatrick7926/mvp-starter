var express = require('express');
var bodyParser = require('body-parser');
var probasketball = require('probasketball-api');
var request = require('request');
var $ = require('jQuery');


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');

var client = probasketball.connect('WxzV8Iv5QJ1RqYAanGsFTdkou4fU9SNl', { version: 'v2' });
// console.log('hello in server!');
// client.players.fetchAll(function(err, resp, body) {
//   // body will be an array of every player
//   console.log(body);
// });

request({
  type: 'GET',
  url: 'https://api.mysportsfeeds.com/v1.1/pull/nba/current/cumulative_player_stats.json',
  player:'stephen curry',
  limit: 5,
  success: (data) => {
    console.log('hello in the get');
    console.log(data);
  },
  error: (err) => {
    console.log('error', err);
  }
})

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/items', function (req, res) {

  request({
    type: 'GET',
    url: 'https://api.mysportsfeeds.com/v1.1/pull/nba/current/cumulative_player_stats.json',
    player:'stephen curry',
    limit: 5,
    success: (data) => {
      console.log('hello in the get');
      console.log(data);
    },
    error: (err) => {
      console.log('error', err);
    }
  });

  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
