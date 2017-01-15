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

  $scope.showAllRecipes = function() {
    $location.path('/');
  }
});
