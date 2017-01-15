'use strict';

angular.module('app')
.controller('RecipeDetailController', function($scope, $location, dataService) {
  $scope.errors = [];

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

  $scope.updateRecipe = function() {
    dataService.updateRecipe($scope.recipe, 
      function(response) {
        $scope.errors = [];
      }, 
      function(response) {
        var errors = response.data.errors
        for(var error in errors) {
          var itemErrors = errors[error];
          for(var itemError in itemErrors) {
            $scope.errors.push(itemErrors[itemError])
          }
        }
      }
    );
  }

  $scope.showAllRecipes = function() {
    $location.path('/');
  }

  $scope.deleteIngredient = function($index) {
    $scope.recipe.ingredients.splice($index, 1);
  }

  $scope.addIngredient = function() {
    $scope.recipe.ingredients.push({
      foodItem: "", 
      condition: "", 
      amount: ""
    });
  }

  $scope.deleteStep = function($index) {
    $scope.recipe.steps.splice($index, 1);
  }

  $scope.addStep = function() {
    $scope.recipe.steps.push({ description: "" });
  }
});
