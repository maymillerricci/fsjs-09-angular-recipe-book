'use strict';

angular.module('app')
.controller('RecipesController', function($scope, dataService) {
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
});
