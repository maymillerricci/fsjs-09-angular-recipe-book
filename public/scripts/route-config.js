
(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'RecipesController',
        controllerAs: 'vm',
        templateUrl: 'templates/recipes.html'
      })
      .when('/edit/:id', {
        controller: 'RecipeDetailController',
        controllerAs: 'vm',
        templateUrl: 'templates/recipe-detail.html'
      })
      .when('/add', {
        controller: 'RecipeDetailController',
        controllerAs: 'vm',
        templateUrl: 'templates/recipe-detail.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
