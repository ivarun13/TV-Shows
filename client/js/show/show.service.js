angular.module('show.service', [])
	.factory('showService', function ($resource) {
		return $resource('/api/show/:id');
	});