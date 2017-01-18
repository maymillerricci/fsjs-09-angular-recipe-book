(function() {
  'use strict';

  angular.module('app')
  .controller('RecipesController', function($scope, $location, dataService) {
    dataService.getCategories(function(response) {
      $scope.categories = response.data;
      $scope.categories.unshift({ name: "All Categories" });
    });

    dataService.getRecipes(function(response) {
      $scope.recipes = response.data;
    });

    $scope.getRecipesByCategory = function(category) {
      if (category === "All Categories") {
        dataService.getRecipes(function(response) {
          $scope.recipes = response.data;
        });
      } else {
        dataService.getRecipesByCategory(category, function(response) {
          $scope.recipes = response.data;
        });
      }
    }

    $scope.newRecipe = function() {
      $location.path('/add');
    }

    $scope.editRecipe = function(recipeId) {
      $location.path('/edit/' + recipeId);
    }

    $scope.deleteRecipe = function(recipeId, $index) {
      var confirmDelete = confirm("Are you sure you want to delete this recipe?");
      if (confirmDelete) {
        dataService.deleteRecipe(recipeId, function(response) {
          $scope.recipes.splice($index, 1);
        });
      }
    }
  });
})();
