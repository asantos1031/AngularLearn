import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Eggs', 'Scrambled eggs',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Eggs', 'Onions', 'tomatoes']),
    new Recipe('Ham', 'Scrambled ham',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Ham', 'Oil', 'Pasta']),
    new Recipe('Bacon', 'Scrambled bacon',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Bacon', 'Salt', 'Pepper']),
    new Recipe('Cheese', 'Scrambled cheese',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg',
      ['Cheese', 'Blue Cheese', 'Parmesan Cheese'])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  public getRecipes() {
    return this.recipes.slice();
  }
}
