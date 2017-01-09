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

  this.updateRecipe = function(recipeId, callback) {
    // need to also add recipe data to update
    $http.put('/api/recipes/' + recipeId)
    .then(callback);
  }

  this.createRecipe = function(callback) {
    // need to add recipe data to create
    $http.post('/api/recipes')
    .then(callback);
  }

  this.deleteRecipe = function(recipeId, callback) {
    $http.delete('/api/recipes/' + recipeId)
    .then(callback);
  }
});
