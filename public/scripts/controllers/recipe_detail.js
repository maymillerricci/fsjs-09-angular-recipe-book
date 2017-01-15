'use strict';

angular.module('app')
.controller('RecipeDetailController', function($scope, $location, dataService) {
  if ($location.path() === '/add') {
    $scope.mode = 'add';
  } else {
    $scope.mode = 'edit';
    var recipeId = $location.path().split('/').slice(-1)[0];
    dataService.getRecipe(recipeId, function(response) {
      $scope.recipe = response.data;
    });
  }

  dataService.getCategories(function(response) {
    $scope.categories = response.data;
  });

  dataService.getFoodItems(function(response) {
    $scope.foodItems = response.data;
  });

  $scope.updateRecipe = function(recipe) {
    dataService.updateRecipe(recipe._id, function(response) {
      alert('updated');
    });
  }

  $scope.showAllRecipes = function() {
    $location.path('/');
  }

  $scope.deleteIngredient = function($index) {
    $scope.recipe.ingredients.splice($index, 1);
  }

  $scope.addIngredient = function() {
    // figure this out
    $scope.recipe.ingredients.push(null);
  }
});
