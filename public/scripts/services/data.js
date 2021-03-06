(function() {
  'use strict';

  angular.module('app')
  .service('dataService', function($http) {
    this.getRecipes = function(callback) {
      $http.get('/api/recipes')
      .then(callback);
    }

    this.getRecipesByCategory = function(category, callback) {
      $http.get('/api/recipes?category=' + category)
      .then(callback);
    }

    this.getRecipe = function(recipeId, callback) {
      $http.get('/api/recipes/' + recipeId)
      .then(callback);
    }

    this.getCategories = function(callback) {
      $http.get('/api/categories')
      .then(callback);
    }

    this.getFoodItems = function(callback) {
      $http.get('/api/fooditems')
      .then(callback);
    }

    this.createRecipe = function(recipe, successCallback, errorCallback) {
      $http.post('/api/recipes', recipe)
      .then(successCallback, errorCallback);
    }

    this.updateRecipe = function(recipe, successCallback, errorCallback) {
      $http.put('/api/recipes/' + recipe._id, recipe)
      .then(successCallback, errorCallback);
    }

    this.deleteRecipe = function(recipeId, callback) {
      $http.delete('/api/recipes/' + recipeId)
      .then(callback);
    }
  });
})();
