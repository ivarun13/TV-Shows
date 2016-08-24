angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service', 'show.controller', 'show.service','firebase','ngCookies','ui.bootstrap'])
  .filter('trustHTML', function($sce) {
    return function(text){
      return $sce.trustAsHtml(text);
    };
  })
  .config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {

      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        
        .when('/show/:id', {
          templateUrl: 'views/show.html',
          controller:'showController',
          resolve: {
            show: function($route, showService){
              return showService.get({ id: $route.current.params.id})
           
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider.html5Mode(true);
  }]);
