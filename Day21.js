const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    let ingredient_a = recipe.ingredients[0];
    let ingredient_b = recipe.ingredients[1];
    
    if ((bakeryA.includes(ingredient_a) && bakeryB.includes(ingredient_b)) ||
        (bakeryA.includes(ingredient_b) && bakeryB.includes(ingredient_a))) {
      return recipe.name;
    }
  }
};
