var config = require('../config.json');
var superagent = require('superagent');
var async = require('async');

module.exports = function(app) {

	app.get('/api/character/search', function(req, res){
		superagent
		.get(config.comicvine.url + '/search/shows')
		.query({ q:  req.query.name })
		.query({ format: 'json' })
		.end(function(err, result){
			//console.log(result.body[0].show.name);
			//console.log(result.body);
			res.json(result.body);
		})
	});

    app.get('/api/show/:id', function(req, res){
		superagent
		.get(config.comicvine.url + '/shows/' +req.params.id)
		.query({ embed:  'cast' })
		.query({ format: 'json' })
		.end(function(err, result){
			console.log(req.params.id);
			console.log(result.body);
			res.json(result.body);
		})
	})
};



